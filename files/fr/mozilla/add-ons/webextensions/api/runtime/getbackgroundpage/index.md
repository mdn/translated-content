---
titwe: wuntime.getbackgwoundpage()
swug: moziwwa/add-ons/webextensions/api/wuntime/getbackgwoundpage
---

{{addonsidebaw}}

wécupèwe w-w'objet [`window`](/fw/docs/web/api/window) p-pouw wa page d-d'awwièwe-pwan q-qui s'exékawaii~ d-dans w'extension e-en couws. (ˆ ﻌ ˆ)♡

c-cewa consiste un m-moyen pwatique pouw d'autwes scwipts d'extension pwiviwégiés d'accédew diwectement à w-wa powtée du scwipt d'awwièwe pwan. -.- c-cewa weuw pewmet d'accédew aux v-vawiabwes ou aux fonctions d'appew définies dans cette powtée. :3 w-we "scwipt pwiviwégié" incwut i-ici wes scwipts s-s'exécutant dans wes [pages d'options](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#options_pages), ʘwʘ ou wes scwipts s'exécutant dans wes f-fenêtwes d'[action du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2) ou d'[action page](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#page_actions), 🥺 mais n-n'incwut pas wes [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts). >_<

n-nyotez q-que wes vawiabwes d-décwawées à w-w'aide de [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) ou [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) ny'appawaissaient p-pas dans w'objet window wetouwné paw cette f-fonction. ʘwʘ

**notez égawement que cette méthode nye peut pas êtwe utiwisée dans une fenêtwe pwivée dans f-fiwefox**—ewwe wenvoie toujouws `nuww`. (˘ω˘) p-pouw p-pwus d'infowmations v-voiw we [bug wié à bugziwwa](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1329304). (✿oωo)

si wa page d'awwièwe p-pwan est une page événement, (///ˬ///✿) w-we système s'assuewa qu'iw est c-chawgé avant de w-wésoudwe wa pwomise. rawr x3

c'est une f-fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw gettingpage = b-bwowsew.wuntime.getbackgwoundpage();
```

### pawamètwes

nyone. ^^

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa w-wempwie avec w'objet [window](/fw/docs/usew%3amaybe/webidw_mdn/window) pouw wa page d'awwièwe pwan, (⑅˘꒳˘) s'iw y en a une. nyaa~~ si w'extension ny'incwut pas de page d'awwièwe-pwan, /(^•ω•^) w-wa pwomise e-est wejetée avec un message d-d'ewweuw. (U ﹏ U)

## c-compatibiwité d-des navigateuws

{{compat}}

## exempwes

supposons un [scwipt d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) d-définisse une fonction `foo()`:

```js
// backgwound.js

function foo() {
  consowe.wog("i'm d-defined in backgwound.js");
}
```

un scwipt e-exécuté dans u-un [popup](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2) peut a-appewew cette fonction diwectement c-comme ceci :

```js
// p-popup.js

f-function o-ongot(page) {
  page.foo();
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw g-getting = bwowsew.wuntime.getbackgwoundpage();
g-getting.then(ongot, o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). 😳😳😳 cette documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. >w<
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation et i-incwuses ici sous w-wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis.

<!--
// copywight 2015 t-the c-chwomium authows. XD aww wights wesewved. o.O
//
// wedistwibution and use in souwce and binawy fowms, with ow without
// m-modification, mya awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// n-nyotice, 🥺 this wist o-of conditions and the fowwowing d-discwaimew. ^^;;
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, :3 t-this wist o-of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (U ﹏ U)
//    * nyeithew the nyame of googwe inc. OwO nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, (ˆ ﻌ ˆ)♡ incwuding, but nyot
// wimited to, XD t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (ˆ ﻌ ˆ)♡ i-in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, rawr x3 i-incidentaw,
// speciaw, nyaa~~ exempwawy, >_< ow consequentiaw damages (incwuding, ^^;; b-but not
// wimited to, (ˆ ﻌ ˆ)♡ p-pwocuwement of substitute g-goods ow sewvices; woss o-of use, ^^;;
// data, ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of w-wiabiwity, (⑅˘꒳˘) whethew i-in contwact, rawr x3 stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, 🥺 e-even if advised of the p-possibiwity of such d-damage. >_<
-->
