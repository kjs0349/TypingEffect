const dynamic = document.querySelector('.dynamic');
const mainText = document.querySelector('.maintext');
const messageArry = ['Hello ~', 'My name is', 'Kim Ji Su!!'];

// dynamic 커서 만들기
setInterval(function(){
    dynamic.classList.toggle('dynamic')
}, 250);


let num = 0;    //배열의 인덱스를 늘려 줄 변수 선언
let message = messageArry[num];     //배열 중 하나의 값을 받아오는 변수 선언
let printmessage = message.split("");       //받아온 값을 한 문자씩 쪼개서 배열로 담는 변수 선언

//한 문자씩 뿌려주는 함수
function typingtext(printmessage) {
    if (printmessage.length > 0) {      //배열의 첫 번째 문장에 타이핑 효과 주기
        mainText.textContent += printmessage.shift();
        setTimeout(() => {
            typingtext(printmessage);
        }, 250);
    } else {        //배열의 다음 인덱스로 넘어가기
        num++;
        message = messageArry[num];
        printmessage = message.split("");
        mainText.innerHTML = "";
        typingtext(printmessage);
    }
}

typingtext(printmessage);