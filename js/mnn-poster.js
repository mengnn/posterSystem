var $i = 0;
var pointX=0;
var pointY=0;
$(function() {
    $( ".form_component" ).sortable({

    });

$(".utilityCol .utility" ).draggable({
    appendTo: "body",
    connectToSortable: ".form_component",
    opacity:0.4,
    cursor: "move",
    helper: "clone",
    revert: "invalid",
    cursorAt: { top: 20, left: 20 } ,
    start:function(event,ui){
     var $tra = ui.helper;

    },
    drag: function() {
    },
    stop:function( event, ui ){

      addClass:"limit-disable";
      $(".form_component .utility").css("display","inline-block");
      /*拖动结束候随意改变组件的位置**************************20170616*/
      $( ".form_component >.utility" ).draggable({
          start:function(event,ui){

          },
          stop:function( event, ui ){
             $(this).addClass("clicked").siblings().removeClass("clicked");
             //$(this).find(".del_img").show();
        }
      });

    }
});

 $(".form_component").droppable({
      accept: ".utility",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) { //排序时不调用
         //alert("放置完成");
         var ultop=$(".form_component").offset().top;
         var ulleft=$(".form_component").offset().left;
         //alert(ultop+"-"+ulleft)
         test(event);
         var t=pointY-ultop-20;
         var l=pointX-ulleft-20;
         //console.log((pointX-ulleft)+"-"+(pointY-ultop));
         //alert($(this).html());
         // $(this).find("li").each(function(){//设置鼠标位置&拖动位置
         //   if($(this).hasClass("clicked")){
         //     //alert(1)
         //     $(this).css("position","absolute");
         //     $(this).css({top:t,left:l});
         //   }
         // })
        $.getScript('js/drag.js',function(){
          all();
        });
        $.getScript('js/mnn-poster.js',function(){
          click_li();
        });
        var html = ui.draggable.html();
        if(html.indexOf("formOption")>0){
          pushItem(ui.draggable);
        };

        $(".formBuilder_main .form_component").find("li[class='utility ui-draggable clicked']").click(); //放置选择组件

        $(".form_component .utility").click();
        /*设置编辑内容回显*/
         $(".drug_cur").addClass('current').siblings().removeClass('current');
         $(".invitee_b_con3").show().siblings().hide();
         $(this).find("div[name='paper']").each(function (){
          var dir = $(this).attr("dir");
          $("#dir"+dir).show().siblings().hide();
        });
      }
    });
});

function test(e){
  pointX = e.pageX;
  pointY = e.pageY;
  //console.log(pointX+"-"+pointY);
}


//添加不同组件
function pushItem($item){
  if($item.find("span.title").text()=="活动标题" ){ //1

      /*if(cnt==0){
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='10'><div class='active_tit_box'><div class='active_tit_img'></div><span class='title'>活动标题</span><div class='halving_line'></div><p class='hint_section' style='color:#333;'></p></div></div><span class='deleteButton' onclick='deleteThis(this)'></span>";
        $item.removeAttr("data-title title");
        $item.find("span.formOption").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.append($newHtml);
      }*/
     /* <div class='coor_right'></div><div class='coor_topR'></div><div class='coor_left'></div><div class='coor_leftTop'></div><div class='coor_leftBottom'></div>*/
  }if($item.find("span.title").text()=="标题" ){
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='11'><div style='position:relative;width: 200px;min-height: 38px;line-height: 1.25;text-align: center;word-wrap: break-word; word-break: normal;' class='dir11 wenzi1'><span style='font-size: 20px;font-family:Microsoft YaHei;font-weight: bold;'>标题</span><img class='del_img' src='images/delete_hover.png'><div class='coor1'></div></div>";

      $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.titleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="正文" ){ //7
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='21'><div class='dir21' style='position:relative;width: 200px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span style='font-size: 14px;font-family:Microsoft YaHei;'>正文</span><img class='del_img' src='images/delete_hover.png'><div class='coor6'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.titleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="宋体" ){ //5
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='14'><div class='dir14' style='position:relative;width: 200px;min-height: 38px;line-height: 1.25;text-align: center;word-wrap: break-word; word-break: normal;'><span style='font-size: 14px;font-family:SimSun;'>宋体正文</span><img class='del_img' src='images/delete_hover.png'><div class='coor5'></div></div></div>";
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.titleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="空白图片" ){ //3
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='12'><div class='dir12 g_picture' style='position:relative;'><img src='images/blackImg.png' class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor3'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片1" ){ //4
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='13'><div class='dir13 g_picture' style='position:relative;'><img src='images/fieldImg1.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor4'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片2"){ //23
      var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='36'><div class='dir39' style='position:relative;'><img src='images/fieldImg2.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor24'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片3" ){ //25
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='25'><div class='dir25' style='position:relative;'><img src='images/fieldImg3.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor10'></div></div></div>";
        $item.removeAttr("data-title id title");
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片4" ){ //13
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='27'><div class='dir27' style='position:relative;'><img src='images/fieldImg4.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor12'></div></div></div>";
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find("img.fieleImg").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.')
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片5" ){ //14
        var time = new Date().getTime();
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='28'><div class='dir28' style='position:relative;'><img src='images/fieldImg5.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor13'></div></div></div>";
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find("img.fieleImg").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.')
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片6" ){ //15
        var time = new Date().getTime();
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='29'><div class='dir29' style='position:relative;'><img src='images/fieldImg6.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor14'></div></div></div>";
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find("img.fieleImg").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.')
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片7"){ //18
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='31'><div class='dir34' style='position:relative;'><img src='images/fieldImg7.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor19'></div></div></div>";
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片8"){ //19
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='32'><div class='dir35' style='position:relative;'><img src='images/fieldImg8.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor20'></div></div></div>";
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片9"){  //20
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='33'><div class='dir36' style='position:relative;'><img src='images/fieldImg9.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor21'></div></div></div>";
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find("img.fieleImg").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }




  if($item.find("span.title").text()=="活动标题"){ //24
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = " <div name='paper' dir='37'><div class='dir40' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>活动标题</span><img class='del_img' src='images/delete_hover.png'><div class='coor25'></div></div><div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="主办方"){  //25
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='38'><div class='dir41' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>主办方</span><img class='del_img' src='images/delete_hover.png'><div class='coor26'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="开始时间"){  //26
        var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='39'><div class='dir42' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>开始时间</span><img class='del_img' src='images/delete_hover.png'><div class='coor27'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="结束时间"){  //27
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='40'><div class='dir43' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>结束时间</span><img class='del_img' src='images/delete_hover.png'><div class='coor28'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="主办方电话"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='43'><div class='dir46' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>联系人</span><img class='del_img' src='images/delete_hover.png'><div class='coor31'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="主办方邮箱"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='44'><div class='dir47' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>联系邮箱</span><img class='del_img' src='images/delete_hover.png'><div class='coor32'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="参会者姓名"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='42'><div class='dir45' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>参会者姓名</span><img class='del_img' src='images/delete_hover.png'><div class='coor30'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="微信头像" ){ //16
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='2C'><div class='dir32' style='position:relative;'><img src='images/u1263.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor17'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="日程表" ){
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='30'><div class='dir33' style='position:relative;width: 370px; min-height: 38px; line-height: 1.25;'><div class='dateBox'><div class='dateStylenone'><div class='styleoneBox'><table class='styleoneTable'><thead class='dateThead'><tr><th>时间</th><th>内容</th><th>人物</th><th>嘉宾</th><th>地点</th></tr></thead><tbody><tr><td><span>12:00</span></td><td><p>类型</p></td><td><p>致欢迎词内容</p><span class='nameJ'>李四嘉宾</span><span class='nameH'>嘉宾简介</span></td><td><p>嘉宾张三</p></td><td><p>会议室101地点</p></td></tr><tr><td><span>12:00-14:00</span></td><td><p>类型</p></td><td><p>致欢迎词内容</p><span class='nameJ'>李四嘉宾</span><span class='nameH'>嘉宾简介</span></td><td><p>嘉宾张三</p></td><td><p>会议室101地点</p></td></tr><tr><td><span>12:00-14:00</span></td><td><p>类型</p></td><td><p>致欢迎词内容</p><span class='nameJ'>李四嘉宾</span><span class='nameH'>嘉宾简介</span></td><td><p>嘉宾张三</p></td><td><p>会议室101地点</p></td></tr></tbody></table></div></div></div><img class='del_img' src='images/delete_hover.png'><div class='coor18'></div></div></div>";
      $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("img.titleImg").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="活动二维码"){  //28
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='41'><div class='dir44' style='position:relative;'><img src='images/u1263.png'  class='fieldImgBox' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor29'></div></div></div>";
      $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  };


};


/*点击时给组件添加类名clickd*/
// function checkedBox(){};
function click_li(){
    $(".form_component .utility").click(function(){
    $(this).addClass("clicked").siblings().removeClass("clicked");
    //$(this).find(".del_img").show();
    $(this).find("div[name='paper']").each(function (){
      var dir = $(this).attr("dir");
      $("#dir"+dir).show().siblings().hide();
    });
  })
}
click_li();

  $(document).on('click','.form_component .utility',function(){
      $(this).addClass("clicked").siblings().removeClass("clicked");
      //$(this).find(".del_img").show();
      $(this).find("div[name='paper']").each(function (){
        var dir = $(this).attr("dir");
        $("#dir"+dir).show().siblings().hide();


       if(dir=="21"){//文本正文回显
         var dirHtml = $(this).find(".dir21").find("span").html();
         $("#dir21").find(".editor1").html(dirHtml);
       }
       if(dir=="11"){//文本标题回显
         var dirHtml = $(this).find(".dir11").find("span").html();
         $("#dir11").find(".editor1").html(dirHtml);
       }
       if(dir=="14"){//文本宋体回显
         var dirHtml = $(this).find(".dir14").find("span").html();
         $("#dir14").find(".editor1").html(dirHtml);
       }
       if(dir=="12"){//空白图片回显
         var dirSrc = $(this).find(".dir12").find(".fieldImgBox").attr("src");
         $("#dir12").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="13"){//空白图片1回显
         var dirSrc = $(this).find(".dir13").find(".fieldImgBox").attr("src");
         $("#dir13").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="36"){//图片2回显
         var dirSrc = $(this).find(".dir39").find(".fieldImgBox").attr("src");
         $("#dir36").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="25"){//图片3回显
         var dirSrc = $(this).find(".dir25").find(".fieldImgBox").attr("src");
         $("#dir25").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="27"){//图片4回显
         var dirSrc = $(this).find(".dir27").find(".fieldImgBox").attr("src");
         $("#dir27").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="28"){//图片5回显
         var dirSrc = $(this).find(".dir28").find(".fieldImgBox").attr("src");
         $("#dir28").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="29"){//图片6回显
         var dirSrc = $(this).find(".dir29").find(".fieldImgBox").attr("src");
         $("#dir29").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="31"){//图片7回显
         var dirSrc = $(this).find(".dir34").find(".fieldImgBox").attr("src");
         $("#dir31").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="32"){//图片8回显
         var dirSrc = $(this).find(".dir35").find(".fieldImgBox").attr("src");
         $("#dir32").find(".dir12Img").attr("src",dirSrc);
       }
       if(dir=="33"){//图片9回显
         var dirSrc = $(this).find(".dir36").find(".fieldImgBox").attr("src");
         $("#dir33").find(".dir12Img").attr("src",dirSrc);
       }


      });

      $('.invitee_b_tit span').each(function(){
         if("编辑内容"==$(this).text()){
           $(this).click();
         }
      });
  });


// 键盘事件 -- 标题
$('#tit_text1').keyup(function(event){
  var txt = $(this).val();
  $('.form_title h2').html(txt);
});
// 键盘事件 -- 描述
$('#tit_text2').keyup(function(event){
  var txt = $(this).val();
  $('.form_title div').html(txt);
});

// 允许范围
$(".form_range_p .input_top").on('change',function(){
   var id = $(this).attr("id");
   if($(this).prop("checked") == true){
     $(this).parent().parent().siblings('.form_range').show();
     if(id=="isBackgroundShow"){
          var backgroundPicUrl = $("#backgroundPicUrl").val();
          if(backgroundPicUrl!=null && backgroundPicUrl!=""){
              $(".formBuilder_example_form").attr("style","background: url(/upload/quesPaper/"+backgroundPicUrl+") no-repeat;background-size: cover;");
          }
     }if(id=="isBannerShow"){
        var bannerPicUrl = $("#bannerPicUrl").val();
        if(bannerPicUrl!=null && bannerPicUrl!=""){
          $("#form_title_bg").attr("src","/upload/quesPaper/"+bannerPicUrl);
          $("#form_title_bg").show();
        }
      }
    }else{
      $(this).parent().parent().siblings('.form_range').hide();
      if(id=="isBackgroundShow"){
        var quesPaperTemplateId
          $(".formBuilder_example_form").css({"background":""});
          var quesPaperTemplateName = $("#quesPaperTemplateId").val().split("_")[1];
          showTempStyle(quesPaperTemplateName);
      }
      if(id=="isBannerShow"){
        $("#form_title_bg").hide();
      }
    }
});
// 更换字体大小
$(".fontSize_change").on('change',function(){
   var fontSize = $(this).val();
   if(fontSize == '18'){
    $('.active_tit_box .title').css('font-size','22px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','18px');
   }else if(fontSize == '16'){
    $('.active_tit_box .title').css('font-size','20px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','16px');
   };
});







// 横排 竖排 -- 调用
$(document).on('click','#dir34 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir35 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir29 .edit_sort span',function(){
    editSort(this);
});
$(document).on('click','#dir6 .edit_sort span',function(){
    editSort(this);
});

/*******多选*******/
//多选--至少项
function checkbox_Must1(obj){
   var checked = $(obj).prop("checked");
   $(".form_component").find("li[class$='clicked']").each(function (){
       if(checked==true){
         $(this).html("<span class='check_must1' style='display:none;'></span>"+ $(this).html());
       }else{
         $(this).find("span[class='check_must1']").remove();
       };
   });
};
// 多选--至少项值
function checkbox_wordLimit1(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("span[class='check_must1']").html(val);
};


/********************选项设置**********************/
/****单选选项设置*****/
// 单选选中
function setSelClick(obj){
     var checkedArr =new Array();
     var i = 0;
     $(obj).parent().parent().find("input[type='radio']").each(function(){
         checked = $(this).prop("checked");
         checkedArr[i] = checked;
         i++;
     });
     $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
          var cnt = 0;
          $(this).find("input[type='radio']").each(function(){
                 $(this).attr("checked",checkedArr[cnt] );
                 cnt++;
           });
      });
}
// 单选描述
function setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='radio']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}
  // 单选选项删除
  function deleteSelOption(obj){
    var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir"); //右边dir
    var count = 0;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
       count++;
    });
    if(count==1){
      alert("不允许删除最后一个选项");
      return ;
    }
    var flag = false;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
         if(flag){
           return;
         }
         var labelName  =$(this).attr("dir"); //左边dir
         if(labelName==name){
           $(this).parent().remove();
           flag = true;
         }
    });
    flag = false;
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(this).find("ul[class='editradio_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
                if(flag){
               return;
              }
              var text = $(this).attr("dir"); //右边
              if(name==text){
                $(this).parent().remove();
                flag = true;
              };
           });
       };
     });
  };
/*********多选选项设置*******/
// 多选选中
function check_setSelClick(obj){
   var checkedArr =new Array();
   var i = 0;
   $(obj).parent().parent().find("input[type='checkbox']").each(function(){
       checked = $(this).prop("checked");
       checkedArr[i] = checked;
       i++;
   });

   $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
        var cnt = 0;
        $(this).find("input[type='checkbox']").each(function(){
               $(this).attr("checked",checkedArr[cnt] );
               cnt++;
         });
    });
};
// 多选描述
function check_setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='checkbox']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}

//多选选项添加
function check_addOption(obj){
    // 右边的
    var time = new Date().getTime();
    var html1 = "<li class='editradio_item' linenum='0'>"
      + "  <input class='editstatus' type='checkbox' name='radio_com1' onclick='check_setSelClick(this);' >"
      +"   <textarea class='edittext textarea input_textarea' onkeyup='check_setSelValue(this);' dir='"+time+"'>新增选项</textarea>"
      +"   <p class='addButton' onclick='check_addOption(this);'></p>"
      +"   <p class='removeButton' onclick='check_deleteSelOption(this);'>";
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
   });
   var type="";
   $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(obj).parent().after(html1);
       type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
     }
    });
  var clazz = "";
  if(type=="横排"){
    clazz = "radio_img_list f_left";
  }else{
    clazz = "radio_img_list";
  }

  var date = new Date().getTime();
  var html2 = "";
  $(obj).parent().parent().each(function(){
    $(this).find("textarea").each(function(){
       var val = $(this).val();
       var textdir = $(this).attr('dir'); ////label中dir
       var checked = $(this).parent().find("input[type='checkbox']").prop("checked");
       var inputHtml = "";
       if(checked==true){
         inputHtml = "<input type='checkbox' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
       }else{
         inputHtml = "<input type='checkbox' name='"+date+"' value='"+val+"' disabled='true'>";
       }
       html2 = html2 + " <li class='"+clazz+"'>"
            + inputHtml
            +"<label class='optionValue' dir='"+textdir+"'>"+val+"</label>"
            +"</li>"
    });
  });
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2);
};
// 多选选项删除
function check_deleteSelOption(obj){
  var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir");
  var count = 0;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
     count++;
  });
  if(count==1){
    alert("不允许删除最后一个选项");
    return ;
  }
  var flag = false;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
       if(flag){
         return;
       }
         var labelName  =$(this).attr("dir");
       if(labelName==name){
         $(this).parent().remove();
         flag = true;
       }
  });
  flag = false;
  $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(this).find("ul[class='editcheckbox_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
              if(flag){
             return;
            }
            var text = $(this).attr("dir");
            if(name==text){
              $(this).parent().remove();
              flag = true;
            }
         });
     };
   });
};
/***提示弹窗***/
  $('.pop_btn').on('click',function(){
    $('.popup').show();
  });
  $('.pop_xx').on('click',function(){
    $('.popup').hide();
  });


/*设置tap栏*/
$('.invitee_b_tit span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
    var num=$(this).index();
    $('.initee_box .invitee_b_con').eq(num).show().siblings().hide();
});

/*显示高度*/

function Heightfn(){
    var editingHeight = $(window).height() - 190 + "px";
    var initeeHeight = $(window).height() - 230 + "px";
    var navHeight = $(window).height() - 50 + "px";
    var posterMnueright = $(window).height() - 210 + "px";
    // alert(posterMnueright)
    $('.editing_content .formBuilder_edit').css('height',editingHeight);
    $('.formBuilder_example_form').css('height',editingHeight);
    $('#initee_box ').css('height',initeeHeight);
    $('.invitee_b_con').css('height',initeeHeight);
    $('.c_left_nav').css('height',navHeight);

    $('.formBuilder_edit .posterMnueright').css('height',posterMnueright);
};
Heightfn();


$(window).resize(function(){
    /*显示高度*/
    Heightfn();
});


/*******************门票设置************************/
// 键盘事件 - 函数 ,标题
function keyupText(obj1,obj2){
  var val = $(obj1).val();
  obj2.html(val);
};


// 1点击 - 新增项目按钮
$(".admission_con .add_btn").on("click",function(event){
    //阻止冒泡
      var event = event || window.event;
      if(event && event.stopPropagation){
          event.stopPropagation();
      }else{
          event.cancelBubble = true;
      };

  $(".add_admission_main").find("li.qwe").each(function(i,element){
      $(element).removeClass("clickBorder");
    });
});
// 2点击空白处保存
$(document).on("click",function(event){
    var event = event || window.event;
    var targetId = event.target?event.target.id:event.srcElement.id;
    if(targetId != "admission_con" ){
      $(".add_admission_main").find("li.qwe").each(function(i,element){
          $(element).removeClass("clickBorder");
        });
    };
});
// 3添加项目 - 编辑，保存
$(document).on("click",".add_admission_main .qwe",function(event){
   //阻止冒泡
    var event = event || window.event;
    if(event && event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    };

  // 点击可以进行编辑
  $(this).parent().find("li.qwe").each(function(i,element){
    $(element).addClass("clickBorder");
  });
  // 点击其他的，当前保存
    $(this).parent().siblings().find("li.qwe").each(function(i,element){
      $(element).removeClass("clickBorder");
    });
});
// 4删除
$(document).on("click",".add_admission_list .remove_btn",function(){
  $(this).parent().remove();
});
// 5选择check
$(document).on("click",".add_admission_list .checkbox_li input",function(){
  var large = $(this).prop("checked");
  if(large == true){
    $(".add_admission_main li").find("input[type='checkbox']").prop("checked",true);
  }else{
    $(".add_admission_main li").find("input[type='checkbox']").prop("checked",false);
  }
});




/****************************************二级联动**************************************************/
// 设置选项
// 一级选项获取光标时显示对应的二级选项
$(document).on("click",".secondOne_ul li",function(){
  var num  = $(this).index();
  $(".relevance_two .secondTwo_ul").eq(num).show().siblings().hide();
});


// 活动标题 - 不留边距
$("div[dir='10']").parent().css("padding","0");

/*******注册页面*******/
$(".form_component  .utility ").removeAttr("title");
/*清除弹窗*/
$(".language div").click(function(){
  $(this).addClass("language_active").siblings().removeClass("language_active");
})
// 开启状态 开关按钮
$(".childs_reset").on('click',function(){
    $(this).toggleClass("project_bg");
})
/*保存按钮*/
function save_web(){
  $("#sucessMsure").show();
}

/****************************20170616**********************************************/
/*组件随意拖动*/
$( ".form_component >.utility" ).draggable({
  // cursorAt: { top: 20, left: 20 } ,//设置鼠标位置
  start:function(event,ui){
  },
  stop:function( event, ui ){
   $(this).addClass("clicked").siblings().removeClass("clicked");
   $(this).find("div[name='paper']").each(function (){
    var dir = $(this).attr("dir");
    $("#dir"+dir).show().siblings().hide();

  });
  }
});

/*
20170619
 键盘事件*/
document.onkeydown=function(event){
     var e = event || window.event || arguments.callee.caller.arguments[0];
     var li_Top=$(".clicked").css("top").split("px")[0];
     var li_left=$(".clicked").css("left").split("px")[0];
    if(e && (/*e.keyCode==8 ||*/ e.keyCode==46)){ // 按 Backspace或delete
        $(".clicked").remove();
     } else if(e &&e.keyCode==38){
          //alert(li_left)
          $(".clicked").css("top",(parseInt(li_Top)-1)+"px");
     }else if(e &&e.keyCode==39){
          $(".clicked").css("left",(parseInt(li_left)+1)+"px");
     }else if(e &&e.keyCode==40){
          $(".clicked").css("top",(parseInt(li_Top)+1)+"px");
     }else if(e &&e.keyCode==37){
          $(".clicked").css("left",(parseInt(li_left)-1)+"px");
     }
};
$(".editing_view_con").click(function(){
  $(".formBuilder_main>ul>li").removeClass("clicked");
})
/*文本内容 - 函数*/
function setText(obj1,obj2){
  var val = $(obj1).html();
  $(obj2).html(val);
};
/*设置字体*/
function fontFamily(obj,attr,selector){
  var val = $(obj).val();
  $(selector).css(attr,val);
}
/*设置行间距*/
function fontLine(obj,attr,selector){
  var val = $(obj).val();
  $(selector).css(attr,val);
}
/*设置字体类型*/
function fontStyle(obj,attr,selector){
  var val = $(obj).val();
  if(val=="normal"){
    $(selector).css("fontStyle",val);
    $(selector).css("fontWeight","");
    $(selector).css("fontStyle","");
    $(selector).css("textDecoration","");
  }if(val=="bold"){
    $(selector).css("fontWeight",val);
  }if(val=="italic"){
    $(selector).css("fontStyle",val);
  }if(val=="underline"){
    $(selector).css("textDecoration",val);
  }

}
/*改变字体大小*/
function size_add(obj,selector1,selector2){
    var t=$(obj).parent().find(selector1);
    t.val(parseInt(t.val())+1);
    sizeNum(selector1,selector2);
}
function size_min(obj,selector1,selector2){
  var t=$(obj).parent().find(selector1);
  t.val(parseInt(t.val())-1)
  if(parseInt(t.val())<12){
  t.val(12);
  }
  sizeNum(selector1,selector2);
}
function sizeNum(selector1,selector2){
  var sizeNum=$(selector1).val();
  if(sizeNum>=12){
    $(selector2).css("fontSize",sizeNum+"px");
  }else if(sizeNum<12){
    sizeNum=12;
    $(selector1).val(sizeNum);
    $(selector2).css("fontSize",sizeNum+"px");
  }
}
/*设置文字对齐方式*/
function fontAlign(obj1,obj2,selector){
  $(obj1).css("color","#4078cb").siblings().css("color","#ccc");
  $(selector).css("textAlign",obj2);
}
/*设置文字寛高*/
function font_width(obj,selector){
  var w_val=$(obj).val();
  $(selector).css("width",w_val+"px");
}
function font_height(obj,selector){
  var h_val=$(obj).val();
  if(h_val>=38){
    $(selector).css("height",h_val+"px");
  }else if(h_val<38){
    h_val=38;
    $(selector).css("height","38px");
  }
}
/*设置文字位置*/
function font_left(obj){
  var l_val=$(obj).val();
  $(".form_component .clicked").css("left",l_val+"px");
}
function font_top(obj){
  var t_val=$(obj).val();
  $(".form_component .clicked").css("top",t_val+"px");
}
/*旋转角度*/
function font_rotate(obj){
  var r_val=$(obj).val();
  $(".form_component .clicked").css("transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-ms-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-moz-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-webkit-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-o-transform","rotate("+r_val+"deg)");
}
/*设置图片寛高*/
function img_width(obj){
  var w_val=$(obj).val();
  $(".form_component .clicked .dir12,.form_component .clicked .dir12b").css("width",w_val+"px");
}
function img_height(obj){
  var h_val=$(obj).val();
    $(".form_component .clicked .dir12,.form_component .clicked .dir12b").css("height",h_val+"px");
}
/*设置图片位置*/
function img_left(obj){
  var l_val=$(obj).val();
  $(".form_component .clicked").css("left",l_val+"px");
}
function img_top(obj){
  var t_val=$(obj).val();
  $(".form_component .clicked").css("top",t_val+"px");
}
/*设置二维码寛高*/
function QR_width(obj){
  var w_val=$(obj).val();
  $('.form_component .clicked .dir13').css("width",w_val+"px");
}
function QR_height(obj){
  var h_val=$(obj).val();
    $('.form_component .clicked .dir13').css("height",h_val+"px");
}
/*自定义字段名称*/
function font_custom(obj){
  var val = $(obj).val();
  $(".form_component .clicked .dir14>span").html(val);
}

$(".form_component .utility").css("display","inline-block");
$(".s_hover").mouseover(function(){
  $(".s_hoverB").css("display","block");
});
$(".s_hover").mouseout(function(){
  $(".s_hoverB").css("display","none");
})
/*控制是否使用默认胸卡*/
function projectSwitch(obj1){
  $(obj1).toggleClass("switch_primary");
  var clazz = $(obj1).attr("class");  //判断是否含有class名switch_primary
  if(clazz.indexOf("switch_primary")>-1){
     $(obj1).find(".on_left").removeClass("on_style");
     $(obj1).find(".off_right").addClass("off_style");
  }else {
     $(obj1).find(".on_left").addClass("on_style");
     $(obj1).find(".off_right").removeClass("off_style");
  };
};
/*多选按钮控制*/
$(".check_box>li").each(function(){
   var input = $(this).find("input").eq(0).attr("type");
   $(this).removeClass("f_left");
   if(input=="radio"){
       $(this).attr("onclick","clickRadio(this);");
   }else if(input=="checkbox"){
       $(this).attr("onclick","clickCheckBox(this);");
   }
});
$(".check_box>li").each(function(){
   var input = $(this).find("input").eq(0).attr("type");
   if(input=="radio"){
       $(this).attr("onclick","clickRadio(this);");
   }else if(input=="checkbox"){
       $(this).attr("onclick","clickCheckBox(this);");
   }
});
function clickRadio(obj){
   $(obj).find("input[type='radio']").prop("checked",true);
}
function clickCheckBox(obj){
   var checked = $(obj).find("input[type='checkbox']").attr("checked");
   var click = $(obj).find("input[type='checkbox']").prop("click");
   if(checked==undefined || checked=="" || checked==false){
        $(obj).find("input[type='checkbox']").attr("checked",true);
        $(obj).find("input[type='checkbox']").prop("checked",true);
   }else{
        $(obj).find("input[type='checkbox']").removeAttr("checked");
        $(obj).find("input[type='checkbox']").prop("checked",false);
        $(".check_box2>li").find("input[type='checkbox']").removeAttr("checked");
        $(".check_box2>li").find("input[type='checkbox']").prop("checked",false);
   }
}
/*全选*/
function clickCheckBoxAll(obj){
   var checked = $(obj).find("input[type='checkbox']").attr("checked");
   var click = $(obj).find("input[type='checkbox']").prop("click");
   if(checked==undefined || checked=="" || checked==false){
        $(obj).find("input[type='checkbox']").attr("checked",true);
        $(obj).find("input[type='checkbox']").prop("checked",true);
        $(".check_box>li").find("input[type='checkbox']").attr("checked",true);
        $(".check_box>li").find("input[type='checkbox']").prop("checked",true);
   }else{
        $(obj).find("input[type='checkbox']").removeAttr("checked");
        $(obj).find("input[type='checkbox']").prop("checked",false);
        $(".check_box>li").find("input[type='checkbox']").removeAttr("checked");
        $(".check_box>li").find("input[type='checkbox']").prop("checked",false);
   }
}
/*设置尺寸选项卡*/
$(".gr").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
  $(".tab_txt1").show().siblings().hide();
});
$(".cus").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
  $(".tab_txt2").show().siblings().hide();
})
$(".tab_txt1>ul>li").click(function(){
  $(this).addClass("border_act").siblings().removeClass("border_act");
  var li_index=$(this).index();
  if(li_index=="0"){
    $(".form_component").css({
      width:"360px",
      height:"470px"
    })
  }else if(li_index=="1"){
    $(".form_component").css({
      width:"448px",
      height:"360px"
    })
  }else if(li_index=="2"){
    $(".form_component").css({
      width:"304px",
      height:"190px"
    })
  }else if(li_index=="3"){
    $(".form_component").css({
      width:"228px",
      height:"152px"
    })
  }
})
/*自定义设置胸卡寛高*/
function set_width(obj){
  var inp_val=$(obj).val();
  // var card_width=inp_val*3.8;
  $(".form_component").css("width",inp_val+"px");
}
function set_height(obj){
  var inp_val=$(obj).val();
  // var card_height=inp_val*3.8;
  $(".form_component").css("height",inp_val+"px");
}


$(".pop_tit .pop_xx").click(function(){
  $(".tanchuang_box").hide();
})
$(".G_txt").click(function(){
  var G_val=$(this).html();
  if(G_val=="显示高级设置..."){
    $(this).html("隐藏高级设置...");
    $(".G_set").css("display","block");
  }else{
    $(this).html("显示高级设置...");
    $(".G_set").css("display","none");
  }
})
// 左右交换内容
$(".name").click(function(){
  $(this).parent().find("div[class^='dir']").css("display","block");
  $(this).parent().siblings().find("div[class^='dir']").css("display","none");
});

function move(type,obj){
   var dir = $(obj).parent().attr("dir");
   if(type==1){
       var html = "<li onclick='move(2,this);'>" + $(obj).html() + "</li>";
       $(".l-r .lr_right").find("ul").find("span[dir='"+dir+"']").append(html);
   }else if(type==2){
       var html = "<li onclick='move(1,this);'>" + $(obj).html() + "</li>";
       var dis=[];
       $(".lr_left>ul>span").find("div[class='dir']").each(function(i){
          dis[i]=$(this).css("display");
          if(dis[i]=="block"){
              $(this).append(html);
          }
       })
   }
   $(obj).remove();
}

$(".form_component .utility").each(function(){
      $(this).mouseover(function(){
        if($(this).hasClass("clicked")){
          $(this).find(".del_img").show();
        }
      });
      $(this).mouseout(function(){
        if($(this).hasClass("clicked")){
          $(this).find(".del_img").hide();
        }
      })
  });

$(".del_img").click(function(){
  $(this).parent().parent().parent().remove();
})



function whichButton(e){
if (window.e&&event.button==1){
  //alert("您在IE中点击了鼠标左键！");
  return  false;
}else if(e&&e.button==0){
   //alert("您在其他浏览器中点击了鼠标左键！");
   return false;
  }
}

function moumove(event){
 event.stopPropagation()
}


/***********************************************20190308*************************************************************/
// 左侧设置选择
$(".posterMnueleft").find("li").click(function(){
  var MnueleftIndex = $(this).index();
  $(this).css("color","#4078cb").siblings().css("color","#000");
  $(".posterMnueright").find(".posterContertLeft").eq(MnueleftIndex).show().siblings().hide();
  // alert(MnueleftIndex)
  if(MnueleftIndex == 0){
    $(".mImg1").attr("src","images/mImg1-1.png");
    $(".mImg2").attr("src","images/mImg2.png");
    $(".mImg3").attr("src","images/mImg3.png");
    $(".mImg4").attr("src","images/mImg4.png");
  }else if(MnueleftIndex == 1){
    $(".mImg1").attr("src","images/mImg1.png");
    $(".mImg2").attr("src","images/mImg2-2.png");
    $(".mImg3").attr("src","images/mImg3.png");
    $(".mImg4").attr("src","images/mImg4.png");
  }else if(MnueleftIndex == 2){
    $(".mImg1").attr("src","images/mImg1.png");
    $(".mImg2").attr("src","images/mImg2.png");
    $(".mImg3").attr("src","images/mImg3-3.png");
    $(".mImg4").attr("src","images/mImg4.png");
  }else if(MnueleftIndex == 3){
    $(".mImg1").attr("src","images/mImg1.png");
    $(".mImg2").attr("src","images/mImg2.png");
    $(".mImg3").attr("src","images/mImg3.png");
    $(".mImg4").attr("src","images/mImg4-4.png");
  }
})

//模板选择
$(".posterM").find(".utilityM").click(function(){
  $(this).addClass('sureModuleposer').siblings().removeClass('sureModuleposer');
  $(this).css("border","1px solid #4078cb").siblings().css("border","1px solid #999");
  $("#moduleBgpo").show();
})
// 模板确定
function posterMsure(){
  var liMindex = $(".posterM").find(".sureModuleposer").index();
  // alert(liMindex)
  if(liMindex == 0){
    $(".formBuilder_main").find(".form_component").css("background","url(images/poster1-1.png ) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM1").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }else if(liMindex == 1){
    $(".formBuilder_main").find(".form_component").css("background","url(images/poster2-2.png) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM2").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }else if(liMindex == 2){
    $(".formBuilder_main").find(".form_component").css("background","url(images/poster3-3.png) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM3").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }else if(liMindex == 3){
    $(".formBuilder_main").find(".form_component").css("background","url(images/poster4-4.png) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM4").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }else if(liMindex == 4){//模板5
    $(".formBuilder_main").find(".form_component").css("background","url(images/Card_bg.png) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM5").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }else if(liMindex == 5){//模板5
    $(".formBuilder_main").find(".form_component").css("background","url(images/poster6-6.png) 0% 0% no-repeat");
    $(".formBuilder_main").find(".form_component").css("background-size","100% 100%");

    var posterM = $("#posterM6").html();
    $(".formBuilder_main").find(".form_component").html(posterM)
  }
  $("#moduleBgpo").hide();
}
// 模板取消
function posterMdelete(){
  $("#moduleBgpo").hide();
}
// 图层优先级
function textZindex(obj,obj1){
  var zindex = $(obj).index();
  // alert(zindex);
  if(zindex == 0){
    $(obj).find("img").attr("src","images/imgTop1-1.png")
    $(obj).parent().find("li").eq(1).find("img").attr("src","images/imgTop2.png");
    $(obj).parent().find("li").eq(2).find("img").attr("src","images/imgTop3.png");
    $(obj).parent().find("li").eq(3).find("img").attr("src","images/imgTop4.png");
    $(obj1).css("z-index","999999999");
  }else if(zindex == 1){
    $(obj).find("img").attr("src","images/imgTop2-2.png");
    $(obj).parent().find("li").eq(0).find("img").attr("src","images/imgTop1.png");
    $(obj).parent().find("li").eq(2).find("img").attr("src","images/imgTop3.png");
    $(obj).parent().find("li").eq(3).find("img").attr("src","images/imgTop4.png");
    $(obj1).css("z-index","8888");
  }else if(zindex == 2){
    $(obj).find("img").attr("src","images/imgTop3-3.png");
    $(obj).parent().find("li").eq(0).find("img").attr("src","images/imgTop1.png");
    $(obj).parent().find("li").eq(1).find("img").attr("src","images/imgTop2.png");
    $(obj).parent().find("li").eq(3).find("img").attr("src","images/imgTop4.png");
    $(obj1).css("z-index","1");
  }else if(zindex == 3){
    $(obj).find("img").attr("src","images/imgTop4-4.png");
    $(obj).parent().find("li").eq(0).find("img").attr("src","images/imgTop1.png");
    $(obj).parent().find("li").eq(2).find("img").attr("src","images/imgTop3.png");
    $(obj).parent().find("li").eq(1).find("img").attr("src","images/imgTop2.png");
    $(obj1).css("z-index","0");
  }
}
/*透明度*/
function font_opacity(obj){
  var r_val=$(obj).val()*0.01;
  $(".form_component .clicked").find(".fieldImgBox").css("opacity",r_val);
}
/*透明度*/
function font_opacitybg(obj){
  var r_val=$(obj).val()*0.01;
  $(".form_component .clicked").find(".fieldImgBox").css("opacity",r_val);
}
/*圆角*/
function font_radius(obj){
  var r_val=$(obj).val();
  $(".form_component .clicked").find(".fieldImgBox").css("border-radius",r_val+"px");
}
/*设置海报背景*/
$(".print_box").find("div").click(function(){
  $(this).addClass("act").siblings().removeClass('act');
  var divIndex = $(this).index();
  $(".posterBgbox").find(".found_constyle1").eq(divIndex).show().siblings().hide();
})


// 日程显示设置
var tableValue=0;  //初始值为0

function checkBox(obj){
  var checkDir=$(obj).attr("dir");
  var checkedV=$(obj).prop('checked');
   //alert(checkedV)
  if(checkedV == true){
    tableValue+=parseInt(checkDir);
    // alert(tableValue);
    if(tableValue == 1){// 时间 内容  嘉宾
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide(); //嘉宾
      $(".nameH").hide();//嘉宾简介

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }
    if(tableValue == 2){// 时间 内容  嘉宾介绍
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }
    if(tableValue == 3){// 时间 内容 嘉宾 嘉宾介绍
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 4){// 时间 内容 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 5){// 时间 内容 嘉宾 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 6){// 时间 内容 嘉宾介绍 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 7){// 时间 内容 嘉宾 嘉宾介绍 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 8){// 时间 内容 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 9){// 时间 内容 嘉宾 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 10){// 时间 内容 嘉宾介绍 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 11){// 时间 内容 嘉宾 嘉宾介绍 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 12){// 时间 内容 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 13){// 时间 内容 嘉宾 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 14){// 时间 内容 嘉宾介绍 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 15){// 时间 内容 嘉宾 嘉宾介绍 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }
  }else{
    tableValue-=parseInt(checkDir);
    // alert(tableValue)
    if(tableValue == 0){
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 1){// 时间 内容  嘉宾
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide(); //嘉宾
      $(".nameH").hide();//嘉宾简介

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }
    if(tableValue == 2){// 时间 内容  嘉宾介绍
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }
    if(tableValue == 3){// 时间 内容 嘉宾 嘉宾介绍
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 4){// 时间 内容 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 5){// 时间 内容 嘉宾 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 6){// 时间 内容 嘉宾介绍 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 7){// 时间 内容 嘉宾 嘉宾介绍 地点
      $(".styleoneTable").find("tr").find("td:nth-child(2)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").hide();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 8){// 时间 内容 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 9){// 时间 内容 嘉宾 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 10){// 时间 内容 嘉宾介绍 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 11){// 时间 内容 嘉宾 嘉宾介绍 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").hide();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").hide();
    }if(tableValue == 12){// 时间 内容 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 13){// 时间 内容 嘉宾 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").hide();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").show();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 14){// 时间 内容 嘉宾介绍 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").hide();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }if(tableValue == 15){// 时间 内容 嘉宾 嘉宾介绍 地点 类型
      $(".styleoneTable").find("tr").find("td:nth-child(2)").show();
      $(".styleoneTable").find("tr").find("td:nth-child(4)").hide();
      $(".styleoneTable").find("tr").find("td:nth-child(5)").show();
      $(".nameJ").show();
      $(".nameH").show();

      $(".dateThead").find("tr").find("th:nth-child(2)").show();
      $(".dateThead").find("tr").find("th:nth-child(4)").hide();
      $(".dateThead").find("tr").find("th:nth-child(5)").show();
    }
  }

}


/*设置边框*/
function fontBorder(obj,attr,selector,selector2){
  var val = $(obj).val();
  $(selector).css(attr,val);
  $(selector2).css(attr,val);
}
/*设置边框宽度*/
function border_width(obj,selector,selector2){
  var w_val=$(obj).val();
  // alert(w_val)
  $(selector).css("border-width",w_val+"px");
  $(selector2).css("border-width",w_val+"px");
}
// 字体加粗
function dateBold(obj,obj2){
  var dateDir=$(obj).attr("dir");
  if(dateDir=="1"){
    $(obj2).css("font-weight","bold");
    $(obj).css("font-weight","bold");
    $(obj).attr("dir","0");
  }else if(dateDir=="0"){
    $(obj2).css("font-weight","normal");
    $(obj).css("font-weight","normal");
    $(obj).attr("dir","1");
  }

}
function dateBold(obj,obj2,obj3){
  var dateDir=$(obj).attr("dir");
  if(dateDir=="1"){
    $(obj2).css("font-weight","bold");
    $(obj3).css("font-weight","bold");
    $(obj).css("font-weight","bold");
    $(obj).attr("dir","0");
  }else if(dateDir=="0"){
    $(obj2).css("font-weight","normal");
    $(obj3).css("font-weight","normal");
    $(obj).css("font-weight","normal");
    $(obj).attr("dir","1");
  }

}
// 表格模板左移
function tableImgl(){
  $(".tableModulemain").animate({left:"0px"},500);
  $(".tableImgl").hide();
  $(".tableImgr").show();
}
// 表格模板左移
function tableImgr(){
  $(".tableModulemain").animate({left:"-832.5px"},500);
   $(".tableImgl").show();
  $(".tableImgr").hide();
}
// 选择模板
$(".tableModulemain3").find("li").click(function(){
  $(this).css("border-color","#4078cb");
  $(this).siblings().css("border-color","#ccc");
  $(this).addClass("tableAct").siblings().removeClass('tableAct');
  $(".tableModulemain4").find("li").removeClass('tableAct');
  $(".tableModulemain4").find("li").css("border-color","#ccc");
})
$(".tableModulemain4").find("li").click(function(){
  $(this).css("border-color","#4078cb");
  $(this).siblings().css("border-color","#ccc");
  $(this).addClass("tableAct").siblings().removeClass('tableAct');
  $(".tableModulemain3").find("li").removeClass('tableAct');
  $(".tableModulemain3").find("li").css("border-color","#ccc");
})
// 确定选择
function sureTablemodule(){
  var imgSrc = $(".tableModulemain").find(".tableAct").find("img").attr("src");
  var imgDir = $(".tableModulemain").find(".tableAct").find("img").attr("dir");
  // alert(imgDir)
  if(imgSrc == "undefined"){
    $(".tanchuang_box").hide();
  }else{
    $(".tanchuang_box").hide();
    $(".tableModule").attr("src",imgSrc);
    if(imgDir == 1){
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr:nth-child(odd)").css("background","#E4F3FF");
      $(".form_component .clicked .styleoneTable tr:nth-child(even)").css("background","#B9DEFF");

      $(".form_component .clicked .styleoneTable").css("border","none");
      $(".form_component .clicked .styleoneTable tr td").css("border","none");
    }else if(imgDir == 2){
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr").css("background","#E4F3FF");
      $(".form_component .clicked .styleoneTable").css("border","1px solid #ccc");
      $(".form_component .clicked .styleoneTable tr td").css("border-top","1px solid #ccc");
    }else if(imgDir == 3){
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr").css("background","#E4F3FF");
      $(".form_component .clicked .styleoneTable").css("border","1px solid #ccc");
      $(".form_component .clicked .styleoneTable tr td").css("border","1px solid #ccc");
    }else if(imgDir == 4){
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr td").css("border","none");
      $(".form_component .clicked .styleoneTable tr td").css("border-bottom","1px dotted #ccc");
      $(".form_component .clicked .styleoneTable").css("border","none");
    }else if(imgDir == 5){
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr td").css("border","none");
      $(".form_component .clicked .styleoneTable tr td").css("border-bottom","1px dotted #ccc");
      $(".form_component .clicked .styleoneTable tr:nth-child(odd) td").css("border-left","1px solid #ccc");
      $(".form_component .clicked .styleoneTable").css("border","1px solid #ccc");

      $(".form_component .clicked .styleoneTable tr:nth-child(odd)").css("background","#E4F3FF");
      $(".form_component .clicked .styleoneTable tr:nth-child(even)").css("background","#B9DEFF");
    }else if(imgDir == 6){
      // alert(123)
      $(".form_component .clicked .styleoneTable tr th").css("background","#67B2F5");
      $(".form_component .clicked .styleoneTable tr th").css("color","#fff");

      $(".form_component .clicked .styleoneTable tr:nth-child(odd)").css("background","rgba(228,243,255,0.6)");
      $(".form_component .clicked .styleoneTable tr:nth-child(even)").css("background","rgba(202,233,253,0.6)");

      $(".form_component .clicked .styleoneTable").css("border","none");
      $(".form_component .clicked .styleoneTable tr td").css("border","none");
    }
  }
}
/*更换表格样式*/
$(".changeTablemodule").click(function(){
  $(".tanchuang_box").show();
})
// 保存
function sucessMsure(){
  $("#sucessMsure").hide();
}
// 分享
function posterShare(){
  $("#posterShare").show();
}
// 取消分享
function cancelShare(){
  $("#posterShare").hide();
}
// 缩小
function scaleS(obj){
  var scaleN = $(obj).parent().find(".scaleN").text();
  var scaleNum = parseInt(scaleN)-5;
  var scaleNum2 = (parseInt(scaleN)-5)*0.01;
  if(scaleNum <= 0){
    $(".scaleN").html("0");
    $(".formBuilder_main").find(".form_component").css("transform","scale(0)");
    $(obj).parent().find(".scaleN").text("0");
  }else{
    $(".scaleN").html(scaleNum);
    $(".formBuilder_main").find(".form_component").css("transform","scale("+scaleNum2+")");
  }
}
// 放大
function scaleM(obj){
  var scaleN = $(obj).parent().find(".scaleN").text();
  var scaleNum = parseInt(scaleN)+5;
  var scaleNum2 = (parseInt(scaleN)+5)*0.01;
  $(".scaleN").html(scaleNum);
  $(".formBuilder_main").find(".form_component").css("transform","scale("+scaleNum2+")");
}
// 还原
function scaleSM(obj){
  $(obj).parent().find(".scaleN").text("100");
  $(".formBuilder_main").find(".form_component").css("transform","scale(1)");
}
// 设置链接弹窗
$(".module_left>a").click(function(){
  $(this).addClass("module_active").siblings().removeClass("module_active");
  var id=$(this).attr("href");
  // alert(id)
  $(id).addClass("module_av").siblings().removeClass("module_av");
});
