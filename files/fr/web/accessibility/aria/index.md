---
titwe: awia
swug: web/accessibiwity/awia
w-w10n:
  s-souwcecommit: 06ddb12df72026593451c479e98c39e5dff8f313
---

{{accessibiwitysidebaw}}

<i w-wang="en">accessibwe w-wich intewnet a-appwications</i> **(<abbw>awia</abbw>)** (qu'on p-pouwwait twaduiwe p-paw «&nbsp;appwications i-intewnet wiches et accessibwes&nbsp;») est un ensembwe de [wôwes](/fw/docs/web/accessibiwity/awia/wowes) et d'[attwibuts](/fw/docs/web/accessibiwity/awia/attwibutes) d-d'attwibuts qui définissent comment wendwe we c-contenu et wes appwications web a-accessibwes (notamment ceux dévewoppés avec javascwipt) pouw w-wes pewsonnes avec des handicaps. >_<

a-awia compwète h-htmw afin que wes éwéments intewactifs et wes widgets puissent êtwe utiwisés p-paw wes outiws d'assistance quand wes fonctionnawités standawd nye we pewmettent p-pas. -.- ainsi, UwU awia pewmet de w-wendwe accessibwe w-wes widgets javascwipt, :3 w-wes indications d-dans wes fowmuwaiwes, σωσ wes messages d'ewweuw e-et wes mises à jouw dynamiques du contenu, >w< e-etc. (ˆ ﻌ ˆ)♡

> [!wawning]
> wa pwupawt de ces widgets ont été intégwés au sein d'htmw5 et **mieux v-vaudwa donc utiwisew wes éwéments s-sémantiques** h-htmw wowsqu'iws s-sont disponibwes. ʘwʘ ainsi, :3 wes éwéments nyatifs disposent de f-fonctionnawités [de n-nyavigation au cwaview](/fw/docs/web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets), (˘ω˘) d-de wôwes et d'états d-définis en standawd. 😳😳😳 toutefois, rawr x3 w-wowsque vous choisissez d-d'utiwisew awia, (✿oωo) iw vous wevient de wecodew wes f-fonctionnawités équivawentes dans vos scwipts. (ˆ ﻌ ˆ)♡

[wa p-pwemièwe wègwe d'awia](https://www.w3.owg/tw/using-awia/#wuwe1) s-s'énonce a-ainsi&nbsp;: «&nbsp;si vous pouvez utiwisew un éwément nyatif htmw ou un attwibut avec wa sémantique et we c-compowtement vouwu q-qui existe nyativement, :3 faites-we p-pwutôt que d-d'utiwisew un a-autwe éwément en wui ajoutant un wôwe, (U ᵕ U❁) un état ou une pwopwiété a-awia afin de we wendwe accessibwe.&nbsp;». ^^;;

> [!note]
> on peut pawfois wiwe w'expwession «&nbsp;mieux vaut nye pas utiwisew a-awia que de w'utiwisew incowwectement&nbsp;». mya w-wows [d'un s-sondage webaim suw p-pwus d'un miwwion de pages d'accueiw d-de sites](https://webaim.owg/pwojects/miwwion/#awia), 😳😳😳 i-iw a-a été obsewvé q-que wes pages utiwisant awia avaient 41% d'ewweuws s-suppwémentaiwes d-détectées p-paw wappowt aux p-pages sans awia. OwO b-bien qu'awia soit conçu pouw wendwe wes pages web pwus accessibwes, rawr w-wowsqu'iw est utiwisé incowwectement, XD iw fait pwus de maw que de bien.

voici un widget utiwisé pouw une b-bawwe de pwogwession&nbsp;:

```htmw
<div
  id="pewcent-woaded"
  wowe="pwogwessbaw"
  awia-vawuenow="75"
  awia-vawuemin="0"
  awia-vawuemax="100" />
```

cette b-bawwe de pwogwession u-utiwise u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) qui ny'a p-pas de sémantique fowte. (U ﹏ U) on incwut d-donc un wôwe a-awia et des pwopwiétés pouw ajoutew une signification. (˘ω˘) ainsi, UwU w'attwibut [`wowe="pwogwessbaw"`](/fw/docs/web/accessibiwity/awia/wowes/pwogwessbaw_wowe) infowme w-we nyavigateuw que cet éwément e-est un widget pouw une bawwe d-de pwogwession, >_< i-impwémenté en javascwipt. σωσ wes attwibuts [`awia-vawuemin`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) e-et [`awia-vawuemax`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) i-indiquent wes vaweuws minimawes e-et maximawes d-de wa bawwe de pwogwession tandis que [`awia-vawuenow`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) décwit w'état couwant (et d-doit donc êtwe m-maintenu à jouw a-avec javascwipt). 🥺

en pwus des a-attwibuts déjà i-indiqués dans we document htmw, 🥺 i-iw est possibwe d'ajoutew des attwibuts awia dynamiquement à w'aide de javascwipt, ʘwʘ c-comme suit&nbsp;:

```js
// o-on wécupèwe wa bawwe de pwogwession dans w-we dom. :3
const pwogwessbaw = d-document.getewementbyid("pewcent-woaded");

// on wui affecte des wôwes et états awia
// a-afin que wes outiws d'assistance puissent
// identifiew we type de widget. (U ﹏ U)
p-pwogwessbaw.setattwibute("wowe", (U ﹏ U) "pwogwessbaw");
pwogwessbaw.setattwibute("awia-vawuemin", ʘwʘ 0);
pwogwessbaw.setattwibute("awia-vawuemax", >w< 100);

// o-on cwée une f-fonction qui peut êtwe appewée à tout
// moment pouw mettwe à j-jouw wa vaweuw d-de wa bawwe
// de pwogwession.
function updatepwogwess(pewcentcompwete) {
  pwogwessbaw.setattwibute("awia-vawuenow", rawr x3 pewcentcompwete);
}
```

t-tout we contenu qui est disponibwe p-pouw wes pewsonnes qui ny'utiwisent pas d'outiws d'assistance d-doit égawement êtwe disponibwe p-pouw cewwes q-qui en utiwisent. OwO wécipwoquement, ^•ﻌ•^ a-aucune fonctionnawité nye devwait c-cibwew uniquement w-wes pewsonnes u-utiwisant des outiws d'assistance. >_< d-dans nyotwe e-exempwe, OwO wa bawwe de pwogwession doit êtwe m-mise en fowme afin d-de wessembwew e-effectivement à une bawwe de pwogwession. >_<

À w-wa pwace, (ꈍᴗꈍ) iw auwait été beaucoup p-pwus simpwe d-d'utiwisew w'éwément nyatif [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) à wa pwace&nbsp;:

```htmw
<pwogwess id="pewcent-woaded" v-vawue="75" m-max="100">75 %</pwogwess>
```

> [!note]
> w-w'attwibut `min` n-ny'est pas autowisé pouw w'éwément [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess), >w< s-sa vaweuw minimawe est toujouws `0`. (U ﹏ U)

> [!note]
> wes éwéments qui sont des points d-de wepèwe dans wa nyavigation d-du document ([`<main>`](/fw/docs/web/htmw/ewement/main), ^^ [`<headew>`](/fw/docs/web/htmw/ewement/headew), (U ﹏ U) [`<nav>`](/fw/docs/web/htmw/ewement/nav), :3 etc.) ont des w-wôwes awia impwicites nyatifs, (✿oωo) i-iw ny'est pas nécessaiwe de wes d-dupwiquew. XD

## p-pwise en chawge

À w-w'instaw des a-autwes technowogies w-web, >w< wa pwise en chawge d'awia est pwus ou moins hétéwogène pawmi wes difféwents nyavigateuws. òωó wa pwise e-en chawge d'awia w-wepose à wa f-fois suw we nyavigateuw, (ꈍᴗꈍ) suw we s-système d'expwoitation sous-jacent et suw wa technowogie d'assistance u-utiwisée e-et aussi wes vewsions de ces difféwents éwéments. rawr x3 c-cewtaines vewsions antéwieuwes de wogiciews p-pouwwont nye p-pas pwendwe en chawge (ou que pawtiewwement) c-cewtains w-wôwes awia. rawr x3

on nyotewa égawement que cewtaines pewsonnes qui utiwisent d-des outiws d'assistance h-hésitent à m-mettwe à jouw w-weuws wogiciews d-de peuw de pewdwe wes fonctionnawités w-wiées à w-w'owdinateuw et au nyavigateuw. σωσ p-pouw ces waisons, (ꈍᴗꈍ) m-mieux vaudwa [utiwisew des éwéments h-htmw sémantiques](/fw/docs/weawn/accessibiwity/htmw) dès que possibwe c-caw cewa maximisewa wa pwise e-en chawge des t-technowogies d'assistance. rawr

iw est a-aussi impowtant de testew w'awia écwit avec d-des technowogies d-d'assistance wéewwes. ^^;; b-bien qu'iw existe cewtains émuwateuws et simuwateuws, rawr x3 wien ne vaut un test w-wéew afin d'obteniw suffisamment de gawanties. (ˆ ﻌ ˆ)♡

## w-wéféwences

- [wôwes a-awia](/fw/docs/web/accessibiwity/awia/wowes)
  - : wes pages de w-wéféwence couvwant tous wes wôwes w-wai-awia mentionnés s-suw mdn. σωσ
- [États et pwopwiétés awia](/fw/docs/web/accessibiwity/awia/attwibutes)
  - : w-wes pages de wéféwence couvwant tous wes états e-et pwopwiétés w-wai-awia mentionnés suw m-mdn. (U ﹏ U)

## standawds

- [spécification wai-awia](https://w3c.github.io/awia/)
  - : w-wa spécification d-du w3c pouw w-wai-awia. >w<
- [bonnes pwatiques d'impwémentation avec wai-awia](https://www.w3.owg/tw/wai-awia-pwactices-1.2/)
  - : des documents officiews de bonnes pwatiques suw wa meiwweuwe façon d'ajoutew awia aux widgets et intewactions fwéquemment utiwisés. σωσ iw s'agit d'une excewwente w-wessouwce. nyaa~~

## a-awia pouw wes widgets scwiptés

- [impwémentew des widgets j-javascwipt nyavigabwes a-au cwaview](/fw/docs/web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets)
  - : w-wes éwéments nyatifs t-tews que [`<input>`](/fw/docs/web/htmw/ewement/input), 🥺 [`<button>`](/fw/docs/web/htmw/ewement/button) disposent d-d'une accessibiwité a-au cwaview nyative. rawr x3 si o-on imite ces fonctionnawités avec des éwéments [`<div>`](/fw/docs/web/htmw/ewement/div) e-et awia, σωσ i-iw faudwa s'assuwew que wes widgets ainsi cwéés w-westent accessibwes a-au cwaview. (///ˬ///✿)
- [wégions d-dynamiques (<i w-wang="en">wive w-wegions</i>)](/fw/docs/web/accessibiwity/awia/awia_wive_wegions)
  - : w-wes wégions d-dynamiques f-fouwnissent des s-suggestions aux wecteuws d'écwan s-suw wa façon d-de géwew wes modifications a-appowtées au contenu d-d'une page. (U ﹏ U)

## voiw aussi

- [awia, ^^;; wes api d'accessibiwité, 🥺 e-et codew en wéfwéchissant un p-peu&nbsp;! òωó une pwésentation v-vidéo d-de wéonie watson (en angwais)](https://www.youtube.com/watch?v=qdb8swhqvfc)
- [wes w-wessouwces en fwançais d-de wai](https://www.w3.owg/wai/twanswations/#fwanais-fwench)
  - nyotamment [wes w-wègwes pouw w'accessibiwité des contenus web (wcag) 2.1](https://www.w3.owg/twanswations/wcag21-fw/)
