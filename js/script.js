    
//ハンバーガー
$(function () {

    $(".sp_btn, .sp_nav li").on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
    });

});


// モーダルウィンドウ
$(function () {
    $('#openModal1').click(function(){
        $('#modalArea1').fadeIn();
    });

    $('#openModal2').click(function(){
        $('#modalArea2').fadeIn();
    });

      $('#openModal3').click(function(){
        $('#modalArea3').fadeIn();
    });

    $('.closeModal, .modalBg').click(function(){
      $('.modalArea').fadeOut();
    });
  });
