import{FOOT as o,END as i}from"./script-DJijYzgc.js";import"./terrain-CYPyN6gy.js";import"./math-DbhsiLJH.js";const n=[{at:12,text:"Тебе нравится делать мёртвым больно?"},{at:230,text:`КРОВЬЮ НА ЗАБОРЕ:
«ОНИ ЗНАЮТ, КАК ТЕБЯ ЗОВУТ, {name}»`},{at:390,text:`Колокол молчит третий день.
Звонить больше некому.`},{at:660,text:`ИДИ КО МНЕ, ЖЕЛЕЗНЫЙ.
Я ГОЛОДЕН.`},{at:o+220,text:`КАЖДЫЙ, КОГО ТЫ РАЗРУБИЛ,
БЫЛ МОИМ ПОДДАННЫМ.`},{at:i-60,text:`КОРОНА ТЯЖЕЛА.
ГОЛОВА — ЛЕГЧЕ.`}],p=`ПРЕКЛОНИ КОЛЕНИ…
ИЛИ ПОТЕРЯЙ ИХ.`,x=`Тишина.
Впервые за долгое время — тишина.`;function c(t,e){let a=null;for(;t.i<n.length&&e>=n[t.i].at;)a=n[t.i++];return a}const u=(t,e)=>t.replace("{name}",e.toUpperCase());export{p as KING_WAKES,n as LINES,x as TOWER_TOP,u as fillName,c as lineAt};
