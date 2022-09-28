(function () {
    var propLightbox = {
        imgSlide: document.getElementsByClassName('lightbox'),
        image: null,
        imageSRC: null,
        bodyDOM: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        closeModal: null,
        animation: 'fade'
    };
    var metLightbox = {
        effect: function () {
            for (var i = 0; i < propLightbox.imgSlide.length; i++) {
                propLightbox.imgSlide[i].addEventListener('click', metLightbox.selectImg);
            }
        },
        selectImg: function () {
            propLightbox.image = this;
            metLightbox.lightbox(propLightbox.image);
        },
        lightbox: function (image) {
            propLightbox.imageSRC = window.getComputedStyle(image, null).backgroundImage.slice(5, -2);
            propLightbox.bodyDOM.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container');
            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.backgroundColor = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top = '0';
            propLightbox.lightbox_container.style.left = '0';
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLightbox.modal = document.getElementById('modal');
            propLightbox.modal.style.height = '100%';
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imageSRC);
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'image-modal');

            if (propLightbox.animation == 'fade') {
                document.getElementsByClassName('image-modal')[0].style.opacity = 0;
                setTimeout(function () {
                    document.getElementsByClassName('image-modal')[0].style.opacity = 1;
                }, 100);
            }

            propLightbox.modal.innerHTML += '<i id="close_modal" class="fa-solid fa-x"></i>';
            propLightbox.closeModal = document.getElementById('close_modal');
            propLightbox.closeModal.addEventListener('click', metLightbox.closeModal);
        },
        closeModal: function () {
            propLightbox.bodyDOM.removeChild(propLightbox.lightbox_container);
        }
    }
    metLightbox.effect();
}())
