import{c as ee,d as q,e as te,f as ne,s as oe,b as ae}from"./use-preferred-dialog-DBctHVJ5.js";import{B as I,s as D,m as p,o as u,j as b,w as f,n as Y,q as _,i as a,r as P,a8 as ce,b as C,T as ie,p as S,a3 as re,f as Z,D as se,a9 as R,aa as de,l as le,k as H,c as k,F as ue,J as pe,h as d,t as l,d as F,G as B,H as K,ab as he,ac as ge,ad as G,e as $,u as i,a as fe,R as j,y as z,a0 as J}from"./index-DgYNnJYx.js";import{s as ve}from"./index-CloqVpuP.js";import{u as me}from"./use-form-dialog-AWKMuJOo.js";import{s as be}from"./index-C3Nqr4OV.js";import{u as we,s as ye}from"./use-avatar-url-DhLbyUAD.js";import"./index-DYR3LtE3.js";var _e={root:"p-accordioncontent",content:"p-accordioncontent-content"},Ae=I.extend({name:"accordioncontent",classes:_e}),Pe={name:"BaseAccordionContent",extends:D,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ae,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},U={name:"AccordionContent",extends:Pe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return p(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ke(t,e,n,c,r,o){return t.asChild?P(t.$slots,"default",{key:1,class:S(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(u(),b(ie,p({key:0,name:"p-toggleable-content"},t.ptm("transition",o.ptParams)),{default:f(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?Y((u(),b(_(t.as),p({key:0,class:t.cx("root")},o.attrs),{default:f(function(){return[a("div",p({class:t.cx("content")},t.ptm("content",o.ptParams)),[P(t.$slots,"default")],16)]}),_:3},16,["class"])),[[ce,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):C("",!0)]}),_:3},16))}U.render=ke;var $e={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},xe=I.extend({name:"accordionheader",classes:$e}),Te={name:"BaseAccordionHeader",extends:D,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},L={name:"AccordionHeader",extends:Te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDownKey:function(e){var n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e==null?void 0:e.closest('[data-pc-name="accordionpanel"]')},findHeader:function(e){return de(e,'[data-pc-name="accordionheader"]')},findNextPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.nextElementSibling;return c?R(c,"data-p-disabled")?this.findNextPanel(c):this.findHeader(c):null},findPrevPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.previousElementSibling;return c?R(c,"data-p-disabled")?this.findPrevPanel(c):this.findHeader(c):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,n){se(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return p(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return Z({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:q,ChevronDownIcon:ee},directives:{ripple:re}};function Ce(t,e,n,c,r,o){var m=le("ripple");return t.asChild?P(t.$slots,"default",{key:1,class:S(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):Y((u(),b(_(t.as),p({key:0,"data-p":o.dataP,class:t.cx("root"),onClick:o.onClick},o.attrs),{default:f(function(){return[P(t.$slots,"default",{active:o.$pcAccordionPanel.active}),P(t.$slots,"toggleicon",{active:o.$pcAccordionPanel.active,class:S(t.cx("toggleicon"))},function(){return[o.$pcAccordionPanel.active?(u(),b(_(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),p({key:0,class:[o.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"])):(u(),b(_(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),p({key:1,class:[o.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[m]])}L.render=Ce;var Se={root:function(e){var n=e.instance,c=e.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":c.disabled}]}},Ie=I.extend({name:"accordionpanel",classes:Se}),Fe={name:"BaseAccordionPanel",extends:D,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ie,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},O={name:"AccordionPanel",extends:Fe,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return p(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Be(t,e,n,c,r,o){return t.asChild?P(t.$slots,"default",{key:1,class:S(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs}):(u(),b(_(t.as),p({key:0,class:t.cx("root")},o.attrs),{default:f(function(){return[P(t.$slots,"default")]}),_:3},16,["class"]))}O.render=Be;var De=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,Ee={root:"p-accordion p-component"},Ve=I.extend({name:"accordion",style:De,classes:Ee}),Ne={name:"BaseAccordion",extends:D,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Ve,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},Q={name:"Accordion",extends:Ne,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},methods:{isItemActive:function(e){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(e):this.d_value===e},updateValue:function(e){var n,c=this.isItemActive(e);this.multiple?c?this.d_value=this.d_value.filter(function(r){return r!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=c?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(c?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getHeaderPT:function(e,n){var c=this;return{root:p({onClick:function(o){return c.onTabClick(o,n)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",n)),toggleicon:p(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",n))}},getContentPT:function(e,n){return{root:p(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",n)),transition:this.getTabPT(e,"transition",n),content:this.getTabPT(e,"content",n)}},getTabPT:function(e,n,c){var r=this.tabs.length,o={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:c,count:r,first:c===0,last:c===r-1,active:this.isItemActive("".concat(c))}};return p(this.ptm("accordiontab.".concat(n),o),this.ptmo(this.getTabProp(e,"pt"),n,o))},onTabClick:function(e,n){this.$emit("tab-click",{originalEvent:e,index:n})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,c){return e.isAccordionTab(c)?n.push(c):c.children&&c.children instanceof Array&&c.children.forEach(function(r){e.isAccordionTab(r)&&n.push(r)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:O,AccordionHeader:L,AccordionContent:U,ChevronUpIcon:q,ChevronRightIcon:te}};function He(t,e,n,c,r,o){var m=H("AccordionHeader"),g=H("AccordionContent"),v=H("AccordionPanel");return u(),k("div",p({class:t.cx("root")},t.ptmi("root")),[o.hasAccordionTab?(u(!0),k(ue,{key:0},pe(o.tabs,function(s,h){return u(),b(v,{key:o.getKey(s,h),value:"".concat(h),pt:{root:o.getTabPT(s,"root",h)},disabled:o.getTabProp(s,"disabled")},{default:f(function(){return[d(m,{class:S(o.getTabProp(s,"headerClass")),pt:o.getHeaderPT(s,h)},{toggleicon:f(function(A){return[A.active?(u(),b(_(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),p({key:0,class:[t.collapseIcon,A.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(s,"headericon",h)),null,16,["class"])):(u(),b(_(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),p({key:1,class:[t.expandIcon,A.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(s,"headericon",h)),null,16,["class"]))]}),default:f(function(){return[s.children&&s.children.headericon?(u(),b(_(s.children.headericon),{key:0,isTabActive:o.isItemActive("".concat(h)),active:o.isItemActive("".concat(h)),index:h},null,8,["isTabActive","active","index"])):C("",!0),s.props&&s.props.header?(u(),k("span",p({key:1,ref_for:!0},o.getTabPT(s,"headertitle",h)),l(s.props.header),17)):C("",!0),s.children&&s.children.header?(u(),b(_(s.children.header),{key:2})):C("",!0)]}),_:2},1032,["class","pt"]),d(g,{pt:o.getContentPT(s,h)},{default:f(function(){return[(u(),b(_(s)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):P(t.$slots,"default",{key:1})],16)}Q.render=He;var Ke=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,je={root:{position:"relative"}},ze={root:function(e){var n=e.instance,c=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Ue=I.extend({name:"toggleswitch",style:Ke,classes:ze,inlineStyles:je}),Le={name:"BaseToggleSwitch",extends:ne,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ue,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},W={name:"ToggleSwitch",extends:Le,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var n=this.checked?this.falseValue:this.trueValue;this.writeValue(n,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,c;this.$emit("blur",e),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return Z({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Oe=["data-p-checked","data-p-disabled","data-p"],Me=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],Re=["data-p"],qe=["data-p"];function Ye(t,e,n,c,r,o){return u(),k("div",p({class:t.cx("root"),style:t.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled,"data-p":o.dataP}),[a("input",p({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":o.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Me),a("div",p({class:t.cx("slider")},o.getPTOptions("slider"),{"data-p":o.dataP}),[a("div",p({class:t.cx("handle")},o.getPTOptions("handle"),{"data-p":o.dataP}),[P(t.$slots,"handle",{checked:o.checked})],16,qe)],16,Re)],16,Oe)}W.render=Ye;const Ze={class:"grid gap-6"},Ge={class:"p-4 bg-surface-50 rounded-xl"},Je={class:"text-surface-700 font-medium text-sm mb-2"},Qe={class:"flex items-center gap-2 flex-wrap"},We={for:"avatarInput",class:"px-3 py-1.5 text-sm border border-surface-200 rounded-lg cursor-pointer text-surface-600 hover:bg-surface-0 transition-colors"},Xe={key:0,class:"text-surface-400 text-xs"},et={class:"grid gap-4"},tt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},nt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},ot={class:"block text-surface-700 font-medium mb-1.5 text-sm"},at={class:"flex justify-end"},ct=F({__name:"AccountInformation",setup(t){const{t:e}=B(),{loggedUser:n}=K(),c=he(),r=ge(),{showSaveSuccess:o,showSaveError:m}=G(),g=$(null),v=$(null);function s(T){const w=T.target;w.files&&w.files[0]&&(g.value=w.files[0],v.value=URL.createObjectURL(g.value))}async function h(){if(!g.value)return;const T=r.entities.find(V=>V.user===(n==null?void 0:n.id));T&&await r.deleteEntity(T.id);const w={name:g.value.name,user:n==null?void 0:n.id},x=await r.saveEntity(w);if(!x)throw new Error("Failed to create file record");await J.getServices().files.upload(x.id,g.value),g.value=null,v.value=null,await r.fetchEntities()}const A=$((n==null?void 0:n.username)??""),y=$((n==null?void 0:n.email)??""),E=$(!1);async function X(){if(n!=null&&n.id){E.value=!0;try{await c.saveEntity({...n,id:n.id,username:A.value,email:y.value}),g.value&&await h(),o(e("common.save"),e("account.tabInfo"))}catch{m(e("common.save"),e("account.tabInfo"))}finally{E.value=!1}}}return(T,w)=>{var M;const x=oe,V=z;return u(),k("div",Ze,[a("div",Ge,[a("p",Je,l(i(e)("account.avatar")),1),a("div",Qe,[a("input",{id:"avatarInput",type:"file",accept:"image/*",class:"hidden",onChange:s},null,32),a("label",We,[w[2]||(w[2]=a("i",{class:"pi pi-image mr-1.5"},null,-1)),fe(" "+l(i(e)("account.selectPhoto")),1)]),g.value?(u(),k("span",Xe,l(g.value.name),1)):C("",!0)])]),a("div",et,[a("div",null,[a("label",tt,l(i(e)("account.username")),1),d(x,{modelValue:A.value,"onUpdate:modelValue":w[0]||(w[0]=N=>A.value=N),fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",nt,l(i(e)("account.email")),1),d(x,{modelValue:y.value,"onUpdate:modelValue":w[1]||(w[1]=N=>y.value=N),type:"email",fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",ot,l(i(e)("account.registeredAt")),1),d(x,{value:i(j)((M=i(n))==null?void 0:M.createdAt)||"—",disabled:"",fluid:""},null,8,["value"])])]),a("div",at,[d(V,{label:i(e)("common.saveChanges"),icon:"pi pi-check",loading:E.value,onClick:X},null,8,["label","loading"])])])}}}),it={class:"grid gap-5"},rt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},st={class:"text-surface-700 font-medium text-sm mb-3"},dt={class:"grid gap-3"},lt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},ut={class:"text-surface-700 text-sm font-medium"},pt={class:"text-surface-400 text-xs"},ht={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},gt={class:"text-surface-700 text-sm font-medium"},ft={class:"text-surface-400 text-xs"},vt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},mt={class:"text-surface-700 text-sm font-medium"},bt={class:"text-surface-400 text-xs"},wt={class:"flex justify-end"},yt=F({__name:"AccountPreferences",setup(t){const{t:e}=B(),{showSaveSuccess:n}=G(),c=$(localStorage.getItem("timezone")??"Europe/Prague"),r=$({news:!0,loanExpiry:!0,security:!0}),o=[{label:"Praha (UTC+1)",value:"Europe/Prague"},{label:"Londýn (UTC+0)",value:"Europe/London"},{label:"New York (UTC-5)",value:"America/New_York"}];function m(){localStorage.setItem("timezone",c.value),n(e("common.save"),e("account.savePreferences"))}return(g,v)=>{const s=ae,h=W,A=z;return u(),k("div",it,[a("div",null,[a("label",rt,l(i(e)("account.timezone")),1),d(s,{modelValue:c.value,"onUpdate:modelValue":v[0]||(v[0]=y=>c.value=y),options:o,"option-label":"label","option-value":"value",fluid:"",disabled:""},null,8,["modelValue"])]),a("div",null,[a("p",st,l(i(e)("account.notifications")),1),a("div",dt,[a("label",lt,[a("div",null,[a("p",ut,l(i(e)("account.notifNews")),1),a("p",pt,l(i(e)("account.notifNewsDesc")),1)]),d(h,{modelValue:r.value.news,"onUpdate:modelValue":v[1]||(v[1]=y=>r.value.news=y),disabled:""},null,8,["modelValue"])]),a("label",ht,[a("div",null,[a("p",gt,l(i(e)("account.notifLoanExpiry")),1),a("p",ft,l(i(e)("account.notifLoanExpiryDesc")),1)]),d(h,{modelValue:r.value.loanExpiry,"onUpdate:modelValue":v[2]||(v[2]=y=>r.value.loanExpiry=y),disabled:""},null,8,["modelValue"])]),a("label",vt,[a("div",null,[a("p",mt,l(i(e)("account.notifSecurity")),1),a("p",bt,l(i(e)("account.notifSecurityDesc")),1)]),d(h,{modelValue:r.value.security,"onUpdate:modelValue":v[3]||(v[3]=y=>r.value.security=y),disabled:""},null,8,["modelValue"])])])]),a("div",wt,[d(A,{label:i(e)("account.savePreferences"),icon:"pi pi-check",disabled:"",onClick:m},null,8,["label"])])])}}}),_t={fields:[{name:"currentPassword",label:"Aktuální heslo",type:"password",required:!0,placeholder:"Zadejte aktuální heslo",toggleMask:!0},{name:"newPassword",label:"Nové heslo",type:"password",required:!0,placeholder:"Minimálně 8 znaků",toggleMask:!0,validators:[t=>typeof t=="string"&&t.length<8?"Heslo musí mít alespoň 8 znaků":null]},{name:"confirmPassword",label:"Potvrdit heslo",type:"password",required:!0,placeholder:"Zopakujte nové heslo",toggleMask:!0,validators:[(t,e)=>t!==e.newPassword?"Hesla se neshodují":null]}],submitLabel:"Uložit heslo"},At={class:"grid gap-5"},Pt={class:"p-4 bg-surface-50 rounded-xl"},kt={class:"flex items-center justify-between"},$t={class:"font-medium text-surface-700 text-sm"},xt={class:"text-surface-400 text-xs"},Tt={class:"p-4 bg-surface-50 rounded-xl flex items-center justify-between"},Ct={class:"font-medium text-surface-700 text-sm"},St={class:"text-surface-400 text-xs"},It={class:"flex items-center gap-3"},Ft=F({__name:"AccountSecurity",setup(t){const{t:e}=B(),{loggedUser:n}=K(),{openFormDialog:c}=me();function r(){c({definition:_t,modelValue:{currentPassword:"",newPassword:"",confirmPassword:""},mode:"create",header:e("account.changePassword"),onSave:async o=>{await J.getServices().auth.changePassword({currentPassword:o.currentPassword,newPassword:o.newPassword})}})}return(o,m)=>{var s;const g=z,v=ve;return u(),k("div",At,[a("div",Pt,[a("div",kt,[a("div",null,[a("p",$t,l(i(e)("account.password")),1),a("p",xt,l(i(e)("account.passwordLastChanged",{date:i(j)((s=i(n))==null?void 0:s.updatedAt)||"—"})),1)]),d(g,{label:i(e)("account.changePassword"),icon:"pi pi-key",size:"small",severity:"primary",onClick:r},null,8,["label"])])]),a("div",Tt,[a("div",null,[a("p",Ct,l(i(e)("account.twoFactor"))+" - Unavailable",1),a("p",St,l(i(e)("account.twoFactorDesc")),1)]),a("div",It,[d(v,{value:i(e)("account.inactive"),severity:"secondary"},null,8,["value"]),d(g,{label:i(e)("account.activate"),icon:"pi pi-lock",size:"small",severity:"primary",disabled:""},null,8,["label"])])])])}}}),Bt={class:"flex items-center gap-4"},Dt={class:"text-surface-800 font-bold text-lg"},Et={class:"text-surface-500 text-sm"},Vt={class:"text-surface-400 text-xs mt-1"},Nt=F({__name:"UserCard",setup(t){const{t:e}=B(),{loggedUser:n}=K(),c=we(n==null?void 0:n.id);return(r,o)=>{const m=ye,g=be;return u(),b(g,null,{content:f(()=>{var v,s,h;return[a("div",Bt,[d(m,{image:i(c),shape:"circle",size:"xlarge",class:"shrink-0"},null,8,["image"]),a("div",null,[a("p",Dt,l((v=i(n))==null?void 0:v.username),1),a("p",Et,l((s=i(n))==null?void 0:s.email),1),a("p",Vt,l(i(e)("account.registeredAt"))+": "+l(i(j)((h=i(n))==null?void 0:h.createdAt)||"—"),1)])])]}),_:1})}}}),Ht={class:"grid gap-4"},Kt={class:"text-2xl font-bold text-surface-800"},jt={class:"text-surface-500 text-sm"},zt={class:"flex items-center gap-2"},Ut={class:"font-medium"},Lt={class:"flex items-center gap-2"},Ot={class:"font-medium"},Mt={class:"flex items-center gap-2"},Rt={class:"font-medium"},Xt=F({__name:"AccountAccordion",setup(t){const{t:e}=B();return(n,c)=>{const r=L,o=U,m=O,g=Q;return u(),k("div",Ht,[a("div",null,[a("h1",Kt,l(i(e)("account.title")),1),a("p",jt,l(i(e)("account.subtitle")),1)]),d(Nt),d(g,{value:["0"],multiple:""},{default:f(()=>[d(m,{value:"0"},{default:f(()=>[d(r,null,{default:f(()=>[a("div",zt,[c[0]||(c[0]=a("i",{class:"pi pi-user text-primary-500"},null,-1)),a("span",Ut,l(i(e)("account.tabInfo")),1)])]),_:1}),d(o,null,{default:f(()=>[d(ct)]),_:1})]),_:1}),d(m,{value:"1"},{default:f(()=>[d(r,null,{default:f(()=>[a("div",Lt,[c[1]||(c[1]=a("i",{class:"pi pi-shield text-primary-500"},null,-1)),a("span",Ot,l(i(e)("account.tabSecurity")),1)])]),_:1}),d(o,null,{default:f(()=>[d(Ft)]),_:1})]),_:1}),d(m,{value:"2"},{default:f(()=>[d(r,null,{default:f(()=>[a("div",Mt,[c[2]||(c[2]=a("i",{class:"pi pi-cog text-primary-500"},null,-1)),a("span",Rt,l(i(e)("account.tabPreferences"))+" - Unavailable",1)])]),_:1}),d(o,null,{default:f(()=>[d(yt)]),_:1})]),_:1})]),_:1})])}}});export{Xt as default};
