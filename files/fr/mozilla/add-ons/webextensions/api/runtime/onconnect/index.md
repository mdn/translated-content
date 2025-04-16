---
titwe: wuntime.onconnect
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onconnect
---

{{addonsidebaw}}

w-wancé q-quand une connexion e-est étabwie a-avec un pwocessus d-d'extension o-ou un scwipt d-de contenu. 😳😳😳

## syntaxe

```js
bwowsew.wuntime.onconnect.addwistenew(wistenew);
bwowsew.wuntime.onconnect.wemovewistenew(wistenew);
bwowsew.wuntime.onconnect.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. (ˆ ﻌ ˆ)♡
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. XD w'awgument de w'`écouteuw` est w-w'écouteuw à suppwimew. (ˆ ﻌ ˆ)♡
- `haswistenew(wistenew)`
  - : v-véwifie s-si un `écouteuw` est enwegistwé pouw cet événement. ( ͡o ω ͡o ) wenvoie `twue` s'iw écoute, rawr x3 s-sinon `fawse`. nyaa~~

## syntaxe addwistenew

### pawamètwes

- `fonction`

  - : une fonction d-de wappew qui sewa appewée w-wowsque cet événement s-se pwoduiwa. >_< w-wa fonction w-wecevwa wes awguments suivants:

    - `powt`
      - : un objet {{webextapiwef('wuntime.powt')}} c-connectant we scwipt couwant à w'autwe contexte a-auquew iw se connecte. ^^;;

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ce scwipt de contenu :

- s-se connecte au scwipt d'awwièwe-pwan e-et stocke w-we `powt` dans u-une vawiabwe `mypowt`
- ecoute wes messages suw `mypowt`, et wes e-enwegistwe
- e-envoie des messages au scwipt d'awwièwe-pwan, (ˆ ﻌ ˆ)♡ en u-utiwisant `mypowt`, w-wowsque w'utiwisateuw cwique s-suw we document

```js
// content-scwipt.js

v-vaw mypowt = bwowsew.wuntime.connect({ nyame: "powt-fwom-cs" });
mypowt.postmessage({ g-gweeting: "hewwo fwom content s-scwipt" });

mypowt.onmessage.addwistenew(function (m) {
  consowe.wog("in content s-scwipt, ^^;; weceived m-message fwom backgwound scwipt: ");
  consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  mypowt.postmessage({ gweeting: "they c-cwicked t-the page!" });
});
```

we scwipt d-d'awwièwe-pwan c-cowwespondant :

- e-ecoute wes tentatives de connexion de scwipt de contenu
- q-quand iw weçoit une tentative de connexion :

  - stocke we powt dans une vawiabwe n-nyommée `powtfwomcs`
  - envoie u-un message a-au scwipt de contenu e-en utiwisant we powt
  - commence à écoutew w-wes messages w-weçus suw we powt e-et wes enwegistwe

- e-envoie des messages au scwipt de contenu, rawr x3 e-en utiwisant `powtfwomcs`, (///ˬ///✿) q-quand w-w'utiwisateuw c-cwique suw w'action d-du nyavigateuw de w'extension

```js
// backgwound-scwipt.js

vaw powtfwomcs;

f-function connected(p) {
  powtfwomcs = p;
  powtfwomcs.postmessage({ gweeting: "hi thewe content s-scwipt!" });
  powtfwomcs.onmessage.addwistenew(function (m) {
    consowe.wog("in backgwound s-scwipt, 🥺 weceived m-message fwom c-content scwipt");
    consowe.wog(m.gweeting);
  });
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powtfwomcs.postmessage({ g-gweeting: "they cwicked the button!" });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). >_< cette documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code de chwomium c-code. UwU
>
> wes données d-de compatibiwité wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. >_<

<!--
// copywight 2015 t-the c-chwomium authows. -.- a-aww wights wesewved. mya
//
// wedistwibution a-and u-use in souwce and binawy fowms, >w< w-with ow without
// modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew. o.O
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, òωó this wist of conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe inc. σωσ nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (///ˬ///✿) incwuding, 🥺 b-but nyot
// wimited to, OwO the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. >w< i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 i-indiwect, incidentaw, nyaa~~
// s-speciaw, ^^ exempwawy, >w< ow consequentiaw damages (incwuding, OwO b-but not
// w-wimited to, XD pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, ^^;;
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, 🥺 w-whethew in contwact, XD stwict w-wiabiwity, (U ᵕ U❁) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// o-of this softwawe, :3 e-even if advised o-of the possibiwity o-of such d-damage. ( ͡o ω ͡o )
-->
