import{u as w,r as f,d as x,o as t,c as o,e as T,b as c,a as h,f as r,F as p,g as D,n as C}from"./index-6515fba1.js";import L from"./ButtonAnswer-069dd152.js";import b from"./CheckboxAnswer-c8a88c77.js";import y from"./CheckboxImageAnswer-6ca708ee.js";import A from"./ContentImages-0515a835.js";import v from"./ContentText-757e8353.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-d8bb8dc7.js";import"./ModalImage-92b792ca.js";const _={key:0,class:"left-side"},R={class:"content-answers"},$={key:0},B=["innerHTML"],S={key:1,class:"answers-checkboxes-list"},H={key:2,class:"answers-image-checkboxes-list"},I={key:3,class:"answers-buttons-list"},M=["innerHTML"],G={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(n,{emit:k}){const e=n;w(a=>({"56f3bd99":m.value}));const m=f("");e.componentData.columns?m.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:m.value="repeat(2, minmax(0, 1fr))";const g=x(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),u=a=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[a].isChecked?e.componentData.answersList[a].isChecked=!1:e.componentData.answersList[a].isChecked=!0;else{for(let l=0;l<e.componentData.answersList.length;l++)e.componentData.answersList[l].isChecked=!1;e.componentData.answersList[a].isChecked=!0,e.componentData.answersList[a].action&&e.componentData.answersList[a].action.clickAction?k("action",e.componentData.answersList[a].action):k("chooseAction",e.componentData.answersList[a].action)}};return(a,l)=>(t(),o("div",{class:C({"multi-wrapper":n.componentData.isAnswersWithImage})},[n.componentData.isAnswersWithImage?(t(),o("div",_,[T(A,{componentData:n.componentData.imagesData},null,8,["componentData"])])):c("",!0),h("div",{class:C({"right-side":n.componentData.isAnswersWithImage})},[n.componentData.textData!=null?(t(),r(v,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):c("",!0),h("div",R,[e.componentData.hints?(t(),o("div",$,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,B)])):c("",!0),e.componentData.answersButtonType==="checkboxes"?(t(),o("ul",S,[(t(!0),o(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(b,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:d=>u(i),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(t(),o("ul",H,[(t(!0),o(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(y,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:s.image.imageURL,onClick:d=>u(i),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="buttons"?(t(),o("div",I,[(t(!0),o(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(L,{answerText:s.answerText,isChecked:!!s.isChecked,onClick:d=>u(i),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):c("",!0),n.componentData.showLegend?(t(),o("div",{key:4,innerHTML:g.value,class:"answers-legend"},null,8,M)):c("",!0)])],2)],2))}};export{G as default};
