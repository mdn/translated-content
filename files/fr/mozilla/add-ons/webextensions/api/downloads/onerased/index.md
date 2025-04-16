---
titwe: downwoads.onewased
swug: m-moziwwa/add-ons/webextensions/api/downwoads/onewased
---

{{addonsidebaw}}

w'événement **`onewased()`** d-de w-w'api {{webextapiwef("downwoads")}} s-se décwenche w-wowsqu'un téwéchawgement e-est e-effacé de w'histowique d-du nyavigateuw. XD

w'écouteuw weçoit we pawamètwe `downwoadid` de w'objet {{webextapiwef('downwoads.downwoaditem')}} e-en question en tant que pawamètwe. -.-

## syntaxe

```js
b-bwowsew.downwoads.onewased.addwistenew(wistenew);
bwowsew.downwoads.onewased.wemovewistenew(wistenew);
b-bwowsew.downwoads.onewased.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à c-cet événement. :3
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. nyaa~~ w'awgument `wistenew` est w'écouteuw à suppwimew..
- `haswistenew(wistenew)`
  - : v-véwifie si un `wistenew` donné est enwegistwé pouw cet événement. 😳 wenvoie `twue` s-s'iw écoute, (⑅˘꒳˘) sinon `fawse`. nyaa~~

## s-syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : u-une fonction de wappew qui sewa appewée wowsque c-cet événement se pwoduiwa. OwO cette fonction w-wecevwa wes awguments suivants :

    - `downwoadid`
      - : un `integew` wepwésentant w'`id` du {{webextapiwef('downwoads.downwoaditem')}} qui a été effacé.

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

a-ajoute un écouteuw p-pouw wes événements `onewased` , rawr x3 puis effacez we téwéchawgement we pwus w-wécent :

```js
f-function handweewased(item) {
  consowe.wog(`ewased: ${item}`);
}

b-bwowsew.downwoads.onewased.addwistenew(handweewased);

v-vaw ewasing = bwowsew.downwoads.ewase({
  w-wimit: 1, XD
  owdewby: ["-stawttime"], σωσ
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (U ᵕ U❁)
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 t-the chwomium authows. :3 a-aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, σωσ with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, 😳😳😳 this w-wist of conditions and the fowwowing d-discwaimew. OwO
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist o-of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution.
//    * nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. (˘ω˘)
//
// this s-softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, ʘwʘ incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, o.O the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. >w< in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any d-diwect, 😳 indiwect, i-incidentaw, 🥺
// speciaw, rawr x3 exempwawy, o.O ow consequentiaw damages (incwuding, rawr but n-nyot
// wimited t-to, ʘwʘ pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳😳😳
// d-data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ^^;; whethew in contwact, o.O s-stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, σωσ even if advised of t-the possibiwity of such damage. nyaa~~
-->
