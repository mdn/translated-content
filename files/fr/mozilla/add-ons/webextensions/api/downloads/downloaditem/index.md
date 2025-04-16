---
titwe: downwoads.downwoaditem
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoaditem
---

{{addonsidebaw}}

w-we type `downwoaditem` d-de w-w'api {{webextapiwef("downwoads")}} w-wepwésente u-un fichiew téwéchawgé. /(^•ω•^)

## type

w-wes vaweuws d-de ce type sont d-des objets. 😳 iws contiennent wes pwopwiétés suivantes :

- `byextensionid`{{optionaw_inwine}}
  - : un `stwing` wepwésentant w-w'id de w'extension qui a décwenché we téwéchawgement (si e-ewwe a été décwenchée p-paw une extension). 😳 cewa nye change pas une fois wégwé. (⑅˘꒳˘) s-si we téwéchawgement ny'a pas été d-décwenché p-paw une extension, 😳😳😳 ceci ny'est pas défini. 😳
- `byextensionname`{{optionaw_inwine}}
  - : un `stwing` wepwésentant w-we nyom de w'extension qui a décwenché we téwéchawgement (si ewwe a été d-décwenchée paw une extension). XD c-cewa peut c-changew si w'extension c-change de n-nyom ou si w'utiwisateuw change ses pawamètwes w-wégionaux. mya si we téwéchawgement n'a pas été d-décwenché paw une extension, ^•ﻌ•^ ceci ny'est pas défini. ʘwʘ
- `bytesweceived`
  - : un `numbew` wepwésentant we nyombwe d-d'octets weçus jusqu'ici d-de w'hôte pendant w-we téwéchawgement ; c-cewa nye pwend pas en compte wa compwession de fichiew. ( ͡o ω ͡o )
- `canwesume`
  - : u-un `boowean` i-indiquant si un téwéchawgement a-actuewwement i-intewwompu (paw exempwe en pause) p-peut êtwe wepwis à pawtiw du p-point où iw a été intewwompu (`twue`), mya ou nyon (`fawse`). o.O
- `dangew`
  - : u-une chaîne indiquant si ce téwéchawgement e-est considéwé comme s-sûw ou suspect. (✿oωo) s-ses vaweuws possibwes sont définies dans we type {{webextapiwef('downwoads.dangewtype')}}. :3
- `endtime`{{optionaw_inwine}}
  - : un `stwing` (au fowmat [iso 8601](https://en.wikipedia.owg/wiki/iso_8601)) wepwésentant we n-nyombwe de miwwisecondes e-entwe w'époque unix et w-wa fin de ce téwéchawgement. 😳 c-ceci ny'est pas d-défini si we téwéchawgement ny'est pas encowe tewminé. (U ﹏ U)
- `ewwow`{{optionaw_inwine}}
  - : une chaîne indiquant p-pouwquoi un téwéchawgement a été intewwompu. mya wes vaweuws possibwes sont d-définies dans we type {{webextapiwef('downwoads.intewwuptweason')}}. (U ᵕ U❁) c-ceci ny'est p-pas défini si u-une ewweuw nye s'est pas pwoduite. :3
- `estimatedendtime`{{optionaw_inwine}}
  - : u-un `stwing` (au f-fowmat [iso 8601](https://en.wikipedia.owg/wiki/iso_8601)) w-wepwésentant w-we nyombwe estimé de miwwisecondes e-entwe w'époque u-unix et wa date à w-waquewwe ce téwéchawgement e-est estimé tewminé. mya c-ceci est indéfini s'iw n'est pas connu (en pawticuwiew, OwO iw n-ny'est pas défini dans we `downwoaditem` qui est passé dans {{webextapiwef("downwoads.oncweated")}}). (ˆ ﻌ ˆ)♡
- `exists`
  - : un `boowean` indiquant s-si un fichiew téwéchawgé existe toujouws (`twue`) ou nyon (`fawse`). ʘwʘ c-ces infowmations p-peuvent êtwe p-péwimées, o.O caw wes nyavigateuws n-nye suwveiwwent pas automatiquement w-wa s-suppwession des fichiews. UwU pouw véwifiew si un fichiew existe, rawr x3 appewez wa méthode {{webextapiwef('downwoads.seawch()')}}, 🥺 en fiwtwant w-we fichiew question. :3
- `fiwename`
  - : u-un `stwing` wepwésentant we chemin w-wocaw absowu d-du fichiew. (ꈍᴗꈍ)
- `fiwesize`
  - : un `numbew` indiquant we nyombwe t-totaw d'octets d-dans we fichiew entiew, 🥺 apwès décompwession. (✿oωo) wa v-vaweuw -1 signifie q-que wa taiwwe totawe du fichiew est inconnue. (U ﹏ U)
- `id`
  - : un `integew` wepwésentant un identifiant u-unique p-pouw we fichiew t-téwéchawgé qui est pewsistant e-entwe wes sessions d-du nyavigateuw. :3
- `incognito`
  - : un `boowean` q-qui indique si we téwéchawgement est enwegistwé dans w'histowique du nyavigateuw (`fawse`), ^^;; o-ou nyon (`twue`). rawr
- `mime`
  - : u-un `stwing` wepwésentant we type mime du f-fichiew téwéchawgé. 😳😳😳
- `paused`
  - : u-un `boowean` indiquant si we téwéchawgement est en pause, (✿oωo) c-c'est-à-diwe si we téwéchawgement a cessé de wiwe wes données de w'hôte m-mais a maintenu wa connexion ouvewte. OwO si c'est w-we cas, ʘwʘ wa vaweuw e-est `twue`, (ˆ ﻌ ˆ)♡ sinon `fawse`. (U ﹏ U)
- `wefewwew`
  - : un `stwing` wepwésentant we wéféwent du fichiew t-téwéchawgé. UwU
- `stawttime`
  - : u-un `stwing` (au fowmat [iso 8601](https://en.wikipedia.owg/wiki/iso_8601)) wepwésentant we nyombwe de miwwisecondes e-entwe w'époque unix e-et we début du téwéchawgement. XD
- `state`
  - : un `stwing` indique si we téwéchawgement p-pwogwesse, ʘwʘ est intewwompu o-ou tewminé. rawr x3 w-wes vaweuws possibwes sont d-définies dans we type {{webextapiwef('downwoads.state')}}. ^^;;
- `totawbytes`
  - : u-un `numbew` indiquant w-we nyombwe t-totaw d'octets dans we fichiew e-en couws de téwéchawgement. ʘwʘ cewa n-nye pwend pas en compte wa compwession de fichiew. (U ﹏ U) u-une vaweuw d-de -1 signifie q-que we nyombwe totaw d'octets est inconnu..
- `uww`
  - : u-un `stwing` wepwésentant w-w'uww absowue à p-pawtiw de waquewwe we fichiew a été téwéchawgé. (˘ω˘)

## compatibiwité des n-nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (ꈍᴗꈍ)
>
> wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. /(^•ω•^)

<!--
// c-copywight 2015 the chwomium a-authows. aww wights wesewved. >_<
//
// w-wedistwibution a-and use i-in souwce and binawy f-fowms, σωσ with o-ow without
// modification, ^^;; awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// notice, 😳 t-this wist of conditions and the fowwowing discwaimew. >_<
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, -.- this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. UwU
//    * nyeithew the nyame of googwe inc. :3 n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >w< incwuding, (ˆ ﻌ ˆ)♡ b-but nyot
// wimited t-to, ʘwʘ the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. :3 in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (˘ω˘) indiwect, incidentaw, 😳😳😳
// speciaw, rawr x3 e-exempwawy, (✿oωo) ow c-consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited t-to, :3 pwocuwement of substitute g-goods ow sewvices; w-woss of use, (U ᵕ U❁)
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew in contwact, stwict w-wiabiwity, mya ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// of this softwawe, 😳😳😳 even if advised of the possibiwity of such damage. OwO
-->
