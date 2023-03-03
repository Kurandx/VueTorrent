import{m as o}from"./vue.ea0348c7.js";import{M as l,F as i,a0 as r,Q as c,s as m,t as _,V as d,v as u,z as p,A as h,B as f,a as x,a5 as v,E as g,x as s,D as b}from"./index.ff645a05.js";import{_ as y}from"./VDialog.8f866642.js";import{_ as C}from"./VContainer.85bdb040.js";const k={name:"RenameModal",mixins:[l,i],props:{hash:String},data(){return{name:"",mdiFile:r}},computed:{...o(["getTorrent"]),torrent(){return this.getTorrent(this.hash)}},mounted(){document.addEventListener("keydown",this.handleKeyboardShortcut)},created(){this.name=this.torrent.name,this.isUrl()},beforeDestroy(){document.removeEventListener("keydown",this.handleKeyboardShortcut)},methods:{urlDecode(){this.name=decodeURIComponent(this.name),this.isUrl()},isUrl(){this.enableUrlDecode=!1,this.name.indexOf(" ")===-1&&/[+%]/.test(this.name)&&(this.enableUrlDecode=!0)},async rename(){await c.setTorrentName(this.hash,this.name),this.close()},close(){this.dialog=!1},handleKeyboardShortcut(n){n.key==="Escape"?this.close():n.keyCode===13&&this.rename()}}};var D=function(){var e=this,t=e._self._c;return t(y,{attrs:{scrollable:"","max-width":"750px","content-class":e.phoneLayout?"rounded-0":"rounded-form",fullscreen:e.phoneLayout},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t(_,[t(d,{staticClass:"pa-0"},[t(u,{staticClass:"ma-4 primarytext--text"},[t("h3",[e._v(e._s(e.$t("modals.rename.title")))])])],1),t(p,[t(C,[t(h,[t(f,[t(x,{attrs:{clearable:"",label:e.$t("modals.rename.torrentName"),"prepend-inner-icon":e.mdiFile},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1)],1)],1)],1),t(v),t(g,{staticClass:"justify-end"},[e.enableUrlDecode?t(s,{staticClass:"info white--text elevation-0 px-4",on:{click:e.urlDecode}},[e._v(" URL DECODE ")]):e._e(),t(b),t(s,{staticClass:"accent white--text elevation-0 px-4",on:{click:e.rename}},[e._v(" "+e._s(e.$t("save"))+" ")]),t(s,{staticClass:"error white--text elevation-0 px-4",on:{click:e.close}},[e._v(" "+e._s(e.$t("cancel"))+" ")])],1)],1)],1)},U=[],w=m(k,D,U,!1,null,null,null,null);const L=w.exports;export{L as default};
