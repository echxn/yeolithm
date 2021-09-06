/*
 * AESTAS THEME by https://yeoli-thm.tumblr.com/
 * Copyright (c) 2021 yeoli-thm
 */

!function(t){t.fn.exists=function(){return this.length>0};var e=window.getComputedStyle(document.body);const a=e.getPropertyValue("--photosetGutterSize"),o={background:"rgba(0,0,0,0)",color:e.getPropertyValue("--audioPlayerTextColor")},i=e.getPropertyValue("--showToggleTagsLabel"),s=e.getPropertyValue("--closeLabel"),n=e.getPropertyValue("--readMoreLabel"),l=window.location.href;var r=t(window),d=t("body"),c=d.find(".modebtn a"),f=d.find(".controlsbtn a"),h=d.find(".controlsbox"),p=d.find(".searchbtn a"),u=d.find("#search-wrapper"),v=u.find(".searchquery"),m=u.find("a.searchclose"),g=0,b=0,C=d.attr("data-tab"),w=d.find(".tabbar-shadow"),y=d.find("#tabbar"),x=y.find("#dropmenu"),k=y.find(".dropbtn"),D=d.find("#highlighted"),T=d.find("#recentlikes"),O=d.find("#navigate"),L=d.find("#following"),I=d.find("#to-top");function P(){t("[title]").tooltipster({anchor:"top-left",offset:[14,-18],plugins:["follower"],animationDuration:300,delay:100,updateAnimation:null,trigger:"custom",triggerOpen:{click:!0,mouseenter:!0,tap:!1,touchstart:!1},triggerClose:{click:!1,mouseleave:!0,originClick:!1,scroll:!0,tap:!0,touchleave:!0}})}if(t.fn.hoverEffect=function(){return this.each(function(){let e=t(this);e.find("span").contents().unwrap().wrap('<div class="lettering"/>');var a=e.find(".lettering"),o="",i=a.html();if(void 0!==i){var s=i.length;i=i.split("");for(var n=0;n<s;n++)o+='<span class="char" data-char="'+n+'">'+i[n]+"</span>";a.html(o),e.find(".char").each(function(){var a,o=t(this),i=o.attr("data-char")*(250/s);e.hover(function(){a=setTimeout(function(){o.addClass("active")},i)},function(){clearTimeout(a),o.removeClass("active")})})}})},t.fn.readMore=function(){return this.find("a.read_more").each(function(){t(this).html("<span>"+n+"</span>")})},t.fn.photoset=function(){return this.find(".photo-slideshow:not(.processed)").pxuPhotoset({lightbox:!0,highRes:!0,rounded:!1,exif:!1,captions:!1,gutter:a,photoset:".photo-slideshow",photoWrap:".photo-data",photo:".pxu-photo"})},t.fn.video=function(){return this.find(".tmblr-embed:not(.processed)").each(function(){let e=t(this);if(e.find(".instagram-media").exists())e.addClass("processed");else{var a=e.find("iframe").attr("src");if(a.indexOf("www.youtube.com")>-1&&a.indexOf("embed"))var o="56%";else{var i=e.find("iframe").width(),s=e.find("iframe").height();o=Math.floor(s/i*100)+"%"}e.find("iframe").wrap('<div class="vid-resize"/>'),e.find(".vid-resize").css({"padding-Bottom":o}),e.addClass("processed")}})},t.fn.audio=function(){return this.find("iframe.tumblr_audio_player").load(function(){let e=t(this);e.contents().find(".audio-player").css(o).find(".progress").css({background:"rgba(0,0,0,0)"}),e.css({opacity:"1"})})},function(){if(d.hasClass("modeswitch")){d.hasClass("dark")&&c.attr("title","Light mode");var t=localStorage.getItem("modeStatus");c.click(function(e){e.preventDefault(),"Light"==t?(d.toggleClass("light dark"),c.tooltipster("hide").tooltipster("content","Light mode"),t="Dark"):(d.toggleClass("dark light"),c.tooltipster("hide").tooltipster("content","Dark mode"),t="Light"),localStorage.modeStatus=t})}}(),l.indexOf("/ask")>-1?d.attr("data-page","ask"):l.indexOf("/submit")>-1&&d.attr("data-page","submit"),P(),t.tooltipster.group("tooltip"),d.on("mouseover",".notes, #about, #sidebar",P),feather.replace({width:14,height:14,"stroke-width":2}),d.addClass("loaded"),t(".hovereffect").hoverEffect(),t(".posts:not(.appended)").each(function(){let e=t(this);return void 0!==e.attr("id")&&(e.readMore().hoverEffect(),e.photoset(),e.video(),e.audio(),function(e){e.find("figure").each(function(){null==t(this).attr("class")&&null!=t(this).attr("data-orig-width")||null!=t(this).attr("data-tumblr-attribution")?t(this).wrap('<div class="npf_photo_wrap_single"/>'):"tmblr-full"!=t(this).attr("class")||t(this).parents(".npf_row").exists()||null!=t(this).attr("data-tumblr-attribution")||t(this).addClass("npf_photo_item")}),e.find(".npf_row").each(function(){t(this).addClass("npf_photo_item");var e=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-height"),a=t(this).first(".npf_col").find("a.post_media_photo_anchor").attr("data-big-photo-width"),o=Math.floor(e/a*100);t(this).find(".tmblr-full").css("padding-bottom",o+"%")}),e.find(".npf_photo_item").not(".npf_photo_item + .npf_photo_item").each(function(){t(this).nextUntil(":not(.npf_photo_item)").addBack().wrapAll('<div class="npf_photo_wrap_group"/>')}),e.find('[class*="npf_photo_wrap_"] img:not(.post_media_photo)').each(function(){var e=t(this),a=e.attr("src"),o=e.attr("data-orig-height"),i=e.attr("data-orig-width");e.wrap('<a class="post_media_photo_anchor" data-big-photo="'+a+'" data-big-photo-height="'+o+'" data-big-photo-width="'+i+'"/>')})}(e),function(t){var e=t.find(".tag_btn"),a=e.find("a"),o=t.find(".post_tags_wrapper");a.click(function(t){t.preventDefault(),e.hasClass("open")?(e.removeClass("open").tooltipster("content",i),o.slideUp(250)):(e.addClass("open").tooltipster("content",s),o.slideDown(250))})}(e)),e.addClass("appended"),this}),p.click(function(t){t.preventDefault(),p.tooltipster("hide"),u.fadeIn(300),d.addClass("search--open"),v.val("").focus()}),m.click(function(t){t.preventDefault(),m.tooltipster("hide"),u.fadeOut(300),d.removeClass("search--open")}),I.click(function(e){e.preventDefault(),t("body,html").animate({scrollTop:0},400)}),x.children().length>1){D.exists()&&t(".topphoto_thumbnail:not(.appended)").each(function(){let e=t(this);var a=t(this).find("figure img"),o=a.attr("src").replace("_250.","_500.");return a.attr("src",o),e.addClass("appended"),this}),T.exists()&&t(".liked_thumbnail:not(.appended)").each(function(){let e=t(this);if("text"==e.attr("data-post-type")){var a=JSON.parse(e.find(".ld_npf_obj").text()).content[0];if("image"==a.type){const t=(o=a.media)[0].url;e.attr("data-post-type",a.type),e.find(".ld_thumbody").html('<figure class="ld_photo"><img src="'+t+'" alt="image"/></figure>')}else if("video"==a.type){const t=null!==(o=a.poster)[0].url?o[0].url:"";e.attr("data-post-type",a.type),e.find(".ld_thumbody").html('<figure class="ld_photo"><img src="'+t+'" alt="video"/></figure><div class="ld_icon"><i data-feather="video" aria-hidden="true"></i></div>')}else if("audio"==a.type){var o;const t=null!==(o=a.poster)[0].url?o[0].url:"",i=null!==a.artist?a.artist:"",s=null!==a.title?a.title:"";e.attr("data-post-type",a.type),e.find(".ld_thumbody").html('<div class="ld_audio"><div class="ld_audio_bg" style="background-image:url('+t+')"></div><div class="ld_audio_inner"><div class="ld_audio_trackname">'+s+'</div><div class="ld_audio_artist">'+i+'</div></div></div><div class="ld_icon"><i data-feather="music" aria-hidden="true"></i></div>')}else e.find(".ld_npf_obj").remove()}return e.addClass("appended"),this}),O.exists()&&(O.find(".nav a").each(function(){t(this).wrapInner("<span/>").hoverEffect()}),O.find(".brandlogo ul").children().length<1&&O.find(".brandlogo").remove()),function(){if(L.exists()){var e=L.find("#following_searchbar"),a=e.find(".followingquery"),o=e.find(".followingclear"),i=L.find("ul#blogroll").find("li.blogroll_item"),s=L.find(".no_following_result"),n=s.find(".result_term"),l=d.find(".following_heading .num");const c=i.length;a.val(""),l.text(c),a.keyup(function(){var a=t(this).val().toLowerCase(),o=a.length;0===o||e.hasClass("active")?0===o&&e.hasClass("active")&&e.removeClass("active"):e.addClass("active");var r=i.hide().filter(function(){return t(this).attr("data-id").toLowerCase().substr(0,o).indexOf(a)>-1}).show().length;l.text(r),0===r?(n.text(a),s.show()):0!==r&&"block"==s.css("display")&&s.hide()}),o.click(function(t){t.preventDefault(),a.val("").parent("#following_searchbar").removeClass("active"),i.toggle(!0),s.add(o).hide(),l.text(c)}),i.each(function(){let e=t(this),a=e.find(".more_wrapper"),o=e.find("a.more_button");e.find(".more_options");const i=e.attr("data-id");o.on("click",function(e){e.preventDefault(),e.stopPropagation(),r.off("click"),a.hasClass("on")?a.removeClass("on"):(t('li.blogroll_item:not([data-id="'+i+'"]) .more_wrapper.on').removeClass("on"),a.addClass("on"),r.one("click",function(t){a.is(t.target)||0!==a.has(t.target).length||a.removeClass("on")}))})})}}(),k.click(function(t){t.preventDefault(),d.hasClass("dd--open")?d.removeClass("dd--open"):d.addClass("dd--open")}),x.find("a").click(function(e){e.preventDefault();const a=t(this).attr("href").substring(1);return d.attr("data-tab",a).removeClass("dd--open"),t("#"+C).animate({opacity:0},{duration:300,complete:function(){t(this).css("display","none"),t("#"+a).css({display:"block"}).animate({opacity:1},300)}}),C=a});var M=_.debounce(function(){const t=Math.ceil(w.offset().top);if(t!=b)return b=t},300);r.resize(M);var S=_.throttle(function(){let e=t(this).scrollTop();e>200&&!I.hasClass("visible")?I.addClass("visible").fadeIn(200):e<=200&&I.hasClass("visible")&&I.fadeOut(200).removeClass("visible");const a=Math.ceil(w.offset().top),o=(b=a!=b?a:b)+72;e-g>0?e>o?(d.hasClass("tb--fixed")||(d.addClass("tb--fixed"),d.hasClass("dd--open")&&d.removeClass("dd--open")),d.hasClass("tb--visible")&&(d.removeClass("tb--visible tb--shadow"),d.hasClass("dd--open")&&setTimeout(function(){d.removeClass("dd--open")},300))):d.hasClass("tb--fixed")&&d.removeClass("tb--fixed tb--visible tb--shadow"):e-g<0&&(e>o?(d.hasClass("tb--fixed")||d.addClass("tb--fixed"),d.hasClass("tb--visible")||d.addClass("tb--visible"),d.hasClass("tb--shadow")||d.addClass("tb--shadow")):e>b&&e<=o?d.hasClass("tb--shadow")&&d.removeClass("tb--shadow"):d.hasClass("tb--fixed")&&d.removeClass("tb--fixed tb--visible tb--shadow")),g=e},100);r.scroll(S)}else{y.add(w).remove(),d.addClass("tb--none");S=_.throttle(function(){let e=t(this).scrollTop();e>200&&!I.hasClass("visible")?I.addClass("visible").fadeIn(200):e<=200&&I.hasClass("visible")&&I.fadeOut(200).removeClass("visible")},100);r.scroll(S)}f.click(function(t){t.preventDefault(),d.hasClass("controls--open")?h.animate({opacity:0},{duration:0,complete:function(){d.removeClass("controls--open"),f.tooltipster("hide").tooltipster("content","Tumblr controls")}}):(d.addClass("controls--open"),h.animate({opacity:1},250),f.tooltipster("hide").tooltipster("content",s))}),r.load(function(){let e=0,a=setInterval(function(){e<10&&(t(".iframe-controls--desktop").exists()||t(".iframe-controls--phone-mobile").exists())?(clearInterval(a),t(".tmblr-iframe--loaded").clone().appendTo(h),d.find(".controlsbtn").show(0).removeClass("hidden")):10===e&&clearInterval(a),e++},1e3)})}(jQuery);
