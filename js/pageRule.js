(function($){
  $.pageRuler = function(params){
    params = params || {};
    var flag = $("#zxxScaleBox").size() === 0 ? true : false;
    if(flag){
      $('<div class="zxxScaleBox" id="zxxScaleBox" onselectstart="return false;"><div id="zxxScaleRulerH" class="zxxScaleRuler_h"></div><div id="zxxScaleRulerV" class="zxxScaleRuler_v"></div><div id="zxxRefDotH" class="zxxRefDot_h"></div><div id="zxxRefDotV" class="zxxRefDot_v"></div><div class="zxxRefCrtBg" id="zxxRefCrtBg" style="display:none;"><div class="zxxRefCrtTit"><a href="javascript:void(0);" id="zxxRefCrtClose" class="zxxRefCrtClose"></a></div><div class="zxxRefCrtX"><div class="zxxRefCrtLeft"><div class="zxxRefCrtDir"><input type="radio" id="zxxCrtV" class="zxxRefCrtRadio" name="zxxRefCrt" checked="checked" /><label for="zxxCrtV">鍨傜洿</label></div><div class="zxxRefCrtDir"><input type="radio" id="zxxCrtH" class="zxxRefCrtRadio" name="zxxRefCrt" /><label for="zxxCrtH">姘村钩</label></div>  <div class="zxxRefCrtPlace">浣嶇疆锛�<input id="zxxRefCrtInput" class="zxxRefCrtInput" type="text" />px</div></div><div class="zxxRefCrtRight"><button type="button" id="zxxRefCrtSure" class="zxxRefCrtBtn">纭畾</button><button type="button" id="zxxRefCrtCancel" class="zxxRefCrtBtn">鍙栨秷</button></div></div></div></div>').appendTo($("#starff"));
    }else{
      $("#zxxScaleBox").show();
    }
    //鏁翠釜鏍囧昂鐩掑瓙瀵硅薄锛屽瀭鐩存爣灏轰笌姘村钩鏍囧昂瀵硅薄锛岃櫄绾垮璞★紝寮瑰嚭妗嗗璞★紝鍗曢€夊璞★紝鏂囨湰瀵硅薄锛屾寜閽璞�
    var x= $("#zxxScaleBox"), rh = $("#zxxScaleRulerH"), rv = $("#zxxScaleRulerV"), doth = $("#zxxRefDotH"), dotv = $("#zxxRefDotV"), bg = $("#zxxRefCrtBg"), clo = $("#zxxRefCrtClose"), rdov = $("#zxxCrtV"), rdoh = $("#zxxCrtH"), ipt = $("#zxxRefCrtInput"), sur = $("#zxxRefCrtSure"), cancel = $("#zxxRefCrtCancel"), dragFlag = false, oDrag = null;
    //娴忚鍣ㄥ楂�
    var w, h, bgw = bg.width(), bgh = bg.height();
    var f = {
      box: function(){
        w = $(window).width(), h = $(window).height();
        //鏁翠釜box鐨勫楂�
        /*x.height(h).width(w);*/
        var editingHeight = $(window).height() - 192 ;
         x.height(editingHeight).width(550);
        //寮瑰嚭灞傜殑瀹氫綅
        bg.css({
          left: (w - bgw)  / 2,
          top: (h - bgh) / 2
        });
      },
      ui: function(){
        rh.html("");
        rv.html("");
        //鍒涘缓鏍囧昂鏁板€�
        for(var i=0; i<w; i+=1){
          if(i % 15 === 0){
            console.log(w);
            console.log(i);
            $('<span class="n">'+i+'</span>').css("left", 57*(i/15)).appendTo(rh);
          }
        }
        //鍨傜洿鏍囧昂鏁板€�
        for(var i=0; i<h; i+=1){
          if(i % 15 === 0){
            $('<span class="n">'+i+'</span>').css("top", 57*(i/15)).appendTo(rv);
          }
        }
      },
      ie6: function(){
        if(!window.XMLHttpRequest){
          $(window).scroll(function(){
            var t = $(document).scrollTop();
             x.css("top", t);
          });
          if(flag){
            $(window).trigger("scroll");
          }
        }
      },
      newv: function(t){//鍒涘缓鏂扮殑鍨傜洿鍙傝€冪嚎锛屾湁鏁堝搴�3鍍忕礌
        var id = "zxxRefLineV"+($(".zxxRefLine_v").size()+1);
        $('<div class="zxxRefLine_v"></div>')
          .appendTo(x)
          .attr({
              "id": id,
              "title": t
          });
        return $("#"+id);
      },
      newh: function(t){//鍒涘缓鏂扮殑鍨傜洿鍙傝€冪嚎锛屾湁鏁堝搴�3鍍忕礌
        var id = "zxxRefLineH"+($(".zxxRefLine_h").size()+1);
        $('<div class="zxxRefLine_h"></div>')
          .appendTo(x)
          .attr({
              "id": id,
              "title": t
          });
        return $("#"+id);
      },
      dashv: function(){
        $(document).bind("mousemove",function(e){
          //alert(dragFlag);
          if(dragFlag){
            //alert(e.screenX);
            //濡傛灉鍙互鎷栨嫿
            //鍨傜洿铏氱嚎鐨勫乏鍧愭爣
            dotv.css("left",e.pageX);
          }
        });
      },
      dashh: function(){
        $(document).bind("mousemove",function(e){
          if(dragFlag){
            //濡傛灉鍙互鎷栨嫿
            //鍨傜洿铏氱嚎鐨勫乏鍧愭爣
            doth.css("top",e.pageY-$(window).scrollTop());
          }
        });
      },
      //寮瑰嚭妗嗙浉鍏虫柟娉�
      sure: function(){
        //鐐瑰嚮纭畾鎸夐挳
        var dirv = rdov.attr("checked")? true : false;
        var v = parseInt(ipt.val(), 10);
        if(v){
          var pos = v.toString()+"px";
          if(dirv){
            f.newv(pos).css("left", v-1);
          }else{
            f.newh(pos).css("top", v-1);
          }
          $(".zxxRefLine_v").show();
          $(".zxxRefLine_h").show();
          f.cacl();
        }else{
          alert("璇疯緭鍏ュ悎閫傜殑鏁板€笺€�");
        }
      },
      cacl: function(){
        ipt.val("");
        bg.hide();
        return false;
      },
      //鎵归噺鍙傝€冪嚎鍒涘缓
      crtv: function(arr){
        if($.isArray(arr)){
          $.each(arr, function(i, n){
            var posv =  parseInt(n, 10);
            if(posv > 0 && posv < w){
              nposv = posv.toString() + "px";
              f.newv(nposv).css("left", posv-1);
            }
          });
        }
      },
      crth: function(arr){
        if($.isArray(arr)){
          $.each(arr, function(i, n){
            var posh =  parseInt(n, 10);
            if(posh > 0 && posh < h){
              nposh = posh.toString() + "px";
              f.newh(nposh).css("top", posh-1);
            }
          });
        }
      },
      //鑾峰彇鎵归噺鍙傝€冪嚎鍙傛暟
      crtdata: function(){
        if(params.v){
          f.crtv(params.v);
        }
        if(params.h){
          f.crth(params.h);
        }
      },
      //鍒濆鍖栨墽琛�
      init: function(){
        f.box();
        f.ui();
        f.ie6();
        f.crtdata();
      }
    };
    f.init();

    /*娴忚鍣ㄦ媺浼告椂锛屾爣灏鸿嚜閫傚簲*/
    $(window).resize(function(){
      f.box();
      f.ui();
    });
    //鍙傝€冪嚎鐨勬按骞虫嫋绉�
    $(".zxxRefLine_v").live("mousedown", function(){
      oDrag = $(this);
      dragFlag = true;
      f.dashv();
    });
    //鍙傝€冪嚎鐨勫瀭鐩存嫋绉�
    $(".zxxRefLine_h").live("mousedown", function(){
      oDrag = $(this);
      dragFlag = true;
      f.dashh();
    });
    $(document).mouseup(function(e){
      $(this).unbind("mousemove");
      dragFlag = false;
      if(oDrag){
        if(oDrag.hasClass("zxxRefLine_v")){
          var v_l = e.pageX;
          if(v_l < rv.width()){
            v_l = -600;
          }
          oDrag.css("left", v_l-1).attr("title", v_l+"px");
        }else{
          var v_t = e.pageY-$(window).scrollTop();
          if(v_t < rh.height()){
            v_t = 600;
          }
          oDrag.css("top", v_t-1).attr("title", v_t+"px");
        }
      }
      oDrag = null;
      dotv.css("left", -10);
      doth.css("top", -10);
    }).keyup(function(e){
      if(e.keyCode === k["slash"]){
        bg.show();
        ipt.focus();
      }
    });
    //鎷栧姩鏍囧昂鍒涘缓鏂扮殑鍙傝€冪嚎
    rv.bind("mousedown", function(){
      oDrag = f.newv();
      dragFlag = true;
      f.dashv();
    });
    rh.bind("mousedown", function(){
      oDrag = f.newh();
      dragFlag = true;
      f.dashh();
    });
    //寮瑰嚭妗嗕竴浜涙柟娉曚簨浠剁殑缁戝畾
    clo.bind("click", f.cacl);
    cancel.bind("click", f.cacl);
    sur.bind("click", f.sure);
    ipt.bind("keyup", function(e){
      if(e.keyCode === k["enter"]){
        f.sure();
      }
    });
  };

  //蹇嵎閿弬鏁�
  var k = {
    "enter": 13, //鍥炶溅
    "r": 82, //瀛楁瘝R
    "slash": 220, //鏂滅嚎keyCode
    "semi": 59, //鍒嗗彿锛岀伀鐙�
    "semi2": 186, //鍒嗗彿
    "esc": 27
  };
  //渚﹀惉閿洏浜嬩欢
  $(document).keyup(function(e){
    if(e.keyCode === k["r"]){
      $.pageRulerToggle();
    }
    if(e.keyCode === k["semi"] || e.keyCode === k["semi2"]){
      $.lineToggle();
    }
    if(e.keyCode === k["esc"]){
      $.pageRulerHide();
    }
  });
  $.lineToggle = function(){
    $(".zxxRefLine_v").toggle();
    $(".zxxRefLine_h").toggle();
  };
  $.pageRulerHide = function(){
    $("#zxxScaleBox").hide();
  };
  $.pageRulerToggle = function(params){
    if($("#zxxScaleBox").size() && $("#zxxScaleBox").css("display") === "block"){
      $("#zxxScaleRulerH").toggle();
      $("#zxxScaleRulerV").toggle();
    }else{
      $.pageRuler(params);
    }
  };
})(jQuery);
