/*! limitfixed - v1.0 - 2013-08-13 11:07:00 PM
* Copyright (c) 2013 wuake; Licensed  */
KISSY.add("gallery/limitfixed/1.0/index",function(a,b){var c,d,e,f,g;return f=document,d=a.UA,g=6===d.ie,e={align:["top","left"],offset:[0,0],shim:!1,holder:!1,holderCls:"limitfixed-holder",forceAbs:!1},c=function(){return this.init.apply(this,arguments)},a.augment(c,a.EventTarget,{init:function(c,d,f){return this.cfg=a.merge(e,f),this.elFixed=b.get(c),this.elLimit=b.get(d),this.isFixed=!1,this._fixedType=g?!1:!this.cfg.forceAbs,this._bindEvent(),this.cfg.holder&&this._buildHolder(),this.scroll()},_bindEvent:function(){var a=this;return this.on("fixed",function(c){var d;return d=c.isFixed,d?b.show(a.elFixed):b.hide(a.elFixed)})},_buildHolder:function(){var a,c;return a=this.cfg.holderCls||"",c=b.create("<div class='"+a+"'></div>"),b.height(c,b.outerHeight(this.elFixed)),b.width(c,b.outerWidth(this.elFixed)),b.insertBefore(c,this.elFixed)},setFixed:function(a){return this.isFixed=a,this.fire("fixed",{isFixed:a})},scroll:function(){var a,b,c;return c=this._getRange(),a=this._getRange(this.elLimit),b=this._getCrossRange(c,a),this.setPosition(b,a,c)},_getRange:function(a){var c,d,e,g,h;return a?(e=b.offset(a),d=e.left,g=e.top,h=b.outerWidth(a),c=b.outerHeight(a)):(d=b.scrollLeft(f),g=b.scrollTop(f),h=b.viewportWidth(),c=b.viewportHeight()),{top:g,height:c,left:d,width:h}},_getCrossRange:function(a,b){var c,d,e,f,g;return d=Math.max(a.left,b.left),f=Math.max(a.top,b.top),e=Math.min(a.left+a.width,b.left+b.width),g=Math.min(a.top+a.height,b.top+b.height),c=d>e||f>g?null:{left:d,top:f,width:e-d,height:g-f}},setPosition:function(a,c,d){var e;return null===a?(this.setFixed(!1),e={position:"static",zIndex:""}):(this.setFixed(!0),e=this._calPosition(a,c,d)),b.css(this.elFixed,e)},_calPosition:function(b,c,d){var e,f,g;return g={zIndex:this._getZIndex()},this._fixedType?(e=this._calFixPosition(b,c,d),g.position="fixed"):(e=this._calAbsPosition(b,c,d),g.position="absolute"),f=this._getOffset(),f&&(e.left=e.left+(f.left||0),e.top=e.top+(f.top||0)),a.mix(g,e)},_getZIndex:function(){var a;return a=b.css(this.elFixed,"z-index"),this.cfg.zIndex||parseInt(a,10)||999},_getOffset:function(){var a,b;return a=this.cfg.offset,b={left:1*a[0]||0,top:1*a[1]||0}},_getAlign:function(){var b,c,d,e;return c=a.makeArray(this.cfg.align),e=(c[1]||"").split(" "),d=c[0],b={},-1!==d.indexOf("left")&&(b.leftFixed=!0),-1!==d.indexOf("right")&&(b.rightFixed=!0),-1!==d.indexOf("top")&&(b.topFixed=!0),-1!==d.indexOf("bottom")&&(b.bottomFixed=!0),-1!==e.indexOf("left")&&(b.leftStatic=!0),-1!==e.indexOf("right")&&(b.rightStatic=!0),-1!==e.indexOf("top")&&(b.topStatic=!0),-1!==e.indexOf("bottom")&&(b.bottomStatic=!0),b},_calFixPosition:function(a,c,d){var e,f,g,h,i;return e=this._getAlign(),f=b.outerHeight(this.elFixed),g=b.outerWidth(this.elFixed),e.topFixed?i=Math.min(a.top-d.top,c.top+c.height-f-d.top):e.bottomFixed?i=Math.max(a.top+a.height-f-d.top,c.top-d.top):e.topStatic?i=Math.min(a.top-d.top,c.top-d.top):e.bottomStatic&&(i=Math.max(a.top+a.height-f-d.top,c.top+c.height-f-d.top)),e.leftFixed?h=Math.min(a.left-d.left,c.left+c.width-g-d.left):e.rightFixed?h=Math.max(a.left+a.width-g-d.left,c.left-d.left):e.leftStatic?h=Math.min(a.left-d.left,c.left-d.left):e.rightStatic&&(h=Math.max(a.left+a.width-g-d.left,c.left+c.width-g-d.left)),{left:h,top:i}},_calAbsPosition:function(c,d,e){var f,g,h,i,j,k,l;return k=b.parent(this.elLimit,function(c){return a.inArray(b.css(c,"position"),["relative","absolute"])}),j={left:0,top:0},k?j=b.offset(k):b.contains(this.elLimit,this.elFixed)&&a.inArray(b.css(this.elLimit,"position"),["relative","absolute"])&&(j=b.offset(this.elLimit)),g=b.outerHeight(this.elFixed),h=b.outerWidth(this.elFixed),f=this._getAlign(),f.topFixed?l=Math.min(c.top,d.top+d.height-g)-j.top:f.bottomFixed?l=Math.max(c.top+c.height-g,d.top)-j.top:f.topStatic?l=Math.min(d.top+e.top,d.top)-j.top:f.bottomStatic&&(l=Math.max(c.top+c.height-g,d.top+d.height-g)-j.top),f.leftFixed?i=Math.min(c.left,d.left+d.width-h)-j.left:f.rightFixed?i=Math.max(c.left+c.width-h,d.left)-j.left:f.leftStatic?(console&&console.log(Math.min(d.left+e.left,d.left),d.left,j.left),i=Math.min(d.left+e.left,d.left)-j.left):f.rightStatic&&(i=Math.max(c.left+c.width-h,d.left+d.width-h)-j.left),{left:i,top:l}},_buildIEShim:function(){}}),c},{requires:["dom","event"]});