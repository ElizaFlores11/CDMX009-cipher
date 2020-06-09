const cipher = {encode, decode};

function encode (offset, string){
   let msg = '';
    for (let i = 0; i < string.length; i++) {
        let caracteres = string[i];
        if (caracteres.match(/[a-z]/i)) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let frase = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                     msg+= String.fromCharCode(frase);
            } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                let frase = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                 msg+= String.fromCharCode(frase);
            }
        } else {
            msg+= caracteres; 
        }
    }
    return msg;

}

function decode (offset, string){
    let msgdecode = "";
    for (let i = 0; i < string.length; i++) {
        let caracterdecode = string[i];
        if (caracterdecode.match(/[a-z]/i)) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let frase = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                msgdecode += String.fromCharCode(frase);
            } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                let frase = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                msgdecode += String.fromCharCode(frase);
            }
         } else {
            msgdecode += caracterdecode;
         }
    }
    return msgdecode;
}

export default cipher;