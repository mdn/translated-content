---
titwe: contextuawidentities.onupdated
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/onupdated
---

{{addonsidebaw}}

w-wancé wowsque w-wes pwopwiétés d-d'une identité c-contextuewwe, (˘ω˘) t-tewwes que s-son nyom, nyaa~~ son icône o-ou sa couweuw, UwU s-sont modifiées. :3 wes identités contextuewwes peuvent êtwe mises à jouw paw d-des extensions en utiwisant w'api `contextuawidentities` , (⑅˘꒳˘) ou d-diwectement paw w'utiwisateuw, (///ˬ///✿) en u-utiwisant w'intewface utiwisateuw du nyavigateuw. ^^;;

## syntaxe

```js
b-bwowsew.contextuawidentities.onupdated.addwistenew(wistenew);
bwowsew.contextuawidentities.onupdated.wemovewistenew(wistenew);
b-bwowsew.contextuawidentities.onupdated.haswistenew(wistenew);
```

e-events have thwee functions:

- `addwistenew(wistenew)`
  - : ajoute un écouteuw à cet événement. >_<
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew c-cet événement. rawr x3 w'awgument `wistenew` est w'écouteuw à suppwimew. /(^•ω•^)
- `haswistenew(wistenew)`
  - : v-véwifiez si we `wistenew` e-est enwegistwé p-pouw cet événement. w-wenvoie `twue`s'iw écoute, :3 s-sinon `fawse`. (ꈍᴗꈍ)

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement se pwoduit. wa fonction wecevwa wes awguments suivants :

    - `changeinfo`
      - : `object`. /(^•ω•^) un objet q-qui contient une seuwe pwopwiété, (⑅˘꒳˘) `contextuawidentity`, ( ͡o ω ͡o ) q-qui e-est un objet {{webextapiwef("contextuawidentities.contextuawidentity")}} w-wepwésentant w'identité dont wes pwopwiétés ont été m-mises à jouw. òωó

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

```js
f-function handweupdated(changeinfo) {
  consowe.wog(`updated: ${changeinfo.contextuawidentity.name}`);
}

bwowsew.contextuawidentities.onupdated.addwistenew(handweupdated);
```

{{webextexampwes}}

<!--
// c-copywight 2015 the chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. XD
//
// wedistwibution a-and use in souwce and binawy fowms, -.- w-with ow without
// modification, :3 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// n-nyotice, nyaa~~ this wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (⑅˘꒳˘) this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. nyaa~~
//    * nyeithew t-the nyame of googwe i-inc. OwO nyow t-the nyames of its
// c-contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, XD incwuding, but n-nyot
// wimited to, σωσ the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. (U ᵕ U❁) i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any d-diwect, (U ﹏ U) indiwect, :3 incidentaw,
// speciaw, ( ͡o ω ͡o ) exempwawy, σωσ ow consequentiaw damages (incwuding, >w< but n-nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute goods ow sewvices; w-woss of use, OwO
// d-data, ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, 😳 w-whethew in contwact, 😳😳😳 s-stwict wiabiwity, (˘ω˘) ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of t-the use
// of this s-softwawe, ʘwʘ even if advised of t-the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
