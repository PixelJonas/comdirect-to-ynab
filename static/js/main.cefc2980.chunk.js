(window["webpackJsonpcomdirect-to-ynab"]=window["webpackJsonpcomdirect-to-ynab"]||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c);n(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(5),i=n(2),s=n(4),l=n(3),f="YNAB_SET_ACCESS_TOKEN",d="YNAB_LOGIN",m="YNAB_LOGIN_PENDING",p="YNAB_LOAD_BUDGET",g="YNAB_SET_BUDGETS",h="YNAB_SEND_TRANSACTIONS",v="YNAB_ADD_IMPORT_RESULT";function b(e){return{type:f,accessToken:e}}function y(e){return{type:m,loginPending:e}}function E(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return{type:v,budget:e,result:t,futureTransactions:n,successful:r}}var w="IMPORT_FINISHED";var O="CSV_ADD_ACCOUNTS";function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){return e.accessToken}function j(e){return e.loginPending}function T(e){return e.budgets}function D(e){return{successful:e.successful,result:e.result,budget:e.budget,futureTransactions:e.futureTransactions}}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{accounts:[].concat(Object(s.a)(e.accounts),Object(s.a)(t))})}var B="ADD_MAPPING";var k=n(14),x=n(17),C=function(e){return e.map},I=function(e){return e.csv.accounts},Y=function(e,t){return I(e).find((function(e){return e.id===t}))};function R(e,t){return t.budgets.getBudgets().then((function(n){var r=n.data.budgets.slice();r.sort((function(e,t){return new Date(t.last_modified_on).getTime()-new Date(e.last_modified_on).getTime()})),Promise.all(r.map((function(e){return t.accounts.getAccounts(e.id)}))).then((function(t){t.forEach((function(e,t){return r[t].accounts=e.data.accounts.filter((function(e){return!e.closed}))})),e(function(e){return{type:g,budgets:e}}(r))}))}))}function F(e,t){return e[t]||(e[t]={id:t,accounts:[]}),e[t]}function U(e){return parseInt((1e3*e).toFixed(0))}function G(e,t,n){var r=[],a=!0,c=!1,o=void 0;try{for(var u,i=function(){var e=u.value;Y(t,e.csv).transactions.map((function(t){return function(e,t,n){var r,a=n.filter((function(t){return t.valueDate.getTime()===e.valueDate.getTime()&&t.value===e.value})).length;return n.push(e),{account_id:t,date:e.valueDate,amount:U(e.value),payee_name:(r=e.payee.name,null===r||r.length<=50?r:r.substr(0,50)),memo:e.text,cleared:"cleared",import_id:"comdirect:".concat(U(e.value),":").concat(e.valueDate.toISOString().substr(0,10),":").concat(a)}}(t,e.ynab,n)})).forEach((function(e){return r.push(e)}))},s=e[Symbol.iterator]();!(a=(u=s.next()).done);a=!0)i()}catch(l){c=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(c)throw o}}return r}function L(e,t,n){var r=function(e){var t={};for(var n in e){if(e[n].account)F(t,e[n].budget).accounts.push({csv:n,ynab:e[n].account})}return t}(C(e)),a=[],c=[],o=function(o){var u=G(r[o].accounts,e,a),i=u.length;u=u.filter((function(e){return e.date.getTime()<(new Date).getTime()})),i-=u.length;var s=t.transactions.createTransactions(o,{transactions:u}).then((function(e){return n(E(o,e,i))})).catch((function(){return n(E(o,null,null,!1))}));c.push(s)};for(var u in r)o(u);Promise.all(c).then((function(){return n({type:w})}))}var V=function(e){return e.ynab.accessToken},M=function(e){return e.ynab.loginPending},Z=function(e){return e.ynab.budgets},H=function(e){return e.ynab.importFinished},z=function(e){return e.ynab.importResults},K=(n(37),n(40),"https://app.youneedabudget.com/oauth/authorize?client_id=".concat("dae768ce4e0279d3d9f7721f0828630c72a16189ffc68ce9b1087ababb37a6f0","&redirect_uri=").concat(window.location.href,"&response_type=token")),W=Object(i.b)((function(e){return{accessToken:V(e),loginPending:M(e),onClick:function(){return window.location.href=K}}}))((function(e){var t=e.accessToken,n=e.loginPending,r=e.onClick;if(t)return null;var c=n?"Logging in ...":"Login with YNAB";return a.a.createElement("button",{type:"button",className:"btn btn-primary text",onClick:r,disabled:n},c)})),J=n(6),X=/Auftraggeber: (.+)Buchungstext: (.+) Ref\. (.+)/;var $={parse:function(e){var t=X.exec(e.trim());return{payee:{name:t[1].trim()},text:t[2],reference:t[3]}},canParse:function(e){return X.test(e)}},q=/ ?(Empf\xe4nger|Auftraggeber): (.+)Kto\/IBAN: (\w+) BLZ\/BIC: (\w+)([\W]*Buchungstext: (.+))? Ref\. (.+)/;var Q={parse:function(e){var t=q.exec(e);return{payee:{name:t[2],iban:t[3],bic:t[4]},text:t[6],reference:t[7]}},canParse:function(e){return q.test(e)}},ee=/ Buchungstext: (.+) Ref\. (.+) /;var te={parse:function(e){var t=ee.exec(e);return{payee:{name:null},text:t[1],reference:t[2]}},canParse:function(e){return ee.test(e)}},ne=/ Empf\xe4nger: (.+)Buchungstext: ((\d+) Ueberweisung von Girokonto auf Visa-Karte) Ref\. (.+) /;var re={parse:function(e){var t=ne.exec(e);return{payee:{name:t[1],creditCardNo:t[3]},text:t[2],reference:t[4]}},canParse:function(e){return ne.test(e)}},ae=/ (.+[^A-Z])[A-Z].+?\d\d\d/;var ce={parse:function(e){return{payee:{name:ae.exec(e)[1].trim()}}},canParse:function(e){return ae.test(e)}},oe=/ \d\.\d\d PROZ.AUSLANDSENTGELT /;var ue={parse:function(e){return{payee:{name:"comdirect"},text:e}},canParse:function(e){return oe.test(e)}},ie=/ SUMME MONATSABRECHNUNG VISA /;var se={parse:function(e){return{payee:{name:"Visa"}}},canParse:function(e){return ie.test(e)}},le=/ UEBERTRAG AUF VISA-KARTE /;var fe={parse:function(e){return{payee:{name:"Self"},text:e}},canParse:function(e){return le.test(e)}},de=n(15),me=n.n(de);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ge=/"Ums\xe4tze (.+)";"Zeitraum: ([\d])+ Tage";/,he=/"([\d]{2}.[\d]{2}.[\d]{4})";"([\d]{2}.[\d]{2}.[\d]{4})";"([^"]*)";("([^"]*)";)?"?([^"]*)"?;"(-?[\d.,]+)";/,ve=/([\d]{2}).([\d]{2}).([\d]{4})/,be=3,ye=2,Ee=1,we=1,Oe=2,Ne=3,Pe=6,Ae=7;function je(e){var t=ve.exec(e);return new Date(t[be],t[ye]-1,t[Ee],12)}var Te=[Q,$,te,re,ce,ue,se,fe,{parse:function(e){return{payee:{name:null},text:e}},canParse:function(){return!0}}];function De(e){var t,n=he.exec(e);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({valueDate:je(n[we]),bookingDate:je(n[Oe]),process:n[Ne],value:(t=n[Ae],t=(t=t.replace(/\./g,"")).replace(",","."),parseFloat(t))},function(e){var t=Te.find((function(t){return t.canParse(e)}));if(!t)throw new Error("Cannot parse text ".concat(e));return t.parse(e)}(n[Pe]))}function Se(e){var t=[];return(e=e.replace(/\r\n"neu";/g,"")).split("\r\n").forEach((function(e,n){if(function(e,t){return 0===e&&";"!==t&&""!==t.trim()}(n,e))throw new Error("Unexpected file format");!function(e){return ge.test(e)}(e)?function(e){return he.test(e)}(e)&&t[t.length-1].transactions.push(De(e)):t.push(function(e){return{name:ge.exec(e)[1].trim(),id:me()(),transactions:[]}}(e))})),t.filter((function(e){return e.transactions.length>0}))}function _e(e){return new Promise((function(t){var n=new FileReader;n.addEventListener("load",(function(){t(Se(n.result))})),n.readAsText(e,"cp1252")}))}function Be(e){return e?"black":"grey"}function ke(e){return function(t){t.preventDefault(),e()}}var xe=function(e){var t=e.addAccounts,n=Object(r.useState)(!1),c=Object(J.a)(n,2),o=c[0],u=c[1],i=function(e){return function(e){for(var t=[],n=0;n<e.length;n++)t.push(_e(e[n]));return Promise.all(t).then((function(e){return e.reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t))}),[])}))}(e).then((function(e){t(e)})).catch((function(e){return console.log(e)}))},l={border:"2px dashed ".concat(Be(o)),padding:"2.5rem",backgroundColor:o?"#f4f4f4":"#fff"};return a.a.createElement("div",{style:l,className:"text-center",onDragOver:ke((function(){return u(!0)})),onDragLeave:ke((function(){return u(!1)})),onDrop:function(e){e.preventDefault(),u(!1),i(e.dataTransfer.files)}},a.a.createElement("p",null,"Drop CSV file here"),a.a.createElement("p",null,a.a.createElement("input",{type:"file",onChange:function(e){i(e.target.files)}})))};var Ce=Object(i.b)(null,(function(e){return{addAccounts:function(t){return e(function(e){return{type:O,accounts:e}}(t))}}}))(xe),Ie=n(16),Ye=n.n(Ie);function Re(e,t){var n=new Ye.a(t.accounts,{keys:["name"],tokenize:!0,threshold:1}).search(e.name.replace(/[^\w\s]/g," ")+"comdirect");return n.length>0?n[0]:null}var Fe=function(e){var t=e.account,n=e.budgets,c=e.addMapping,o=Object(r.useState)(n[0]),u=Object(J.a)(o,2),i=u[0],s=u[1],f=Object(r.useState)(Re(t,i)),d=Object(J.a)(f,2),m=d[0],p=d[1];return Object(r.useEffect)((function(){c(Object(l.a)({},t.id,{account:m?m.id:null,budget:i.id}))}),[i,m]),a.a.createElement("div",{className:"row mt-3",style:{backgroundColor:"#f4f4f4"}},a.a.createElement("div",{className:"col-12 h1"},t.name),a.a.createElement("div",{className:"col-sm form-group"},a.a.createElement("label",null,"Budget"),a.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",onChange:function(e){var r=e.target.value,a=n.find((function(e){return e.id===r}));s(a),p(Re(t,a))},value:i.id},n.map((function(e){return a.a.createElement("option",{value:e.id,key:e.id},e.name)})))),a.a.createElement("div",{className:"col-sm form-group"},a.a.createElement("label",null,"Account"),a.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",value:m?m.id:"-",onChange:function(e){var t=e.target.value;if("-"!==t){var n=i.accounts.find((function(e){return e.id===t}));p(n)}else p(null)}},a.a.createElement("option",{value:"-"},"-"),i.accounts.map((function(e){return a.a.createElement("option",{value:e.id,key:e.id},e.name)})))))};var Ue=Object(i.b)((function(e){return{budgets:Z(e)}}),(function(e){return{addMapping:function(t){return e(function(e){return{type:B,mapping:e}}(t))}}}))(Fe);var Ge=function(e){var t=e.sendToYNAB;return a.a.createElement("button",{type:"button",className:"btn btn-primary text",onClick:t},"Send to YNAB")};var Le=Object(i.b)(null,(function(e){return{sendToYNAB:function(){return e({type:h})}}}))(Ge);var Ve=function(e){var t=e.accounts,n=e.results,r=e.showCSVDropZone,c=e.showAccounts,o=e.showResults,u=e.getBudget;return a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"text-center"},"comdirect to YNAB"),c||o||r?null:a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-lg-2"}),a.a.createElement("div",{className:"col-lg-8"},a.a.createElement("p",null,"comdirect to YNAB parses CSV files exported from your comdirect accounts and imports your financial transactions to YNAB. In order to do so, you have to login using your YNAB account and grant this site write access to your YNAB account. To do so, use the button below. After that, drop the file you want to import to the highlighted area."),a.a.createElement("h5",null,"Tip"),a.a.createElement("p",null,"You can export the transactions from all your accounts at once. Drop this file here and choose the account at YNAB you want to import the transactions to."),a.a.createElement("div",{className:"text-center mt-5"},a.a.createElement(W,null))),a.a.createElement("div",{className:"col-lg-2"})),a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-lg-2"}),a.a.createElement("div",{className:"col-lg-8"},r?a.a.createElement(Ce,null):null,t.map((function(e){return a.a.createElement(Ue,{account:e,key:e.id})})),c?a.a.createElement("div",{className:"text-right mt-3"},a.a.createElement(Le,null)):null),a.a.createElement("div",{className:"col-lg-2"})),a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-lg-2"}),a.a.createElement("div",{className:"col-lg-8"},o?n.map((function(e,t){return a.a.createElement("div",{className:"alert ".concat(e.successful?"alert-success":"alert-danger"),key:t},a.a.createElement("h4",{className:"alert-heading"},u(e.budget).name),e.successful&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Imported ",e.result.data.transaction_ids.length," new transactions."),e.result.data.duplicate_import_ids.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("p",null,e.result.data.duplicate_import_ids.length," transactions has been imported before and are ignored.")),e.futureTransactions>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("p",null,"Did not import ",e.futureTransactions," transaction with a future date."))),!e.successful&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Error while importing transactions.")))})):null),a.a.createElement("div",{className:"col-lg-2"})),a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-lg-2"}),a.a.createElement("div",{className:"col-lg-8"},a.a.createElement("h6",null,"Privacy Policy"),a.a.createElement("p",{className:"small"},"This website reads financial transactions from CSV files exported from the comdirect Bank and sends those transactions to YNAB using their ",a.a.createElement("a",{href:"https://api.youneedabudget.com/"},"API"),'. The CSV files are parsed in the browser and are thus not sent to any server. The transactions read from the files are send to the YNAB servers when you click "Send to YNAB". Please refer to the ',a.a.createElement("a",{href:"https://www.youneedabudget.com/privacy-policy/"},"YNAB Privacy Policy")," for further information. Data obtained from the YNAB API will not knowingly be passed to any third party."),a.a.createElement("p",{className:"small"},"This site is hosted using GitHub Pages. GitHub may save technical information, including your IP address. Please refer to the ",a.a.createElement("a",{href:"https://help.github.com/en/articles/github-privacy-statement"},"GitHub Privacy Policy"),".")),a.a.createElement("div",{className:"col-lg-2"})))},Me=Object(i.b)((function(e){return{accessToken:V(e),accounts:I(e),results:z(e),getBudget:function(t){return function(e,t){return e.ynab.budgets.find((function(e){return e.id===t}))}(e,t)},showAccounts:I(e).length>0&&!H(e),showCSVDropZone:V(e)&&0===I(e).length,showResults:H(e)}}))(Ve),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,He=Object(u.e)(Object(u.c)({ynab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{importResults:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return P({},e,{accessToken:A(t)});case m:return P({},e,{loginPending:j(t)});case g:return P({},e,{budgets:T(t)});case v:return P({},e,{importResults:[].concat(Object(s.a)(e.importResults),[D(t)])});case w:return P({},e,{importFinished:!0});case O:return P({},e,{importFinished:!1,importResults:[]});default:return e}},csv:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{accounts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return _(e,t.accounts);case w:return{accounts:[]};default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object.assign({},e,t.mapping);case w:return{};default:return e}}}),Ze(Object(u.a)(k.a,(function(e){var t,n=e.dispatch,r=e.getState;return function(e){return function(a){switch(a.type){case d:return function(e,t){e(y(!0));var n=new x.a(t);return n.user.getUser().then((function(){return e(b(t)),e(y(!1)),n})).catch((function(){return e(b(null)),e(y(!1)),null}))}(n,a.accessToken).then((function(e){t=e}));case p:return R(n,t);case h:return L(r(),t,n);default:return e(a)}}}})))),ze=/#access_token=([a-z0-9-]+)/;window.location.hash&&ze.test(window.location.hash)&&sessionStorage.setItem("access_token",window.location.hash.match(ze)[1]);var Ke,We=sessionStorage.getItem("access_token");He.dispatch((Ke=We,{type:d,accessToken:Ke})).then((function(){V(He.getState())&&He.dispatch({type:p})})),o.a.render(a.a.createElement(i.a,{store:He},a.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.cefc2980.chunk.js.map