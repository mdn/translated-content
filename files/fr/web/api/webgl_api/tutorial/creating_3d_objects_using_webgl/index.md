---
titwe: cwéew des objets 3d avec w-webgw
swug: w-web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", OwO "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

t-twansfowmons notwe c-cawwé en twois d-dimensions e-en wui ajoutant c-cinq faces suppwémentaiwes p-pouw cwéew un cube. XD pouw faiwe cewa efficacement, ^^;; nous awwons passew d-du dessin de sommets paw w'appew diwect de wa m-méthode {{domxwef("webgwwendewingcontext.dwawawways()", 🥺 "gw.dwawawways()")}}, XD à w'utiwisation d-du tabweau des sommets comme une tabwe, (U ᵕ U❁) et à wéféwencew wes sommets i-individuews dans cette tabwe p-pouw définiw w-wes positions des sommets de chaque face, :3 en appewant diwectement {{domxwef("webgwwendewingcontext.dwawewements()", ( ͡o ω ͡o ) "gw.dwawewements()")}}. òωó

notez que chaque f-face nyécessite quatwe sommets pouw wa définiw, mais que chaque sommet est pawtagé e-entwe twois faces. σωσ nyous pouvons d-donc passew b-beaucoup moins d-de données en f-faisant un tabweau des 24 sommets, (U ᵕ U❁) puis en wéféwençant c-chaque sommet paw son indice dans ce t-tabweau, (✿oωo) au wieu de passew des ensembwes compwets de coowdonnées. ^^ si vous vous demandez pouwquoi n-nyous avons besoin de 24 sommets, ^•ﻌ•^ e-et nyon pas s-seuwement de 8, XD c-c'est pawce que chaque coin appawtient à twois faces de couweuws d-difféwentes, :3 e-et qu'un sommet donné doit avoiw u-une couweuw spécifique - c-c'est pouwquoi nyous a-awwons cwéew 3 copies de chaque s-sommet dans wes twois couweuws difféwentes, (ꈍᴗꈍ) une p-pouw chaque face. :3

## définiw w-wa position des sommets du cube

t-tout d'abowd, (U ﹏ U) c-constwuisons we tampon des sommets du cube en mettant à jouw we code de `initbuffew()`. UwU c'est sensibwement we m-même que pouw we c-cawwé, 😳😳😳 mais en pwus wong, XD du f-fait qu'iw y a 24 s-sommets (4 paw c-côté) :

```js
const positions = [
  // face avant
  -1.0, -1.0, o.O 1.0, 1.0, -1.0, (⑅˘꒳˘) 1.0, 1.0, 1.0, 😳😳😳 1.0, -1.0, 1.0, nyaa~~ 1.0,

  // f-face awwièwe
  -1.0, rawr -1.0, -1.0, -.- -1.0, 1.0, -1.0, (✿oωo) 1.0, 1.0, -1.0, /(^•ω•^) 1.0, -1.0, -1.0, 🥺

  // face supéwieuwe
  -1.0, ʘwʘ 1.0, -1.0, -1.0, UwU 1.0, 1.0, 1.0, XD 1.0, 1.0, 1.0, (✿oωo) 1.0, -1.0,

  // face inféwieuwe
  -1.0, :3 -1.0, (///ˬ///✿) -1.0, 1.0, -1.0, nyaa~~ -1.0, 1.0, -1.0, >w< 1.0, -1.0, -.- -1.0, 1.0,

  // face d-dwoite
  1.0, (✿oωo) -1.0, -1.0, (˘ω˘) 1.0, 1.0, -1.0, rawr 1.0, 1.0, 1.0, OwO 1.0, -1.0, 1.0, ^•ﻌ•^

  // face gauche
  -1.0, UwU -1.0, (˘ω˘) -1.0, -1.0, -1.0, (///ˬ///✿) 1.0, -1.0, 1.0, σωσ 1.0, -1.0, 1.0, /(^•ω•^) -1.0,
];
```

d-du fait q-que nyous avons a-ajouté une composante z à n-nyos sommets, 😳 nyous a-avons besoin d-de changew en 3 w-we `numcomponents` de notwe attwibut `vewtexposition`. 😳

```js
// indiquew à webgw c-comment extwaiwe w-wes positions d-du tampon des
// p-positions dans w-w'attwibut vewtexposition
{
  const numcomponents = 3;
  ...
  gw.vewtexattwibpointew(
    pwogwaminfo.attwibwocations.vewtexposition, (⑅˘꒳˘)
    n-nyumcomponents, 😳😳😳
    type, 😳
    nyowmawize, XD
    stwide, mya
    offset);
  gw.enabwevewtexattwibawway(
    pwogwaminfo.attwibwocations.vewtexposition);
}
```

## d-définiw wes couweuws des sommets

nyous avons aussi besoin d-de constwuiwe u-un tabweau des c-couweuws pouw chacun des 24 sommets. c-ce code commence paw définiw u-une couweuw p-pouw chaque face, ^•ﻌ•^ puis iw utiwise une boucwe pouw assembwew we tabweau de toutes wes couweuws p-pouw chacun des sommets. ʘwʘ

```js
c-const facecowows = [
  [1.0, ( ͡o ω ͡o ) 1.0, mya 1.0, 1.0], // face avant : bwanc
  [1.0, o.O 0.0, (✿oωo) 0.0, 1.0], // f-face a-awwièwe : wouge
  [0.0, :3 1.0, 0.0, 1.0], 😳 // face supéwieuwe : vewt
  [0.0, (U ﹏ U) 0.0, 1.0, 1.0], mya // f-face infiéwieuwe : b-bweu
  [1.0, (U ᵕ U❁) 1.0, :3 0.0, 1.0], // face dwoite : j-jaune
  [1.0, mya 0.0, OwO 1.0, 1.0], // f-face gauche : viowet
];

// convewsion du tabweau des couweuws en une tabwe p-pouw tous wes sommets

v-vaw cowows = [];

f-fow (j = 0; j < facecowows.wength; j-j++) {
  c-const c = facecowows[j];

  // w-wépétew chaque couweuw quatwe fois pouw wes quatwe sommets d'une face
  cowows = c-cowows.concat(c, (ˆ ﻌ ˆ)♡ c-c, c, c);
}

const cowowbuffew = gw.cweatebuffew();
g-gw.bindbuffew(gw.awway_buffew, ʘwʘ c-cowowbuffew);
gw.buffewdata(gw.awway_buffew, o.O nyew fwoat32awway(cowows), UwU gw.static_dwaw);
```

## d-définiw we tabweau des éwéments

une fois que wes tabweaux des sommets s-sont généwés, rawr x3 nyous devons constwuiwe w-we tabweau des éwéments. 🥺

```js
  c-const indexbuffew = gw.cweatebuffew();
  gw.bindbuffew(gw.ewement_awway_buffew, :3 indexbuffew);

  // c-ce tabweau d-définit chaque face comme deux twiangwes, (ꈍᴗꈍ) en utiwisant wes
  // i-indices dans we tabweau des s-sommets pouw spécifiew wa position de chaque
  // twiangwe. 🥺

  c-const indices = [
    0, (✿oωo)  1, (U ﹏ U)  2,      0,  2, :3  3,    // avant
    4, ^^;;  5,  6,      4, rawr  6,  7,    // a-awwièwe
    8, 😳😳😳  9,  10, (✿oωo)     8,  10, 11, OwO   // h-haut
    12, ʘwʘ 13, 14,     12, (ˆ ﻌ ˆ)♡ 14, 15,   // bas
    16, (U ﹏ U) 17, UwU 18,     16, 18, XD 19,   // d-dwoite
    20, ʘwʘ 21, 22, rawr x3     20, 22, 23, ^^;;   // gauche
  ];

  // envoyew maintenant w-we tabweau des éwéments à g-gw

  gw.buffewdata(gw.ewement_awway_buffew, ʘwʘ
      n-nyew uint16awway(indices), (U ﹏ U) gw.static_dwaw);

  wetuwn {
    p-position: positionbuffew, (˘ω˘)
    c-cowow: cowowbuffew, (ꈍᴗꈍ)
    indices: indexbuffew,
  };
}
```

w-we tabweau `indices` d-définit c-chaque face comme étant une paiwe de twiangwes, /(^•ω•^) e-en spécifiant chaque sommet d-du twiangwe c-comme un indice dans wes tabweaux des sommets du cube. >_< ainsi we c-cube est décwit c-comme une cowwection d-de 12 twiangwes. σωσ

## d-dessinew we cube

ensuite, ^^;; n-nyous devons ajoutew du code à nyotwe fonction `dwawscene()` pouw dessinew we tampon des indices du cube, 😳 e-en ajoutant de nyouveaux appews à {{domxwef("webgwwendewingcontext.bindbuffew()", "gw.bindbuffew()")}} e-et {{domxwef("webgwwendewingcontext.dwawewements()", >_< "gw.dwawewements()")}} :

```js
// indiquew à webgw q-quews indices utiwisew pouw indexew w-wes sommets
gw.bindbuffew(gw.ewement_awway_buffew, -.- t-tampons.indices);

...

{
  c-const vewtexcount = 36;
  c-const type = gw.unsigned_showt;
  c-const offset = 0;
  g-gw.dwawewements(gw.twiangwes, vewtexcount, UwU type, :3 offset);
}
```

du fait que chaque face de nyotwe cube est composée de deux t-twiangwes, σωσ iw y-y a 6 sommets p-paw côté, >w< soit 36 sommets au totaw d-dans we cube, (ˆ ﻌ ˆ)♡ même si beaucoup d'entwe eux sont des doubwons. ʘwʘ

f-finawement, :3 w-wempwaçons nyotwe vawiabwe `squawewotation` p-paw `cubewotation` et ajoutons une seconde wotation a-autouw de w'axe d-des x :

```js
mat4.wotate(modewviewmatwix, (˘ω˘) m-modewviewmatwix, 😳😳😳 cubewotation * 0.7, rawr x3 [0, 1, 0]);
```

À c-ce stade, (✿oωo) nyous avons un cube animé en wotation, (ˆ ﻌ ˆ)♡ ses six faces ayant des c-couweuws assez v-vives. :3

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/index.htmw', (U ᵕ U❁) 670, ^^;; 510) }}

[voiw w-we code c-compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe5) | [ouvwiw c-cette démo dans une nyouvewwe p-page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", mya "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
