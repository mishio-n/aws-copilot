import{_ as G,a as H,b as J,c as E,d as Q}from"../modules/unplugin-icons-DwPQ-7uy.js";import{t as F,ad as U,d as T,c as x,i as m,z as s,o as u,I as g,b as k,e as t,l as c,x as S,F as O,ab as W,ae as K,af as X,h as N,p as L,a as A,C as M,N as Y,ag as Z,J as ee,ah as te,ai as se,k as y,g as z,a9 as oe}from"../modules/vue-BTRTOmJb.js";import{_ as D,u as ne,c as V,z as ae,B as le,x as re,r as ie,C as w,D as C,E as ce,F as ue,G as de,H as pe,g as me,I as ve,J as _e,K as fe,L as j,M as xe,N as he,O as be,P as ge,A as ke,s as I}from"../index-tJ7hpoOX.js";import{r as ye,S as we,a as q,I as R,Q as Ce,N as Se,G as Ne}from"./SlidesShow-cF3uoXnH.js";import{S as $e,g as ze}from"./bottom-CXb4EeQ4.js";import{N as Ie}from"./NoteDisplay-G04bIDIK.js";import Fe from"./DrawingControls-kplDdPyy.js";import"../modules/shiki-CbV88cOH.js";import"./DrawingPreview-BuPC2cTo.js";function Te(a){if(a==null)return{info:F(),update:async()=>{}};const r=`/@slidev/slide/${a}.json`,{data:o,execute:l}=U(r).json().get();return l(),{info:o,update:async d=>await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}).then(n=>n.json())}}const De=T({__name:"NoteStatic",props:{no:{type:Number,required:!1},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(a){const r=a,{info:o}=Te(r.no);return(l,v)=>{var d,n;return u(),x(Ie,{class:m(r.class),note:(d=s(o))==null?void 0:d.note,"note-html":(n=s(o))==null?void 0:n.noteHTML,"clicks-context":l.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Pe=D(De,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Be=a=>(L("data-v-52a29648"),a=a(),A(),a),Me=["title"],Ve={class:"flex gap-1 items-center min-w-16"},je={"text-primary":""},qe=Be(()=>t("span",{op50:""},"/",-1)),Re={op50:""},Oe=["max"],Le=T({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const r=a,o=g(()=>r.clicksContext.total),l=g({get(){return r.clicksContext.current>o.value?-1:r.clicksContext.current},set(n){r.clicksContext.current=n}}),v=g(()=>Array.from({length:o.value+1},(n,i)=>i));function d(){(l.value<0||l.value>o.value)&&(l.value=0)}return(n,i)=>{const _=G;return u(),k("div",{class:m(["flex gap-0.5 items-center select-none",o.value?"":"op50"]),title:`Clicks in this slide: ${o.value}`},[t("div",Ve,[c(_,{"text-sm":"",op50:""}),t("span",je,S(l.value),1),qe,t("span",Re,S(o.value),1)]),t("div",{relative:"","flex-auto":"",h5:"",flex:"~",onDblclick:i[2]||(i[2]=e=>l.value=n.clicksContext.total)},[(u(!0),k(O,null,W(v.value,e=>(u(),k("div",{key:e,border:"y main","of-hidden":"",relative:"",class:m([e===0?"rounded-l border-l":"",e===o.value?"rounded-r border-r":""]),style:N({width:o.value>0?`${1/o.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:m(e<=l.value?"bg-primary op20":"")},null,2),t("div",{class:m([+e==+l.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===o.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},S(e),3)],6))),128)),K(t("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:o.value,step:1,"z-10":"",op0:"",style:N({"--thumb-width":`${1/(o.value+1)*100}%`}),onMousedown:d,onFocus:i[1]||(i[1]=e=>{var f;return(f=e.currentTarget)==null?void 0:f.blur()})},null,44,Oe),[[X,l.value]])],32)],10,Me)}}}),Ae=D(Le,[["__scopeId","data-v-52a29648"],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),P=a=>(L("data-v-d0ba6bbb"),a=a(),A(),a),Ge={class:"bg-main h-full slidev-presenter"},He=P(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Je={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ee=P(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Qe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ue={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},Ke=P(()=>t("div",{"flex-auto":""},null,-1)),Xe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ye={class:"progress-bar"},Ze=T({__name:"presenter",setup(a){const r=F();ye(),ne(r);const o=V.titleTemplate.replace("%s",V.title||"Slidev");ae({title:`Presenter - ${o}`}),F(!1);const{timer:l,resetTimer:v}=le(),d=re.map(_=>ie(_)),n=g(()=>w.value.current<w.value.total?[C.value,w.value.current+1]:ce.value?[ue.value,0]:null),i=g(()=>n.value&&d[+n.value[0].path-1]);return M([C,de],()=>{i.value&&(i.value.current=n.value[1])},{immediate:!0}),Y(),Z(()=>{const _=r.value.querySelector("#slide-content"),e=ee(te()),f=se();M(()=>{if(!f.value||me.value||!ve.value)return;const p=_.getBoundingClientRect(),h=(e.x-p.left)/p.width*100,b=(e.y-p.top)/p.height*100;if(!(h<0||h>100||b<0||b>100))return{x:h,y:b}},p=>{pe.cursor=p})}),(_,e)=>{var B;const f=H,p=J,h=E,b=Q;return u(),k(O,null,[t("div",Ge,[t("div",{class:m(["grid-container",`layout${s(_e)}`])},[t("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[c(q,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:y(()=>[c(we,{"render-context":"presenter"})]),_:1}),(u(),x(Ae,{key:(B=s(C))==null?void 0:B.path,"clicks-context":s(fe)(s(C)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),He],512),t("div",Je,[n.value&&i.value?(u(),x(q,{key:"next",class:"h-full w-full"},{default:y(()=>[(u(),x(s($e),{is:n.value[0].component,key:n.value[0].path,"clicks-context":i.value,class:m(s(ze)(n.value[0])),route:n.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):z("v-if",!0),Ee]),z(" Notes "),(u(),k("div",Qe,[(u(),x(Pe,{key:`static-${s(j)}`,no:s(j),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:N({fontSize:`${s(xe)}em`}),"clicks-context":s(w)},null,8,["no","style","clicks-context"])),t("div",Ue,[c(R,{title:"Increase font size",onClick:s(he)},{default:y(()=>[c(f)]),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:s(be)},{default:y(()=>[c(p)]),_:1},8,["onClick"]),z("v-if",!0)])])),t("div",We,[c(Se,{persist:!0}),Ke,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:e[2]||(e[2]=(...$)=>s(v)&&s(v)(...$))},[c(h,{class:"absolute"}),c(b,{class:"absolute opacity-0"})]),t("div",Xe,S(s(l)),1)]),(u(),x(Fe,{key:2}))],2),t("div",Ye,[t("div",{class:"progress h-3px bg-primary transition-all",style:N({width:`${(s(ge)-1)/(s(ke)-1)*100}%`})},null,4)])]),c(Ne),c(Ce,{modelValue:s(I),"onUpdate:modelValue":e[3]||(e[3]=$=>oe(I)?I.value=$:null)},null,8,["modelValue"])],64)}}}),ct=D(Ze,[["__scopeId","data-v-d0ba6bbb"],["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/pages/presenter.vue"]]);export{ct as default};