import{S as l,i as m}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function u(r){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"44040015-64d065a912d04f3627622b428",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${t}?${s}`;return fetch(o).then(e=>e.json())}function d(r){return r.map(t=>`<li class="gallery-list"><div class="gallery"><a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" width="360px" height="100px"></a>
      <ul class="img-cont-list">
      <li class="img-cont-item">Likes<p class="img-cont-descr">${t.likes}</p></li>
      <li class="img-cont-item">Views<p class="img-cont-descr">${t.views}</p></li>
      <li class="img-cont-item">Comments<p class="img-cont-descr">${t.comments}</p></li>
      <li class="img-cont-item">Downloads<p class="img-cont-descr">${t.downloads}</p></li>
      </ul>
      </div>
      </li>`).join("")}function f(){new l(".gallery a",{navText:["&#5176;","&#5171;"],captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector(".find-form"),n=document.querySelector(".galleriesBox");document.querySelector(".loader");a.addEventListener("submit",r=>{r.preventDefault(),n.innerHTML="";const s=new FormData(a).get("find-text");s!==""&&(n.innerHTML='<div class="loader"></div>',u(s).then(o=>{if(o.hits.length===0){m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";return}const e=d(o.hits);n.innerHTML=e,f()}).catch(o=>console.log(o)).finally(()=>{r.target.reset()}))});
//# sourceMappingURL=commonHelpers.js.map