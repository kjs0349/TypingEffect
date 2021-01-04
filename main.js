const dynamic = document.querySelector('.dynamic');
const mainText = document.querySelector('.maintext');

// dynamic 커서 만들기
setInterval(function(){
    mainText.classList.toggle('dynamic')
}, 300);
