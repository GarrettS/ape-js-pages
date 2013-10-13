APE.namespace("APE.widget").defineFactory("HsvPicker",function(O){var M=self.APE,E=M.drag.Draggable,C=M.EventPublisher,L=M.color,J=L.ColorRGB,N=L.ColorHSV,A=Function.prototype,S="Please enter a valid color value.";function K(W){this.id=W;var V=document.getElementById(this.id+"-hue-slider"),U,T=document.getElementById(this.id+"-saturation-value-selector");this.hueSlider=E.getByNode(V,{constraint:"y"});this.hueSlider.keepInContainer=true;this.bgSelector=E.getByNode(T);U=T.parentNode.parentNode;this.bg=U;this.bgSelector.container=U;this.bgSelector.keepInContainer=true;this.textInput=document.getElementById(this.id+"-color-input");this.displayStyle=document.getElementById(this.id+"-color-preview").style;this.bgClipTop=12/2;this.bgClipLeft=12/2;this.enabled=true;this.prevValue=this.textInput.value}function B(U){var T=O.getById(this.id.split("-")[0]);if(!T.enabled){return}T.onbeforechange();T.h=360*T.hueSlider.el.offsetTop/128;T.bg.style.background=T.rgbForHue(T.h);T.updateDisplay();T.onchange(U)}function D(U){var T=O.getById(this.id.split("-")[0]);if(!T.enabled){return}T.hueSlider.grab(U);T.updateDisplay();T.onchange(U);T.onchangecomplete(U)}function I(U){var T=O.getById(this.id.split("-")[0]);if(T.enabled){return T.trySetValue(this.value,U||event)}}function F(){return O.getById(this.id.split("-")[0]).enabled}function R(V){V=V||self.event;var U=V.keyCode==9,T=V.keyCode==13;if(U||T){O.getById(this.id.split("-")[0]).trySetValue(this.value,V||event)}if(T){this.focus()}}function H(U){var T=O.getById(this.id.split("-")[0]);if(!T.enabled){return}T.onbeforechange();T.bgSelector.grab(U);T.bg.style.background=T.rgbForHue(T.h);T.updateDisplay();T.onchange(U);T.onchangecomplete(U)}function G(U){var T=O.getById(this.id.split("-")[0]);if(!T.enabled){return}T.v=(127-(this.el.offsetTop+T.bgClipTop))/127;T.s=(this.el.offsetLeft+T.bgClipLeft)/127;T.updateDisplay();T.onchange(U)}function Q(){if(this.textInput.value){this.prevValue=this.textInput.value}}function P(U){var T=O.getById(this.id.split("-")[0]);T.onbeforechange();if(this.checked){T.prevValue=T.textInput.value;T.setEnabled(false);T.setValue("transparent")}else{T.setValue(T.prevValue||new J(255,255,255).toString());T.prevValue="";T.setEnabled(true);T.hueSlider.ondrag(U);T.bgSelector.ondrag(U)}T.onchange(U);T.onchangecomplete(U)}K.prototype={rgbForHue:N.rgbForHue,rgbFromString:J.fromString,init:function(){if(this.textInput.value){this.setValue(this.textInput.value)}else{this.setValue("#ff0000")}this.bgSelector.onbeforedragstart=this.bgSelector.ondrag=this.bgSelector.onglide=G;this.hueSlider.onbeforedragstart=this.hueSlider.ondrag=this.hueSlider.onglide=B;this.hueSlider.container.onmousedown=D;this.bgSelector.onglide=G;this.bgSelector.onfocus=this.hueSlider.onfocus=F;C.add(this.textInput,"onblur",I);C.add(this.textInput,"onkeydown",R);C.add(this,"onbeforechange",Q);C.add(this.bgSelector.el.parentNode,"onmousedown",H);C.add(this.bgSelector,"ondragend",U,this);C.add(this.hueSlider,"ondragend",U,this);var T=document.getElementById(this.id+"-transparent-checkbox");C.add(T,"onclick",P);if(T.checked){P.call(document.getElementById(this.id+"-transparent-checkbox"))}function U(V){this.onchangecomplete(V)}},getHexValue:function(){if(this.textInput.value==""){return""}return new N(this.h,this.s,this.v).toRGB().toHexString()},onbeforechange:A,onchange:A,onchangecomplete:A,setEnabled:function(T){this.enabled=T},setValue:function(Z){var W="transparent",V=document.getElementById(this.id),Y=document.getElementById(this.id+"-transparent-checkbox"),X=document.getElementById(this.id+"-color-preview"),U,T;if(Z==W){M.dom.addClass(V,"ape-hsv-transparent");X.style.backgroundColor=W;this.setEnabled(false);this.textInput.value="";Y.checked=true;return}else{M.dom.removeClass(V,"ape-hsv-transparent");this.setEnabled(true);Y.checked=false}U=this.rgbFromString(Z);isInputValid=U.isValid();if(!isInputValid){U=this.rgbForHue(this.h=0,this.s=1,this.v=1)}T=U.toHSV();this.h=T.h;this.s=T.s;this.v=T.v;this.hueSlider.el.style.top=(T.h/360*128)+"px";this.bgSelector.moveToX((T.s*127)-this.bgClipLeft);this.bgSelector.moveToY(127-(T.v*127)-this.bgClipTop);this.bg.style.backgroundColor=this.rgbForHue(T.h,1,1).toHexString();this.updateDisplay(U,isInputValid)},updateDisplay:function(U,V){var T=U||new N(this.h,this.s,this.v).toRGB();if(T.isValid()&&!(V==false)){this.displayStyle.backgroundColor=this.textInput.value=T.toHexString()}else{this.textInput.value=""}},trySetValue:function(T,U){if(this.rgbFromString(T).isValid()){this.setValue(T);this.onchange(U);this.onchangecomplete(U);return true}else{self.alert(S);return false}}};return K});