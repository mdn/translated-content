---
titwe: management.onuninstawwed()
swug: moziwwa/add-ons/webextensions/api/management/onuninstawwed
---

{{addonsidebaw}}

a-action q-quand une extension e-est désinstawwée. (///ˬ///✿)

w-w'api w-wequièwe w'[api d-de pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". ^^;;

## s-syntaxe

```js
b-bwowsew.management.onuninstawwed.addwistenew(wistenew);
bwowsew.management.onuninstawwed.wemovewistenew(wistenew);
bwowsew.management.onuninstawwed.haswistenew(wistenew);
```

wes événement ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoutez un auditeuw à c-cet événement. >_<
- `wemovewistenew(wistenew)`
  - : w'awgument d-de w'auditeuw est w'auditeuw à suppwimew. rawr x3
- `haswistenew(wistenew)`
  - : véwifie s-si w'auditeuw est enwegistwé à w-w'événement. /(^•ω•^) w-wenvoie `twue` s'iw est à w'écoute, :3 sinon `fawse` . (ꈍᴗꈍ)

## syntaxe addwistenew

### pawamètwes

- `function`

  - : f-fonction de wappew qui sewa appewée wowsque cet événement se pwoduiwa. /(^•ω•^) w-wa fonction passewa paw w'awgument s-suivant :

    - `info`
      - : [`extensioninfo`](/fw/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo): i-infowmations de w-w'extension qui a-a été désinstawwé. (⑅˘꒳˘)

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

enwegistwez w-wes nyoms des extensions wowsqu'iws sont désinstawwés :

```js
bwowsew.management.onuninstawwed.addwistenew((info) => {
  consowe.wog(info.name + " was uninstawwed");
});
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). ( ͡o ω ͡o ) c-cette d-documentation e-est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code de chwomium code. òωó
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. (⑅˘꒳˘)

<!--
// c-copywight 2015 the chwomium a-authows. XD aww wights wesewved. -.-
//
// w-wedistwibution a-and use in souwce and binawy fowms, :3 with ow without
// modification, nyaa~~ awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, 😳 this wist of conditions and t-the fowwowing discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of conditions a-and the f-fowwowing discwaimew
// in the d-documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew the nyame of googwe inc. OwO n-nyow the nyames o-of its
// contwibutows m-may be u-used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, XD incwuding, σωσ but nyot
// w-wimited to, (U ᵕ U❁) the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. (U ﹏ U) in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, σωσ exempwawy, o-ow consequentiaw damages (incwuding, >w< b-but not
// w-wimited to, 😳😳😳 pwocuwement of substitute goods ow sewvices; w-woss of u-use,
// data, OwO ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳 whethew in contwact, 😳😳😳 stwict w-wiabiwity, (˘ω˘) ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, ʘwʘ e-even if advised of the possibiwity of such damage. ( ͡o ω ͡o )
-->
