document.faces = {
    'laugth': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/face-with-tears-of-joy_1f602.png",
    'sleep': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/sleepy-face_1f62a.png",
    'angry': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/angry-face_1f620.png",
    'seriously': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/unamused-face_1f612.png",
    'winking': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/winking-face_1f609.png",
    'rolling': "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/rolling-on-the-floor-laughing_1f923.png"
}


document.validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

document.containSpecial = function (word) {
    return word.match(/[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/);
}

document.hasSpace = function (word) {
    return /\s/.test(word);
}