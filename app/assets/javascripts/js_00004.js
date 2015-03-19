(function(){var b=LIModules.imports("i18n");
var a=(function(){var h={left:"right",right:"left",ltr:"rtl",rtl:"ltr"},m;
function c(o){return typeof o==="function"
}function e(o){return o===true||o===false||Object.prototype.toString.call(o)==="[object Boolean]"
}function d(o){return o===void 0
}function i(o){return c(o)?o():o
}function l(o){o=i(o);
if(e(o)){o=!o
}else{if(o&&h[o]){o=h[o]
}}return o
}function k(){return m
}function j(w){if((w===void 0)||(w===null)){return false
}var t=0,o,q=w.length,p=" \n\r\t\f\u00A0\u2028\u2029".split(""),x="~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),v=p.concat(x),u="\u0590",r="\u06FF";
function s(A,z){if(A===null){return false
}var y=Array.prototype.indexOf;
if(y&&A.indexOf===y){return A.indexOf(z)!==-1
}return Array.prototype.some(A,function(B){return B===z
})
}for(;
t<q;
t++){o=w.charAt(t);
if(!s(v,o)){break
}}if(t>=q){return false
}return(o>=u&&o<=r)?true:false
}function g(o,p){var q;
if(k()){if(d(p)){q=l(o)
}else{q=i(p)
}}else{q=i(o)
}return q
}function f(o){return this.flip(null,o)
}function n(){m=b&&b.page&&b.page.readsRTL()
}n();
return{init:n,flip:g,applyWhenRTL:f,isRtl:j}
}());
LIModules.exports("Bidi",a)
})();/*
 *  THE "NAV START" | "non-js" file
 *  ----------------------------------------------------------------------------
 *  My purpose in life:
 *  -------------------
 *  I know what you're thinking, "What in the flying F#@! is this," - yeah. I'm
 *  a bit for an odd-ball; my entire purpose in life is to "open" an annonymous
 *  function for the global-nav sandbox.
 *
 *  While I am javascript, technically I'm *not* javascript - because I'm not
 *  a valid js file.  This is why I have the funky .nocheck.js extension.  There's
 *  no way I can EVER pass JSHint.  I also am equally destructive without my
 *  navend counter-part.
 *
 *  I'm included by:              - SCDS remote-nav concat group within remote-nav fizzy embed
 *
 *  File PRE-CONDITIONS:          - SCDS changes to allow .nocheck.js files must be in place.
 *                                - must be the VERY FIRST file called in the sandbox concat group
 *
 *  File POST-CONDITIONS:
 *
 *  CAVEATS/GOTCHAS:
 */
(function (){function remote_nav_eval(code){eval.apply(window,[code])
}var remote_nav=(function(){function a(c){this.message=c;
this.name="SandboxException"
}var b=this;
b.CONFIGS={"SBX_JSCONTROL_PATTERN":/\bli-control\b/g,"SBX_JSCONTROL_TYPE":"linkedin/control","SBX_INITIALIZED_CONTROL_TYPE":"text/javascript+initialized","SBX_ENV_LABEL":"SANDBOX"};
b.data={"control_registry":[],"rawControlCode":[],"codeAlreadyEvaled":false,"EXCLUDED_CONTROLS":{"UniversalSearch":true,"Typeahead2":true,"StyledDropdown":true,"A11yMenu":true,"QuickHelp2":true,"kb.shortcuts":true}};
b.debug={"enabled":false,"setMode":function(c){var d=new RegExp("debug_mode=enabled");
if(!c){c=d.test(window.location.search)
}b.debug.enabled=c
},"sbx_log":function(){var c=b.debug;
if(c.enabled&&window.console){console.log(arguments)
}}};
b.events={};
b.helpers={"_addSandboxControl":function(i,h,g){b.debug.sbx_log("SANDBOX | _addSandboxControl() | started ");
var e=document.getElementById(i),d=b.helpers,f=d._getJSControlSibling(e),c=d._checkSBXRegistry(i);
b.debug.sbx_log("SANDBOX | _addSandboxControl | is Controls present in the registry? | ",c);
if((e.type!==b.CONFIGS.SBX_INITIALIZED_CONTROL_TYPE)&&(!(c))&&(!b.data.EXCLUDED_CONTROLS[h])){d._addToSBXRegistry(i,h,f,g);
d._addCodeToEvalString(e);
d._changeJSControlType(e)
}else{if(b.data.EXCLUDED_CONTROLS[h]){b.debug.sbx_log("SANDBOX | _addSandboxControl  | EXCLUDED CONTROL - using LI.Controls.addControl() instead");
window.LI.Controls.addControl(i,h,g)
}else{b.debug.sbx_log("SANDBOX | _addSandboxControl | CONTROL ALREADY DEFINED... IGNORING")
}}},"_addToSBXRegistry":function(g,f,d,e){var c;
b.data.control_registry.push({"id":g,"name":f,"el":d,"config":e});
c=b.helpers._checkSBXRegistry(g);
if(!c){throw new a("the control for some reason was NOT added to the registry")
}return c
},"_cleanSandbox":function(){b.data.control_registry=[]
},"_addCodeToEvalString":function(c){if(c.nodeName.toLowerCase()!=="script"){throw new a("attempting to add non-script innerHTML to the eval string")
}else{b.debug.sbx_log("SANDBOX | _addCodeToEvalString | about to push code to array");
b.data.rawControlCode.push(c.innerHTML.replace(/LI\.Controls\.addControl/,"window.sandboxControlInit"))
}},"_checkSBXRegistry":function(f){var d,c=b.data.control_registry,e=c.length;
for(d=0;
d<e;
d++){if(c[d].id===f){return true
}}return false
},"_getJSControlScripts":function(h){var c=h.getElementsByTagName("script"),d=c.length,f=b.helpers._addCodeToEvalString,g=b.CONFIGS.SBX_JSCONTROL_TYPE,e;
for(e=0;
e<d;
e++){if(c[e].getAttribute("type")===g){f(c[e])
}}},"_getJSControlSibling":function(d){b.debug.sbx_log(d);
var c=(d.previousElementSibling)?d.previousElementSibling:d.previousSibling;
if(c.nodeName.toLowerCase()!=="script"&&!(c.className.match(b.CONFIGS.SBX_JSCONTROL_PATTERN))){return c
}else{return false
}},"_changeJSControlType":function(c){c.setAttribute("type",b.CONFIGS.SBX_INITIALIZED_CONTROL_TYPE);
c.className="sbx-li-control"
}};
b.sandbox={"initControl":function(){b.debug.sbx_log("SANDBOX | window.sandboxControlInit() called for the following Control script: ",arguments);
b.helpers._addSandboxControl.apply(this,arguments)
},"oldLI":window.LI,"LI":{"isSandboxed":true,"assign":function(f,h){var e=b.sandbox.LI;
for(var d=0,g=f.split("."),c=g.length;
d<c;
d++){if(!e[g[d]]){e[g[d]]=(d+1===c&&h)?h:{};
e=e[g[d]]
}}return e
},"define":function(c){b.sandbox.LI.assign(c,{})
},"sandboxFromWindow":function(d,c){b.sandbox.LI.assign(c,d)
}}};
b.deploy={"executeSandbox":function(h){var e=h,d=(typeof e).toLowerCase(),g=null;
b.debug.setMode();
if(d==="object"){if(e.containerIDs){for(var f=0,c=e.containerIDs.length;
f<c;
f++){g=document.getElementById(e.containerIDs[f]);
if(g){b.helpers._getJSControlScripts(g)
}else{b.debug.sbx_log("SANDBOX | WARNING: The DOM element or ID",e," was not found - ignoring")
}}}}else{if(d==="string"){g=document.getElementById(e);
if(g){b.helpers._getJSControlScripts(g)
}else{b.debug.sbx_log("SANDBOX | WARNING: The DOM element or ID",e," was not found - ignoring")
}}}b.debug.sbx_log("SANDBOX | evaling code in executeSandbox()");
b.data.rawControlCode.push("remote_nav.debug.sbx_log('SANDBOX | LI OBJECT IN EVAL IS: ', LI )");
if(!b.data.codeAlreadyEvaled){var j=b.data.rawControlCode.join(";");
b.debug.sbx_log(j);
b.deploy.injectOrEval(j)
}},"injectOrEval":function(d){var c=document.getElementsByTagName("head")[0],f=document.createElement("script"),e=false;
try{f.text=d
}catch(h){b.debug.sbx_log("SANDBOX | injectOrEval() | .text not supported,... trying .innerHTML");
try{f.innerHTML=d
}catch(i){b.debug.sbx_log("SANDBOX | injectOrEval() | cannot use .innerHTML on the script Element, and now the script tag is EMPTY");
e=true
}}if(!e){try{c.appendChild(f);
b.debug.sbx_log("SANDBOX | injectOrEval() | SCRIPT TAG INJECTION FINISHED.")
}catch(g){b.debug.sbx_log("SANDBOX | injectOrEval() | unable to append script tag to head - falling back on eval()");
e=true
}}if(e){b.debug.sbx_log("SANDBOX | unjectOrEval() | unable to either append the tag or it's empty, using eval()");
remote_nav_eval(d);
b.debug.sbx_log("SANDBOX | injectOrEval() | CODE EVAL() [FALLBACK]  FINISHED.")
}b.data.codeAlreadyEvaled=true
},"initSandboxControls":function(){b.debug.sbx_log("SANDBOX | initSandboxControls() | function called.");
var f=b.data.control_registry.length,e=0,d=null;
while(f--){var g=b.data.control_registry[e++];
if(g&&!g.sbx_isInitialized){b.debug.sbx_log("SANDBOX | initSandBoxControls :"+g.name);
if(!(b.sandbox.LI[g.name])){b.debug.sbx_log("SANDBOX | JSControl not in sandbox -> punching out to GLOBAL JSControl.");
d=window.LI
}else{b.debug.sbx_log("SANDBOX | Presence of faceded JSControl: "+typeof LI[g.name]);
d=b.sandbox.LI
}if(d[g.name]){try{new d[g.name](g.el,g.config);
g.sbx_isInitialized=true
}catch(c){b.debug.sbx_log("SANDBOX | We gots problems - ",c)
}}else{b.debug.sbx_log("SANDBOX | WARNING | This Control",g," did not initialize.")
}}}}};
b.public_API={"initializeControls":b.deploy.initSandboxControls,"setUp":b.deploy.executeSandbox,"sandbox":b.sandbox,"debug":b.debug};
if(window.LI_JS_TEST){b.public_API._test={"config":b.config,"data":b.data,"helpers":b.helpers,"deploy":b.deploy}
}return b.public_API
}()),LI=remote_nav.sandbox.LI;
window.sandboxControlInit=remote_nav.sandbox.initControl;
window.remote_nav=remote_nav;
window.sandboxedLI=LI;
LI.sandboxFromWindow(window.LI.Events,"Events");
LI.sandboxFromWindow(window.LI.i18n,"i18n");
LI.sandboxFromWindow(window.LI.show,"show");
LI.sandboxFromWindow(window.LI.hide,"hide");
LI.sandboxFromWindow(window.LI.Controls,"Controls");
LI.sandboxFromWindow(window.LI.htmlEncode,"htmlEncode");
LI.sandboxFromWindow(window.LI.domify,"domify");
LI.sandboxFromWindow(window.LI.getDataAttribute,"getDataAttribute");
LI.sandboxFromWindow(window.LI.asyncRequest,"asyncRequest");
LI.sandboxFromWindow(window.LI.isFullPage,"isFullPage");
LI.sandboxFromWindow(window.LI.htmlUnencode,"htmlUnencode");
LI.sandboxFromWindow(window.LI.log,"log");
LI.sandboxFromWindow(window.LI.BaseControl,"BaseControl");
LI.sandboxFromWindow(window.LI.Lego,"Lego");var remote_nav=window.remote_nav,LI=remote_nav.sandbox.LI;
LI.sandboxFromWindow(window.LI.getPageKey,"getPageKey");
LI.sandboxFromWindow(window.LI.getPageKey,"getPageKey");LI.BidiInput=(function(){var g="no-bidi-input",d=":not(."+g+")",c="dir",a="ltr",f="rtl",e=LIModules.requires("Bidi.isRtl");
function b(l){var j=$(l.target),i=a,k=j.attr(c),h=j.data("bidi-event");
if(j.val().length===0){l.target.removeAttribute("dir");
return
}if(LI.BidiInput._isRtl(j.val())){i=f
}if(typeof k==="undefined"||k!==i){j.attr(c,i);
if(h){j.trigger(h,[i])
}}}$("body").on("input propertychange","textarea"+d+", input"+d,b);
return{_updateDir:b,_isRtl:e}
}());(function(){var a=document.getElementById("footer");
remote_nav.setUp(a);
remote_nav.initializeControls()
}());
/*  THE "NAV END" | "no js" file
 *  ----------------------------------------------------------------------------
 *  My purpose in life:
 *  --------------------------
 *  I finish the job of navstart.nocheck.js - closing the anonymous function
 *  scope for the sandbox.  Like navstart.nocheck.js, I'm also not technically
 *  valid javascript, and therefore won't pass JSHint.  We both exist, however,
 *  so that logic modifications to SCDS do not have to be made.
 *
 *  I'm included by:                - remote_nav SCDS concat group
 *
 *  I'm styled by:                  - N/A; JS plumbing/infrastructure
 *
 *  File PRE-CONDITIONS:
 *  File POST-CONDITIONS:
 *  CAVEATS/GOTCHAS:
 */
}());
