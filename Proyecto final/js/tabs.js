(function () {
    var propTabs = {
        first_header: document.getElementById('menu').firstElementChild,
        first_content: document.getElementById('contents').firstElementChild,
        link_header: document.querySelectorAll('#menu li a'),
        li_header: document.querySelectorAll('#menu li'),
        divs_content: document.querySelectorAll('#contents > div'),
        content_active: null
    }
    var metTabs = {
        startTabs: function () {
            propTabs.first_header.className = 'active';
            propTabs.first_content.className = 'active';

            for (var i = 0; i < propTabs.link_header.length; i++) {
                propTabs.link_header[i].addEventListener('click', metTabs.eventTabs);
            }
        },
        eventTabs: function (e) {
            e.preventDefault();
            for (var i = 0; i < propTabs.li_header.length; i++) {
                propTabs.li_header[i].className = '';
            }
            for (var i = 0; i < propTabs.divs_content.length; i++) {
                propTabs.divs_content[i].className = '';
            }
            this.parentElement.className = 'active';
            propTabs.content_active = this.getAttribute('href');
            document.querySelector(propTabs.content_active).className = 'active';
            document.querySelector(propTabs.content_active).style.opacity = 0;

            setTimeout(function () {
                document.querySelector(propTabs.content_active).style.opacity = 1;
            }, 100);
        }
    }
    metTabs.startTabs();

}())
