import{c as b,r as a,k as x,l as p,w as y,d as c,e as C,o as k,f as A,g as e,t as i,h as w}from"./index-06b50a94.js";import{U}from"./UserServices-4c904591.js";import{U as P}from"./ExPartnerServices-4ea48f5e.js";const E={class:"grid"},D={class:"col-12 lg:col-6 xl:col-6"},j={class:"card mb-0"},S={class:"flex justify-content-between mb-3"},T=e("span",{class:"block text-500 font-medium mb-3"},"Users",-1),V={class:"text-900 font-medium text-xl"},B=e("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-user text-orange-500 text-xl"})],-1),J=e("span",{class:"text-500"},"Total Users",-1),L={class:"col-12 lg:col-6 xl:col-6"},M={class:"card mb-0"},N={class:"flex justify-content-between mb-3"},O=e("span",{class:"block text-500 font-medium mb-3"},"Endorse's Profile",-1),F={class:"text-900 font-medium text-xl"},G=e("div",{class:"flex align-items-center justify-content-center bg-cyan-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[e("i",{class:"pi pi-user text-cyan-500 text-xl"})],-1),$=e("span",{class:"text-500"},"newly registered",-1),q=e("div",{class:"col-12 xl:col-6"},null,-1),z={class:"col-12 xl:col-12"},H={class:"card"},I=e("h5",null,"Sales Overview",-1),Y={__name:"Dashboard",setup(K){const{isDarkTheme:d}=b(),t=a([]),o=a([]);a([]),a([]);const u=async()=>{try{const s=await U.getUser();Array.isArray(s)?t.value=s:Array.isArray(s.users)?t.value=s.users:t.value=[],n()}catch(s){console.error("Error fetching users:",s)}},h=async()=>{try{const s=await P.getExPartners();Array.isArray(s)?o.value=s:Array.isArray(s.exPartners)?o.value=s.exPartners:o.value=[],n()}catch(s){console.error("Error fetching ex-partners:",s)}},r=x({labels:["January","February","March","April","May","June","July"],datasets:[{label:"Users Count",data:[0,0,0,0,0,0,0],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"ExPartners Count",data:[0,0,0,0,0,0,0],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]}),n=()=>{console.log("user Length Count ==> ",t.value.length),r.datasets[0].data=Array(7).fill(t.value.length),r.datasets[1].data=Array(7).fill(o.value.length)},l=a(null);p(()=>{u(),h()});const _=()=>{l.value={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},f=()=>{l.value={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}};y(d,s=>{s?f():_()},{immediate:!0});const g=c(()=>t.value.length),v=c(()=>o.value.length);return(s,Q)=>{const m=C("Chart");return k(),A("div",E,[e("div",D,[e("div",j,[e("div",S,[e("div",null,[T,e("div",V,i(g.value),1)]),B]),J])]),e("div",L,[e("div",M,[e("div",N,[e("div",null,[O,e("div",F,i(v.value),1)]),G]),$])]),q,e("div",z,[e("div",H,[I,w(m,{type:"line",data:r,options:l.value},null,8,["data","options"])])])])}}};export{Y as default};
