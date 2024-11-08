import{B as V,_ as M,u as z,r as c,d as j,m as F,n as q,e as y,o as K,f as P,g as l,q as k,v as N,h as i,s as d,x,t as Q,p as R,j as G}from"./index-c4f75dda.js";const _=V.create({baseURL:"http://127.0.0.1:8000/api"});class T{static async getTraits(){var r;try{const a=localStorage.getItem("token");if(console.log("token response : ==>>>",a),!a)throw new Error("No token found");const t=await _.get("/admin/get-traits",{headers:{Authorization:`Bearer ${a}`}});return console.log("data users",t.data.data),t.data.data}catch(a){throw((r=a.response)==null?void 0:r.data)||{message:"Failed to fetch user data"}}}static async addTrait(r){var a;try{const t=localStorage.getItem("token");if(console.log("traits api token",t),!t)throw new Error("No token found");const n=await _.post("/admin/add-traits",r,{headers:{Authorization:`Bearer ${t}`}});return console.log("traits data response",n.data.data),n.data}catch(t){throw((a=t.response)==null?void 0:a.data)||{message:"An error occurred while adding the trait"}}}static async updateTrait(r){var a;try{const t=localStorage.getItem("token");if(console.log("traits api token",t),!t)throw new Error("No token found");const n=await _.post("/admin/update-traits",r,{headers:{Authorization:`Bearer ${t}`}});return console.log("traits  update data response ===> ",n),n.data}catch(t){throw((a=t.response)==null?void 0:a.data)||{message:"An error occurred while adding the trait"}}}static async deleteTrait(r){var a;try{const t=localStorage.getItem("token");if(console.log("traits api token",t),!t)throw new Error("No token found");const n=await _.get(`/admin/delet-traits/${r}`,{headers:{Authorization:`Bearer ${t}`}});return console.log("Deleted trait response:",n.data),n.data}catch(t){throw((a=t.response)==null?void 0:a.data)||{message:"An error occurred while deleting the trait"}}}static isAuthenticated(){return!!localStorage.getItem("token")}}const A=p=>(R("data-v-9151ff76"),p=p(),G(),p),H={class:"col-12"},J={class:"card"},O=A(()=>l("label",{for:"traitName"},"Trait Name:",-1)),W=A(()=>l("label",{for:"editTraitName"},"Trait Name:",-1)),X=A(()=>l("div",{class:"flex justify-content-between flex-column sm:flex-row"},[l("h4",null,"Traits List")],-1)),Y={class:"button-container"},Z={__name:"dynamic-trait-list",setup(p){const r=z(),a=c([]),t=c(!0),n=c(""),h=c(!1),m=c(""),w=c(!1),u=c(""),v=c(null),g=async()=>{try{const e=await T.getTraits();console.log("Fetched trait data:",e),Array.isArray(e)?a.value=e:Array.isArray(e.traits)?a.value=e.traits:(console.error("Unexpected data format:",e),a.value=[])}catch(e){console.error("Error fetching traits:",e)}finally{t.value=!1}},E=async()=>{if(m.value)try{const e=await T.addTrait({name:m.value});e.status=="success"&&(r.add({severity:"success",summary:"Login Success",detail:e.message,life:3e3}),m.value="",g(),h.value=!1)}catch(e){console.error("Error adding trait:",e)}},I=e=>{u.value=e.name,v.value=e.id,w.value=!0},U=async()=>{if(!(!u.value||v.value===null))try{console.log("Updating trait with ID:",v.value);const e=await T.updateTrait({id:v.value,name:u.value});e.status=="success"&&(r.add({severity:"success",summary:"Login Success",detail:e.message,life:3e3}),u.value="",v.value=null,g(),w.value=!1)}catch(e){console.error("Error updating trait:",e)}},B=async e=>{try{const o=await T.deleteTrait(e);o.status=="success"&&(r.add({severity:"success",summary:"Login Success",detail:o.message,life:3e3}),g())}catch(o){console.error("Error deleting trait:",o)}},L=j(()=>a.value.filter(e=>e.name.toLowerCase().includes(n.value.toLowerCase())));let S;return F(()=>{g(),S=setInterval(g,5e3)}),q(()=>{clearInterval(S)}),(e,o)=>{const f=y("Button"),C=y("Dialog"),b=y("Column"),D=y("DataTable");return K(),P("div",H,[l("div",J,[k(l("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),placeholder:"Search ",class:"p-inputtext p-component"},null,512),[[N,n.value]]),i(f,{label:"Add Trait",icon:"pi pi-plus",class:"p-button-success mb-3",onClick:o[1]||(o[1]=s=>h.value=!0)}),i(C,{header:"Add New Trait",visible:h.value,"onUpdate:visible":o[3]||(o[3]=s=>h.value=s),modal:!0,closable:!0},{default:d(()=>[l("div",null,[O,k(l("input",{id:"traitName","onUpdate:modelValue":o[2]||(o[2]=s=>m.value=s),placeholder:"Enter trait name",class:"p-inputtext p-component w-full"},null,512),[[N,m.value]])]),i(f,{label:"Save",icon:"pi pi-check",class:"p-button-success mt-3",onClick:E})]),_:1},8,["visible"]),i(C,{header:"Edit Trait",visible:w.value,"onUpdate:visible":o[5]||(o[5]=s=>w.value=s),modal:!0,closable:!0},{default:d(()=>[l("div",null,[W,k(l("input",{id:"editTraitName","onUpdate:modelValue":o[4]||(o[4]=s=>u.value=s),placeholder:"Enter trait name",class:"p-inputtext p-component w-full"},null,512),[[N,u.value]])]),i(f,{label:"Save Changes",icon:"pi pi-check",class:"p-button-success mt-3",onClick:U})]),_:1},8,["visible"]),i(D,{value:L.value,loading:t.value,paginator:!0,rows:10,dataKey:"id"},{header:d(()=>[X]),empty:d(()=>[x(" No traits found. ")]),loading:d(()=>[x(" Loading traits data. Please wait. ")]),default:d(()=>[i(b,{field:"name",header:"Name",style:{"min-width":"12rem"}}),i(b,{field:"created_at",header:"Created At",style:{"min-width":"10rem"}},{body:d(({data:s})=>[x(Q(new Date(s.created_at).toLocaleDateString()),1)]),_:1}),i(b,{header:"Actions",style:{"min-width":"11rem"}},{body:d(({data:s})=>[l("div",Y,[i(f,{label:"Edit",icon:"pi pi-pencil",onClick:$=>I(s),class:"p-button-rounded p-button-warning"},null,8,["onClick"]),i(f,{label:"Delete",icon:"pi pi-trash",onClick:$=>B(s.id),class:"p-button-rounded p-button-danger"},null,8,["onClick"])])]),_:1})]),_:1},8,["value","loading"])])])}}},te=M(Z,[["__scopeId","data-v-9151ff76"]]);export{te as default};
