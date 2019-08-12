document.addEventListener('DOMContentLoaded', function (event) {
    var lEye = document.getElementById("left-eye");
    var rEye = document.getElementById("right-eye");

    var checker = document.getElementById("checker");
    var reactor = document.getElementById("reactor");

    const lePos = lEye.offsetLeft;
    const rePos = rEye.offsetLeft;

    const badWords = window.badWords;
    const faces = document.faces;

    this.onTypingEmail = function (e) {

        if (e) {
            var email = e.value;
            var eLength = email.length;
            lEye.style.left = (lePos + eLength / 6) + "px";
            rEye.style.left = (rePos + eLength / 6) + "px";

            const result = checkEmail(email);

            if (result) {
                reactor.src = faces[result];
                checker.style.display = 'none';
                reactor.style.display = 'block';
            } else {
                checker.style.display = 'block';
                reactor.style.display = 'none';
            }

        }
    }


    function checkEmail(email) {

        if (badWords.includes(email)) {
            return 'angry';
        } else if (document.hasSpace(email) && document.containSpecial(email)) {
            return 'rolling';
        } else if (document.hasSpace(email)) {
            return 'laugth';
        } else if (document.containSpecial(email)) {
            return 'seriously';
        } else if (email.split("@")[0].length > 30) {
            return 'sleep';
        } else if (document.validateEmail(email)) {
            return 'winking';
        }

        return;
    }

})