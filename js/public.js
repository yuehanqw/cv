//自定义tap
$(document).on("touchstart", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("disable")) $target.data("isMoved", 0);
});
$(document).on("touchmove", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("disable")) $target.data("isMoved", 1);
});
$(document).on("touchend", function(e) {
    var $target = $(e.target);
    if(!$target.hasClass("disable") && $target.data("isMoved") == 0) $target.trigger("tap");
});