import{_ as g,c as v,s as y,a as k,b as V,u as P,i as z,d as S,e as E,f as D,g as $,h as B,w as O,j as R,k as T,n as U,p as A}from"../index-tJ7hpoOX.js";import{d as w,a7 as N,o as t,c as r,z as e,b as h,e as s,f as H,i as b,g as n,a8 as L,I,k as x,a9 as f,aa as j,N as _,l as u,F as M,t as F,h as G}from"../modules/vue-BTRTOmJb.js";import{Q,G as W,r as K,S as X,N as Y,a as q}from"./SlidesShow-cF3uoXnH.js";import{P as J}from"./PrintStyle-VNUK2P7_.js";import"../modules/shiki-CbV88cOH.js";import"../modules/unplugin-icons-DwPQ-7uy.js";import"./bottom-CXb4EeQ4.js";import"./DrawingPreview-BuPC2cTo.js";const Z="/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=w({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,o=N(i,"modelValue",a);function l(){o.value=!1}return(d,p)=>(t(),r(L,null,[e(o)?(t(),h("div",ee,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:p[0]||(p[0]=C=>l())}),s("div",{class:b(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[H(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),le=g(oe,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/Modal.vue"]]),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),j("dev ")])])],-1),ie=w({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const o=N(c,"modelValue",a),l=I(()=>typeof v.info=="string");return(d,p)=>(t(),r(le,{modelValue:e(o),"onUpdate:modelValue":p[0]||(p[0]=C=>f(o)?o.value=C:null),class:"px-6 py-4"},{default:x(()=>[s("div",se,[l.value?(t(),h("div",{key:0,class:"mb-4",innerHTML:e(v).info},null,8,te)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=g(ie,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=w({__name:"Controls",setup(c){const a=_(),i=_();return(m,o)=>(t(),h(M,null,[u(Q,{modelValue:e(y),"onUpdate:modelValue":o[0]||(o[0]=l=>f(y)?y.value=l:null)},null,8,["modelValue"]),u(W),a.value?(t(),r(e(a),{key:0})):n("v-if",!0),i.value?(t(),r(e(i),{key:1,modelValue:e(k),"onUpdate:modelValue":o[1]||(o[1]=l=>f(k)?k.value=l:null)},null,8,["modelValue"])):n("v-if",!0),e(v).info?(t(),r(ne,{key:2,modelValue:e(V),"onUpdate:modelValue":o[2]||(o[2]=l=>f(V)?V.value=l:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=g(re,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/internals/Controls.vue"]]),ue=w({__name:"play",setup(c){K();const a=F();function i(l){var d;S.value||((d=l.target)==null?void 0:d.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?U():A())}P(a);const m=I(()=>z.value||S.value);_();const o=_();return E(()=>import("./DrawingControls-kplDdPyy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(l=>o.value=l.default),(l,d)=>(t(),h(M,null,[e(D)?(t(),r(J,{key:0})):n("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:a,class:b(["grid",e(T)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(q,{class:"w-full h-full",style:G({background:"var(--slidev-slide-container-background, black)"}),width:e(D)?e(O).width.value:void 0,scale:e(R),"is-main":!0,onPointerdown:i},{default:x(()=>[u(X,{"render-context":"slide"})]),controls:x(()=>[s("div",{class:b(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e($)?"pointer-events-none":""]])},[u(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(v).drawings.presenterOnly&&!e(B)&&o.value?(t(),r(e(o),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),he=g(ue,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/pages/play.vue"]]);export{he as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-kplDdPyy.js","assets/modules/unplugin-icons-DwPQ-7uy.js","assets/modules/vue-BTRTOmJb.js","assets/modules/shiki-CbV88cOH.js","assets/modules/shiki-BSchMNmt.css","assets/index-tJ7hpoOX.js","assets/index-YOS-HLoY.css","assets/slidev/SlidesShow-cF3uoXnH.js","assets/slidev/bottom-CXb4EeQ4.js","assets/slidev/DrawingPreview-BuPC2cTo.js","assets/SlidesShow-DO7Zpm_L.css","assets/DrawingControls-BO6lw4N5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
