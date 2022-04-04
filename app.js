let userNum = Document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keycode == 13) {
        run(e);
    }
});

function run() {
    Document.getElementById("paragraph").innerHTML = "Hello World!";
    Document.getElementById("paragraph").style.backgroundColor = "green";
    Document.getElementById("paragraph").style.color = "#ffffff";
    Document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = Document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#280cc1";
    x.style.color = "#ffffff";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let userNumber = Document.getElementById("getNumber").value;
    let y = Document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "#ff00e2";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = Document.getElementById("compare");

    if (a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#ff0000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    } else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
    }
}