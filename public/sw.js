if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>i(s,r),c={module:{uri:r},exports:a,require:o};e[r]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(l(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddModal.7496e60c.js",revision:null},{url:"assets/AddModal.83f021c5.css",revision:null},{url:"assets/AppPreferences.d0c504d1.js",revision:null},{url:"assets/ChangeLocationModal.e1218f5d.js",revision:null},{url:"assets/ConfirmDeleteModal.e43772f6.js",revision:null},{url:"assets/ConfirmShutdownModal.15d5e5d5.js",revision:null},{url:"assets/CreateCategoryDialog.10387325.js",revision:null},{url:"assets/CreateTagDialog.ee0c7660.js",revision:null},{url:"assets/Dashboard.200b78c6.js",revision:null},{url:"assets/Dashboard.e83591f1.css",revision:null},{url:"assets/FeedForm.c88c453d.js",revision:null},{url:"assets/index.01c6b329.js",revision:null},{url:"assets/index.12e5dbd2.css",revision:null},{url:"assets/index.bc048213.css",revision:null},{url:"assets/Login.aa4bcdf7.js",revision:null},{url:"assets/MagnetHandler.7227ff8d.js",revision:null},{url:"assets/PluginManager.7bde7ff2.js",revision:null},{url:"assets/RenameModal.65e41a0c.js",revision:null},{url:"assets/RssArticles.0d59097c.js",revision:null},{url:"assets/RssArticles.12e84720.css",revision:null},{url:"assets/RuleForm.6c500ab6.js",revision:null},{url:"assets/SearchModal.63d7470e.js",revision:null},{url:"assets/SearchModal.65d2ef8b.css",revision:null},{url:"assets/Settings.3860a7e6.css",revision:null},{url:"assets/Settings.c8a35114.js",revision:null},{url:"assets/ShareLimitInput.7a2c8048.js",revision:null},{url:"assets/ShareLimitModal.64b8852a.js",revision:null},{url:"assets/ShareLimitModal.a6ce7612.css",revision:null},{url:"assets/SpeedLimitModal.21a0fe53.js",revision:null},{url:"assets/TorrentDetail.2afca038.css",revision:null},{url:"assets/TorrentDetail.fe76bf1b.js",revision:null},{url:"assets/VCheckbox.41c8ef09.js",revision:null},{url:"assets/VCheckbox.9020f9ce.css",revision:null},{url:"assets/VContainer.85bdb040.js",revision:null},{url:"assets/VDataTable.d676ab1c.css",revision:null},{url:"assets/VDataTable.ffa1a78f.js",revision:null},{url:"assets/VDialog.1c2aa677.css",revision:null},{url:"assets/VDialog.8f866642.js",revision:null},{url:"assets/VForm.7e704605.js",revision:null},{url:"assets/VSwitch.88ecae5e.css",revision:null},{url:"assets/VSwitch.9243ca95.js",revision:null},{url:"assets/VTabItem.6d2ee3b7.css",revision:null},{url:"assets/VTabItem.abb39a2b.js",revision:null},{url:"assets/VTextarea.17264ed0.js",revision:null},{url:"assets/VTextarea.eb1b260f.css",revision:null},{url:"assets/vue.ea0348c7.js",revision:null},{url:"favicon.ico",revision:"33590c4e1f08d767c3290b96f00a91ee"},{url:"icons/android-chrome-192x192.png",revision:"d0419aec44c074ae022a0052821a545d"},{url:"icons/android-chrome-512x512.png",revision:"5e8e59e9954cf4c49d252fdd6e2c1fc1"},{url:"icons/android-chrome-maskable-192x192.png",revision:"577770f3910bcea8b215d408285c283f"},{url:"icons/android-chrome-maskable-512x512.png",revision:"a5c84260cf16b4562102ddf5069d4832"},{url:"icons/apple-touch-icon.png",revision:"998f96b230c37650d3a21c59e90dcc15"},{url:"icons/favicon-16x16.png",revision:"818e575cb13df1e1d852c21e22c93556"},{url:"icons/favicon-32x32.png",revision:"728c786ff66b557a25a8941300acfd43"},{url:"icons/msapplication-icon-144x144.png",revision:"90c0ad433d634194c32b4b0e05103cd3"},{url:"icons/safari-pinned-tab.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"img/icons/favicon.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"index.html",revision:"405c7b9da45b4688a367ed77e0296a67"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"33590c4e1f08d767c3290b96f00a91ee"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icons/android-chrome-192x192.png",revision:"d0419aec44c074ae022a0052821a545d"},{url:"./icons/android-chrome-512x512.png",revision:"5e8e59e9954cf4c49d252fdd6e2c1fc1"},{url:"./icons/android-chrome-maskable-192x192.png",revision:"577770f3910bcea8b215d408285c283f"},{url:"./icons/android-chrome-maskable-512x512.png",revision:"a5c84260cf16b4562102ddf5069d4832"},{url:"./icons/apple-touch-icon.png",revision:"998f96b230c37650d3a21c59e90dcc15"},{url:"./icons/safari-pinned-tab.svg",revision:"2de763e60123a9b2398e4b03c42340a5"},{url:"./icons/msapplication-icon-144x144.png",revision:"90c0ad433d634194c32b4b0e05103cd3"},{url:"manifest.webmanifest",revision:"e78d796e50baff390ac5cbb3b0091620"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
