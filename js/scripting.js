$(function (){
/******************************************************** start aside bar *****************************/
  /******start switch bar *********/
  $('.bar').on('click',function(){
    $('body').toggleClass('switch');
    if($('body').hasClass('switch') ){
      $("body").animate({
        paddingLeft:300
      },550);
      $('aside').animate({
        left:0
      },500);
      $('.container').animate({
        paddingLeft:15,
        paddingRight:15
      },500); 
      $('.asid_bars').fadeOut();
      $('.fa-arrow-left').fadeIn();
      $('.bar').css('right','-25px');

      }else{
        $("body").animate({
          paddingLeft:0
        },500);
        $('aside').animate({
          left:-300
        },500);
        $('.container').animate({
          paddingLeft:100,
          paddingRight:100
        },500);
        $('.asid_bars').fadeIn();
        $('.fa-arrow-left').fadeOut();
        $('.bar').css('right','-35px');
      }  
  });
  /********* start hover icons  *********/
  $('aside .list li').on('click',function(){
    $(this).children('i').addClass('chang_backcolor').parent('li').siblings().children('i').removeClass('chang_backcolor');
    $(this).children('a').addClass('chang_color').parent('li').siblings().children('a').removeClass('chang_color');
  });

  /** start go to section **/
  $('aside .list li').on('click',function(){
    $('body,html').animate({
      scrollTop:$($(this).children('a').data('scroll')).offset().top+1
    },1000)
  })
  /** end go to section   **/


  $(window).scroll(function() {
      $('.block').each(function(){
        if($(window).scrollTop() > $(this).offset().top){
          var block_id=$(this).attr('id');
          $('aside .list li a').removeClass('chang_color');
          $('aside .list li i').removeClass('chang_backcolor');
          $('aside .list li a[data-scroll="#'+  block_id + '"]').addClass('chang_color');
          $('aside .list li a[data-scroll="#'+  block_id + '"]').parent('li').children('i').addClass('chang_backcolor');
        }
      })

});


/****************************************************** end aside bar *****************************/



/****************************************************** start nav  bar *****************************/
$('nav .fa-bars').on('click',function(){
$('nav .list_nav').slideToggle();
});

  /** start active color  **/
  $('nav .list_nav li').on('click',function(){
    $(this).children('a').addClass('chang_color').parent('li').siblings().children('a').removeClass('chang_color');
  });
  /** end active color   **/
  /** start go to section **/
$('nav .list_nav li').on('click',function(){
  $('body,html').animate({
    scrollTop:$($(this).children('a').data('scroll')).offset().top
  },1000)
})
  /** end go to section **/
/****************************************************** end nav bar *****************************/




/***************************************************** start header  *****************************/

/****** start middel ************/

me();
function me(){
  $('.middel .description ul li').each(function(){
    if($(this).hasClass('active')){
      $(this).delay(2000).animate({
        left:100,
        opacity:0
      },500,function(){
        $(this).removeClass('active').css({left:'0',opacity:'1'}).next().addClass('active')
        me();
        if($('.middel .description ul li.active').is(':last-child')){
            $('.middel .description ul li').eq(0).hide().delay(2500).fadeIn(1).addClass('active')
        }
      })
    }
  }); 
}

/****** end middel ************/

/****** start control bord ****/
  $('.control .list_color li').on('click',function(){
    $('body').attr('data-main',$(this).data('color'));
  });

  $('.setting').on('click',function(){
    $(this).toggleClass('switch_right');
    if($(this).hasClass('switch_right')){
      $('.control').animate({
        right:-190
      },500)
    }else{
      $('.control').animate({
        right:0
      },500)
    }
  })
/******** start reset  */
$('.reset').on('click',function(){
  $('body').attr('data-main','blue')
})
/******** end reset  */

/** start sun shin */
$('.sun').on('click',function(){
  $('body').addClass('add')
});
$('.moon').on('click',function(){
  $('body').removeClass('add')
})
/** end sun shin */
/***************************************************** end header  *****************************/



/***************************************************** start blogs   *****************************/
$("#owl-demo").owlCarousel({
  autoPlay: 3000, //Set AutoPlay to 3 seconds
  items : 4,
  itemsDesktop : [1199,2],
  itemsDesktopSmall : [979,2]
});

var custum=0;
$('.blogs .item').each(function(){
  if($(this).height() > custum){
    custum=$(this).height();
  }
});
$('.blogs .item').height(custum)
/***************************************************** end blogs  *****************************/



/***************************************************** start contact us    *****************************/
var store='';
$('.contact form input,textarea').focus(function(){
    store=($(this).attr('placeholder'));
    $(this).attr('placeholder','')
})
$('.contact form input,textarea').blur(function(){
  $(this).attr('placeholder',store)
})
/***************************************************** end contact us   *****************************/




/***************************************************** start nice scroll  ****************************/
$("html").niceScroll({
  horizrailenabled:false, 
  cursorwidth:"4px",
  cursorborder:'none',
  emulatetouch: true,
  cursordragontouch: true,
  touchbehavior: true,
  grabcursorenabled: true,
});
/***************************************************** end nice scroll   *****************************/



/*****************************************************start scroll to top  *****************************/
$(window).on('scroll',function(){
  if($(this).scrollTop()>3000){
      $('.scroll_top').fadeIn(1000);
  }else{
      $('.scroll_top').fadeOut(1000);
  }
});
$(".scroll_top").on('click',function(){
  $('html,body').animate({
      scrollTop:0
  },2000)
});
/*****************************************************end scroll to top  *****************************/



}); // end page 



//start loading
$(window).on('load',function(){
  $('.loading_overlay').fadeOut(1000);
});
//end loading






