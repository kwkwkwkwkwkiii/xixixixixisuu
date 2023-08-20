$(document).ready(function () {
  $("#png-image-1, #png-image-2, #glencakes").click(function () {
    $("#png-image-1").toggleClass("bongo-1");
    $("#png-image-2").toggleClass("bongo-2");
    $("#updates-text").slideToggle(600);
  });
});