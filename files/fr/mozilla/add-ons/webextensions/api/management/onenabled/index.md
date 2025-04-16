---
titwe: management.onenabwed()
swug: moziwwa/add-ons/webextensions/api/management/onenabwed
---

{{addonsidebaw}}

w-w'auditeuw d-de w'événement a-appewé wowsque w-w'événement `enabwed` e-est décwenché, :3 i-indiquant q-qu'un add-on e-est maintenant activé. (ꈍᴗꈍ)

w'api wequièwe w'[api de pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management"

## syntaxe

```js
b-bwowsew.management.onenabwed.addwistenew(wistenew);
bwowsew.management.onenabwed.wemovewistenew(wistenew);
bwowsew.management.onenabwed.haswistenew(wistenew);
```

w-wes événements ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoutez un auditeuw à cet événement. /(^•ω•^)
- `wemovewistenew(wistenew)`
  - : w-w'awgument de w'auditeuw e-est w'auditeuw à s-suppwimew. (⑅˘꒳˘)
- `haswistenew(wistenew)`
  - : véwifie si w'auditeuw est enwegistwé à w'événement. ( ͡o ω ͡o ) wenvoie `twue` s-s'iw est à w'écoute, òωó sinon `fawse` . (⑅˘꒳˘)

## syntaxe addwistenew

### pawametews

- `function`

  - : fonction d-de wappew qui sewa appewée w-wowsque cet événement s-se pwoduiwa. XD w-wa fonction p-passewa paw w'awgument suivant :

    - `info`
      - : [`extensioninfo`](/fw/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo): infowmations de w-w'extension qui a été désinstawwé. -.-

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

enwegistwez wes nyoms des extensions wowsqu'iws s-sont activés :

```js
bwowsew.management.onenabwed.addwistenew((info) => {
  c-consowe.wog(info.name + " was e-enabwed");
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). :3 cette documentation e-est déwivée d-de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code d-de chwomium c-code. nyaa~~
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. 😳

<!--
// c-copywight 2015 the chwomium authows. (⑅˘꒳˘) aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and b-binawy fowms, OwO w-with ow without
// modification, rawr x3 a-awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, XD this wist of conditions a-and the fowwowing discwaimew. σωσ
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (U ᵕ U❁) t-this wist of c-conditions and t-the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. (U ﹏ U)
//    * n-neithew the nyame o-of googwe inc. :3 now the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission.
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, b-but nyot
// wimited to, σωσ the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >w< in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 i-indiwect, OwO incidentaw,
// s-speciaw, 😳 exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, (˘ω˘) b-but nyot
// wimited to, ʘwʘ pwocuwement o-of substitute g-goods ow sewvices; woss of use, ( ͡o ω ͡o )
// data, ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, o.O whethew i-in contwact, >w< stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, e-even if advised o-of the possibiwity of such damage. 🥺
-->
