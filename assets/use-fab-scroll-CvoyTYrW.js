import{a2 as j,o,c as p,i as w,m as u,B as K,s as b,a3 as x,a4 as ce,t as Y,l as R,n as O,j as d,q as C,k as f,a5 as q,w as G,p as P,F as T,J as F,a as ge,r as N,b as A,a6 as fe,f as me,H as be,e as _,I as Z,d as he,g as ve,a7 as ye}from"./index-r2XPmvsy.js";import{a as Pe,b as Q}from"./use-preferred-dialog-DzRpPQbk.js";var X={name:"AngleRightIcon",extends:j};function we(e){return Se(e)||ke(e)||Le(e)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,t){if(e){if(typeof e=="string")return z(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function ke(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Se(e){if(Array.isArray(e))return z(e)}function z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Te(e,t,n,r,i,a){return o(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),we(t[0]||(t[0]=[w("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1)])),16)}X.render=Te;var Ae=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function Ie(e,t,n){return(t=$e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e){var t=xe(e,"string");return I(t)=="symbol"?t:t+""}function xe(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Re={paginator:function(t){var n=t.instance,r=t.key;return["p-paginator p-component",Ie({"p-paginator-default":!n.hasBreakpoints()},"p-paginator-".concat(r),n.hasBreakpoints())]},content:"p-paginator-content",contentStart:"p-paginator-content-start",contentEnd:"p-paginator-content-end",first:function(t){var n=t.instance;return["p-paginator-first",{"p-disabled":n.$attrs.disabled}]},firstIcon:"p-paginator-first-icon",prev:function(t){var n=t.instance;return["p-paginator-prev",{"p-disabled":n.$attrs.disabled}]},prevIcon:"p-paginator-prev-icon",next:function(t){var n=t.instance;return["p-paginator-next",{"p-disabled":n.$attrs.disabled}]},nextIcon:"p-paginator-next-icon",last:function(t){var n=t.instance;return["p-paginator-last",{"p-disabled":n.$attrs.disabled}]},lastIcon:"p-paginator-last-icon",pages:"p-paginator-pages",page:function(t){var n=t.props,r=t.pageLink;return["p-paginator-page",{"p-paginator-page-selected":r-1===n.page}]},current:"p-paginator-current",pcRowPerPageDropdown:"p-paginator-rpp-dropdown",pcJumpToPageDropdown:"p-paginator-jtp-dropdown",pcJumpToPageInputText:"p-paginator-jtp-input"},Oe=K.extend({name:"paginator",style:Ae,classes:Re}),ee={name:"AngleDoubleLeftIcon",extends:j};function Ne(e){return Fe(e)||Ee(e)||De(e)||je()}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){if(e){if(typeof e=="string")return J(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function Ee(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fe(e){if(Array.isArray(e))return J(e)}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function _e(e,t,n,r,i,a){return o(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ne(t[0]||(t[0]=[w("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z",fill:"currentColor"},null,-1)])),16)}ee.render=_e;var te={name:"AngleDoubleRightIcon",extends:j};function ze(e){return Ue(e)||Me(e)||Be(e)||Je()}function Je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,t){if(e){if(typeof e=="string")return B(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function Me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ue(e){if(Array.isArray(e))return B(e)}function B(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ve(e,t,n,r,i,a){return o(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),ze(t[0]||(t[0]=[w("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z",fill:"currentColor"},null,-1)])),16)}te.render=Ve;var ne={name:"AngleLeftIcon",extends:j};function Ze(e){return Ye(e)||Ke(e)||We(e)||He()}function He(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(e,t){if(e){if(typeof e=="string")return M(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function Ke(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ye(e){if(Array.isArray(e))return M(e)}function M(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function qe(e,t,n,r,i,a){return o(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ze(t[0]||(t[0]=[w("path",{d:"M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z",fill:"currentColor"},null,-1)])),16)}ne.render=qe;var Ge={name:"BasePaginator",extends:b,props:{totalRecords:{type:Number,default:0},rows:{type:Number,default:0},first:{type:Number,default:0},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},template:{type:[Object,String],default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},currentPageReportTemplate:{type:null,default:"({currentPage} of {totalPages})"},alwaysShow:{type:Boolean,default:!0}},style:Oe,provide:function(){return{$pcPaginator:this,$parentInstance:this}}},ae={name:"CurrentPageReport",hostName:"Paginator",extends:b,props:{pageCount:{type:Number,default:0},currentPage:{type:Number,default:0},page:{type:Number,default:0},first:{type:Number,default:0},rows:{type:Number,default:0},totalRecords:{type:Number,default:0},template:{type:String,default:"({currentPage} of {totalPages})"}},computed:{text:function(){var t=this.template.replace("{currentPage}",this.currentPage).replace("{totalPages}",this.pageCount).replace("{first}",this.pageCount>0?this.first+1:0).replace("{last}",Math.min(this.first+this.rows,this.totalRecords)).replace("{rows}",this.rows).replace("{totalRecords}",this.totalRecords);return t}}};function Qe(e,t,n,r,i,a){return o(),p("span",u({class:e.cx("current")},e.ptm("current")),Y(a.text),17)}ae.render=Qe;var re={name:"FirstPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleLeftIcon:ee},directives:{ripple:x}};function Xe(e,t,n,r,i,a){var l=R("ripple");return O((o(),p("button",u({class:e.cx("first"),type:"button"},a.getPTOptions("first"),{"data-pc-group-section":"pagebutton"}),[(o(),d(C(n.template||"AngleDoubleLeftIcon"),u({class:e.cx("firstIcon")},a.getPTOptions("firstIcon")),null,16,["class"]))],16)),[[l]])}re.render=Xe;var oe={name:"JumpToPageDropdown",hostName:"Paginator",extends:b,emits:["page-change"],props:{page:Number,pageCount:Number,disabled:Boolean,templates:null},methods:{onChange:function(t){this.$emit("page-change",t)}},computed:{pageOptions:function(){for(var t=[],n=0;n<this.pageCount;n++)t.push({label:String(n+1),value:n});return t}},components:{JTPSelect:Q}};function et(e,t,n,r,i,a){var l=f("JTPSelect");return o(),d(l,{modelValue:n.page,options:a.pageOptions,optionLabel:"label",optionValue:"value","onUpdate:modelValue":t[0]||(t[0]=function(s){return a.onChange(s)}),class:P(e.cx("pcJumpToPageDropdown")),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm("pcJumpToPageDropdown"),"data-pc-group-section":"pagedropdown"},q({_:2},[n.templates.jumptopagedropdownicon?{name:"dropdownicon",fn:G(function(s){return[(o(),d(C(n.templates.jumptopagedropdownicon),{class:P(s.class)},null,8,["class"]))]}),key:"0"}:void 0]),1032,["modelValue","options","class","disabled","unstyled","pt"])}oe.render=et;var ie={name:"JumpToPageInput",hostName:"Paginator",extends:b,inheritAttrs:!1,emits:["page-change"],props:{page:Number,pageCount:Number,disabled:Boolean},data:function(){return{d_page:this.page}},watch:{page:function(t){this.d_page=t}},methods:{onChange:function(t){t!==this.page&&(this.d_page=t,this.$emit("page-change",t-1))}},computed:{inputArialabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.jumpToPageInputLabel:void 0}},components:{JTPInput:Pe}};function tt(e,t,n,r,i,a){var l=f("JTPInput");return o(),d(l,{ref:"jtpInput",modelValue:i.d_page,class:P(e.cx("pcJumpToPageInputText")),"aria-label":a.inputArialabel,disabled:n.disabled,"onUpdate:modelValue":a.onChange,unstyled:e.unstyled,pt:e.ptm("pcJumpToPageInputText")},null,8,["modelValue","class","aria-label","disabled","onUpdate:modelValue","unstyled","pt"])}ie.render=tt;var le={name:"LastPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleDoubleRightIcon:te},directives:{ripple:x}};function nt(e,t,n,r,i,a){var l=R("ripple");return O((o(),p("button",u({class:e.cx("last"),type:"button"},a.getPTOptions("last"),{"data-pc-group-section":"pagebutton"}),[(o(),d(C(n.template||"AngleDoubleRightIcon"),u({class:e.cx("lastIcon")},a.getPTOptions("lastIcon")),null,16,["class"]))],16)),[[l]])}le.render=nt;var se={name:"NextPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleRightIcon:X},directives:{ripple:x}};function at(e,t,n,r,i,a){var l=R("ripple");return O((o(),p("button",u({class:e.cx("next"),type:"button"},a.getPTOptions("next"),{"data-pc-group-section":"pagebutton"}),[(o(),d(C(n.template||"AngleRightIcon"),u({class:e.cx("nextIcon")},a.getPTOptions("nextIcon")),null,16,["class"]))],16)),[[l]])}se.render=at;var pe={name:"PageLinks",hostName:"Paginator",extends:b,inheritAttrs:!1,emits:["click"],props:{value:Array,page:Number},methods:{getPTOptions:function(t,n){return this.ptm(n,{context:{active:t===this.page}})},onPageLinkClick:function(t,n){this.$emit("click",{originalEvent:t,value:n})},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},directives:{ripple:x}},rt=["aria-label","aria-current","onClick","data-p-active"];function ot(e,t,n,r,i,a){var l=R("ripple");return o(),p("span",u({class:e.cx("pages")},e.ptm("pages")),[(o(!0),p(T,null,F(n.value,function(s){return O((o(),p("button",u({key:s,class:e.cx("page",{pageLink:s}),type:"button","aria-label":a.ariaPageLabel(s),"aria-current":s-1===n.page?"page":void 0,onClick:function(m){return a.onPageLinkClick(m,s)}},{ref_for:!0},a.getPTOptions(s-1,"page"),{"data-p-active":s-1===n.page}),[ge(Y(s),1)],16,rt)),[[l]])}),128))],16)}pe.render=ot;var ue={name:"PrevPageLink",hostName:"Paginator",extends:b,props:{template:{type:Function,default:null}},methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.$attrs.disabled}})}},components:{AngleLeftIcon:ne},directives:{ripple:x}};function it(e,t,n,r,i,a){var l=R("ripple");return O((o(),p("button",u({class:e.cx("prev"),type:"button"},a.getPTOptions("prev"),{"data-pc-group-section":"pagebutton"}),[(o(),d(C(n.template||"AngleLeftIcon"),u({class:e.cx("prevIcon")},a.getPTOptions("prevIcon")),null,16,["class"]))],16)),[[l]])}ue.render=it;var de={name:"RowsPerPageDropdown",hostName:"Paginator",extends:b,emits:["rows-change"],props:{options:Array,rows:Number,disabled:Boolean,templates:null},methods:{onChange:function(t){this.$emit("rows-change",t)}},computed:{rowsOptions:function(){var t=[];if(this.options)for(var n=0;n<this.options.length;n++)t.push({label:String(this.options[n]),value:this.options[n]});return t}},components:{RPPSelect:Q}};function lt(e,t,n,r,i,a){var l=f("RPPSelect");return o(),d(l,{modelValue:n.rows,options:a.rowsOptions,optionLabel:"label",optionValue:"value","onUpdate:modelValue":t[0]||(t[0]=function(s){return a.onChange(s)}),class:P(e.cx("pcRowPerPageDropdown")),disabled:n.disabled,unstyled:e.unstyled,pt:e.ptm("pcRowPerPageDropdown"),"data-pc-group-section":"pagedropdown"},q({_:2},[n.templates.rowsperpagedropdownicon?{name:"dropdownicon",fn:G(function(s){return[(o(),d(C(n.templates.rowsperpagedropdownicon),{class:P(s.class)},null,8,["class"]))]}),key:"0"}:void 0]),1032,["modelValue","options","class","disabled","unstyled","pt"])}de.render=lt;function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function H(e,t){return dt(e)||ut(e,t)||pt(e,t)||st()}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(e,t){if(e){if(typeof e=="string")return W(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ut(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,s=[],g=!0,m=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;g=!1}else for(;!(g=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);g=!0);}catch(L){m=!0,i=L}finally{try{if(!g&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(m)throw i}}return s}}function dt(e){if(Array.isArray(e))return e}var ct={name:"Paginator",extends:Ge,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(t){this.d_first=t},rows:function(t){this.d_rows=t},totalRecords:function(t){this.page>0&&t&&this.d_first>=t&&this.changePage(this.pageCount-1)}},mounted:function(){this.createStyle()},methods:{changePage:function(t){var n=this.pageCount;if(t>=0&&t<n){this.d_first=this.d_rows*t;var r={page:t,first:this.d_first,rows:this.d_rows,pageCount:n};this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",r)}},changePageToFirst:function(t){this.isFirstPage||this.changePage(0),t.preventDefault()},changePageToPrev:function(t){this.changePage(this.page-1),t.preventDefault()},changePageLink:function(t){this.changePage(t.value-1),t.originalEvent.preventDefault()},changePageToNext:function(t){this.changePage(this.page+1),t.preventDefault()},changePageToLast:function(t){this.isLastPage||this.changePage(this.pageCount-1),t.preventDefault()},onRowChange:function(t){this.d_rows=t,this.changePage(this.page)},createStyle:function(){var t=this;if(this.hasBreakpoints()&&!this.isUnstyled){var n;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",ce(this.styleElement,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.body.appendChild(this.styleElement);var r="",i=Object.keys(this.template),a={};i.sort(function(y,D){return parseInt(y)-parseInt(D)}).forEach(function(y){a[y]=t.template[y]});for(var l=0,s=Object.entries(Object.entries(a));l<s.length;l++){var g=H(s[l],2),m=g[0],L=H(g[1],1),v=L[0],k=void 0,S=void 0;v!=="default"&&typeof Object.keys(a)[m-1]=="string"?S=Number(Object.keys(a)[m-1].slice(0,-2))+1+"px":S=Object.keys(a)[m-1],k=Object.entries(a)[m-1]?"and (min-width:".concat(S,")"):"",v==="default"?r+=`
                            @media screen `.concat(k,` {
                                .p-paginator[`).concat(this.$attrSelector,`],
                                    display: flex;
                                }
                            }
                        `):r+=`
.p-paginator-`.concat(v,` {
    display: none;
}
@media screen `).concat(k," and (max-width: ").concat(v,`) {
    .p-paginator-`).concat(v,` {
        display: flex;
    }

    .p-paginator-default{
        display: none;
    }
}
                    `)}this.styleElement.innerHTML=r}},hasBreakpoints:function(){return U(this.template)==="object"},getAriaLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[t]:void 0}},computed:{templateItems:function(){var t={};if(this.hasBreakpoints()){t=this.template,t.default||(t.default="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown");for(var n in t)t[n]=this.template[n].split(" ").map(function(r){return r.trim()});return t}return t.default=this.template.split(" ").map(function(r){return r.trim()}),t},page:function(){return Math.floor(this.d_first/this.d_rows)},pageCount:function(){return Math.ceil(this.totalRecords/this.d_rows)},isFirstPage:function(){return this.page===0},isLastPage:function(){return this.page===this.pageCount-1},calculatePageLinkBoundaries:function(){var t=this.pageCount,n=Math.min(this.pageLinkSize,t),r=Math.max(0,Math.ceil(this.page-n/2)),i=Math.min(t-1,r+n-1),a=this.pageLinkSize-(i-r+1);return r=Math.max(0,r-a),[r,i]},pageLinks:function(){for(var t=[],n=this.calculatePageLinkBoundaries,r=n[0],i=n[1],a=r;a<=i;a++)t.push(a+1);return t},currentState:function(){return{page:this.page,first:this.d_first,rows:this.d_rows}},empty:function(){return this.pageCount===0},currentPage:function(){return this.pageCount>0?this.page+1:0},last:function(){return Math.min(this.d_first+this.rows,this.totalRecords)}},components:{CurrentPageReport:ae,FirstPageLink:re,LastPageLink:le,NextPageLink:se,PageLinks:pe,PrevPageLink:ue,RowsPerPageDropdown:de,JumpToPageDropdown:oe,JumpToPageInput:ie}};function gt(e,t,n,r,i,a){var l=f("FirstPageLink"),s=f("PrevPageLink"),g=f("NextPageLink"),m=f("LastPageLink"),L=f("PageLinks"),v=f("CurrentPageReport"),k=f("RowsPerPageDropdown"),S=f("JumpToPageDropdown"),y=f("JumpToPageInput");return e.alwaysShow||a.pageLinks&&a.pageLinks.length>1?(o(),p("nav",fe(u({key:0},e.ptmi("paginatorContainer"))),[(o(!0),p(T,null,F(a.templateItems,function(D,V){return o(),p("div",u({key:V,ref_for:!0,ref:"paginator",class:e.cx("paginator",{key:V})},{ref_for:!0},e.ptm("root")),[e.$slots.container?N(e.$slots,"container",{key:0,first:i.d_first+1,last:a.last,rows:i.d_rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:e.totalRecords,firstPageCallback:a.changePageToFirst,lastPageCallback:a.changePageToLast,prevPageCallback:a.changePageToPrev,nextPageCallback:a.changePageToNext,rowChangeCallback:a.onRowChange,changePageCallback:a.changePage}):(o(),p(T,{key:1},[e.$slots.start?(o(),p("div",u({key:0,class:e.cx("contentStart")},{ref_for:!0},e.ptm("contentStart")),[N(e.$slots,"start",{state:a.currentState})],16)):A("",!0),w("div",u({class:e.cx("content")},{ref_for:!0},e.ptm("content")),[(o(!0),p(T,null,F(D,function(h){return o(),p(T,{key:h},[h==="FirstPageLink"?(o(),d(l,{key:0,"aria-label":a.getAriaLabel("firstPageLabel"),template:e.$slots.firsticon||e.$slots.firstpagelinkicon,onClick:t[0]||(t[0]=function(c){return a.changePageToFirst(c)}),disabled:a.isFirstPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="PrevPageLink"?(o(),d(s,{key:1,"aria-label":a.getAriaLabel("prevPageLabel"),template:e.$slots.previcon||e.$slots.prevpagelinkicon,onClick:t[1]||(t[1]=function(c){return a.changePageToPrev(c)}),disabled:a.isFirstPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="NextPageLink"?(o(),d(g,{key:2,"aria-label":a.getAriaLabel("nextPageLabel"),template:e.$slots.nexticon||e.$slots.nextpagelinkicon,onClick:t[2]||(t[2]=function(c){return a.changePageToNext(c)}),disabled:a.isLastPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="LastPageLink"?(o(),d(m,{key:3,"aria-label":a.getAriaLabel("lastPageLabel"),template:e.$slots.lasticon||e.$slots.lastpagelinkicon,onClick:t[3]||(t[3]=function(c){return a.changePageToLast(c)}),disabled:a.isLastPage||a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","template","disabled","unstyled","pt"])):h==="PageLinks"?(o(),d(L,{key:4,"aria-label":a.getAriaLabel("pageLabel"),value:a.pageLinks,page:a.page,onClick:t[4]||(t[4]=function(c){return a.changePageLink(c)}),unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","value","page","unstyled","pt"])):h==="CurrentPageReport"?(o(),d(v,{key:5,"aria-live":"polite",template:e.currentPageReportTemplate,currentPage:a.currentPage,page:a.page,pageCount:a.pageCount,first:i.d_first,rows:i.d_rows,totalRecords:e.totalRecords,unstyled:e.unstyled,pt:e.pt},null,8,["template","currentPage","page","pageCount","first","rows","totalRecords","unstyled","pt"])):h==="RowsPerPageDropdown"&&e.rowsPerPageOptions?(o(),d(k,{key:6,"aria-label":a.getAriaLabel("rowsPerPageLabel"),rows:i.d_rows,options:e.rowsPerPageOptions,onRowsChange:t[5]||(t[5]=function(c){return a.onRowChange(c)}),disabled:a.empty,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","rows","options","disabled","templates","unstyled","pt"])):h==="JumpToPageDropdown"?(o(),d(S,{key:7,"aria-label":a.getAriaLabel("jumpToPageDropdownLabel"),page:a.page,pageCount:a.pageCount,onPageChange:t[6]||(t[6]=function(c){return a.changePage(c)}),disabled:a.empty,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["aria-label","page","pageCount","disabled","templates","unstyled","pt"])):h==="JumpToPageInput"?(o(),d(y,{key:8,page:a.currentPage,onPageChange:t[7]||(t[7]=function(c){return a.changePage(c)}),disabled:a.empty,unstyled:e.unstyled,pt:e.pt},null,8,["page","disabled","unstyled","pt"])):A("",!0)],64)}),128))],16),e.$slots.end?(o(),p("div",u({key:1,class:e.cx("contentEnd")},{ref_for:!0},e.ptm("contentEnd")),[N(e.$slots,"end",{state:a.currentState})],16)):A("",!0)],64))],16)}),128))],16)):A("",!0)}ct.render=gt;var ft=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,mt={root:function(t){var n=t.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},bt={root:function(t){var n=t.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},ht=K.extend({name:"divider",style:ft,classes:bt,inlineStyles:mt}),vt={name:"BaseDivider",extends:b,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:ht,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(e)}function E(e,t,n){return(t=yt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yt(e){var t=Pt(e,"string");return $(t)=="symbol"?t:t+""}function Pt(e,t){if($(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var wt={name:"Divider",extends:vt,inheritAttrs:!1,computed:{dataP:function(){return me(E(E(E({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},Ct=["aria-orientation","data-p"],Lt=["data-p"];function kt(e,t,n,r,i,a){return o(),p("div",u({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout,"data-p":a.dataP},e.ptmi("root")),[e.$slots.default?(o(),p("div",u({key:0,class:e.cx("content"),"data-p":a.dataP},e.ptm("content")),[N(e.$slots,"default")],16,Lt)):A("",!0)],16,Ct)}wt.render=kt;const At={ADMIN:"admin",USER:"user"};function It(){const{loggedUser:e}=be();function t(n){const r=e==null?void 0:e.role;return r?n.includes(r):!1}return{isAllowed:t}}function $t(e,t=12){const n=_(0),r=_(t),i=Z(()=>e().slice(n.value,n.value+r.value)),a=Z(()=>e().length);function l(g){n.value=g.first,r.value=g.rows}function s(){n.value=0}return{paginated:i,total:a,first:n,pageSize:r,onPageChange:l,reset:s}}const xt=he({__name:"FabButton",props:{visible:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const n=t;return(r,i)=>(o(),p("button",{class:P(["lg:hidden fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-primary-500 shadow-lg flex items-center justify-center text-white transition-all duration-200",e.visible?"opacity-100 scale-100":"opacity-0 scale-90 pointer-events-none"]),"aria-label":"Add new",onClick:i[0]||(i[0]=a=>n("click"))},[...i[1]||(i[1]=[w("i",{class:"pi pi-plus text-xl","aria-hidden":"true"},null,-1)])],2))}});function Rt(){const e=_(!0);let t=0,n=null;function r(){const i=window.scrollY;i>t&&(e.value=!1),t=i,n&&clearTimeout(n),n=setTimeout(()=>{e.value=!0},150)}return ve(()=>{window.addEventListener("scroll",r,{passive:!0})}),ye(()=>{window.removeEventListener("scroll",r),n&&clearTimeout(n)}),{isVisible:e}}export{At as U,xt as _,$t as a,Rt as b,ct as c,wt as s,It as u};
