(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(o){const r="https://pixabay.com/api/",n=new URLSearchParams({key:"44040015-64d065a912d04f3627622b428",q:o}),i=`${r}?${n}`;return fetch(i).then(e=>e.json())}function f(o){return o.map(r=>`<li><a href=""><img src="${r.previewURL}" alt=""></a></li>`).join("")}const c=document.querySelector(".find-form"),u=document.querySelector(".list-image");c.addEventListener("submit",o=>{o.preventDefault();const n=new FormData(c).get("find-text");n!==""&&a(n).then(i=>{const e=f(i.hits);u.innerHTML=e})});
//# sourceMappingURL=commonHelpers.js.map
