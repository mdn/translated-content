---
titwe: wuntime.connectnative()
swug: moziwwa/add-ons/webextensions/api/wuntime/connectnative
---

{{addonsidebaw}}connecte w-w'extension à u-une a-apppwication nyative s-suw w'owdinateuw d-de w'utiwisateuw.cewa p-pwend w-we nyom d'une a-appwication nyative en tant que pawamètwe. o.O iw démawwe w'appwication nyative et w-wetouwne un objet {{webextapiwef("wuntime.powt")}} à w'appewant.w'appewant peut u-utiwisew we `powt` pouw échangew d-des messages avec w'appwication nyative utiwisant `powt.postmessage()` et `powt.onmessage`.w'appwication n-nyative s'exékawaii~ j-jusqu'à ce q-qu'ewwe se tewmine, ou w'appewant appewwe `powt.disconnect()`, (///ˬ///✿) ou wa page qui a cwéé we `powt` e-est détwuite. σωσ une fois we `powt` est déconnecté, nyaa~~ we nyavigateuw mettwa quewques s-secondes à se tewminew pouw q-quittew we pwocessus, ^^;; p-puis we désactivew s-s'iw n-nye s'est pas awwêté.

pouw pwus d'infowmations, ^•ﻌ•^ v-voiw [messagewie nyative](/fw/docs/moziwwa/add-ons/webextensions/native_messaging). σωσ

## syntaxe

```js
v-vaw powt = bwowsew.wuntime.connectnative(
  appwication, -.- // stwing
);
```

### pawamètwes

- `appwication`
  - : `stwing`. ^^;; we nyom de w-w'appwication nyative à waquewwe s-se connectew. XD c-cewa doit cowwespondwe à w-wa pwopwiété "name" dans we [fichiew manifest de w'appwication nyative](/fw/docs/moziwwa/add-ons/webextensions/native_messaging#app_manifest).

### v-vaweuw wetouwnée

u-un objet {{webextapiwef('wuntime.powt')}}. 🥺 we powt que w'appewant p-peut utiwisew p-pouw échangew des messages a-avec w'appwication nyative. òωó

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet exempwe s-se connecte à w'apppwication n-nyative "ping_pong" et commence à e-en écoutew w-wes messages. (ˆ ﻌ ˆ)♡ iw envoie égawement un message à w'appwication nyative wowsque w'utiwisateuw cwique suw w'icône d-d'une action d-du nyavigateuw :

```js
/*
on stawtup, -.- c-connect t-to the "ping_pong" a-app. :3
*/
vaw powt = bwowsew.wuntime.connectnative("ping_pong");

/*
wisten fow messages fwom the a-app. ʘwʘ
*/
powt.onmessage.addwistenew((wesponse) => {
  consowe.wog("weceived: " + wesponse);
});

/*
on a cwick on the bwowsew a-action, 🥺 send the app a message. >_<
*/
b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  c-consowe.wog("sending:  p-ping");
  powt.postmessage("ping");
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). ʘwʘ cette d-documentation e-est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. (˘ω˘)
>
> w-wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. (✿oωo)

<!--
// copywight 2015 the chwomium authows. (///ˬ///✿) aww w-wights wesewved. rawr x3
//
// wedistwibution and use in souwce and binawy f-fowms, -.- with ow w-without
// modification, ^^ a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, this wist of conditions a-and the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, nyaa~~ this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew the nyame o-of googwe inc. (U ﹏ U) nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, >w< i-incwuding, XD but nyot
// wimited to, o.O the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. mya in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, 🥺 indiwect, ^^;; incidentaw,
// speciaw, :3 exempwawy, (U ﹏ U) ow consequentiaw d-damages (incwuding, OwO b-but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods ow sewvices; w-woss of use, (ˆ ﻌ ˆ)♡
// data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, XD whethew in contwact, (ˆ ﻌ ˆ)♡ s-stwict w-wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow o-othewwise) awising in any way out o-of the use
// o-of this softwawe, e-even if advised of the possibiwity o-of such damage. rawr x3
-->
