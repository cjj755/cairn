/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "revision": "e4f8dca04c4117bac3f42319815602f6"
=======
    "revision": "1da24d0865272f325812a0d5e6e4b596"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/css/0.styles.31e66d80.css",
    "revision": "11d848f237e74dea45032bc1f8ecd73e"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "4096fd3ae7506bf13d8f660c8d29ea04"
  },
  {
    "url": "assets/img/hero2.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "57669a2355dce457471fa9259d0367df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js_imgs/js循环机制.jpg",
    "revision": "c6af3b390a01d09cfde18f883a17ca35"
  },
  {
    "url": "assets/js/1.80ba04c7.js",
    "revision": "ae4057523f9028c9bd8795d518d48e6f"
  },
  {
    "url": "assets/js/10.8a933fae.js",
    "revision": "5bf28b2b7bb28d4a906425f4ec7650fa"
  },
  {
    "url": "assets/js/11.b348d638.js",
    "revision": "39baf14827ac0c5b1125ade9a889dfee"
  },
  {
    "url": "assets/js/12.c901df62.js",
    "revision": "223b4713a21875a0c9599c20057ba6e4"
  },
  {
    "url": "assets/js/13.816a93d7.js",
    "revision": "b61831b573b4ebddb0cafb3479df9aab"
  },
  {
    "url": "assets/js/14.0ed80cb4.js",
    "revision": "3b7742a67931a891ae78dbf6feaea6bd"
  },
  {
    "url": "assets/js/15.c2889a45.js",
    "revision": "dcc4fbc34870883c358f1a1c4606821e"
  },
  {
    "url": "assets/js/16.2824987e.js",
    "revision": "99e947ce4251cbb1fde94b0e0a07887b"
  },
  {
    "url": "assets/js/17.f5878b60.js",
    "revision": "15627811731089b5b8564e32d3acfcf8"
  },
  {
    "url": "assets/js/18.ba3117c2.js",
    "revision": "9e4f7c5ca6b2ea517b58114a3e70cb1d"
  },
  {
    "url": "assets/js/19.ecb49bc6.js",
    "revision": "4c9fbf9410fa8fd13dc93fb42a111adb"
  },
  {
    "url": "assets/js/2.08c95936.js",
    "revision": "4b1128f7880d9bb5f7c65a5262843c4a"
  },
  {
    "url": "assets/js/20.05fe0eb6.js",
    "revision": "27bcd11aee5e4c3ee1bd4d857aa0fbb7"
  },
  {
    "url": "assets/js/21.b4c97262.js",
    "revision": "4934af3b56a65dcaca52ecd30e852a1c"
  },
  {
    "url": "assets/js/22.f1440856.js",
    "revision": "24f58363a4694bd379e391e8411fd1e5"
  },
  {
    "url": "assets/js/23.9acdaad1.js",
    "revision": "de968d21b1fb7990408400b52ce4ada5"
  },
  {
    "url": "assets/js/24.915c148b.js",
    "revision": "2bb7f0425d7dd46050ee78c35a5cddb2"
  },
  {
    "url": "assets/js/25.05fae5b3.js",
    "revision": "354802b0e8433dc04bc905888539ce0d"
  },
  {
    "url": "assets/js/26.76d2cf6c.js",
    "revision": "9b89337bef40f9ea27a61ce6981a3a07"
  },
  {
    "url": "assets/js/27.6afa3fcc.js",
    "revision": "c1676aa9e668bf1696f36f495a8ab61b"
  },
  {
    "url": "assets/js/28.32a746a5.js",
    "revision": "a00f7d54c954c1bcf9240f61fd0ae3a2"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/29.87ecd3fa.js",
    "revision": "206e76739e2e0d35c45ba082ab60bc0b"
=======
    "url": "assets/js/29.352d2ec1.js",
    "revision": "9c25e109c1997b3d4351c757d5038b40"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/3.d4b70d98.js",
    "revision": "64ed7b1327736d18a8ef98d78bf8cad5"
  },
  {
    "url": "assets/js/30.e242d165.js",
    "revision": "e9a8746578e3fb0f4d296ff0c0ee5285"
  },
  {
    "url": "assets/js/31.727cbc20.js",
    "revision": "be05c0a41b8f605cda86cf8635200b56"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/32.06889885.js",
    "revision": "21b04aa35888efac6dc911a6218d07da"
  },
  {
    "url": "assets/js/33.5eb804a4.js",
    "revision": "c332ca15fe783a2e90bc88ef696d34b5"
=======
    "url": "assets/js/32.13fca849.js",
    "revision": "1182a0a3d3df4c0938f34d4f4ad25009"
  },
  {
    "url": "assets/js/33.f7ffc228.js",
    "revision": "a9e3d1b3f9eaa7df940cbf86e1a041c8"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/34.ca6991c2.js",
    "revision": "88e390f19e935afce79840d7b1d99cab"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/35.dd6a1dfd.js",
    "revision": "6d3d6248d0248507f42e388220abd90c"
  },
  {
    "url": "assets/js/36.8dd926e1.js",
    "revision": "c76c366882d7367312b32c8f944ed3e0"
=======
    "url": "assets/js/35.d8294b30.js",
    "revision": "dabaacb806df10bf00ab795896ca83f2"
  },
  {
    "url": "assets/js/36.1a6aeb07.js",
    "revision": "1320454095640061089bc47ee9210d47"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/37.214a8412.js",
    "revision": "ddb80629fefe6fc61ebf1f8fb277a300"
  },
  {
    "url": "assets/js/38.84559e07.js",
    "revision": "abe8b5877fe6919b4d59cbd410a0eca5"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/39.798512fd.js",
    "revision": "f4f6fa53dfbafca2c7fbf2af57a3e58b"
=======
    "url": "assets/js/39.2a5c7243.js",
    "revision": "ad9eec6329fbc76090d207ae237e9a58"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/4.58c6febe.js",
    "revision": "c44e766d3542e09661f189be51bb802e"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/40.de3559e1.js",
    "revision": "e9ff85b7aa9440933f8722daf3a090a3"
=======
    "url": "assets/js/40.e728d85b.js",
    "revision": "0164a1f0604bdec9a1ad4b2858ca7cae"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/41.c05865a0.js",
    "revision": "4dc4de75a39963a2bc8495b7b180acd0"
  },
  {
    "url": "assets/js/42.7862f68d.js",
    "revision": "d82595b052299a2edbd04dc60fd907bf"
  },
  {
    "url": "assets/js/43.bd5a0b9b.js",
    "revision": "6902e853c1545faedca343e936acc597"
  },
  {
    "url": "assets/js/44.a3372c92.js",
    "revision": "a00881b5a49088aaf328156b1faaa42e"
  },
  {
    "url": "assets/js/45.3036b2fe.js",
    "revision": "6156c6c635b6efc5fdda17be2f648e7c"
  },
  {
    "url": "assets/js/46.e3cb5827.js",
    "revision": "de0357f869a48f0e1f92e41e75711079"
  },
  {
    "url": "assets/js/47.a046868b.js",
    "revision": "0d5f260902d475fd9993eb04ac7c2173"
  },
  {
    "url": "assets/js/5.f48a3733.js",
    "revision": "ec1b2a822461edd785c224cd48e5dcae"
  },
  {
    "url": "assets/js/6.7e3c1d96.js",
    "revision": "fd66697110fa2a76d5ccbc1bb5e49e80"
  },
  {
    "url": "assets/js/7.ff36334e.js",
    "revision": "9a19422eddc16711a204150e2dfa086d"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "assets/js/app.c4b7f1ba.js",
    "revision": "1754e279d6aeba5d3a2a4319d0572287"
=======
    "url": "assets/js/app.9d9028d3.js",
    "revision": "f15be91b06e82c15dea7369673e2d750"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "assets/js/g6.min.js",
    "revision": "f9f90a237f1fc1d8ed0f28f681262e9c"
  },
  {
    "url": "assets/js/vendors~docsearch.d9992789.js",
    "revision": "6de2aa96a3a1b7f388a86b7ffed76452"
  },
  {
    "url": "assets/linux_img/nginx-download.png",
    "revision": "35204834157a937c9a35b4c5bbdc5006"
  },
  {
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "url": "data/mindMap.js",
    "revision": "7308cbfe387ccb849141932aea42e20f"
=======
    "url": "git/index.html",
    "revision": "405534d14980d469b66818c6496ec412"
>>>>>>> master:dist/service-worker.js
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
<<<<<<< HEAD:docs/.vuepress/dist/service-worker.js
    "revision": "ba1ec340b52fd6d0a1c584d881f3b41c"
  },
  {
    "url": "java/mybatisplus/index.html",
    "revision": "88caf52c05e5e3bdb909183dfbcb5314"
  },
  {
    "url": "java/spring/index.html",
    "revision": "d01c67bce820d44776274418bc0a4265"
  },
  {
    "url": "java/springBoot/index.html",
    "revision": "7986692ee5e560e8666a67a808f3cebb"
  },
  {
    "url": "javascript/js/Css3.html",
    "revision": "fa1da8640ba2f8a9688c3fa2649dc4c2"
  },
  {
    "url": "javascript/js/Es6.html",
    "revision": "a3c14997d3abddc9da14a30f9c365426"
  },
  {
    "url": "javascript/js/Html.html",
    "revision": "165116ad5a83187ad0f6f4eb7a5ac6a1"
  },
  {
    "url": "javascript/js/index.html",
    "revision": "bb30751b3c6c0a764ee6fd9c882db823"
  },
  {
    "url": "javascript/js/Plugins.html",
    "revision": "844d346545c5e1bf5cd3e366ff31ccdc"
  },
  {
    "url": "javascript/react/index.html",
    "revision": "7fa3374eccdef06733a9ffd6a671bff0"
  },
  {
    "url": "javascript/react/react-router.html",
    "revision": "69541a079a0599628e88f7ea47f27ca9"
  },
  {
    "url": "javascript/react/redux.html",
    "revision": "0069d584791144ede3314c96e48b6fb8"
  },
  {
    "url": "javascript/vue/index.html",
    "revision": "759d569eba15fadf7386e3155d1ad4fb"
  },
  {
    "url": "javascript/vue/vue3.html",
    "revision": "19fee5fb0cd48bcbd4a3a0b840c7b618"
  },
  {
    "url": "MindMap.html",
    "revision": "b5e3a4d83b0545d4b07577ce7804df4d"
  },
  {
    "url": "other/git/index.html",
    "revision": "bfee7a1a3cb6562578287102d984f58c"
  },
  {
    "url": "other/linux/docker.html",
    "revision": "efae5c4321a6d3867e51ed249921f0de"
  },
  {
    "url": "other/linux/nginx.html",
    "revision": "ab5b1b80d5dcb0f3c0639a80c210bd49"
  },
  {
    "url": "other/mysql/index.html",
    "revision": "118016a8b12c2d1f47969dafa489208b"
=======
    "revision": "424dd334543e300f3f5d76d9f461445d"
  },
  {
    "url": "javascript/css/index.html",
    "revision": "4ecd81f3fd06517f5702b4d37a337f7d"
  },
  {
    "url": "javascript/html/index.html",
    "revision": "8bf807f62ad5a9c300556190e40304ff"
  },
  {
    "url": "javascript/js/Es6.html",
    "revision": "2b6f2f98c2c37b614dbbecdf2e3da8e7"
  },
  {
    "url": "javascript/js/index.html",
    "revision": "f1e111217945a6e0e882febe425acc69"
  },
  {
    "url": "javascript/js/Plugins.html",
    "revision": "41075e811f2d7419d30782f771990e09"
  },
  {
    "url": "javascript/react/index.html",
    "revision": "ad025e61cd3270cdab6e1102317e4909"
  },
  {
    "url": "javascript/react/react-router.html",
    "revision": "92dbc7bee96059007ac8d38aa588e4ad"
  },
  {
    "url": "javascript/react/redux.html",
    "revision": "e5f629f4d9fe9709b4f27400aa426e1e"
  },
  {
    "url": "javascript/vue/index.html",
    "revision": "12647cb5e49e7860d02f11c20e29e02b"
  },
  {
    "url": "javascript/vue/vue3.html",
    "revision": "92625de19ccb157ee559a5b3f2e69409"
  },
  {
    "url": "MindMap.html",
    "revision": "c473873e890c87ad9896c07022c7541a"
  },
  {
    "url": "mybatisplus/index.html",
    "revision": "773793a986560ae778d3ea6527684cf0"
  },
  {
    "url": "mysql/index.html",
    "revision": "eb745788936abf8dcef91353a99d1d5f"
  },
  {
    "url": "spring/index.html",
    "revision": "753a7f0fe1c3e0316035514eb60b41a2"
  },
  {
    "url": "springBoot/index.html",
    "revision": "49d164b588451654f8e14129df85529a"
>>>>>>> master:dist/service-worker.js
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
