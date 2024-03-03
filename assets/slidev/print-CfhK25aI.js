import{d as p,ac as _,I as d,b as s,e as t,x as a,z as r,F as u,ab as h,o as n,aa as f,l as g,g as v}from"../modules/vue-BTRTOmJb.js";import{z as x,c as m,x as b,A as w,_ as y}from"../index-tJ7hpoOX.js";import{N}from"./NoteDisplay-G04bIDIK.js";import"../modules/shiki-CbV88cOH.js";const k={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},S=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},C=p({__name:"print",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const c=d(()=>b.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",k,[t("div",L,[t("div",T,[t("h1",V,a(r(m).title),1),t("div",z,a(new Date().toLocaleString()),1)]),(n(!0),s(u,null,h(c.value,(e,i)=>(n(),s("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(r(w)),1),f(" "+a(e==null?void 0:e.title)+" ",1),S])]),g(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(n(),s("hr",A)):v("v-if",!0)]))),128))])]))}}),R=y(C,[["__file","/home/runner/work/aws-copilot/aws-copilot/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{R as default};
