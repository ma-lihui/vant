import{c as x,u as j}from"./use-translate.b8dd01c6.js";import{u as g,w as T}from"./with-install.b43d27ad.js";import{T as b}from"./index.a883b1ab.js";import{I as C}from"./index.a6ba9341.js";import{C as _}from"./index.ded3887f.js";import{a as k,R as v}from"./index.74320ed2.js";import{B as h}from"./index.2a879481.js";import{z as f,e as a,C as V,r as E,o as S,c as w,w as y,A as u}from"./vue-libs.311a0de3.js";import{T as p}from"./function-call.497f808f.js";import"./use-route.fbe6f823.js";import"./useChildren.9c836bf0.js";import"./index.886fe652.js";import"./Checker.2c4e4d12.js";import"./useParent.c4a91987.js";import"./constant.80c6de18.js";import"./index.a1845386.js";import"./mount-component.c1f7730b.js";import"./use-expose.a6a25a51.js";import"./index.3f3c7397.js";import"./interceptor.14c08b72.js";import"./use-touch.41b8a2c4.js";import"./index.e4a9f28d.js";import"./utils.39620306.js";import"./index.2702a97e.js";import"./use-lazy-render.a1d3dbed.js";import"./on-popup-reopen.179515e2.js";import"./index.40018584.js";const[B,s,I]=x("contact-list"),A={list:Array,addText:String,modelValue:g,defaultTagText:String};var D=f({name:B,props:A,emits:["add","edit","select","update:modelValue"],setup(o,{emit:e}){const l=(t,i)=>{const c=()=>{e("update:modelValue",t.id),e("select",t,i)},n=()=>a(v,{class:s("radio"),name:t.id,iconSize:16},null),r=()=>a(C,{name:"edit",class:s("edit"),onClick:d=>{d.stopPropagation(),e("edit",t,i)}},null),m=()=>{const d=[`${t.name}\uFF0C${t.tel}`];return t.isDefault&&o.defaultTagText&&d.push(a(b,{type:"danger",round:!0,class:s("item-tag")},{default:()=>[o.defaultTagText]})),d};return a(_,{key:t.id,isLink:!0,center:!0,class:s("item"),valueClass:s("item-value"),onClick:c},{icon:r,value:m,"right-icon":n})};return()=>a("div",{class:s()},[a(k,{modelValue:o.modelValue,class:s("group")},{default:()=>[o.list&&o.list.map(l)]}),a("div",{class:[s("bottom"),"van-safe-area-bottom"]},[a(h,{round:!0,block:!0,type:"danger",class:s("add"),text:o.addText||I("addText"),onClick:()=>e("add")},null)])])}});const z=T(D);const ie=f({setup(o){const e=j({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),l=V("1"),t=()=>{p(e("add"))},i=n=>{p(e("edit")+n.id)},c=n=>{p(e("select")+n.id)};return(n,r)=>{const m=E("demo-block");return S(),w(m,{title:u(e)("basicUsage")},{default:y(()=>[a(u(z),{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=d=>l.value=d),list:u(e)("list"),"default-tag-text":u(e)("defaultTagText"),onAdd:t,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{ie as default};
