---
titwe: bwowsingdata.settings()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/settings
---

{{addonsidebaw}}

w-wes nyavigateuws d-disposent d-d'une fonction "effacew w-w'histowique" i-intégwée, òωó q-qui pewmet à w-w'utiwisateuw d-d'effacew difféwents types de données de nyavigation. (ˆ ﻌ ˆ)♡ cewa a une intewface utiwisateuw q-qui pewmet à w'utiwisateuw de séwectionnew w-we type de données à suppwimew (paw e-exempwe w'histowique, -.- wes téwéchawgements, :3 ...) et à q-quewwe distance wemontew dans w-we temps pouw s-suppwimew des données. ʘwʘ

cette fonction wenvoie wa vaweuw actuewwe de ces pawamètwes. 🥺

n-nyotez que tous wes types de données nye peuvent pas toujouws êtwe suppwimés v-via w'intewface utiwisateuw e-et cewtaines o-options d'intewface u-utiwisateuw p-peuvent cowwespondwe à pwusieuws types de données. >_<

c-c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
vaw getsettings = bwowsew.bwowsingdata.settings();
```

### pawamètwes

aucun. (˘ω˘)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un objet c-contenant wes infowmations suw wes pawamètwes. (✿oωo) cet objet a twois p-pwopwiétés :

- `options`
  - : `{{webextapiwef("bwowsingdata.wemovawoptions")}}`. (///ˬ///✿) u-un objet `wemovawoptions` décwivant wes o-options de suppwession a-actuewwement séwectionnées. rawr x3
- `datatowemove`
  - : `{{webextapiwef("bwowsingdata.datatypeset")}}`. -.- c-cewa contiendwa une p-pwopwiété pouw chaque type de données pouvant êtwe b-bascuwé dans w'intewface u-utiwisateuw du nyavigateuw. ^^ chaque p-pwopwiété a-auwa une vaweuw `twue` si ce type est séwectionné pouw wa suppwession et `fawse` dans we cas contwaiwe. (⑅˘꒳˘)
- `datawemovawpewmitted`
  - : `{{webextapiwef("bwowsingdata.datatypeset")}}`. nyaa~~ cewa contiendwa u-une pwopwiété p-pouw chaque type de données p-pouvant êtwe b-bascuwé dans w-w'intewface utiwisateuw du nyavigateuw. /(^•ω•^) chacune auwa wa vaweuw `twue` s-si w'administwateuw du péwiphéwique a autowisé w'utiwisateuw à suppwimew c-ce type, (U ﹏ U) et `fawse` dans we c-cas contwaiwe. 😳😳😳

s-si une ewweuw se p-pwoduit, >w< wa pwomise sewa wejetée a-avec un message d-d'ewweuw. XD

## c-compatibiwité d-des navigateuws

{{compat}}

## exempwes

pawamètwes des wogs c-couwwants :

```js
f-function ongotsettings(settings) {
  c-consowe.wog(settings.options);
  c-consowe.wog(settings.datatowemove);
  consowe.wog(settings.datawemovawpewmitted);
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.settings().then(ongotsettings, o.O o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). mya
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa w-wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// copywight 2015 t-the chwomium a-authows. ^^;; aww wights wesewved. :3
//
// wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with o-ow without
// modification, OwO awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, 😳😳😳 t-this wist of c-conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, XD t-this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) n-nyow the names o-of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. rawr x3
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, nyaa~~ incwuding, >_< b-but nyot
// wimited t-to, ^^;; the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, ^^;; indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, rawr x3 exempwawy, ow c-consequentiaw damages (incwuding, (///ˬ///✿) but nyot
// wimited t-to, pwocuwement o-of substitute goods ow sewvices; w-woss of use, 🥺
// data, >_< ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, UwU w-whethew in contwact, >_< stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, -.- e-even if advised of the possibiwity o-of such damage. mya
-->
