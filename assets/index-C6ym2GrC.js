(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i="/template-vite-js/assets/logo-transparent-hevc-safari-fC2f_kUU.mp4",u="/template-vite-js/assets/logo-transparent-vp9-chrome-BFjHMjN_.webm";function l(n){let o=0;const r=s=>{o=s,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>r(o+1)),r(0)}document.querySelector("#app").innerHTML=`
  <div>
    <video class="image-3d" autoplay loop muted playsinline>
      <source src="${i}" type='video/mp4; codecs="hvc1"' />
      <source src="${u}" type="video/webm" />
    </video>
    <h1>Welcome to Vite JS Template!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;l(document.querySelector("#counter"));