let theme = false;
document.querySelector('.theme-button').addEventListener('click', function() {
    if(theme){
        document.querySelectorAll('.light').forEach(element => {
            element.classList.remove('light');
            element.classList.add('dark');
            theme = false;
        });
    }
    else {
        document.querySelectorAll('.dark').forEach(element => {
            element.classList.remove('dark');
            element.classList.add('light');
            theme = true;
        });
    }
})

document.querySelector('.submit').addEventListener('click', function(){
    SendMessage();
});
document.querySelector('textarea').addEventListener('keydown', (e) => {
    if(e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        SendMessage();
    }
});

function SendMessage() {
    if(document.querySelector('.chat__input-field').value != '' && document.querySelector('.chat__input-field').value != ' ') {
        let message = document.createElement('div');
        message.classList.add('message');
        message.classList.add('user');
        if (theme) message.classList.add('light');
        else message.classList.add('dark');

        let formattedMessage = String(document.querySelector('.chat__input-field').value).replace('<', '&lt;');
        formattedMessage = formattedMessage.replace('>', '&gt;');
        message.innerHTML = formattedMessage;
        
        document.querySelector('.chat__message-container').appendChild(message)
        document.querySelector('.chat__input-field').value = null;

        document.getElementById('chat__feed').scrollTop = document.getElementById('chat__feed').scrollHeight;
    }
};