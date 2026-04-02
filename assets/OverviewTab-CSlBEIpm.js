import{B as q,k as G,l as H,j as c,o as r,w as f,n as D,i as a,m as g,r as k,c as d,a as p,p as $,q as J,R as X,T as Z,v as Q,S as W,s as ee,f as se,d as z,t as i,U as B,G as R,b as K,h as ne,u as t,V as P,I as v,X as V,H as U,Y as oe,Z as te,J as T,_ as ae,F as I,M as L}from"./index-D4N0z2qK.js";import{s as F}from"./index-CXIvywfc.js";import{s as re}from"./index-BqP1yYm5.js";import{M as ie}from"./constants-X2jcnEdP.js";var le=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,ce={root:function(s){var n=s.props;return["p-message p-component p-message-"+n.severity,{"p-message-outlined":n.variant==="outlined","p-message-simple":n.variant==="simple","p-message-sm":n.size==="small","p-message-lg":n.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},de=q.extend({name:"message",style:le,classes:ce}),ue={name:"BaseMessage",extends:ee,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:de,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},h(e)}function C(e,s,n){return(s=me(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function me(e){var s=ge(e,"string");return h(s)=="symbol"?s:s+""}function ge(e,s){if(h(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,s);if(h(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var Y={name:"Message",extends:ue,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.life&&setTimeout(function(){s.visible=!1,s.$emit("life-end")},this.life)},methods:{close:function(s){this.visible=!1,this.$emit("close",s)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return se(C(C({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:W},components:{TimesIcon:Q}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},y(e)}function E(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter(function(b){return Object.getOwnPropertyDescriptor(e,b).enumerable})),n.push.apply(n,o)}return n}function M(e){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?E(Object(n),!0).forEach(function(o){pe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function pe(e,s,n){return(s=be(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function be(e){var s=fe(e,"string");return y(s)=="symbol"?s:s+""}function fe(e,s){if(y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,s);if(y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(e)}var ve=["data-p"],he=["data-p"],ye=["data-p"],we=["aria-label","data-p"],ke=["data-p"];function xe(e,s,n,o,b,l){var u=G("TimesIcon"),S=H("ripple");return r(),c(Z,g({name:"p-message",appear:""},e.ptmi("transition")),{default:f(function(){return[D(a("div",g({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":l.dataP},e.ptm("root")),[e.$slots.container?k(e.$slots,"container",{key:0,closeCallback:l.close}):(r(),d("div",g({key:1,class:e.cx("content"),"data-p":l.dataP},e.ptm("content")),[k(e.$slots,"icon",{class:$(e.cx("icon"))},function(){return[(r(),c(J(e.icon?"span":null),g({class:[e.cx("icon"),e.icon],"data-p":l.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(r(),d("div",g({key:0,class:e.cx("text"),"data-p":l.dataP},e.ptm("text")),[k(e.$slots,"default")],16,ye)):p("",!0),e.closable?D((r(),d("button",g({key:1,class:e.cx("closeButton"),"aria-label":l.closeAriaLabel,type:"button",onClick:s[0]||(s[0]=function(w){return l.close(w)}),"data-p":l.dataP},M(M({},e.closeButtonProps),e.ptm("closeButton"))),[k(e.$slots,"closeicon",{},function(){return[e.closeIcon?(r(),d("i",g({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":l.dataP},e.ptm("closeIcon")),null,16,ke)):(r(),c(u,g({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":l.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,we)),[[S]]):p("",!0)],16,he))],16,ve),[[X,b.visible]])]}),_:3},16)}Y.render=xe;const _e={class:"flex items-center justify-between"},ze={class:"text-surface-500 text-xs font-medium uppercase tracking-wide mb-1"},Se=z({__name:"StatCard",props:{label:{},value:{},color:{},icon:{}},setup(e){return(s,n)=>{const o=F;return r(),c(o,{class:"overflow-hidden"},{content:f(()=>[a("div",_e,[a("div",null,[a("p",ze,i(e.label),1),a("p",{class:"text-3xl font-bold",style:B({color:e.color})},i(e.value),5)]),a("span",{class:"w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0",style:B({backgroundColor:e.color})},[a("i",{class:$(e.icon)},null,2)],4)])]),_:1})}}}),Pe={class:"text-sm mb-1"},$e={class:"font-semibold"},Oe=z({__name:"OverdueCard",props:{loan:{}},setup(e){const{t:s}=R();function n(o){return Math.floor((Date.now()-new Date(o).getTime())/ie)}return(o,b)=>{var u;const l=re;return r(),d("div",Pe,[a("span",$e,i((u=e.loan.bookEntity)==null?void 0:u.title),1),K(" • "+i(e.loan.borrower)+" • "+i(t(P)(String(e.loan.returnDate)))+" ",1),ne(l,{value:t(s)("overview.overdueDays",{days:n(e.loan.returnDate)}),severity:"danger",class:"ml-1 !text-xs"},null,8,["value"])])}}}),je={class:"flex items-center gap-2 text-primary-600 font-semibold mb-3 text-sm"},De={class:"text-surface-800 font-bold"},Be={class:"text-surface-600 text-sm"},Te={class:"text-surface-400 text-xs mt-1"},A=z({__name:"InfoCard",props:{titleKey:{},icon:{},bookTitle:{},borrower:{},date:{},dateLabel:{}},setup(e){return(s,n)=>{const o=F;return r(),c(o,null,{content:f(()=>[a("div",je,[a("i",{class:$(e.icon)},null,2),K(" "+i(e.titleKey),1)]),a("p",De,i(e.bookTitle),1),a("p",Be,i(e.borrower),1),a("p",Te,i(e.dateLabel)+": "+i(e.date),1)]),_:1})}}}),{loggedUser:Ie}=U(),N=v(()=>V(Ie.id)),x=v(()=>oe()),_=v(()=>te()),Le={class:"grid gap-6"},Ce={class:"text-2xl font-bold text-surface-800 mb-1"},Ee={class:"text-surface-500 text-sm"},Me={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},Ae={class:"font-semibold mb-2"},Ne={key:1,class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Re={key:2,class:"bg-surface-0 rounded-xl p-6 text-center text-surface-400"},Ke={class:"font-medium"},qe=z({__name:"OverviewTab",setup(e){const{t:s}=R(),{loggedUser:n}=U(),o=v(()=>!!T(n.id).length),b=v(()=>[{label:s("overview.statBooks"),color:"var(--p-primary-500)",value:ae(n.id).length,icon:"pi pi-book"},{label:s("overview.statActiveLoans"),color:"var(--p-primary-400)",value:T(n.id).length,icon:"pi pi-address-book"},{label:s("overview.statOverdue"),color:"var(--p-red-500)",value:V(n.id).length,icon:"pi pi-exclamation-triangle"}]);return(l,u)=>{var w,O,j;const S=Y;return r(),d("div",Le,[a("div",null,[a("h2",Ce,i(t(s)("overview.welcome",{name:(w=t(n))==null?void 0:w.username})),1),a("p",Ee,i(t(s)("overview.subtitle")),1)]),a("div",Me,[(r(!0),d(I,null,L(b.value,m=>(r(),c(Se,{key:m.label,label:m.label,value:m.value,color:m.color,icon:m.icon},null,8,["label","value","color","icon"]))),128))]),t(N).length>0?(r(),c(S,{key:0,severity:"error",closable:!1},{messageicon:f(()=>[...u[0]||(u[0]=[a("i",{class:"pi pi-exclamation-triangle"},null,-1)])]),default:f(()=>[a("div",null,[a("p",Ae,i(t(s)("overview.overdueTitle")),1),(r(!0),d(I,null,L(t(N),m=>(r(),c(Oe,{key:m.id,loan:m},null,8,["loan"]))),128))])]),_:1})):p("",!0),o.value?(r(),d("div",Ne,[t(x)?(r(),c(A,{key:0,"title-key":t(s)("overview.lastBorrowed"),icon:"pi pi-book","book-title":((O=t(x).bookEntity)==null?void 0:O.title)??"",borrower:t(s)("overview.lentTo",{name:t(x).borrower}),date:t(P)(String(t(x).loanDate)),"date-label":t(s)("loans.loanDate")},null,8,["title-key","book-title","borrower","date","date-label"])):p("",!0),t(_)?(r(),c(A,{key:1,"title-key":t(s)("overview.earliestReturn"),icon:"pi pi-calendar-clock","book-title":((j=t(_).bookEntity)==null?void 0:j.title)??"",borrower:t(s)("overview.lentTo",{name:t(_).borrower}),date:t(P)(String(t(_).returnDate)),"date-label":t(s)("loans.returnDate")},null,8,["title-key","book-title","borrower","date","date-label"])):p("",!0)])):p("",!0),o.value?p("",!0):(r(),d("div",Re,[u[1]||(u[1]=a("i",{class:"pi pi-book text-4xl mb-3 block text-surface-200"},null,-1)),a("p",Ke,i(t(s)("overview.empty")),1)]))])}}});export{qe as default};
