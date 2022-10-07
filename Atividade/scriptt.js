var Lista = [];
function Enviar(){

        var nome = document.getElementById('nome').value;
        var sobrenome = document.getElementById('sobrenome').value;
        var experiencia = document.getElementById('experiencia').value;
        var email = document.getElementById('email').value;
        
        var listar = {
            name: nome,
            sobre: sobrenome,
            ema: email,
            expec: experiencia
        }
    Lista.push(listar)
    console.log(Lista)
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('experiencia').value = '';
    document.getElementById('email').value = '';
}

