"use strict";
! function(e) {
    e(".inputfile").each(function() {
        var t = e(this),
            n = t.next("label"),
            i = n.html();
        t.on("change", function(t) {
            var e = "";
            this.files && 1 < this.files.length ? e = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : t.target.value && (e = t.target.value.split("\\").pop()), e ? n.find("span").html(e) : n.html(i)
        }), t.on("focus", function() {
            t.addClass("has-focus")
        }).on("blur", function() {
            t.removeClass("has-focus")
        })
    })
}(jQuery, (window, document));