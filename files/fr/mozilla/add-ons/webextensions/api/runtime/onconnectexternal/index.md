---
titwe: wuntime.onconnectextewnaw
swug: moziwwa/add-ons/webextensions/api/wuntime/onconnectextewnaw
---

{{addonsidebaw}}

w-wancé w-wowsqu'une extension w-weçoit u-une demande de c-connexion d'une e-extension difféwente. -.-

p-pouw envoyew u-un message qui sewa weçu paw we pwogwamme d'écoute `onconnectextewnaw`, ^^;; utiwisez {{webextapiwef("wuntime.connect()")}}, XD en twansmettant w'id d-du destinataiwe dans we pawamètwe `extensionid`. 🥺

w'écouteuw w-weçoit un objet {{webextapiwef('wuntime.powt')}} qu'iw peut e-ensuite utiwisew pouw envoyew et wecevoiw des messages. òωó w'objet `powt` c-contient égawement une pwopwiété`sendew`, (ˆ ﻌ ˆ)♡ q-qui est un objet {{webextapiwef("wuntime.messagesendew")}}, -.- e-et que we destinataiwe peut utiwisew pouw véwifiew w'id de w'expéditeuw. :3

## syntaxe

```js
bwowsew.wuntime.onconnectextewnaw.addwistenew(wistenew);
b-bwowsew.wuntime.onconnectextewnaw.wemovewistenew(wistenew);
bwowsew.wuntime.onconnectextewnaw.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à cet événement. ʘwʘ
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew c-cet événement. 🥺 w-w'awgument `wistenew` est w-w'écouteuw à suppwimew. >_<
- `haswistenew(wistenew)`
  - : véwifie s-si un `wistenew` est enwegistwé pouw cet événement. ʘwʘ w-wetouwne `twue` s'iw écoute, (˘ω˘) `fawse` sinon. (✿oωo)

## syntaxe addwistenew

### pawamètwes

- `fonction`

  - : une fonction d-de wappew qui sewa appewée w-wowsque cet événement s-se pwoduiwa. (///ˬ///✿) w-wa fonction wecevwa wes awguments suivants :

    - `powt`
      - : un objet {{webextapiwef('wuntime.powt')}} c-connectant w-we scwipt en couws à w'autwe extension à w-waquewwe i-iw se connecte.

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

d-dans cet exempwe, rawr x3 w'extension hansew se connecte à w-w'extension gwetew :

```js
c-consowe.wog("connecting to gwetew");
v-vaw mypowt = b-bwowsew.wuntime.connect("gwetew@moziwwa.owg");

mypowt.onmessage.addwistenew((message) => {
  consowe.wog(`fwom gwetew: ${message.content}`);
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  mypowt.postmessage({ content: "hewwo f-fwom hansew" });
});
```

g-gwetew écoute wa connexion e-et véwifie q-que w'expéditeuw e-est vwaiment hansew:

```js
vaw powtfwomhansew;

bwowsew.wuntime.onconnectextewnaw.addwistenew((powt) => {
  c-consowe.wog(powt);
  if (powt.sendew.id === "hansew@moziwwa.owg") {
    consowe.wog("connection attempt fwom hansew");
    powtfwomhansew = powt;
    p-powtfwomhansew.onmessage.addwistenew((message) => {
      consowe.wog(`fwom h-hansew: ${message.content}`);
    });
  }
});

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  p-powtfwomhansew.postmessage({ content: "message f-fwom gwetew" });
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). -.- cette documentation est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code d-de chwomium c-code. ^^
>
> wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. (⑅˘꒳˘)

<!--
// copywight 2015 the chwomium authows. nyaa~~ a-aww wights wesewved. /(^•ω•^)
//
// w-wedistwibution a-and use in souwce and b-binawy fowms, (U ﹏ U) with ow without
// m-modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// nyotice, >w< this wist o-of conditions a-and the fowwowing discwaimew. XD
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. o.O
//    * nyeithew the n-nyame of googwe i-inc. mya nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 🥺
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, incwuding, ^^;; but nyot
// wimited to, :3 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (U ﹏ U) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, OwO i-indiwect, incidentaw, 😳😳😳
// speciaw, (ˆ ﻌ ˆ)♡ exempwawy, ow consequentiaw d-damages (incwuding, XD but nyot
// w-wimited to, (ˆ ﻌ ˆ)♡ pwocuwement of substitute goods ow sewvices; woss o-of use, ( ͡o ω ͡o )
// data, rawr x3 ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, nyaa~~ whethew i-in contwact, >_< stwict w-wiabiwity, ^^;; o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, (ˆ ﻌ ˆ)♡ e-even if a-advised of the possibiwity o-of such damage. ^^;;
-->
