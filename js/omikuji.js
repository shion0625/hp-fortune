var omikujiResult = [
  "大吉","中吉","中吉","小吉","小吉","凶"
];


$(function(){
  $("#omikujiBtn").click(function(){
    var btn = $(this);
    btn.prop("disabled",true);
    //おみくじをひっくり返す
    $("#omikujiImg").addClass("rotate");
    //ひっくり返すのを止める
    setTimeout(function(){
      $("#omikujiImg").removeClass("rotate");
    //画像を取る
    $("#omikujiImg").addClass("omikujiImg");
    //画像を入れる
    $("#omikujiImgR").removeClass("omikujiImgR");
    }, 1500);
    //ブルブルを始める
     setTimeout(function() {
       $("#omikujiImgR").addClass("buruburu");
     }, 1500);
    //  ブルブルを止める
    setTimeout(function(){
      $("#omikujiImgR").removeClass("buruburu");
    }, 3500);
    //結果が表示される
    setTimeout(function(){
      var result = omikujiResult[Math.floor(Math.random() * omikujiResult.length)];
      $("#omikujiResult").html("<div class='omikujiResultInner'>" + result + "</div>");
    }, 5000);
    //リセットする
    setTimeout(function(){
      $("#omikujiResult").html("<img id ='omikujiImg' src='assets/omikuji.png'>");
      btn.prop("disabled",false);
    }, 8000);
    
  });
});