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

function showDetails(threelines) {
    let panel = threelines.nextElementSibling;
    if (panel.classList.toggle("open")) {
        panel.style.display = "block";
        setTimeout(() => {
            panel.style.maxWidth = "13rem";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }, 5);
    } else {
        panel.style.maxWidth = "0rem";
        panel.style.maxHeight = "0rem";
        setTimeout(() => (panel.style.display = "none"), 180);
    }
}
document.showDetails = showDetails;

function makeSetCards() {
    const setCards = document.createElement("div");
    setCards.classList.add("set-cards");
    for (const [key, set] of Object.entries(activity.sets)) {
        let card = document.createElement("div");
        card.classList.add("set-card");

        let recentResult = getRecentResult(params.activity, key);
        if (recentResult !== null) {
            var details = `
            Last completed: ${formatTime(recentResult.time)}<br>
            Last score: ${
                recentResult.results.filter((r) => r.chosen_answer == "3")
                    .length
            } / 10<br>
            <a href="results.html">See Results</a>`;
        } else {
            var details = `
            This activity has not been completed yet`;
        }
        card.innerHTML = `
        <a href="set.html?activity=${params.activity}&set=${key}" class="card">${set.name}<div class="arrow"></div></a>
        <button class="three-lines" onclick=showDetails(this) tabindex="0">
            <span></span><span></span><span></span>
        </button>
        <div class="details">
            <div class="inner">${details}</div>
        </div>`;
        setCards.appendChild(card);
    }
    document.querySelector(".content").appendChild(setCards);
}

makeNavMenu();
makeRainbowBG();
makeCMDPalatte();
makeHeadingBar(activity.abbr, activity.name);
makeSetCards();
