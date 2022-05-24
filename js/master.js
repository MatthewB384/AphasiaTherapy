/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//controls popups including navmenu
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const popups = ["#navmenu"];

display_none_timeouts = {
    //id of popup: stack of settimeouts that will hide it
    "#navmenu": [],
};

function open_popup(selector) {
    let elem = document.querySelector(selector);
    elem.style.display = "block"; //closed popups have display none
    setTimeout(() => elem.classList.add("open"), 3); //has to be a settimeout otherwise the transition doesnt play
    for (const id of display_none_timeouts[selector]) {
        clearTimeout(id);
    }
}

function close_popup(selector) {
    let elem = document.querySelector(selector);
    elem.classList.remove("open");
    for (const id of display_none_timeouts[selector]) {
        clearTimeout(id);
    }
    display_none_timeouts[selector].push(
        setTimeout(function () {
            elem.style.display = "none"; //removes it from tabindex
        }, 1000)
    );
}

function toggle_navmenu_sect(elem) {
    panel = elem.parentNode.nextElementSibling;
    if (panel.classList.toggle("open")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        elem.classList.add("open");
        elem.innerHTML = "&#x25B2";
    } else {
        elem.blur();
        panel.style.maxHeight = 0;
        elem.classList.remove("open");
        elem.innerHTML = "&#9660";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creates navmenu, 3 lines, and help button
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const main = document.querySelector("main");

//generates navbar and bg gradient
document.write(`
<ul id="navmenu" class="navmenu collapsable">
    <li><a href="">Home</a><button class="nav-btn" onclick="close_popup('#navmenu');">&#10006;</button>
    </li>
    <li><a href="home.html">IPM</a><button class="nav-btn nav-expand-btn">&#9660;</button></li>
    <ul class="nav-expand-sect">
        <li><a href="">First Sound 1</a></li>
        <li><a href="">First Sound 2</a></li>
        <li><a href="">First Sound 3</a></li>
        <li><a href="">Rhyming 1</a></li>
        <li><a href="">Rhyming 2</a></li>
        <li><a href="">Rhyming 3</a></li>
        <li><a href="">Sound Deletion 1</a></li>
        <li><a href="">Sound Deletion 2</a></li>
        <li><a href="">Sound Deletion 3</a></li>
    </ul>
    <li><a href="">PCA</a><button class="nav-btn nav-expand-btn">&#9660;</button></li>
    <ul class="nav-expand-sect">
        <li><a href="">Set 1</a></li>
        <li><a href="">Set 2</a></li>
        <li><a href="">Set 3</a></li>
        <li><a href="">Set 4</a></li>
        <li><a href="">Set 5</a></li>
    </ul>
    <li><a href="">Results</a><button class="nav-btn nav-expand-btn">&#9660;</button>
    </li>
    <ul class="nav-expand-sect">
        <li><a href="">All Tests</a></li>
        <li><a href="">Recent Tests</a></li>
    </ul>
</ul>
<div class="bg-wrap">
<div class="bg"> </div>
</div>`);

//creates heading and 3 lines
const heading = document.createElement("div");
heading.classList.add("heading");
heading.innerHTML = `
<label for='navmenu' class="nav-3-lines" onclick="open_popup('#navmenu');" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
</label>
<h1>Cool Word Thing</h1>`;
main.insertBefore(heading, main.firstChild);

//creates command palatte at bottom
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//page interaction
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.onclick = function (event) {
    for (const popup of popups) {
        if (
            event.target.closest(popup) !== null || //you clicked on that popup
            (event.target.closest("label") !== null && //or you clicked on a label
                "#" + event.target.closest("label").htmlFor == popup) //and the label was for that popup
        )
            continue; //don't close the popup
        close_popup(popup); //otherwise do close it
    }
};

document.onkeyup = function (event) {
    switch (event.key) {
        case "Escape": //closes all popups
            for (const popup of popups) {
                close_popup(popup);
            }
    }
};
