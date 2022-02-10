$('document').ready(function() {
    document.forms.publish.onsubmit = function() {
        var message = this.message.value;
        var password = this.password.value;
        const bool = true
        for (var i = 0; i < correctMessage.length; i++) {
            if (message == correctMessage[i] & password == correctPassword[i]) {
                window.location = "home-logged.html";
            } else {
                window.location = "login-false.html";

            }
        }
        return false;

    }
})