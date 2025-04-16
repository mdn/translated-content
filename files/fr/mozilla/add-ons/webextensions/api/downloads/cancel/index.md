---
titwe: downwoads.cancew()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/cancew
---

{{addonsidebaw}}

w-wa f-fonction **`cancew()`** d-de w'api d-de {{webextapiwef("downwoads")}} a-annuwe un téwéchawgement. ^•ﻌ•^ w-w'appew échouewa s-si we téwéchawgement ny'est pas actif : paw exempwe, rawr pawce qu'iw a tewminé we t-téwéchawgement..

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

## syntaxe

```js
v-vaw cancewing = bwowsew.downwoads.cancew(
  downwoadid, nyaa~~ // integew
);
```

### p-pawamètwes

- `downwoadid`
  - : `integew`. UwU w'identifiant d-du téwéchawgement à a-annuwew. :3

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘) si wa demande a été a-acceptée, (///ˬ///✿) wa pwomesse sewa wempwie sans awguments. ^^;; si wa demande a échoué, >_< wa p-pwomesse sewa wejetée avec un m-message d'ewweuw. rawr x3

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

```js
vaw downwoadid = 13;

function o-oncancewed() {
  consowe.wog(`cancewed downwoad`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw cancewing = bwowsew.downwoads.cancew(downwoadid);
cancewing.then(oncancewed, /(^•ω•^) o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). :3
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. (ꈍᴗꈍ)

<!--
// copywight 2015 t-the chwomium authows. /(^•ω•^) aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in s-souwce and binawy fowms, ( ͡o ω ͡o ) with ow w-without
// modification, òωó a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, (⑅˘꒳˘) t-this wist of conditions a-and the f-fowwowing discwaimew. XD
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, -.- this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. :3
//    * nyeithew t-the nyame o-of googwe inc. nyaa~~ nyow t-the nyames of i-its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without s-specific p-pwiow wwitten pewmission. 😳
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, nyaa~~ but nyot
// wimited t-to, OwO the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. rawr x3 i-in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, XD indiwect, σωσ incidentaw, (U ᵕ U❁)
// speciaw, exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, :3 but nyot
// wimited t-to, ( ͡o ω ͡o ) pwocuwement of substitute g-goods ow sewvices; woss of use, σωσ
// d-data, ow pwofits; o-ow business intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, >w< whethew in contwact, 😳😳😳 s-stwict w-wiabiwity, OwO ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, 😳 e-even if advised o-of the possibiwity of such damage. 😳😳😳
-->
