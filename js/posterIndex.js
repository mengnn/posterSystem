$(function(){
  /**commom.js**/
  function foo($obj){
    $obj.addClass('current').siblings().removeClass('current');
  };

  //导航
  $('.c_left_nav li').on('click ',function(){

    foo($(this));
    var lis = $(this).index();
    $('.f_nav').show();
    $('.f_nav .nav_two_list').eq(lis).show().siblings().hide();
     var objWidth = $('.c_left').width()-3;
    $('.c_right').css('padding-left',objWidth);
    $('.f_nav .pack').show();
  });

  $('.f_nav .pack').on('click',function(){
    $('.f_nav').toggle();
    var objWidth = $('.c_left').width()-3;
    $('.c_right').css('padding-left',objWidth);
  });

    $('.nav_list dt h3').on('click',function(){
      $(this).parent().parent().find('dd').toggle();
      $(this).parent().parent().toggleClass('nav_change')
    })


   //副导航
  $('.invitee_btn li').on('click',function(){
    foo($(this));
  });
  $('.qiandao li').on('click',function(){
    foo($(this));
  });

  // 左边导航栏高度
  $(window).on('load',function(){
      var navHeight = $('.c_left_nav').height();
      var domHeight = $(document).height()-50;
      console.log(navHeight);
      console.log(domHeight);
       $('.c_left_nav').height(domHeight);
       $('.f_nav').height(domHeight);
       $('.model').height(domHeight-20);
  });

  //¸±µ¼º½
  $('.nav_list li').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
    $(this).parent().parent().parent().siblings().find('li').removeClass('current')
  });


  var boxHeight = $('.invitee_b_con').height();
  $('.initee_box').css('height',boxHeight)
  $(window).resize(function() {
    var boxHeight = $('.invitee_b_con').height();
    $('.initee_box').css('height',boxHeight)
  });


  /*tap栏*/
   $('.invitee_b_tit span').on('click',function(){
      $(this).addClass('current').siblings().removeClass('current');
      var num=$(this).index();
      $('.initee_box .invitee_b_con').eq(num).show().siblings().hide();
      var boxHeight = $('.initee_box .invitee_b_con').eq(num).height();
      $('.initee_box').css('height',boxHeight)
    });

   // 新增搜索框
   $('.new_btn p').on('click',function(){
      var num=$(this).index();
      $('.search_box .search_from').eq(num).slideDown(500).siblings().slideUp(500);
      var search_boxH = $('.new_search .search_from').height();
      console.log(search_boxH);
      // $('.editor_search').height(search_boxH);
   });

   // 预览层
   $('.found_b_btn button').eq(0).on('click',function(){
      $('.preview_box').show();
   });
   $('.preview_con .xxx').on('click',function(){
      $('.preview_box').hide();
      $('body').css('overflow-y','auto');
   });



   /***invite-list页**/
  $('.delete').on('click',function(){
    $(this).parent().remove();
  });


  /*******invite-editor页**********/
  //显示
  $('.top_r_btn s').on('click',function(){
    $(this).toggleClass('current');
  });

  // 预览页面
  $('.draw_btn button').eq(0).on('click',function(){
      $('.preview_box').show();
    //存储当前节点
    //drshowDom = $(".dr_show").prop("outerHTML");
    console.log(drshowDom);
    $(".dr_show").each(function(){
       // var Dom = $(this).prop('outerHTML');
       // console.log(Dom);

      //存储当前节点,并添加预览中
      // var drshowDom = $(".dr_show").prop("outerHTML");
      // console.log(drshowDom);
       $('.preview_show').append(drshowDom);
       $('.preview_show .dr_show').css({'position':'static'});
       $('.preview_show .view_show').css('position','static');
       $('body').css('overflow','hidden');
    });
  });

  // 下拉框
  $('.drop_btn').on('click',function(){
    $('.pre_drop_down').slideToggle().css('overflow-y','auto');
  });

  // 平账弹窗
  $('.qiandao_pill').on('click',function(){
    $('.alert_box').show();
  });
  $('.xx').on('click',function(){
    $('.alert_box').hide();
  });
  $('.genre_box_p button').eq(0).on('click',function(){
    $('.alert_box').hide();
  });
  $('.genre_box_p button').eq(1).on('click',function(){
    $('.alert_box').hide();
  });

  $('.into_list_ul li').on('click ',function(){
    foo($(this));
  });
});



