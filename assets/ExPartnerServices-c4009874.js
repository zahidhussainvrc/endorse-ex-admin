import{B as n}from"./index-984cfbaa.js";const o=n.create({baseURL:"http://127.0.0.1:8000/api"});class u{static async getExPartners(){var a;try{const t=localStorage.getItem("token");if(!t)throw new Error("No token found");const e=await o.get("/admin/ex-partners",{headers:{Authorization:`Bearer ${t}`}});return console.log("data users",e.data.data),e.data.data}catch(t){throw((a=t.response)==null?void 0:a.data)||{message:"Failed to fetch user data"}}}static async updateExPartnerStatus(a,t){var e;try{const r=localStorage.getItem("token");if(!r)throw new Error("No token found");const d=t==="approved"?"rejected":"approved",s=await o.get(`/admin/approve-expartner/${a}`,{headers:{Authorization:`Bearer ${r}`}});return console.log("Update Status Response:",s.data),s.data}catch(r){throw console.error("Error updating status:",r),((e=r.response)==null?void 0:e.data)||{message:"An error occurred while updating the status"}}}static async fetchMonthlyExPartners(){var a;try{const t=localStorage.getItem("token");if(!t)throw new Error("No token found");const e=await o.get("/admin/users",{headers:{Authorization:`Bearer ${t}`}});return console.log("data users",e.data.data),e.data.data}catch(t){throw((a=t.response)==null?void 0:a.data)||{message:"Failed to fetch user data"}}}static isAuthenticated(){return!!localStorage.getItem("token")}}export{u as U};
