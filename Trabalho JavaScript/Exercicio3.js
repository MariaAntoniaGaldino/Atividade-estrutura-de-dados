function validaCampo(){
    var campo = document.getElementeByld('campo');
    var txt = document.getElementByld('campo').value;
    var n = txt.lenght
    if(n < 10){

        alert("O texto digitado tem " + n + "caracteres"); 
        return false;
        campo.focus(0);
    }
    return true;
}