var body = document.body;
window.addEventListener("mousemove", function (e) {
    var x = 25 + Math.round(e.clientX * 50 / body.clientWidth);
    var y = Math.round(e.clientY * 100 / body.clientHeight) * 2;
    body.style.backgroundImage = "radial-gradient(circle at "
        + x + "% "
        + y + "px, var(--from) 0%, var(--to) var(--radius))";
});
var emailElement = document.querySelector(".email");
var encryptedEmail = emailElement.textContent;
var email = mud(encryptedEmail, 1);
function showEmail() {
    window.removeEventListener("click", showEmail);
    emailElement.removeEventListener("mouseenter", showEmail);
    emailElement.removeEventListener("click", showEmail);
    emailElement.href = "mailto:" + email;
    show(emailElement, encryptedEmail, email);
}
var numberElement = document.querySelector(".number");
var encryptedNumber = numberElement.textContent;
var number = mud(encryptedNumber, 18);
function showNumber() {
    window.removeEventListener("click", showNumber);
    numberElement.removeEventListener("mouseenter", showNumber);
    numberElement.removeEventListener("click", showNumber);
    show(numberElement, encryptedNumber, number);
}
if (
    typeof matchMedia !== "undefined"
    && matchMedia("(pointer: coarse)").matches
) {
    window.addEventListener("click", showEmail);
    window.addEventListener("click", showNumber);
}
else {
    emailElement.addEventListener("mouseenter", showEmail);
    numberElement.addEventListener("mouseenter", showNumber);
    emailElement.addEventListener("click", showEmail);
    numberElement.addEventListener("click", showNumber);
}
function show(element, from, to) {
    var ratio = 48 / to.length;
    var interval = to.length * ratio;
    var accel = 0.75 * ratio;
    var i = 0;
    (function loop() {
        element.textContent = to.slice(0, i) + from.slice(i);
        if (i < to.length) {
            setTimeout(loop, interval - i * accel);
            i++;
        }
    })();
}
function mud(str, seed) {
    var result = "";
    var i = str.length;
    while (i--) {
        result += String.fromCharCode(str.charCodeAt(i) ^ seed);
    }
    return result;
}
