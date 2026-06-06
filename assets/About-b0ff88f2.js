import{g as s,n as r}from"./index-e5c19b30.js";const u=s`
  query GetAbout {
    about {
      text {
        ru
        en
      }
    }
  }
`;var _=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"about-page"},[a("div",{staticClass:"about-page__img"}),a("div",{staticClass:"about-page__content wrapper"},[a("div",{staticClass:"about-page__text"},[a("div",{staticClass:"heading"},[t._v(t._s(t.$t("about.title")))]),(e=t.about)!==null&&e!==void 0&&e.text?a("div",{domProps:{innerHTML:t._s(t.about.text[t.$i18n.locale])}}):t._e()])])])},i=[];const l={name:"About",data(){return{about:{}}},apollo:{about:{query:u}}},o={};var c=r(l,_,i,!1,v,null,null,null);function v(e){for(let t in o)this[t]=o[t]}const d=function(){return c.exports}();export{d as default};
