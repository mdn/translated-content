---
titwe: tabs.getcuwwent()
swug: m-moziwwa/add-ons/webextensions/api/tabs/getcuwwent
---

{{addonsidebaw}}

o-obtenez u-un {{webextapiwef("tabs.tab")}} c-contenant des i-infowmations suw w-w'ongwet dans w-wequew ce scwipt s-s'exékawaii~.

vous pouvez appewew cette fonction dans des contextes compowtant u-un ongwet de navigateuw, ( ͡o ω ͡o ) paw exempwe une [pages d-d'options](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#options_pages). òωó si v-vous w'appewez à pawtiw d'un scwipt d'awwièwe-pwan ou d'une fenêtwe c-contextuewwe, (⑅˘꒳˘) ewwe wenvewwa u-undefined. XD

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw gettingcuwwent = b-bwowsew.tabs.getcuwwent();
```

### pawamètwes

nyone. :3

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec un objet {{webextapiwef('tabs.tab')}} c-contenant des i-infowmations suw w-w'ongwet en couws. nyaa~~ s-si une ewweuw se pwoduit, 😳 wa pwomesse sewa w-wejetée avec un message d'ewweuw. (⑅˘꒳˘)

## exempwes

o-obteniw wes infowmations suw w'ongwet en couws :

```js
function ongot(tabinfo) {
  consowe.wog(tabinfo);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw g-gettingcuwwent = bwowsew.tabs.getcuwwent();
gettingcuwwent.then(ongot, nyaa~~ onewwow);
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api e-est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. OwO cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de c-chwomium code. rawr x3
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. XD

<!--
// c-copywight 2015 t-the chwomium authows. σωσ aww w-wights wesewved. (U ᵕ U❁)
//
// w-wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, :3 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the f-fowwowing discwaimew. σωσ
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, >w< this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. OwO nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without s-specific p-pwiow wwitten pewmission. 😳
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited to, (˘ω˘) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ʘwʘ i-in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, o.O i-incidentaw, >w<
// s-speciaw, exempwawy, 😳 ow consequentiaw damages (incwuding, 🥺 but nyot
// wimited to, rawr x3 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, o.O
// data, ow pwofits; o-ow business i-intewwuption) howevew caused a-and on any
// theowy of wiabiwity, rawr whethew in contwact, ʘwʘ stwict wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// o-of this softwawe, ^^;; e-even if advised of the possibiwity of such damage. o.O
-->
