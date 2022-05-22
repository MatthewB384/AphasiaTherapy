const popups = {
    //id of popup: whether it's open or not
    "#navmenu": false,
};

function open_popup(selector) {
    popups[selector] = true;
    let elem = document.querySelector(selector);
    elem.style.display = "block"; //closed popups have display none
    setTimeout(() => elem.classList.add("open"), 0); //has to be a settimeout otherwise the transition doesnt play
}

function close_popup(selector) {
    popups[selector] = false;
    let elem = document.querySelector(selector);
    elem.classList.remove("open");
    setTimeout(function () {
        if (!popups[selector]) {
            //if you haven't opened it again in the meantime
            elem.style.display = "none"; //removes it from tabindex
        }
    }, 1000);
}

document.onclick = function (event) {
    for (const popup of Object.keys(popups)) {
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
            for (const popup of Object.keys(popups)) {
                close_popup(popup);
            }
    }
};
