const ipcRenderer = require('electron').ipcRenderer;

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    ipcRenderer.send('login-submission', user, pass)
}

ipcRenderer.on('login-successful', function(event, file){
    
    window.location.replace(file);
});

ipcRenderer.on('error', function(event){
    const responseParagraph = document.getElementById('response');

    responseParagraph.innerHTML = "Error."
});

