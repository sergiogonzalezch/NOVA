(function () {
    //    Objeto con propiedades de parallax
    var propParallax = {
        section: document.querySelector('.parallax'),
        way: null,
        limit: null
    }
    //    Objeto con metodos parallax
    var metParallax = {
        start: function () {
            window.addEventListener('scroll', metParallax.scrollParallax);
        },
        scrollParallax: function () {
            propParallax.way = window.pageYOffset;
            propParallax.limit = propParallax.section.offsetTop + propParallax.section.offsetHeight;

            if (propParallax.way > propParallax.section.offsetTop - window.outerHeight && propParallax.way <= propParallax.limit) {
                propParallax.section.style.backgroundPositionY = (propParallax.way - propParallax.section.offsetTop) / 1.5 + 'px';
            } else {
                propParallax.section.style.backgroundPositionY = 0;
            }
        }
    }
    metParallax.start();
}())
