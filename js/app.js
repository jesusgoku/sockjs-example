// require('../node_modules/bootswatch/flatly/bootstrap.min.css');
window.jQuery = window.$ = require('jquery');
require('bootstrap-js');
require('bootstrap-css');
require('font-awesome');
require('../css/styles.css');

var sock = new SockJS('http://localhost:9999/echo');

sock.onopen = function () {
    console.log('open');
};

sock.onclose = function () {
    console.log('close');
};

sock.onmessage = function (e) {
    var content = JSON.parse(e.data);
    console.log(e.data, content);

    $('#chat-content').val(function (i, text) {
        return text + 'User ' + content.username + ': ' + content.message + '\n';
    });
};

function sendMessage() {
    var message = $('#message').val();
    var username = $('#username').val();

    var send = {
        message: message,
        username: username
    };

    sock.send(JSON.stringify(send));
}

function onMessageKeyPress(e) {
    if (13 === e.keyCode) {
        sendMessage();
        e.target.value = '';
    }
}

document.getElementById('send-message').addEventListener('click', sendMessage);
document.getElementById('message').addEventListener('keypress', onMessageKeyPress)
