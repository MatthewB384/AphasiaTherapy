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

function makeHomePage() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("start-page");
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

function clearPage() {
    document.querySelector(".content").children.forEach((e) => console.log(e));
}

function start() {
    clearPage();
}
document.start = start;

makeHomePage();
makeNavMenu();
makeRainbowBG();
makeCMDPalatte();
makeHeadingBar(set.name, activity.name);
