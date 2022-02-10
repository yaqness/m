document.forms.publish.onsubmit = function() {
    var message = this.message.value;
    document.getElementById("demo").innerHTML = "Гаф-гаф! Люблю" + message;
    document.getElementById("demos").classList.add('is-valid')
    return false;

}