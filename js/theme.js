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
        if(theme) {
            let message = document.createElement('div');
            message.classList.add('message');
            message.classList.add('user');
            message.classList.add('light');
            message.innerHTML = document.querySelector('.chat__input-field').value;
            document.querySelector('.chat__message-container').appendChild(message)
            document.querySelector('.chat__input-field').value = null;
        }
        else {
            let message = document.createElement('div');
            message.classList.add('message');
            message.classList.add('user');
            message.classList.add('dark');
            message.innerHTML = document.querySelector('.chat__input-field').value;
            document.querySelector('.chat__message-container').appendChild(message)
            document.querySelector('.chat__input-field').value = null;
        }
    }
};