!function(){"use strict";const t=window;t.blogherads=t.blogherads||{},t.blogherads.adq=t.blogherads.adq||[];const e=t.blogherads,a=(t,a)=>{e.adq.push((()=>{e.push1PDEvent(t,a)}))},r=[{tag:"a",handler:t=>{const{currentTarget:e}=t;if(!(e instanceof Element))return;const r=e.getAttribute("href");let n=e.getAttribute("data-xid");if(!n&&r){const t=/xid:([^&/])*/gm.exec(r);t&&(n=t[0])}n=n?.replace("xid:","")||"";const c=e.hasAttribute("custom-ga-data")?JSON.parse(e.getAttribute("custom-ga-data")):{},i=!(!c["1pd"]&&!e.getAttribute("data-1pd")),o=c.product||{},d=o.category||e.getAttribute("data-category-name"),s=o.currency||e.getAttribute("data-currency")||"US",u=o.name||e.getAttribute("data-product-name"),l=o.price||e.getAttribute("data-price"),g=c.type||e.getAttribute("data-type");let m=c.partner||e.getAttribute("data-partner");if(!m?.length&&r?.length){const t=e.hostname?.split(".");t&&(t.pop(),t.length>1&&t.shift(),m=t.join(),["amazon","amzn"].includes(m)&&(m="Amazon"))}(i||n?.length>0||u?.length>0||g?.length>0)&&a("ecommerce_click",{href:r,xid:n,data_partner:m,data_price:l,data_product_name:u,data_product_category:d,data_product_currency:s,data_type:g})}},{tag:"button",handler:t=>{const{currentTarget:e}=t;if(!(e instanceof Element))return;if(!/(sign up|subscribe|newsletter)/.test(e.innerHTML.toLowerCase()))return;const r={source_id:e.className,source_value:e.innerHTML.trim(),email:""};let n=e;for(;n&&"FORM"!==n.tagName;)n=n.parentElement;n&&Array.from(n.children).forEach((t=>{if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))return;const e=t.getAttribute("name")?.toLowerCase(),a=t.getAttribute("id")?.toLowerCase(),n=t.value;"source"===e&&(r.source_id=t.id,r.source_value=n),(e?.indexOf("email")>=0||a?.indexOf("email")>=0)&&(r.email=n)})),a("newsletter_signup_click",r)}}];jQuery(document).ready((()=>{r.forEach((t=>{Array.from(document.getElementsByTagName(t.tag)).forEach((e=>{e.addEventListener("click",t.handler)}))}))}))}();