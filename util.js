module.exports = function hasLetters(str){
    for (var i=0; i<str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
            str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
                return true;
            }
    }
}