import {
    makeNavMenu,
    makeRainbowBG,
    makeCMDPalatte,
    makeHeadingBar,
    formatTime,
    getRecentResult,
} from "/js/master.js";

import { activities } from "/js/activities.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const activity = activities[params.activity];
const set = activity.sets[params.set];
console.log(set);

function makeHomePage() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("activity");
    let recentResult = getRecentResult(params.activity, params.set);
    let details =
        recentResult !== null
            ? `
                <div class="details">
                    Last completed: ${formatTime(recentResult.time)}<br>
                    <a href="results.html">See results</a>
                </div>`
            : "";
    wrapper.innerHTML = `<button class="grey-btn start-btn" onclick="start();">Start</button>${details}`;
    document.querySelector(".content").appendChild(wrapper);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    const question = set.questions[question_id];
    console.log(question);
    var audio = new Audio(`../audio/ipa-sw-b.m4a`);
    audio.play();
    const activity = document.createElement("div");
    activity.classList.add("activity", "fadein");
    activity.innerHTML = `<h1>${question.name}</h1>
    <button class="text-btn">
        <h2>Click the picture that starts with this sound:</h2>
        <img src="images/playsound.png" alt="">
    </button>`;
    const answers = document.createElement("div");
    answers.classList.add("answers");
    const shuffledPrompts = [...question.prompts];
    shuffle(shuffledPrompts);
    let wrap = document.createElement("div");
    for (const prompt of shuffledPrompts) {
        let btn = document.createElement("button");
        btn.innerHTML = `<img src="${"../" + prompt}" alt="${
            prompt.split("/").reverse()[0].split(".")[0]
        }"'></img>`;
        wrap.appendChild(btn);
        if (wrap.children.length >= 2) {
            answers.appendChild(wrap);
            wrap = document.createElement("div");
        }
    }
    activity.appendChild(answers);

    // <div class="answers">
    //     <div>
    //         <button><img src="images/image prompts/baby.jpg" alt="picture"><img src="images/right.png" alt="" class="marking"></button>

    //         <button><img src="images/image prompts/plant.jpg" alt="picture"><img src="images/wrong.png" alt="" class="marking"></button>
    //     </div>
    //     <div>
    //         <button></button>
    //         <button><img src="images/image prompts/fox.jpg" alt="picture"></button>
    //     </div>
    // </div>`
    document.querySelector(`.content`).appendChild(activity);
}

function clearPage() {
    for (const child of document.querySelector(".content").children) {
        child.classList.add("fading");
        setTimeout(() => child.parentNode.removeChild(child), 500);
    }
}

async function start() {
    clearPage();
    await sleep(500);
    console.log('slept');
    makeQuestion(0)
}
document.start = start;

makeHomePage();
makeNavMenu();
makeRainbowBG();
makeCMDPalatte();
makeHeadingBar(set.name, activity.name);
