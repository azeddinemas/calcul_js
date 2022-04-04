var output = document.getElementById('output');
var numChar, current, previous;
var operation = ['-', '+', '/', '*', '.', '%'];


function dis(c) {
    if (c == '.' && !canIAddDot()) return;
    else {
        output.value += c;
        numChar = output.value.length;
        current = c;
        getprevious();
    }
}

function resset() {
    output.value = "";
}

function calcul() {
    output.value = eval(output.value);
}

function getprevious() {
    previous = output.value.substring(numChar - 2, numChar - 1);
    syntax();
}

function syntax() {
    if (operation.includes(current) && numChar == 1) {
        remov();
    }
    if (operation.includes(previous) && operation.includes(current)) {
        if (previous == current) {
            remov();
        } else
            output.value = output.value.slice(0, numChar - 2) + output.value.slice(numChar - 1);
    }
}

function remov() {
    output.value = output.value.substring(0, numChar - 1);
}

function canIAddDot() {
    const regex = /(^\d+$)|(^(\d+.{0,1}\d)([*-+/]?(\d+.?\d))[*-+/]\d+$)/gm;
    return output.value.match(regex);
}