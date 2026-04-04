import{a as te,b as q,c as ne,d as oe,s as G,e as ae}from"./index-wLh694DJ.js";import{B as F,s as D,m as g,o as p,j as y,w as f,n as J,q as k,i as a,r as x,$ as ce,b as S,T as Z,p as I,a0 as ie,f as W,D as re,a1 as Y,a2 as se,l as de,k as H,c as P,F as le,J as ue,h as s,t as d,d as V,G as B,H as z,a3 as pe,a4 as he,a5 as j,e as _,u as i,a as ge,Q as U,y as L,Z as fe,a6 as ve}from"./index-DggfQBVk.js";import{s as me}from"./index-gVu7UbAz.js";import{s as be}from"./index-D7AwQa4s.js";import{u as we,s as ye}from"./use-avatar-url-B6sf1F2N.js";var _e={root:"p-accordioncontent",content:"p-accordioncontent-content"},Pe=F.extend({name:"accordioncontent",classes:_e}),Ae={name:"BaseAccordionContent",extends:D,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Pe,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},O={name:"AccordionContent",extends:Ae,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return g(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function $e(t,e,n,c,r,o){return t.asChild?x(t.$slots,"default",{key:1,class:I(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(p(),y(Z,g({key:0,name:"p-toggleable-content"},t.ptm("transition",o.ptParams)),{default:f(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?J((p(),y(k(t.as),g({key:0,class:t.cx("root")},o.attrs),{default:f(function(){return[a("div",g({class:t.cx("content")},t.ptm("content",o.ptParams)),[x(t.$slots,"default")],16)]}),_:3},16,["class"])),[[ce,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):S("",!0)]}),_:3},16))}O.render=$e;var ke={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},xe=F.extend({name:"accordionheader",classes:ke}),Te={name:"BaseAccordionHeader",extends:D,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},R={name:"AccordionHeader",extends:Te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDownKey:function(e){var n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e==null?void 0:e.closest('[data-pc-name="accordionpanel"]')},findHeader:function(e){return se(e,'[data-pc-name="accordionheader"]')},findNextPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.nextElementSibling;return c?Y(c,"data-p-disabled")?this.findNextPanel(c):this.findHeader(c):null},findPrevPanel:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=n?e:e.previousElementSibling;return c?Y(c,"data-p-disabled")?this.findPrevPanel(c):this.findHeader(c):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,n){re(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return g(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return W({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:q,ChevronDownIcon:te},directives:{ripple:ie}};function Ce(t,e,n,c,r,o){var v=de("ripple");return t.asChild?x(t.$slots,"default",{key:1,class:I(t.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):J((p(),y(k(t.as),g({key:0,"data-p":o.dataP,class:t.cx("root"),onClick:o.onClick},o.attrs),{default:f(function(){return[x(t.$slots,"default",{active:o.$pcAccordionPanel.active}),x(t.$slots,"toggleicon",{active:o.$pcAccordionPanel.active,class:I(t.cx("toggleicon"))},function(){return[o.$pcAccordionPanel.active?(p(),y(k(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),g({key:0,class:[o.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"])):(p(),y(k(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),g({key:1,class:[o.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",o.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[v]])}R.render=Ce;var Se={root:function(e){var n=e.instance,c=e.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":c.disabled}]}},Ie=F.extend({name:"accordionpanel",classes:Se}),Fe={name:"BaseAccordionPanel",extends:D,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ie,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},M={name:"AccordionPanel",extends:Fe,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return g(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ve(t,e,n,c,r,o){return t.asChild?x(t.$slots,"default",{key:1,class:I(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs}):(p(),y(k(t.as),g({key:0,class:t.cx("root")},o.attrs),{default:f(function(){return[x(t.$slots,"default")]}),_:3},16,["class"]))}M.render=Ve;var Be=`
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
`,Ee={root:"p-accordion p-component"},De=F.extend({name:"accordion",style:Be,classes:Ee}),Ne={name:"BaseAccordion",extends:D,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:De,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},X={name:"Accordion",extends:Ne,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},methods:{isItemActive:function(e){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(e):this.d_value===e},updateValue:function(e){var n,c=this.isItemActive(e);this.multiple?c?this.d_value=this.d_value.filter(function(r){return r!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=c?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(c?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getHeaderPT:function(e,n){var c=this;return{root:g({onClick:function(o){return c.onTabClick(o,n)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",n)),toggleicon:g(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",n))}},getContentPT:function(e,n){return{root:g(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",n)),transition:this.getTabPT(e,"transition",n),content:this.getTabPT(e,"content",n)}},getTabPT:function(e,n,c){var r=this.tabs.length,o={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:c,count:r,first:c===0,last:c===r-1,active:this.isItemActive("".concat(c))}};return g(this.ptm("accordiontab.".concat(n),o),this.ptmo(this.getTabProp(e,"pt"),n,o))},onTabClick:function(e,n){this.$emit("tab-click",{originalEvent:e,index:n})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,c){return e.isAccordionTab(c)?n.push(c):c.children&&c.children instanceof Array&&c.children.forEach(function(r){e.isAccordionTab(r)&&n.push(r)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:M,AccordionHeader:R,AccordionContent:O,ChevronUpIcon:q,ChevronRightIcon:ne}};function Ke(t,e,n,c,r,o){var v=H("AccordionHeader"),u=H("AccordionContent"),m=H("AccordionPanel");return p(),P("div",g({class:t.cx("root")},t.ptmi("root")),[o.hasAccordionTab?(p(!0),P(le,{key:0},ue(o.tabs,function(l,h){return p(),y(m,{key:o.getKey(l,h),value:"".concat(h),pt:{root:o.getTabPT(l,"root",h)},disabled:o.getTabProp(l,"disabled")},{default:f(function(){return[s(v,{class:I(o.getTabProp(l,"headerClass")),pt:o.getHeaderPT(l,h)},{toggleicon:f(function(A){return[A.active?(p(),y(k(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),g({key:0,class:[t.collapseIcon,A.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(l,"headericon",h)),null,16,["class"])):(p(),y(k(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),g({key:1,class:[t.expandIcon,A.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(l,"headericon",h)),null,16,["class"]))]}),default:f(function(){return[l.children&&l.children.headericon?(p(),y(k(l.children.headericon),{key:0,isTabActive:o.isItemActive("".concat(h)),active:o.isItemActive("".concat(h)),index:h},null,8,["isTabActive","active","index"])):S("",!0),l.props&&l.props.header?(p(),P("span",g({key:1,ref_for:!0},o.getTabPT(l,"headertitle",h)),d(l.props.header),17)):S("",!0),l.children&&l.children.header?(p(),y(k(l.children.header),{key:2})):S("",!0)]}),_:2},1032,["class","pt"]),s(u,{pt:o.getContentPT(l,h)},{default:f(function(){return[(p(),y(k(l)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(t.$slots,"default",{key:1})],16)}X.render=Ke;var He=`
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
`,ze={root:{position:"relative"}},je={root:function(e){var n=e.instance,c=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":n.checked,"p-disabled":c.disabled,"p-invalid":n.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Ue=F.extend({name:"toggleswitch",style:He,classes:je,inlineStyles:ze}),Le={name:"BaseToggleSwitch",extends:oe,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ue,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},ee={name:"ToggleSwitch",extends:Le,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var n=this.checked?this.falseValue:this.trueValue;this.writeValue(n,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,c;this.$emit("blur",e),(n=(c=this.formField).onBlur)===null||n===void 0||n.call(c,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return W({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Oe=["data-p-checked","data-p-disabled","data-p"],Re=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],Me=["data-p"],Qe=["data-p"];function Ye(t,e,n,c,r,o){return p(),P("div",g({class:t.cx("root"),style:t.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled,"data-p":o.dataP}),[a("input",g({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":o.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:e[2]||(e[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Re),a("div",g({class:t.cx("slider")},o.getPTOptions("slider"),{"data-p":o.dataP}),[a("div",g({class:t.cx("handle")},o.getPTOptions("handle"),{"data-p":o.dataP}),[x(t.$slots,"handle",{checked:o.checked})],16,Qe)],16,Me)],16,Oe)}ee.render=Ye;const qe={class:"grid gap-6"},Ge={class:"p-4 bg-surface-50 rounded-xl"},Je={class:"text-surface-700 font-medium text-sm mb-2"},Ze={class:"flex items-center gap-2 flex-wrap"},We={for:"avatarInput",class:"px-3 py-1.5 text-sm border border-surface-200 rounded-lg cursor-pointer text-surface-600 hover:bg-surface-0 transition-colors"},Xe={key:0,class:"text-surface-400 text-xs"},et={class:"grid gap-4"},tt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},nt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},ot={class:"block text-surface-700 font-medium mb-1.5 text-sm"},at={class:"flex justify-end"},ct=V({__name:"AccountInformation",setup(t){const{t:e}=B(),{loggedUser:n}=z(),c=pe(),r=he(),{showSaveSuccess:o,showSaveError:v}=j(),u=_(null),m=_(null);function l(C){const w=C.target;w.files&&w.files[0]&&(u.value=w.files[0],m.value=URL.createObjectURL(u.value))}async function h(){if(!u.value)return;const C=r.entities.find(N=>N.user===(n==null?void 0:n.id));C&&await r.deleteEntity(C.id);const w={name:u.value.name,user:n==null?void 0:n.id},$=await r.saveEntity(w);if(!$)throw new Error("Failed to create file record");await fe.getServices().files.upload($.id,u.value),u.value=null,m.value=null,await r.fetchEntities()}const A=_((n==null?void 0:n.username)??""),b=_((n==null?void 0:n.email)??""),T=_(!1);async function E(){if(n!=null&&n.id){T.value=!0;try{await c.saveEntity({...n,username:A.value,email:b.value}),u.value&&await h(),o(e("common.save"),e("account.tabInfo"))}catch{v(e("common.save"),e("account.tabInfo"))}finally{T.value=!1}}}return(C,w)=>{var Q;const $=G,N=L;return p(),P("div",qe,[a("div",Ge,[a("p",Je,d(i(e)("account.avatar")),1),a("div",Ze,[a("input",{type:"file",accept:"image/*",onChange:l,class:"hidden",id:"avatarInput"},null,32),a("label",We,[w[2]||(w[2]=a("i",{class:"pi pi-image mr-1.5"},null,-1)),ge(" "+d(i(e)("account.selectPhoto")),1)]),u.value?(p(),P("span",Xe,d(u.value.name),1)):S("",!0)])]),a("div",et,[a("div",null,[a("label",tt,d(i(e)("account.username")),1),s($,{modelValue:A.value,"onUpdate:modelValue":w[0]||(w[0]=K=>A.value=K),fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",nt,d(i(e)("account.email")),1),s($,{modelValue:b.value,"onUpdate:modelValue":w[1]||(w[1]=K=>b.value=K),type:"email",fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",ot,d(i(e)("account.registeredAt")),1),s($,{value:i(U)((Q=i(n))==null?void 0:Q.createdAt)||"—",disabled:"",fluid:""},null,8,["value"])])]),a("div",at,[s(N,{label:i(e)("common.saveChanges"),icon:"pi pi-check",loading:T.value,onClick:E},null,8,["label","loading"])])])}}}),it={class:"grid gap-5"},rt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},st={class:"text-surface-700 font-medium text-sm mb-3"},dt={class:"grid gap-3"},lt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},ut={class:"text-surface-700 text-sm font-medium"},pt={class:"text-surface-400 text-xs"},ht={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},gt={class:"text-surface-700 text-sm font-medium"},ft={class:"text-surface-400 text-xs"},vt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},mt={class:"text-surface-700 text-sm font-medium"},bt={class:"text-surface-400 text-xs"},wt={class:"flex justify-end"},yt=V({__name:"AccountPreferences",setup(t){const{t:e}=B(),{showSaveSuccess:n}=j(),c=_(localStorage.getItem("timezone")??"Europe/Prague"),r=_({news:!0,loanExpiry:!0,security:!0}),o=[{label:"Praha (UTC+1)",value:"Europe/Prague"},{label:"Londýn (UTC+0)",value:"Europe/London"},{label:"New York (UTC-5)",value:"America/New_York"}];function v(){localStorage.setItem("timezone",c.value),n(e("common.save"),e("account.savePreferences"))}return(u,m)=>{const l=ae,h=ee,A=L;return p(),P("div",it,[a("div",null,[a("label",rt,d(i(e)("account.timezone")),1),s(l,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=b=>c.value=b),options:o,"option-label":"label","option-value":"value",fluid:""},null,8,["modelValue"])]),a("div",null,[a("p",st,d(i(e)("account.notifications")),1),a("div",dt,[a("label",lt,[a("div",null,[a("p",ut,d(i(e)("account.notifNews")),1),a("p",pt,d(i(e)("account.notifNewsDesc")),1)]),s(h,{modelValue:r.value.news,"onUpdate:modelValue":m[1]||(m[1]=b=>r.value.news=b)},null,8,["modelValue"])]),a("label",ht,[a("div",null,[a("p",gt,d(i(e)("account.notifLoanExpiry")),1),a("p",ft,d(i(e)("account.notifLoanExpiryDesc")),1)]),s(h,{modelValue:r.value.loanExpiry,"onUpdate:modelValue":m[2]||(m[2]=b=>r.value.loanExpiry=b)},null,8,["modelValue"])]),a("label",vt,[a("div",null,[a("p",mt,d(i(e)("account.notifSecurity")),1),a("p",bt,d(i(e)("account.notifSecurityDesc")),1)]),s(h,{modelValue:r.value.security,"onUpdate:modelValue":m[3]||(m[3]=b=>r.value.security=b)},null,8,["modelValue"])])])]),a("div",wt,[s(A,{label:i(e)("account.savePreferences"),icon:"pi pi-check",onClick:v},null,8,["label"])])])}}}),_t={class:"grid gap-5"},Pt={class:"p-4 bg-surface-50 rounded-xl"},At={class:"flex items-center justify-between mb-2"},$t={class:"font-medium text-surface-700 text-sm"},kt={class:"text-surface-400 text-xs"},xt={key:0,class:"mt-4 grid gap-3 border-t border-surface-200 pt-4"},Tt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},Ct={class:"block text-surface-700 font-medium mb-1.5 text-sm"},St={key:0,class:"text-red-500 text-xs"},It={class:"flex gap-2 justify-end"},Ft={class:"p-4 bg-surface-50 rounded-xl flex items-center justify-between"},Vt={class:"font-medium text-surface-700 text-sm"},Bt={class:"text-surface-400 text-xs"},Et={class:"flex items-center gap-3"},Dt=V({__name:"AccountSecurity",setup(t){const{t:e}=B(),{loggedUser:n}=z(),{showInfo:c}=j(),r=_(!1),o=_(""),v=_(""),u=_("");function m(){r.value=!0,o.value="",v.value="",u.value=""}function l(){r.value=!1,u.value=""}function h(){if(u.value="",o.value.length<6){u.value=e("account.newPasswordPlaceholder");return}if(o.value!==v.value){u.value=e("account.confirmPasswordPlaceholder");return}c(e("common.save"),e("account.changePassword")),r.value=!1}return(A,b)=>{var w;const T=L,E=G,C=me;return p(),P("div",_t,[a("div",Pt,[a("div",At,[a("div",null,[a("p",$t,d(i(e)("account.password")),1),a("p",kt,d(i(e)("account.passwordLastChanged",{date:i(U)((w=i(n))==null?void 0:w.updatedAt)||"—"})),1)]),s(T,{label:i(e)("account.changePassword"),icon:"pi pi-key",size:"small",outlined:"",severity:"secondary",onClick:m},null,8,["label"])]),s(Z,{name:"slide-down"},{default:f(()=>[r.value?(p(),P("div",xt,[a("div",null,[a("label",Tt,d(i(e)("account.newPassword")),1),s(E,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=$=>o.value=$),type:"password",placeholder:i(e)("account.newPasswordPlaceholder"),fluid:""},null,8,["modelValue","placeholder"])]),a("div",null,[a("label",Ct,d(i(e)("account.confirmPassword")),1),s(E,{modelValue:v.value,"onUpdate:modelValue":b[1]||(b[1]=$=>v.value=$),type:"password",placeholder:i(e)("account.confirmPasswordPlaceholder"),fluid:""},null,8,["modelValue","placeholder"])]),u.value?(p(),P("p",St,d(u.value),1)):S("",!0),a("div",It,[s(T,{label:i(e)("common.cancel"),size:"small",outlined:"",severity:"secondary",onClick:l},null,8,["label"]),s(T,{label:i(e)("account.savePassword"),icon:"pi pi-check",size:"small",onClick:h},null,8,["label"])])])):S("",!0)]),_:1})]),a("div",Ft,[a("div",null,[a("p",Vt,d(i(e)("account.twoFactor")),1),a("p",Bt,d(i(e)("account.twoFactorDesc")),1)]),a("div",Et,[s(C,{value:i(e)("account.inactive"),severity:"secondary"},null,8,["value"]),s(T,{label:i(e)("account.activate"),icon:"pi pi-lock",size:"small",outlined:"",severity:"secondary",disabled:""},null,8,["label"])])])])}}}),Nt=ve(Dt,[["__scopeId","data-v-0eefc6cc"]]),Kt={class:"flex items-center gap-4"},Ht={class:"text-surface-800 font-bold text-lg"},zt={class:"text-surface-500 text-sm"},jt={class:"text-surface-400 text-xs mt-1"},Ut=V({__name:"UserCard",setup(t){const{t:e}=B(),{loggedUser:n}=z(),c=we(n==null?void 0:n.id);return(r,o)=>{const v=ye,u=be;return p(),y(u,null,{content:f(()=>{var m,l,h;return[a("div",Kt,[s(v,{image:i(c),shape:"circle",size:"xlarge",class:"shrink-0"},null,8,["image"]),a("div",null,[a("p",Ht,d((m=i(n))==null?void 0:m.username),1),a("p",zt,d((l=i(n))==null?void 0:l.email),1),a("p",jt,d(i(e)("account.registeredAt"))+": "+d(i(U)((h=i(n))==null?void 0:h.createdAt)||"—"),1)])])]}),_:1})}}}),Lt={class:"grid gap-4"},Ot={class:"text-2xl font-bold text-surface-800"},Rt={class:"text-surface-500 text-sm"},Mt={class:"flex items-center gap-2"},Qt={class:"font-medium"},Yt={class:"flex items-center gap-2"},qt={class:"font-medium"},Gt={class:"flex items-center gap-2"},Jt={class:"font-medium"},nn=V({__name:"AccountAccordion",setup(t){const{t:e}=B();return(n,c)=>{const r=R,o=O,v=M,u=X;return p(),P("div",Lt,[a("div",null,[a("h1",Ot,d(i(e)("account.title")),1),a("p",Rt,d(i(e)("account.subtitle")),1)]),s(Ut),s(u,{value:["0"],multiple:""},{default:f(()=>[s(v,{value:"0"},{default:f(()=>[s(r,null,{default:f(()=>[a("div",Mt,[c[0]||(c[0]=a("i",{class:"pi pi-user text-primary-500"},null,-1)),a("span",Qt,d(i(e)("account.tabInfo")),1)])]),_:1}),s(o,null,{default:f(()=>[s(ct)]),_:1})]),_:1}),s(v,{value:"1"},{default:f(()=>[s(r,null,{default:f(()=>[a("div",Yt,[c[1]||(c[1]=a("i",{class:"pi pi-shield text-primary-500"},null,-1)),a("span",qt,d(i(e)("account.tabSecurity")),1)])]),_:1}),s(o,null,{default:f(()=>[s(Nt)]),_:1})]),_:1}),s(v,{value:"2"},{default:f(()=>[s(r,null,{default:f(()=>[a("div",Gt,[c[2]||(c[2]=a("i",{class:"pi pi-cog text-primary-500"},null,-1)),a("span",Jt,d(i(e)("account.tabPreferences")),1)])]),_:1}),s(o,null,{default:f(()=>[s(yt)]),_:1})]),_:1})]),_:1})])}}});export{nn as default};
