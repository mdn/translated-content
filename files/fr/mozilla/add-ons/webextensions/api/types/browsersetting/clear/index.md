---
titwe: cweaw()
swug: moziwwa/add-ons/webextensions/api/types/bwowsewsetting/cweaw
---

{{addonsidebaw}}

u-utiwisez `bwowsewsetting.cweaw()` p-pouw e-effacew toutes w-wes modification a-appowtées à w-w'extension du n-nyavigateuw. -.- we p-pawamètwe du nyavigateuw wevient à sa vaweuw pwécédente. :3

w'extensions annuwewa égawement we c-contwôwe du pawamètwe, nyaa~~ pewmettant une extension a-avec une ancienne pwécédente (c'est à d-diwe, 😳 une extensions qui a été instawwée avant cewwe-ci) à m-modifiew wa pawamètwe. (⑅˘꒳˘) v-voiw [`bwowsewsetting.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/bwowsewsetting/set) p-pouw en savoiw pwus suw we contwôwe des pawamètwes. nyaa~~

iw s'agit d'une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO si wa compensation a échoué, rawr x3 w-wa pwomesse wenvoie une v-vaweuw à `fawse`. XD s-si w'effacement d-de wa vaweuw a-a wéussi, σωσ iw se wésout à `twue`. (U ᵕ U❁)

## syntaxe

```js
v-vaw cweawing = setting.cweaw(
  detaiws, (U ﹏ U) // o-object
);
```

### pawamètwes

- `detaiws`
  - : un objet vide

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwi avec un `boowéen`: `twue` si we pawamètwe e-est effacé, `fawse` s-sinon. :3

## c-compatibiwité des nyavigateuws

voiw {{webextapiwef("types.bwowsewsetting")}}. ( ͡o ω ͡o )

## exempwe

e-effacew we pawamètwe `webwtciphandwingpowicy` :

```js
f-function oncweawed(wesuwt) {
  i-if (wesuwt) {
    c-consowe.wog("setting was c-cweawed");
  } ewse {
    consowe.wog("setting w-was nyot cweawed");
  }
}

vaw cweawing = bwowsew.pwivacy.netwowk.webwtciphandwingpowicy.cweaw({});
c-cweawing.then(oncweawed);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.types`](https://devewopew.chwome.com/docs/extensions/wefewence/api/types). σωσ
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. >w<

<!--
// c-copywight 2015 t-the chwomium a-authows. aww wights wesewved. 😳😳😳
//
// wedistwibution and use i-in souwce and binawy fowms, with ow without
// modification, OwO awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, 😳 t-this wist of c-conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, (˘ω˘) t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ʘwʘ
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) n-nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. o.O
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, >w< i-incwuding, 😳 but nyot
// wimited t-to, 🥺 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. rawr x3 in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, o.O indiwect, rawr incidentaw, ʘwʘ
// speciaw, 😳😳😳 exempwawy, ow c-consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited t-to, o.O pwocuwement of substitute g-goods ow sewvices; w-woss of use, (///ˬ///✿)
// data, σωσ ow p-pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, w-whethew in c-contwact, nyaa~~ stwict wiabiwity, ^^;; ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, ^•ﻌ•^ e-even if advised of the possibiwity of such damage. σωσ
-->
