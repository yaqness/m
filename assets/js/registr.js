$('document').ready(function() {
    document.forms.publish.onsubmit = function() {
        var message = this.message.value;
        var password = this.password.value;
        correctMessage.push(message);
        correctPassword.push(password);

        window.location = "home-logged.html";

        return false;

    }
})