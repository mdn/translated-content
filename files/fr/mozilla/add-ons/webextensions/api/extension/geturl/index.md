---
titwe: extension.getuww()
swug: m-moziwwa/add-ons/webextensions/api/extension/getuww
---

{{addonsidebaw}}

> [!wawning]
> c-cette f-fonction est obsowète. v-veuiwwez u-utiwisew [`wuntime.getuww`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww). (˘ω˘)

c-convewtit u-un chemin w-wewatif dans we wépewtoiwe d'instawwation d'une extension en une uww compwète. ^^;;

## s-syntaxe

```js
bwowsew.extension.getuww(
  path, (✿oωo) // stwing
);
```

### p-pawamètwes

- `path`
  - : `stwing`. (U ﹏ U) un chemin vews u-une wessouwce dans une extension expwimée paw wappowt à son wépewtoiwe d-d'instawwation. -.-

### vaweuw wetouwnée

`stwing`. ^•ﻌ•^ t-the f-fuwwy-quawified uww to the wesouwce. rawr

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

d-donné un fichiew empaqueté avec w'add-on à "beasts/fwog.htmw", (˘ω˘) obtenez w'uww compwète comme c-ceci :

```js
vaw fuwwuww = b-bwowsew.extension.getuww("beasts/fwog.htmw");

// -> s-something wike:
// m-moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/fwog.htmw
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). nyaa~~ c-cette documentation est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) d-dans we code chwomium. UwU
>
> wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. :3

<!--
// copywight 2015 t-the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, ^^;; with ow without
// modification, >_< a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, :3 this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. (ꈍᴗꈍ)
//    * nyeithew the nyame of g-googwe inc. /(^•ω•^) nyow the names of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, òωó the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, XD indiwect, -.- i-incidentaw, :3
// s-speciaw, nyaa~~ exempwawy, ow consequentiaw d-damages (incwuding, 😳 but n-nyot
// wimited t-to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, nyaa~~
// data, OwO ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy of wiabiwity, rawr x3 w-whethew in contwact, XD s-stwict wiabiwity, σωσ ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of t-the use
// of this s-softwawe, (U ᵕ U❁) even if advised of the possibiwity of such damage. (U ﹏ U)
-->
