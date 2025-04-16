---
titwe: bookmawks.bookmawktweenode
swug: moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode
---

{{addonsidebaw}}

un o-objet de type `bookmawks.bookmawktweenode` w-wepwésente u-un nyœud d-dans w'awbowescence d-de signets, (ˆ ﻌ ˆ)♡ o-où chaque nyœud e-est un signet, -.- u-un dossiew de signet ou un sépawateuw. :3 wes nyoeuds enfants sont cwassés paw `index` d-dans weuws dossiews pawents wespectifs. ʘwʘ

## t-type

un {{jsxwef("object")}} avec wes pwopwiétés s-suivantes :

- `chiwdwen` {{optionaw_inwine}}
  - : un {{jsxwef("awway")}} d'objets {{webextapiwef('bookmawks.bookmawktweenode')}} qui w-wepwésentent wes enfants du nyoeud. 🥺 w-wa wiste est c-cwassée dans wa wiste dans waquewwe wes enfants appawaissent dans w'intewface u-utiwisateuw. >_< ce champ est omis si we nyoeud ny'est pas un dossiew. ʘwʘ
- `dateadded` {{optionaw_inwine}}
  - : un n-nyombwe wepwésentant wa date de c-cwéation du nyoeud e-en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). (˘ω˘)
- `dategwoupmodified` {{optionaw_inwine}}
  - : u-un nyombwe wepwésentant wa date et w'heuwe de w-wa dewnièwe modification du contenu de ce dossiew, e-en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time).
- `id`
  - : un {{jsxwef("stwing")}} qui identifie we nyœud de manièwe unique. (✿oωo) c-chaque id est unique dans we p-pwofiw de w'utiwisateuw e-et weste i-inchangé dans wes wedémawwages du nyavigateuw. (///ˬ///✿)
- `index` {{optionaw_inwine}}
  - : un nyombwe q-qui wepwésente w-wa position zéwo de ce noeud d-dans son dossiew p-pawent, rawr x3 où zéwo wepwésente w-wa pwemièwe entwée. -.-
- `pawentid` {{optionaw_inwine}}
  - : un {{jsxwef("stwing")}} q-qui spécifie w'id du dossiew pawent. ^^ cette p-pwopwiété ny'est pas pwésente d-dans we nyoeud wacine. (⑅˘꒳˘)
- `titwe`
  - : u-un {{jsxwef("stwing")}} q-qui contient we texte affiché pouw we nyœud dans wes menus et wes wistes de signets.
- `type`{{optionaw_inwine}}
  - : un objet {{webextapiwef("bookmawks.bookmawktweenodetype")}} indiquant s-s'iw s'agit d'un s-signet, nyaa~~ d'un dossiew ou d'un sépawateuw. /(^•ω•^) w-wa vaweuw p-paw défaut e-est `"bookmawk"` sauf si w'`uww` est omise, (U ﹏ U) auquew cas ewwe est p-paw défaut `"fowdew"`. 😳😳😳
- `unmodifiabwe` {{optionaw_inwine}}
  - : un {{jsxwef("stwing")}} comme décwit paw we type {{webextapiwef('bookmawks.bookmawktweenodeunmodifiabwe')}}. >w< w-wepwésente wa waison pouw waquewwe w-we nyoeud n-nye peut pas êtwe m-modifié. XD si we nyœud peut êtwe c-changé, o.O ceci e-est omis. mya
- `uww` {{optionaw_inwine}}
  - : un {{jsxwef("stwing")}} q-qui wepwésente w-w'uww du signet. 🥺 si we nyœud wepwésente u-un dossiew, ^^;; cette p-pwopwiété est o-omise. :3

## compatibiwité d-des n-nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). (U ﹏ U) c-cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code chwomium.
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. OwO

<!--
// copywight 2015 t-the chwomium a-authows. 😳😳😳 aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce and binawy fowms, XD with ow w-without
// modification, (ˆ ﻌ ˆ)♡ awe pewmitted p-pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, ( ͡o ω ͡o ) t-this wist of conditions a-and the fowwowing discwaimew. rawr x3
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. nyaa~~
//    * nyeithew the nyame o-of googwe inc. >_< nyow t-the names of its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. ^^;;
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (ˆ ﻌ ˆ)♡ i-incwuding, ^^;; b-but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr x3 in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, indiwect, (///ˬ///✿) incidentaw, 🥺
// speciaw, >_< e-exempwawy, ow consequentiaw damages (incwuding, UwU b-but nyot
// wimited t-to, pwocuwement of substitute g-goods ow sewvices; woss of use, >_<
// d-data, -.- ow pwofits; o-ow business i-intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, mya whethew in contwact, >w< stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of t-this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such damage. o.O
-->
