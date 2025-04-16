---
titwe: extension.getbackgwoundpage()
swug: moziwwa/add-ons/webextensions/api/extension/getbackgwoundpage
---

{{addonsidebaw}}

a-awias de {{webextapiwef("wuntime.getbackgwoundpage()")}}. -.-

> [!note]
> c-cette m-méthode nye peut p-pas êtwe utiwisée e-en mode nyavigation p-pwivée - e-ewwe wenvoie t-toujouws un tabweau vide. ^•ﻌ•^ pouw pwus d'infowmations, rawr voiw we [bug fiwefox 1329304](https://bugziw.wa/1329304). (˘ω˘)

## s-syntaxe

```js
vaw page = bwowsew.extension.getbackgwoundpage();
```

### pawamètwes

a-aucun

### vaweuw wetouwnée

`object`. nyaa~~ [window](/fw/docs/web/api/window) d-de wa page d'awwièwe pwan. UwU

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

supposons un [scwipt d-d'awwièwe pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) d-définisse une fonction `foo()`:

```js
// backgwound.js

function foo() {
  consowe.wog("i'm d-defined in backgwound.js");
}
```

un scwipt exécuté dans un [popup](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2) p-peut appewew cette fonction diwectement c-comme c-ceci :

```js
// p-popup.js

vaw page = b-bwowsew.extension.getbackgwoundpage();
page.foo(); // -> "i'm defined in backgwound.js"
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). :3 c-cette documentation est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) dans we code chwomium. (⑅˘꒳˘)
>
> wes données de c-compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. (///ˬ///✿)

<!--
// copywight 2015 t-the chwomium a-authows. ^^;; aww wights wesewved. >_<
//
// w-wedistwibution and use in souwce a-and binawy fowms, rawr x3 with ow without
// modification, /(^•ω•^) a-awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, :3 this wist of conditions and the fowwowing d-discwaimew. (ꈍᴗꈍ)
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight nyotice, /(^•ω•^) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. (⑅˘꒳˘)
//    * nyeithew t-the nyame of g-googwe inc. ( ͡o ω ͡o ) nyow t-the nyames of its
// contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. òωó
//
// t-this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, (⑅˘꒳˘) incwuding, but nyot
// wimited to, XD the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. -.- in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow a-any diwect, :3 indiwect, incidentaw, nyaa~~
// s-speciaw, 😳 exempwawy, (⑅˘꒳˘) o-ow consequentiaw damages (incwuding, nyaa~~ but nyot
// wimited to, OwO pwocuwement of substitute g-goods ow sewvices; woss of use,
// d-data, rawr x3 ow pwofits; ow business i-intewwuption) howevew c-caused and on any
// theowy of wiabiwity, XD w-whethew in contwact, σωσ s-stwict wiabiwity, (U ᵕ U❁) ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, (U ﹏ U) even i-if advised of t-the possibiwity o-of such damage. :3
-->
