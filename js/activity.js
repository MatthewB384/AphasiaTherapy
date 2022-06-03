import {
    makeNavMenu,
    makeRainbowBG,
    makeCMDPalatte,
    makeHeadingBar,
} from "/js/master.js";

import { activities } from "/js/activities.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let activity = activities[params.activity];

function makeSetCards() {
    const setCards = document.createElement("div");
    setCards.classList.add("set-cards");
    for (const [key, set] of Object.entries(activity.sets)) {
        let card = document.createElement("div");
        card.classList.add("set-card");
        card.innerHTML = `
        <a href="set.html?set=set%201" class="card">${set.name}</a>
        <div class="three-lines">
            <span></span><span></span><span></span>
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
