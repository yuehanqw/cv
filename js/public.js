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
(function ($) {
    $.fn.typewriter = function (mySwiper) {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                    var index=$ele.parent().index();
                    window.codeOk[index]=true;
                    if(index==mySwiper.activeIndex){
                        mySwiper.slideNext()
                    }
                }
            }, 60);
        });
        return this;
    };
})(jQuery);