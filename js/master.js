import { activities } from "/js/activities.js";

const main = document.querySelector("main");

const navmenu_timeouts = [];
function open_navmenu() {
    const navmenu = document.querySelector(".navmenu");
    navmenu.style.display = "block"; //closed popups have display none
    setTimeout(() => navmenu.classList.add("open"), 3); //has to be a settimeout otherwise the transition doesnt play
    for (const id of navmenu_timeouts) {
        clearTimeout(id);
    }
}
function close_navmenu() {
    const navmenu = document.querySelector(".navmenu");
    navmenu.classList.remove("open");
    for (const id of navmenu_timeouts) {
        clearTimeout(id);
    }
    navmenu_timeouts.push(
        setTimeout(() => {
            navmenu.style.display = "none";
        }, 550)
    );
}
document.open_navmenu = open_navmenu;
document.close_navmenu = close_navmenu;
function open_navmenu_sect(btn) {
    let panel = btn.parentNode.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.classList.add("open");
    btn.classList.add("open");
    btn.innerHTML = "&#x25B2";
}
function close_navmenu_sect(btn) {
    let panel = btn.parentNode.nextElementSibling;
    btn.blur();
    panel.style.maxHeight = 0;
    btn.classList.remove("open");
    panel.classList.remove("open");
    btn.innerHTML = "&#9660";
}
function toggle_navmenu_sect(btn) {
    let panel = btn.parentNode.nextElementSibling;
    if (panel.classList.contains("open")) {
        close_navmenu_sect(btn);
    } else {
        open_navmenu_sect(btn);
    }
}
export function makeNavMenu() {
    const navmenu = document.createElement("ul");
    navmenu.classList.add("navmenu", "collapsable");
    navmenu.id = "navmenu";

    function addListItem(name, link, bezel = true) {
        let activity_btn = document.createElement("li");
        activity_btn.innerHTML = `<a ${
            bezel ? 'class="bezel"' : ""
        }href=${link}>${name}</a>`; //activity.abbr
        navmenu.appendChild(activity_btn);
        return activity_btn;
    }

    function addDropSection(parent) {
        let drop_btn = document.createElement("button");
        drop_btn.classList.add("nav-btn", "nav-expand-btn");
        drop_btn.innerHTML = "&#9660;";
        parent.appendChild(drop_btn); //activity_btn
        drop_btn.onclick = () => toggle_navmenu_sect(drop_btn);
        let expand = document.createElement("ul");
        expand.classList.add("nav-expand-sect");
        expand.addEventListener("focusin", () => open_navmenu_sect(drop_btn));
        navmenu.appendChild(expand);
        return expand;
    }

    function addSubChild(parent, name, link) {
        let set_btn = document.createElement("li");
        set_btn.innerHTML = `<a href="${link}">${name}</a>`;
        parent.appendChild(set_btn);
    }

    let homeButton = addListItem("Home", "home.html");
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("nav-btn");
    closeBtn.onclick = close_navmenu;
    closeBtn.innerHTML = `&#10006;`;
    homeButton.appendChild(closeBtn);

    for (const [act_key, activity] of Object.entries(activities)) {
        if (activity.sets.length == 0) {
            continue;
        }
        let activity_btn = addListItem(
            activity.abbr,
            `activity.html?activity=${encodeURIComponent(act_key)}`
        );

        if (activity.sets.length > 0) {
            let expand = addDropSection(activity_btn);
            for (const [set_key, set] of Object.entries(activity.sets)) {
                addSubChild(
                    expand,
                    set.name,
                    `set.html?activity=${act_key}&set=${set_key}`
                );
            }
        }
    }

    addListItem("Results", "results.html", false);
    addListItem("Info for Clinicians", "clinician-info.html", false);

    main.appendChild(navmenu);
    document.addEventListener("click", (event) => {
        if (event.target.closest(".navmenu") == null) close_navmenu();
    });
    document.addEventListener("keyup", (event) => {
        if (event.key == "Escape") close_navmenu();
    });
}

export function makeRainbowBG() {
    const bgwrap = document.createElement("div");
    bgwrap.classList.add("bg-wrap");
    bgwrap.innerHTML = `<div class="bg"></div>`;
    main.appendChild(bgwrap);
}

export function makeCMDPalatte(homeBtn = true, backBtn = true) {
    const cmdPalatte = document.createElement("div");
    cmdPalatte.classList.add("cmd-palatte");
    cmdPalatte.innerHTML =
        (homeBtn
            ? `<a href="home.html" class="home-btn cmd-btn grey-btn">
        Home
    <div class="arrow"></div></a>`
            : "") +
        (backBtn
            ? `<button onclick="history.back()" class="back-btn cmd-btn grey-btn">
        &nbsp;Back&nbsp;
    <div class="arrow"></div></button>`
            : "");
    main.appendChild(cmdPalatte);
}

export function makeHeadingBar(title = "", subtitle = "") {
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerHTML = `
<button class="three-lines" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
</button>
<h1>${title}</h1>
<h2>${subtitle}</h2>`;
    heading.children[0].onclick = (event) => {
        open_navmenu();
        event.stopPropagation();
    };
    main.insertBefore(heading, main.firstChild);
}

export function formatTime(time) {
    return new Date(time).toJSON().slice(0, 10).split("-").reverse().join("/");
}

export function getRecentResult(activity_id, set_id) {
    const relevantResults = results.filter(
        (r) => r.activity_id == activity_id && r.set_id == set_id
    );
    if (relevantResults.length > 0) {
        return relevantResults.reduce((a, b) => (a.time > b.time ? a : b));
    } else {
        return null;
    }
}

export class Result {
    constructor(time, activity_id, set_id, score) {
        this.time = time; // as int
        this.activity_id = activity_id; //fk
        this.set_id = set_id; //fk
        this.score = score;
    }
}

if (window.localStorage.getItem("results") == null) {
    window.localStorage.setItem("results", JSON.stringify([]));
}
const results = JSON.parse(window.localStorage.getItem("results"));
