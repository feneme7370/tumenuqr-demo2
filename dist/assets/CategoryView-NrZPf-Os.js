import{u as g,a as f,b as p,r as h,c as t,d as l,e as a,_ as b,w as v,F as r,f as c,g as o,h as i,i as k,o as s,R as y,t as u,j as D,k as w}from"./index-TZ_wqbEt.js";const C=o("div",{class:"mb-5 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col"},[o("a",{class:"bg-orange-100 w-full border-2 border-orange-200"},[o("h1",{class:"my-2 text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl"},"Inicio")])],-1),j={key:0,class:"text-center font-bold text-4xl mb-5"},$={class:"flex flex-wrap items-center justify-center gap-3"},B={class:"mb-10 bg-center bg-no-repeat w-16 h-16 relative"},S=["src"],V=["onClick"],I={class:"bg-orange-100 w-full border-2 border-orange-200 py-1 text-xs tracking-tight leading-none text-gray-800 md:text-md lg:text-lg"},N={key:0,class:"text-center font-bold text-2xl mb-5"},R={key:0},F={class:"mb-10"},L={key:0},P=o("h2",{class:"text-center font-bold text-4xl mb-5"},"Sugeridos",-1),H={__name:"CategoryView",setup(z){const n=g(),m=f(),_=p(),{levelId:x}=_.params,d=h("");return(E,q)=>(s(),t(r,null,[l(b,{class:"mb-10",companiesDates:a(n).companiesDates},null,8,["companiesDates"]),l(a(y),{to:{name:"home"}},{default:v(()=>[C]),_:1}),(s(!0),t(r,null,c(a(n).levelsDates,e=>(s(),t("div",{key:e.id},[e.id==a(x)?(s(),t("h2",j,u(e.name),1)):i("",!0)]))),128)),o("div",$,[(s(!0),t(r,null,c(a(n).categoriesDates,e=>(s(),t("div",{key:e.id},[o("div",B,[o("img",{loading:"lazy",class:"w-16 h-16 object-cover rounded-xl",src:a(m).urlBack+e.image_hero_uri+e.image_hero,alt:"imagen portada"},null,8,S),o("div",{class:"absolute right-0 -bottom-5 left-0 px-1 mx-auto text-center flex items-center justify-center flex-col cursor-pointer",onClick:A=>d.value=e.id},[o("a",I,u(e.name),1)],8,V)])]))),128))]),(s(!0),t(r,null,c(a(n).categoriesDates,e=>(s(),t("div",null,[e.id===d.value?(s(),t("h2",N,u(e.name),1)):i("",!0)]))),256)),(s(!0),t(r,null,c(a(n).productsDates,e=>(s(),t("div",{key:e.id},[e.category_id===d.value?(s(),t("div",R,[l(D,{product:e},null,8,["product"])])):i("",!0)]))),128)),o("div",F,[a(n).suggestionsDates[0]?(s(),t("div",L,[P,(s(!0),t(r,null,c(a(n).suggestionsDates,e=>(s(),t("div",{key:e.id,class:"my-2 px-2"},[l(w,{product:e.product},null,8,["product"])]))),128))])):i("",!0)]),l(k,{companiesDates:a(n).companiesDates},null,8,["companiesDates"])],64))}};export{H as default};
