import{s as k}from"./index-D7AwQa4s.js";import{B as w,s as _,f as x,o as r,c as l,m as d,r as B,a as P,t as v,b as c,d as f,e as p,g as S,F as V,h as u,w as b,i as g,u as $,j,k as N}from"./index-DggfQBVk.js";var C=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,z={root:function(a){var t=a.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},L=w.extend({name:"progressbar",style:C,classes:z}),M={name:"BaseProgressBar",extends:_,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:L,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},h={name:"ProgressBar",extends:M,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return x({determinate:this.determinate,indeterminate:this.indeterminate})}}},I=["aria-valuenow","data-p"],A=["data-p"],F=["data-p"],T=["data-p"];function D(e,a,t,i,s,n){return r(),l("div",d({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":n.dataP},e.ptmi("root")),[n.determinate?(r(),l("div",d({key:0,class:e.cx("value"),style:n.progressStyle,"data-p":n.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),l("div",d({key:0,class:e.cx("label"),"data-p":n.dataP},e.ptm("label")),[B(e.$slots,"default",{},function(){return[P(v(e.value+"%"),1)]})],16,F)):c("",!0)],16,A)):n.indeterminate?(r(),l("div",d({key:1,class:e.cx("value"),"data-p":n.dataP},e.ptm("value")),null,16,T)):c("",!0)],16,I)}h.render=D;const E={class:"mb-6 text-2xl font-semibold text-surface-800"},H=f({__name:"LoadingPage",emits:["all-loaded"],setup(e,{emit:a}){const t=p(0),i=p(0),s=["Hlodám vaše knížky...","Naháním nepoddajné tituly...","Vrtám se ve výpujčkách..."];S(()=>{const m=setInterval(()=>{if(t.value<100){t.value+=2;const o=Math.floor(t.value/100*s.length);i.value=Math.min(o,s.length-1)}else clearInterval(m),n("all-loaded")},60)});const n=a;return(m,o)=>{const y=k;return r(),l(V,null,[u(y,{class:"opacity-95 w-[400px]"},{title:b(()=>[g("h2",E,v(s[i.value]),1)]),content:b(()=>[u($(h),{value:t.value,mode:"indeterminate",class:"w-full",style:{height:"1rem"}},null,8,["value"])]),_:1}),o[0]||(o[0]=g("div",{class:"flex flex-col items-center justify-center"},null,-1))],64)}}}),q={key:0,class:"min-h-screen bg-hlod bg-no-repeat bg-cover flex justify-center items-end pb-10"},K=f({__name:"MainLayout",setup(e){const a=p(!0);return(t,i)=>{const s=N("router-view");return a.value?(r(),l("div",q,[u(H,{onAllLoaded:i[0]||(i[0]=n=>a.value=!1)})])):(r(),j(s,{key:1}))}}});export{K as default};
