import{m as o}from"./vue.ea0348c7.js";import{M as i,F as l,a0 as r,l as _,r as c,Q as u,s as p,t as m,V as d,v as h,z as g,A as f,B as x,a1 as C,a2 as v,a3 as y,a4 as k,a as w,a5 as L,E as P,x as n}from"./index.ff645a05.js";import{_ as b}from"./VDialog.8f866642.js";import{_ as T}from"./VContainer.85bdb040.js";const V={name:"ChangeLocationModal",mixins:[i,l],props:{hashes:Array},data(){return{newPath:"",mdiFile:r,mdiFolder:_,mdiClose:c}},computed:{...o(["getTorrent","getSettings"]),dialogWidth(){return this.phoneLayout?"100%":"750px"},torrents(){return[...this.hashes.map(a=>this.getTorrent(a))]},isPhone(){return this.$vuetify.breakpoint.xsOnly}},created(){this.newPath=this.torrents[0].savePath},methods:{setLocation(){u.setTorrentLocation(this.hashes,this.newPath),this.close()},close(){this.dialog=!1}}};var F=function(){var t=this,e=t._self._c;return e(b,{attrs:{scrollable:"",width:t.dialogWidth,fullscreen:t.isPhone},model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e(m,[e(d,{staticClass:"pa-0"},[e(h,{staticClass:"ma-4 primarytext--text"},[e("h3",[t._v(t._s(t.$t("modals.changeLocation.title")))])])],1),e(g,[e(T,[e(f,[e(x,[e(C,{staticClass:"mb-4",attrs:{flat:""}},t._l(t.torrents,function(s){return e(v,{key:s.hash,attrs:{else:""}},[e(y,[e(k,{staticClass:"text-wrap"},[t._v(" "+t._s(s.name)+" ")])],1)],1)}),1),e(w,{attrs:{label:t.$t("directory"),"prepend-icon":t.mdiFolder},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.setLocation.apply(null,arguments)}},model:{value:t.newPath,callback:function(s){t.newPath=s},expression:"newPath"}})],1)],1)],1)],1),e(L),e(P,{staticClass:"justify-end"},[e(n,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.setLocation}},[t._v(" "+t._s(t.$t("save"))+" ")]),e(n,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")])],1)],1)],1)},$=[],M=p(V,F,$,!1,null,null,null,null);const O=M.exports;export{O as default};
