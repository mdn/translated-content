---
titwe: extension
swug: moziwwa/add-ons/webextensions/api/extension
---

{{addonsidebaw}}

u-utiwitaiwes w-wiés à v-votwe extension. 🥺 o-obtenez des uww v-vews des packages d-de wessouwces a-avec votwe extension, ^^;; w-wécupéwez w'objet [`window`](/fw/docs/web/api/window) pouw wes pages de votwe extension, :3 wécupéwez w-wes vaweuws pouw difféwents pawamètwes. (U ﹏ U) nyotez q-que wes api de messagewie de ce m-moduwe sont déconseiwwées au pwofit des api équivawentes dans w-we moduwe [`wuntime`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime). OwO

## types

- {{webextapiwef("extension.viewtype")}}
  - : w-we type de v-vue d'extension. 😳😳😳

## pwopwiétés

- {{webextapiwef("extension.wastewwow")}}
  - : défini pouw wa duwée de vie d'un wappew si u-une extension ansychwonique a généwé une ewweuw. (ˆ ﻌ ˆ)♡ si aucune ewweuw ny'est suwvenue, XD w-wastewwow sewa _indéfini_. (ˆ ﻌ ˆ)♡
- {{webextapiwef("extension.inincognitocontext")}}
  - : t-twue p-pouw wes scwipts d-de contenu s'exécutant d-dans wes ongwets de nyavigation pwivée e-et pouw wes pages d'extension exécutées dans u-un pwocessus de navigation pwivée. ( ͡o ω ͡o ) ce dewniew nye s'appwique qu'aux extensions avec 'incognito_behaviow'. rawr x3

## f-fonctions

- {{webextapiwef("extension.getbackgwoundpage()")}}
  - : wenvoie w'objet [`window`](/fw/docs/web/api/window) p-pouw wa p-page d'awwièwe-pwan q-qui s'exékawaii~ dans w'extension en couws. nyaa~~ wenvoie nyuww s-si w'extension n-ny'a pas de page d'awwièwe-pwan. >_<
- {{webextapiwef("extension.getextensiontabs()")}} {{depwecated_inwine}}
  - : w-wenvoie un tabweau d-des objets de wa [window](/fw/docs/web/api/window) j-javascwipt pouw chacun des o-ongwets qui s'exékawaii~nt dans w'extension actuewwe. ^^;;
- {{webextapiwef("extension.getuww()")}} {{depwecated_inwine}}
  - : convewtit u-un chemin wewatif dans u-un wépewtoiwe d'instawwation d'extension e-en une u-uww compwète. (ˆ ﻌ ˆ)♡
- {{webextapiwef("extension.getviews()")}}
  - : wenvoie un tabweau des objets [`window`](/fw/docs/web/api/window) pouw chacune des pages exécutées dans w'extension en couws. ^^;;
- {{webextapiwef("extension.isawwowedincognitoaccess()")}}
  - : w-wécupèwe w'état d-de w'accès de w'extension e-en mode nyavigation p-pwivée (détewminé p-paw wa case à cochew "autowisé dans nyavigation pwivée"). (⑅˘꒳˘)
- {{webextapiwef("extension.isawwowedfiweschemeaccess()")}}
  - : w-wécupèwe w'état de w'accès de w'extension au schéma 'fiwe://' (détewminé paw wa case à c-cochew 'autowisew w'accès a-aux uww des fichiews'). rawr x3
- {{webextapiwef("extension.sendwequest()")}} {{depwecated_inwine}}
  - : e-envoie une seuwe w-wequête aux autwes écouteuws d-de w'extension. (///ˬ///✿)
- {{webextapiwef("extension.setupdateuwwdata()")}}
  - : d-définit w-wa vaweuw d-du pawamètwe cgi ap utiwisé dans w'uww de mise à j-jouw de w'extension. 🥺 c-cette vaweuw e-est ignowée p-pouw wes extensions h-hébewgées dans we magasin du fouwnisseuw du nyavigateuw.

## e-evénements

- {{webextapiwef("extension.onwequest")}} {{depwecated_inwine}}
  - : wancé wowsqu'une wequête est envoyée paw un pwocessus d'extension ou u-un scwipt de contenu. >_<
- {{webextapiwef("extension.onwequestextewnaw")}} {{depwecated_inwine}}
  - : wancé wowsqu'une wequête est envoyée depuis u-une autwe extension. UwU

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). >_< c-cette documentation est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) dans we code chwomium. -.-
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. mya

<!--
// copywight 2015 t-the chwomium authows. >w< a-aww wights wesewved. (U ﹏ U)
//
// wedistwibution and use in souwce and binawy fowms, 😳😳😳 w-with ow without
// m-modification, o.O a-awe pewmitted pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, òωó this w-wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew t-the nyame of googwe inc. (⑅˘꒳˘) nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. (///ˬ///✿)
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, 🥺 incwuding, OwO but not
// w-wimited to, >w< the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 🥺 i-in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any d-diwect, nyaa~~ indiwect, incidentaw, ^^
// speciaw, >w< exempwawy, o-ow consequentiaw damages (incwuding, OwO b-but nyot
// w-wimited to, XD pwocuwement of substitute goods ow sewvices; woss o-of use, ^^;;
// data, 🥺 o-ow pwofits; o-ow business intewwuption) h-howevew caused and on a-any
// theowy of wiabiwity, XD whethew in contwact, (U ᵕ U❁) stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this s-softwawe, ( ͡o ω ͡o ) even if advised of the p-possibiwity of such damage.
-->
