import{n as o,g as _}from"./index-e5c19b30.js";var l=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"partners-page__item",class:r.partner.id==="627e06bcb81b550024d9c700"?"partners-page__item_fitted":""},[e("a",{staticClass:"partners-page__link",style:{"background-color":r.partner.background},attrs:{href:r.partner.link}},[e("img",{attrs:{src:`${r.partner.logo}`,alt:""}})])])},c=[];const i={name:"Partner",props:["partner"]},a={};var p=o(i,l,c,!1,u,null,null,null);function u(r){for(let t in a)this[t]=a[t]}const v=function(){return p.exports}(),d=_`
  query getPartners {
    partners {
      id
      logo
      background
      link
    }
  }
`;var f=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"partners-page wrapper_partners"},[r.$apollo.queries.partners.loading?r._e():e("div",{staticClass:"partners-page__items"},r._l(r.partners,function(n){return e("Partner",{key:n.id,attrs:{partner:n}})}),1)])},m=[];const g={data(){return{partners:[]}},name:"Partners",components:{Partner:v},apollo:{partners:{query:d}}},s={};var $=o(g,f,m,!1,h,null,null,null);function h(r){for(let t in s)this[t]=s[t]}const P=function(){return $.exports}();export{P as default};
