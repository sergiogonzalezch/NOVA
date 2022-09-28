(function () {
    var propSlider = {
        slider: document.getElementById('slider'),
        slideHead: null
    }
    var metSlider = {
        starSlide: function () {
            setInterval(metSlider.slideMove, 5000);
        },
        slideMove: function () {
            propSlider.slider.style.transition = 'all 1s ease';
            propSlider.slider.style.marginLeft = '-100%';

            setTimeout(function () {
                propSlider.slideHead = propSlider.slider.firstElementChild;
                propSlider.slider.appendChild(propSlider.slideHead);
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.style.marginLeft = '0';
            }, 1000);
        }
    }
    metSlider.starSlide();
}())
