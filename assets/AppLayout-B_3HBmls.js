import{B as W,k as O,l as X,j as N,o as c,w as x,c as u,a as y,m as h,h as d,T as Y,n as G,r as g,F as _,i as n,p as C,t as b,q as H,v as J,x as Q,y as T,z as ee,s as te,f as ne,A as oe,C as re,D as ie,E as A,W as se,d as ae,G as le,H as de,I as ce,J as ue,e as M,g as fe,K as pe,L as me,M as F,u as s,N as $,O as he,P as be,Q as ve}from"./index-D4N0z2qK.js";import{s as we}from"./index-BQqtrNat.js";var ye=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`,ke={mask:function(t){var r=t.position,a=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:r==="left"?"flex-start":r==="right"?"flex-end":"center",alignItems:r==="top"?"flex-start":r==="bottom"?"flex-end":"center",pointerEvents:a?"auto":"none"}},root:{pointerEvents:"auto"}},ge={mask:function(t){var r=t.instance,a=t.props,f=["left","right","top","bottom"],o=f.find(function(w){return w===a.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal,"p-drawer-open":r.containerVisible,"p-drawer-full":r.fullScreen},o?"p-drawer-".concat(o):""]},root:function(t){var r=t.instance;return["p-drawer p-component",{"p-drawer-full":r.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},xe=W.extend({name:"drawer",style:ye,classes:ge,inlineStyles:ke}),Ce={name:"BaseDrawer",extends:te,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:xe,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function R(e,t,r){return(t=Le(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e){var t=Se(e,"string");return L(t)=="symbol"?t:t+""}function Se(e,t){if(L(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(L(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z={name:"Drawer",extends:Ce,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&A.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&A.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&se(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&A.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(f){return f&&f.querySelector("[autofocus]")},r=this.$slots.header&&t(this.headerContainer);r||(r=this.$slots.default&&t(this.container),r||(r=this.$slots.footer&&t(this.footerContainer),r||(r=this.closeButton))),r&&ie(r)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&re()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&oe()},onKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(r){t.isOutsideClicked(r)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ne(R(R(R({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:ee},components:{Button:T,Portal:Q,TimesIcon:J}},Be=["data-p"],De=["role","aria-modal","data-p"];function Ee(e,t,r,a,f,o){var w=O("Button"),S=O("Portal"),B=X("focustrap");return c(),N(S,null,{default:x(function(){return[f.containerVisible?(c(),u("div",h({key:0,ref:o.maskRef,onMousedown:t[0]||(t[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm("mask")),[d(Y,h({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?G((c(),u("div",h({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:e.modal?"dialog":"complementary","aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi("root")),[e.$slots.container?g(e.$slots,"container",{key:0,closeCallback:o.hide}):(c(),u(_,{key:1},[n("div",h({ref:o.headerContainerRef,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header",{class:C(e.cx("title"))},function(){return[e.header?(c(),u("div",h({key:0,class:e.cx("title")},e.ptm("title")),b(e.header),17)):y("",!0)]}),e.showCloseIcon?g(e.$slots,"closebutton",{key:0,closeCallback:o.hide},function(){return[d(w,h({ref:o.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:x(function(I){return[g(e.$slots,"closeicon",{},function(){return[(c(),N(H(e.closeIcon?"span":"TimesIcon"),h({class:[e.closeIcon,I.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):y("",!0)],16),n("div",h({ref:o.contentRef,class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16),e.$slots.footer?(c(),u("div",h({key:0,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):y("",!0)],64))],16,De)),[[B]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Be)):y("",!0)]}),_:3})}Z.render=Ee;const $e={class:"min-h-screen flex"},Ie={class:"hidden lg:flex flex-col w-64 shrink-0 fixed inset-y-0 left-0 bg-surface-800 z-10"},Ke={class:"flex-1 overflow-y-auto py-3 px-2"},Ae=["onClick"],Re={class:"text-sm"},Oe={key:0,class:"ml-auto bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1"},_e={class:"border-t border-surface-700 p-3"},ze={class:"flex items-center gap-2 px-2 py-2 mb-1"},Pe={class:"text-surface-200 text-sm font-medium truncate"},je={class:"flex items-center gap-1 px-2 pb-1"},Ve={class:"flex-1 lg:ml-64 flex flex-col min-h-screen"},Ne={class:"lg:hidden sticky top-0 z-20 bg-surface-800 flex items-center justify-between px-4 h-14 border-b border-surface-700"},Me={class:"flex items-center gap-3"},Fe={class:"flex items-center gap-1"},Te={class:"flex-1 p-4 lg:p-6 bg-surface-50 overflow-y-auto"},Ze={class:"flex items-center gap-3 py-3 mb-2 border-b border-surface-200"},Ue={class:"font-medium text-surface-700 text-sm"},qe={class:"text-surface-400 text-xs"},We={class:"flex flex-col gap-0.5"},Xe=["onClick"],Ye={class:"text-sm"},Ge={key:0,class:"ml-auto bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1"},et=ae({__name:"AppLayout",setup(e){const t=ve(),r=be(),{t:a,locale:f}=le(),{loggedUser:o,logOut:w}=de(),{isDark:S,toggle:B}=he(),I=[{label:()=>a("nav.overview"),icon:"pi pi-home",route:"/home/overview"},{label:()=>a("nav.loans"),icon:"pi pi-address-book",route:"/home/loans",badge:()=>ue(o.id).length},{label:()=>a("nav.books"),icon:"pi pi-book",route:"/home/books"},{label:()=>a("nav.notifications"),icon:"pi pi-bell",route:"/home/notifications"},{label:()=>a("nav.account"),icon:"pi pi-user",route:"/home/account"},{label:()=>a("nav.admin"),icon:"pi pi-cog",route:"/home/admin",role:"admin"}],z=ce(()=>I.filter(m=>!m.role||m.role===(o==null?void 0:o.role)));function P(m){return r.path===m||r.path.startsWith(m+"/")}const D=M(!1);function j(m){t.push(m),D.value=!1}const E=M(void 0);return fe(async()=>{var k;const i=(k=pe().entities.find(p=>p.user===o.id))==null?void 0:k.id;if(i)try{E.value=me.getServices().files.getFileUrl(i)}catch{}}),(m,i)=>{var V;const k=we,p=T,U=O("router-view"),q=Z;return c(),u("div",$e,[n("aside",Ie,[i[8]||(i[8]=n("div",{class:"flex items-center gap-3 px-5 py-5 border-b border-surface-700"},[n("i",{class:"pi pi-book text-primary-400 text-2xl"}),n("span",{class:"text-surface-0 font-bold text-xl tracking-wide"},"Kniho-hlod")],-1)),n("nav",Ke,[(c(!0),u(_,null,F(z.value,l=>(c(),u("button",{key:l.route,onClick:K=>j(l.route),class:C(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left transition-colors relative",P(l.route)?"bg-primary-500/20 text-primary-300 font-semibold":"text-surface-400 hover:bg-surface-700 hover:text-surface-0"])},[n("i",{class:C([l.icon,"text-base w-5 text-center shrink-0"])},null,2),n("span",Re,b(l.label()),1),l.badge&&l.badge()>0?(c(),u("span",Oe,b(l.badge()),1)):y("",!0)],10,Ae))),128))]),n("div",_e,[n("div",ze,[d(k,{image:E.value,icon:"pi pi-user",shape:"circle",size:"small",class:"shrink-0"},null,8,["image"]),n("span",Pe,b((V=s(o))==null?void 0:V.username),1)]),n("div",je,[d(p,{label:"CS",text:s(f)!=="cs",size:"small",onClick:i[0]||(i[0]=l=>s($)("cs"))},null,8,["text"]),d(p,{label:"EN",text:s(f)!=="en",size:"small",onClick:i[1]||(i[1]=l=>s($)("en"))},null,8,["text"]),d(p,{icon:s(S)?"pi pi-sun":"pi pi-moon",text:"",size:"small",onClick:s(B),class:"ml-auto","aria-label":s(a)("topbar.toggleDark")},null,8,["icon","onClick","aria-label"])]),n("button",{onClick:i[2]||(i[2]=(...l)=>s(w)&&s(w)(...l)),class:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-surface-400 hover:bg-surface-700 hover:text-surface-0 transition-colors text-sm"},[i[7]||(i[7]=n("i",{class:"pi pi-sign-out w-5 text-center"},null,-1)),n("span",null,b(s(a)("nav.logout")),1)])])]),n("div",Ve,[n("header",Ne,[n("div",Me,[d(p,{icon:"pi pi-bars",text:"",severity:"secondary",onClick:i[3]||(i[3]=l=>D.value=!0),class:"!text-surface-200","aria-label":"Open menu"}),i[9]||(i[9]=n("div",{class:"flex items-center gap-2"},[n("i",{class:"pi pi-book text-primary-400"}),n("span",{class:"text-surface-0 font-bold"},"Kniho-hlod")],-1))]),n("div",Fe,[d(p,{label:"CS",text:s(f)!=="cs",size:"small",onClick:i[4]||(i[4]=l=>s($)("cs"))},null,8,["text"]),d(p,{label:"EN",text:s(f)!=="en",size:"small",onClick:i[5]||(i[5]=l=>s($)("en"))},null,8,["text"]),d(p,{icon:s(S)?"pi pi-sun":"pi pi-moon",text:"",size:"small",onClick:s(B),"aria-label":s(a)("topbar.toggleDark")},null,8,["icon","onClick","aria-label"]),d(k,{image:E.value,icon:"pi pi-user",shape:"circle",size:"small"},null,8,["image"])])]),n("main",Te,[d(U)])]),d(q,{visible:D.value,"onUpdate:visible":i[6]||(i[6]=l=>D.value=l),modal:!0,position:"left",class:"!w-72"},{header:x(()=>[...i[10]||(i[10]=[n("div",{class:"flex items-center gap-2"},[n("i",{class:"pi pi-book text-primary-500"}),n("span",{class:"font-bold text-lg"},"Kniho-hlod")],-1)])]),footer:x(()=>[d(p,{label:s(a)("nav.logout"),icon:"pi pi-sign-out",severity:"secondary",text:"",fluid:"",onClick:s(w)},null,8,["label","onClick"])]),default:x(()=>{var l,K;return[n("div",Ze,[d(k,{image:E.value,icon:"pi pi-user",shape:"circle",class:"shrink-0"},null,8,["image"]),n("div",null,[n("p",Ue,b((l=s(o))==null?void 0:l.username),1),n("p",qe,b((K=s(o))==null?void 0:K.email),1)])]),n("nav",We,[(c(!0),u(_,null,F(z.value,v=>(c(),u("button",{key:v.route,onClick:He=>j(v.route),class:C(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",P(v.route)?"bg-primary-50 text-primary-700 font-semibold":"text-surface-600 hover:bg-surface-100"])},[n("i",{class:C([v.icon,"text-base w-5 text-center shrink-0"])},null,2),n("span",Ye,b(v.label()),1),v.badge&&v.badge()>0?(c(),u("span",Ge,b(v.badge()),1)):y("",!0)],10,Xe))),128))])]}),_:1},8,["visible"])])}}});export{et as default};
