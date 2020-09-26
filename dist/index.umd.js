!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SkyraTimestamp={})}(this,(function(t){"use strict";const e=1e3,r=36e5,a=24*r,n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Map([["Y",4],["Q",1],["M",4],["D",4],["d",4],["X",1],["x",1],["H",2],["h",2],["a",1],["A",1],["m",2],["s",2],["S",3],["Z",2],["l",4],["L",4],["T",1],["t",1]]);var s=Object.freeze({__proto__:null,second:e,minute:6e4,hour:r,day:a,days:n,months:g,tokens:i});const l=new Map([["Y",t=>String(t.getFullYear()).slice(2)],["YY",t=>String(t.getFullYear()).slice(2)],["YYY",t=>String(t.getFullYear())],["YYYY",t=>String(t.getFullYear())],["Q",t=>String((t.getMonth()+1)/3)],["M",t=>String(t.getMonth()+1)],["MM",t=>String(t.getMonth()+1).padStart(2,"0")],["MMM",t=>g[t.getMonth()]],["MMMM",t=>g[t.getMonth()]],["D",t=>String(t.getDate())],["DD",t=>String(t.getDate()).padStart(2,"0")],["DDD",t=>String(Math.floor((t.getTime()-new Date(t.getFullYear(),0,0).getTime())/a))],["DDDD",t=>String(Math.floor((t.getTime()-new Date(t.getFullYear(),0,0).getTime())/a))],["d",t=>{const e=String(t.getDate());return"11"!==e&&e.endsWith("1")?e+"st":"12"!==e&&e.endsWith("2")?e+"nd":"13"!==e&&e.endsWith("3")?e+"rd":e+"th"}],["dd",t=>n[t.getDay()].slice(0,2)],["ddd",t=>n[t.getDay()].slice(0,3)],["dddd",t=>n[t.getDay()]],["X",t=>String(t.valueOf()/e)],["x",t=>String(t.valueOf())],["H",t=>String(t.getHours())],["HH",t=>String(t.getHours()).padStart(2,"0")],["h",t=>String(t.getHours()%12||12)],["hh",t=>String(t.getHours()%12||12).padStart(2,"0")],["a",t=>t.getHours()<12?"am":"pm"],["A",t=>t.getHours()<12?"AM":"PM"],["m",t=>String(t.getMinutes())],["mm",t=>String(t.getMinutes()).padStart(2,"0")],["s",t=>String(t.getSeconds())],["ss",t=>String(t.getSeconds()).padStart(2,"0")],["S",t=>String(t.getMilliseconds())],["SS",t=>String(t.getMilliseconds()).padStart(2,"0")],["SSS",t=>String(t.getMilliseconds()).padStart(3,"0")],["T",t=>`${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")} ${t.getHours()<12?"AM":"PM"}`],["t",t=>`${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")} ${t.getHours()<12?"am":"pm"}`],["L",t=>`${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}/${String(t.getFullYear())}`],["l",t=>`${String(t.getMonth()+1)}/${String(t.getDate()).padStart(2,"0")}/${String(t.getFullYear())}`],["LL",t=>`${g[t.getMonth()]} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())}`],["ll",t=>`${g[t.getMonth()].slice(0,3)} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())}`],["LLL",t=>`${g[t.getMonth()]} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())} ${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")} ${t.getHours()<12?"AM":"PM"}`],["lll",t=>`${g[t.getMonth()].slice(0,3)} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())} ${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")} ${t.getHours()<12?"AM":"PM"}`],["LLLL",t=>`${n[t.getDay()]}, ${g[t.getMonth()]} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())} ${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")} ${t.getHours()<12?"AM":"PM"}`],["llll",t=>`${n[t.getDay()].slice(0,3)} ${g[t.getMonth()].slice(0,3)} ${String(t.getDate()).padStart(2,"0")}, ${String(t.getFullYear())} ${String(t.getHours()%12||12)}:${String(t.getMinutes()).padStart(2,"0")} ${t.getHours()<12?"AM":"PM"}`],["Z",t=>{const e=t.getTimezoneOffset(),r=e>=0,a=Math.abs(e);return`${r?"+":"-"}${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`}],["ZZ",t=>{const e=t.getTimezoneOffset(),r=e>=0,a=Math.abs(e);return`${r?"+":"-"}${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`}]]);class S{constructor(t){this.pattern=t,this.template=S.parse(t)}display(t=new Date){return S.display(this.template,t)}displayUTC(t){return S.display(this.template,S.utc(t))}edit(t){return this.pattern=t,this.template=S.parse(t),this}toString(){return this.display()}static displayArbitrary(t,e=new Date){return S.display(S.parse(t),e)}static displayUTCArbitrary(t,e=new Date){return S.display(S.parse(t),S.utc(e))}static utc(t=new Date){return t=S.resolveDate(t),new Date(t.valueOf()+6e4*t.getTimezoneOffset())}static display(t,e){let r="";const a=S.resolveDate(e);for(const{content:e,type:n}of t)r+=e||l.get(n)(a);return r}static parse(t){const e=[];for(let r=0;r<t.length;r++){let a="";const n=t[r],g=i.get(n);if("number"==typeof g){for(a+=n;t[r+1]===n&&a.length<g;)a+=t[++r];e.push({type:a,content:null})}else if("["===n){for(;r+1<t.length&&"]"!==t[r+1];)a+=t[++r];r++,e.push({type:"literal",content:a||"["})}else{for(a+=n;r+1<t.length&&!i.has(t[r+1])&&"["!==t[r+1];)a+=t[++r];e.push({type:"literal",content:a})}}return e}static resolveDate(t){return t instanceof Date?t:new Date(t)}}t.Timestamp=S,t.constants=s,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map