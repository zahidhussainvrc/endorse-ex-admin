import{_ as w,u as k,a as E,b as V,c as L,r,d as S,e as u,o as F,f as I,g as s,h as i,F as P,A as B,i as C,p as T,j}from"./index-af7adaa1.js";const p=t=>(T("data-v-cf08f941"),t=t(),j(),t),A={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},U={class:"flex flex-column align-items-center justify-content-center"},$={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(#1052b9, #1052b9 20%, var(--primary-color) 50%, rgba(21, 112, 185, 0) 80%)"}},M={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},N={class:"text-center mb-5"},X=["src"],q=p(()=>s("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),D=p(()=>s("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),R={__name:"Login",setup(t){const n=k(),g=E(),f=V(),{layoutConfig:_}=L(),o=r(""),l=r(""),d=r(!1);r(!1);const m=new Set,v=S(()=>`/endorse-ex-admin/layout/images/${_.darkTheme.value,"Endorse EX Final Files-01.png"}`),x=async()=>{if(!o.value||!l.value){n.add({severity:"error",summary:"Validation Error",detail:"Email and password are required.",life:3e3});return}d.value=!0;try{const e=await B.login({email:o.value,password:l.value});console.log("Login successful:",e),e.status=="success"&&(console.log("Login successful api_token :",e.user.api_token),f.commit("set_login_user_data",e),n.add({severity:"success",summary:"Login Success",detail:"You have logged in successfully!",life:3e3}),o.value="",l.value="",g.push("/admin/dashboard"))}catch(e){if(console.error("Login failed:",e),e.status==="error"){if(console.log(e.message),e.message){const a=e.message;m.has(a)||(n.add({severity:"error",summary:"Validation Error",detail:e.message,life:3e3}),m.add(e.message))}}else n.add({severity:"error",summary:"Login Failed",detail:"An error occurred during login. Please try again.",life:3e3})}finally{d.value=!1}};return(e,a)=>{const y=u("InputText"),b=u("Password"),h=u("Button");return F(),I(P,null,[s("div",A,[s("div",U,[s("div",$,[s("div",M,[s("div",N,[s("img",{src:v.value,alt:"Endorse-Ex logo",class:"mx-5 mb-5 w-10rem flex-shrink-0"},null,8,X)]),s("div",null,[q,i(y,{id:"email1",type:"text",placeholder:"Email address",class:"w-full md:w-30rem mb-5 p-inputtext",style:{padding:"1rem"},modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=c=>o.value=c)},null,8,["modelValue"]),D,i(b,{id:"password1",modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=c=>l.value=c),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"]),i(h,{label:"Sign In",class:"mt-5 w-full p-3 text-xl dark-blue-gradient",onClick:x,disabled:d.value},null,8,["disabled"])])])])])]),i(C,{simple:""})],64)}}},z=w(R,[["__scopeId","data-v-cf08f941"]]);export{z as default};
