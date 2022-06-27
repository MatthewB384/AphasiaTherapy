import {
    makeNavMenu,
    makeRainbowBG,
    makeCMDPalatte,
    makeHeadingBar,
} from "/js/master.js";

import { activities } from "/js/activities.js";

function makeActivityCards() {
    const cards = document.createElement("div");
    cards.classList.add("activity-select-cards");
    for (const [key, activity] of Object.entries(activities)) {
        let card = document.createElement("a");
        card.classList.add("card");
        if (activity.sets.length > 0) {
            card.href = `activity.html?activity=${encodeURIComponent(key)}`;
            card.innerHTML = `<div><h1>${activity.abbr}</h1><p>${activity.name}</p></div><div class="arrow"></div>`;
        } else {
            card.innerHTML = `<div><h1>${activity.abbr}</h1><p>${activity.name}</p></div>`;
        }
        console.log(card);
        cards.appendChild(card);
    }
    document.querySelector(".content").appendChild(cards);
}

makeNavMenu();
makeRainbowBG();
makeCMDPalatte(false, true);
makeHeadingBar("Home", "Choose an activity");
makeActivityCards();
