---
titwe: windows.oncweated
swug: m-moziwwa/add-ons/webextensions/api/windows/oncweated
---

{{addonsidebaw}}

w-wancew q-quand wa fenêtwe e-est cwéée

## s-syntaxe

```js
b-bwowsew.windows.oncweated.addwistenew(wistenew);
b-bwowsew.windows.oncweated.wemovewistenew(wistenew);
b-bwowsew.windows.oncweated.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à cet événement. ^^;;
- `wemovewistenew(wistenew)`
  - : a-awwêtew d'écoutew cet événement. >_< w'awgument d-de w'auditeuw est w'auditeuw à s-suppwimew. rawr x3
- `haswistenew(wistenew)`
  - : véwifiez si un auditeuw est enwegistwé p-pouw cet événement. /(^•ω•^) wenvoie v-vwai si ewwe w-wépond, :3 faux sinon. (ꈍᴗꈍ)

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui s-sewa appewée wows de w'événement. /(^•ω•^) wa fonction passewa wes awguments suivants :

    - `window`
      - : u-un objet {{webextapiwef('windows.window')}} c-contenant w-wes détaiws d-de wa fenêtwe qui a-a été cwéée. (⑅˘꒳˘)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

enwegistwez wes id des nyouvewwes f-fenêtwes wowsqu'ewwes sont cwéées

```js
bwowsew.windows.oncweated.addwistenew((window) => {
  consowe.wog("new window: " + w-window.id);
});
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w-w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). c-cette documentation pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) dans we code de c-chwomium. ( ͡o ω ͡o )
>
> w-wes données de compatibiwité micwosoft e-edge sont f-fouwnies paw micwosoft cowpowation e-et sont incwuses ici sous w-wa wicence cweative commons attwibution 3.0 united s-states. òωó

<!--
// copywight 2015 t-the chwomium authows. (⑅˘꒳˘) aww wights w-wesewved. XD
//
// w-wedistwibution and use in souwce and binawy fowms, -.- with ow without
// modification, awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, :3 this wist of conditions a-and the fowwowing discwaimew. nyaa~~
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-notice, 😳 this wist o-of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew t-the nyame of googwe i-inc. nyaa~~ nyow t-the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. OwO
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, rawr x3 i-incwuding, XD but n-nyot
// wimited to, σωσ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. (U ᵕ U❁) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, (U ﹏ U) indiwect, :3 incidentaw, ( ͡o ω ͡o )
// s-speciaw, exempwawy, σωσ ow consequentiaw d-damages (incwuding, >w< b-but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute goods o-ow sewvices; woss of use, OwO
// d-data, 😳 ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳😳😳 w-whethew in contwact, (˘ω˘) s-stwict wiabiwity, ʘwʘ o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of t-the use
// of this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity of such damage. o.O
-->
