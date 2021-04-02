
$( function() {
  $( ".draggable" ).draggable({ containment: "#window" });
} );

$(function(){
    $(".fl").on("click",function(){
        $(".path1").attr("fill","#0A6C35");
    });
    $(".fl2").on("click",function(){
        $(".path2").attr("fill","#18A53F");
    });
    $(".fl3").on("click",function(){
        $(".path3").attr("fill","#0A6C35");
    });
    $(".fl4").on("click",function(){
        $(".path4").attr("fill","#0A6C35");
    });
    $(".fl5").on("click",function(){
        $(".path5").attr("fill","#18A53F");
    });
    $(".fl6").on("click",function(){
        $(".path6").attr("fill","#18A53F");
    });
    $(".fl7").on("click",function(){
        $(".path7").attr("fill","#0A6C35");
    });
    $(".fl8").on("click",function(){
        $(".path8").attr("fill","#18A53F");
    });
    $(".fl9").on("click",function(){
        $(".path9").attr("fill","#0A6C35");
    });
    $(".fl10").on("click",function(){
        $(".path10").attr("fill","#0A6C35");
    });
    $(".fl11").on("click",function(){
        $(".path11").attr("fill","#18A53F");
    });
      });


function myRandom(){
  return (Math.floor(Math.random()*2));
}

function fillForm(){
//   var idy = 0;
//   while (idy < 44) {
//     if (myRandom()){
//       $('#ran').append('<div class= "square" style= "background-color: white"></div>');
//     }
//     else {
//       $('#ran').append('<div class= "square"></div>');
//     }
//     idy++;
// }

 for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 4; j++) {
      if (myRandom()){
        $('#ran').append('<div class= "square" style= "background-color: #C6C6C6; left:' + j*25 + '%; top:' + i*9.1 + '%"></div>');
      }
      else {
        $('#ran').append('<div class= "square" style= "left:' + j*25 + '%; top:' + i*9.1 + '%" ></div>');
      }
    }
}
}
$(document).ready(function () {
    fillForm();
    var textArray = [];
    textArray[0] = '150мл / 20°С';
    textArray[1] = '200мл / 23°С';
    textArray[2] = '100мл / 18°С';
    textArray[3] = '330мл / 23°С';
    var imgArray=[];
    imgArray[0] = 'images/22.svg';
    imgArray[1] = 'images/Group 23.svg';
    imgArray[2] = 'images/100.svg';
    imgArray[3] = 'images/Group 22.svg';
    $("#flower").attr("src", imgArray[0]);
    var idx = 0;
    $('#b1').on('click', function(){
        idx++;
        var newidx = idx % textArray.length;
        $('#v1').text(textArray[newidx]);
        $ ("#flower").attr("src", imgArray[newidx]);
    });
    $('#ran').on('click', function() {
      $('#ran').empty();
      fillForm();
    });
});
$(document).ready(function () {
    fillForm();
    var textArray = [];
    textArray[0] = '150мл / 20°С';
    textArray[1] = '200мл / 23°С';
    textArray[2] = '100мл / 18°С';
    textArray[3] = '330мл / 23°С';
    var imgArray=[];
    imgArray[0] = 'images/22.svg';
    imgArray[1] = 'images/Group 23.svg';
    imgArray[2] = 'images/100.svg';
    imgArray[3] = 'images/Group 22.svg';
    $("#flower2").attr("src", imgArray[0]);
    var idx = 0;
    $('#b2').on('click', function(){
        idx++;
        var newidx = idx % textArray.length;
        $('#v2').text(textArray[newidx]);
        $ ("#flower2").attr("src", imgArray[newidx]);
    });
    $('#ran').on('click', function() {
      $('#ran').empty();
      fillForm();
    });
});
$(document).ready(function () {
    var textArray = [];
    textArray[0] = '150мл / 20°С';
    textArray[1] = '200мл / 23°С';
    textArray[2] = '100мл / 18°С';
    textArray[3] = '330мл / 23°С';
    var imgArray=[];
    imgArray[0] = 'images/22.svg';
    imgArray[1] = 'images/Group 23.svg';
    imgArray[2] = 'images/100.svg';
    imgArray[3] = 'images/Group 22.svg';
    $("#flower3").attr("src", imgArray[0]);
    var idx = 0;
    $('#b3').on('click', function(){
        idx++;
        var newidx = idx % textArray.length;
        $('#v3').text(textArray[newidx]);
        $ ("#flower3").attr("src", imgArray[newidx]);
    });

});

  $(document).ready(function () {
    $('.green_p').hide();
    var blackfl = 1;
    $('#button_g').on('click', function(){
    if (blackfl) {
      blackfl = 0;
      $('.blackb').fadeTo(500, 0);
      // $('.blackb').hide();
      $('.green_p').fadeTo(500, 100);
      // $('.green_p').show();
    }
    else {
      blackfl = 1;
      // $('.blackb').show();
      $('.blackb').fadeTo(1000, 100);
      // $('.green_p').hide();
      $('.green_p').fadeTo(500, 0);
    }
    });
  });


  $(document).ready(function () {
    $('.dgreen_p').hide();
    var greyfl = 1;
    $('#button_dg').on('click', function(){
    if (greyfl) {
      greyfl = 0;
      $('.greyb').fadeTo(500, 0);
      // $('.blackb').hide();
      $('.dgreen_p').fadeTo(500, 100);
      // $('.green_p').show();
    }
    else {
      greyfl = 1;
      // $('.blackb').show();
      $('.greyb').fadeTo(1000, 100);
      // $('.green_p').hide();
      $('.dgreen_p').fadeTo(500, 0);
    }
    });
  });

  $(document).ready(function () {
    $('.green_pa').hide();
    var whitefl = 1;
    $('#button_p').on('click', function(){
    if (whitefl) {
      whitefl = 0;
      $('.whiteb').fadeTo(500, 0);
      // $('.blackb').hide();
      $('.green_pa').fadeTo(500, 100);

    }
    else {
      whitefl = 1;
      // $('.blackb').show();
      $('.whiteb').fadeTo(1000, 100);
      // $('.green_p').hide();
      $('.green_pa').fadeTo(500, 0);
    }
    });
  });

  $(document).ready(function() {
    $(".move-area").mousemove(function(event) {
    let eye = $(".eye");
    let x = (eye.offset().left) + (eye.width() / 2);
    let y = (eye.offset().top) + (eye.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css ({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
        });
      });
    })
