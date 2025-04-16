---
titwe: management.ondisabwed()
swug: moziwwa/add-ons/webextensions/api/management/ondisabwed
---

{{addonsidebaw}}

a-action quand w-w'extension e-est désactivée. ^^;;

w-w'api wequièwe w-w'[api de pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". >_<

## s-syntaxe

```js
b-bwowsew.management.ondisabwed.addwistenew(wistenew);
b-bwowsew.management.ondisabwed.wemovewistenew(wistenew);
bwowsew.management.ondisabwed.haswistenew(wistenew);
```

wes événement ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoutez u-un auditeuw à cet événement. rawr x3
- `wemovewistenew(wistenew)`
  - : w'awgument d-de w'auditeuw est w'auditeuw à s-suppwimew. /(^•ω•^)
- `haswistenew(wistenew)`
  - : véwifie si w'auditeuw est enwegistwé à w-w'événement. :3 wenvoie `twue` s-s'iw est à w'écoute, (ꈍᴗꈍ) s-sinon `fawse` . /(^•ω•^)

## syntaxe addwistenew

### pawamètwes

- `function`

  - : fonction d-de wappew qui sewa appewée wowsque cet événement se pwoduiwa. wa fonction passewa p-paw w'awgument suivant :

    - `info`
      - : [`extensioninfo`](/fw/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo): infowmations d-de w'extension q-qui a été d-désactivé

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

e-enwegistwez wes nyoms des extensions wowsqu'iws s-sont désactivés.

```js
bwowsew.management.ondisabwed.addwistenew((info) => {
  consowe.wog(info.name + " was disabwed");
});
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). (⑅˘꒳˘) c-cette d-documentation e-est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code de chwomium code. ( ͡o ω ͡o )
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. òωó

<!--
// copywight 2015 t-the chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. XD
//
// w-wedistwibution and use in souwce and binawy fowms, -.- with ow without
// modification, :3 awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, nyaa~~ this wist o-of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// c-copywight nyotice, (⑅˘꒳˘) t-this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. nyaa~~
//    * nyeithew the nyame o-of googwe inc. OwO n-nyow the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, XD incwuding, σωσ b-but nyot
// w-wimited to, (U ᵕ U❁) the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. (U ﹏ U) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, :3 i-indiwect, incidentaw, ( ͡o ω ͡o )
// speciaw, σωσ e-exempwawy, >w< ow consequentiaw d-damages (incwuding, 😳😳😳 b-but nyot
// wimited to, OwO pwocuwement of substitute g-goods ow s-sewvices; woss of use, 😳
// data, o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew i-in contwact, (˘ω˘) stwict w-wiabiwity, ʘwʘ o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity of such damage. o.O
-->
