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
var email = endecode(encryptedEmail);
if (
    typeof matchMedia !== "undefined"
    && matchMedia("(pointer: coarse)").matches
) {
    window.addEventListener("click", decrypt);
}
else {
    emailElement.addEventListener("mouseenter", decrypt);
    emailElement.addEventListener("click", decrypt);
}
function decrypt() {
    emailElement.removeEventListener("mouseenter", decrypt);
    emailElement.removeEventListener("click", decrypt);
    emailElement.href = "mailto:" + email;
    var i = 0;
    function loop() {
        emailElement.textContent = email.slice(0, i) + encryptedEmail.slice(i);
        if (i < email.length) {
            setTimeout(loop, email.length * 2 - i * 1.5);
            i++;
        }
    }
    loop();
}
function endecode(str) {
    var result = "";
    var i = str.length;
    while (i--) {
        result += String.fromCharCode(str.charCodeAt(i) ^ 1);
    }
    return result;
}
