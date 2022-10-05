//Objeto con las propiedades del formulario
var propForm = {
    formularie: document.formularie_contact,
    elements: document.formularie_contact.elements
}
//Objeto con los metodos del formulario
var metForm = {
    start: function () {
        for (var i = 0; i < propForm.elements.length; i++) {
            if (propForm.elements[i].type == 'text' || propForm.elements[i].type == 'email' || propForm.elements[i].type == 'tel' || propForm.elements[i].nodeName.toLowerCase() == 'textarea') {
                propForm.elements[i].addEventListener('focus', metForm.focusInput);
                propForm.elements[i].addEventListener('blur', metForm.blurInput);
            }
        }
    },
    focusInput: function () {
        this.parentElement.children[1].className = 'label active';
    },
    blurInput: function () {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label';
        }
    }
}
metForm.start();
