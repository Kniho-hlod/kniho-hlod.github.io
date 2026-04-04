import{B as q,k as R,l as W,o as c,j as N,w as x,c as u,m as p,h as d,T as X,n as Y,r as g,F as _,i as n,p as C,t as m,b as y,q as G,v as H,x as J,y as T,z as Q,s as ee,f as te,A as ne,C as oe,D as re,E as I,W as ie,d as se,G as ae,H as le,I as de,e as ce,J as M,u as i,K as E,L as ue,M as fe,N as pe,O as me,P as he}from"./index-BVATxIOz.js";import{u as be,s as ve}from"./use-avatar-url-C6_GQmRK.js";var we=`
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
`,ye={mask:function(t){var r=t.position,a=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:r==="left"?"flex-start":r==="right"?"flex-end":"center",alignItems:r==="top"?"flex-start":r==="bottom"?"flex-end":"center",pointerEvents:a?"auto":"none"}},root:{pointerEvents:"auto"}},ke={mask:function(t){var r=t.instance,a=t.props,f=["left","right","top","bottom"],o=f.find(function(w){return w===a.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":a.modal,"p-drawer-open":r.containerVisible,"p-drawer-full":r.fullScreen},o?"p-drawer-".concat(o):""]},root:function(t){var r=t.instance;return["p-drawer p-component",{"p-drawer-full":r.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ge=q.extend({name:"drawer",style:we,classes:ke,inlineStyles:ye}),xe={name:"BaseDrawer",extends:ee,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:ge,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function O(e,t,r){return(t=Ce(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ce(e){var t=Le(e,"string");return L(t)=="symbol"?t:t+""}function Le(e,t){if(L(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(L(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z={name:"Drawer",extends:xe,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&I.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&I.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ie(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&I.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(f){return f&&f.querySelector("[autofocus]")},r=this.$slots.header&&t(this.headerContainer);r||(r=this.$slots.default&&t(this.container),r||(r=this.$slots.footer&&t(this.footerContainer),r||(r=this.closeButton))),r&&re(r)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&oe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ne()},onKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(r){t.isOutsideClicked(r)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return te(O(O(O({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:Q},components:{Button:T,Portal:J,TimesIcon:H}},Be=["data-p"],Se=["role","aria-modal","data-p"];function De(e,t,r,a,f,o){var w=R("Button"),B=R("Portal"),S=W("focustrap");return c(),N(B,null,{default:x(function(){return[f.containerVisible?(c(),u("div",p({key:0,ref:o.maskRef,onMousedown:t[0]||(t[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm("mask")),[d(X,p({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?Y((c(),u("div",p({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:e.modal?"dialog":"complementary","aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi("root")),[e.$slots.container?g(e.$slots,"container",{key:0,closeCallback:o.hide}):(c(),u(_,{key:1},[n("div",p({ref:o.headerContainerRef,class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header",{class:C(e.cx("title"))},function(){return[e.header?(c(),u("div",p({key:0,class:e.cx("title")},e.ptm("title")),m(e.header),17)):y("",!0)]}),e.showCloseIcon?g(e.$slots,"closebutton",{key:0,closeCallback:o.hide},function(){return[d(w,p({ref:o.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:x(function($){return[g(e.$slots,"closeicon",{},function(){return[(c(),N(G(e.closeIcon?"span":"TimesIcon"),p({class:[e.closeIcon,$.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):y("",!0)],16),n("div",p({ref:o.contentRef,class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16),e.$slots.footer?(c(),u("div",p({key:0,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):y("",!0)],64))],16,Se)),[[S]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Be)):y("",!0)]}),_:3})}Z.render=De;const Ee={class:"min-h-screen flex"},$e={class:"hidden lg:flex flex-col w-64 shrink-0 fixed inset-y-0 left-0 bg-surface-800 z-10"},Ke={class:"flex-1 overflow-y-auto py-3 px-2"},Ae=["onClick"],Ie={class:"text-sm"},Oe={key:0,class:"ml-auto bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1"},Re={class:"border-t border-surface-700 p-3"},_e={class:"flex items-center gap-2 px-2 py-2 mb-1"},ze={class:"text-surface-200 text-sm font-medium truncate"},Pe={class:"flex items-center gap-1 px-2 pb-1"},je={class:"flex-1 lg:ml-64 flex flex-col min-h-screen"},Ve={class:"lg:hidden sticky top-0 z-20 bg-surface-800 flex items-center justify-between px-4 h-14 border-b border-surface-700"},Ne={class:"flex items-center gap-3"},Me={class:"flex items-center gap-1"},Te={class:"flex-1 p-4 lg:p-6 bg-surface-50 overflow-y-auto"},Ze={class:"flex items-center gap-3 py-3 mb-2 border-b border-surface-200"},Fe={class:"font-medium text-surface-700 text-sm"},Ue={class:"text-surface-400 text-xs"},qe={class:"flex flex-col gap-0.5"},We=["onClick"],Xe={class:"text-sm"},Ye={key:0,class:"ml-auto bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1"},Qe=se({__name:"AppLayout",setup(e){const t=he(),r=me(),{t:a,locale:f}=ae(),{loggedUser:o,logOut:w}=le(),{isDark:B,toggle:S}=ue(),$=[{label:()=>a("nav.overview"),icon:"pi pi-home",route:"/home/overview"},{label:()=>a("nav.loans"),icon:"pi pi-address-book",route:"/home/loans",badge:()=>fe().length},{label:()=>a("nav.books"),icon:"pi pi-book",route:"/home/books"},{label:()=>a("nav.notifications"),icon:"pi pi-bell",route:"/home/notifications",badge:()=>pe().length},{label:()=>a("nav.account"),icon:"pi pi-user",route:"/home/account"},{label:()=>a("nav.admin"),icon:"pi pi-cog",route:"/home/admin",role:"admin"}],z=de(()=>$.filter(h=>!h.role||h.role===(o==null?void 0:o.role)));function P(h){return r.path===h||r.path.startsWith(h+"/")}const D=ce(!1);function j(h){t.push(h),D.value=!1}const k=be(o==null?void 0:o.id);return(h,s)=>{var V;const K=ve,b=T,F=R("router-view"),U=Z;return c(),u("div",Ee,[n("aside",$e,[s[8]||(s[8]=n("div",{class:"flex items-center gap-3 px-5 py-5 border-b border-surface-700"},[n("i",{class:"pi pi-book text-primary-400 text-2xl"}),n("span",{class:"text-surface-0 font-bold text-xl tracking-wide"},"Kniho-hlod")],-1)),n("nav",Ke,[(c(!0),u(_,null,M(z.value,l=>(c(),u("button",{key:l.route,onClick:A=>j(l.route),class:C(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left transition-colors relative",P(l.route)?"bg-primary-500/20 text-primary-300 font-semibold":"text-surface-400 hover:bg-surface-700 hover:text-surface-0"])},[n("i",{class:C([l.icon,"text-base w-5 text-center shrink-0"])},null,2),n("span",Ie,m(l.label()),1),l.badge&&l.badge()>0?(c(),u("span",Oe,m(l.badge()),1)):y("",!0)],10,Ae))),128))]),n("div",Re,[n("div",_e,[d(K,{image:i(k)||void 0,icon:i(k)?void 0:"pi pi-user",shape:"circle",size:"small",class:"shrink-0"},null,8,["image","icon"]),n("span",ze,m((V=i(o))==null?void 0:V.username),1)]),n("div",Pe,[d(b,{label:"CS",text:i(f)!=="cs",size:"small",onClick:s[0]||(s[0]=l=>i(E)("cs"))},null,8,["text"]),d(b,{label:"EN",text:i(f)!=="en",size:"small",onClick:s[1]||(s[1]=l=>i(E)("en"))},null,8,["text"]),d(b,{icon:i(B)?"pi pi-sun":"pi pi-moon",text:"",size:"small",onClick:i(S),class:"ml-auto","aria-label":i(a)("topbar.toggleDark")},null,8,["icon","onClick","aria-label"])]),n("button",{onClick:s[2]||(s[2]=(...l)=>i(w)&&i(w)(...l)),class:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-surface-400 hover:bg-surface-700 hover:text-surface-0 transition-colors text-sm"},[s[7]||(s[7]=n("i",{class:"pi pi-sign-out w-5 text-center"},null,-1)),n("span",null,m(i(a)("nav.logout")),1)])])]),n("div",je,[n("header",Ve,[n("div",Ne,[d(b,{icon:"pi pi-bars",text:"",severity:"secondary",onClick:s[3]||(s[3]=l=>D.value=!0),class:"!text-surface-200","aria-label":"Open menu"}),s[9]||(s[9]=n("div",{class:"flex items-center gap-2"},[n("i",{class:"pi pi-book text-primary-400"}),n("span",{class:"text-surface-0 font-bold"},"Kniho-hlod")],-1))]),n("div",Me,[d(b,{label:"CS",text:i(f)!=="cs",size:"small",onClick:s[4]||(s[4]=l=>i(E)("cs"))},null,8,["text"]),d(b,{label:"EN",text:i(f)!=="en",size:"small",onClick:s[5]||(s[5]=l=>i(E)("en"))},null,8,["text"]),d(b,{icon:i(B)?"pi pi-sun":"pi pi-moon",text:"",size:"small",onClick:i(S),"aria-label":i(a)("topbar.toggleDark")},null,8,["icon","onClick","aria-label"]),d(K,{image:i(k)||void 0,icon:i(k)?void 0:"pi pi-user",shape:"circle",size:"small"},null,8,["image","icon"])])]),n("main",Te,[d(F)])]),d(U,{visible:D.value,"onUpdate:visible":s[6]||(s[6]=l=>D.value=l),modal:!0,position:"left",class:"!w-72"},{header:x(()=>[...s[10]||(s[10]=[n("div",{class:"flex items-center gap-2"},[n("i",{class:"pi pi-book text-primary-500"}),n("span",{class:"font-bold text-lg"},"Kniho-hlod")],-1)])]),footer:x(()=>[d(b,{label:i(a)("nav.logout"),icon:"pi pi-sign-out",severity:"secondary",text:"",fluid:"",onClick:i(w)},null,8,["label","onClick"])]),default:x(()=>{var l,A;return[n("div",Ze,[d(K,{image:i(k)||void 0,icon:i(k)?void 0:"pi pi-user",shape:"circle",class:"shrink-0"},null,8,["image","icon"]),n("div",null,[n("p",Fe,m((l=i(o))==null?void 0:l.username),1),n("p",Ue,m((A=i(o))==null?void 0:A.email),1)])]),n("nav",qe,[(c(!0),u(_,null,M(z.value,v=>(c(),u("button",{key:v.route,onClick:Ge=>j(v.route),class:C(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",P(v.route)?"bg-primary-50 text-primary-700 font-semibold":"text-surface-600 hover:bg-surface-100"])},[n("i",{class:C([v.icon,"text-base w-5 text-center shrink-0"])},null,2),n("span",Xe,m(v.label()),1),v.badge&&v.badge()>0?(c(),u("span",Ye,m(v.badge()),1)):y("",!0)],10,We))),128))])]}),_:1},8,["visible"])])}}});export{Qe as default};
