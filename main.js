const dynamic = document.querySelector('.dynamic');
const mainText = document.querySelector('.maintext');
const messageArry = ['Hello ~', 'My name is', 'KimJiSu!!'];

// dynamic 커서 만들기
setInterval(function(){
    dynamic.classList.toggle('dynamic')
}, 400);


let num = 0;
let message = messageArry[num];
let printmessage = message.split("");

function typingtext(printmessage) {
    if (printmessage.length > 0) {
        mainText.textContent += printmessage.shift();
        setTimeout(() => {
            typingtext(printmessage);
        }, 400);
    } 
}

typingtext(printmessage);