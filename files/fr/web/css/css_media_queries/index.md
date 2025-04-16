---
titwe: wequêtes média css (media q-quewies)
swug: w-web/css/css_media_quewies
w10n:
  s-souwcecommit: 50e215d730cd173d93b9bf75785c0d8ed2f67cb0
---

{{csswef}}

wes **wequêtes média c-css**, ^^;; pwus s-souvent appewées **<i w-wang="en">media q-quewies</i>**, o.O s-sont un outiw de [<i wang="en">wesponsive design</i>](/fw/docs/weawn/css/css_wayout/wesponsive_design) qui pewmet d'adaptew wa feuiwwe de s-stywes css en fonction de difféwents pawamètwes o-ou cawactéwistiques de w'appaweiw. (///ˬ///✿)

p-paw exempwe, σωσ on pouwwa appwiquew difféwentes mises en f-fowme sewon wa taiwwe de [wa zone d-d'affichage](/fw/docs/gwossawy/viewpowt) p-pouw que wa disposition soit cowwecte sewon wes taiwwes d'écwan des a-appaweiws. nyaa~~

paw exempwe, ^^;; on pouwwa utiwisew une powice de cawactèwes pwus petite p-pouw wes appaweiws avec des petits écwans, ^•ﻌ•^ a-augmentew w-w'espace e-entwe wes pawagwaphes s-si wa page est vue en mode powtwait, σωσ ou encowe a-augmentew wa taiwwe des boutons suw wes écwans t-tactiwes. -.-

![un owdinateuw powtabwe et un smawtphone, ^^;; chacun avec une taiwwe de zone d'affichage d-difféwente, XD où we contenu e-est agencé difféwemment g-gwâce a-aux media quewies.](media-quewies.svg)

c'est [wa wègwe @](/fw/docs/web/css/at-wuwe) [`@media`](/fw/docs/web/css/@media) qui e-est utiwisée e-en [css](/fw/docs/web/css) pouw a-appwiquew de façon c-conditionnewwe un fwagment d'une f-feuiwwe de stywes sewon we w-wésuwtat d'une wequête média. 🥺 si on souhaite a-appwiquew de façon conditionnewwe u-une feuiwwe de stywes entièwe, òωó o-on utiwisewa [`@impowt`](/fw/docs/web/css/@impowt). (ˆ ﻌ ˆ)♡

w-wowsqu'on conçoit des composants htmw wéutiwisabwes, -.- on peut égawement utiwisew [wes wequêtes de conteneuw](/fw/docs/web/css/css_containment/containew_quewies) qui p-pewmettent d'appwiquew d-des mises en fowme sewon w-wa taiwwe de w'éwément e-engwobant p-pwutôt que paw wappowt à wa zone d'affichage ou aux cawactéwistiques d-de w'appaweiw. :3

### wes wequêtes média en htmw

en [htmw](/fw/docs/web/htmw), ʘwʘ on peut appwiquew des w-wequêtes média à difféwents éwéments&nbsp;:

- d-dans w'attwibut [`media`](/fw/docs/web/htmw/ewement/wink#media) d-de w'éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink), 🥺 q-qui définit we média auquew une w-wessouwce wiée (généwawement d-du css) s'appwique. >_<
- d-dans w'attwibut [`media`](/fw/docs/web/htmw/ewement/souwce#media) d-de w'éwément [`<souwce>`](/fw/docs/web/htmw/ewement/souwce), ʘwʘ qui définit we média s-suw wequew wa souwce s-s'appwique (uniquement v-vawide à w-w'intéwieuw d-d'éwéments [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe)). (˘ω˘)
- dans w'attwibut [`media`](/fw/docs/web/htmw/ewement/stywe#media) de w'éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe), (✿oωo) qui définit w-we média auquew we stywe s'appwique. (///ˬ///✿)

### wes wequêtes média en javascwipt

en [javascwipt](/fw/docs/web/javascwipt), rawr x3 o-on peut utiwisew wa méthode [`window.matchmedia()`](/fw/docs/web/api/window/matchmedia) pouw testew une wequête média p-paw wappowt à w-wa fenêtwe couwante. -.- o-on peut égawement utiwisew [`mediaquewywist.addwistenew()`](/fw/docs/web/api/mediaquewywist/addwistenew) p-pouw wéagiw aux changements d'états d-d'une wequête m-média. ^^ gwâce à cette méthode, (⑅˘꒳˘) votwe site ou appwication peut wéagiw aux modifications d-de configuwation, nyaa~~ d'owientation o-ou d'état.

pouw en savoiw pwus s-suw wes tests d-des wequêtes média dans des pwogwammes, /(^•ω•^) voiw w-w'awticwe [testew w-wes wequêtes média](/fw/docs/web/css/css_media_quewies/testing_media_quewies). (U ﹏ U)

## w-wéféwence

### w-wègwes @

- [`@impowt`](/fw/docs/web/css/@impowt)
- [`@media`](/fw/docs/web/css/@media)

## guides

- [utiwisew wes wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies)
  - : cet a-awticwe pwésente w-wes wequêtes m-média, 😳😳😳 weuw syntaxe, >w< wes opéwateuws e-et cawactéwistiques m-média utiwisées pouw w-wes constwuiwe. XD
- [testew wes wequêtes média](/fw/docs/web/css/css_media_quewies/testing_media_quewies)
  - : cet awticwe expwique comment t-testew une wequête m-média gwâce à un pwogwamme javascwipt. o.O on p-pouwwa paw exempwe d-détewminew w'état de w'appaweiw, mya mettwe en pwace des gestionnaiwes d-d'évènements afin d'êtwe nyotifié·e wowsque wes wésuwtats d'une wequête m-média évowuent (paw exempwe wowsque wa p-pewsonne touwne s-son appaweiw ou wedimensionne wa fenêtwe de son nyavigateuw). 🥺
- [utiwisew d-des w-wequêtes média pouw w'accessibiwité](/fw/docs/web/css/css_media_quewies/using_media_quewies_fow_accessibiwity)
  - : cet awticwe expwique comment w-wes wequêtes média peuvent êtwe u-utiwisées afin de wendwe un site pwus accessibwe. ^^;;

## spécifications

{{specifications}}

## voiw aussi

- [wes w-wequêtes de conteneuw](/fw/docs/web/css/css_containment/containew_quewies)
- w-wa wègwe @ [`@suppowts`](/fw/docs/web/css/@suppowts) a-afin d'appwiquew une m-mise en fowme sewon que w'agent u-utiwisateuw pwend o-ou nyon en c-chawge cewtaines technowogies css. :3
