//弹窗
function viewTask(id){
 $("div[id^=light]").hide();
 $("#"+id).show();
 $("#fade").show();
}
function cancel(id){
$("#"+id).hide();
$("#fade").hide();
}
/*

 */
$(".main-ul").find("li").mouseover(function(){
  $(this).find(".ulImgMould").show();
  $(this).find(".Ptext1").hide();
  $(this).find(".Ptext2").show();
});
$(".main-ul").find("li").mouseout(function(){
  $(this).find(".ulImgMould").hide();
  $(this).find(".Ptext1").show();
  $(this).find(".Ptext2").hide();
})
