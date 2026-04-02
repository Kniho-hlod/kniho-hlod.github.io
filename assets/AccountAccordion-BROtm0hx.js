import{a as le,b as Z,c as de,d as ue,s as ee,e as pe}from"./index-DqL4TZ9h.js";import{B as E,s as K,m as f,j as _,r as x,o as p,w as v,n as te,a as $,q as P,i as a,R as he,T as ne,p as B,S as ge,f as oe,D as fe,a3 as X,a4 as ve,l as me,k as j,c as A,F as be,M as ye,h as r,t as l,d as U,G as D,H as O,a5 as we,K as ae,a6 as R,e as w,I as _e,g as ce,L,u as i,b as Ae,y as M,V as Y,a7 as Pe}from"./index-BFmmLpev.js";import{s as ie}from"./index-CEpigNWi.js";import{s as xe}from"./index-kdnLxJ5n.js";import{s as ke}from"./index-64tPxNTm.js";var $e={root:"p-accordioncontent",content:"p-accordioncontent-content"},Te=E.extend({name:"accordioncontent",classes:$e}),Ce={name:"BaseAccordionContent",extends:K,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Te,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},q={name:"AccordionContent",extends:Ce,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Se(t,e,o,c,s,n){return t.asChild?x(t.$slots,"default",{key:1,class:B(t.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs}):(p(),_(ne,f({key:0,name:"p-toggleable-content"},t.ptm("transition",n.ptParams)),{default:v(function(){return[!n.$pcAccordion.lazy||n.$pcAccordionPanel.active?te((p(),_(P(t.as),f({key:0,class:t.cx("root")},n.attrs),{default:v(function(){return[a("div",f({class:t.cx("content")},t.ptm("content",n.ptParams)),[x(t.$slots,"default")],16)]}),_:3},16,["class"])),[[he,n.$pcAccordion.lazy?!0:n.$pcAccordionPanel.active]]):$("",!0)]}),_:3},16))}q.render=Se;var Ie={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Fe=E.extend({name:"accordionheader",classes:Ie}),Ve={name:"BaseAccordionHeader",extends:K,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Fe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},G={name:"AccordionHeader",extends:Ve,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDownKey:function(e){var o=this.findNextPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var o=this.findPrevPanel(this.findPanel(e.currentTarget));o?this.changeFocusedPanel(e,o):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var o=this.findFirstPanel();this.changeFocusedPanel(e,o),e.preventDefault()},onEndKey:function(e){var o=this.findLastPanel();this.changeFocusedPanel(e,o),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e==null?void 0:e.closest('[data-pc-name="accordionpanel"]')},findHeader:function(e){return ve(e,'[data-pc-name="accordionheader"]')},findNextPanel:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=o?e:e.nextElementSibling;return c?X(c,"data-p-disabled")?this.findNextPanel(c):this.findHeader(c):null},findPrevPanel:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=o?e:e.previousElementSibling;return c?X(c,"data-p-disabled")?this.findPrevPanel(c):this.findHeader(c):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,o){fe(this.findHeader(o))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return oe({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:Z,ChevronDownIcon:le},directives:{ripple:ge}};function Be(t,e,o,c,s,n){var g=me("ripple");return t.asChild?x(t.$slots,"default",{key:1,class:B(t.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):te((p(),_(P(t.as),f({key:0,"data-p":n.dataP,class:t.cx("root"),onClick:n.onClick},n.attrs),{default:v(function(){return[x(t.$slots,"default",{active:n.$pcAccordionPanel.active}),x(t.$slots,"toggleicon",{active:n.$pcAccordionPanel.active,class:B(t.cx("toggleicon"))},function(){return[n.$pcAccordionPanel.active?(p(),_(P(n.$pcAccordion.$slots.collapseicon?n.$pcAccordion.$slots.collapseicon:n.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),f({key:0,class:[n.$pcAccordion.collapseIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",n.ptParams)),null,16,["class"])):(p(),_(P(n.$pcAccordion.$slots.expandicon?n.$pcAccordion.$slots.expandicon:n.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),f({key:1,class:[n.$pcAccordion.expandIcon,t.cx("toggleicon")],"aria-hidden":"true"},t.ptm("toggleicon",n.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[g]])}G.render=Be;var Ee={root:function(e){var o=e.instance,c=e.props;return["p-accordionpanel",{"p-accordionpanel-active":o.active,"p-disabled":c.disabled}]}},Ue=E.extend({name:"accordionpanel",classes:Ee}),De={name:"BaseAccordionPanel",extends:K,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ue,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},Q={name:"AccordionPanel",extends:De,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ke(t,e,o,c,s,n){return t.asChild?x(t.$slots,"default",{key:1,class:B(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(p(),_(P(t.as),f({key:0,class:t.cx("root")},n.attrs),{default:v(function(){return[x(t.$slots,"default")]}),_:3},16,["class"]))}Q.render=Ke;var Ne=`
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
`,ze={root:"p-accordion p-component"},He=E.extend({name:"accordion",style:Ne,classes:ze}),je={name:"BaseAccordion",extends:K,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:He,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},re={name:"Accordion",extends:je,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},methods:{isItemActive:function(e){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(e):this.d_value===e},updateValue:function(e){var o,c=this.isItemActive(e);this.multiple?c?this.d_value=this.d_value.filter(function(s){return s!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=c?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(c?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,o){return e.props?e.props[o]:void 0},getKey:function(e,o){return this.getTabProp(e,"header")||o},getHeaderPT:function(e,o){var c=this;return{root:f({onClick:function(n){return c.onTabClick(n,o)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",o)),toggleicon:f(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",o))}},getContentPT:function(e,o){return{root:f(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",o)),transition:this.getTabPT(e,"transition",o),content:this.getTabPT(e,"content",o)}},getTabPT:function(e,o,c){var s=this.tabs.length,n={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:c,count:s,first:c===0,last:c===s-1,active:this.isItemActive("".concat(c))}};return f(this.ptm("accordiontab.".concat(o),n),this.ptmo(this.getTabProp(e,"pt"),o,n))},onTabClick:function(e,o){this.$emit("tab-click",{originalEvent:e,index:o})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(o,c){return e.isAccordionTab(c)?o.push(c):c.children&&c.children instanceof Array&&c.children.forEach(function(s){e.isAccordionTab(s)&&o.push(s)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:Q,AccordionHeader:G,AccordionContent:q,ChevronUpIcon:Z,ChevronRightIcon:de}};function Le(t,e,o,c,s,n){var g=j("AccordionHeader"),u=j("AccordionContent"),m=j("AccordionPanel");return p(),A("div",f({class:t.cx("root")},t.ptmi("root")),[n.hasAccordionTab?(p(!0),A(be,{key:0},ye(n.tabs,function(d,h){return p(),_(m,{key:n.getKey(d,h),value:"".concat(h),pt:{root:n.getTabPT(d,"root",h)},disabled:n.getTabProp(d,"disabled")},{default:v(function(){return[r(g,{class:B(n.getTabProp(d,"headerClass")),pt:n.getHeaderPT(d,h)},{toggleicon:v(function(k){return[k.active?(p(),_(P(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),f({key:0,class:[t.collapseIcon,k.class],"aria-hidden":"true"},{ref_for:!0},n.getTabPT(d,"headericon",h)),null,16,["class"])):(p(),_(P(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronUpIcon"),f({key:1,class:[t.expandIcon,k.class],"aria-hidden":"true"},{ref_for:!0},n.getTabPT(d,"headericon",h)),null,16,["class"]))]}),default:v(function(){return[d.children&&d.children.headericon?(p(),_(P(d.children.headericon),{key:0,isTabActive:n.isItemActive("".concat(h)),active:n.isItemActive("".concat(h)),index:h},null,8,["isTabActive","active","index"])):$("",!0),d.props&&d.props.header?(p(),A("span",f({key:1,ref_for:!0},n.getTabPT(d,"headertitle",h)),l(d.props.header),17)):$("",!0),d.children&&d.children.header?(p(),_(P(d.children.header),{key:2})):$("",!0)]}),_:2},1032,["class","pt"]),r(u,{pt:n.getContentPT(d,h)},{default:v(function(){return[(p(),_(P(d)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(t.$slots,"default",{key:1})],16)}re.render=Le;var Oe=`
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
`,Re={root:{position:"relative"}},Me={root:function(e){var o=e.instance,c=e.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":o.checked,"p-disabled":c.disabled,"p-invalid":o.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Ye=E.extend({name:"toggleswitch",style:Oe,classes:Me,inlineStyles:Re}),qe={name:"BaseToggleSwitch",extends:ue,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ye,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},se={name:"ToggleSwitch",extends:qe,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(e){var o=e==="root"?this.ptmi:this.ptm;return o(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var o=this.checked?this.falseValue:this.trueValue;this.writeValue(o,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var o,c;this.$emit("blur",e),(o=(c=this.formField).onBlur)===null||o===void 0||o.call(c,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return oe({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Ge=["data-p-checked","data-p-disabled","data-p"],Qe=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],Je=["data-p"],We=["data-p"];function Xe(t,e,o,c,s,n){return p(),A("div",f({class:t.cx("root"),style:t.sx("root")},n.getPTOptions("root"),{"data-p-checked":n.checked,"data-p-disabled":t.disabled,"data-p":n.dataP}),[a("input",f({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:n.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":n.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:e[2]||(e[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,Qe),a("div",f({class:t.cx("slider")},n.getPTOptions("slider"),{"data-p":n.dataP}),[a("div",f({class:t.cx("handle")},n.getPTOptions("handle"),{"data-p":n.dataP}),[x(t.$slots,"handle",{checked:n.checked})],16,We)],16,Je)],16,Ge)}se.render=Xe;const Ze={class:"grid gap-6"},et={class:"flex items-center gap-5 p-4 bg-surface-50 rounded-xl"},tt={class:"flex flex-col gap-2"},nt={class:"text-surface-700 font-medium text-sm"},ot={class:"flex items-center gap-2 flex-wrap"},at={for:"avatarInput",class:"px-3 py-1.5 text-sm border border-surface-200 rounded-lg cursor-pointer text-surface-600 hover:bg-surface-0 transition-colors"},ct={key:0,class:"text-surface-400 text-xs"},it={class:"grid gap-4"},rt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},st={class:"block text-surface-700 font-medium mb-1.5 text-sm"},lt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},dt={class:"flex justify-end"},ut=U({__name:"AccountInformation",setup(t){const{t:e}=D(),{loggedUser:o}=O(),c=we(),s=ae(),{showSaveSuccess:n,showSaveError:g}=R(),u=w(null),m=w(null),d=w(void 0),h=w(!1),k=_e(()=>!!(m.value||d.value));function y(T){const b=T.target;b.files&&b.files[0]&&(u.value=b.files[0],m.value=URL.createObjectURL(u.value))}async function C(){if(u.value){h.value=!0;try{const T={name:u.value.name,user:o==null?void 0:o.id},b=await s.saveEntity(T);if(!b)throw new Error("Failed to create file record");await L.getServices().files.upload(b.id,u.value),n(e("common.save"),e("account.avatar")),u.value=null}catch{g(e("common.save"),e("account.avatar"))}finally{h.value=!1}}}const S=w((o==null?void 0:o.username)??""),F=w((o==null?void 0:o.email)??""),I=w(!1);async function V(){if(o!=null&&o.id){I.value=!0;try{await c.saveEntity({...o,username:S.value,email:F.value}),n(e("common.save"),e("account.tabInfo"))}catch{g(e("common.save"),e("account.tabInfo"))}finally{I.value=!1}}}return ce(async()=>{var b;const T=(b=s.entities.find(N=>N.user===o.id))==null?void 0:b.id;if(T)try{d.value=L.getServices().files.getFileUrl(T)}catch{}}),(T,b)=>{var W;const N=ie,J=M,z=ee;return p(),A("div",Ze,[a("div",et,[r(N,{size:"xlarge",shape:"circle",image:m.value||d.value,icon:k.value?void 0:"pi pi-user",class:"shrink-0 !w-20 !h-20"},null,8,["image","icon"]),a("div",tt,[a("p",nt,l(i(e)("account.avatar")),1),a("div",ot,[a("input",{type:"file",accept:"image/*",onChange:y,class:"hidden",id:"avatarInput"},null,32),a("label",at,[b[2]||(b[2]=a("i",{class:"pi pi-image mr-1.5"},null,-1)),Ae(" "+l(i(e)("account.selectPhoto")),1)]),u.value?(p(),_(J,{key:0,label:i(e)("common.upload"),icon:"pi pi-upload",size:"small",loading:h.value,onClick:C},null,8,["label","loading"])):$("",!0)]),u.value?(p(),A("p",ct,l(u.value.name),1)):$("",!0)])]),a("div",it,[a("div",null,[a("label",rt,l(i(e)("account.username")),1),r(z,{modelValue:S.value,"onUpdate:modelValue":b[0]||(b[0]=H=>S.value=H),fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",st,l(i(e)("account.email")),1),r(z,{modelValue:F.value,"onUpdate:modelValue":b[1]||(b[1]=H=>F.value=H),type:"email",fluid:""},null,8,["modelValue"])]),a("div",null,[a("label",lt,l(i(e)("account.registeredAt")),1),r(z,{value:i(Y)((W=i(o))==null?void 0:W.createdAt)||"—",disabled:"",fluid:""},null,8,["value"])])]),a("div",dt,[r(J,{label:i(e)("common.saveChanges"),icon:"pi pi-check",loading:I.value,onClick:V},null,8,["label","loading"])])])}}}),pt={class:"grid gap-5"},ht={class:"block text-surface-700 font-medium mb-1.5 text-sm"},gt={class:"text-surface-700 font-medium text-sm mb-3"},ft={class:"grid gap-3"},vt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},mt={class:"text-surface-700 text-sm font-medium"},bt={class:"text-surface-400 text-xs"},yt={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},wt={class:"text-surface-700 text-sm font-medium"},_t={class:"text-surface-400 text-xs"},At={class:"flex items-center justify-between p-3 bg-surface-50 rounded-xl cursor-pointer hover:bg-surface-100 transition-colors"},Pt={class:"text-surface-700 text-sm font-medium"},xt={class:"text-surface-400 text-xs"},kt={class:"flex justify-end"},$t=U({__name:"AccountPreferences",setup(t){const{t:e}=D(),{showSaveSuccess:o}=R(),c=w(localStorage.getItem("timezone")??"Europe/Prague"),s=w({news:!0,loanExpiry:!0,security:!0}),n=[{label:"Praha (UTC+1)",value:"Europe/Prague"},{label:"Londýn (UTC+0)",value:"Europe/London"},{label:"New York (UTC-5)",value:"America/New_York"}];function g(){localStorage.setItem("timezone",c.value),o(e("common.save"),e("account.savePreferences"))}return(u,m)=>{const d=pe,h=se,k=M;return p(),A("div",pt,[a("div",null,[a("label",ht,l(i(e)("account.timezone")),1),r(d,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=y=>c.value=y),options:n,"option-label":"label","option-value":"value",fluid:""},null,8,["modelValue"])]),a("div",null,[a("p",gt,l(i(e)("account.notifications")),1),a("div",ft,[a("label",vt,[a("div",null,[a("p",mt,l(i(e)("account.notifNews")),1),a("p",bt,l(i(e)("account.notifNewsDesc")),1)]),r(h,{modelValue:s.value.news,"onUpdate:modelValue":m[1]||(m[1]=y=>s.value.news=y)},null,8,["modelValue"])]),a("label",yt,[a("div",null,[a("p",wt,l(i(e)("account.notifLoanExpiry")),1),a("p",_t,l(i(e)("account.notifLoanExpiryDesc")),1)]),r(h,{modelValue:s.value.loanExpiry,"onUpdate:modelValue":m[2]||(m[2]=y=>s.value.loanExpiry=y)},null,8,["modelValue"])]),a("label",At,[a("div",null,[a("p",Pt,l(i(e)("account.notifSecurity")),1),a("p",xt,l(i(e)("account.notifSecurityDesc")),1)]),r(h,{modelValue:s.value.security,"onUpdate:modelValue":m[3]||(m[3]=y=>s.value.security=y)},null,8,["modelValue"])])])]),a("div",kt,[r(k,{label:i(e)("account.savePreferences"),icon:"pi pi-check",onClick:g},null,8,["label"])])])}}}),Tt={class:"grid gap-5"},Ct={class:"p-4 bg-surface-50 rounded-xl"},St={class:"flex items-center justify-between mb-2"},It={class:"font-medium text-surface-700 text-sm"},Ft={class:"text-surface-400 text-xs"},Vt={key:0,class:"mt-4 grid gap-3 border-t border-surface-200 pt-4"},Bt={class:"block text-surface-700 font-medium mb-1.5 text-sm"},Et={class:"block text-surface-700 font-medium mb-1.5 text-sm"},Ut={key:0,class:"text-red-500 text-xs"},Dt={class:"flex gap-2 justify-end"},Kt={class:"p-4 bg-surface-50 rounded-xl flex items-center justify-between"},Nt={class:"font-medium text-surface-700 text-sm"},zt={class:"text-surface-400 text-xs"},Ht={class:"flex items-center gap-3"},jt=U({__name:"AccountSecurity",setup(t){const{t:e}=D(),{loggedUser:o}=O(),{showInfo:c}=R(),s=w(!1),n=w(""),g=w(""),u=w("");function m(){s.value=!0,n.value="",g.value="",u.value=""}function d(){s.value=!1,u.value=""}function h(){if(u.value="",n.value.length<6){u.value=e("account.newPasswordPlaceholder");return}if(n.value!==g.value){u.value=e("account.confirmPasswordPlaceholder");return}c(e("common.save"),e("account.changePassword")),s.value=!1}return(k,y)=>{var I;const C=M,S=ee,F=xe;return p(),A("div",Tt,[a("div",Ct,[a("div",St,[a("div",null,[a("p",It,l(i(e)("account.password")),1),a("p",Ft,l(i(e)("account.passwordLastChanged",{date:i(Y)((I=i(o))==null?void 0:I.updatedAt)||"—"})),1)]),r(C,{label:i(e)("account.changePassword"),icon:"pi pi-key",size:"small",outlined:"",severity:"secondary",onClick:m},null,8,["label"])]),r(ne,{name:"slide-down"},{default:v(()=>[s.value?(p(),A("div",Vt,[a("div",null,[a("label",Bt,l(i(e)("account.newPassword")),1),r(S,{modelValue:n.value,"onUpdate:modelValue":y[0]||(y[0]=V=>n.value=V),type:"password",placeholder:i(e)("account.newPasswordPlaceholder"),fluid:""},null,8,["modelValue","placeholder"])]),a("div",null,[a("label",Et,l(i(e)("account.confirmPassword")),1),r(S,{modelValue:g.value,"onUpdate:modelValue":y[1]||(y[1]=V=>g.value=V),type:"password",placeholder:i(e)("account.confirmPasswordPlaceholder"),fluid:""},null,8,["modelValue","placeholder"])]),u.value?(p(),A("p",Ut,l(u.value),1)):$("",!0),a("div",Dt,[r(C,{label:i(e)("common.cancel"),size:"small",outlined:"",severity:"secondary",onClick:d},null,8,["label"]),r(C,{label:i(e)("account.savePassword"),icon:"pi pi-check",size:"small",onClick:h},null,8,["label"])])])):$("",!0)]),_:1})]),a("div",Kt,[a("div",null,[a("p",Nt,l(i(e)("account.twoFactor")),1),a("p",zt,l(i(e)("account.twoFactorDesc")),1)]),a("div",Ht,[r(F,{value:i(e)("account.inactive"),severity:"secondary"},null,8,["value"]),r(C,{label:i(e)("account.activate"),icon:"pi pi-lock",size:"small",outlined:"",severity:"secondary",disabled:""},null,8,["label"])])])])}}}),Lt=Pe(jt,[["__scopeId","data-v-23a869a4"]]),Ot={class:"flex items-center gap-4"},Rt={class:"text-surface-800 font-bold text-lg"},Mt={class:"text-surface-500 text-sm"},Yt={class:"text-surface-400 text-xs mt-1"},qt=U({__name:"UserCard",setup(t){const{t:e}=D(),{loggedUser:o}=O(),c=w(void 0);return ce(async()=>{var g;const n=(g=ae().entities.find(u=>u.user===o.id))==null?void 0:g.id;if(n)try{c.value=L.getServices().files.getFileUrl(n)}catch{}}),(s,n)=>{const g=ie,u=ke;return p(),_(u,null,{content:v(()=>{var m,d,h;return[a("div",Ot,[r(g,{image:c.value,icon:"pi pi-user",shape:"circle",size:"xlarge",class:"shrink-0"},null,8,["image"]),a("div",null,[a("p",Rt,l((m=i(o))==null?void 0:m.username),1),a("p",Mt,l((d=i(o))==null?void 0:d.email),1),a("p",Yt,l(i(e)("account.registeredAt"))+": "+l(i(Y)((h=i(o))==null?void 0:h.createdAt)||"—"),1)])])]}),_:1})}}}),Gt={class:"grid gap-4 max-w-2xl"},Qt={class:"text-2xl font-bold text-surface-800"},Jt={class:"text-surface-500 text-sm"},Wt={class:"flex items-center gap-2"},Xt={class:"font-medium"},Zt={class:"flex items-center gap-2"},en={class:"font-medium"},tn={class:"flex items-center gap-2"},nn={class:"font-medium"},ln=U({__name:"AccountAccordion",setup(t){const{t:e}=D();return(o,c)=>{const s=G,n=q,g=Q,u=re;return p(),A("div",Gt,[a("div",null,[a("h1",Qt,l(i(e)("account.title")),1),a("p",Jt,l(i(e)("account.subtitle")),1)]),r(qt),r(u,{value:["0"],multiple:""},{default:v(()=>[r(g,{value:"0"},{default:v(()=>[r(s,null,{default:v(()=>[a("div",Wt,[c[0]||(c[0]=a("i",{class:"pi pi-user text-primary-500"},null,-1)),a("span",Xt,l(i(e)("account.tabInfo")),1)])]),_:1}),r(n,null,{default:v(()=>[r(ut)]),_:1})]),_:1}),r(g,{value:"1"},{default:v(()=>[r(s,null,{default:v(()=>[a("div",Zt,[c[1]||(c[1]=a("i",{class:"pi pi-shield text-primary-500"},null,-1)),a("span",en,l(i(e)("account.tabSecurity")),1)])]),_:1}),r(n,null,{default:v(()=>[r(Lt)]),_:1})]),_:1}),r(g,{value:"2"},{default:v(()=>[r(s,null,{default:v(()=>[a("div",tn,[c[2]||(c[2]=a("i",{class:"pi pi-cog text-primary-500"},null,-1)),a("span",nn,l(i(e)("account.tabPreferences")),1)])]),_:1}),r(n,null,{default:v(()=>[r($t)]),_:1})]),_:1})]),_:1})])}}});export{ln as default};
