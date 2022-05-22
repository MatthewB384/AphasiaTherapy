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
