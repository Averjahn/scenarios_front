import{r as i,o as e,c as s,a as c,F as f,g as k,b as v}from"./index-b5ff76c2.js";const d="/scenarios_front/assets/filled_star-95ccb81b.svg",h="/scenarios_front/assets/empty_star-9f8cf3f3.svg";const g={class:"feedback-wrapper"},x={key:0,class:"stars-section"},y=["innerHTML"],b={class:"rating"},D=["onMouseover","onClick"],M={key:0,src:d,class:"star"},C={key:1,src:d,class:"star"},H={key:2,src:h,class:"star"},L={key:1,class:"text-section"},T=["innerHTML"],F=c("textarea",{type:"text",class:"feedback-input"},null,-1),$={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const o=p,t=i(0),l=i(0),n=i(!1),m=r=>{n.value=!1,r==t.value?t.value=0:t.value=r,console.log(t.value)};return console.log(o.componentData),(r,_)=>(e(),s("div",g,[o.componentData.showStars?(e(),s("div",x,[c("div",{innerHTML:o.componentData.starsDescription,class:"stars-text"},null,8,y),c("div",b,[(e(),s(f,null,k(5,a=>c("span",{key:a,class:"star-container",onMouseover:u=>(l.value=a,n.value=!0),onMouseleave:_[0]||(_[0]=u=>(l.value=t.value,n.value=!1)),onClick:u=>m(a)},[a<=t.value&&!n.value?(e(),s("img",M)):a<=l.value&&n.value?(e(),s("img",C)):(e(),s("img",H))],40,D)),64))])])):v("",!0),o.componentData.showText?(e(),s("div",L,[c("div",{innerHTML:o.componentData.text,class:"stars-text"},null,8,T),F])):v("",!0)]))}};export{$ as default};
