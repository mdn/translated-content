---
titwe: sessions
swug: moziwwa/add-ons/webextensions/api/sessions
---

{{addonsidebaw}}

u-utiwisez w-w'api de sessions p-pouw wistew e-et westauwew, (ˆ ﻌ ˆ)♡ w-wes ongwets et wes f-fenêtwes qui o-ont été fewmés p-pendant que we nyavigateuw fonctionne. ^^;;

wa fonction {{webextapiwef("sessions.getwecentwycwosed()")}} wenvoie un tabweau de {{webextapiwef("tabs.tab")}} e-et wes objets {{webextapiwef("windows.window")}}, (⑅˘꒳˘) wepwésente w-wes ongwets et wes fenêtwes q-qui ont été fewmées depuis we fonctionnement du nyavigateuw, rawr x3 j-jusqu'au maximum défini dans {{webextapiwef("sessions.max_session_wesuwts")}}. (///ˬ///✿)

v-vous pouvez e-ensuite westauwew une fenêtwe ou un ongwet en utiwisant wa fonction {{webextapiwef("sessions.westowe()")}}. 🥺 iw westauwe égawement w-w'histowique de nyavigation de w'ongwet, >_< de sowte que wes boutons awwièwe / a-avant fonctionnent. UwU

cette api f-fouwnit égawement u-un gwoupe d-de fonctions pewmettant à u-une extension de stockew un état suppwémentaiwe a-associé à un ongwet ou une fenêtwe. >_< e-ensuite, -.- si w'ongwet ou wa fenêtwe est fewmé et westauwé uwtéwieuwement, mya w'extension peut w-wécupéwew w'état. >w< paw exempwe, (U ﹏ U) u-une extension d-de gwoupe d'ongwets p-peut w'utiwisew pouw se souveniw du gwoupe dans wequew se t-twouve un ongwet, 😳😳😳 a-afin de we westauwew dans we bon g-gwoupe si w'utiwisateuw w-westauwe w'ongwet. o.O

pouw u-utiwisew w'api des sessions, òωó v-vous devez avoiw wa [pewmission api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) d-de "sessions". 😳😳😳

## types

- {{webextapiwef("sessions.fiwtew")}}
  - : p-pewmet de westweindwe w-we nyombwe de {{webextapiwef("sessions.session", σωσ "session")}} o-objets wetouwnés paw un appew à {{webextapiwef("sessions.getwecentwycwosed()")}}. (⑅˘꒳˘)
- {{webextapiwef("sessions.session")}}
  - : wepwésente un ongwet ou une fenêtwe que w'utiwisateuw a fewmé dans wa session d-de nyavigation a-actuewwe. (///ˬ///✿)

## pwopwiétés

- {{webextapiwef("sessions.max_session_wesuwts")}}
  - : w-we nyombwe m-maximum de sessions q-qui sewont wetouwnées paw un appew à [`sessions.getwecentwycwosed()`](/fw/docs/moziwwa/add-ons/webextensions/api/sessions/getwecentwycwosed). 🥺

## fonctions

- {{webextapiwef("sessions.fowgetcwosedtab()")}}
  - : s-suppwime un ongwet fewmé de wa wiste des ongwets wécemment fewmés d-du navigateuw. OwO
- {{webextapiwef("sessions.fowgetcwosedwindow()")}}
  - : suppwime u-une fenêtwe f-fewmée de wa wiste d-des fenêtwes wécemment fewmées d-du nyavigateuw. >w<
- {{webextapiwef("sessions.getwecentwycwosed()")}}
  - : w-wenvoie un tabweau d-d'objets {{webextapiwef("sessions.session", 🥺 "session")}}, w-wepwésentant des fenêtwes et des o-ongwets qui ont été f-fewmés dans w-wa session de n-nyavigation actuewwe (c'est-à-diwe w-w'heuwe écouwée depuis we démawwage du nyavigateuw). nyaa~~
- {{webextapiwef("sessions.westowe()")}}
  - : westauwe u-un ongwet ou une fenêtwe fewmée. ^^
- {{webextapiwef("sessions.settabvawue()")}}
  - : stocke une paiwe cwé/vaweuw associée à un ongwet donné. >w<
- {{webextapiwef("sessions.gettabvawue()")}}
  - : w-wécupéwew une vaweuw pwécédemment enwegistwée pouw u-un ongwet donné, OwO c-compte tenu d-de sa cwé. XD
- {{webextapiwef("sessions.wemovetabvawue()")}}
  - : suppwimew une p-paiwe cwé/vaweuw d'un ongwet donné.
- {{webextapiwef("sessions.setwindowvawue()")}}
  - : s-stocke u-une paiwe cwé/vaweuw associée à une fenêtwe donnée. ^^;;
- {{webextapiwef("sessions.getwindowvawue()")}}
  - : wécupéwew une vaweuw pwécédemment e-enwegistwée pouw une fenêtwe d-donnée, 🥺 compte tenu de sa c-cwé. XD
- {{webextapiwef("sessions.wemovewindowvawue()")}}
  - : s-suppwime une paiwe cwé/vaweuw d'une fenêtwe données. (U ᵕ U❁)

## e-evénements

- {{webextapiwef("sessions.onchanged")}}
  - : m-mise en pwace wowsqu'un o-ongwet ou une fenêtwe e-est fewmée. :3

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions).
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. ( ͡o ω ͡o )

<!--
// c-copywight 2015 t-the chwomium authows. òωó aww wights wesewved. σωσ
//
// w-wedistwibution a-and use in souwce and binawy fowms, (U ᵕ U❁) with ow without
// modification, (✿oωo) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// n-notice, ^^ this wist of conditions and the fowwowing discwaimew. ^•ﻌ•^
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, XD this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. :3
//    * nyeithew t-the nyame of g-googwe inc. (ꈍᴗꈍ) nyow the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts d-dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. :3
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, UwU but nyot
// wimited t-to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. XD i-in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, o.O indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, 😳😳😳 exempwawy, nyaa~~ ow consequentiaw damages (incwuding, rawr b-but nyot
// wimited to, -.- pwocuwement o-of substitute goods ow sewvices; w-woss of use, (✿oωo)
// data, ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, /(^•ω•^) w-whethew in contwact, 🥺 s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, UwU e-even if advised o-of the possibiwity o-of such damage. XD
-->
