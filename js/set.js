import {
    makeNavMenu,
    makeRainbowBG,
    makeCMDPalatte,
    makeHeadingBar,
    formatTime,
    getRecentResult,
    Result,
} from "/js/master.js";

import { activities } from "/js/activities.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const activity = activities[params.activity];
const set = activity.sets[params.set];
let startLock = false;
let clickLock = false;
let contLock = false;
let score = 0;
const playingsounds = [];

function makeHomePage() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("activity");
    let recentResult = getRecentResult(params.activity, params.set);
    wrapper.innerHTML = `<button class="grey-btn start-btn blue">Start</button>${
        recentResult !== null
            ? `
            <div class="details">
                Last completed: ${formatTime(recentResult.time)}<br>
                <a href="results.html">See results</a>
            </div>`
            : ""
    }`;
    wrapper.children[0].onclick = () => start();
    document.querySelector(".content").appendChild(wrapper);
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function makeQuestion(question_id) {
    const question = set.qs[question_id];
    const activity = document.createElement("div");
    activity.classList.add("activity", "fadein");
    activity.innerHTML = `<h1>${question.name}/${set.qs.length}</h1>
    <button class="text-btn">
        <h2>Click the picture that starts with this sound:</h2>
        <img src="images/playsound.png" alt="">
    </button>`;
    activity.children[1].onclick = function () {
        playSound(question);
    };
    const answers = document.createElement("div");
    answers.classList.add("answers");
    const shuffledPrompts = [...question.prompts];
    shuffle(shuffledPrompts);
    let wrap = document.createElement("div");
    for (const prompt of shuffledPrompts) {
        let btn = document.createElement("button");
        btn.classList.add("answer");
        btn.innerHTML = `<img src="${"../" + prompt}" alt="${
            prompt.split("/").reverse()[0].split(".")[0]
        }"'></img>`;
        btn.onclick = function () {
            answer(this, question_id);
        };
        wrap.appendChild(btn);
        if (wrap.children.length >= 2) {
            answers.appendChild(wrap);
            wrap = document.createElement("div");
        }
    }

    activity.appendChild(answers);
    document.querySelector(`.content`).appendChild(activity);
    playSound(question);
}

function playSound(question) {
    let sound = new Audio("../" + question.soundfile);
    sound.play();
    for (const sd of playingsounds) {
        sd.pause();
    }
    playingsounds.length = 0;
    playingsounds.push(sound);
}

async function answer(elem, question_id) {
    if (clickLock) {
        return;
    }
    clickLock = true;
    const question = set.qs[question_id];
    const options = [...elem.parentNode.parentNode.children]
        .map((e) => [...e.children])
        .flat(1);
    const correctOption = options.filter((c) =>
        decodeURIComponent(c.children[0].src).includes(question.correctimage)
    )[0];
    const correctImg = document.createElement("img");
    correctImg.classList.add("marking", "fadein");
    correctImg.src = "images/right.png";
    correctImg.alt = "This answer is correct";
    correctOption.appendChild(correctImg);
    if (elem != correctOption) {
        const incorrectImg = document.createElement("img");
        incorrectImg.classList.add("marking", "fadein");
        incorrectImg.src = "images/wrong.png";
        incorrectImg.alt = "This answer is incorrect";
        elem.appendChild(incorrectImg);
    } else {
        score += 1;
    }
    const continueBtn = document.createElement("button");
    continueBtn.classList.add(
        "grey-btn",
        "cmd-btn",
        "blue",
        "continue-btn",
        "fadein"
    );
    continueBtn.innerHTML = `<h1>Continue</h1> <div class="arrow"></div>`;
    continueBtn.onclick = () => cont(question_id + 1);
    document.querySelector(`.content`).appendChild(continueBtn);
}

function clearPage() {
    for (const child of document.querySelector(".content").children) {
        child.classList.add("fading");
        setTimeout(() => child.parentNode.removeChild(child), 400);
    }
    return new Promise((resolve) => setTimeout(resolve, 400)); //allows to be awaited
}

async function start() {
    if (startLock) {
        return;
    }
    startLock = true;
    score = 0;
    await clearPage();
    makeQuestion(0);
    startLock = false;
}

async function cont(question_id) {
    if (contLock) {
        return;
    }
    contLock = true;
    await clearPage();
    clickLock = false;
    if (question_id < set.qs.length) {
        makeQuestion(question_id);
    } else {
        finish();
    }
    contLock = false;
}

function makeResultsPage() {
    const activity = document.createElement("div");
    activity.classList.add("activity");
    activity.innerHTML = `
    <h1>Activity complete!</h1>
    <h2>You scored ${score}/10</h2><br>
    <div class="gap-1">
        <button class="grey-btn cmd-btn">Attempt again</button>
        <a href="activity.html?activity=${params.activity}">
            <button class="grey-btn cmd-btn blue"><b>Return Home</b></button>
        </a>
    </div>`;
    activity.children[3].children[0].onclick = function () {
        start();
    };
    document.querySelector(".content").appendChild(activity);
}

function finish() {
    makeResultsPage();
    let results = JSON.parse(window.localStorage.getItem("results"));
    results.push(new Result(Date.now(), params.activity, params.set, score));
    window.localStorage.setItem("results", JSON.stringify(results));
}

makeHomePage();
makeNavMenu();
makeRainbowBG();
makeHeadingBar(set.name, activity.name);
