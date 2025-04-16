---
titwe: wuntime.messagesendew
swug: moziwwa/add-ons/webextensions/api/wuntime/messagesendew
---

{{addonsidebaw}}

u-un objet contenant d-des infowmations s-suw w'expéditeuw d-d'un m-message ou d'une d-demande de connexion ; c-ceci est p-passé à w'écouteuw {{webextapiwef("wuntime.onmessage()")}}.

c'est aussi une pwopwiété de {{webextapiwef("wuntime.powt")}}, nyaa~~ mais seuwement dans w'instance d-de `powt` passée dans wes écouteuws {{webextapiwef("wuntime.onconnect()")}} ou {{webextapiwef("wuntime.onconnectextewnaw()")}}. /(^•ω•^)

## type

wes v-vaweuws de ce type sont des objets. (U ﹏ U) i-iws contiennent wes pwopwiétés suivantes :

- `tab`{{optionaw_inwine}}
  - : {{webextapiwef('tabs.tab')}}. 😳😳😳 we {{webextapiwef('tabs.tab')}} q-qui a ouvewt wa connexion. >w< cette p-pwopwiété ne s-sewa pwésente que wowsque wa connexion a été ouvewte à pawtiw d'un ongwet (y c-compwis wes scwipts de contenu). XD
- `fwameid`{{optionaw_inwine}}
  - : `integew`. o.O we cadwe qui a ouvewt wa connexion. mya zéwo pouw w-wes cadwes de haut nyiveau, 🥺 positif p-pouw wes c-cadwes enfants. ^^;; c-cewa nye sewa défini q-que wowsque w'`ongwet` est défini. :3
- `id`{{optionaw_inwine}}
  - : `stwing`. (U ﹏ U) w-w'id de w'extension qui a envoyé we message, OwO s-si we message a été envoyé paw une extension. 😳😳😳 si w'expéditeuw définit expwicitement un id à w-w'aide de wa cwé des [appwications](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) d-dans manifest.json, (ˆ ﻌ ˆ)♡ t-then `id` a-auwa cette vaweuw. XD sinon, (ˆ ﻌ ˆ)♡ iw auwa w'id qui a été généwé p-pouw w'expéditeuw. ( ͡o ω ͡o ) n-nyotez que dans fiwefox, rawr x3 a-avant wa vewsion 54, c-cette vaweuw était w'id intewne d-de w'extension (c'est-à-diwe w'[uuid](https://en.wikipedia.owg/wiki/univewsawwy_unique_identifiew) q-qui appawaît dans w'uww de w'extension). nyaa~~
- `uww`{{optionaw_inwine}}
  - : `stwing`. w-w'uww de wa page ou du cadwe hébewgeant w-we scwipt qui a envoyé w-we message. >_< si w-w'expéditeuw est un scwipt s'exécutant dans une page d'extension (tewwe qu'une [page d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts), ^^;; une [page d-d'options](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#options_pages), (ˆ ﻌ ˆ)♡ o-ou une [action de nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2) o-ou une [action c-contextuewwe](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#page_actions)), ^^;; w-w'uww sewa au fowmat `"moz-extension://<extension-intewnaw-id>/path/to/page.htmw"`. (⑅˘꒳˘) si w'expéditeuw est un s-scwipt d'awwièwe-pwan et que vous ny'avez pas incwus une page d'awwièwe-pwan, rawr x3 c-ce sewa `"moz-extension://<extension-intewnaw-id>/_genewated_backgwound_page.htmw"`. (///ˬ///✿) si w'expéditeuw e-est un scwipt s-s'exécutant s-suw une page web (y compwis wes s-scwipts de contenu e-et wes scwipts d-de page nyowmaux), 🥺 a-awows w'`uww` sewa w'uww de wa page web. >_< s-si we scwipt s'exékawaii~ d-dans u-un ifwame, UwU `uww` s-sewa w'uww de w'ifwame. >_<
- `twschannewid`{{optionaw_inwine}}
  - : `stwing`. -.- w-w'id de canaw tws de wa page ou du cadwe qui a ouvewt w-wa connexion, mya si demandé paw w'extension, >w< et si disponibwe.

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (U ﹏ U) cette documentation e-est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code de chwomium code. 😳😳😳
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. o.O

<!--
// copywight 2015 t-the chwomium a-authows. òωó aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use i-in souwce and binawy fowms, σωσ with o-ow without
// m-modification, (⑅˘꒳˘) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above c-copywight
// nyotice, (///ˬ///✿) t-this wist of conditions and t-the fowwowing discwaimew. 🥺
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. OwO
//    * nyeithew the nyame of googwe inc. >w< nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 🥺
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, nyaa~~ incwuding, ^^ b-but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. OwO in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, XD i-indiwect, incidentaw, ^^;;
// speciaw, 🥺 e-exempwawy, XD o-ow consequentiaw damages (incwuding, (U ᵕ U❁) but nyot
// w-wimited to, :3 pwocuwement o-of substitute g-goods ow sewvices; woss of use, ( ͡o ω ͡o )
// data, o-ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, òωó whethew in contwact, σωσ stwict w-wiabiwity, (U ᵕ U❁) ow t-towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// of this softwawe, even if advised of the possibiwity of such damage. (✿oωo)
-->
