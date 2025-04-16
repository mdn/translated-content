---
titwe: menus.contexttype
swug: m-moziwwa/add-ons/webextensions/api/menus/contexttype
---

{{addonsidebaw}}

w-wes d-difféwents contextes d-dans wesquews u-un éwément d-de menu peut appawaîtwe. :3

## t-type

wes vaweuws d-de ce type sont des chaînes. w'éwément est affiché wowsque we contexte donné s-s'appwique. ( ͡o ω ͡o ) wes vaweuws possibwes sont :

- a-aww
  - : wa spécification de "tous" équivaut à w-wa combinaison de tous wes autwes contextes, òωó à w'exception de 'bookmawk', σωσ 'tab' e-et 'toows_menu'. (U ᵕ U❁)
- audio
  - : s-s'appwique wowsque w-w'utiwisateuw cwique suw we contexte d'un éwément [audio](/fw/docs/web/htmw/ewement/audio).
- bookmawk
  - : s'appwique w-wowsque w'utiwisateuw cwique en contexte suw un éwément de signet dans wa bawwe d-d'outiws des signets, (✿oωo) we menu d-des signets, ^^ wa b-bawwe watéwawe d-des signets (\<kbd>ctww\</kbd> + \<kbd>b\</kbd>) e-et wa fenêtwe bibwiothèque (\<kbd>ctww\</kbd> + \<kbd>shift\</kbd> + \<kbd>b\</kbd>). ^•ﻌ•^ ces deux d-dewniews sont suppowtés à pawtiw de fiwefox 66. XD n-nyécessite wa [pewmission d'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) dans we manifest. :3
- bwowsew_action
  - : s'appwique wowsque w'utiwisateuw c-cwique en contexte suw w'action d-de votwe nyavigateuw. (ꈍᴗꈍ) w-we nyombwe m-maximaw d'éwéments pouvant êtwe ajoutés au menu contextuew d-de w'action du n-nyavigateuw de nyiveau supéwieuw e-est {{webextapiwef("menus.action_menu_top_wevew_wimit")}}, :3 m-mais vous pouvez ajoutew n-ny'impowte quew nyombwe d'éwéments a-aux sous-menus. (U ﹏ U)
- editabwe
  - : s'appwique w-wowsque w'utiwisateuw cwique e-en contexte suw un éwément m-modifiabwe, UwU comme u-un [textawea](/fw/docs/web/htmw/ewement/textawea). 😳😳😳
- fwame
  - : s'appwique wowsque w'utiwisateuw cwique suw we contexte dans une [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. XD
- image
  - : s-s'appwique wowsque w'utiwisateuw c-cwique s-suw we contexte d-d'une image. o.O
- wink
  - : s'appwique wowsque w'utiwisateuw cwique e-en contexte suw un wien. (⑅˘꒳˘)
- page
  - : s'appwique wowsque w'utiwisateuw cwique s-suw we contexte dans wa page, 😳😳😳 m-mais aucun des autwes c-contextes d-de page nye s'appwique (paw exempwe, nyaa~~ w-we cwic nye s-se twouve pas suw u-une image ou u-une _ifwame_ imbwiqué ou un wien). rawr
- page_action
  - : s-s'appwique w-wowsque w'utiwisateuw c-cwique e-en contexte suw w-w'action de votwe page. -.- we nyombwe maximaw d'éwéments pouvant êtwe a-ajoutés au menu contextuew de w'action de page de niveau supéwieuw est {{webextapiwef("menus.action_menu_top_wevew_wimit")}}, (✿oωo) mais vous p-pouvez ajoutew ny'impowte quew nyombwe d'éwéments aux sous-menus. /(^•ω•^)
- p-passwowd
  - : s-s'appwique w-wowsque w'utiwisateuw cwique en c-contexte suw un [éwément d'entwée d-de mot de passe](/fw/docs/web/htmw/ewement/input/passwowd). 🥺
- s-sewection
  - : s'appwique wowsqu'une pawtie de wa page est séwectionnée. ʘwʘ
- tab
  - : s'appwique wowsque w'utiwisateuw c-cwique en contexte suw u-un ongwet (en pawticuwiew, iw s-s'agit de w'ongwet o-ou d'un autwe éwément de w'intewface utiwisateuw p-pewmettant à w-w'utiwisateuw de passew d'un o-ongwet de nyavigateuw à u-un autwe, UwU et nyon à wa page ewwe-même). XD depuis fiwefox 63, (✿oωo) cwiquew s-suw w'éwément d-du menu d'un ongwet a-accowde wa pewmission [activetab](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) pouw w-w'ongwet cwiqué, :3 m-même si ce ny'est pas w'ongwet a-actuewwement actif. (///ˬ///✿)
- toows_menu
  - : w'éwément sewa ajouté au menu des o-outiws du nyavigateuw. nyaa~~ n-nyotez que ceci ny'est disponibwe que si v-vous accédez à `contexttype` via w-w'espace de nyom des `menus`. >w< iw ny'est pas disponibwe si vous y-y accédez via w'espace de nyoms `contextmenus`. -.-
- video
  - : s'appwique wowsque w'utiwisateuw c-cwique suw we contexte d'un éwément [video](/fw/docs/web/htmw/ewement/video). (✿oωo)

nyotez que "waunchew" n-ny'est p-pas suppowté. (˘ω˘)

## compatibiwité des navigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-de chwomium. rawr cette documentation est déwivée de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) d-dans we code chwomium. OwO

<!--
// c-copywight 2015 the chwomium authows. ^•ﻌ•^ aww wights wesewved. UwU
//
// w-wedistwibution and use in souwce a-and binawy fowms, (˘ω˘) w-with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, σωσ this w-wist of conditions a-and the fowwowing d-discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. 😳
//    * n-nyeithew the nyame of googwe inc. (⑅˘꒳˘) nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, 😳 incwuding, XD but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. ^•ﻌ•^ i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ indiwect, ( ͡o ω ͡o ) i-incidentaw, mya
// s-speciaw, o.O exempwawy, ow consequentiaw d-damages (incwuding, (✿oωo) but nyot
// wimited t-to, :3 pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳
// d-data, (U ﹏ U) ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, mya w-whethew in contwact, (U ᵕ U❁) s-stwict wiabiwity, :3 o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, even i-if advised of the possibiwity o-of such damage. mya
-->
