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
        }, 1000)
    );
}
document.open_navmenu = open_navmenu;
document.close_navmenu = close_navmenu;
function toggle_navmenu_sect(btn) {
    let panel = btn.parentNode.nextElementSibling;
    if (panel.classList.toggle("open")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.classList.add("open");
        btn.innerHTML = "&#x25B2";
    } else {
        btn.blur();
        panel.style.maxHeight = 0;
        btn.classList.remove("open");
        btn.innerHTML = "&#9660";
    }
}
export function makeNavMenu() {
    const navmenu = document.createElement("ul");
    navmenu.classList.add("navmenu", "collapsable");
    navmenu.id = "navmenu";
    navmenu.innerHTML = `
    <li>
        <a href="home.html">Home</a>
        <button class="nav-btn" onclick="close_navmenu();">&#10006;</button>
    </li>`; //home button and close navmenu x button;

    for (const activity of Object.values(activities)) {
        let activity_btn = document.createElement("li");
        let link = `activity.html?a=${encodeURIComponent(activity.abbr)}`;
        activity_btn.innerHTML = `<a href=${link}>${activity.abbr}</a>`;
        navmenu.appendChild(activity_btn);

        if (activity.sets.length > 0) {
            let drop_btn = document.createElement("button");
            drop_btn.classList.add("nav-btn", "nav-expand-btn");
            drop_btn.innerHTML = "&#9660;";
            activity_btn.appendChild(drop_btn);
            drop_btn.onclick = () => toggle_navmenu_sect(drop_btn);

            let expand = document.createElement("ul");
            expand.classList.add("nav-expand-sect");
            for (const set of activity.sets) {
                let set_btn = document.createElement("li");
                set_btn.innerHTML = `<a href="set.html?s=${encodeURIComponent(
                    set.name
                )}">${set.name}</a>`;
                expand.appendChild(set_btn);
            }
            navmenu.appendChild(expand);
        }
    }
    main.appendChild(navmenu);
    document.addEventListener("click", (event) => {
        if (
            event.target.closest(".navmenu") == null &&
            event.target.closest(".nav-3-lines") == null
        )
            close_navmenu();
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

export function makeCMDPalatte() {
    const cmdPalatte = document.createElement("div");
    cmdPalatte.classList.add("cmd-palatte");
    cmdPalatte.innerHTML = `
<div class="clinician-info">
    <button id="clinician-info-btn">i</button>
    <label for="clinician-info-btn">Informa<wbr>tion for<br>Clini<wbr>cians</label>
</div>
<button class="see-results-btn">
    <p>See my results</p>
</button>`;
    main.appendChild(cmdPalatte);
}

export function makeHeadingBar(title) {
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerHTML = `
<label for='navmenu' class="nav-3-lines" onclick="open_navmenu();" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
</label>
<h1>${title}</h1>`;
    main.insertBefore(heading, main.firstChild);
}
