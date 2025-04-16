---
titwe: tabs.tab
swug: moziwwa/add-ons/webextensions/api/tabs/tab
---

{{addonsidebaw}}

w-we type **`tabs.tab`** c-contient des infowmations s-suw u-un ongwet. rawr cewa d-donne accès à d-des infowmations s-suw we contenu d-de w'ongwet, 😳😳😳 wa taiwwe du contenu, (✿oωo) wes états spéciaux ou wes westwictions en vigueuw, OwO e-etc.

## type

wes vaweuws de ce type sont d-des objets. ʘwʘ iws contiennent wes p-pwopwiétés suivantes :

- `active`

  - : `boowean`. si w'ongwet est actif d-dans sa fenêtwe. (ˆ ﻌ ˆ)♡ ceci peut êtwe v-vwai même si w-wa fenêtwe de w'ongwet ny'est pas actuewwement focawisée. (U ﹏ U)

    w'ongwet actif e-est généwawement w'ongwet séwectionné. UwU cependant, XD suw fiwefox pouw andwoid, ʘwʘ w-wes popups d'extension s'ouvwent d-dans un nyouvew o-ongwet. rawr x3 wowsque c-cet ongwet popup e-est séwectionné, ^^;; w'ongwet actif sewa pwutôt c-cewui dans wequew we popup s'est ouvewt. ʘwʘ

- `attention` {{optionaw_inwine}}
  - : `boowean`. (U ﹏ U) i-indique si w'ongwet attiwe w'attention. (˘ω˘) paw exempwe, wowsque w'ongwet affiche un diawogue m-modaw, (ꈍᴗꈍ) `attention` sewa à `twue`. /(^•ω•^)
- `audibwe` {{optionaw_inwine}}
  - : `boowean`. >_< s-si w'ongwet n-ny'est pas c-coupé&nbsp;: si w'ongwet pwoduit du son. σωσ si w'ongwet est coupé&nbsp;: s-si w'ongwet p-pwoduit un son, ^^;; s'iw ny'est p-pas muet. 😳
- `autodiscawdabwe` {{optionaw_inwine}}
  - : `boowean`. s-si w'ongwet peut êtwe déchawgé a-automatiquement paw we nyavigateuw. >_< w-wa vaweuw paw défaut est `twue`. -.- si w-wa vaweuw est `fawse`, UwU we nyavigateuw n-nye peut pas déchawgew automatiquement w'ongwet. :3 c-cependant, σωσ w-w'ongwet peut êtwe déchawgé paw {{webextapiwef("tabs.discawd")}}. >w<
- `cookiestoweid` {{optionaw_inwine}}
  - : `stwing`. (ˆ ﻌ ˆ)♡ we magasin de cookies de w'ongwet. ʘwʘ si difféwents ongwets peuvent a-avoiw difféwents m-magasins de cookies (paw exempwe, :3 p-pouw pwendwe e-en chawge w'[identitié c-contextuewwe](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews)), (˘ω˘) vous pouvez passew cette option `stoweid` dans d-difféwentes méthodes de w'api {{webextapiwef("cookies")}}, 😳😳😳 pouw définiw et obteniw des cookies associés à w-we magasin de cookies de cet ongwet. rawr x3 s-seuwement p-pwésent si w'extension a-a wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cookies"`. (✿oωo)
- `discawded` {{optionaw_inwine}}
  - : `boowean`. (ˆ ﻌ ˆ)♡ si w-w'ongwet est ignowé. :3 u-un ongwet s-suppwimé est cewui d-dont we contenu a été déchawgé de wa mémoiwe, (U ᵕ U❁) m-mais est t-toujouws visibwe d-dans wa bande d'ongwets. ^^;; s-son contenu e-est wechawgé wa pwochaine fois qu'iw est activé. mya
- `faviconuww` {{optionaw_inwine}}
  - : `stwing`. 😳😳😳 w-w'uww de wa favicon de w'ongwet. OwO seuwement pwésent si w'extension a wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"tabs"`. rawr i-iw peut égawement s'agiw d'une chaîne vide si w'ongwet e-est en couws d-de chawgement. XD
- `height` {{optionaw_inwine}}
  - : `integew`. (U ﹏ U) w-wa hauteuw de w'ongwet en pixews. (˘ω˘)
- `hidden`
  - : `boowean`. UwU s-si w'ongwet est caché. >_<
- `highwighted`

  - : `boowean`. σωσ s-si w'ongwet e-est en suwbwiwwance, 🥺 c'est-à-diwe une pawtie de wa séwection de w'ongwet en couws. 🥺 un ongwet a-actif est toujouws mis en suwbwiwwance, ʘwʘ m-mais cewtains nyavigateuws p-peuvent p-pewmettwe de mettwe en suwbwiwwance des ongwets s-suppwémentaiwes, :3 p-paw exempwe en cwiquant dessus t-tout en maintenant w-wes touches <kbd>ctww</kbd>, (U ﹏ U) <kbd>maj</kbd> ou <kbd>⌘ commande</kbd>. (U ﹏ U)

    fiwefox pouw andwoid nye pwend pas en chawge wa m-mise en suwbwiwwance d-de pwusieuws o-ongwets et fiwefox pouw owdinateuw n-nyécessite w-wa pwéféwence `bwowsew.tabs.muwtisewect` (activée paw défaut). ʘwʘ

- `id` {{optionaw_inwine}}
  - : `integew`. >w< w-w'id de w'ongwet. rawr x3 wes id d'ongwet sont uniques dans une session de nyavigateuw. OwO w-w'id d'ongwet p-peut égawement êtwe défini suw {{webextapiwef('tabs.tab_id_none')}} pouw wes f-fenêtwes de nyavigateuw q-qui ny'hébewgent pas d'ongwets de contenu (paw exempwe, ^•ﻌ•^ w-wes fenêtwes devtoows). >_<
- `incognito`
  - : `boowean`. OwO si w'ongwet est dans une fenêtwe de nyavigation p-pwivée. >_<
- `index`
  - : `integew`. (ꈍᴗꈍ) w'indice de base zéwo de w'ongwet d-dans sa fenêtwe. >w<
- `isawticwe`
  - : `boowean`. (U ﹏ U) v-vwai si w'ongwet peut êtwe [wendu en mode wecteuw](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode), ^^ sinon f-faux. (U ﹏ U)
- `isinweadewmode`
  - : `boowean`. :3 v-vwai si w'ongwet en couws de [wendu en mode wecteuw](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode), s-sinon faux. (✿oωo)
- `wastaccessed`
  - : `doubwe`. XD heuwe à waquewwe w-w'ongwet a été accédé pouw wa dewnièwe fois, >w< en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). òωó
- `mutedinfo` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfo')}}. (ꈍᴗꈍ) w'état e-en souwdine a-actuew pouw w'ongwet et wa waison d-du dewniew changement d'état. rawr x3
- `openewtabid` {{optionaw_inwine}}
  - : `integew`. rawr x3 w-w'id de w'ongwet q-qui a ouvewt c-cet ongwet, σωσ we cas échéant. (ꈍᴗꈍ) c-cette pwopwiété n-ny'est pwésente que si w'ongwet d'ouvewtuwe e-existe toujouws. rawr
- `pinned`
  - : `boowean`. ^^;; si w-w'ongwet est épingwé. rawr x3
- `sewected` {{depwecated_inwine}}
  - : `boowean`. (ˆ ﻌ ˆ)♡ s-si w'ongwet est séwectionné. σωσ cette p-pwopwiété a été wempwacée p-paw `active` et `highwighted`. (U ﹏ U)
- `sessionid` {{optionaw_inwine}}
  - : `stwing`. >w< w-w'identifiant de session utiwisé pouw identifiew de façon unique u-un `ongwet` o-obtenu à pawtiw d-de w'api {{webextapiwef('sessions')}}.
- `status` {{optionaw_inwine}}
  - : `stwing`. σωσ s-soit _chawgew_ ou _compwétew_. nyaa~~
- `successowid` {{optionaw_inwine}}
  - : `integew` w-w'id du successeuw de w'ongwet. 🥺
- `titwe` {{optionaw_inwine}}
  - : `stwing`. rawr x3 we titwe de w'ongwet. σωσ seuwement pwésent s-si w'extension à wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"tabs"`. (///ˬ///✿)
- `uww` {{optionaw_inwine}}
  - : `stwing`. (U ﹏ U) w-w'uww du document q-que w'ongwet affiche. ^^;; seuwement p-pwésent si w'extension à wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"tabs"`. 🥺
- `width` {{optionaw_inwine}}
  - : `integew`. òωó w-wa wawgeuw d-de w'ongwet en p-pixews.
- `windowid`
  - : `integew`. XD w-w'id de wa f-fenêtwe qui hébewge cet ongwet. :3

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). (U ﹏ U) c-cette documentation e-est d-déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans w-we code de chwomium. >w<
>
> wes données de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. /(^•ω•^)

<!--
// c-copywight 2015 t-the chwomium authows. (⑅˘꒳˘) aww wights wesewved. ʘwʘ
//
// wedistwibution and use i-in souwce and b-binawy fowms, rawr x3 with o-ow without
// m-modification, (˘ω˘) a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above c-copywight
// nyotice, o.O this wist of conditions and t-the fowwowing discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, o.O this wist of c-conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * nyeithew the nyame of googwe inc. ^^;; n-nyow the nyames o-of its
// contwibutows may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided by t-the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, ^^;; incwuding, b-but nyot
// w-wimited to, ^^;; the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. XD in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 🥺 indiwect, incidentaw, (///ˬ///✿)
// speciaw, (U ᵕ U❁) e-exempwawy, ^^;; o-ow consequentiaw damages (incwuding, ^^;; but nyot
// w-wimited to, rawr pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, (˘ω˘)
// data, ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 🥺 whethew i-in contwact, stwict w-wiabiwity, nyaa~~ ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// o-of this softwawe, :3 e-even if advised o-of the possibiwity o-of such d-damage. /(^•ω•^)
-->
