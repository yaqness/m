function getAnswer() {
    var lom = document.getElementById('answer').innerHTML
    var lomDivide = lom.search("÷")
    var lomMultiple = lom.search("×")
    if ((lomDivide == -1) && (lomMultiple == -1)) {
        let newLom = eval(document.getElementById('answer').innerHTML)
        document.getElementById('s-answer').innerHTML = "=" + newLom
    } else {
        lom = lom.replace("÷", "/")
        lom = lom.replace("×", "*")
        let newLom = eval(lom)
        document.getElementById('s-answer').innerHTML = "=" + newLom
    }

}

function getOne() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "1";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "1"
        }

    }
    getAnswer()
}

function getTwo() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "2";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "2"
        }

    }
    getAnswer()
}

function getThree() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "3";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "3"
        }

    }
    getAnswer()
}

function getFour() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "4";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "4"
        }

    }
    getAnswer()
}

function getFive() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "5";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "5"
        }

    }
    getAnswer()
}

function getSix() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "6";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "6"
        }

    }
    getAnswer()
}

function getSeven() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "7";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "7"
        }

    }
    getAnswer()
}

function getEight() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "8";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "8"
        }

    }
    getAnswer()
}

function getNine() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "9";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "9"
        }

    }
    getAnswer()
}

function getZero() {
    let ans = document.getElementById('answer').innerHTML;
    if (ans == "0") {
        document.getElementById('answer').innerHTML = "0";
    } else {
        if (ans.slice(-1) != "%") {
            document.getElementById('answer').innerHTML += "0"
        }

    }
    getAnswer()
}

function getPoint() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != ".")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "0.";
        } else {
            document.getElementById('answer').innerHTML += "."
        }
    }
    getAnswer()
}

function getAc() {
    document.getElementById('answer').innerHTML = "0";
    document.getElementById('s-answer').innerHTML = "=0";
}

function getCancel() {
    let str = document.getElementById('answer').innerHTML;
    document.getElementById('answer').innerHTML = str.slice(0, -1)
    if (str.length == 1) {
        document.getElementById('answer').innerHTML = "0";
    }

    getAnswer()
}

function getMultiple() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != "÷" && ans.slice(-1) != "-" && ans.slice(-1) != "+" && ans.slice(-1) != "×")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "0";
        } else {
            document.getElementById('answer').innerHTML += "×"
        }
    }
    getAnswer()
}

function getMinus() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != "÷" && ans.slice(-1) != "-" && ans.slice(-1) != "+" && ans.slice(-1) != "×")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "-";
        } else {
            document.getElementById('answer').innerHTML += "-"
        }
    }
    getAnswer()
}

function getDivide() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != "÷" && ans.slice(-1) != "-" && ans.slice(-1) != "+" && ans.slice(-1) != "×")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "÷";
        } else {
            document.getElementById('answer').innerHTML += "÷"
        }
    }
    getAnswer()
}

function getPlus() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != "÷" && ans.slice(-1) != "-" && ans.slice(-1) != "+" && ans.slice(-1) != "×")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "0";
        } else {
            document.getElementById('answer').innerHTML += "+"
        }
    }
    getAnswer()
}

function getPercent() {
    let ans = document.getElementById('answer').innerHTML;
    if ((ans.slice(-1) != "÷" && ans.slice(-1) != "-" && ans.slice(-1) != "+" && ans.slice(-1) != "×" && ans.slice(-1) != "%")) {
        if ((ans == "0")) {
            document.getElementById('answer').innerHTML = "0";
        } else {
            document.getElementById('answer').innerHTML += "%"
        }
    }
    getAnswer()
}

function getEqual() {
    let text = document.getElementById('answer').innerHTML;
    let answer = document.getElementById('s-answer').innerHTML;
    document.getElementById('answer').innerHTML = answer.slice(1);
}