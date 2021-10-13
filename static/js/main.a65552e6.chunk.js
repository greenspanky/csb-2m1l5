(this["webpackJsonpreact-eth-metamask"]=this["webpackJsonpreact-eth-metamask"]||[]).push([[0],{44:function(e,t){},54:function(e,t,r){"use strict";r.r(t);var n=r(12),s=r(32),a=r.n(s),c=r(26),l=r(2),i=r.n(l),o=r(24),u=r(21),d=r(6);function m(e){var t=e.message;return t?Object(d.jsx)("div",{className:"alert alert-error mt-5",children:Object(d.jsxs)("div",{className:"flex-1",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})}),Object(d.jsx)("label",{children:t})]})}):null}function j(e){var t=e.txs;return 0===t.length?null:Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("div",{className:"alert alert-info mt-5",children:Object(d.jsx)("div",{className:"flex-1",children:Object(d.jsx)("label",{children:e.hash})})},e)}))})}var h=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n,s,a,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.setError,n=t.setTxs,s=t.ether,a=t.addr,e.prev=1,window.ethereum){e.next=4;break}throw new Error("No crypto wallet found. Please install it.");case 4:return e.next=6,window.ethereum.send("eth_requestAccounts");case 6:return c=new u.a.providers.Web3Provider(window.ethereum),l=c.getSigner(),u.a.utils.getAddress(a),e.next=11,l.sendTransaction({to:a,value:u.a.utils.parseEther(s)});case 11:o=e.sent,console.log({ether:s,addr:a}),console.log("tx",o),n([o]),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),r(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();function x(){var e=Object(n.useState)(),t=Object(c.a)(e,2),r=t[0],s=t[1],a=Object(n.useState)([]),l=Object(c.a)(a,2),u=l[0],x=l[1],b=function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=new FormData(t.target),s(),e.next=5,h({setError:s,setTxs:x,ether:r.get("ether"),addr:r.get("addr")});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("form",{className:"m-4",onSubmit:b,children:Object(d.jsxs)("div",{className:"credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white",children:[Object(d.jsxs)("main",{className:"mt-4 p-4",children:[Object(d.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Private Sale"}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("div",{className:"my-3",children:Object(d.jsx)("input",{type:"hidden",name:"addr",value:"0xeFD4f5Ae3aE7d0E1163249EB4C40Bc9c935F0087",className:"input input-bordered block w-full focus:ring focus:outline-none"})}),Object(d.jsx)("div",{className:"my-3",children:Object(d.jsx)("input",{name:"ether",type:"text",min:"0.1",max:"5",className:"input input-bordered block w-full focus:ring focus:outline-none",placeholder:"Minimum 0.1 - Maximum 5"})})]})]}),Object(d.jsxs)("footer",{className:"p-4",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Pay now"}),Object(d.jsx)(m,{message:r}),Object(d.jsx)(j,{txs:u})]})]})})}var b=document.getElementById("root");a.a.render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(x,{})}),b)}},[[54,1,2]]]);
//# sourceMappingURL=main.a65552e6.chunk.js.map