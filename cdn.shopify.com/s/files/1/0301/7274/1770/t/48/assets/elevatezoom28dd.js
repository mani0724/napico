typeof Object.create!="function"&&(Object.create=function(e){function a(){}return a.prototype=e,new a}),function(e,a,p,l){var d={init:function(i,o){var t=this;t.elem=o,t.$elem=e(o),t.imageSrc=t.$elem.data("zoom-image")?t.$elem.data("zoom-image"):t.$elem.attr("src"),t.options=e.extend({},e.fn.elevateZoom.options,i),t.options.tint&&(t.options.lensColour="none",t.options.lensOpacity="1"),t.options.zoomType=="inner"&&(t.options.showLens=!1),t.$elem.parent().removeAttr("title").removeAttr("alt"),t.zoomImage=t.imageSrc,t.refresh(1),e("#"+t.options.gallery+" a").click(function(n){return t.options.galleryActiveClass&&(e("#"+t.options.gallery+" a").removeClass(t.options.galleryActiveClass),e(this).addClass(t.options.galleryActiveClass)),n.preventDefault(),e(this).data("zoom-image")?t.zoomImagePre=e(this).data("zoom-image"):t.zoomImagePre=e(this).data("image"),t.swaptheimage(e(this).data("image"),t.zoomImagePre),!1})},refresh:function(i){var o=this;setTimeout(function(){o.fetch(o.imageSrc)},i||o.options.refresh)},fetch:function(i){var o=this,t=new Image;t.onload=function(){o.largeWidth=t.width,o.largeHeight=t.height,o.startZoom(),o.currentImage=o.imageSrc,o.options.onZoomedImageLoaded(o.$elem)},t.src=i},startZoom:function(){var i=this;if(i.nzWidth=i.$elem.width(),i.nzHeight=i.$elem.height(),i.isWindowActive=!1,i.isLensActive=!1,i.isTintActive=!1,i.overWindow=!1,i.options.imageCrossfade&&(i.zoomWrap=i.$elem.wrap('<div style="height:'+i.nzHeight+"px;width:"+i.nzWidth+'px;" class="zoomWrapper" />'),i.$elem.css("position","absolute")),i.zoomLock=1,i.scrollingLock=!1,i.changeBgSize=!1,i.currentZoomLevel=i.options.zoomLevel,i.nzOffset=i.$elem.offset(),i.widthRatio=i.largeWidth/i.currentZoomLevel/i.nzWidth,i.heightRatio=i.largeHeight/i.currentZoomLevel/i.nzHeight,i.options.zoomType=="window"&&(i.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(i.options.zoomWindowBgColour)+";width: "+String(i.options.zoomWindowWidth)+"px;height: "+String(i.options.zoomWindowHeight)+"px;float: left;background-size: "+i.largeWidth/i.currentZoomLevel+"px "+i.largeHeight/i.currentZoomLevel+"px;display: none;z-index:100;border: "+String(i.options.borderSize)+"px solid "+i.options.borderColour+";background-repeat: no-repeat;position: absolute;"),i.options.zoomType=="inner"){var o=i.$elem.css("border-left-width");i.zoomWindowStyle="overflow: hidden;margin-left: "+String(o)+";margin-top: "+String(o)+";background-position: 0px 0px;width: "+String(i.nzWidth)+"px;height: "+String(i.nzHeight)+"px;float: left;display: none;cursor:"+i.options.cursor+";px solid "+i.options.borderColour+";background-repeat: no-repeat;position: absolute;"}i.options.zoomType=="window"&&(lensHeight=i.nzHeight<i.options.zoomWindowWidth/i.widthRatio?i.nzHeight:String(i.options.zoomWindowHeight/i.heightRatio),lensWidth=i.largeWidth<i.options.zoomWindowWidth?i.nzWidth:i.options.zoomWindowWidth/i.widthRatio,i.lensStyle="background-position: 0px 0px;width: "+String(i.options.zoomWindowWidth/i.widthRatio)+"px;height: "+String(i.options.zoomWindowHeight/i.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+i.options.lensOpacity+";filter: alpha(opacity = "+100*i.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+i.options.lensColour+";cursor:"+i.options.cursor+";border: "+i.options.lensBorderSize+"px solid "+i.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"),i.tintStyle="display: block;position: absolute;background-color: "+i.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+i.nzWidth+"px;height: "+i.nzHeight+"px;",i.lensRound="",i.options.zoomType=="lens"&&(i.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(i.options.borderSize)+"px solid "+i.options.borderColour+";width:"+String(i.options.lensSize)+"px;height:"+String(i.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),i.options.lensShape=="round"&&(i.lensRound="border-top-left-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-top-right-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-bottom-left-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;border-bottom-right-radius: "+String(i.options.lensSize/2+i.options.borderSize)+"px;"),i.zoomContainer=e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+i.nzOffset.left+"px;top:"+i.nzOffset.top+"px;height:"+i.nzHeight+"px;width:"+i.nzWidth+'px;"></div>'),e("body").append(i.zoomContainer),i.options.containLensZoom&&i.options.zoomType=="lens"&&i.zoomContainer.css("overflow","hidden"),i.options.zoomType!="inner"&&(i.zoomLens=e("<div class='zoomLens' style='"+i.lensStyle+i.lensRound+"'>&nbsp;</div>").appendTo(i.zoomContainer).click(function(){i.$elem.trigger("click")}),i.options.tint&&(i.tintContainer=e("<div/>").addClass("tintContainer"),i.zoomTint=e("<div class='zoomTint' style='"+i.tintStyle+"'></div>"),i.zoomLens.wrap(i.tintContainer),i.zoomTintcss=i.zoomLens.after(i.zoomTint),i.zoomTintImage=e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+i.nzWidth+"px; height: "+i.nzHeight+'px;" src="'+i.imageSrc+'">').appendTo(i.zoomLens).click(function(){i.$elem.trigger("click")}))),isNaN(i.options.zoomWindowPosition)?i.zoomWindow=e("<div style='z-index:999;left:"+i.windowOffsetLeft+"px;top:"+i.windowOffsetTop+"px;"+i.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){i.$elem.trigger("click")}):i.zoomWindow=e("<div style='z-index:999;left:"+i.windowOffsetLeft+"px;top:"+i.windowOffsetTop+"px;"+i.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(i.zoomContainer).click(function(){i.$elem.trigger("click")}),i.zoomWindowContainer=e("<div/>").addClass("zoomWindowContainer").css("width",i.options.zoomWindowWidth),i.zoomWindow.wrap(i.zoomWindowContainer),i.options.zoomType=="lens"&&i.zoomLens.css({backgroundImage:"url('"+i.imageSrc+"')"}),i.options.zoomType=="window"&&i.zoomWindow.css({backgroundImage:"url('"+i.imageSrc+"')"}),i.options.zoomType=="inner"&&i.zoomWindow.css({backgroundImage:"url('"+i.imageSrc+"')"}),i.$elem.bind("touchmove",function(t){t.preventDefault(),i.setPosition(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0])}),i.zoomContainer.bind("touchmove",function(t){i.options.zoomType=="inner"&&i.showHideWindow("show"),t.preventDefault(),i.setPosition(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0])}),i.zoomContainer.bind("touchend",function(t){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&i.options.zoomType!="inner"&&i.showHideTint("hide")}),i.$elem.bind("touchend",function(t){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&i.options.zoomType!="inner"&&i.showHideTint("hide")}),i.options.showLens&&(i.zoomLens.bind("touchmove",function(t){t.preventDefault(),i.setPosition(t.originalEvent.touches[0]||t.originalEvent.changedTouches[0])}),i.zoomLens.bind("touchend",function(t){i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&i.options.zoomType!="inner"&&i.showHideTint("hide")})),i.$elem.bind("mousemove",function(t){i.overWindow==!1&&i.setElements("show"),(i.lastX!==t.clientX||i.lastY!==t.clientY)&&(i.setPosition(t),i.currentLoc=t),i.lastX=t.clientX,i.lastY=t.clientY}),i.zoomContainer.bind("mousemove",function(t){i.overWindow==!1&&i.setElements("show"),(i.lastX!==t.clientX||i.lastY!==t.clientY)&&(i.setPosition(t),i.currentLoc=t),i.lastX=t.clientX,i.lastY=t.clientY}),i.options.zoomType!="inner"&&i.zoomLens.bind("mousemove",function(t){(i.lastX!==t.clientX||i.lastY!==t.clientY)&&(i.setPosition(t),i.currentLoc=t),i.lastX=t.clientX,i.lastY=t.clientY}),i.options.tint&&i.options.zoomType!="inner"&&i.zoomTint.bind("mousemove",function(t){(i.lastX!==t.clientX||i.lastY!==t.clientY)&&(i.setPosition(t),i.currentLoc=t),i.lastX=t.clientX,i.lastY=t.clientY}),i.options.zoomType=="inner"&&i.zoomWindow.bind("mousemove",function(t){(i.lastX!==t.clientX||i.lastY!==t.clientY)&&(i.setPosition(t),i.currentLoc=t),i.lastX=t.clientX,i.lastY=t.clientY}),i.zoomContainer.add(i.$elem).mouseenter(function(){i.overWindow==!1&&i.setElements("show")}).mouseleave(function(){i.scrollLock||i.setElements("hide")}),i.options.zoomType!="inner"&&i.zoomWindow.mouseenter(function(){i.overWindow=!0,i.setElements("hide")}).mouseleave(function(){i.overWindow=!1}),i.minZoomLevel=i.options.minZoomLevel?i.options.minZoomLevel:2*i.options.scrollZoomIncrement,i.options.scrollZoom&&i.zoomContainer.add(i.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(t){i.scrollLock=!0,clearTimeout(e.data(this,"timer")),e.data(this,"timer",setTimeout(function(){i.scrollLock=!1},250));var n=t.originalEvent.wheelDelta||-1*t.originalEvent.detail;return t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),0<n/120?i.currentZoomLevel>=i.minZoomLevel&&i.changeZoomLevel(i.currentZoomLevel-i.options.scrollZoomIncrement):i.options.maxZoomLevel?i.currentZoomLevel<=i.options.maxZoomLevel&&i.changeZoomLevel(parseFloat(i.currentZoomLevel)+i.options.scrollZoomIncrement):i.changeZoomLevel(parseFloat(i.currentZoomLevel)+i.options.scrollZoomIncrement),!1})},setElements:function(i){if(!this.options.zoomEnabled)return!1;i=="show"&&this.isWindowSet&&(this.options.zoomType=="inner"&&this.showHideWindow("show"),this.options.zoomType=="window"&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&this.options.zoomType!="inner"&&this.showHideTint("show")),i=="hide"&&(this.options.zoomType=="window"&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),this.options.tint&&this.showHideTint("hide"))},setPosition:function(i){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height(),this.nzWidth=this.$elem.width(),this.nzOffset=this.$elem.offset(),this.options.tint&&this.options.zoomType!="inner"&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0})),this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,this.options.zoomType!="lens"&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),this.options.zoomType=="lens"&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"})),this.zoomContainer.css({top:this.nzOffset.top}),this.zoomContainer.css({left:this.nzOffset.left}),this.mouseLeft=parseInt(i.pageX-this.nzOffset.left),this.mouseTop=parseInt(i.pageY-this.nzOffset.top),this.options.zoomType=="window"&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize),this.options.zoomType=="inner"&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize),0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),this.options.zoomType=="window"&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),this.options.zoomType=="inner"&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),this.options.zoomType=="lens"&&(this.windowLeftPos=String(-1*((i.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((i.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?(this.options.zoomType=="lens"&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):(this.options.zoomType=="lens"&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(i)),this.options.tint&&this.options.zoomType!="inner"&&this.setTintPosition(i),this.options.zoomType=="window"&&this.setWindowPostition(i),this.options.zoomType=="inner"&&this.setWindowPostition(i),this.options.showLens&&(this.fullwidth&&this.options.zoomType!="lens"&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(i){i!="show"||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=!0),i=="hide"&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(i){i!="show"||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0),i=="hide"&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),this.isLensActive=!1)},showHideTint:function(i){i!="show"||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0),i=="hide"&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(i){},setWindowPostition:function(i){var o=this;if(isNaN(o.options.zoomWindowPosition))o.externalContainer=e("#"+o.options.zoomWindowPosition),o.externalContainerWidth=o.externalContainer.width(),o.externalContainerHeight=o.externalContainer.height(),o.externalContainerOffset=o.externalContainer.offset(),o.windowOffsetTop=o.externalContainerOffset.top,o.windowOffsetLeft=o.externalContainerOffset.left;else switch(o.options.zoomWindowPosition){case 1:o.windowOffsetTop=o.options.zoomWindowOffety,o.windowOffsetLeft=+o.nzWidth;break;case 2:o.options.zoomWindowHeight>o.nzHeight&&(o.windowOffsetTop=-1*(o.options.zoomWindowHeight/2-o.nzHeight/2),o.windowOffsetLeft=o.nzWidth);break;case 3:o.windowOffsetTop=o.nzHeight-o.zoomWindow.height()-2*o.options.borderSize,o.windowOffsetLeft=o.nzWidth;break;case 4:o.windowOffsetTop=o.nzHeight,o.windowOffsetLeft=o.nzWidth;break;case 5:o.windowOffsetTop=o.nzHeight,o.windowOffsetLeft=o.nzWidth-o.zoomWindow.width()-2*o.options.borderSize;break;case 6:o.options.zoomWindowHeight>o.nzHeight&&(o.windowOffsetTop=o.nzHeight,o.windowOffsetLeft=-1*(o.options.zoomWindowWidth/2-o.nzWidth/2+2*o.options.borderSize));break;case 7:o.windowOffsetTop=o.nzHeight,o.windowOffsetLeft=0;break;case 8:o.windowOffsetTop=o.nzHeight,o.windowOffsetLeft=-1*(o.zoomWindow.width()+2*o.options.borderSize);break;case 9:o.windowOffsetTop=o.nzHeight-o.zoomWindow.height()-2*o.options.borderSize,o.windowOffsetLeft=-1*(o.zoomWindow.width()+2*o.options.borderSize);break;case 10:o.options.zoomWindowHeight>o.nzHeight&&(o.windowOffsetTop=-1*(o.options.zoomWindowHeight/2-o.nzHeight/2),o.windowOffsetLeft=-1*(o.zoomWindow.width()+2*o.options.borderSize));break;case 11:o.windowOffsetTop=o.options.zoomWindowOffety,o.windowOffsetLeft=-1*(o.zoomWindow.width()+2*o.options.borderSize);break;case 12:o.windowOffsetTop=-1*(o.zoomWindow.height()+2*o.options.borderSize),o.windowOffsetLeft=-1*(o.zoomWindow.width()+2*o.options.borderSize);break;case 13:o.windowOffsetTop=-1*(o.zoomWindow.height()+2*o.options.borderSize),o.windowOffsetLeft=0;break;case 14:o.options.zoomWindowHeight>o.nzHeight&&(o.windowOffsetTop=-1*(o.zoomWindow.height()+2*o.options.borderSize),o.windowOffsetLeft=-1*(o.options.zoomWindowWidth/2-o.nzWidth/2+2*o.options.borderSize));break;case 15:o.windowOffsetTop=-1*(o.zoomWindow.height()+2*o.options.borderSize),o.windowOffsetLeft=o.nzWidth-o.zoomWindow.width()-2*o.options.borderSize;break;case 16:o.windowOffsetTop=-1*(o.zoomWindow.height()+2*o.options.borderSize),o.windowOffsetLeft=o.nzWidth;break;default:o.windowOffsetTop=o.options.zoomWindowOffety,o.windowOffsetLeft=o.nzWidth}o.isWindowSet=!0,o.windowOffsetTop+=o.options.zoomWindowOffety,o.windowOffsetLeft+=o.options.zoomWindowOffetx,o.zoomWindow.css({top:o.windowOffsetTop}),o.zoomWindow.css({left:o.windowOffsetLeft}),o.options.zoomType=="inner"&&(o.zoomWindow.css({top:0}),o.zoomWindow.css({left:0})),o.windowLeftPos=String(-1*((i.pageX-o.nzOffset.left)*o.widthRatio-o.zoomWindow.width()/2)),o.windowTopPos=String(-1*((i.pageY-o.nzOffset.top)*o.heightRatio-o.zoomWindow.height()/2)),o.Etoppos&&(o.windowTopPos=0),o.Eloppos&&(o.windowLeftPos=0),o.Eboppos&&(o.windowTopPos=-1*(o.largeHeight/o.currentZoomLevel-o.zoomWindow.height())),o.Eroppos&&(o.windowLeftPos=-1*(o.largeWidth/o.currentZoomLevel-o.zoomWindow.width())),o.fullheight&&(o.windowTopPos=0),o.fullwidth&&(o.windowLeftPos=0),(o.options.zoomType=="window"||o.options.zoomType=="inner")&&(o.zoomLock==1&&(1>=o.widthRatio&&(o.windowLeftPos=0),1>=o.heightRatio&&(o.windowTopPos=0)),o.largeHeight<o.options.zoomWindowHeight&&(o.windowTopPos=0),o.largeWidth<o.options.zoomWindowWidth&&(o.windowLeftPos=0),o.options.easing?(o.xp||(o.xp=0),o.yp||(o.yp=0),o.loop||(o.loop=setInterval(function(){o.xp+=(o.windowLeftPos-o.xp)/o.options.easingAmount,o.yp+=(o.windowTopPos-o.yp)/o.options.easingAmount,o.scrollingLock?(clearInterval(o.loop),o.xp=o.windowLeftPos,o.yp=o.windowTopPos,o.xp=-1*((i.pageX-o.nzOffset.left)*o.widthRatio-o.zoomWindow.width()/2),o.yp=-1*((i.pageY-o.nzOffset.top)*o.heightRatio-o.zoomWindow.height()/2),o.changeBgSize&&(o.nzHeight>o.nzWidth?(o.options.zoomType=="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"}),o.zoomWindow.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"})):(o.options.zoomType!="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvalueheight+"px"}),o.zoomWindow.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvaluewidth+"px"})),o.changeBgSize=!1),o.zoomWindow.css({backgroundPosition:o.windowLeftPos+"px "+o.windowTopPos+"px"}),o.scrollingLock=!1,o.loop=!1):(o.changeBgSize&&(o.nzHeight>o.nzWidth?(o.options.zoomType=="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"}),o.zoomWindow.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"})):(o.options.zoomType!="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvaluewidth+"px"}),o.zoomWindow.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvaluewidth+"px"})),o.changeBgSize=!1),o.zoomWindow.css({backgroundPosition:o.xp+"px "+o.yp+"px"}))},16))):(o.changeBgSize&&(o.nzHeight>o.nzWidth?(o.options.zoomType=="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"}),o.zoomWindow.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"})):(o.options.zoomType=="lens"&&o.zoomLens.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvaluewidth+"px"}),o.largeHeight/o.newvaluewidth<o.options.zoomWindowHeight?o.zoomWindow.css({"background-size":o.largeWidth/o.newvaluewidth+"px "+o.largeHeight/o.newvaluewidth+"px"}):o.zoomWindow.css({"background-size":o.largeWidth/o.newvalueheight+"px "+o.largeHeight/o.newvalueheight+"px"})),o.changeBgSize=!1),o.zoomWindow.css({backgroundPosition:o.windowLeftPos+"px "+o.windowTopPos+"px"})))},setTintPosition:function(i){this.nzOffset=this.$elem.offset(),this.tintpos=String(-1*(i.pageX-this.nzOffset.left-this.zoomLens.width()/2)),this.tintposy=String(-1*(i.pageY-this.nzOffset.top-this.zoomLens.height()/2)),this.Etoppos&&(this.tintposy=0),this.Eloppos&&(this.tintpos=0),this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize)),this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(i,o){var t=this,n=new Image;t.options.loadingIcon&&(t.spinner=e("<div style=\"background: url('"+t.options.loadingIcon+"') no-repeat center;height:"+t.nzHeight+"px;width:"+t.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),t.$elem.after(t.spinner)),t.options.onImageSwap(t.$elem),n.onload=function(){t.largeWidth=n.width,t.largeHeight=n.height,t.zoomImage=o,t.zoomWindow.css({"background-size":t.largeWidth+"px "+t.largeHeight+"px"}),t.zoomWindow.css({"background-size":t.largeWidth+"px "+t.largeHeight+"px"}),t.swapAction(i,o)},n.src=o},swapAction:function(i,o){var t=this,n=new Image;if(n.onload=function(){t.nzHeight=n.height,t.nzWidth=n.width,t.options.onImageSwapComplete(t.$elem),t.doneCallback()},n.src=i,t.currentZoomLevel=t.options.zoomLevel,t.options.maxZoomLevel=!1,t.options.zoomType=="lens"&&t.zoomLens.css({backgroundImage:"url('"+o+"')"}),t.options.zoomType=="window"&&t.zoomWindow.css({backgroundImage:"url('"+o+"')"}),t.options.zoomType=="inner"&&t.zoomWindow.css({backgroundImage:"url('"+o+"')"}),t.currentImage=o,t.options.imageCrossfade){var s=t.$elem,h=s.clone();t.$elem.attr("src",i),t.$elem.after(h),h.stop(!0).fadeOut(t.options.imageCrossfade,function(){e(this).remove()}),t.$elem.width("auto").removeAttr("width"),t.$elem.height("auto").removeAttr("height"),s.fadeIn(t.options.imageCrossfade),t.options.tint&&t.options.zoomType!="inner"&&(s=t.zoomTintImage,h=s.clone(),t.zoomTintImage.attr("src",o),t.zoomTintImage.after(h),h.stop(!0).fadeOut(t.options.imageCrossfade,function(){e(this).remove()}),s.fadeIn(t.options.imageCrossfade),t.zoomTint.css({height:t.$elem.height()}),t.zoomTint.css({width:t.$elem.width()})),t.zoomContainer.css("height",t.$elem.height()),t.zoomContainer.css("width",t.$elem.width()),t.options.zoomType!="inner"||t.options.constrainType||(t.zoomWrap.parent().css("height",t.$elem.height()),t.zoomWrap.parent().css("width",t.$elem.width()),t.zoomWindow.css("height",t.$elem.height()),t.zoomWindow.css("width",t.$elem.width()))}else t.$elem.attr("src",i),t.options.tint&&(t.zoomTintImage.attr("src",o),t.zoomTintImage.attr("height",t.$elem.height()),t.zoomTintImage.css({height:t.$elem.height()}),t.zoomTint.css({height:t.$elem.height()})),t.zoomContainer.css("height",t.$elem.height()),t.zoomContainer.css("width",t.$elem.width());t.options.imageCrossfade&&(t.zoomWrap.css("height",t.$elem.height()),t.zoomWrap.css("width",t.$elem.width())),t.options.constrainType&&(t.options.constrainType=="height"&&(t.zoomContainer.css("height",t.options.constrainSize),t.zoomContainer.css("width","auto"),t.options.imageCrossfade?(t.zoomWrap.css("height",t.options.constrainSize),t.zoomWrap.css("width","auto"),t.constwidth=t.zoomWrap.width()):(t.$elem.css("height",t.options.constrainSize),t.$elem.css("width","auto"),t.constwidth=t.$elem.width()),t.options.zoomType=="inner"&&(t.zoomWrap.parent().css("height",t.options.constrainSize),t.zoomWrap.parent().css("width",t.constwidth),t.zoomWindow.css("height",t.options.constrainSize),t.zoomWindow.css("width",t.constwidth)),t.options.tint&&(t.tintContainer.css("height",t.options.constrainSize),t.tintContainer.css("width",t.constwidth),t.zoomTint.css("height",t.options.constrainSize),t.zoomTint.css("width",t.constwidth),t.zoomTintImage.css("height",t.options.constrainSize),t.zoomTintImage.css("width",t.constwidth))),t.options.constrainType=="width"&&(t.zoomContainer.css("height","auto"),t.zoomContainer.css("width",t.options.constrainSize),t.options.imageCrossfade?(t.zoomWrap.css("height","auto"),t.zoomWrap.css("width",t.options.constrainSize),t.constheight=t.zoomWrap.height()):(t.$elem.css("height","auto"),t.$elem.css("width",t.options.constrainSize),t.constheight=t.$elem.height()),t.options.zoomType=="inner"&&(t.zoomWrap.parent().css("height",t.constheight),t.zoomWrap.parent().css("width",t.options.constrainSize),t.zoomWindow.css("height",t.constheight),t.zoomWindow.css("width",t.options.constrainSize)),t.options.tint&&(t.tintContainer.css("height",t.constheight),t.tintContainer.css("width",t.options.constrainSize),t.zoomTint.css("height",t.constheight),t.zoomTint.css("width",t.options.constrainSize),t.zoomTintImage.css("height",t.constheight),t.zoomTintImage.css("width",t.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide(),this.nzOffset=this.$elem.offset(),this.nzWidth=this.$elem.width(),this.nzHeight=this.$elem.height(),this.currentZoomLevel=this.options.zoomLevel,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,this.options.zoomType=="window"&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var i=this;return i.gallerylist=[],i.options.gallery?e("#"+i.options.gallery+" a").each(function(){var o="";e(this).data("zoom-image")?o=e(this).data("zoom-image"):e(this).data("image")&&(o=e(this).data("image")),o==i.zoomImage?i.gallerylist.unshift({href:""+o,title:e(this).find("img").attr("title")}):i.gallerylist.push({href:""+o,title:e(this).find("img").attr("title")})}):i.gallerylist.push({href:""+i.zoomImage,title:e(this).find("img").attr("title")}),i.gallerylist},changeZoomLevel:function(i){this.scrollingLock=!0,this.newvalue=parseFloat(i).toFixed(2),newvalue=parseFloat(i).toFixed(2),maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight),maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth),this.options.zoomType!="inner"&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),this.options.zoomType=="lens"&&(maxheightnewvalue<=newvalue?(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1))),this.options.zoomType=="inner"&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)),scrcontinue=!1,this.options.zoomType=="inner"&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0))),this.options.zoomType!="inner"&&(scrcontinue=!0),scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&(this.currentZoomLevel=this.newvalueheight,this.options.zoomType!="lens"&&this.options.zoomType!="inner"&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),this.options.zoomType=="lens"||this.options.zoomType=="inner")&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&(this.options.zoomType!="inner"&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),this.options.zoomType!="lens"&&this.options.zoomType!="inner"&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),this.options.zoomType=="lens"||this.options.zoomType=="inner")&&(this.changeBgSize=!0),this.options.zoomType=="inner"&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth))),this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide(),self.zoomLens&&self.zoomLens.hide(),self.zoomTint&&self.zoomTint.hide()},changeState:function(i){i=="enable"&&(this.options.zoomEnabled=!0),i=="disable"&&(this.options.zoomEnabled=!1)}};e.fn.elevateZoom=function(i){return this.each(function(){var o=Object.create(d);o.init(i,this),e.data(this,"elevateZoom",o)})},e.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:e.noop,onZoomedImageLoaded:function(){},onImageSwap:e.noop,onImageSwapComplete:e.noop}}(jQuery,window,document);
//# sourceMappingURL=/s/files/1/0301/7274/1770/t/48/assets/elevatezoom.js.map?v=123299089282303306721641976889