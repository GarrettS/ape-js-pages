APE.namespace("APE.widget").defineFactory("Scroller",function(B){var D=self.APE,E=D.dom;function I(L,K,J){this.id=L;this.timeDuration=K||250;this.isVertical=!!J;this._queue=0;this.init()}function F(K){return J;function J(){C(K)}}function G(L){var K=this.id.match(/(\w+)(Next|Prev)$/),J=B.getById(K[1]);E.Event.preventDefault(L);A(J,K[2]==="Next")}function A(J,N){if(J.timerId){J._queue+=N?1:-1;return}var O=document,Q=J.id,P=O.getElementById(Q+"Frame")[J.clientDimension],M,K;if(J.scrollDistance<=P){return}J.style=O.getElementById(Q).style;if(N){P=-P}J.newPos=J.pos+P;M=O.getElementById(Q+"Prev");K=O.getElementById(Q+"Next");if(!N){E.removeClass(K,"scrollerButton-disabled");if(J.newPos>=0){P=-J.pos;J.newPos=0;E.addClass(M,"scrollerButton-disabled")}}else{if(J.pos===0&&J.newPos){E.removeClass(M,"scrollerButton-disabled")}if(J.newPos<=J.frameSize-J.scrollDistance){E.addClass(K,"scrollerButton-disabled");var L=J.scrollDistance+J.pos-J.frameSize;P=-L;J.newPos=J.pos-L}}J.startTime=+new Date;J.startPos=J.pos;J.dx=P;J.timerId=self.setInterval(F(J),12)}function C(J){var K=new Date-J.startTime,M=K/J.timeDuration,L=(Math.atan(1.4*(2*M-1))/Math.atan(1.4)+1)/2;if(M>=1){return H(J)}J.style[J.stylePos]=(J.pos=0|J.startPos+J.dx*L)+"px"}function H(J){J.timerId=self.clearInterval(J.timerId);J.style[J.stylePos]=(J.pos=J.newPos)+"px";if(J._queue!==0){var K=J._queue>0;J._queue+=K?-1:1;A(J,K)}else{if(typeof J.onend=="function"){J.onend()}J.style=null}}I.prototype={pos:0,init:function(){var S=document,J=this.id,K=S.getElementById(J),T,P=K.childNodes,N,O,Q=E.Event.addCallback,R=this.isVertical,M=R?"offsetTop":"offsetLeft",U=R?"offsetHeight":"offsetWidth",L=S.getElementById(J+"Prev");next=S.getElementById(J+"Next");this.clientDimension=R?"clientHeight":"clientWidth";this.stylePos=R?"top":"left";for(N=0,O=P.length;N<O;N++){T=P[N];if(!T){break}if(!/LI/i.test(T.tagName)){T.parentNode.removeChild(T)}}this.scrollDistance=K.lastChild[M]+K.lastChild[U];this.frameSize=K.parentNode[this.clientDimension];K.style[R?"height":"width"]=this.scrollDistance+10+"px";if(L!==null){Q(L,"click",G)}if(next!==null){Q(next,"click",G)}},next:function(){A(this,true);return this},prev:function(){A(this,false);return this}};return I});