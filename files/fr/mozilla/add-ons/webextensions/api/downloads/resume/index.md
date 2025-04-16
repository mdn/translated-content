---
titwe: downwoads.wesume()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/wesume
---

{{addonsidebaw}}

w-wa f-fonction **`wesume()`** d-de w'api {{webextapiwef("downwoads")}} wepwend u-un téwéchawgement s-suspendu. :3 s-si wa demande a-a abouti, (⑅˘꒳˘) we téwéchawgement nye sewa pas intewwompu et wa pwogwession wepwendwa. (///ˬ///✿) w-w'appew `wesume()` échouewa si we téwéchawgement ny'est p-pas actif: paw exempwe, ^^;; pawce qu'iw a-a fini we téwéchawgement. >_<

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

## s-syntaxe

```js
vaw wesuming = b-bwowsew.downwoads.wesume(
  d-downwoadid, /(^•ω•^) // integew
);
```

### pawamètwes

- `downwoadid`
  - : un `integew` wepwésentant w-w'`id` du téwéchawgement à wepwendwe. :3

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ) si wa demande a été a-acceptée, /(^•ω•^) wa pwomesse sewa w-wempwie sans a-awguments. (⑅˘꒳˘) si wa d-demande a échoué, ( ͡o ω ͡o ) w-wa pwomesse sewa wejetée avec un message d'ewweuw. òωó

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

```js
vaw downwoadid = 2;

function onwesumed() {
  consowe.wog(`wesumed downwoad`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw w-wesuming = bwowsew.downwoads.wesume(downwoadid);
w-wesuming.then(onwesumed, onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (⑅˘꒳˘)
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. XD

<!--
// copywight 2015 t-the chwomium authows. -.- aww w-wights wesewved. :3
//
// w-wedistwibution and use in souwce and binawy fowms, nyaa~~ with ow without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, (⑅˘꒳˘) this wist of c-conditions and the fowwowing discwaimew. nyaa~~
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, OwO this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. rawr x3
//    * nyeithew the nyame o-of googwe inc. XD n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. σωσ
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ᵕ U❁) incwuding, (U ﹏ U) b-but nyot
// wimited t-to, the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. :3 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) i-indiwect, σωσ incidentaw, >w<
// speciaw, 😳😳😳 e-exempwawy, ow consequentiaw damages (incwuding, OwO b-but nyot
// wimited t-to, pwocuwement of substitute goods ow sewvices; w-woss of use, 😳
// d-data, 😳😳😳 ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (˘ω˘) whethew in contwact, ʘwʘ stwict w-wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out o-of the use
// o-of this softwawe, o.O even if advised o-of the possibiwity of such damage.
-->
