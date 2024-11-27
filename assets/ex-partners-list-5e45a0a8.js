import{_ as L,u as S,r as _,m as A,n as E,d as D,e as p,o as I,f as B,g as d,q as T,v as U,h as s,s as n,x as l,t as f,y as k,p as N,j as P}from"./index-984cfbaa.js";import{U as b}from"./ExPartnerServices-c4009874.js";const V=c=>(N("data-v-ef3762c7"),c=c(),P(),c),F={class:"col-12"},j={class:"card"},q=V(()=>d("div",{class:"flex justify-content-between flex-column sm:flex-row"},[d("h4",null,"Ex-Partner List")],-1)),M={class:"button-container"},R={__name:"ex-partners-list",setup(c){const y=S(),i=_([]),v=_(!0),m=_(""),g=async()=>{try{const e=await b.getExPartners();console.log("Fetched ex-partners data:",e),Array.isArray(e)?i.value=e:Array.isArray(e.exPartners)?i.value=e.exPartners:(console.error("Unexpected data format:",e),i.value=[])}catch(e){console.error("Error fetching ex-partners:",e)}finally{v.value=!1}},x=async(e,a)=>{const t=a==="approve"?"in-approve":"approve";try{const r=await b.updateExPartnerStatus(e,t);if(console.log("status toggleStatus response",r),r&&r.status=="success"){y.add({severity:"success",summary:"Login Success",detail:r.message,life:3e3});const u=i.value.find(h=>h.id===e);u&&(u.status=t)}else console.error("Failed to update status:",r.message||"Unknown error")}catch(r){console.error("Error updating status:",r),y.add({severity:"error",summary:"Validation Error",detail:r.message,life:3e3})}};let w;A(()=>{g(),w=setInterval(g,5e3)}),E(()=>{clearInterval(w)});const C=D(()=>i.value.filter(e=>{const a=m.value.toLowerCase();return e.full_name.toLowerCase().includes(a)||e.email.toLowerCase().includes(a)||e.gender.toLowerCase().includes(a)||e.birthday.toLowerCase().includes(a)||e.age_range.toLowerCase().includes(a)||e.address.toLowerCase().includes(a)||e.phone_number.toLowerCase().includes(a)||e.college.toLowerCase().includes(a)||e.profession.toLowerCase().includes(a)||e.relationship_duration.toLowerCase().includes(a)}));return(e,a)=>{const t=p("Column"),r=p("Tag"),u=p("Button"),h=p("DataTable");return I(),B("div",F,[d("div",j,[T(d("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>m.value=o),placeholder:"Search by name or email",class:"p-inputtext p-component"},null,512),[[U,m.value]]),s(h,{value:C.value,loading:v.value,paginator:!0,rows:10,dataKey:"id"},{header:n(()=>[q]),empty:n(()=>[l(" No ex-partners found. ")]),loading:n(()=>[l(" Loading ex-partner data. Please wait. ")]),default:n(()=>[s(t,{field:"full_name",header:"Full Name",style:{"min-width":"12rem"}}),s(t,{field:"email",header:"Email",style:{"min-width":"12rem"}}),s(t,{field:"gender",header:"Gender",style:{"min-width":"8rem"}}),s(t,{field:"birthday",header:"Birthday",style:{"min-width":"10rem"}},{body:n(({data:o})=>[l(f(new Date(o.birthday).toLocaleDateString()),1)]),_:1}),s(t,{field:"age_range",header:"Age Range",style:{"min-width":"8rem"}}),s(t,{field:"address",header:"Address",style:{"min-width":"12rem"}}),s(t,{field:"phone_number",header:"Phone Number",style:{"min-width":"10rem"}}),s(t,{field:"college",header:"College",style:{"min-width":"12rem"}}),s(t,{field:"profession",header:"Profession",style:{"min-width":"12rem"}}),s(t,{field:"relationship_duration",header:"Relationship Duration",style:{"min-width":"12rem"}}),s(t,{field:"status",header:"Status",style:{"min-width":"10rem"}},{body:n(({data:o})=>[s(r,{severity:o.status=="active"?"success":"warning"},{default:n(()=>[l(f(o.status=="active"?"Active":"In-Active"),1)]),_:2},1032,["severity"])]),_:1}),s(t,{field:"created_at",header:"Created At",style:{"min-width":"10rem"}},{body:n(({data:o})=>[l(f(new Date(o.created_at).toLocaleDateString()),1)]),_:1}),s(t,{header:"Actions",style:{"min-width":"11rem"}},{body:n(({data:o})=>[d("div",M,[s(u,{label:o.status=="active"?"In-approve":"Approve",icon:o.status=="active"?"pi pi-times":"pi pi-check",onClick:z=>x(o.id,o.status),class:k(o.status=="active"?"status-button p-button-rounded p-button-warning":"p-button-rounded p-button-success"),style:{"min-width":"100px",padding:"0.5rem 1rem"}},null,8,["label","icon","onClick","class"])])]),_:1})]),_:1},8,["value","loading"])])])}}},Q=L(R,[["__scopeId","data-v-ef3762c7"]]);export{Q as default};
