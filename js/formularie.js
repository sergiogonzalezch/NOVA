(function () {
    //Objeto con las propiedades del formulario
    var propForm = {
        formularie: document.formularie_contact,
        elements: document.formularie_contact.elements,
        error: null,
        textError: null
    }
    //Objeto con los metodos del formulario
    var metForm = {
        start: function () {
            for (var i = 0; i < propForm.elements.length; i++) {
                if (propForm.elements[i].type == 'text' ||
                    propForm.elements[i].type == 'email' ||
                    propForm.elements[i].nodeName.toLowerCase() == 'textarea') {
                    propForm.elements[i].addEventListener('focus', metForm.focusInput);
                    propForm.elements[i].addEventListener('blur', metForm.blurInput);
                }
            }
            propForm.formularie.addEventListener('submit', metForm.validateInputs);
        },
        focusInput: function () {
            this.parentElement.children[1].className = 'label active';
        },
        blurInput: function () {
            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },
        validateInputs: function (e) {
            for (var i = 0; i < propForm.elements.length; i++) {
                if (propForm.elements[i].value == '') {
                    e.preventDefault();

                    if (propForm.elements[i].parentElement.children.length < 3) {
                        propForm.error = document.createElement('p');
                        propForm.textError = document.createTextNode('Please complete the field with you: ' + propForm.elements[i].name);
                        propForm.error.appendChild(propForm.textError);
                        propForm.elements[i].parentElement.appendChild(propForm.error);
                        propForm.error.className = 'error';
                    }
                } else {
                    if (propForm.elements[i].parentElement.children.length >= 3) {
                        propForm.error = propForm.elements[i].parentElement.getElementsByTagName('p')[0];
                        propForm.elements[i].parentElement.removeChild(propForm.error);
                    }
                }
            }
        }
    }
    metForm.start();

}())
