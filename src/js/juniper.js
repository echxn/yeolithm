/*
 * Juniper Theme by https://yeoli-thm.tumblr.com/
 * Copyright (c) 2021 yeoli-thm
 */
 
!function(t){t.fn.exists=function(){return this.length>0};var e=window.getComputedStyle(document.body),i=e.getPropertyValue("--photosetGutterSize"),n={background:"rgba(0,0,0,0)",color:e.getPropertyValue("--audioPlayerButtonColor")},o=t(window),a=t("body"),s=t("body.index-page").exists(),d=(t("body.grid").exists(),t("body.sidemenu").exists()),l=t("#pagination.defaultload").exists(),r=t("#pagination.infiniteload").exists(),c=t("#pagination.manualload").exists();if(r)var u=null,p=400,h=!0;else if(c)u=".load-more-button",p=!1,h=!1;var f=t(".overlay"),m=t("#sidebar-overlay"),g=t("#sidebar"),b=g.find("a.menu-button"),v=g.find("a.menu-close"),w=g.find('input[name="car"]'),C=g.find(".carousel-body"),y=g.find("#search-button"),k=g.find(".search-icon"),x=window.matchMedia("(min-width: 1124px)"),D=t("#totop");function S(){t("[title]").tooltipster({anchor:"top-left",offset:[14,-18],plugins:["follower"],animationDuration:300,delay:100,maxWidth:160,updateAnimation:null,trigger:"custom",triggerOpen:{click:!0,mouseenter:!0,tap:!1,touchstart:!1},triggerClose:{click:!1,mouseleave:!0,originClick:!1,scroll:!0,tap:!0,touchleave:!0}})}function z(){S(),t.tooltipster.group("tooltip"),a.on("mouseover","#carousel, .notes",S)}function B(){t('[class*="-item"]:not(.appended)').each(function(){var e=t(this);if(e.hasClass("grid-item")){var i=e.attr("data-thumbnailID"),n=e.find("a.gd_thumbnail_overlay"),o=t('.post-item[id="'+i+'"]'),s=o.find("li.close_btn a");n.click(function(e){e.preventDefault(),a.addClass("thumbnail--open"),o.addClass("show"),o.find(".notes_loader:not(processed)").exists()&&t.ajax({url:o.attr("data-notesURL"),success:function(t){o.find(".notes_loading").hide(),o.find(".notes_loader").html(t).slideDown().addClass("processed")}}),f.add(s).click(function(t){t.preventDefault(),a.removeClass("thumbnail--open"),o.removeClass("show")})})}return function(e){e.find("figure").each(function(){null==t(this).attr("class")&&null!=t(this).attr("data-orig-width")||null!=t(this).attr("data-tumblr-attribution")?t(this).wrap('<div class="npf-wrap-single"/>'):"tmblr-full"!=t(this).attr("class")||t(this).parents(".npf_row").exists()||null!=t(this).attr("data-tumblr-attribution")||t(this).addClass("npf-item")}),e.find(".npf_row").each(function(){t(this).addClass("npf-item");var e=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-height"),i=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-width"),n=Math.floor(e/i*100);t(this).find(".tmblr-full").css("padding-bottom",n+"%")}),e.find(".npf-item").not(".npf-item + .npf-item").each(function(){t(this).nextUntil(":not(.npf-item)").addBack().wrapAll('<div class="npf-wrap-all"/>')})}(e),e.photoset(),e.video(),e.audio(),e.addClass("appended"),this})}function M(){C.css("height",t(".slide_"+t('input[name="car"]:checked').attr("data-value")).outerHeight()+40)}t.fn.photoset=function(){return this.find(".photo-slideshow:not(.processed)").pxuPhotoset({lightbox:!0,highRes:!0,rounded:!1,exif:!1,captions:!1,gutter:i,photoset:".photo-slideshow",photoWrap:".photo-data",photo:".pxu-photo"})},t.fn.video=function(){return this.find(".tmblr-embed:not(.processed)").each(function(){var e=t(this);if(e.find(".instagram-media").exists())e.addClass("processed");else{var i=e.find("iframe").width(),n=e.find("iframe").height(),o=Math.floor(n/i*100)+"%";e.find("iframe").wrap('<div class="vid-resize"/>'),e.find(".vid-resize").css({"padding-Bottom":o}),e.addClass("processed")}})},t.fn.audio=function(){return this.find("iframe.tumblr_audio_player").load(function(){var e=t(this);e.contents().find(".audio-player").css(n).find(".progress").css({background:"rgba(0,0,0,0)"}),e.css({opacity:"1"})})},z(),B(),y.change(function(){t(this).is(":checked")?k.tooltipster("content","Close search"):k.tooltipster("content","Search")}),b.click(function(t){return t.preventDefault(),a.addClass("menu--open"),C.delay(400).slideDown(400,function(){v.add(m).click(function(t){t.preventDefault(),C.slideUp(400,function(){a.removeClass("menu--open"),y.prop("checked",!1)})})}),!1}),o.load(function(){d||t("#check_b").exists()||(t('input[id^="check_"]:nth-of-type(1)').prop("checked",!0),x.matches&&M())}),w.change(M);var P=_.debounce(function(){a.hasClass("thumbnail--open")?(a.removeClass("thumbnail--open"),t(".post-item").removeClass("show")):a.hasClass("menu--open")&&(a.removeClass("menu--open"),y.prop("checked",!1)),!d&&x.matches?C.show(0,function(){M()}):d||x.matches?sideMenu&&C.hide(0):C.hide(0).css("height","auto")},300);o.resize(P);var T=_.throttle(function(){var e=t(this).scrollTop();e>200&&"none"==D.css("display")?D.fadeIn(200):e<=200&&"block"==D.css("display")&&D.fadeOut(200)},400);if(o.scroll(T),D.click(function(e){return e.preventDefault(),t("body,html").animate({scrollTop:0},600),!1}),s&&!l){var U=t("#main");t(".npf_row").each(function(){t(this).addClass("clickable")}),U.infiniteScroll({append:'[class*="-item"]',path:"a#next",status:".page-load-status",button:u,scrollThreshold:p,prefill:h}),U.on("append.infiniteScroll",function(e,i,n,o){B(),t(".npf_row:not(.clickable):not(.disabled)").each(function(){t(this).addClass("disabled")});var a=t(o).map(function(){return t(this).attr("id")}).get();Tumblr.LikeButton.get_status_by_post_ids(a),z()})}}(jQuery);
