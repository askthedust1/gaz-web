import{_ as B,r as w,o as t,c as a,d as u,b as s,w as v,f as g,t as i,F as o,g as r,C as k,D as C,a as b,s as y}from"./index-MzSHBGTO.js";import{C as S}from"./CategoriesBar-CFtpdcST.js";const V={components:{CategoriesSideBar:S},data(){return{mainItems:[{tel:["+996 (312) 92 01 31"],description:"contacts.marketing"},{tel:["+996 (312) 92 01 33"],description:"Служба по связям с общественностью и средствами массовой информации"},{tel:["+996 (312) 92 01 41","+996 (312) 53 00 35"],description:"Отдел документального обеспечения управления (канцелярия)"},{tel:["+996 (312) 92 01 31"],description:"Отдел подготовки и проведения закупок (по вопросам тендерных заявок)"}],branches:[{title:"Филиал «Бишкекгаз»",tel:["+996 (312) 92 01 41","+996 (312) 53 00 35"],description:"Отдел документального обеспечения управления (канцелярия)"},{title:"Филиал «Чуйгаз»",tel:["+996 (312) 92 01 41","+996 (312) 53 00 35"],description:"Отдел документального обеспечения управления (канцелярия)"},{title:"Филиал «Ошгаз»",tel:["+996 (312) 92 01 41","+996 (312) 53 00 35"],description:"Отдел документального обеспечения управления (канцелярия)"},{title:"Филиал «Жалалабадгаз»",tel:["+996 (312) 92 01 41","+996 (312) 53 00 35"],description:"Отдел документального обеспечения управления (канцелярия)"}],selectedBranch:"Филиал «Бишкекгаз»"}},computed:{filteredBranches(){return this.selectedBranch?this.branches.filter(n=>n.title===this.selectedBranch):this.branches}},methods:{filterBranches(){this.filteredBranches}}},z={class:"container-contacts"},N={class:"content"},$={class:"main-contacts"},D={class:"item-wrap",style:{"margin-top":"0 !important"}},F=s("div",{class:"phone"},[s("span",{class:"call-104"},"104")],-1),T={class:"description"},E={class:"item-wrap"},I=s("div",{class:"phone"},[s("span",{class:"call"},"4444")],-1),L={class:"description"},M={class:"phone"},P={class:"description"},U=b('<div class="item-wrap"><div class="phone"><a href="https://wa.me/+996701680707" class="wa">+996 (701) 68 07 07</a></div><span class="description">Whatsapp</span></div><div class="item-wrap"><div class="phone"><a href="https://t.me/gazpromkg_bot" class="tg">@gazpromkg_bot</a></div><span class="description">Telegram чат-бот</span></div>',2),W={class:"filter"},j=["value"],q={class:"contacts"},x={class:"item-wrap bg"},A={class:"phone"},G={class:"description"};function H(n,l,J,K,d,p){const f=w("CategoriesSideBar"),m=y;return t(),a("div",z,[u(f),s("div",N,[u(m,{tag:"h3",size:"small"},{default:v(()=>[g(i(n.$t("contacts.main-title")),1)]),_:1}),s("div",$,[s("div",D,[F,s("span",T,i(n.$t("contacts.gas-service")),1)]),s("div",E,[I,s("span",L,i(n.$t("contacts.call")),1)]),(t(!0),a(o,null,r(d.mainItems,(e,c)=>(t(),a("div",{class:"item-wrap",key:c},[s("div",M,[(t(!0),a(o,null,r(e.tel,(h,_)=>(t(),a("span",{key:_},i(h),1))),128))]),s("span",P,i(n.$t(`${e.description}`)),1)]))),128)),U]),s("div",W,[k(s("select",{"onUpdate:modelValue":l[0]||(l[0]=e=>d.selectedBranch=e),onChange:l[1]||(l[1]=(...e)=>p.filterBranches&&p.filterBranches(...e)),id:"branchFilter"},[(t(!0),a(o,null,r(d.branches,(e,c)=>(t(),a("option",{key:c,value:e.title},i(e.title),9,j))),128))],544),[[C,d.selectedBranch]])]),s("div",q,[(t(!0),a(o,null,r(p.filteredBranches,(e,c)=>(t(),a("div",{class:"contacts-wrap",key:c},[u(m,{tag:"h3",size:"small"},{default:v(()=>[g(i(e.title),1)]),_:2},1024),s("div",x,[s("div",A,[(t(!0),a(o,null,r(e.tel,(h,_)=>(t(),a("span",{key:_},i(h),1))),128))]),s("span",G,i(n.$t(`${e.description}`)),1)])]))),128))])])])}const R=B(V,[["render",H]]);export{R as default};
