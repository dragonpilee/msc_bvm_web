
(function()
{
  "use strict";
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


 





function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

setTimeout(showPopup, 900000);// pop up box time 



document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";});


const counter = document.getElementById("counter");

let count = 900;// time counter time

const intervalId = setInterval(() => {
  count--;
  counter.innerHTML = count;

  if (count === 0) {
    clearInterval(intervalId);
  }
}, 1000);


 



document.getElementById("compiler1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("compiler1").style.display = "none";
  document.getElementById("compiler2").style.display = "none";
  document.getElementById("compiler3").style.display = "none";
  document.getElementById("compiler4").style.display = "none";
});
document.getElementById("compiler2").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("compiler1").style.display = "none";
  document.getElementById("compiler2").style.display = "none";
  document.getElementById("compiler3").style.display = "none";
  document.getElementById("compiler4").style.display = "none";
});
document.getElementById("compiler3").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("compiler1").style.display = "none";
  document.getElementById("compiler2").style.display = "none";
  document.getElementById("compiler3").style.display = "none";
  document.getElementById("compiler4").style.display = "none";
});
document.getElementById("compiler4").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("compiler1").style.display = "none";
  document.getElementById("compiler2").style.display = "none";
  document.getElementById("compiler3").style.display = "none";
  document.getElementById("compiler4").style.display = "none";
});


 
 
window.addEventListener('beforeunload', ()=>{ 

event.preventDefault();
event.returnValue= " ";

}) 
 


 





 



 


// setTimeout(function() {
  // document.getElementById("expiredIm").src = "image2.jpg";
// }, 2000);




