(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerpolicy&&(u.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?u.credentials="include":i.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();function Q(){}const st=e=>e;function Xe(e){return e()}function Me(){return Object.create(null)}function G(e){e.forEach(Xe)}function we(e){return typeof e=="function"}function ut(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function at(e){return Object.keys(e).length===0}const Ye=typeof window<"u";let lt=Ye?()=>window.performance.now():()=>Date.now(),Oe=Ye?e=>requestAnimationFrame(e):Q;const D=new Set;function Je(e){D.forEach(t=>{t.c(e)||(D.delete(t),t.f())}),D.size!==0&&Oe(Je)}function ct(e){let t;return D.size===0&&Oe(Je),{promise:new Promise(n=>{D.add(t={c:e,f:n})}),abort(){D.delete(t)}}}function P(e,t){e.appendChild(t)}function Ve(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ft(e){const t=U("style");return gt(Ve(e),t),t.sheet}function gt(e,t){return P(e.head||e,t),t.sheet}function ee(e,t,n){e.insertBefore(t,n||null)}function F(e){e.parentNode.removeChild(e)}function Te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function be(e){return document.createTextNode(e)}function Ae(){return be(" ")}function W(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ht(e){return Array.from(e.childNodes)}function Ze(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let ne;function dt(){if(ne===void 0){ne=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ne=!0}}return ne}function Ke(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=U("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const i=dt();let u;return i?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=W(window,"message",o=>{o.source===r.contentWindow&&t()})):(r.src="about:blank",r.onload=()=>{u=W(r.contentWindow,"resize",t)}),P(e,r),()=>{(i||u&&r.contentWindow)&&u(),F(r)}}function pt(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}const ae=new Map;let le=0;function _t(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function mt(e,t){const n={stylesheet:ft(t),rules:{}};return ae.set(e,n),n}function Se(e,t,n,r,i,u,o,l=0){const a=16.666/r;let c=`{
`;for(let b=0;b<=1;b+=a){const M=t+(n-t)*u(b);c+=b*100+`%{${o(M,1-M)}}
`}const _=c+`100% {${o(n,1-n)}}
}`,m=`__svelte_${_t(_)}_${l}`,k=Ve(e),{stylesheet:L,rules:d}=ae.get(k)||mt(k,e);d[m]||(d[m]=!0,L.insertRule(`@keyframes ${m} ${_}`,L.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${m} ${r}ms linear ${i}ms 1 both`,le+=1,m}function yt(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?u=>u.indexOf(t)<0:u=>u.indexOf("__svelte")===-1),i=n.length-r.length;i&&(e.style.animation=r.join(", "),le-=i,le||vt())}function vt(){Oe(()=>{le||(ae.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&F(t)}),ae.clear())})}let Ee;function K(e){Ee=e}const Z=[],ze=[],oe=[],Pe=[],kt=Promise.resolve();let me=!1;function wt(){me||(me=!0,kt.then(Qe))}function R(e){oe.push(e)}const he=new Set;let re=0;function Qe(){const e=Ee;do{for(;re<Z.length;){const t=Z[re];re++,K(t),Ot(t.$$)}for(K(null),Z.length=0,re=0;ze.length;)ze.pop()();for(let t=0;t<oe.length;t+=1){const n=oe[t];he.has(n)||(he.add(n),n())}oe.length=0}while(Z.length);for(;Pe.length;)Pe.pop()();me=!1,he.clear(),K(e)}function Ot(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}let V;function bt(){return V||(V=Promise.resolve(),V.then(()=>{V=null})),V}function de(e,t,n){e.dispatchEvent(pt(`${t?"intro":"outro"}${n}`))}const se=new Set;let B;function Et(){B={r:0,c:[],p:B}}function Lt(){B.r||G(B.c),B=B.p}function ue(e,t){e&&e.i&&(se.delete(e),e.i(t))}function $e(e,t,n,r){if(e&&e.o){if(se.has(e))return;se.add(e),B.c.push(()=>{se.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Mt={duration:0};function Ie(e,t,n,r){let i=t(e,n),u=r?0:1,o=null,l=null,a=null;function c(){a&&yt(e,a)}function _(k,L){const d=k.b-u;return L*=Math.abs(d),{a:u,b:k.b,d,duration:L,start:k.start,end:k.start+L,group:k.group}}function m(k){const{delay:L=0,duration:d=300,easing:v=st,tick:b=Q,css:M}=i||Mt,T={start:lt()+L,b:k};k||(T.group=B,B.r+=1),o||l?l=T:(M&&(c(),a=Se(e,u,k,d,L,v,M)),k&&b(0,1),o=_(T,d),R(()=>de(e,k,"start")),ct(y=>{if(l&&y>l.start&&(o=_(l,d),l=null,de(e,o.b,"start"),M&&(c(),a=Se(e,u,o.b,o.duration,0,v,i.css))),o){if(y>=o.end)b(u=o.b,1-u),de(e,o.b,"end"),l||(o.b?c():--o.group.r||G(o.group.c)),o=null;else if(y>=o.start){const z=y-o.start;u=o.a+o.d*v(z/o.duration),b(u,1-u)}}return!!(o||l)}))}return{run(k){we(i)?bt().then(()=>{i=i(),m(k)}):m(k)},end(){c(),o=l=null}}}function Tt(e,t,n,r){const{fragment:i,after_update:u}=e.$$;i&&i.m(t,n),r||R(()=>{const o=e.$$.on_mount.map(Xe).filter(we);e.$$.on_destroy?e.$$.on_destroy.push(...o):G(o),e.$$.on_mount=[]}),u.forEach(R)}function At(e,t){const n=e.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function St(e,t){e.$$.dirty[0]===-1&&(Z.push(e),wt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function zt(e,t,n,r,i,u,o,l=[-1]){const a=Ee;K(e);const c=e.$$={fragment:null,ctx:[],props:u,update:Q,not_equal:i,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Me(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};o&&o(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(m,k,...L)=>{const d=L.length?L[0]:k;return c.ctx&&i(c.ctx[m],c.ctx[m]=d)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](d),_&&St(e,m)),k}):[],c.update(),_=!0,G(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const m=ht(t.target);c.fragment&&c.fragment.l(m),m.forEach(F)}else c.fragment&&c.fragment.c();t.intro&&ue(e.$$.fragment),Tt(e,t.target,t.anchor,t.customElement),Qe()}K(a)}class Pt{$destroy(){At(this,1),this.$destroy=Q}$on(t,n){if(!we(n))return Q;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!at(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ce(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function j(e,t,n){this.k=e,this.x=t,this.y=n}j.prototype={constructor:j,scale:function(e){return e===1?this:new j(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new j(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new j(1,0,0);j.prototype;function Ne(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function $t(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function pe(e,t){let n=0;if(t===void 0)for(let r of e)(r=+r)&&(n+=r);else{let r=-1;for(let i of e)(i=+t(i,++r,e))&&(n+=i)}return n}function et(e,t){return e.sourceLinks.length?e.depth:t-1}function ie(e){return function(){return e}}function Be(e,t){return ce(e.source,t.source)||e.index-t.index}function Fe(e,t){return ce(e.target,t.target)||e.index-t.index}function ce(e,t){return e.y0-t.y0}function _e(e){return e.value}function It(e){return e.index}function Ct(e){return e.nodes}function Nt(e){return e.links}function Ge(e,t){const n=e.get(t);if(!n)throw new Error("missing: "+t);return n}function qe({nodes:e}){for(const t of e){let n=t.y0,r=n;for(const i of t.sourceLinks)i.y0=n+i.width/2,n+=i.width;for(const i of t.targetLinks)i.y1=r+i.width/2,r+=i.width}}function Bt(){let e=0,t=0,n=1,r=1,i=24,u=8,o,l=It,a=et,c,_,m=Ct,k=Nt,L=6;function d(){const s={nodes:m.apply(null,arguments),links:k.apply(null,arguments)};return v(s),b(s),M(s),T(s),E(s),qe(s),s}d.update=function(s){return qe(s),s},d.nodeId=function(s){return arguments.length?(l=typeof s=="function"?s:ie(s),d):l},d.nodeAlign=function(s){return arguments.length?(a=typeof s=="function"?s:ie(s),d):a},d.nodeSort=function(s){return arguments.length?(c=s,d):c},d.nodeWidth=function(s){return arguments.length?(i=+s,d):i},d.nodePadding=function(s){return arguments.length?(u=o=+s,d):u},d.nodes=function(s){return arguments.length?(m=typeof s=="function"?s:ie(s),d):m},d.links=function(s){return arguments.length?(k=typeof s=="function"?s:ie(s),d):k},d.linkSort=function(s){return arguments.length?(_=s,d):_},d.size=function(s){return arguments.length?(e=t=0,n=+s[0],r=+s[1],d):[n-e,r-t]},d.extent=function(s){return arguments.length?(e=+s[0][0],n=+s[1][0],t=+s[0][1],r=+s[1][1],d):[[e,t],[n,r]]},d.iterations=function(s){return arguments.length?(L=+s,d):L};function v({nodes:s,links:p}){for(const[h,f]of s.entries())f.index=h,f.sourceLinks=[],f.targetLinks=[];const g=new Map(s.map((h,f)=>[l(h,f,s),h]));for(const[h,f]of p.entries()){f.index=h;let{source:w,target:S}=f;typeof w!="object"&&(w=f.source=Ge(g,w)),typeof S!="object"&&(S=f.target=Ge(g,S)),w.sourceLinks.push(f),S.targetLinks.push(f)}if(_!=null)for(const{sourceLinks:h,targetLinks:f}of s)h.sort(_),f.sort(_)}function b({nodes:s}){for(const p of s)p.value=p.fixedValue===void 0?Math.max(pe(p.sourceLinks,_e),pe(p.targetLinks,_e)):p.fixedValue}function M({nodes:s}){const p=s.length;let g=new Set(s),h=new Set,f=0;for(;g.size;){for(const w of g){w.depth=f;for(const{target:S}of w.sourceLinks)h.add(S)}if(++f>p)throw new Error("circular link");g=h,h=new Set}}function T({nodes:s}){const p=s.length;let g=new Set(s),h=new Set,f=0;for(;g.size;){for(const w of g){w.height=f;for(const{source:S}of w.targetLinks)h.add(S)}if(++f>p)throw new Error("circular link");g=h,h=new Set}}function y({nodes:s}){const p=Ne(s,f=>f.depth)+1,g=(n-e-i)/(p-1),h=new Array(p);for(const f of s){const w=Math.max(0,Math.min(p-1,Math.floor(a.call(null,f,p))));f.layer=w,f.x0=e+w*g,f.x1=f.x0+i,h[w]?h[w].push(f):h[w]=[f]}if(c)for(const f of h)f.sort(c);return h}function z(s){const p=$t(s,g=>(r-t-(g.length-1)*o)/pe(g,_e));for(const g of s){let h=t;for(const f of g){f.y0=h,f.y1=h+f.value*p,h=f.y1+o;for(const w of f.sourceLinks)w.width=w.value*p}h=(r-h+o)/(g.length+1);for(let f=0;f<g.length;++f){const w=g[f];w.y0+=h*(f+1),w.y1+=h*(f+1)}rt(g)}}function E(s){const p=y(s);o=Math.min(u,(r-t)/(Ne(p,g=>g.length)-1)),z(p);for(let g=0;g<L;++g){const h=Math.pow(.99,g),f=Math.max(1-h,(g+1)/L);fe(p,h,f),N(p,h,f)}}function N(s,p,g){for(let h=1,f=s.length;h<f;++h){const w=s[h];for(const S of w){let H=0,q=0;for(const{source:Y,value:ge}of S.targetLinks){let J=ge*(S.layer-Y.layer);H+=it(Y,S)*J,q+=J}if(!(q>0))continue;let X=(H/q-S.y0)*p;S.y0+=X,S.y1+=X,Le(S)}c===void 0&&w.sort(ce),te(w,g)}}function fe(s,p,g){for(let h=s.length,f=h-2;f>=0;--f){const w=s[f];for(const S of w){let H=0,q=0;for(const{target:Y,value:ge}of S.sourceLinks){let J=ge*(Y.layer-S.layer);H+=ot(S,Y)*J,q+=J}if(!(q>0))continue;let X=(H/q-S.y0)*p;S.y0+=X,S.y1+=X,Le(S)}c===void 0&&w.sort(ce),te(w,g)}}function te(s,p){const g=s.length>>1,h=s[g];$(s,h.y0-o,g-1,p),A(s,h.y1+o,g+1,p),$(s,r,s.length-1,p),A(s,t,0,p)}function A(s,p,g,h){for(;g<s.length;++g){const f=s[g],w=(p-f.y0)*h;w>1e-6&&(f.y0+=w,f.y1+=w),p=f.y1+o}}function $(s,p,g,h){for(;g>=0;--g){const f=s[g],w=(f.y1-p)*h;w>1e-6&&(f.y0-=w,f.y1-=w),p=f.y0-o}}function Le({sourceLinks:s,targetLinks:p}){if(_===void 0){for(const{source:{sourceLinks:g}}of p)g.sort(Fe);for(const{target:{targetLinks:g}}of s)g.sort(Be)}}function rt(s){if(_===void 0)for(const{sourceLinks:p,targetLinks:g}of s)p.sort(Fe),g.sort(Be)}function it(s,p){let g=s.y0-(s.sourceLinks.length-1)*o/2;for(const{target:h,width:f}of s.sourceLinks){if(h===p)break;g+=f+o}for(const{source:h,width:f}of p.targetLinks){if(h===s)break;g-=f}return g}function ot(s,p){let g=p.y0-(p.targetLinks.length-1)*o/2;for(const{source:h,width:f}of p.targetLinks){if(h===s)break;g+=f+o}for(const{target:h,width:f}of s.sourceLinks){if(h===p)break;g-=f}return g}return d}var ye=Math.PI,ve=2*ye,x=1e-6,Ft=ve-x;function ke(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function tt(){return new ke}ke.prototype=tt.prototype={constructor:ke,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,r){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(e,t,n,r,i,u){this._+="C"+ +e+","+ +t+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+u)},arcTo:function(e,t,n,r,i){e=+e,t=+t,n=+n,r=+r,i=+i;var u=this._x1,o=this._y1,l=n-e,a=r-t,c=u-e,_=o-t,m=c*c+_*_;if(i<0)throw new Error("negative radius: "+i);if(this._x1===null)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(m>x)if(!(Math.abs(_*l-a*c)>x)||!i)this._+="L"+(this._x1=e)+","+(this._y1=t);else{var k=n-u,L=r-o,d=l*l+a*a,v=k*k+L*L,b=Math.sqrt(d),M=Math.sqrt(m),T=i*Math.tan((ye-Math.acos((d+m-v)/(2*b*M)))/2),y=T/M,z=T/b;Math.abs(y-1)>x&&(this._+="L"+(e+y*c)+","+(t+y*_)),this._+="A"+i+","+i+",0,0,"+ +(_*k>c*L)+","+(this._x1=e+z*l)+","+(this._y1=t+z*a)}},arc:function(e,t,n,r,i,u){e=+e,t=+t,n=+n,u=!!u;var o=n*Math.cos(r),l=n*Math.sin(r),a=e+o,c=t+l,_=1^u,m=u?r-i:i-r;if(n<0)throw new Error("negative radius: "+n);this._x1===null?this._+="M"+a+","+c:(Math.abs(this._x1-a)>x||Math.abs(this._y1-c)>x)&&(this._+="L"+a+","+c),n&&(m<0&&(m=m%ve+ve),m>Ft?this._+="A"+n+","+n+",0,1,"+_+","+(e-o)+","+(t-l)+"A"+n+","+n+",0,1,"+_+","+(this._x1=a)+","+(this._y1=c):m>x&&(this._+="A"+n+","+n+",0,"+ +(m>=ye)+","+_+","+(this._x1=e+n*Math.cos(i))+","+(this._y1=t+n*Math.sin(i))))},rect:function(e,t,n,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};function xe(e){return function(){return e}}function Gt(e){return e[0]}function qt(e){return e[1]}var xt=Array.prototype.slice;function Rt(e){return e.source}function jt(e){return e.target}function Dt(e){var t=Rt,n=jt,r=Gt,i=qt,u=null;function o(){var l,a=xt.call(arguments),c=t.apply(this,a),_=n.apply(this,a);if(u||(u=l=tt()),e(u,+r.apply(this,(a[0]=c,a)),+i.apply(this,a),+r.apply(this,(a[0]=_,a)),+i.apply(this,a)),l)return u=null,l+""||null}return o.source=function(l){return arguments.length?(t=l,o):t},o.target=function(l){return arguments.length?(n=l,o):n},o.x=function(l){return arguments.length?(r=typeof l=="function"?l:xe(+l),o):r},o.y=function(l){return arguments.length?(i=typeof l=="function"?l:xe(+l),o):i},o.context=function(l){return arguments.length?(u=l==null?null:l,o):u},o}function Ut(e,t,n,r,i){e.moveTo(t,n),e.bezierCurveTo(t=(t+r)/2,n,t,i,r,i)}function Wt(){return Dt(Ut)}function Ht(e){return[e.source.x1,e.y0]}function Xt(e){return[e.target.x0,e.y1]}function Yt(){return Wt().source(Ht).target(Xt)}function Jt(e){const t=e-1;return t*t*t+1}function Re(e,{delay:t=0,duration:n=400,easing:r=Jt,x:i=0,y:u=0,opacity:o=0}={}){const l=getComputedStyle(e),a=+l.opacity,c=l.transform==="none"?"":l.transform,_=a*(1-o);return{delay:t,duration:n,easing:r,css:(m,k)=>`
			transform: ${c} translate(${(1-m)*i}px, ${(1-m)*u}px);
			opacity: ${a-_*k}`}}const Vt={nodes:[{id:"ArgentinaOrigen"},{id:"Espa\xF1aOrigen"},{id:"GreciaOrigen"},{id:"ItaliaOrigen"},{id:"MarruecosOrigen"},{id:"PortugalOrigen"},{id:"SiriaOrigen"},{id:"T\xFAnezOrigen"},{id:"Turqu\xEDaOrigen"},{id:"Espa\xF1a"},{id:"Francia"},{id:"Portugal"},{id:"Alemania"},{id:"Brasil"},{id:"China"},{id:"Estados Unidos"},{id:"Italia"},{id:"Jap\xF3n"},{id:"Reino Unido"}],links:[{source:"ArgentinaOrigen",target:"Espa\xF1a",value:36053.39},{source:"ArgentinaOrigen",target:"Francia",value:8.55},{source:"ArgentinaOrigen",target:"Portugal",value:1.8},{source:"Espa\xF1aOrigen",target:"Alemania",value:311695.06},{source:"Espa\xF1aOrigen",target:"Brasil",value:184399.92},{source:"Espa\xF1aOrigen",target:"China",value:427410.88},{source:"Espa\xF1aOrigen",target:"Estados Unidos",value:155393713e-2},{source:"Espa\xF1aOrigen",target:"Francia",value:957674.82},{source:"Espa\xF1aOrigen",target:"Italia",value:317239847e-2},{source:"Espa\xF1aOrigen",target:"Jap\xF3n",value:319384.52},{source:"Espa\xF1aOrigen",target:"Portugal",value:108104508e-2},{source:"Espa\xF1aOrigen",target:"Reino Unido",value:379498.59},{source:"GreciaOrigen",target:"Alemania",value:156576.63},{source:"GreciaOrigen",target:"Brasil",value:4864.31},{source:"GreciaOrigen",target:"China",value:2228.95},{source:"GreciaOrigen",target:"Espa\xF1a",value:100060.58},{source:"GreciaOrigen",target:"Estados Unidos",value:103221.05},{source:"GreciaOrigen",target:"Francia",value:28624},{source:"GreciaOrigen",target:"Italia",value:110993989e-2},{source:"GreciaOrigen",target:"Jap\xF3n",value:6792.79},{source:"GreciaOrigen",target:"Portugal",value:303.82},{source:"GreciaOrigen",target:"Reino Unido",value:23739.75},{source:"ItaliaOrigen",target:"Alemania",value:410621.99},{source:"ItaliaOrigen",target:"Brasil",value:66233.77},{source:"ItaliaOrigen",target:"China",value:31133.77},{source:"ItaliaOrigen",target:"Espa\xF1a",value:72409.63},{source:"ItaliaOrigen",target:"Estados Unidos",value:107267584e-2},{source:"ItaliaOrigen",target:"Francia",value:314071.93},{source:"ItaliaOrigen",target:"Jap\xF3n",value:198333.89},{source:"ItaliaOrigen",target:"Portugal",value:4167.64},{source:"ItaliaOrigen",target:"Reino Unido",value:157507.84},{source:"MarruecosOrigen",target:"Alemania",value:62.94},{source:"MarruecosOrigen",target:"Espa\xF1a",value:73843.23},{source:"MarruecosOrigen",target:"Francia",value:8448.14},{source:"MarruecosOrigen",target:"Italia",value:6558.79},{source:"MarruecosOrigen",target:"Portugal",value:.03},{source:"PortugalOrigen",target:"Alemania",value:9851.28},{source:"PortugalOrigen",target:"Brasil",value:623833.42},{source:"PortugalOrigen",target:"China",value:293.78},{source:"PortugalOrigen",target:"Espa\xF1a",value:11726943e-1},{source:"PortugalOrigen",target:"Estados Unidos",value:55818.68},{source:"PortugalOrigen",target:"Francia",value:40922.84},{source:"PortugalOrigen",target:"Italia",value:387877.35},{source:"PortugalOrigen",target:"Jap\xF3n",value:5146.56},{source:"PortugalOrigen",target:"Reino Unido",value:2080.25},{source:"SiriaOrigen",target:"Alemania",value:988.03},{source:"SiriaOrigen",target:"Espa\xF1a",value:24615.93},{source:"SiriaOrigen",target:"Francia",value:18.74},{source:"T\xFAnezOrigen",target:"Alemania",value:40.28},{source:"T\xFAnezOrigen",target:"Espa\xF1a",value:677739.35},{source:"T\xFAnezOrigen",target:"Francia",value:74968.37},{source:"T\xFAnezOrigen",target:"Italia",value:515821.54},{source:"T\xFAnezOrigen",target:"Portugal",value:14.32},{source:"Turqu\xEDaOrigen",target:"Alemania",value:7479.08},{source:"Turqu\xEDaOrigen",target:"Espa\xF1a",value:51793.35},{source:"Turqu\xEDaOrigen",target:"Francia",value:54.38},{source:"Turqu\xEDaOrigen",target:"Italia",value:4753.6},{source:"Turqu\xEDaOrigen",target:"Portugal",value:.33}]};function je(e,t,n){const r=e.slice();return r[22]=t[n],r[24]=n,r}function De(e,t,n){const r=e.slice();return r[22]=t[n],r[24]=n,r}function Ue(e){let t,n,r,i,u,o;function l(){return e[15](e[22])}return{c(){t=C("path"),O(t,"d",n=e[10](e[22])),O(t,"fill","none"),O(t,"stroke",e[24]===8?"salmon":"url(#gradient)"),O(t,"stroke-opacity",r=e[1].length>0?e[1].includes(e[22])?1:.1:.3),O(t,"stroke-width",i=e[22].width)},m(a,c){ee(a,t,c),u||(o=[W(t,"mouseover",l),W(t,"mouseleave",e[16])],u=!0)},p(a,c){e=a,c&64&&n!==(n=e[10](e[22]))&&O(t,"d",n),c&66&&r!==(r=e[1].length>0?e[1].includes(e[22])?1:.1:.3)&&O(t,"stroke-opacity",r),c&64&&i!==(i=e[22].width)&&O(t,"stroke-width",i)},d(a){a&&F(t),u=!1,G(o)}}}function We(e){let t,n,r,i,u,o,l=(e[24]<9?e[22].id.slice(0,-6):e[22].id)+"",a,c,_,m,k;function L(){return e[17](e[22])}function d(...v){return e[19](e[22],...v)}return{c(){t=C("rect"),o=C("text"),a=be(l),O(t,"x",n=e[22].x0),O(t,"y",r=e[22].y0),O(t,"height",i=e[22].y1-e[22].y0),O(t,"width",u=e[22].x1-e[22].x0),O(t,"fill",e[24]<9?"#497D0B":"#CFC912"),O(o,"class","country-names svelte-108whb1"),O(o,"x",c=e[22].x0<e[2]/4?e[22].x1+6:e[22].x0-6),O(o,"y",_=(e[22].y1+e[22].y0)/2),O(o,"dy",5),I(o,"text-anchor",e[22].x0<e[0]/4?"start":"end"),I(o,"font-weight",e[1].some(d)?"bold":"normal"),I(o,"font-size",e[22].id==="MarruecosOrigen"||e[22].id==="Turqu\xEDaOrigen"||e[22].id==="ArgentinaOrigen"||e[22].id==="SiriaOrigen"?"0.85rem":"initial")},m(v,b){ee(v,t,b),ee(v,o,b),P(o,a),m||(k=[W(t,"mouseover",L),W(t,"mouseleave",e[18])],m=!0)},p(v,b){e=v,b&256&&n!==(n=e[22].x0)&&O(t,"x",n),b&256&&r!==(r=e[22].y0)&&O(t,"y",r),b&256&&i!==(i=e[22].y1-e[22].y0)&&O(t,"height",i),b&256&&u!==(u=e[22].x1-e[22].x0)&&O(t,"width",u),b&256&&l!==(l=(e[24]<9?e[22].id.slice(0,-6):e[22].id)+"")&&Ze(a,l),b&260&&c!==(c=e[22].x0<e[2]/4?e[22].x1+6:e[22].x0-6)&&O(o,"x",c),b&256&&_!==(_=(e[22].y1+e[22].y0)/2)&&O(o,"y",_),b&257&&I(o,"text-anchor",e[22].x0<e[0]/4?"start":"end"),b&258&&I(o,"font-weight",e[1].some(d)?"bold":"normal"),b&256&&I(o,"font-size",e[22].id==="MarruecosOrigen"||e[22].id==="Turqu\xEDaOrigen"||e[22].id==="ArgentinaOrigen"||e[22].id==="SiriaOrigen"?"0.85rem":"initial")},d(v){v&&F(t),v&&F(o),m=!1,G(k)}}}function He(e){let t,n,r=(e[7]==="0 toneladas"?"":e[7])+"",i,u,o,l;return{c(){t=U("div"),n=U("h1"),i=be(r),O(t,"class","tooltip svelte-108whb1"),I(t,"left",(e[3]+e[4]>e[2]?e[4]-e[3]-5:e[4]+7)+"px"),I(t,"top",e[5]+12+"px"),R(()=>e[20].call(t))},m(a,c){ee(a,t,c),P(t,n),P(n,i),u=Ke(t,e[20].bind(t)),l=!0},p(a,c){(!l||c&128)&&r!==(r=(a[7]==="0 toneladas"?"":a[7])+"")&&Ze(i,r),(!l||c&28)&&I(t,"left",(a[3]+a[4]>a[2]?a[4]-a[3]-5:a[4]+7)+"px"),(!l||c&32)&&I(t,"top",a[5]+12+"px")},i(a){l||(R(()=>{o||(o=Ie(t,Re,{},!0)),o.run(1)}),l=!0)},o(a){o||(o=Ie(t,Re,{},!1)),o.run(0),l=!1},d(a){a&&F(t),u(),a&&o&&o.end()}}}function Zt(e){let t,n,r,i,u,o,l,a,c,_,m,k,L,d=e[6],v=[];for(let y=0;y<d.length;y+=1)v[y]=Ue(De(e,d,y));let b=e[8],M=[];for(let y=0;y<b.length;y+=1)M[y]=We(je(e,b,y));let T=e[1].length>0&&He(e);return{c(){t=U("div"),n=U("div"),n.innerHTML='<p style="color: #497D0B">Origen</p><p style="color: #B3AD10">Destino</p>',r=Ae(),i=C("svg"),u=C("defs"),o=C("linearGradient"),l=C("stop"),a=C("stop"),c=C("g");for(let y=0;y<v.length;y+=1)v[y].c();_=C("g");for(let y=0;y<M.length;y+=1)M[y].c();m=Ae(),T&&T.c(),O(n,"class","flujos svelte-108whb1"),O(l,"offset","0%"),I(l,"stop-color","#497D0B"),I(l,"stop-opacity","1"),O(a,"offset","100%"),I(a,"stop-color","#CFC912"),I(a,"stop-opacity","1"),O(o,"id","gradient"),O(o,"x1","0%"),O(o,"y1","0%"),O(o,"x2","100%"),O(o,"y2","0%"),O(_,"class","rect-group"),O(i,"width",e[0]),O(i,"height",nt),O(i,"transform","translate("+e[9].left+", "+e[9].top+")"),O(t,"class","chart-container"),R(()=>e[21].call(t))},m(y,z){ee(y,t,z),P(t,n),P(t,r),P(t,i),P(i,u),P(u,o),P(o,l),P(o,a),P(i,c);for(let E=0;E<v.length;E+=1)v[E].m(c,null);P(i,_);for(let E=0;E<M.length;E+=1)M[E].m(_,null);P(t,m),T&&T.m(t,null),k=Ke(t,e[21].bind(t)),L=!0},p(y,[z]){if(z&1090){d=y[6];let E;for(E=0;E<d.length;E+=1){const N=De(y,d,E);v[E]?v[E].p(N,z):(v[E]=Ue(N),v[E].c(),v[E].m(c,null))}for(;E<v.length;E+=1)v[E].d(1);v.length=d.length}if(z&2311){b=y[8];let E;for(E=0;E<b.length;E+=1){const N=je(y,b,E);M[E]?M[E].p(N,z):(M[E]=We(N),M[E].c(),M[E].m(_,null))}for(;E<M.length;E+=1)M[E].d(1);M.length=b.length}(!L||z&1)&&O(i,"width",y[0]),y[1].length>0?T?(T.p(y,z),z&2&&ue(T,1)):(T=He(y),T.c(),ue(T,1),T.m(t,null)):T&&(Et(),$e(T,1,1,()=>{T=null}),Lt())},i(y){L||(ue(T),L=!0)},o(y){$e(T),L=!1},d(y){y&&F(t),Te(v,y),Te(M,y),T&&T.d(),k()}}}let nt=600;function Kt(e,t,n){let r,i,u,o,l,a,c;const _={top:10,right:5,bottom:20,left:5};let m=600;const k=Yt().source(A=>[A.source.x1,A.y0]).target(A=>[A.target.x0,A.y1]);let L=[];function d(A){n(1,L=a.filter($=>$.source===A||$.target===A))}let v,b,M;document.addEventListener("mousemove",function(A){n(4,b=A.clientX),n(5,M=A.clientY)});const T=A=>{n(1,L=[A])},y=()=>{n(1,L=[])},z=A=>{d(A)},E=()=>{n(1,L=[])},N=(A,$)=>$.source.id===A.id||$.target.id===A.id;function fe(){v=this.clientWidth,n(3,v)}function te(){m=this.clientWidth,n(0,m)}return e.$$.update=()=>{e.$$.dirty&1&&n(2,r=m-_.left-_.right),e.$$.dirty&16388&&n(13,u=Bt().nodeAlign(et).nodeWidth(10).nodePadding(12).nodeId(A=>A.id).size([r,i]).linkSort((A,$)=>Ce(A.value,$.value)).nodeSort((A,$)=>Ce(A.value,$.value))),e.$$.dirty&8192&&n(12,o=u(Vt)),e.$$.dirty&4096&&n(8,l=o.nodes),e.$$.dirty&4096&&n(6,a=o.links),e.$$.dirty&2&&n(7,c=Math.floor(L.reduce((A,$)=>A+$.value,0)/10).toLocaleString("es-ES")+" toneladas")},n(14,i=nt-_.top-_.bottom),[m,L,r,v,b,M,a,c,l,_,k,d,o,u,i,T,y,z,E,N,fe,te]}class Qt extends Pt{constructor(t){super(),zt(this,t,Kt,Zt,ut,{})}}new Qt({target:document.getElementById("app")});