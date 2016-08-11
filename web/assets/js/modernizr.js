window.Modernizr=function(g,d,r){function p(a,b){return typeof a===b}function J(a,b){for(var c in a){var f=a[c];if(!~(""+f).indexOf("-")&&j[f]!==r)return"pfx"==b?f:!0}return!1}function k(a,b,c){var f=a.charAt(0).toUpperCase()+a.slice(1),d=(a+" "+K.join(f+" ")+f).split(" ");if(p(b,"string")||p(b,"undefined"))return J(d,b);d=(a+" "+L.join(f+" ")+f).split(" ");a:{a=d;for(var e in a)if(f=b[a[e]],f!==r){if(!1===c){b=a[e];break a}if(p(f,"function")){b=f.bind(c||b);break a}b=f;break a}b=!1}return b}var e=
{},n=d.documentElement,h=d.createElement("modernizr"),j=h.style,h=d.createElement("input"),M={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),K=["Webkit","Moz","O","ms"],L=["webkit","moz","o","ms"],c={},s={},q={},y=[],z=y.slice,l,t=function(a,b,c,f){var e,h,g=d.createElement("div"),k=d.body,j=k||d.createElement("body");if(parseInt(c,10))for(;c--;)e=d.createElement("div"),e.id=f?f[c]:"modernizr"+(c+1),g.appendChild(e);c=['&#173;<style id="smodernizr">',a,"</style>"].join("");g.id="modernizr";(k?
g:j).innerHTML+=c;j.appendChild(g);k||(j.style.background="",j.style.overflow="hidden",h=n.style.overflow,n.style.overflow="hidden",n.appendChild(j));a=b(g,a);k?g.parentNode.removeChild(g):(j.parentNode.removeChild(j),n.style.overflow=h);return!!a},A,R={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};A=function(a,b){b=b||d.createElement(R[a]||"div");a="on"+a;var c=a in b;c||(b.setAttribute||(b=d.createElement("div")),b.setAttribute&&b.removeAttribute&&
(b.setAttribute(a,""),c=p(b[a],"function"),p(b[a],"undefined")||(b[a]=r),b.removeAttribute(a)));return c};var B={}.hasOwnProperty,C;C=!p(B,"undefined")&&!p(B.call,"undefined")?function(a,b){return B.call(a,b)}:function(a,b){return b in a&&p(a.constructor.prototype[b],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=z.call(arguments,1),f=function(){if(this instanceof f){var d=function(){};d.prototype=b.prototype;
var d=new d,e=b.apply(d,c.concat(z.call(arguments)));return Object(e)===e?e:d}return b.apply(a,c.concat(z.call(arguments)))};return f});c.flexbox=function(){return k("flexWrap")};c.flexboxlegacy=function(){return k("boxDirection")};c.canvas=function(){var a=d.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))};c.canvastext=function(){return!(!e.canvas||!p(d.createElement("canvas").getContext("2d").fillText,"function"))};c.webgl=function(){return!!g.WebGLRenderingContext};c.touch=
function(){var a;"ontouchstart"in g||g.DocumentTouch&&d instanceof DocumentTouch?a=!0:t(["@media (",w.join("touch-enabled),("),"modernizr){#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop});return a};c.geolocation=function(){return"geolocation"in navigator};c.postmessage=function(){return!!g.postMessage};c.websqldatabase=function(){return!!g.openDatabase};c.indexedDB=function(){return!!k("indexedDB",g)};c.hashchange=function(){return A("hashchange",g)&&(d.documentMode===
r||7<d.documentMode)};c.history=function(){return!(!g.history||!history.pushState)};c.draganddrop=function(){var a=d.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};c.websockets=function(){return"WebSocket"in g||"MozWebSocket"in g};c.rgba=function(){j.cssText="background-color:rgba(150,255,150,.5)";return!!~(""+j.backgroundColor).indexOf("rgba")};c.hsla=function(){j.cssText="background-color:hsla(120,40%,100%,.5)";return!!~(""+j.backgroundColor).indexOf("rgba")||!!~(""+
j.backgroundColor).indexOf("hsla")};c.multiplebgs=function(){j.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(j.background)};c.backgroundsize=function(){return k("backgroundSize")};c.borderimage=function(){return k("borderImage")};c.borderradius=function(){return k("borderRadius")};c.boxshadow=function(){return k("boxShadow")};c.textshadow=function(){return""===d.createElement("div").style.textShadow};c.opacity=function(){var a=w.join("opacity:.55;")+
"";j.cssText=a;return/^0.55$/.test(j.opacity)};c.cssanimations=function(){return k("animationName")};c.csscolumns=function(){return k("columnCount")};c.cssgradients=function(){var a=("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:"+w.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);j.cssText=a;return!!~(""+j.backgroundImage).indexOf("gradient")};c.cssreflections=function(){return k("boxReflect")};c.csstransforms=
function(){return!!k("transform")};c.csstransforms3d=function(){var a=!!k("perspective");a&&"webkitPerspective"in n.style&&t("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight});return a};c.csstransitions=function(){return k("transition")};c.fontface=function(){var a;t('@font-face {font-family:"font";src:url("https://")}',function(b,c){var f=d.getElementById("smodernizr"),f=(f=f.sheet||f.styleSheet)?
f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0])});return a};c.generatedcontent=function(){var a;t('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:3px/1 a}',function(b){a=3<=b.offsetHeight});return a};c.video=function(){var a=d.createElement("video"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,
""),b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(c){}return b};c.audio=function(){var a=d.createElement("audio"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),b.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),b.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),b.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(c){}return b};c.localstorage=
function(){try{return localStorage.setItem("modernizr","modernizr"),localStorage.removeItem("modernizr"),!0}catch(a){return!1}};c.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(a){return!1}};c.webworkers=function(){return!!g.Worker};c.applicationcache=function(){return!!g.applicationCache};c.svg=function(){return!!d.createElementNS&&!!d.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect};c.inlinesvg=
function(){var a=d.createElement("div");a.innerHTML="<svg/>";return"http://www.w3.org/2000/svg"==(a.firstChild&&a.firstChild.namespaceURI)};c.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(M.call(d.createElementNS("http://www.w3.org/2000/svg","animate")))};c.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(M.call(d.createElementNS("http://www.w3.org/2000/svg","clipPath")))};for(var m in c)C(c,m)&&(l=m.toLowerCase(),e[l]=c[m](),y.push((e[l]?"":"no-")+l));if(!e.input){m=
"autocomplete autofocus list placeholder max min multiple pattern required step".split(" ");c=0;for(l=m.length;c<l;c++)q[m[c]]=!!(m[c]in h);q.list&&(q.list=!(!d.createElement("datalist")||!g.HTMLDataListElement));e.input=q;q="search tel url email datetime date month week time datetime-local number range color".split(" ");m=0;for(var x,c=q.length;m<c;m++){h.setAttribute("type",x=q[m]);if(l="text"!==h.type)h.value=":)",h.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(x)&&h.style.WebkitAppearance!==
r?(n.appendChild(h),l=d.defaultView,l=l.getComputedStyle&&"textfield"!==l.getComputedStyle(h,null).WebkitAppearance&&0!==h.offsetHeight,n.removeChild(h)):/^(search|tel)$/.test(x)||(l=/^(url|email)$/.test(x)?h.checkValidity&&!1===h.checkValidity():":)"!=h.value);s[q[m]]=!!l}e.inputtypes=s}e.addTest=function(a,b){if("object"==typeof a)for(var c in a)C(a,c)&&e.addTest(c,a[c]);else{a=a.toLowerCase();if(e[a]!==r)return e;b="function"==typeof b?b():b;n.className+=" "+(b?"":"no-")+a;e[a]=b}return e};j.cssText=
"";var h=h=null,N=function(){var a=v.elements;return"string"==typeof a?a.split(" "):a},E=function(a){var b=O[a[P]];b||(b={},D++,a[P]=D,O[D]=b);return b},Q=function(a,b,c){b||(b=d);if(u)return b.createElement(a);c||(c=E(b));b=c.cache[a]?c.cache[a].cloneNode():S.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!T.test(a)?c.frag.appendChild(b):b},h=function(a){a||(a=d);var b=E(a);if(v.shivCSS&&!F&&!b.hasCSS){var c,f=a;c=f.createElement("p");f=f.getElementsByTagName("head")[0]||
f.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";c=f.insertBefore(c.lastChild,f.firstChild);b.hasCSS=!!c}if(!u){var e=a;b.cache||(b.cache={},b.createElem=e.createElement,b.createFrag=e.createDocumentFragment,b.frag=b.createFrag());e.createElement=function(a){return!v.shivMethods?b.createElem(a):Q(a,e,b)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+
N().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(v,b.frag)}return a},s=this.html5||{},T=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,S=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,F,P="_html5shiv",D=0,O={},u;try{var G=d.createElement("a");G.innerHTML="<xyz></xyz>";F="hidden"in G;var H;if(!(H=1==G.childNodes.length)){d.createElement("a");var I=d.createDocumentFragment();
H="undefined"==typeof I.cloneNode||"undefined"==typeof I.createDocumentFragment||"undefined"==typeof I.createElement}u=H}catch(U){u=F=!0}var v={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==s.shivCSS,supportsUnknownElements:u,shivMethods:!1!==s.shivMethods,type:"default",shivDocument:h,createElement:Q,createDocumentFragment:function(a,b){a||(a=d);if(u)return a.createDocumentFragment();
b=b||E(a);for(var c=b.frag.cloneNode(),f=0,e=N(),g=e.length;f<g;f++)c.createElement(e[f]);return c}};this.html5=v;h(d);e._version="2.6.2";e._prefixes=w;e._domPrefixes=L;e._cssomPrefixes=K;e.mq=function(a){var b=g.matchMedia||g.msMatchMedia;if(b)return b(a).matches;var c;t("@media "+a+" { #modernizr { position: absolute; } }",function(a){c="absolute"==(g.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position});return c};e.hasEvent=A;e.testProp=function(a){return J([a])};e.testAllProps=
k;e.testStyles=t;e.prefixed=function(a,b,c){return b?k(a,b,c):k(a,"pfx")};n.className=n.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+y.join(" "));return e}(this,this.document);


/** Used Only For Touch Devices **/
( function( window ) {
	
	// for touch devices: add class cs-hover to the figures when touching the items
	if( Modernizr.touch ) {

		// classie.js https://github.com/desandro/classie/blob/master/classie.js
		// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
			hasClass = function( elem, c ) {
				return elem.classList.contains( c );
			};
			addClass = function( elem, c ) {
				elem.classList.add( c );
			};
			removeClass = function( elem, c ) {
				elem.classList.remove( c );
			};
		}
		else {
			hasClass = function( elem, c ) {
				return classReg( c ).test( elem.className );
			};
			addClass = function( elem, c ) {
				if ( !hasClass( elem, c ) ) {
						elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function( elem, c ) {
				elem.className = elem.className.replace( classReg( c ), ' ' );
			};
		}

		function toggleClass( elem, c ) {
			var fn = hasClass( elem, c ) ? removeClass : addClass;
			fn( elem, c );
		}

		var classie = {
			// full names
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			// short names
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};

		// transport
		if ( typeof define === 'function' && define.amd ) {
			// AMD
			define( classie );
		} else {
			// browser global
			window.classie = classie;
		}

		[].slice.call( document.querySelectorAll( '.hoverlay' ) ).forEach( function( el, i ) {
			
			el.querySelector( 'a' ).addEventListener( 'touchstart', function(e) {
				e.stopPropagation();
			}, false );
						
			el.addEventListener( 'touchstart', function(e) {
				classie.toggle( this, 'hover' );
			}, false );

		} );

	}

})( window );