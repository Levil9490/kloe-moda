function abrirMenu() {
    var menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.remove('close');
    menuMobile.classList.add('open');
}

function fecharMenu() {
    var menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.remove('open');
    menuMobile.classList.add('close');
}