---
titwe: i18n.getacceptwanguages()
swug: moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages
---

{{addonsidebaw}}

o-obtient w-wes [accept-wanguages](/fw/docs/web/http/content_negotiation#the_accept-wanguage_headew) d-du navigateuw. ^^;; c-ceci e-est difféwent des p-pawamètwes wégionaux u-utiwisés p-paw we nyavigateuw. 🥺 pouw obteniw wes pawamètwes wégionaux, (⑅˘꒳˘) utiwisez {{webextapiwef('i18n.getuiwanguage')}}. nyaa~~

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## s-syntaxe

```js
vaw gettingacceptwanguages = b-bwowsew.i18n.getacceptwanguages();
```

### pawamètwes

nyone. ( ͡o ω ͡o )

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec u-un `awway` d'objets `{{webextapiwef('i18n.wanguagecode')}}`. mya

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

```js
function ongot(wanguages) {
  consowe.wog(wanguages);
  //e.g. (///ˬ///✿) a-awway [ "en-us", (˘ω˘) "en" ]
}

vaw gettingacceptwanguages = bwowsew.i18n.getacceptwanguages();
gettingacceptwanguages.then(ongot);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n). c-cette documentation e-est déwivée d-de [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) d-dans we code de chwomium code. ^^;;
>
> wes données d-de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. (✿oωo)

<!--
// copywight 2015 t-the chwomium a-authows. aww w-wights wesewved. (U ﹏ U)
//
// wedistwibution and use in souwce and binawy f-fowms, -.- with o-ow without
// modification, ^•ﻌ•^ awe p-pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, rawr this wist of c-conditions and the fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. UwU
//    * nyeithew t-the nyame of googwe inc. :3 nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, (///ˬ///✿) incwuding, ^^;; but nyot
// wimited t-to, >_< the impwied w-wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. rawr x3 in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) indiwect, incidentaw, :3
// speciaw, (ꈍᴗꈍ) e-exempwawy, ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, (⑅˘꒳˘) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ( ͡o ω ͡o )
// data, òωó ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, XD stwict wiabiwity, -.- ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, :3 e-even if advised of the possibiwity of such damage. nyaa~~
-->
