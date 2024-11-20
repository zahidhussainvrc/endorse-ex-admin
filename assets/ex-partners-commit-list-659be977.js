import{B as k,_ as b,r as _,d as A,m as L,n as B,e as m,o as I,f as U,g as d,q as N,v as E,h as n,s as c,x as h,t as y,y as T,p as D,j as P}from"./index-70d42a5a.js";const v=k.create({baseURL:"http://127.0.0.1:8000/api"});class C{static async getCommits(){var r;try{const t=localStorage.getItem("token");if(console.log("token response : ==>>>",t),!t)throw new Error("No token found");const e=await v.get("/admin/get-all-commits",{headers:{Authorization:`Bearer ${t}`}});return console.log("data users",e.data.data),e.data.data}catch(t){throw((r=t.response)==null?void 0:r.data)||{message:"Failed to fetch user data"}}}static async addTrait(r){var t;try{const e=localStorage.getItem("token");if(console.log("traits api token",e),!e)throw new Error("No token found");const o=await v.post("/admin/add-traits",r,{headers:{Authorization:`Bearer ${e}`}});return console.log("traits data response",o.data.data),o.data}catch(e){throw((t=e.response)==null?void 0:t.data)||{message:"An error occurred while adding the trait"}}}static async updateUserStatus(r,t){var e;try{const o=localStorage.getItem("token");if(!o)throw new Error("No token found");const w=t==="approved"?"rejected":"approved",u=await v.get(`/admin/approve-commit/${r}`,{headers:{Authorization:`Bearer ${o}`}});return console.log("Update Status Response:",u.data),u.data}catch(o){throw console.error("Error updating status:",o),((e=o.response)==null?void 0:e.data)||{message:"An error occurred while updating the status"}}}static isAuthenticated(){return!!localStorage.getItem("token")}}const $=l=>(D("data-v-e37eea21"),l=l(),P(),l),z={class:"col-12"},V={class:"card"},j=$(()=>d("div",{class:"flex justify-content-between flex-column sm:flex-row"},[d("h4",null,"Commit List")],-1)),M={class:"button-container"},R={__name:"ex-partners-commit-list",setup(l){const r=_([]),t=_(!0),e=_(""),o=async()=>{try{const a=await C.getCommits();Array.isArray(a)?r.value=a:Array.isArray(a.users)?r.value=a.users:r.value=[]}catch(a){console.error("Error fetching users:",a)}finally{t.value=!1}},w=async(a,p)=>{const i=p==="approve"?"pending":"approve";try{await C.updateUserStatus(a,i),o()}catch(g){console.error("Error updating status:",g)}},u=A(()=>r.value.filter(a=>a.message.toLowerCase().includes(e.value.toLowerCase())||a.user.name.toLowerCase().includes(e.value.toLowerCase())||a.ex_partner.full_name.toLowerCase().includes(e.value.toLowerCase())));let f;return L(()=>{o(),f=setInterval(o,5e3)}),B(()=>{clearInterval(f)}),(a,p)=>{const i=m("Column"),g=m("Tag"),x=m("Button"),S=m("DataTable");return I(),U("div",z,[d("div",V,[N(d("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=s=>e.value=s),placeholder:"Search",class:"p-inputtext p-component"},null,512),[[E,e.value]]),n(S,{value:u.value,loading:t.value,paginator:!0,rows:10,dataKey:"id"},{header:c(()=>[j]),empty:c(()=>[h(" No users found. ")]),loading:c(()=>[h(" Loading user data. Please wait. ")]),default:c(()=>[n(i,{field:"message",header:"Commits",style:{"min-width":"12rem"}}),n(i,{field:"user.name",header:"User Name",style:{"min-width":"12rem"}}),n(i,{field:"ex_partner.full_name",header:"Ex Partner Name",style:{"min-width":"12rem"}}),n(i,{field:"status",header:"Status",style:{"min-width":"11rem"}},{body:c(({data:s})=>[n(g,{severity:s.status=="approve"?"success":"warning"},{default:c(()=>[h(y(s.status=="approve"?"Approved":"Pending"),1)]),_:2},1032,["severity"])]),_:1}),n(i,{field:"created_at",header:"Created At",style:{"min-width":"10rem"}},{body:c(({data:s})=>[h(y(new Date(s.created_at).toLocaleDateString()),1)]),_:1}),n(i,{header:"Actions",style:{"min-width":"11rem"}},{body:c(({data:s})=>[d("div",M,[n(x,{label:s.status=="approve"?"Pending":"Approve",icon:s.status=="approve"?"pi pi-times":"pi pi-check",onClick:q=>w(s.id,s.status),class:T(s.status=="approve"?"p-button-rounded p-button-warning":"p-button-rounded p-button-success")},null,8,["label","icon","onClick","class"])])]),_:1})]),_:1},8,["value","loading"])])])}}},K=b(R,[["__scopeId","data-v-e37eea21"]]);export{K as default};
