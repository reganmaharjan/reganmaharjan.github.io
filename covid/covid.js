$('.map-stat').css({'opacity':'0','z-index':'1'});
$('.update-info').css({'z-index':'2'});
$('.button1').css({'box-shadow': '13px 4px 5px -6px rgba(0,0,0,0.21)', 'background':'white', 'z-index':'3'});
$('.video-css').css({'box-shadow': '-11px -18px 29px -17px rgba(0,0,0,0.19)'});
$('.button1').click(function(){  
    $('.update-info').css({'opacity':'1', 'z-index':'2'});
    $('.map-stat').css({'z-index':'1','opacity':'0'});
    $(this).css({'box-shadow': '13px 4px 5px -6px rgba(0,0,0,0.21)', 'background':'white', 'z-index':'3', 'background':'white'});
    $('.video-css').css({'box-shadow': '-11px -18px 29px -17px rgba(0,0,0,0.19)', 'z-index':'2'});
    $('.button2').css({'background':'#6BCDFD', 'z-index':'2'});
});

$('.button2').click(function(){  
    $('.map-stat').css({'opacity':'1', 'z-index':'2'});
    $('.update-info').css({'z-index':'1','opacity':'0'});
    $(this).css({'box-shadow': '-9px -4px 5px 1px rgba(0,0,0,0.18)', 'background':'white', 'z-index':'3', 'background':'white'});
    $('.map-stat').css({'box-shadow': '-11px -18px 29px -17px rgba(0,0,0,0.19)', 'z-index':'2'});
    $('.button1').css({'background':'#6BCDFD', 'z-index':'2'});
});
