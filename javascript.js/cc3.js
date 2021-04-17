function reverseWords(message) {
    var wordstring = "";
    var array = [];
    for(var i = 0; i <= message.length; i++) {
        if (message[i] == " ") {
            array.unshift(wordstring);
            wordstring = "";
        }
        if (message[i] != " " && message[i] != undefined){
         wordstring += message[i];
        }
    }
    array.unshift(wordstring);
    var result = array.join(" ");
    input = result.split("");
    return result;
}
