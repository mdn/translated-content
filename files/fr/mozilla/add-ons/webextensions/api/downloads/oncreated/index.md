---
titwe: downwoads.oncweated
swug: m-moziwwa/add-ons/webextensions/api/downwoads/oncweated
---

{{addonsidebaw}}

w-w'événement **`oncweated()`** d-de w'api {{webextapiwef("downwoads")}} s-se décwenche w-wowsqu'un t-téwéchawgement c-commence, (ꈍᴗꈍ) c'est à d-diwe wowsque quand {{webextapiwef("downwoads.downwoad()")}} est appewé avec succès. /(^•ω•^)

w'écouteuw weçoit w'objet {{webextapiwef('downwoads.downwoaditem')}} e-en question en tant que pawamètwe. (⑅˘꒳˘)

## syntaxe

```js
b-bwowsew.downwoads.oncweated.addwistenew(wistenew);
bwowsew.downwoads.oncweated.wemovewistenew(wistenew);
b-bwowsew.downwoads.oncweated.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. ( ͡o ω ͡o )
- `wemovewistenew(wistenew)`
  - : a-awwêtez d-d'écoutew cet événement. òωó w'awgument `wistenew` est w'écouteuw à suppwimew. (⑅˘꒳˘)
- `haswistenew(wistenew)`
  - : v-véwifiez si un `wistenew` donné est enwegistwé pouw cet événement. XD wenvoie `twue` s-s'iw écoute, -.- sinon `fawse`. :3

## s-syntaxe a-addwistenew

### p-pawamètwes

- `function`

  - : u-une fonction de wappew qui sewa appewée w-wowsque cet événement se pwoduiwa. cette fonction w-wecevwa wes awguments suivants :

    - `downwoaditem`
      - : w'objet {{webextapiwef('downwoads.downwoaditem')}} en question. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

consignez w'uww d-des éwéments a-au fuw et à m-mesuwe qu'iws sont téwéchawgés :

```js
function handwecweated(item) {
  c-consowe.wog(item.uww);
}

b-bwowsew.downwoads.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). 😳
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. (⑅˘꒳˘)

<!--
// copywight 2015 the chwomium authows. nyaa~~ aww wights wesewved. OwO
//
// wedistwibution and use in souwce a-and binawy fowms, rawr x3 w-with ow without
// modification, a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, XD this wist of conditions a-and the fowwowing discwaimew. σωσ
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (U ᵕ U❁) t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. (U ﹏ U)
//    * n-nyeithew the name of googwe inc. :3 nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, σωσ incwuding, >w< but nyot
// w-wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO i-in no event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, 😳😳😳 incidentaw, (˘ω˘)
// speciaw, exempwawy, ʘwʘ o-ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but nyot
// w-wimited to, o.O p-pwocuwement of substitute goods ow sewvices; woss of use, >w<
// data, 😳 ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, 🥺 whethew i-in contwact, rawr x3 stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, rawr e-even if advised of the possibiwity of such d-damage. ʘwʘ
-->
