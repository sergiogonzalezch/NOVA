var propScroll = {
    position: window.pageYOffset,
    scrolling: document.getElementsByClassName('scrolling'),
    backTo: document.getElementsByClassName('back-to'),
    destiny: null,
    distance: null,
    interval: null
}
var metScroll = {
    start: function () {
        for (var i = 0; i < propScroll.scrolling.length; i++) {
            propScroll.scrolling[i].addEventListener('click', metScroll.move);
        }
        for (var i = 0; i < propScroll.backTo.length; i++) {
            propScroll.backTo[i].addEventListener('click', metScroll.moveUp);
        }
    },
    move: function (e) {
        e.preventDefault();
        clearInterval(propScroll.interval);
        propScroll.destiny = this.getAttribute('href');
        propScroll.distance = document.querySelector(propScroll.destiny).offsetTop;
        propScroll.position = window.pageYOffset;
        propScroll.interval = setInterval(function () {
            if (propScroll.position < propScroll.distance) {
                propScroll.position += 30;
                if (propScroll.position >= propScroll.distance) {
                    clearInterval(propScroll.interval);
                }
            } else {
                propScroll.position -= 30;
                if (propScroll.position <= propScroll.distance) {
                    clearInterval(propScroll.interval);
                }
            }
            window.scrollTo(0, propScroll.position);
        }, 15);
    },

    moveUp: function (e) {
        e.preventDefault();
        clearInterval(propScroll.interval);
        propScroll.position = window.pageYOffset;
        propScroll.interval = setInterval(function () {
            if (propScroll.position > 0) {
                propScroll.position -= 30;
                if (propScroll.position <= 0) {
                    clearInterval(propScroll.interval);
                }
            } else {
                return;
            }
            window.scrollTo(0, propScroll.position);
        }, 15);
    }
}
metScroll.start();
