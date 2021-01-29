$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation:true,
        afterLoad: function(){
            $('#fp-nav ul li a span').css('background','#68676b')
            if($('#section01').hasClass("active") === true || $('#section04').hasClass("active") === true){
                $('#fp-nav ul li a span').css('background','red')
            }
        }
    });
});

// var section01 = document.getElementsByClassName('section');
// var section02 = document.getElementById('section02');
// var fpNav = document.getElementById('fp-nav');

// window.addEventListener('click', colorTest);

// function colorTest() {

//     for(var i=0; i<section01.length; i++){
//         if(section01[i].classList.contains("active")){
//             console.log("aa");
//             fpNav[0].style.background="red";
//         }
//     }
// }

// function a() {
//     console.log("a")
// }

// console.log(fpNav[0]);