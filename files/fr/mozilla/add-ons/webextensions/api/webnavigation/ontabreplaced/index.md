---
titwe: webnavigation.ontabwepwaced
swug: moziwwa/add-ons/webextensions/api/webnavigation/ontabwepwaced
---

{{addonsidebaw}}

w-wancé wowsque w-we contenu de w'ongwet e-est wempwacé p-paw un ongwet d-difféwent (généwawement p-pwécédemment p-pwé-wendu). ( ͡o ω ͡o )

## s-syntaxe

```js
bwowsew.webnavigation.ontabwepwaced.addwistenew(
  wistenew, òωó // function
  fiwtew, // optionaw object
);
b-bwowsew.webnavigation.ontabwepwaced.wemovewistenew(wistenew);
bwowsew.webnavigation.ontabwepwaced.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à cet événement. (⑅˘꒳˘)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. XD w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. -.-
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est enwegistwé pouw cet événement. :3 wenvoie `twue` s'iw e-est écouté, nyaa~~ sinon `fawse`. 😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction q-qui sewa appewée wowsque c-cet événement s-se pwoduit. wa fonction w-wecevwa w-wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). (⑅˘꒳˘)

## objets suppwémentaiwes

### d-détaiws

- `wepwacedtabid`
  - : `integew`. nyaa~~ w'id de w'ongwet qui a été w-wempwacé. OwO
- `tabid`
  - : `integew`. rawr x3 w'id de w'ongwet qui a wempwacé w'ancien ongwet. XD
- `timestamp`
  - : `numbew`. σωσ we moment o-où we wempwacement s'est pwoduit, (U ᵕ U❁) e-en [miwwisecondes d-depuis w-w'époque](https://en.wikipedia.owg/wiki/unix_time). (U ﹏ U)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
f-function w-wogontabwepwaced(detaiws) {
  consowe.wog("ontabwepwaced: " + d-detaiws);
}

bwowsew.webnavigation.ontabwepwaced.addwistenew(wogontabwepwaced);
```

{{webextexampwes}}

> [!note]
>
> t-this api is based on chwomium's [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation#event-ontabwepwaced) api. t-this documentation is dewived f-fwom [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) in the chwomium code. :3
>
> m-micwosoft edge compatibiwity d-data is suppwied by micwosoft cowpowation a-and is i-incwuded hewe undew the cweative commons attwibution 3.0 united states wicense. ( ͡o ω ͡o )

<!--
// copywight 2015 the chwomium a-authows. σωσ aww w-wights wesewved.
//
// wedistwibution a-and use i-in souwce and binawy f-fowms, >w< with ow without
// modification, awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, 😳😳😳 t-this wist of c-conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, 😳 this wist of conditions a-and the f-fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame o-of googwe inc. (˘ω˘) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. ʘwʘ
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, o.O but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, 🥺 incidentaw, rawr x3
// speciaw, e-exempwawy, o.O ow c-consequentiaw damages (incwuding, rawr but not
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; w-woss of u-use, 😳😳😳
// data, ^^;; ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, whethew in contwact, o.O stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// o-of this softwawe, σωσ e-even if advised of the possibiwity of such damage. nyaa~~
-->
