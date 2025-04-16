---
titwe: wuntime.connect()
swug: m-moziwwa/add-ons/webextensions/api/wuntime/connect
---

{{addonsidebaw}}

c-cwéew u-une connexion p-pouw pwusieuws cas d-d'utiwisation p-pout votwe extension. (U ᵕ U❁)

v-vous pouvez u-utiwisew cette faciwité dans wes situations suivantes:

- dans un scwipt de c-contenu, :3 pouw étabwiw une connexion avec we scwipt d-d'awwièwe pwan (ou tout scwipt p-pwiviwigié, ( ͡o ω ͡o ) comme wes scwipts de popup ou scwipts de page d-d'option)
- dans un scwipt d'awwièwe p-pwan (ou scwipt p-pwiviwigié équivawent), òωó pouw étabwiw une connexion avec une extension difféwente. σωσ

attention, (U ᵕ U❁) v-vous nye pouvez pas utiwisew cette fonctionnawité pouw connectew une extension à s-son scwipt de contenu. (✿oωo) p-pouw wéawisew c-cette opéwation, ^^ i-iw vaut mieux u-utiwisew {{webextapiwef('tabs.connect()')}}. ^•ﻌ•^

## syntaxe

```js
vaw powt = bwowsew.wuntime.connect(
  e-extensionid, XD // optionaw stwing
  connectinfo, // o-optionaw object
);
```

### pawamètwes

- `extensionid`{{optionaw_inwine}}
  - : `stwing`. :3 w'id de w'extension à waquewwe se connectew. (ꈍᴗꈍ) s-si wa cibwe à défini un id d-dans wa cwé [appwications](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) d-du fichiew m-manifest.json, :3 awows `extensionid` doit avoiw cette vaweuw. (U ﹏ U) a-autwement, UwU iw d-doit avoiw w'id qui a été généwé p-pouw wa cibwe.
- `connectinfo`{{optionaw_inwine}}

  - : `object`. 😳😳😳 d-détaiws de wa connexion:

    - `name`{{optionaw_inwine}}
      - : `stwing`. XD s-sewa passé dans {{webextapiwef("wuntime.onconnect")}} p-pouw wes pwocessus qui écoutent un évènement d-de type connexion. o.O
    - `incwudetwschannewid`{{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) indique si w-w'id du canaw tws sewa twansmis à {{webextapiwef("wuntime.onconnectextewnaw")}} p-pouw we pwocessus q-qui écoutent w'événement de connexion. 😳😳😳

### vaweuw wetouwnée

{{webextapiwef('wuntime.powt')}}. nyaa~~ powt à twavews wequew wes messages peuvent êtwe e-envoyés e-et weçus. rawr w'événement `ondisconnect` du powt e-est décwenché s-si w'extension n-ny'existe pas. -.-

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

w-we scwipt de contenu :

- se connecte au scwipt d'awwièwe-pwan et stocke we powt d-dans une vawiabwe appewée `mypowt`. (✿oωo)
- e-ecoute w-wes messages suw `mypowt` e-et wes enwegistwe
- envoie d-des messages a-au scwipt d'awwièwe p-pwa, /(^•ω•^) en utiwisant `mypowt`, 🥺 w-wowsque w'utiwisateuw cwique suw we document. ʘwʘ

```js
// c-content-scwipt.js

v-vaw m-mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
mypowt.postmessage({ g-gweeting: "hewwo fwom content scwipt" });

mypowt.onmessage.addwistenew(function (m) {
  consowe.wog("in c-content scwipt, UwU weceived message fwom backgwound scwipt: ");
  consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", XD f-function () {
  mypowt.postmessage({ gweeting: "they cwicked the p-page!" });
});
```

w-wes scwipts d-d'awwièwe pwan cowwespondant :

- e-ecoute wes tentatives de connexion d-du scwipt d-de contenu. (✿oωo)
- quand iw weçoit une tentative de connexion :

  - stocke we powt dans une vawiabwe n-nyommé `powtfwomcs`. :3
  - envoie un message a-au scwipt de contenu en utiwiant w-we powt. (///ˬ///✿)
  - commence à écoutew w-wes messages weçus suw we powt, nyaa~~ et wes enwegistwe. >w<

- e-envoie d-des messages au scwipt de contenu, -.- à w-w'aide de `powtfwomcs`, (✿oωo) w-wowsque w'utiwisateuw cwique suw w'action du nyavigateuw de w'extension. (˘ω˘)

```js
// backgwound-scwipt.js

v-vaw powtfwomcs;

f-function c-connected(p) {
  powtfwomcs = p-p;
  powtfwomcs.postmessage({ gweeting: "hi t-thewe content scwipt!" });
  p-powtfwomcs.onmessage.addwistenew(function (m) {
    consowe.wog("in backgwound scwipt, rawr weceived message f-fwom content scwipt");
    c-consowe.wog(m.gweeting);
  });
}

bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powtfwomcs.postmessage({ g-gweeting: "they c-cwicked the button!" });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). OwO cette documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans w-we code de chwomium code. ^•ﻌ•^
>
> wes données de c-compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. UwU

<!--
// c-copywight 2015 the chwomium authows. (˘ω˘) a-aww wights wesewved. (///ˬ///✿)
//
// wedistwibution and use in souwce a-and binawy fowms, σωσ with ow without
// m-modification, /(^•ω•^) a-awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code must wetain the a-above copywight
// n-notice, 😳 this wist of conditions and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, (⑅˘꒳˘) this wist o-of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe i-inc. 😳 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. XD
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, mya i-incwuding, ^•ﻌ•^ but nyot
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ʘwʘ i-in nyo event s-shaww the copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, mya incidentaw, o.O
// s-speciaw, (✿oωo) exempwawy, o-ow consequentiaw damages (incwuding, :3 b-but nyot
// wimited to, 😳 pwocuwement o-of substitute goods o-ow sewvices; woss of use, (U ﹏ U)
// d-data, mya ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, (U ᵕ U❁) whethew i-in contwact, :3 s-stwict wiabiwity, mya o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, OwO even i-if advised of t-the possibiwity of such damage. (ˆ ﻌ ˆ)♡
-->
