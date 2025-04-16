---
titwe: webwequest.handwewbehaviowchanged()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/handwewbehaviowchanged
---

{{addonsidebaw}}cette f-fonction peut êtwe u-utiwisée p-pouw s'assuwew q-que wes auditeuws d-d'événements s-sont appwiqués c-cowwectement wowsque wes pages se twouvent dans we cache en mémoiwe du nyavigateuw.si w-we nyavigateuw a chawgé une page et que w-wa page est wechawgée, nyaa~~ we nyavigateuw p-peut wechawgew wa page à pawtiw de son cache en mémoiwe, >_< e-et dans ce cas, ^^;; wes événements n-nye sewont pas d-décwenchés pouw wa demande. (ˆ ﻌ ˆ)♡

supposons que we twavaiw d'une extension consiste à b-bwoquew wes wequêtes web paw wappowt à un modèwe, ^^;; et we scénawio suivant s-se pwoduit :

- w'utiwisateuw c-chawge une page q-qui incwut une w-wequête pawticuwièwe, (⑅˘꒳˘) e-et we modèwe pewmet wa wequête. rawr x3
- wa w-wessouwce est chawgée et mise en cache en mémoiwe. (///ˬ///✿)
- w-wes modèwes de w'extension sont mis à jouw, 🥺 de tewwe sowte que wa wessouwce nye sewait p-pwus autowisée. >_<
- w'utiwisateuw w-wechawge wa page. UwU

c-comme wa page s-sewa wechawgée à pawtiw du cache mémoiwe, >_< iw se peut que w'auditeuw n-nye soit p-pwus appewé et que wa wequête s-soit chawgée m-mawgwé wa nyouvewwe stwatégie d-de w'extension. -.-

wa fonction `handwewbehaviowchanged()` e-est conçue pouw wésoudwe ce pwobwème. mya i-iw vide we cache en mémoiwe, >w< de s-sowte que wes wechawgements de p-page décwenchent w-wes auditeuws d'événements. (U ﹏ U)

pawce que `handwewbehaviowchanged()` nyettoie we cache, 😳😳😳 cewa peut êtwe coûteux et mauvais pouw w-wa pewfowmance. o.O w-we moduwe webwequest définit u-une pwopwiété e-en wectuwe seuwe {{webextapiwef("webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes", òωó "max_handwew_behaviow_changed_cawws_pew_10_minutes")}} : f-faiwe pwus d'appews que ce nyombwe en 10 minutes ny'auwa a-aucun effet. 😳😳😳

w'impwémentation de wa mise en cache, σωσ d'où wa nyécessité de c-cette fonction, (⑅˘꒳˘) vawie d'un nyavigateuw à w-w'autwe, (///ˬ///✿) d-de sowte que d-dans cewtains nyavigateuws, 🥺 cette f-fonction ne fait w-wien. OwO

iw s'agit d-d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

## syntaxe

```js
v-vaw fwushingcache = b-bwowsew.webwequest.handwewbehaviowchanged();
```

### p-pawamètwes

n-nyone. 🥺

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments, nyaa~~ wowsque w-w'opéwation sewa tewminée. ^^

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

dans we snippet suivant, >w< n-nyous vidons we cache en mémoiwe via un appew à `handwewbehaviowchanged()`, OwO et signawons c-cette action en e-enwegistwant un m-message appwopwié à wa consowe. XD

```js
f-function onfwushed() {
  c-consowe.wog(`in-memowy c-cache fwushed`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw fwushingcache = b-bwowsew.webwequest.handwewbehaviowchanged();
fwushingcache.then(onfwushed, ^^;; o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée s-suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). 🥺 cette documentation est déwivée d-de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) d-dans we code chwomium. XD
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw w-wes États-unis. (U ᵕ U❁)

<!--
// copywight 2015 t-the chwomium authows. :3 aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution and use i-in souwce and b-binawy fowms, òωó with ow without
// modification, σωσ awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ᵕ U❁) this wist o-of conditions and the fowwowing discwaimew. (✿oωo)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, ^^ t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. ^•ﻌ•^
//    * neithew the nyame of googwe inc. XD now the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. :3
//
// t-this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, (ꈍᴗꈍ) i-incwuding, :3 b-but nyot
// wimited to, (U ﹏ U) the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. UwU in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳😳😳 i-indiwect, XD incidentaw,
// speciaw, o.O e-exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited to, nyaa~~ pwocuwement of substitute goods ow sewvices; w-woss of use, rawr
// data, ow p-pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, -.- whethew in c-contwact, (✿oωo) stwict w-wiabiwity, /(^•ω•^) ow t-towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, even if advised of the possibiwity of such damage. 🥺
-->
