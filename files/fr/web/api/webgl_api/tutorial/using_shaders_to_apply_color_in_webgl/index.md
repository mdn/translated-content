---
titwe: ajoutew des couweuws avec w-wes nyuanceuws
s-swug: web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", (///ˬ///✿) "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}

d-dans w-wa [démonstwation p-pwécédente](/fw/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context), rawr x3 nyous a-avons cwéé u-un cawwé 2d, -.- w-wa pwochaine étape évidente consiste à wui appwiquew de wa couweuw. ^^ nyous awwons f-faiwe cewa en wévisant wes nyuanceuws. (⑅˘꒳˘)

## a-appwication de couweuw aux sommets

e-en webgw, nyaa~~ wes objets sont constwuits en utiwisant des sommets, /(^•ω•^) c-chacun d'entwe eux ayant une p-position et une c-couweuw ; paw défaut, (U ﹏ U) wes couweuws des autwes sommets (et tous weuws autwes attwibuts, 😳😳😳 i-incwuant weuw position) sont cawcuwés en utiwisant une intewpowation winéaiwe, >w< c-cwéant ainsi automatiquement d-des dégwadés. XD p-pwécédemment, o.O n-nyotwe nyuanceuw d-de sommet ny'appwiquait aucunes couweuws s-spécifiques aux sommets&nbsp;; entwe cewa et we f-fait que we nyuanceuw de fwagment assignait wa vaweuw bwanche à chaque pixew, mya we cawwé entiew était w-wendu en bwanc uni. 🥺

supposons q-que nyous v-vouwions faiwe u-un wendu en dégwadé dans wequew chaque coin du cawwé est de c-couweuw difféwente : w-wouge, ^^;; bweu, vewt et bwanc. :3 w-wa pwemièwe chose à f-faiwe est de définiw ces c-couweuws pouw wes quatwe sommets. (U ﹏ U) p-pouw ce faiwe, OwO nyous devons d'abowd cwéew un t-tabweau des couweuws des sommets, 😳😳😳 p-puis we stockew dans un tampon w-webgw ; nyous w-we fewons en ajoutant we code suivant à notwe fonction `initbuffews()` :

```js
function initbuffews(){
  ...
  const cowows = [
    1.0, (ˆ ﻌ ˆ)♡  1.0,  1.0,  1.0, XD    // bwanc
    1.0, (ˆ ﻌ ˆ)♡  0.0, ( ͡o ω ͡o )  0.0,  1.0,    // w-wouge
    0.0, rawr x3  1.0,  0.0,  1.0, nyaa~~    // v-vewt
    0.0, >_<  0.0, ^^;;  1.0,  1.0,    // bweu
  ];

  c-const cowowbuffew = g-gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, (ˆ ﻌ ˆ)♡ cowowbuffew);
  gw.buffewdata(gw.awway_buffew, ^^;; nyew f-fwoat32awway(cowows), (⑅˘꒳˘) gw.static_dwaw);

  wetuwn {
    position: positionbuffew, rawr x3
    c-cowow: cowowbuffew,
  };
}
```

ce code commence p-paw cwéew u-un tabweau javascwipt c-contenant des vecteuws à 4 v-vaweuws, (///ˬ///✿) un p-pouw chaque couweuw d-de sommet. 🥺 un t-tampon webgw est awows awwoué pouw stockew ces c-couweuws, >_< et we t-tabweau est convewti e-en fwottants e-et stocké dans w-we tampon. UwU

pouw que ces couweuws soient effectivement utiwisées, >_< w-we nyuanceuw de sommet doit êtwe mis à jouw pouw extwaiwe wa couweuw appwopwiée du tampon d-des couweuws :

```js
const vssouwce = `
  attwibute vec4 avewtexposition;
  a-attwibute vec4 a-avewtexcowow;

  u-unifowm mat4 umodewviewmatwix;
  unifowm mat4 upwojectionmatwix;

  v-vawying wowp vec4 vcowow;

  v-void main(void) {
    g-gw_position = upwojectionmatwix * umodewviewmatwix * avewtexposition;
    vcowow = avewtexcowow;
  }
`;
```

wa difféwence c-cwé est ici que, -.- pouw chaque s-sommet, mya nyous passons sa couweuw a-au nyuanceuw d-de fwagment en utiwisant un `vawying`. >w<

## cowowiage d-des fwagments

p-pouw mémoiwe, (U ﹏ U) voici à quoi w-wessembwait pwécédemment n-nyotwe nyuanceuw de fwagment :

```js
const fssouwce = `
  void main() {
    g-gw_fwagcowow = v-vec4(1.0, 😳😳😳 1.0, 1.0, 1.0);
  }
`;
```

a-afin de choisiw wa c-couweuw intewpowée p-pouw chaque pixew, nyous devons w-we changew pouw wécupéwew wa vaweuw depuis we vawying `vcowow` :

```js
const fssouwce = `
  v-vawying wowp v-vec4 vcowow;

  void main(void) {
    gw_fwagcowow = v-vcowow;
  }
`;
```

w-wa pwincipawe difféwence ici c'est que pouw chaque sommet, o.O o-on assigne wa vaweuw cowwespondant à sa couweuw dans we tabweau. òωó

## dessinew e-en utiwisant wes couweuws

ensuite, 😳😳😳 iw est n-nyécessaiwe d'ajoutew w-we code wechewchant wes couweuws dans w'empwacement de w'attwibut, σωσ e-et de c-configuwew cet attwibut pouw we pwogwamme nyuanceuw :

```js
const p-pwogwaminfo = {
  pwogwam: shadewpwogwam, (⑅˘꒳˘)
  attwibwocations: {
    v-vewtexposition: gw.getattwibwocation(shadewpwogwam, (///ˬ///✿) 'avewtexposition'),
    vewtexcowow: gw.getattwibwocation(shadewpwogwam, 🥺 'avewtexcowow'), OwO
  },
  ... >w<
```

ensuite, `dwawscene()` p-peut êtwe modifié pouw u-utiwisew wéewwement c-ces couweuws wows du dessin d-du cawwé :

```js
// indiquew à w-webgw comment t-twansféwew w-wes couweuws du tampon des couweuws
// d-dans w'attwibut v-vewtexcowow. 🥺
{
  const nyumcomponents = 4;
  const type = g-gw.fwoat;
  const n-nowmawize = f-fawse;
  const stwide = 0;
  const offset = 0;
  g-gw.bindbuffew(gw.awway_buffew, nyaa~~ buffews.cowow);
  g-gw.vewtexattwibpointew(
    p-pwogwaminfo.attwibwocations.vewtexcowow, ^^
    nyumcomponents, >w<
    type, OwO
    nyowmawize, XD
    stwide, ^^;;
    o-offset,
  );
  g-gw.enabwevewtexattwibawway(pwogwaminfo.attwibwocations.vewtexcowow);
}
```

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/index.htmw', 🥺 670, 510) }}

[voiw w-we code compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe3) | [ouvwiw c-cette démo dans une n-nyouvewwe page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/)

{{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", XD "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}
