(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{4081:(e,t,r)=>{Promise.resolve().then(r.bind(r,9429))},9429:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5155),a=r(2115);r(9049);var o=r(2551);let n=()=>{let[e,t]=(0,a.useState)(""),[r,n]=(0,a.useState)(""),[i,l]=(0,a.useState)(""),c=async()=>{try{let t=await fetch("http://localhost:8000/admin/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:r,password:i}),credentials:"include"}),s=await t.json();s.ok?(console.log("Admin registration successful",s),o.oR.success("Registration successful",{position:"top-center"})):(console.error("Admin registration failed",t.statusText),o.oR.error("Registration unsuccessful",{position:"top-center"}))}catch(e){o.oR.error("An error occoured during registeration"),console.error("Error:",e)}};return(0,s.jsxs)("div",{className:"formpage",children:[(0,s.jsx)("input",{type:"text",placeholder:"Name",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("input",{type:"email",placeholder:"Email",value:r,onChange:e=>n(e.target.value)}),(0,s.jsx)("input",{type:"password",placeholder:"Password",value:i,onChange:e=>l(e.target.value)}),(0,s.jsx)("button",{onClick:c,children:"Sign Up"})]})}},9049:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[632,551,441,517,358],()=>t(4081)),_N_E=e.O()}]);