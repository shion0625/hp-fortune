var fortuneResult =[
  "大吉","吉","吉","中吉","中吉","小吉","小吉","末吉","末吉","凶"
];
var daikitiImg  =[
  "../html/image/inu.png",
  "../html/image/saru.png",
  "../html/image/panda.png",
  "../html/image/pengin.png",
]

var kitiImg  =[
  "../html/image/maro.jpg",
  "../html/image/inosisi.png",
  "../html/image/"

]
var tyuukitiImg  =[
　
]

var syoukitiImg  =[

]
var suekitiImg  =[
　
]

var kyoImg  =[

]


$(function(){
  $("#fortuneBtn").click(function(){
    var btn = $(this);
    btn.prop("disabled",true);
    //////////////////////////
    //fortune image  upside down
    setTimeout(function(){
      $("#image").addClass("turn-over");
    },0);
    setTimeout(function(){
      //change  imageFirst to image-second
      $("#image").removeClass("imageFirst");
      $("#image").addClass("image-second");
    },1000);
    //buruburu strat 
    setTimeout(function() {
      $(".fortuneImg").addClass("buruburu");
    },1500)
    //buruburu stop
    setTimeout(function() {
    $(".fortuneImg").removeClass("buruburu");
    },4000)
    setTimeout(function (){
      // dissappear image
      $(".img-button").hide();
      //display result
      var result = fortuneResult[Math.floor(Math.random() * fortuneResult.length)];
      $("#fortuneResult").html("<div class='fortuneResultInner'>" + result + "</div>");
      $("#fortuneResult").show();
    },5000) 
    //reset
    setTimeout(function(){
      //Image remain upside down  when reset
      $("#image").removeClass("image-second");
      $("#image").addClass("imageFirst");
      $("#image").removeClass("turn-over");
  
      $("#fortuneResult").hide();
      $(".img-button").show();
      btn.prop("disabled",false);
    },8000 );
  });
});


// if(result=="大吉") {

// }