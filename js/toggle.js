var propMenu = {
    button_menu: document.getElementById('button-menu'),
    list_menu: document.getElementById('list-menu'),
    active_menu: false,
    elem_menu: document.querySelectorAll('#list-menu .movile-menu a')

}
var metMenu = {
    start: function () {
        propMenu.button_menu.addEventListener('click', metMenu.toggleMenu);
        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.hideMenu)
        }
    },
    toggleMenu: function () {
        if (propMenu.active_menu == false) {
            propMenu.active_menu = true;
            propMenu.list_menu.className = propMenu.list_menu.className + ' active';
        } else {
            propMenu.active_menu = false;
            propMenu.list_menu.className = propMenu.list_menu.className.replace('active', '');
        }
    },
    hideMenu: function () {
        propMenu.active_menu = false;
        propMenu.list_menu.className = propMenu.list_menu.className.replace('active', '');
    }
}
metMenu.start();
