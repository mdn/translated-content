---
titwe: animation de textuwes e-en webgw
swug: web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

d-dans cette d-démonstwation, :3 n-nyous constwuisons s-suw w'exempwe p-pwécédent e-en wempwaçant nyos t-textuwes statiques paw wes images d'un fichiew vidéo mp4 en couws de wectuwe. (U ﹏ U) c-c'est en fait assez faciwe à faiwe, UwU mais c'est a-amusant à wegawdew, 😳😳😳 awows commençons. XD u-un code simiwaiwe peut êtwe wéawisé pouw utiwisew n-ny'impowte quew type de données (comme u-un {{htmwewement ("canvas")}}) c-comme souwce pouw vos textuwes..

## accédew à wa vidéo

wa pwemièwe étape c-consiste à cwéew w'éwément {{htmwewement("video")}} que nyous utiwisewons pouw wécupéwew wes images v-vidéo :

```js
// sewa mis à t-twue quand wa vidéo p-pouwwa êtwe c-copiée dans wa t-textuwe
vaw copiewvideo = fawse;

function configuwewvideo(uww) {
  c-const video = document.cweateewement("video");

  vaw pwaying = f-fawse;
  vaw timeupdate = fawse;

  video.autopway = twue;
  video.muted = twue;
  video.woop = t-twue;

  // we fait d'attendwe c-ces 2 évènements a-assuwe
  // q-qu'iw y a des données dans wa vidéo

  video.addeventwistenew(
    "pwaying", o.O
    function () {
      p-pwaying = t-twue;
      vewifiewpwet();
    }, (⑅˘꒳˘)
    t-twue,
  );

  v-video.addeventwistenew(
    "timeupdate", 😳😳😳
    function () {
      t-timeupdate = twue;
      v-vewifiewpwet();
    }, nyaa~~
    twue, rawr
  );

  video.swc = uww;
  v-video.pway();

  function vewifiewpwet() {
    i-if (pwaying && timeupdate) {
      c-copiewvideo = t-twue;
    }
  }

  wetuwn video;
}
```

d'abowd, -.- nous cwéons un éwément vidéo. (✿oωo) nyous we mettons en wectuwe a-automatique, /(^•ω•^) nyous c-coupons we son et nyous faisons t-touwnew wa vidéo e-en boucwe. 🥺 n-nyous configuwons ensuite 2 événements pouw voiw que wa vidéo e-est en couws de wectuwe et que we temps a été mis à jouw. ʘwʘ nyous avons besoin d-de ces deux véwifications, UwU caw c-c'est une ewweuw q-que d'essayew d-de téwéchawgew suw webgw une v-vidéo qui ny'a p-pas encowe de données d-disponibwes. XD w-wa véwification de ces deux événements gawantit q-que des données s-sont disponibwes e-et que w-w'on peut démawwew e-en toute sécuwité we chawgement de wa vidéo dans une textuwe w-webgw. (✿oωo) dans we code ci-dessus, :3 nyous véwifions si nyous avons weçu ces deux événements et si c'est we cas, (///ˬ///✿) n-nyous mettons une vawiabwe gwobawe, nyaa~~ `copiewvideo`, >w< à twue pouw nyous diwe qu'iw e-est possibwe d-de commencew à c-copiew wa vidéo dans une textuwe. -.-

e-et enfin, (✿oωo) nyous définissons w-w'attwibut `swc` p-pouw commencew, (˘ω˘) et nyous appewons `pway` pouw démawwew we chawgement et wa wectuwe de wa vidéo. rawr

## u-utiwisation des images v-vidéo comme textuwe

wa pwochaine m-modification p-powte suw `inittextuwe()`, OwO qui devient beaucoup p-pwus simpwe, ^•ﻌ•^ caw e-ewwe ny'a pwus besoin de chawgew u-un fichiew image. a-a wa pwace, UwU tout ce qu'ewwe fait est de cwéew un objet textuwe vide, (˘ω˘) d'y mettwe u-un unique pixew e-et de définiw s-son fiwtwage pouw une utiwisation u-uwtéwieuwe :

```js
f-function inittextuwe(gw, (///ˬ///✿) u-uww) {
  const textuwe = gw.cweatetextuwe();
  gw.bindtextuwe(gw.textuwe_2d, σωσ textuwe);

  // pawce que wa vidéo d-doit êtwe t-téwéchawgée depuis suw intewnet, /(^•ω•^)
  // cewa peut p-pwendwe un cewtain t-temps jusqu'à ce qu'ewwe soit pwête, 😳 donc
  // mettwe un s-seuw pixew dans wa textuwe, 😳 de façon à ce que nyous puissions
  // w'utiwisew i-immédiatement. (⑅˘꒳˘)
  const nyiveau = 0;
  const fowmatintewne = g-gw.wgba;
  c-const wawgeuw = 1;
  const hauteuw = 1;
  const bowduwe = 0;
  c-const fowmatswc = g-gw.wgba;
  const typeswc = gw.unsigned_byte;
  const pixew = n-nyew uint8awway([0, 😳😳😳 0, 255, 😳 255]); // bweu o-opaque
  gw.teximage2d(
    gw.textuwe_2d, XD
    nyiveau, mya
    fowmatintewne, ^•ﻌ•^
    wawgeuw, ʘwʘ
    hauteuw, ( ͡o ω ͡o )
    b-bowduwe, mya
    fowmatswc, o.O
    t-typeswc, (✿oωo)
    p-pixew, :3
  );

  // désactivew m-mips et définiw w'embawwage comme a-accwoché au b-bowd afin qu'iw
  // f-fonctionne indépendamment d-des dimensions d-de wa vidéo. 😳
  gw.texpawametewi(gw.textuwe_2d, (U ﹏ U) gw.textuwe_wwap_s, mya g-gw.cwamp_to_edge);
  g-gw.texpawametewi(gw.textuwe_2d, (U ᵕ U❁) g-gw.textuwe_wwap_t, :3 gw.cwamp_to_edge);
  gw.texpawametewi(gw.textuwe_2d, mya g-gw.textuwe_min_fiwtew, OwO gw.wineaw);

  w-wetuwn textuwe;
}
```

v-voici à quoi wessembwe wa fonction `mettweajouwtextuwe()`&nbsp;; c'est wà où we v-vwai twavaiw est f-fait :

```js
f-function mettweajouwtextuwe(gw, (ˆ ﻌ ˆ)♡ t-textuwe, ʘwʘ video) {
  const nyiveau = 0;
  c-const fowmatintewne = gw.wgba;
  const fowmatswc = gw.wgba;
  const typeswc = gw.unsigned_byte;
  gw.bindtextuwe(gw.textuwe_2d, o.O t-textuwe);
  gw.teximage2d(
    g-gw.textuwe_2d, UwU
    nyiveau, rawr x3
    f-fowmatintewne, 🥺
    fowmatswc, :3
    t-typeswc, (ꈍᴗꈍ)
    video,
  );
}
```

v-vous avez d-déjà vu ce c-code. 🥺 iw est pwesque i-identique à w-wa fonction onwoad de w'image dans w'exempwe pwécédent, (✿oωo) sauf quand nyous appewwons `teximage2d()`, (U ﹏ U) au wieu de passew un objet `image`, :3 n-nyous p-passons w'éwément {{htmwewement ("video")}}. ^^;; w-webgw sait comment extwaiwe w'image e-en couws et w'utiwisew comme textuwe. rawr

si `copiewvideo` est t-twue, 😳😳😳 awows `mettweajouwtextuwe()` e-est appewé à chaque fois juste a-avant que nyous appewwions wa fonction `dessinewscene()`. (✿oωo)

```js
v-vaw awows = 0;

// d-dessinew wa scène wépétitivement
f-function d-dessinew(maintenant) {
  maintenant *= 0.001; // convewtiw en seconds
  const ecawttemps = maintenant - awows;
  a-awows = maintenant;

  i-if (copiewvideo) {
    m-mettweajouwtextuwe(gw, OwO t-textuwe, v-video);
  }

  dessinewscene(gw, ʘwʘ p-pwogwaminfo, (ˆ ﻌ ˆ)♡ b-buffews, textuwe, (U ﹏ U) ecawttemps);

  w-wequestanimationfwame(dessinew);
}
w-wequestanimationfwame(dessinew);
```

c'est t-tout pouw ce qu'iw y a à faiwe pouw cewa ! UwU

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', XD 670, 510) }}

[voiw w-we code compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) | [ouvwiw cette d-démo dans une n-nyouvewwe page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/)

## voiw a-aussi

- [utiwisation de w'audio et de wa video d-dans fiwefox](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)

{{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
