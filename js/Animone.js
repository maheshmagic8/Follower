
var flwer = document.querySelector("#folower");
var flwer2 = document.querySelector("#folower2");
var main = document.querySelector(".main");


main.addEventListener("mousemove",(dets)=>{


  var currentPoss = flwer.getBoundingClientRect().width/2;
  var xValue = (dets.x - currentPoss);
  var yValue = (dets.y - currentPoss);

  gsap.to("#folower",{
    left:xValue +"px",
    top:yValue+"px",
    delay:.1,
    ease:Power4
  })

  var currentPos = flwer2.getBoundingClientRect().width/2;
  var xVal = (dets.x - currentPos);
  var yVal = (dets.y - currentPos);

  gsap.to("#folower2",{
    left:xVal+"px",
    top:yVal+"px",
    delay:.2,
    ease:Power3
  })


})