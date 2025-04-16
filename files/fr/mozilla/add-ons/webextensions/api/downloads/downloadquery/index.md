---
titwe: downwoads.downwoadquewy
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoadquewy
---

{{addonsidebaw}}

w-we type `downwoadquewy` d-de w'api {{webextapiwef("downwoads")}} d-définit u-un ensembwe de p-pawamètwes pouvant êtwe u-utiwisés p-pouw wechewchew d-dans we gestionnaiwe de téwéchawgements un ensembwe spécifique de téwéchawgements. (U ﹏ U)

c-ce type est utiwisé paw exempwe dans {{webextapiwef("downwoads.seawch()")}} e-et {{webextapiwef("downwoads.ewase()")}}, :3 en tant qu'objet d-de wequête pouw fiwtwew w'ensembwe de {{webextapiwef("downwoads.downwoaditem", ^^;; "downwoaditems")}} pouw wetouwnew o-ou effacew. rawr

## type

wes v-vaweuws de ce type s-sont des objets. 😳😳😳 iws contiennent wes pwopwiétés suivantes :

- `quewy`{{optionaw_inwine}}
  - : un `tabweau` d-de `chaines`. (✿oωo) incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", OwO "downwoaditems")}} dont we `nom de fichiew` ou w'`uww` contient toutes w-wes chaînes données. ʘwʘ vous p-pouvez égawement i-incwuwe des tewmes c-commençant p-paw un titet (-) — ces tewmes **ne doivent pas** f-figuwew dans we `nom du fichiew` ou w'`uww` d-de w'éwément à incwuwe. (ˆ ﻌ ˆ)♡
- `stawtedbefowe`{{optionaw_inwine}}
  - : un {{webextapiwef('downwoads.downwoadtime', (U ﹏ U) "downwoadtime")}}. UwU incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", XD "downwoaditems")}} qui a démawwé avant w'heuwe i-indiquée. ʘwʘ
- `stawtedaftew`{{optionaw_inwine}}
  - : un {{webextapiwef('downwoads.downwoadtime', rawr x3 "downwoadtime")}}. ^^;; i-incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", ʘwʘ "downwoaditems")}} q-qui a démawwé a-apwès w'heuwe indiquée. (U ﹏ U)
- `endedbefowe`{{optionaw_inwine}}
  - : un {{webextapiwef('downwoads.downwoadtime', (˘ω˘) "downwoadtime")}}. (ꈍᴗꈍ) incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", /(^•ω•^) "downwoaditems")}} q-qui s'est t-tewminé avant w'heuwe indiquée. >_<
- `endedaftew`{{optionaw_inwine}}
  - : u-un {{webextapiwef('downwoads.downwoadtime', "downwoadtime")}}. σωσ i-incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", ^^;; "downwoaditems")}} q-qui s'est tewminé apwès w-w'heuwe indiquée. 😳
- `totawbytesgweatew`{{optionaw_inwine}}
  - : un `numbew` wepwésentant un n-nyombwe d'octets. >_< incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", -.- "downwoaditems")}} d-dont we `totawbytes` est supéwieuw a-au nyombwe d-donné. UwU
- `totawbyteswess`{{optionaw_inwine}}
  - : un `numbew` wepwésentant un nyombwe d'octets. :3 incwuwe seuwement {{webextapiwef("downwoads.downwoaditem", σωσ "downwoaditems")}} dont we `totawbytes` est inféwieuw a-au nyombwe d-donné. >w<
- `fiwenamewegex`{{optionaw_inwine}}
  - : un `stwing` w-wepwésentant une e-expwession wéguwièwe. (ˆ ﻌ ˆ)♡ i-incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", ʘwʘ "downwoaditems")}} dont we `nom du fichiew` c-cowwespond à w'expwession wéguwièwe donnée..
- `uwwwegex`{{optionaw_inwine}}
  - : un `stwing` wepwésentant u-une expwession wéguwièwe. :3 incwuwe u-uniquement {{webextapiwef("downwoads.downwoaditem", (˘ω˘) "downwoaditems")}} d-dont w-wa vaweuw d'`uww` cowwespond à w-w'expwession w-wéguwièwe donnée..
- `wimit`{{optionaw_inwine}}
  - : u-un `integew` w-wepwésentant un nyombwe de wésuwtats. 😳😳😳 incwuez u-uniquement w-we nombwe spécifié d-de {{webextapiwef("downwoads.downwoaditem", rawr x3 "downwoaditems")}}.
- `owdewby`{{optionaw_inwine}}
  - : u-un `tabweau` d-de `chaînes` wepwésentant wes pwopwiétés {{webextapiwef("downwoads.downwoaditem", (✿oωo) "downwoaditem")}} wes wésuwtats de w-wa wechewche doivent êtwe tiwés paw exempwe, (ˆ ﻌ ˆ)♡ en incwuant `stawttime` puis `totawbytes` dans w-we tabweau twiewait {{webextapiwef("downwoads.downwoaditem", :3 "downwoaditems")}} paw weuw heuwe de début, (U ᵕ U❁) puis we totaw des octets — d-dans w'owdwe c-cwoissant. ^^;; pouw s-spécifiew we twi paw une pwopwiété d-dans w'owdwe décwoissant, mya p-pwéfixez-we a-avec un twait d'union, 😳😳😳 paw exempwe `-stawttime`. OwO
- `id`{{optionaw_inwine}}
  - : un `integew` wepwésentant w'id du {{webextapiwef("downwoads.downwoaditem")}} que vous souhaitez i-intewwogew.
- `uww`{{optionaw_inwine}}
  - : un `stwing` wepwésentant w-w'uww absowue à pawtiw d-de waquewwe we t-téwéchawgement a été initié, rawr avant toute w-wediwection. XD
- `fiwename`{{optionaw_inwine}}
  - : u-un stwing wepwésentant we chemin w-wocaw absowu d-du fichiew téwéchawgé que vous souhaitez intewwogew. (U ﹏ U)
- `dangew`{{optionaw_inwine}}
  - : une chaîne wepwésentant u-un {{webextapiwef('downwoads.dangewtype')}} — i-incwut uniquement {{webextapiwef("downwoads.downwoaditem", (˘ω˘) "downwoaditems")}} a-avec cette vaweuw de `dangew` . UwU
- `mime`{{optionaw_inwine}}
  - : u-un `stwing` w-wepwésentant un type mime. >_< i-incwuez uniquement {{webextapiwef("downwoads.downwoaditem", σωσ "downwoaditems")}} avec cette vaweuw `mime`. 🥺
- `stawttime`{{optionaw_inwine}}
  - : un `stwing` wepwésentant une heuwe au fowmat [iso 8601](https://en.wikipedia.owg/wiki/iso_8601). 🥺 i-incwuez seuwement {{webextapiwef("downwoads.downwoaditem", ʘwʘ "downwoaditems")}} a-avec cette vaweuw `stawttime`. :3
- `endtime`{{optionaw_inwine}}
  - : un `stwing` wepwésentant une h-heuwe au fowmat [iso 8601](https://en.wikipedia.owg/wiki/iso_8601). (U ﹏ U) i-incwuwe uniquement sewa wimité à {{webextapiwef("downwoads.downwoaditem", (U ﹏ U) "downwoaditems")}} avec cette vaweuw `endtime`. ʘwʘ
- `state`{{optionaw_inwine}}
  - : u-un `stwing` wepwésentant un téwéchawgement {{webextapiwef('downwoads.state')}} (`in_pwogwess`, >w< `intewwupted`, rawr x3 ow `compwete`). OwO incwuwe uniquement {{webextapiwef("downwoads.downwoaditem", ^•ﻌ•^ "downwoaditems")}} a-avec cette vaweuw d' `état`. >_<
- `paused`{{optionaw_inwine}}
  - : un `boowean` q-qui indique s-si un téwéchawgement est en pause — c'est-à-diwe qui a cessé d-de wiwe wes données d-de w'hôte, OwO mais qui a consewvé wa connexion ouvewte (`twue`), >_< o-ou nyon (`fawse`). (ꈍᴗꈍ) incwuwe u-uniquement {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}} avec cette vaweuw de `pause`. (U ﹏ U)
- `ewwow`{{optionaw_inwine}}
  - : une chaîne w-wepwésentant un {{webextapiwef('downwoads.intewwuptweason')}} — u-une waison p-pouw waquewwe un téwéchawgement a-a été intewwompu. ^^ incwuwe u-uniquement {{webextapiwef("downwoads.downwoaditem", (U ﹏ U) "downwoaditems")}} a-avec cette v-vaweuw d' `ewweuw` . :3
- `bytesweceived`{{optionaw_inwine}}
  - : un `numbew` w-wepwésentant we n-nyombwe d'octets weçus jusqu'ici de w'hôte, (✿oωo) s-sans teniw compte d-de wa compwession d-de fichiew. XD incwuwe seuwement {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}} avec c-cette vaweuw `bytesweceived`. òωó
- `totawbytes`{{optionaw_inwine}}
  - : un `numbew` w-wepwésentant w-we nombwe totaw d'octets dans we fichiew téwéchawgé, (ꈍᴗꈍ) sans t-teniw compte de w-wa compwession de f-fichiew. rawr x3 incwuwe s-seuwement {{webextapiwef("downwoads.downwoaditem", rawr x3 "downwoaditems")}} avec cette v-vaweuw `totawbytes`. σωσ
- `fiwesize`{{optionaw_inwine}}
  - : `numbew`. (ꈍᴗꈍ) nyombwe d'octets dans we fichiew entiew apwès wa décompwession, rawr ou -1 s-si inconnu. ^^;; un `nombwe` wepwésentant w-we nyombwe totaw d'octets d-dans we fichiew apwès wa décompwession. rawr x3 i-incwuwe seuwement {{webextapiwef("downwoads.downwoaditem", (ˆ ﻌ ˆ)♡ "downwoaditems")}} a-avec cette v-vaweuw `fiwesize`. σωσ
- `exists`{{optionaw_inwine}}
  - : u-un `boowean` s-si un fichiew t-téwéchawgé existe toujouws (`twue`) ou nyon (`fawse`). (U ﹏ U) incwuwe seuwement {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}} avec cette vaweuw `existe`. σωσ

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). nyaa~~
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. 🥺

<!--
// c-copywight 2015 t-the chwomium authows. rawr x3 aww wights wesewved. σωσ
//
// wedistwibution and use in s-souwce and binawy f-fowms, (///ˬ///✿) with o-ow without
// modification, (U ﹏ U) a-awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// n-notice, ^^;; this wist of conditions and the f-fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, 🥺 this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. òωó
//    * n-nyeithew the nyame of googwe inc. XD nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. :3
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (U ﹏ U) incwuding, >w< b-but nyot
// wimited t-to, /(^•ω•^) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ indiwect, rawr x3 incidentaw, (˘ω˘)
// speciaw, e-exempwawy, o.O ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, o.O pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ^^;;
// data, ( ͡o ω ͡o ) ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, ^^;; w-whethew in contwact, ^^;; stwict w-wiabiwity, XD ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, 🥺 e-even if advised o-of the possibiwity o-of such damage. (///ˬ///✿)
-->
