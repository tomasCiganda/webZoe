function validate(){
    var person = prompt("Contraseña", "Password");

    if (person == '43659067') {
      var musica = document.getElementById('musica');
      musica.play();
      var body = document.getElementById('corpus');
      body.setAttribute('style', 'display: block');
    } else {
        alert("Contraseña incorrecta");
        validate();
        
    }
}
