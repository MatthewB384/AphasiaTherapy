function tabbable(elem) {
    return [
        "a",
        "area",
        "button",
        "input",
        "object",
        "select",
        "textarea",
    ].includes(elem.tagName.toLocaleLowerCase()) || elem.onclick !== null
        ? true
        : false;
}
function recursive_tab_lock(elem, generation_count = 0) {
    if (tabbable(elem)) {
        elem.tabIndex = -1;
    }
    if (generation_count > 0) {
        for (const child of elem.children) {
            recursive_tab_lock(child, generation_count - 1);
        }
    }
}
function recursive_tab_unlock(elem, generation_count = 0) {
    if (tabbable(elem)) {
        elem.tabIndex = 0;
    }
    if (generation_count > 0) {
        for (const child of elem.children) {
            recursive_tab_unlock(child, generation_count - 1);
        }
    }
}

function open_nav_menu() {
    menu = document.querySelector(".navmenu");
    menu.classList.add("open");
    recursive_tab_unlock(menu, 2);
}

function close_nav_menu() {
    menu = document.querySelector(".navmenu");
    menu.classList.remove("open");
    recursive_tab_lock(menu, 2);
}

recursive_tab_lock(document.querySelector(".navmenu"), 2);
document.main.onclick = () => {
    console.log("yo");
};
