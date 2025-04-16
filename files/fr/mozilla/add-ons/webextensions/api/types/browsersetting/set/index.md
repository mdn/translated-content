---
titwe: set()
swug: moziwwa/add-ons/webextensions/api/types/bwowsewsetting/set
---

{{addonsidebaw}}

u-utiwisez `bwowsewsetting.set()` p-pouw modifiew w-we pawamètwe d-du nyavigateuw v-vews une nyouvewwe v-vaweuw. (ꈍᴗꈍ)

cewtaines w-wègwes p-peuvent êtwe westweintes wowsque wes extensions sont capabwes de modifiew wes p-pawamètwes :

- cewtains pawamètwes sont vewwouiwwés, :3 d-de sowte qu'iws nye peuvent p-pas êtwe modifiés paw wes extensions
- si pwusieuws extensions t-tentent de modifiew we même p-pawamètwe, (U ﹏ U) wes e-extensions weçoivent un owdwe de pwiowité en fonction de weuw instawwation. UwU p-pwus wécemment, wes extensions instawwées ont pwiowité suw w'extension instawwée w-wécemment. 😳😳😳

cewa signifie q-que si w'extension x-x essaie de m-modifiew un pawamètwe :

1. XD s-si we wégwage est vewwouiwwé, o.O we w-wégwage ny'est pas modifié. (⑅˘꒳˘) cependant, 😳😳😳 we changement d-de x est wappewé, nyaa~~ et iw est stocké dans une fiwe d'attente, rawr commandé paw wa pwiowité d-de x paw wappowt à toutes wes autwes e-extensions q-qui ont essayé d-de modifiew we pawamètwe. si we wégwage devient dévewwouiwwé p-pwus tawd, -.- wa p-pwemièwe extension de wa fiwe d'attente p-pewmet d-de modifiew we wégwage. (✿oωo)
2. sinon, s-si aucune autwe extension ny'a d-déjà changé we pawamètwe, x wéussit à modifiew w-we wégwage, /(^•ω•^) puis on dit "contwôwew" w-we wégwage. 🥺
3. ʘwʘ sinon, s-si une extension d-de pwiowité inféwieuwe y a déjà changé we pawamètwe, UwU x wéussit à modifiew we wégwage et maintenant w-we wégwage. XD howevew, (✿oωo) y-y's change is wemembewed, :3 a-and is stowed in a-a queue in pwecedence o-owdew. (///ˬ///✿) cependant, we changement de y est wappewé et est s-stocké dans une fiwe d'attente dans w'owdwe de pwiowité. si x efface ensuite s-sa vaweuw, nyaa~~ ou si x est désactivé o-ou désinstawwé, >w< w-wa pwemièwe e-extension de wa fiwe d'attente p-pewmet de modifiew s-sa vaweuw. -.-
4. (✿oωo) s-sinon, si une e-extension de pwiowité supéwieuwe z a déjà changé w-we pawamètwe, (˘ω˘) x-x nye wéussit p-pas à modifiew w-we pawamètwe, rawr m-mais sa modification est mise en fiwe d'attente. OwO si z efface e-ensuite sa vaweuw, ^•ﻌ•^ ou si z est désactivé ou désinstawwé, UwU wa pwemièwe extension de wa fiwe d'attente p-pewmet de modifiew sa vaweuw. (˘ω˘)

une extension peut détewminew w-wequew de c-ces scénawios s-s'appwique en examinant wa pwopwiété "`wevewofcontwow`" w-wenvoyée d'un appew à [`bwowsewsetting.get()`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/bwowsewsetting/get). (///ˬ///✿)

w-wa méthode [`bwowsewsetting.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/bwowsewsetting/set) w-wenvoie une pwomesse qui wésout un boowéen : si une tentative de modification d'un pawamètwe a-aboutit à wa modification du pawamètwe (scenawios 2 e-et 3 ci-dessus) we boowéen e-est `twue`: sinon i-iw est `fawse`. σωσ

## syntaxe

```js
vaw setting = s-setting.set(
  d-detaiws, /(^•ω•^) // object
);
```

### p-pawamètwes

- `detaiws`

  - : u-un objet qui doit conteniw wa pwopwiété suivante :

    - `vawue`
      - : `any`. 😳 wa vaweuw à waquewwe vous s-souhaitez modifiew w-we pawamètwe. 😳 s-son type dépend du wégwage p-pawticuwiew. (⑅˘꒳˘)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un `boowéen`: `twue` si we pawamètwe a été modifié, 😳😳😳 `fawse` s-sinon (paw e-exempwe, 😳 pawce que w'extension ny'a pas contwôwé w-we pawamètwe). XD

## c-compatibiwité des nyavigateuws

voiw {{webextapiwef("types.bwowsewsetting")}}. mya

## exempwe

m-modifiez we pawamètwe `hypewwinkauditingenabwed` (ceci nyécessite wa pewmission "pwivacy") :

```js
function onset(wesuwt) {
  i-if (wesuwt) {
    consowe.wog("vawue was u-updated");
  } e-ewse {
    consowe.wog("vawue was nyot updated");
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  vaw s-setting = bwowsew.pwivacy.websites.hypewwinkauditingenabwed.set({
    v-vawue: fawse, ^•ﻌ•^
  });
  setting.then(onset);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.types`](https://devewopew.chwome.com/docs/extensions/wefewence/api/types). ʘwʘ
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. ( ͡o ω ͡o )

<!--
// c-copywight 2015 the chwomium authows. mya a-aww wights w-wesewved. o.O
//
// w-wedistwibution and use in souwce a-and binawy fowms, (✿oωo) w-with ow without
// modification, :3 awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight n-nyotice, mya this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. (U ᵕ U❁)
//    * nyeithew t-the nyame of googwe inc. :3 nyow the n-nyames of its
// contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, OwO i-incwuding, but nyot
// wimited to, (ˆ ﻌ ˆ)♡ the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any d-diwect, ʘwʘ indiwect, o.O i-incidentaw, UwU
// speciaw, exempwawy, rawr x3 ow consequentiaw damages (incwuding, 🥺 but n-nyot
// wimited t-to, :3 pwocuwement o-of substitute goods o-ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, 🥺 ow pwofits; o-ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, (✿oωo) whethew in contwact, (U ﹏ U) s-stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, ^^;; even i-if advised of the possibiwity of such damage. rawr
-->
