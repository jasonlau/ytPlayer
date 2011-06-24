<!-- 
/* 
    ytPlayer - A jQuery plugin
    ==================================================================
    ©2010-2011 ytPlayer.com JasonLau.biz - Version 1.0.0
    ==================================================================
    jQuery.ytPlayer Plugin by JasonLau.biz is licensed under a
    Creative Commons Attribution-ShareAlike 3.0 Unported License.
    You can review said license at 
    http://creativecommons.org/licenses/by-sa/3.0/
    Based on a work at ytPlayer.com.
    Permissions beyond the scope of this license may be requested at
    http://JasonLau.biz.    
*/

(function($){
 	$.fn.extend({ 
 		ytplayer: function(options) {
			var defaults = {
			 player : 'http://ytplayer.com/home/player/ytplayer.swf',
             id : 'ytplayer',
             build : '',
             playlist : '',
             autoplay : true,
             shuffle : false,
             repeat : false,
             width : 640,
             height : 360,
             hoverControls : false,
             swfobjectUniqueId : 'ytplayer-' + Math.round(Math.random()*1000),
             flashVersion : 10,
             params : '',
             playbackQuality : 'medium',
             ytkey : 'AI39si7ibKKE9Vsdjd_jf1hM3SFrX9tv9PrEf8fcAGoUf0JK2DJASs3PdYqezizSBnE-hnWnGP7POHR6AMQ8gxSxxjwnxietdA',
             showControls : false,
             controlsContainer : '#ytplayer-controls',
             showSlider : false,
             sliderContainer : '#ytplayer-slider',
             sliderOrientation : 'horizontal',
             sliderRangeClass : 'ui-state-error',
             playPauseButton : false,
             playPauseButtonLabel : ' Play ',
             playButton : false,
             playButtonLabel : ' Play ',
             pauseButton : false,
             pauseButtonLabel : ' Pause ',
             pausedButtonLabel : ' Paused ',
             stopButton : false,
             stopButtonLabel : ' Stop ',
             stoppedButtonLabel : ' Stopped ',
             skipButton : false,
             skipButtonLabel : ' &gt;&gt; ',
             backButton : false,
             backButtonLabel : ' &lt;&lt; ',
             muteButton : false,
             muteButtonLabel : ' Mute ',
             mutedButtonLabel : ' UnMute ',
             stylesheet : false,
             loadjQueryUI : true,
             jQueryUI : 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js',
             jQueryUITheme : 'base',
             jQueryUIThemePath : 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/themes/{theme-name}/jquery-ui.css',
             myClass : '',
             showCategories : false,
             categoriesContainer : '#ytplayer-categories',
             showPlaylist : false,
             playlistContainer : '#ytplayer-playlist',
             showCurrentTitle : false,
             currentTitleContainer : '#ytplayer-current-title',
             showCurrentDescription : false,
             currentDescriptionContainer : '#ytplayer-current-description',
             debug : false   
			}
				
			var options =  $.extend(defaults, options),
            o = options,
            obj = $(this),
            objId = $(this).attr('id');
            
            if(o.jQueryUITheme){
               if(o.jQueryUITheme == 'custom'){
                $('head').append('<link class="ytplayer-ui-theme" rel="stylesheet" href="' + o.jQueryUIThemePath + '" type="text/css" media="all" />');
               } else {
                var tpath = o.jQueryUIThemePath.replace('{theme-name}',o.jQueryUITheme);
                $('head').append('<link class="ytplayer-ui-theme" rel="stylesheet" href="' + tpath + '" type="text/css" media="all" />');
               }                 
            } 
             
            if(o.loadjQueryUI) $('head').append('<script src="' + o.jQueryUI + '" type="text/javascript" rel="ytplayer"></script>\n');
            
            if(o.stylesheet) $('head').append('<link class="ytplayer-stylesheet" rel="stylesheet" href="' + o.stylesheet + '" type="text/css" media="all" />');
            
            if(o.myClass) $(this).addClass(o.myClass);
            
    		return this.each(function() {                
                swfobject_params = 'allowscriptaccess: "always", allowfullscreen: "true", swliveconnect: "true",'
                + 'flashvars: "&id=' + o.id + '&autoplay=' + o.autoplay + '&repeat=' + o.repeat + '&random=' + o.shuffle + '&playlist=' + o.playlist + '&playback_quality=' + o.playbackQuality + '&hover_controls=' + o.hoverControls + '&ytkey=' + o.ytkey + '&api_key=' + o.apiKey + '"';
                output = '<div id="' + o.swfobjectUniqueId + '"></div>\n<script type="text/javascript">var params = { ' + swfobject_params + ' }; var atts = { id: "' + o.id + '" }; ytplayer_swfobject.embedSWF("' + o.player + '?version=' + Math.floor(Math.random()*1000) + '","' + o.swfobjectUniqueId + '", "' + o.width + '", "' + o.height + '", "' + o.flashVersion + '", null, null, params, atts);</script>\n';
                
                if(o.debug) $(".debug-ytplayer").val(output);
                
                $(this).append(output);
                
                if(o.showControls){
                
                if(o.backButton){
                    controls = '<input class="ytplayer-back-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.backButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.playPauseButton){
                    controls += '<input class="ytplayer-play-pause-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.playPauseButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.playButton){
                    controls += '<input class="ytplayer-play-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.playButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.pauseButton){
                    controls += '<input class="ytplayer-pause-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.pauseButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.skipButton){
                    controls += '<input class="ytplayer-skip-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.skipButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.stopButton){
                    controls += '<input class="ytplayer-stop-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.stopButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                
                if(o.muteButton){
                    controls += '<input class="ytplayer-mute-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="button" value="' + o.muteButtonLabel + '" rel="' + o.id + '" disabled="disabled" />';
                }
                }
                
                try{
                  $(o.controlsContainer).html(controls);  
                }catch(e){}
                                              
                mywidth = parseInt(o.width)+.5;                
                if($(this).width() < mywidth){                   
                    var newwidth = $(this).width()+.5
                    $(this).width(newwidth);
                }
                
                if(o.showSlider && o.loadjQueryUI){
                    try{
                      $(o.sliderContainer).slider({
                        range: "min",
                        animate: true,
                        value: 0,
                        orientation: o.sliderOrientation,
                        slide: function(event, ui) {
                          var mydur = ytplayer.getDuration(o.id);
                          var slidervalue = $(o.sliderContainer).slider('value');
                          var to_seconds = (mydur/100)*slidervalue;
                          ytplayer.seekTo(to_seconds,true);  
                        },
                        start: function(event, ui) {
                           $.cookie(o.id+'pstate',$.cookie(o.id+'State'));
                            ytplayer.pauseVideo();
                            clearInterval(ytplayerListener);
                        },
                        stop: function(event, ui) {
                           //unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
                            if($.cookie(o.id+'pstate') == 1){
                              ytplayer.playVideo();  
                            }                           
                            ytplayerListener = window.setInterval(ytplayerState,500);
                        }
                    });  
                    }catch(e){};                    
                }
                 
                $(".ui-slider-range").addClass(o.sliderRangeClass);
                $(".ui-slider-handle").css('cursor','pointer');
                
                $(".ytplayer-play-pause-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    if($(this).val() == o.pauseButtonLabel){
                      ytPlayer.pauseVideo();
                      $(this).val(o.pausedButtonLabel);  
                    } else {
                        ytPlayer.playVideo();
                       $(this).val(o.pauseButtonLabel); 
                    }
                    if(o.pauseButton)
                    $("#"+objId+" .ytplayer-pause-button").val(o.pauseButtonLabel);
                    if(o.stopButton)
                    $("#"+objId+" .ytplayer-stop-button").val(o.stopButtonLabel);
                });
                
                $(".ytplayer-play-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    ytPlayer.playVideo();
                    $(this).val(o.playButtonLabel);
                    if(o.pauseButton)
                    $("#"+objId+" .ytplayer-pause-button").val(o.pauseButtonLabel);
                    if(o.stopButton)
                    $("#"+objId+" .ytplayer-stop-button").val(o.stopButtonLabel);
                });
                
                $(".ytplayer-pause-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    ytPlayer.pauseVideo();
                    $(this).val(o.pausedButtonLabel);
                    if(o.playPauseButton)
                    $("#"+objId+" .ytplayer-play-pause-button").val(o.pausedButtonLabel);                    
                });
                
                $(".ytplayer-stop-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    ytPlayer.stopVideo();
                    $(this).val(o.stoppedButtonLabel);
                    if(o.pauseButton)
                    $("#"+objId+" .ytplayer-pause-button").val(o.pauseButtonLabel);
                    if(o.playPauseButton)
                    $("#"+objId+" .ytplayer-play-pause-button").val(o.playPauseButtonLabel);
                });
                
                $(".ytplayer-mute-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    var is_muted = ytPlayer.isMuted();
                    if(is_muted){
                      ytPlayer.unMute();
                      $(this).val(o.muteButtonLabel);  
                    } else {
                      ytPlayer.mute();
                      $(this).val(o.mutedButtonLabel);  
                    }                   
                });
                
                $(".ytplayer-skip-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    ytPlayer.nextVideo();
                });
                
                $(".ytplayer-back-button").click(function(){
                    ytPlayer = eval($(this).attr('rel'));
                    ytPlayer.previousVideo();
                });
                
                getListData = function(){
                    ytPlayer = eval(o.id);
                    if(o.showCategories){
                        //var categories = ytPlayer.getCategories('delimiter');
                        var categories = ytPlayer.getCategories();
                        $(o.categoriesContainer).html(categories); 
                    }                      
                    if(o.showPlaylist){
                        //var playlist = ytPlayer.getPlaylist('delimiter');
                        var playlist = ytPlayer.getPlaylist();
                        $(o.playlistContainer).html(playlist); 
                    }
                    if(o.showCurrentTitle){
                        var title = ytPlayer.getTitle();
                        $(o.currentTitleContainer).html(title); 
                    }
                    if(o.showCurrentDescription){
                        var info = ytPlayer.getInfo();
                        $(o.currentDescriptionContainer).html(info); 
                    }
                    $(o.categoriesContainer + ' li').css('cursor','pointer');
                    $(o.categoriesContainer + ' li').click(function(){
                        var index = $(this).attr('rel');
                        ytPlayer.playCategory(index);
                    });
                    $(o.playlistContainer + ' li').css('cursor','pointer');
                    $(o.playlistContainer + ' li').click(function(){
                        var index = $(this).attr('rel');
                        ytPlayer.playItem(index);
                    });
                }
                
                ytplayerState = function(){
                    // unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5)
                    ytPlayer = eval(o.id);
                    try{                   
                    var isPlayerLoaded = ytPlayer.isPlayerLoaded();
                    if(isPlayerLoaded){
                        var currentState = ytPlayer.getPlayerState();
                        var currentItem = ytPlayer.getId();
                       if(currentItem != $.cookie(o.id+'CurrentItem') || !$.cookie(o.id+'CurrentItem')){
                        // Refresh lists if current id changed
                        getListData();
                       }
                        var pper = ytplayer.getPlayedPercent();
                        var ytplayer_version = ytPlayer.getVersion();
                        if(o.showSlider){                        
                        $(o.sliderContainer).slider('option', 'value', pper);
                        } 
                       $(o.controlsContainer + " input").prop('disabled',false); 
                                                                                           
                       if(currentState == 1 && o.playPauseButton) $(o.controlsContainer + " .ytplayer-play-pause-button").val(o.pauseButtonLabel);
                       if(currentState == 1 && o.pauseButton) $(o.controlsContainer + " .ytplayer-pause-button").val(o.pauseButtonLabel);
                       if(currentState == 1 && o.stopButton) $(o.controlsContainer + " .ytplayer-stop-button").val(o.stopButtonLabel);
                       if((currentState == 0 || currentState == 5 || currentState == -1) && o.playPauseButton) $(o.controlsContainer + " .ytplayer-play-pause-button").val(o.playPauseButtonLabel);
                       $.cookie(o.id+'State',currentState);
                       $.cookie(o.id+'CurrentItem',currentItem); 
                    }   
                    } catch(e){
                        //alert(e);
                    };                  
                }
                ytplayerListener = window.setInterval(ytplayerState,500);
    		});
        }
	});
	
})(jQuery);

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
    // Renamed for this plugin 
*/

function ytplayer_switchTheme(themeName){
    jQuery('head').append('<link class="ytplayer-ui-theme" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/themes/' + themeName + '/jquery-ui.css" type="text/css" media="all" />');
    $("link.ytplayer-ui-theme:first").remove();
}

var ytplayer_swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in jlembed_swfobject){jlembed_swfobject[X]=null}jlembed_swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

-->