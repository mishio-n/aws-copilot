import{t as O,I as C,aj as $,ak as D,al as Rt,C as Se,am as Lt,d as K,an as Nt,B as lt,ac as Tt,Q as Ot,b as k,e as E,f as de,h as fe,i as T,o as f,c as S,k as M,x as U,m as ct,ao as ut,a7 as ze,ap as Pt,l as w,ae as ht,aq as dt,z as c,F as B,ab as Ce,ar as Dt,g as b,j as pe,as as Ft,aa as Pe,a9 as Vt,at as jt,a8 as Bt,N as De,r as Wt,au as Gt,av as Kt}from"../modules/vue-BTRTOmJb.js";import{x as oe,n as ge,p as ye,s as j,Q as Ye,R as Xe,S as ee,T as ft,U as pt,V as ae,W as Me,X as vt,Y as zt,Z as Ht,$ as Qt,a0 as _t,t as Ee,f as Ut,m as Ie,l as Yt,c as we,a1 as Je,y as Xt,_ as W,a2 as Fe,w as Ae,P as ke,r as Jt,a3 as Zt,a4 as he,j as Re,a5 as Ze,e as mt,h as Z,a6 as qt,E as es,a7 as ts,a8 as qe,a9 as q,I as ve,aa as ss,ab as ns,J as os,ac as rs,ad as is,b as et,A as as,H as Le,D as ie,F as Ne,ae as tt,af as ls,K as cs}from"../index-tJ7hpoOX.js";import{e as us,f as hs,g as ds,h as fs,i as ps,j as vs,k as _s,l as ms,m as gs,n as gt,o as ys,p as ws,q as ks,r as bs,s as xs,t as Ss,u as Ms,v as $s,w as Cs}from"../modules/unplugin-icons-DwPQ-7uy.js";import{S as yt,g as wt,G as Es,a as Is}from"./bottom-CXb4EeQ4.js";import As from"./DrawingPreview-BuPC2cTo.js";const be=O(1),xe=C(()=>oe.length),L=O(0),He=O(0);function Rs(){L.value>be.value&&(L.value-=1)}function Ls(){L.value<xe.value&&(L.value+=1)}function Ns(){if(L.value>be.value){let s=L.value-He.value;s<be.value&&(s=be.value),L.value=s}}function Ts(){if(L.value<xe.value){let s=L.value+He.value;s>xe.value&&(s=xe.value),L.value=s}}function Os(){const{escape:s,space:e,shift:t,left:n,right:o,up:r,down:i,enter:a,d:l,g:h,o:u,"`":p}=vt;let d=[{name:"next_space",key:$(e,D(t)),fn:ge,autoRepeat:!0},{name:"prev_space",key:$(e,t),fn:ye,autoRepeat:!0},{name:"next_right",key:$(o,D(t),D(j)),fn:ge,autoRepeat:!0},{name:"prev_left",key:$(n,D(t),D(j)),fn:ye,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ge,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:ye,autoRepeat:!0},{name:"next_down",key:$(i,D(j)),fn:Ye,autoRepeat:!0},{name:"prev_up",key:$(r,D(j)),fn:()=>Xe(!1),autoRepeat:!0},{name:"next_shift",key:$(o,t),fn:Ye,autoRepeat:!0},{name:"prev_shift",key:$(n,t),fn:()=>Xe(!1),autoRepeat:!0},{name:"toggle_dark",key:$(l,D(ee)),fn:ft},{name:"toggle_overview",key:$(Rt(u,p),D(ee)),fn:pt},{name:"hide_overview",key:$(s,D(ee)),fn:()=>j.value=!1},{name:"goto",key:$(h,D(ee)),fn:()=>ae.value=!ae.value},{name:"next_overview",key:$(o,j),fn:Ls},{name:"prev_overview",key:$(n,j),fn:Rs},{name:"up_overview",key:$(r,j),fn:Ns},{name:"down_overview",key:$(i,j),fn:Ts},{name:"goto_from_overview",key:$(a,j),fn:()=>{Me(L.value),j.value=!1}}];const v=new Set(d.map(y=>y.name));if(d.filter(y=>y.name&&v.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return d}const kt=$(D(Qt),D(Ht),zt);function Ps(s,e,t=!1){typeof s=="string"&&(s=vt[s]);const n=$(s,kt);let o=0,r;const i=()=>{if(clearTimeout(r),!n.value){o=0;return}t&&(r=setTimeout(i,Math.max(1e3-o*250,150)),o++),e()};return Se(n,i,{flush:"sync"})}function Ds(s,e){return Lt(s,t=>{kt.value&&(t.repeat||e())})}function bo(){const s=Os();new Map(s.map(t=>[t.key,t])).forEach(t=>{t.fn&&Ps(t.key,t.fn,t.autoRepeat)}),Ds("f",()=>_t.toggle())}const Fs=K({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(s){const e=s,t=O(),n=Nt(t),o=C(()=>e.width?e.width:n.width.value),r=C(()=>e.width?e.width/Ee:n.height.value);e.width&&lt(()=>{t.value&&(t.value.style.width=`${o.value}px`,t.value.style.height=`${r.value}px`)});const i=C(()=>o.value/r.value),a=C(()=>e.scale&&!Ut.value?e.scale:i.value<Ee?o.value/Ie:r.value*Ee/Ie),l=C(()=>({height:`${Yt}px`,width:`${Ie}px`,transform:`translate(-50%, -50%) scale(${a.value})`,"--slidev-slide-scale":a.value})),h=C(()=>({"select-none":!we.selectable,"slidev-nav-go-forward":Je.value>0,"slidev-nav-go-backward":Je.value<0}));return e.isMain&&Tt(C(()=>`
    :root {
      --slidev-slide-scale: ${a.value};
    }
  `)),Ot(Xt,a),(u,p)=>(f(),k("div",{id:"slide-container",ref_key:"root",ref:t,class:T(["slidev-slides-container",h.value])},[E("div",{id:"slide-content",class:"slidev-slide-content",style:fe(l.value)},[de(u.$slots,"default")],4),de(u.$slots,"controls")],2))}}),Vs=W(Fs,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/SlideContainer.vue"]]),js={class:"sr-only"},Bs=K({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(s){return(e,t)=>(f(),S(ut(e.as||"button"),ct({class:"slidev-icon-btn",title:e.title},e.$attrs),{default:M(()=>[E("span",js,U(e.title),1),de(e.$slots,"default",{},()=>[E("div",{class:T(e.icon)},null,2)])]),_:3},16,["title"]))}}),F=W(Bs,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/IconButton.vue"]]),Ws=["onClick"],Gs={class:"text-green font-bold"},Ks={class:"opacity-50"},zs={key:1,class:"opacity-50"},Hs={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},Te=4*16*2,st=2*16,Qs=K({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(s,{emit:e}){const o=ze(s,"modelValue",e);function r(){o.value=!1}function i(v){Me(v),r()}function a(v){return v===L.value}const l=Fe.smaller("xs"),h=Fe.smaller("sm"),u=C(()=>l.value?Ae.width.value-Te:h.value?(Ae.width.value-Te-st)/2:300),p=C(()=>Math.floor((Ae.width.value-Te)/(u.value+st))),d=O("");return Pt("keypress",v=>{if(!j.value){d.value="";return}if(v.key==="Enter"){v.preventDefault(),d.value?(i(+d.value),d.value=""):i(L.value);return}const m=Number.parseInt(v.key.replace(/[^0-9]/g,""));if(Number.isNaN(m)){d.value="";return}if(!d.value&&m===0)return;if(d.value+=String(m),+d.value>=oe.length){d.value="";return}const y=oe.findIndex(I=>I.path===d.value);y!==-1&&(L.value=y+1),+d.value*10>oe.length&&(i(+d.value),d.value="")}),lt(()=>{L.value=ke.value,He.value=p.value}),(v,m)=>{const y=us,I=hs;return f(),k(B,null,[w(Dt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:M(()=>[ht(E("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:m[0]||(m[0]=x=>r())},[E("div",{class:"grid gap-y-4 gap-x-8 w-full",style:fe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(f(!0),k(B,null,Ce(c(oe),(x,A)=>(f(),k("div",{key:x.path,class:"relative"},[E("div",{class:T(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",a(A+1)||c(L)===A+1?"border-primary":"border-main"]),onClick:g=>i(+x.path)},[(f(),S(Vs,{key:x.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[x!=null&&x.component?(f(),S(c(yt),{key:0,is:x.component,"clicks-context":c(Jt)(x,c(Zt)),class:T(c(wt)(x)),route:x,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):b("v-if",!0),w(As,{page:+x.path},null,8,["page"])]),_:2},1032,["width"]))],10,Ws),E("div",{class:"absolute top-0",style:fe(`left: ${u.value+5}px`)},[d.value&&String(A+1).startsWith(d.value)?(f(),k(B,{key:0},[E("span",Gs,U(d.value),1),E("span",Ks,U(String(A+1).slice(d.value.length)),1)],64)):(f(),k("span",zs,U(A+1),1))],4)]))),128))],4)],512),[[dt,c(o)]])]),_:1}),c(o)?(f(),k("div",Hs,[w(F,{title:"Close",class:"text-2xl",onClick:r},{default:M(()=>[w(y)]),_:1}),w(F,{as:"a",title:"Slides Overview",target:"_blank",href:"/overview","tab-index":"-1",class:"text-2xl"},{default:M(()=>[w(I)]),_:1})])):b("v-if",!0)],64)}}}),xo=W(Qs,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function Y(s){return Array.isArray?Array.isArray(s):St(s)==="[object Array]"}const Us=1/0;function Ys(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-Us?"-0":e}function Xs(s){return s==null?"":Ys(s)}function Q(s){return typeof s=="string"}function bt(s){return typeof s=="number"}function Js(s){return s===!0||s===!1||Zs(s)&&St(s)=="[object Boolean]"}function xt(s){return typeof s=="object"}function Zs(s){return xt(s)&&s!==null}function V(s){return s!=null}function Oe(s){return!s.trim().length}function St(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const qs="Incorrect 'index' type",en=s=>`Invalid value for key ${s}`,tn=s=>`Pattern length exceeds max of ${s}.`,sn=s=>`Missing ${s} property in key`,nn=s=>`Property 'weight' in key '${s}' must be a positive integer`,nt=Object.prototype.hasOwnProperty;class on{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let o=Mt(n);this._keys.push(o),this._keyMap[o.id]=o,t+=o.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Mt(s){let e=null,t=null,n=null,o=1,r=null;if(Q(s)||Y(s))n=s,e=ot(s),t=Ve(s);else{if(!nt.call(s,"name"))throw new Error(sn("name"));const i=s.name;if(n=i,nt.call(s,"weight")&&(o=s.weight,o<=0))throw new Error(nn(i));e=ot(i),t=Ve(i),r=s.getFn}return{path:e,id:t,weight:o,src:n,getFn:r}}function ot(s){return Y(s)?s:s.split(".")}function Ve(s){return Y(s)?s.join("."):s}function rn(s,e){let t=[],n=!1;const o=(r,i,a)=>{if(V(r))if(!i[a])t.push(r);else{let l=i[a];const h=r[l];if(!V(h))return;if(a===i.length-1&&(Q(h)||bt(h)||Js(h)))t.push(Xs(h));else if(Y(h)){n=!0;for(let u=0,p=h.length;u<p;u+=1)o(h[u],i,a+1)}else i.length&&o(h,i,a+1)}};return o(s,Q(e)?e.split("."):e,0),n?t:t[0]}const an={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ln={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},cn={location:0,threshold:.6,distance:100},un={useExtendedSearch:!1,getFn:rn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...ln,...an,...cn,...un};const hn=/[^ ]+/g;function dn(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(o){const r=o.match(hn).length;if(t.has(r))return t.get(r);const i=1/Math.pow(r,.5*s),a=parseFloat(Math.round(i*n)/n);return t.set(r,a),a},clear(){t.clear()}}}class Qe{constructor({getFn:e=_.getFn,fieldNormWeight:t=_.fieldNormWeight}={}){this.norm=dn(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();Q(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!V(e)||Oe(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(e):this.getFn(e,o.path);if(V(i)){if(Y(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:h,value:u}=l.pop();if(V(u))if(Q(u)&&!Oe(u)){let p={v:u,i:h,n:this.norm.get(u)};a.push(p)}else Y(u)&&u.forEach((p,d)=>{l.push({nestedArrIndex:d,value:p})})}n.$[r]=a}else if(Q(i)&&!Oe(i)){let a={v:i,n:this.norm.get(i)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function $t(s,e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const o=new Qe({getFn:t,fieldNormWeight:n});return o.setKeys(s.map(Mt)),o.setSources(e),o.create(),o}function fn(s,{getFn:e=_.getFn,fieldNormWeight:t=_.fieldNormWeight}={}){const{keys:n,records:o}=s,r=new Qe({getFn:e,fieldNormWeight:t});return r.setKeys(n),r.setIndexRecords(o),r}function _e(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:o=_.distance,ignoreLocation:r=_.ignoreLocation}={}){const i=e/s.length;if(r)return i;const a=Math.abs(n-t);return o?i+a/o:a?1:i}function pn(s=[],e=_.minMatchCharLength){let t=[],n=-1,o=-1,r=0;for(let i=s.length;r<i;r+=1){let a=s[r];a&&n===-1?n=r:!a&&n!==-1&&(o=r-1,o-n+1>=e&&t.push([n,o]),n=-1)}return s[r-1]&&r-n>=e&&t.push([n,r-1]),t}const ne=32;function vn(s,e,t,{location:n=_.location,distance:o=_.distance,threshold:r=_.threshold,findAllMatches:i=_.findAllMatches,minMatchCharLength:a=_.minMatchCharLength,includeMatches:l=_.includeMatches,ignoreLocation:h=_.ignoreLocation}={}){if(e.length>ne)throw new Error(tn(ne));const u=e.length,p=s.length,d=Math.max(0,Math.min(n,p));let v=r,m=d;const y=a>1||l,I=y?Array(p):[];let x;for(;(x=s.indexOf(e,m))>-1;){let N=_e(e,{currentLocation:x,expectedLocation:d,distance:o,ignoreLocation:h});if(v=Math.min(N,v),m=x+u,y){let z=0;for(;z<u;)I[x+z]=1,z+=1}}m=-1;let A=[],g=1,R=u+p;const G=1<<u-1;for(let N=0;N<u;N+=1){let z=0,H=R;for(;z<H;)_e(e,{errors:N,currentLocation:d+H,expectedLocation:d,distance:o,ignoreLocation:h})<=v?z=H:R=H,H=Math.floor((R-z)/2+z);R=H;let ce=Math.max(1,d-H+1),ue=i?p:Math.min(d+H,p)+u,J=Array(ue+2);J[ue+1]=(1<<N)-1;for(let P=ue;P>=ce;P-=1){let re=P-1,se=t[s.charAt(re)];if(y&&(I[re]=+!!se),J[P]=(J[P+1]<<1|1)&se,N&&(J[P]|=(A[P+1]|A[P])<<1|1|A[P+1]),J[P]&G&&(g=_e(e,{errors:N,currentLocation:re,expectedLocation:d,distance:o,ignoreLocation:h}),g<=v)){if(v=g,m=re,m<=d)break;ce=Math.max(1,2*d-m)}}if(_e(e,{errors:N+1,currentLocation:d,expectedLocation:d,distance:o,ignoreLocation:h})>v)break;A=J}const X={isMatch:m>=0,score:Math.max(.001,g)};if(y){const N=pn(I,a);N.length?l&&(X.indices=N):X.isMatch=!1}return X}function _n(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const o=s.charAt(t);e[o]=(e[o]||0)|1<<n-t-1}return e}class Ct{constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:o=_.distance,includeMatches:r=_.includeMatches,findAllMatches:i=_.findAllMatches,minMatchCharLength:a=_.minMatchCharLength,isCaseSensitive:l=_.isCaseSensitive,ignoreLocation:h=_.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:h},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,v)=>{this.chunks.push({pattern:d,alphabet:_n(d),startIndex:v})},p=this.pattern.length;if(p>ne){let d=0;const v=p%ne,m=p-v;for(;d<m;)u(this.pattern.substr(d,ne),d),d+=ne;if(v){const y=p-ne;u(this.pattern.substr(y),y)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return n&&(m.indices=[[0,e.length-1]]),m}const{location:o,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:h}=this.options;let u=[],p=0,d=!1;this.chunks.forEach(({pattern:m,alphabet:y,startIndex:I})=>{const{isMatch:x,score:A,indices:g}=vn(e,m,y,{location:o+I,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:h});x&&(d=!0),p+=A,x&&g&&(u=[...u,...g])});let v={isMatch:d,score:d?p/this.chunks.length:1};return d&&n&&(v.indices=u),v}}class te{constructor(e){this.pattern=e}static isMultiMatch(e){return rt(e,this.multiRegex)}static isSingleMatch(e){return rt(e,this.singleRegex)}search(){}}function rt(s,e){const t=s.match(e);return t?t[1]:null}class mn extends te{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class gn extends te{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class yn extends te{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class wn extends te{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class kn extends te{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class bn extends te{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Et extends te{constructor(e,{location:t=_.location,threshold:n=_.threshold,distance:o=_.distance,includeMatches:r=_.includeMatches,findAllMatches:i=_.findAllMatches,minMatchCharLength:a=_.minMatchCharLength,isCaseSensitive:l=_.isCaseSensitive,ignoreLocation:h=_.ignoreLocation}={}){super(e),this._bitapSearch=new Ct(e,{location:t,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class It extends te{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const o=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+r,o.push([n,t-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const je=[mn,It,yn,wn,bn,kn,gn,Et],it=je.length,xn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Sn="|";function Mn(s,e={}){return s.split(Sn).map(t=>{let n=t.trim().split(xn).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const a=n[r];let l=!1,h=-1;for(;!l&&++h<it;){const u=je[h];let p=u.isMultiMatch(a);p&&(o.push(new u(p,e)),l=!0)}if(!l)for(h=-1;++h<it;){const u=je[h];let p=u.isSingleMatch(a);if(p){o.push(new u(p,e));break}}}return o})}const $n=new Set([Et.type,It.type]);class Cn{constructor(e,{isCaseSensitive:t=_.isCaseSensitive,includeMatches:n=_.includeMatches,minMatchCharLength:o=_.minMatchCharLength,ignoreLocation:r=_.ignoreLocation,findAllMatches:i=_.findAllMatches,location:a=_.location,threshold:l=_.threshold,distance:h=_.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:a,threshold:l,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=Mn(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let r=0,i=[],a=0;for(let l=0,h=t.length;l<h;l+=1){const u=t[l];i.length=0,r=0;for(let p=0,d=u.length;p<d;p+=1){const v=u[p],{isMatch:m,indices:y,score:I}=v.search(e);if(m){if(r+=1,a+=I,n){const x=v.constructor.type;$n.has(x)?i=[...i,...y]:i.push(y)}}else{a=0,r=0,i.length=0;break}}if(r){let p={isMatch:!0,score:a/r};return n&&(p.indices=i),p}}return{isMatch:!1,score:1}}}const Be=[];function En(...s){Be.push(...s)}function We(s,e){for(let t=0,n=Be.length;t<n;t+=1){let o=Be[t];if(o.condition(s,e))return new o(s,e)}return new Ct(s,e)}const $e={AND:"$and",OR:"$or"},Ge={PATH:"$path",PATTERN:"$val"},Ke=s=>!!(s[$e.AND]||s[$e.OR]),In=s=>!!s[Ge.PATH],An=s=>!Y(s)&&xt(s)&&!Ke(s),at=s=>({[$e.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function At(s,e,{auto:t=!0}={}){const n=o=>{let r=Object.keys(o);const i=In(o);if(!i&&r.length>1&&!Ke(o))return n(at(o));if(An(o)){const l=i?o[Ge.PATH]:r[0],h=i?o[Ge.PATTERN]:o[l];if(!Q(h))throw new Error(en(l));const u={keyId:Ve(l),pattern:h};return t&&(u.searcher=We(h,e)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const h=o[l];Y(h)&&h.forEach(u=>{a.children.push(n(u))})}),a};return Ke(s)||(s=at(s)),n(s)}function Rn(s,{ignoreFieldNorm:e=_.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:o,norm:r,score:i})=>{const a=o?o.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:r))}),t.score=n})}function Ln(s,e){const t=s.matches;e.matches=[],V(t)&&t.forEach(n=>{if(!V(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function Nn(s,e){e.score=s.score}function Tn(s,e,{includeMatches:t=_.includeMatches,includeScore:n=_.includeScore}={}){const o=[];return t&&o.push(Ln),n&&o.push(Nn),s.map(r=>{const{idx:i}=r,a={item:e[i],refIndex:i};return o.length&&o.forEach(l=>{l(r,a)}),a})}class le{constructor(e,t={},n){this.options={..._,...t},this.options.useExtendedSearch,this._keyStore=new on(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Qe))throw new Error(qs);this._myIndex=t||$t(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){V(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,o-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Rn(l,{ignoreFieldNorm:a}),r&&l.sort(i),bt(t)&&t>-1&&(l=l.slice(0,t)),Tn(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const t=We(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:a})=>{if(!V(r))return;const{isMatch:l,score:h,indices:u}=t.searchIn(r);l&&o.push({item:r,idx:i,matches:[{score:h,value:r,norm:a,indices:u}]})}),o}_searchLogical(e){const t=At(e,this.options),n=(a,l,h)=>{if(!a.children){const{keyId:p,searcher:d}=a,v=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(l,p),searcher:d});return v&&v.length?[{idx:h,item:l,matches:v}]:[]}const u=[];for(let p=0,d=a.children.length;p<d;p+=1){const v=a.children[p],m=n(v,l,h);if(m.length)u.push(...m);else if(a.operator===$e.AND)return[]}return u},o=this._myIndex.records,r={},i=[];return o.forEach(({$:a,i:l})=>{if(V(a)){let h=n(t,a,l);h.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},i.push(r[l])),h.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),i}_searchObjectList(e){const t=We(e,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:a})=>{if(!V(i))return;let l=[];n.forEach((h,u)=>{l.push(...this._findMatches({key:h,value:i[u],searcher:t}))}),l.length&&r.push({idx:a,item:i,matches:l})}),r}_findMatches({key:e,value:t,searcher:n}){if(!V(t))return[];let o=[];if(Y(t))t.forEach(({v:r,i,n:a})=>{if(!V(r))return;const{isMatch:l,score:h,indices:u}=n.searchIn(r);l&&o.push({score:h,key:e,value:r,idx:i,norm:a,indices:u})});else{const{v:r,n:i}=t,{isMatch:a,score:l,indices:h}=n.searchIn(r);a&&o.push({score:l,key:e,value:r,norm:i,indices:h})}return o}}le.version="7.0.0";le.createIndex=$t;le.parseIndex=fn;le.config=_;le.parseQuery=At;En(Cn);const On={key:0},Pn={key:1},Dn={key:2},Fn=K({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(s){return(e,t)=>(f(),k("div",null,[+e.no==1?(f(),k("p",On,"AWS Copilot")):+e.no==2?(f(),k("p",Pn,"What is AWS Copilot ?")):+e.no==3?(f(),k("p",Dn,"AWSでコンテナアプリケーションを動かす")):b("v-if",!0)]))}}),Vn=W(Fn,[["__file","/@slidev/titles.md"]]),jn={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Bn=["value","disabled"],Wn=["border","onClick"],Gn={"w-4":"","text-right":"",op50:"","text-sm":""},Kn=K({__name:"Goto",setup(s){const e=O(),t=O(),n=O(),o=O(),r=O(""),i=O(0);function a(g){return g!=null}const l=C(()=>new le(oe.map(g=>{var R;return(R=g.meta)==null?void 0:R.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=C(()=>r.value.startsWith("/")?r.value.substring(1):r.value),u=C(()=>l.value.search(h.value).map(g=>g.item)),p=C(()=>!!u.value.length);function d(){if(p.value){const g=u.value.at(i.value||0);g&&Me(g.no)}v()}function v(){r.value="",ae.value=!1}function m(g){g.preventDefault(),i.value++,i.value>=u.value.length&&(i.value=0),I()}function y(g){g.preventDefault(),i.value--,i.value<=-2&&(i.value=u.value.length-1),I()}function I(){var R;const g=(R=o.value)==null?void 0:R[i.value];g&&n.value&&(g.offsetTop+g.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:g.offsetTop+g.offsetHeight-n.value.offsetHeight+1}):g.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:g.offsetTop}))}function x(g){i.value=0,r.value=g.target.value}function A(g){Me(g),v()}return Se(ae,async g=>{var R;g?(r.value="",i.value=0,setTimeout(()=>{var G;return(G=t.value)==null?void 0:G.focus()},0)):(R=t.value)==null||R.blur()}),Se(he,()=>{var g;(g=e.value)!=null&&g.contains(he.value)||v()}),(g,R)=>(f(),k("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:T(["fixed right-5 transition-all",c(ae)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[E("div",jn,[E("input",{id:"slidev-goto-input",ref_key:"input",ref:t,value:r.value,type:"text",disabled:!c(ae),class:T(["outline-none bg-transparent",{"text-red-400":!p.value&&r.value}]),placeholder:"Goto...",onKeydown:[pe(d,["enter"]),pe(v,["escape"]),pe(m,["down"]),pe(y,["up"])],onInput:x},null,42,Bn)]),u.value.length>0?(f(),k("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(f(!0),k(B,null,Ce(u.value,(G,X)=>(f(),k("li",{ref_for:!0,ref_key:"items",ref:o,key:G.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:X===0?"":"t main",class:T(i.value===X?"bg-active op100":"op80"),onClick:Ft(N=>A(G.no),["stop","prevent"])},[E("div",Gn,U(G.no),1),w(c(Vn),{no:G.no},null,8,["no"])],10,Wn))),128))],512)):b("v-if",!0)],2))}}),So=W(Kn,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/Goto.vue"]]),zn={class:"select-list"},Hn={class:"title"},Qn={class:"items"},Un=["onClick"],Yn=K({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:e}){const o=ze(s,"modelValue",e,{passive:!0});return(r,i)=>{const a=ds;return f(),k("div",zn,[E("div",Hn,U(s.title),1),E("div",Qn,[(f(!0),k(B,null,Ce(s.items,l=>(f(),k("div",{key:l.value,class:T(["item",{active:c(o)===l.value}]),onClick:()=>{var h;o.value=l.value,(h=l.onClick)==null||h.call(l)}},[w(a,{class:T(["text-green-500",{"opacity-0":c(o)!==l.value}])},null,8,["class"]),Pe(" "+U(l.display||l.value),1)],10,Un))),128))])])}}}),Xn=W(Yn,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/SelectList.vue"]]),Jn={class:"text-sm"},Zn=K({__name:"Settings",setup(s){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,n)=>(f(),k("div",Jn,[w(Xn,{modelValue:c(Re),"onUpdate:modelValue":n[0]||(n[0]=o=>Vt(Re)?Re.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),qn=W(Zn,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/Settings.vue"]]),eo={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},to=K({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:e}){const o=ze(s,"modelValue",e,{passive:!0}),r=O();return jt(r,()=>{o.value=!1}),(i,a)=>(f(),k("div",{ref_key:"el",ref:r,class:"flex relative"},[E("button",{class:T({disabled:s.disabled}),onClick:a[0]||(a[0]=l=>o.value=!c(o))},[de(i.$slots,"button",{class:T({disabled:s.disabled})})],2),(f(),S(Bt,null,[c(o)?(f(),k("div",eo,[de(i.$slots,"menu")])):b("v-if",!0)],1024))],512))}}),so=W(to,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/MenuButton.vue"]]),no={},oo={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function ro(s,e){return f(),k("div",oo)}const me=W(no,[["render",ro],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),io={render(){return[]}},ao={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},lo={class:"my-auto"},co={class:"opacity-50"},uo=K({__name:"NavControls",props:{persist:{default:!1}},setup(s){const e=s,t=Fe.smaller("md"),{isFullscreen:n,toggle:o}=_t,r=C(()=>Ze.value?`?password=${Ze.value}`:""),i=C(()=>`/presenter/${ke.value}${r.value}`),a=C(()=>`/${ke.value}${r.value}`),l=O();function h(){l.value&&he.value&&l.value.contains(he.value)&&he.value.blur()}const u=C(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),p=De(),d=De();return mt(()=>import("./DrawingControls-kplDdPyy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(v=>d.value=v.default),(v,m)=>{const y=fs,I=ps,x=vs,A=_s,g=bs,R=ms,G=gs,X=gt,N=ys,z=ws,H=xs,ce=Wt("RouterLink"),ue=Ss,J=Ms,Ue=$s,P=Cs,re=ks;return f(),k("nav",{ref_key:"root",ref:l,class:"flex flex-col"},[E("div",{class:T(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",u.value]),onMouseleave:h},[c(Z)?b("v-if",!0):(f(),S(F,{key:0,title:c(n)?"Close fullscreen":"Enter fullscreen",onClick:c(o)},{default:M(()=>[c(n)?(f(),S(y,{key:0})):(f(),S(I,{key:1}))]),_:1},8,["title","onClick"])),w(F,{class:T({disabled:!c(qt)}),title:"Go to previous slide",onClick:c(ye)},{default:M(()=>[w(x)]),_:1},8,["class","onClick"]),w(F,{class:T({disabled:!c(es)}),title:"Go to next slide",onClick:c(ge)},{default:M(()=>[w(A)]),_:1},8,["class","onClick"]),c(Z)?b("v-if",!0):(f(),S(F,{key:1,title:"Show slide overview",onClick:m[0]||(m[0]=se=>c(pt)())},{default:M(()=>[w(g)]),_:1})),c(ts)?b("v-if",!0):(f(),S(F,{key:2,title:c(qe)?"Switch to light mode theme":"Switch to dark mode theme",onClick:m[1]||(m[1]=se=>c(ft)())},{default:M(()=>[c(qe)?(f(),S(R,{key:0})):(f(),S(G,{key:1}))]),_:1},8,["title"])),w(me),c(Z)?b("v-if",!0):(f(),k(B,{key:3},[!c(q)&&!c(t)&&p.value?(f(),k(B,{key:0},[w(c(p)),w(me)],64)):b("v-if",!0),c(q)?(f(),S(F,{key:1,title:c(ve)?"Hide presenter cursor":"Show presenter cursor",onClick:m[2]||(m[2]=se=>ve.value=!c(ve))},{default:M(()=>[c(ve)?(f(),S(X,{key:0})):(f(),S(N,{key:1}))]),_:1},8,["title"])):b("v-if",!0)],64)),(!c(we).drawings.presenterOnly||c(q))&&!c(Z)?(f(),k(B,{key:4},[w(F,{class:"relative",title:c(ee)?"Hide drawing toolbar":"Show drawing toolbar",onClick:m[3]||(m[3]=se=>ee.value=!c(ee))},{default:M(()=>[w(z),c(ee)?(f(),k("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:fe({background:c(ss).color})},null,4)):b("v-if",!0)]),_:1},8,["title"]),w(me)],64)):b("v-if",!0),c(Z)?b("v-if",!0):(f(),k(B,{key:5},[c(q)?(f(),S(ce,{key:0,to:a.value,class:"slidev-icon-btn",title:"Play Mode"},{default:M(()=>[w(H)]),_:1},8,["to"])):b("v-if",!0),c(ns)?(f(),S(ce,{key:1,to:i.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:M(()=>[w(ue)]),_:1},8,["to"])):b("v-if",!0),b("v-if",!0),c(q)?(f(),S(F,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:c(rs)},{default:M(()=>[w(J),Pe(" "+U(c(os)),1)]),_:1},8,["onClick"])):b("v-if",!0)],64)),(f(),k(B,{key:6},[c(we).download?(f(),S(F,{key:0,title:"Download as PDF",onClick:c(is)},{default:M(()=>[w(Ue)]),_:1},8,["onClick"])):b("v-if",!0)],64)),!c(q)&&c(we).info&&!c(Z)?(f(),S(F,{key:7,title:"Show info",onClick:m[5]||(m[5]=se=>et.value=!c(et))},{default:M(()=>[w(P)]),_:1})):b("v-if",!0),!c(q)&&!c(Z)?(f(),S(so,{key:8},{button:M(()=>[w(F,{title:"Adjust settings"},{default:M(()=>[w(re)]),_:1})]),menu:M(()=>[w(qn)]),_:1})):b("v-if",!0),c(Z)?b("v-if",!0):(f(),S(me,{key:9})),E("div",ao,[E("div",lo,[Pe(U(c(ke))+" ",1),E("span",co,"/ "+U(c(as)),1)])]),w(c(io))],34)],512)}}}),Mo=W(uo,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/NavControls.vue"]]);function ho(){const s=Gt(),e=O(!1);let t,n;const o=typeof document<"u"&&"startViewTransition"in document;return s.beforeResolve((r,i)=>{var v,m;const a=(v=i.meta.slide)==null?void 0:v.no,l=(m=r.meta.slide)==null?void 0:m.no;if(!(a!==void 0&&l!==void 0&&(i.meta.transition==="view-transition"&&a<l||r.meta.transition==="view-transition"&&l<a))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const h=new Promise((y,I)=>{t=y,n=I});let u;const p=new Promise(y=>u=y);return document.startViewTransition(()=>(u(),h)).finished.then(()=>{n=void 0,t=void 0}),p}),o&&s.afterEach(()=>{t==null||t(),n==null||n()}),e}const fo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},po=K({__name:"PresenterMouse",setup(s){return(e,t)=>{const n=gt;return c(Le).cursor?(f(),k("div",fo,[w(n,{class:"absolute",style:fe({left:`${c(Le).cursor.x}%`,top:`${c(Le).cursor.y}%`})},null,8,["style"])])):b("v-if",!0)}}}),vo=W(po,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),_o=K({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(s){Se(ie,()=>{var r,i;(r=ie.value)!=null&&r.meta&&ie.value.meta.preload!==!1&&(ie.value.meta.__preloaded=!0),(i=Ne.value)!=null&&i.meta&&Ne.value.meta.preload!==!1&&(Ne.value.meta.__preloaded=!0)},{immediate:!0});const e=ho(),t=De();mt(()=>import("./DrawingLayer-CyCZ1946.js"),__vite__mapDeps([10,2,5,3,4,6])).then(r=>t.value=r.default);const n=C(()=>oe.filter(r=>{var i;return((i=r.meta)==null?void 0:i.__preloaded)||r===ie.value}));function o(){tt.value=!0}return(r,i)=>(f(),k(B,null,[b(" Global Bottom "),w(c(Es)),b(" Slides "),(f(),S(ut(c(e)?"div":Kt),ct(c(tt)?{}:c(ls),{id:"slideshow",tag:"div",onAfterLeave:o}),{default:M(()=>[(f(!0),k(B,null,Ce(n.value,a=>ht((f(),S(c(yt),{key:a.path,is:a==null?void 0:a.component,"clicks-context":c(cs)(a),class:T([c(wt)(a),"overflow-hidden"]),route:a,"render-context":r.renderContext},null,8,["is","clicks-context","class","route","render-context"])),[[dt,a===c(ie)]])),128))]),_:1},16)),b(" Global Top "),w(c(Is)),t.value?(f(),S(c(t),{key:0})):b("v-if",!0),c(q)?b("v-if",!0):(f(),S(vo,{key:1}))],64))}}),$o=W(_o,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{So as G,F as I,Mo as N,xo as Q,$o as S,me as V,Vs as a,bo as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-kplDdPyy.js","assets/modules/unplugin-icons-DwPQ-7uy.js","assets/modules/vue-BTRTOmJb.js","assets/modules/shiki-CbV88cOH.js","assets/modules/shiki-BSchMNmt.css","assets/index-tJ7hpoOX.js","assets/index-YOS-HLoY.css","assets/slidev/bottom-CXb4EeQ4.js","assets/slidev/DrawingPreview-BuPC2cTo.js","assets/DrawingControls-BO6lw4N5.css","assets/slidev/DrawingLayer-CyCZ1946.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
