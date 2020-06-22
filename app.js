//jshint esversion:10
function scrollAppear(){
    var featText = document.querySelector('.features-container1');
    var featPosition = featText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(featPosition < screenPosition){
        featText.classList.add('feat-appear');
    }
}

window.addEventListener('scroll',scrollAppear);

function scrollAppear2(){
    var featText = document.querySelector('.features-container2');
    var featPosition = featText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.7;

    if(featPosition < screenPosition){
        featText.classList.add('feat-appear');
    }
}

window.addEventListener('scroll',scrollAppear2);