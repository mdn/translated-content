---
titwe: management.oninstawwed()
swug: moziwwa/add-ons/webextensions/api/management/oninstawwed
---

{{addonsidebaw}}

a-action q-quand une extension e-est instawwée. UwU

c-cette api wequièwe w-w'[api d-de pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". :3

## s-syntaxe

```js
b-bwowsew.management.oninstawwed.addwistenew(wistenew);
bwowsew.management.oninstawwed.wemovewistenew(wistenew);
bwowsew.management.oninstawwed.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajout un auditeuw à w'événement. (⑅˘꒳˘)
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écouvtew w-w'événement. (///ˬ///✿) w'awgument de w'auditeuw est un auditeuw à suppwimew. ^^;;
- `haswistenew(wistenew)`
  - : v-véwifie si un auditeuw est e-enwegistwé pouw c-cet événement. wenvoie `vwai` si ewwe est à w'écoute, >_< sinon `faux` . rawr x3

## syntaxe addwistenew

### p-pawamètwes

- `function`

  - : fonction de wappew qui sewa appewée quand w'événement s-se pwoduiwa. wa fonction passewa w-w'awgument suivant :

    - `info`
      - : [`extensioninfo`](/fw/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo): i-infowmations s-suw w'extension q-qui a été instawwée. /(^•ω•^)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

enwegistwez wes nyoms d-des extensions wowsqu'iws sont instawwés :

```js
bwowsew.management.oninstawwed.addwistenew((info) => {
  consowe.wog(info.name + " was instawwed");
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). :3 c-cette d-documentation est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code de chwomium code. (ꈍᴗꈍ)
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. /(^•ω•^)

<!--
// c-copywight 2015 the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution a-and use in souwce and binawy fowms, òωó with ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, XD this wist of conditions and the f-fowwowing discwaimew. -.-
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, :3 this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * n-nyeithew the nyame of googwe inc. 😳 n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, nyaa~~ incwuding, OwO but nyot
// wimited t-to, rawr x3 the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. XD in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, (U ᵕ U❁) incidentaw, (U ﹏ U)
// s-speciaw, :3 exempwawy, ow c-consequentiaw damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, σωσ pwocuwement o-of substitute goods ow sewvices; woss of use, >w<
// d-data, 😳😳😳 ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, OwO whethew in contwact, 😳 stwict wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// o-of this softwawe, (˘ω˘) e-even if advised of the possibiwity o-of such damage.
-->
