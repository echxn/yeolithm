/*
 * Theme 41 by https://yeoli-thm.tumblr.com/
 * Copyright (c) 2021 yeoli-thm
 */
 
!function(t){t.fn.exists=function(){return this.length>0};var i=window.getComputedStyle(document.body),e=i.getPropertyValue("--photosetGutterSize"),a={background:"rgba(0,0,0,0)",color:i.getPropertyValue("--audioPlayerButtonColor")},n=t(window),s=t("body"),o=s.find("#sidebar-left"),r=o.find("#menu"),d=o.find(".menu_spinner a"),l=45,f=s.find("#sidebar-right"),c=f.find("#pagination"),p=f.find("#searchbar"),h=f.find("a.search_button"),u=f.find(".scrolltop_button");function g(){t("[title]").tooltipster({anchor:"top-left",offset:[14,-18],plugins:["follower"],animationDuration:300,delay:100,updateAnimation:null,trigger:"custom",triggerOpen:{click:!0,mouseenter:!0,tap:!1,touchstart:!1},triggerClose:{click:!1,mouseleave:!0,originClick:!1,scroll:!0,tap:!0,touchleave:!0}})}if(t.fn.photoset=function(){return this.find(".photo-slideshow:not(.processed)").pxuPhotoset({lightbox:!0,highRes:!0,rounded:!1,exif:!1,captions:!1,gutter:e,photoset:".photo-slideshow",photoWrap:".photo-data",photo:".pxu-photo"})},t.fn.video=function(){return this.find(".tmblr-embed:not(.processed)").each(function(){let i=t(this);if(i.find(".instagram-media").exists())i.addClass("processed");else{let t=i.find("iframe").width(),e=i.find("iframe").height(),a=Math.floor(e/t*100)+"%";i.find("iframe").wrap('<div class="vid-resize"/>'),i.find(".vid-resize").css({"padding-Bottom":a}),i.addClass("processed")}})},t.fn.audio=function(){return this.find("iframe.tumblr_audio_player").load(function(){let i=t(this);i.contents().find(".audio-player").css(a).find(".progress").css({background:"rgba(0,0,0,0)"}),i.css({opacity:"1"})})},t.fn.tags=function(){return this.each(function(){let i=t(this).find(".tags");if(i.children().length>5){for(x=1;x<=5;x++)i.find("a.tag:nth-child("+x+")").addClass("visible");i.find("a.tag:nth-child(5)").addClass("ellipsis"),i.append('<a href="#expand" class="expand subfont">see all</a>');let e=i.find(".expand");e.click(function(a){a.preventDefault(),i.find(".tag").each(function(){"none"==t(this).css("display")&&t(this).css({display:"inline-block"})}),i.find(".ellipsis").removeClass("ellipsis"),e.hide().remove()})}else i.find("a.tag").addClass("visible")})},g(),t.tooltipster.group("tooltip"),s.on("mouseover",".sidebar-inner, .notes",g),t(".post").each(function(){var i=t(this);i.photoset(),i.video(),i.audio(),i.tags(),function(i){i.find("figure").each(function(){null==t(this).attr("class")&&null!=t(this).attr("data-orig-width")||null!=t(this).attr("data-tumblr-attribution")?t(this).wrap('<div class="npf-wrap-single"/>'):"tmblr-full"!=t(this).attr("class")||t(this).parents(".npf_row").exists()||null!=t(this).attr("data-tumblr-attribution")||t(this).addClass("npf-item")}),i.find(".npf_row").each(function(){t(this).addClass("npf-item");var i=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-height"),e=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-width"),a=Math.floor(i/e*100);t(this).find(".tmblr-full").css("padding-bottom",a+"%")}),i.find(".npf-item").not(".npf-item + .npf-item").each(function(){t(this).nextUntil(":not(.npf-item)").addBack().wrapAll('<div class="npf-wrap-all"/>')})}(i),i.addClass("appended")}),d.click(function(t){t.preventDefault(),l+=90,r.css({"-webkit-transform":"rotate("+l+"deg)","-moz-transform":"rotate("+l+"deg)","-ms-transform":"rotate("+l+"deg)",transform:"rotate("+l+"deg)"})}),c.exists()){var m=c.find(".current"),b=parseInt(m.attr("data-current"));b<=9?m.text("0"+b):m.text(b)}h.click(function(t){t.preventDefault(),s.hasClass("search--open")?(s.removeClass("search--open"),p.delay(400).hide(0)):(p.show(0),s.addClass("search--open"))}),n.scroll(function(){var i=t(this).scrollTop();i>200&&!u.hasClass("activated")?u.addClass("activated"):i<=200&&t(".scrolltop_button").hasClass("activated")&&u.removeClass("activated")}),u.click(function(i){i.preventDefault(),t("html,body").animate({scrollTop:0},400)})}(jQuery);
