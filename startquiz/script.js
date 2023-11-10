// document.addEventListener("DOMContentLoaded", function() {
//     // Get all buttons with the class 'section-button'
//     var buttons = document.querySelectorAll('.section-button');

//     // Add a click event listener to each button
//     buttons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             alert('Button clicked in ' + button.parentElement.querySelector('h2').innerText);
//         });
//     });
// });


const section2Btn = document.getElementById('section2-button');
const section1Btn = document.getElementById('section1-button');

section2Btn.addEventListener('click',()=>{
    location.href='../drag&drop-pair/index.html';
})

section1Btn.addEventListener('click',()=>{
    location.href='../courses/index.html'
})


