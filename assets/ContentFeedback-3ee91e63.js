import{r as i,o as e,c as s,a as c,F as k,g as f,b as v}from"./index-dba39256.js";const d="/scenarios_front/assets/filled_star-53aadc91.svg",h="/scenarios_front/assets/empty_star-ca858063.svg";const g={class:"feedback-wrapper"},x={key:0,class:"stars-section"},y=["innerHTML"],D={class:"rating"},M=["onMouseover","onClick"],b={key:0,src:d,class:"star"},C={key:1,src:d,class:"star"},H={key:2,src:h,class:"star"},L={key:1,class:"text-section"},T=["innerHTML"],F=c("textarea",{type:"text",class:"feedback-input"},null,-1),$={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const o=p,t=i(0),l=i(0),a=i(!1),m=r=>{a.value=!1,r==t.value?t.value=0:t.value=r,console.log(t.value)};return console.log(o.componentData),(r,_)=>(e(),s("div",g,[o.componentData.showStars?(e(),s("div",x,[c("div",{innerHTML:o.componentData.starsDescription,class:"stars-text"},null,8,y),c("div",D,[(e(),s(k,null,f(5,n=>c("span",{key:n,class:"star-container",onMouseover:u=>(l.value=n,a.value=!0),onMouseleave:_[0]||(_[0]=u=>(l.value=t.value,a.value=!1)),onClick:u=>m(n)},[n<=t.value&&!a.value?(e(),s("img",b)):n<=l.value&&a.value?(e(),s("img",C)):(e(),s("img",H))],40,M)),64))])])):v("",!0),o.componentData.showText?(e(),s("div",L,[c("div",{innerHTML:o.componentData.text,class:"stars-text"},null,8,T),F])):v("",!0)]))}};export{$ as default};
