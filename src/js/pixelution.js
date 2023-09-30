/*
 * PIXELUTION THEME by https://yeolithm.com/
 * Copyright (c) 2023 yeoli-thm
 */
 
!function(e){e.fn.exists=function(){return this.length>0};var t=window.getComputedStyle(document.body),a=t.getPropertyValue("--postAudioPlayerBgColor");let s={background:"rgba(0,0,0,0)",color:"rgb("+a+")"};e(window);var n=e("body"),o=n.find("input#menutoggle"),i=n.find("label.menu_button");function r(){e("[title]").tooltipster({anchor:"top-left",offset:[14,-18],plugins:["follower"],animationDuration:300,delay:100,updateAnimation:null,trigger:"custom",triggerOpen:{click:!0,mouseenter:!0,tap:!1,touchstart:!1},triggerClose:{click:!1,mouseleave:!0,originClick:!1,scroll:!0,tap:!0,touchleave:!0}})}e.fn.isEmpty=function(t,a){return this.find(t).each(function(){1!==e(this).children().length||e.trim(e(this).find(a).html()).length||e(this).parent().hide()})},e.fn.photoset=function(){return this.find(".photo-slideshow:not(.processed)").pxuPhotoset({lightbox:!0,highRes:!0,rounded:!1,exif:!1,captions:!1,gutter:"4px",photoset:".photo-slideshow",photoWrap:".photo-data",photo:".pxu-photo"})},e.fn.video=function(){return this.find(".tmblr-embed:not(.processed)").each(function(){var t=e(this);if(t.find(".instagram-media").exists())t.addClass("processed");else{var a=t.find("iframe").width(),s=t.find("iframe").height();t.find("iframe").wrap('<div class="vid-resize"/>'),t.find(".vid-resize").css({"padding-Bottom":Math.floor(s/a*100)+"%"}),t.addClass("processed")}})},r(),e.tooltipster.group("tooltip"),n.on("mouseover","#sidebar, .notes",r),function e(){var a=n.attr("data-shape"),s=document.getElementById(a+"text");let o=t.getPropertyValue("--sidebarImageText"),i=o.length;var r=59%i;if(i<=19){switch(i){case 1:d=41;break;case 2:d=15;break;case 3:d=8;break;case 4:d=5;break;case 5:d=3;break;case 8:case 7:case 6:d=2;break;default:d=1}for(var l=r+i*d,c=(59-r)/i-d,p=c-1,u=1;u<=c;u++){if(1==u)var h=0;else var h=l/p+.2+"ch";var f=document.createTextNode(o+""),g=document.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttributeNS(null,"dx",h),g.appendChild(f),s.appendChild(g)}}else{var h=(59-i)/2+"ch",f=document.createTextNode(o+""),g=document.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttributeNS(null,"dx",h),g.appendChild(f),s.appendChild(g)}}(),e(".post:not(.appended)").each(function(){var t,a=e(this);return a.attr("id"),a.isEmpty("li.trail-content",".entry"),a.isEmpty(".info-entry","a"),a.find(".ajax-notes:not(processed)").exists()&&e.ajax({url:a.attr("data-notesURL"),success:function(e){a.find(".notes-loading").remove(),a.find(".ajax-notes").html(e).addClass("processed")}}),a.photoset(),a.video(),(t=a).hasClass("audio")&&t.find("iframe.tumblr_audio_player").load(function(){var t=e(this);t.contents().find(".audio-player").css(s).find(".progress").css({background:"rgba(0,0,0,0)"}),t.css({opacity:"1"})}),t.find(".audio-caption:not(.processed)").each(function(){var t=e(this);if(t.find(".album-cover").exists()){let a=t.find(".album-cover").attr("src");t.addClass("has--cover").attr("style","background-image:url("+a+")")}t.append('<div class="svgaudiobutton"><svg class="playbutton"><use xlink:href="#playButton"/></svg><svg class="pausebutton"><use xlink:href="#pauseButton"/></svg></div>');var s=t.find(".svgaudiobutton"),n=t.next("audio").children("source").attr("src"),o=new Audio(n);o.addEventListener("canplay",function(){s.addClass("playable")}),o.addEventListener("timeupdate",function(){var e=o.duration;o.currentTime==e&&s.removeClass("playing").addClass("paused")}),s.click(function(){!1==o.paused?(s.removeClass("playing").addClass("paused"),o.pause()):(s.removeClass("paused").addClass("playing"),o.play())}),t.addClass("processed")}),a.addClass("appended"),this}),o.change(function(){this.checked?i.tooltipster("content","bio"):i.tooltipster("content","menu")})}(jQuery);
