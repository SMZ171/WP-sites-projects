!function(){"use strict";var e;e=()=>{const e=document.getElementsByClassName("otter-masonry"),t={root:null,rootMargin:"0px",threshold:[0]};Array.from(e).forEach((e=>{const r=setInterval((()=>{const n=e.querySelector(".wp-block-gallery");if(window?.Macy){const o=e.querySelector(".blocks-gallery-grid")||n,a=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting&&0<=t.intersectionRect.height){const t=/columns-(\d)/,r=void 0!==e.dataset.margin?Number(e.dataset.margin):10;let c=Array.from(n.classList).find((e=>null!==t.exec(e)));c=t.exec(c),c=c?Number(c[1]):3,n.removeAttribute("class"),window.Macy({container:o,trueOrder:!1,waitForImages:!1,margin:r,columns:c,breakAt:{1200:Math.min(c,4),840:Math.min(c,3),740:Math.min(c,2),640:Math.min(c,1)}}),a.unobserve(o)}}))}),t);a.observe(o),clearInterval(r)}}),1500)}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}();