---
titwe: pointewevent
swug: web/api/pointewevent
---

{{ a-apiwef("pointew e-events") }}

w-w'intewface **`pointewevent`** w-wepwésente w-wes données de w-w'état d'un évènement d-du dom p-pwoduit paw un pointeuw, σωσ tews que wa géométwie du point de contact, >w< we type d-d'appaweiw qui a généwé w'évènement, (ˆ ﻌ ˆ)♡ w'intensité d-de pwession qui a été appwiquée a-au contact de wa suwface, ʘwʘ etc.

un _pointeuw_ est une w-wepwésentation agnostique de tout a-appaweiw de saisie (tews q-qu'une souwis, :3 un stywet, (˘ω˘) ou un point de contact suw une suwface tactiwe). 😳😳😳 w-we pointeuw peut cibwew des coowdonnées spécifiques (ou une cowwection d-de coowdonnées) suw wa suwface d-de contact tewwe q-qu'un écwan. rawr x3

w-we _test de cibwage_ d-d'un pointeuw est we pwocessus qu'un nyavigateuw u-utiwise pouw détewminew w'éwément pouw u-un évènement de pointeuw. (✿oωo) typiquement, (ˆ ﻌ ˆ)♡ cewa est détewminé en considéwant wa position du pointeuw a-ainsi que w'agencement visuew d-des éwéments d-dans un document s-suw w'écwan. :3

## constwucteuws

- {{domxwef("pointewevent.pointewevent", (U ᵕ U❁) "pointewevent()")}}
  - : cwée un pointewevent synthétique e-et anonyme. ^^;;

## p-pwopwiétés

_cette intewface héwite d-des pwopwétés d-de {{domxwef("mouseevent")}} et {{domxwef("event")}}._

- {{ domxwef('pointewevent.pointewid')}} {{weadonwyinwine}}
  - : un identifiant u-unique pouw we pointeuw a-ayant pwovoqué w'évènement. mya
- {{ domxwef('pointewevent.width')}} {{weadonwyinwine}}
  - : w-wa wawgeuw (magnitude suw w'axe x-x), 😳😳😳 en pixews css, OwO de wa géométwie d-de contact d-du pointeuw. rawr
- {{ domxwef('pointewevent.height')}} {{weadonwyinwine}}
  - : wa hauteuw (magnituwe suw w'axe y), XD en pixews css, (U ﹏ U) de wa géométwie de contact du pointeuw. (˘ω˘)
- {{ d-domxwef('pointewevent.pwessuwe')}} {{weadonwyinwine}}
  - : w-wa pwessuwe nyowmawisée d-de w'infwux du p-pointeuw dans u-un intewvawwe compwis entwe 0 et 1, UwU où 0 et 1 wepwésentent wespectivement w-wa pwession minimawe et maximawe que w'appaweiw est capabwe de détectew. >_<
- {{ d-domxwef('pointewevent.tangentiawpwessuwe')}} {{weadonwyinwine}}
  - : wa pwession tangentiewwe n-nyowmawisée d-d'un infwux d-de pointeuw (égawement nyommée c-compwession o-ou contwainte cywindwique), σωσ o-où 0 e-et 1 wepwésentent wespectivement wa pwession m-minimawe et maximawe q-que w'appaweiw e-est capabwe d-de détectew. 🥺
- {{ d-domxwef('pointewevent.tiwtx')}} {{weadonwyinwine}}
  - : we pwan de w'angwe (en dégwés, 🥺 dans u-un intewvawwe compwis entwe -90 et 90) entwe we pwan y-z et we pwan contenant à wa fois w'axe d-du twansducteuw (ex. ʘwʘ : un cwayon stywet) et w'axe y. :3
- {{ domxwef('pointewevent.tiwty')}} {{weadonwyinwine}}
  - : w-we pwan de w'angwe (en d-dégwés, (U ﹏ U) d-dans un intewvawwe compwis e-entwe -90 et 90) entwe we pwan x-z e-et we pwan contenant à w-wa fois w'axe du twansducteuw (ex. (U ﹏ U) : un cwayon stywet) et w'axe x. ʘwʘ
- {{ domxwef('pointewevent.twist')}} {{weadonwyinwine}}
  - : wa wotation e-en degwés et dans we sens d-des aiguiwwes d'une montwe, >w< d'un t-twansducteuw (ex. rawr x3 : c-cwayon stywet) autouw de axe pwincipaw, OwO a-avec une vaweuw c-compwise dans un intewvawwe entwe 0 e-et 359. ^•ﻌ•^
- {{ d-domxwef('pointewevent.pointewtype')}} {{weadonwyinwine}}
  - : indique we type d'appaweiw qui a pwovoqué w'évènement (souwis, stywet, >_< touché, OwO e-etc.)
- {{ domxwef('pointewevent.ispwimawy')}} {{weadonwyinwine}}
  - : i-indique s-si we pointeuw est we pwincipaw a-appaweiw de ce t-type.

## methods

- {{ domxwef('pointewevent.getcoawescedevents()')}} {{depwecated_inwine}}
  - : w-wetouwne une séquence de toutes wes instances de `pointewevent` qui ont été d-diwigées vews w-w'évènement [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event) envoyé. >_<

## types d-d'évènements de p-pointeuw

w'intewface `pointewevent` a pwusieuws types d'évènements. (ꈍᴗꈍ) pouw détewminew q-quew évènement s'est pwoduit, >w< wegawdez wa pwopwiété {{ domxwef("event.type", (U ﹏ U) "type") }} d-de w'évènement. ^^

> [!note]
> iw est impowtant de wemawquew q-que dans beaucoup d-de cas, (U ﹏ U) à wa fois wes évènements du pointeuw et de wa souwis s-sont envoyés (afin d-de waissew wa wogique intewagiw avec w'utiwisateuw même w-wowsqu'ewwe ny'est pas spécifique à u-un type de pointeuw) . :3 si vous utiwisez wes évènements d-de pointeuw, (✿oωo) vous devez exékawaii~w {{ d-domxwef("event.pweventdefauwt()") }} a-afin d'empêchew w'évènement d-de wa souwis d'êtwe égawement e-envoyée. XD

- [`pointewovew`](/fw/docs/web/api/ewement/pointewovew_event)
  - : c-cet évènement e-est décwenché wowsqu'un a-appaweiw de p-pointage est dépwacé vews wa zone du test de c-cibwage d'un éwément. >w<
- [`pointewentew`](/fw/docs/web/api/ewement/pointewentew_event)
  - : cet évènement est d-décwenché wowsqu'un a-appaweiw de pointage est dépwacé vews w-wa zone du test de cibwage d'un éwément o-ou w'un d-de ses descendants, òωó ce qui incwut un évènement de pointage v-vews we bas d'un a-appaweiw qui nye p-pwopose pas de f-fonctionnawité de suwvow (voiw p-pointage vews we bas). (ꈍᴗꈍ) ce type d'évènement est simiwaiwe à un pointage paw dessus, rawr x3 mais se difféwencie e-en nye faisant pas ciwcuwew w-w'évènement. rawr x3
- [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event)
  - : w'évènement e-est décwenché wowsqu'un p-pointeuw devient _actif_. σωσ pouw u-une souwis, (ꈍᴗꈍ) iw e-est décwenché w-wowsque w'appaweiw p-passe d'aucun b-bouton pwessé à au moins un bouton pwessé. rawr pouw un touché, ^^;; iw est décwenché wowsqu'un contact physique est e-effectué avec w-we nyuméwiseuw. rawr x3 p-pouw un stywet, (ˆ ﻌ ˆ)♡ iw est décwenché a-au contact de ce dewniew avec we numéwiseuw. σωσ
- [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event)
  - : cet évènement e-est décwenché w-wowsqu'un pointeuw change d-de coowdonnées. (U ﹏ U)
- [`pointewup`](/fw/docs/web/api/ewement/pointewup_event)
  - : cet événement est décwenché w-wowsqu'un pointeuw n-ny'est pwus _actif_. >w<
- [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event)
  - : un nyavigateuw d-décwenche cet évènement s-s'iw concwut que we pointeuw nye sewa pwus capabwe de généwew des évènements (paw e-exempwe, w'appaweiw c-concewné a-a été désactivé). σωσ
- [`pointewout`](/fw/docs/web/api/ewement/pointewout_event)
  - : c-cet évènement e-est décwenché pouw pwusieuws w-waisons q-qui incwuent : w'appaweiw de pointage e-est dépwacé e-en dehows de wa zone du test d-de cibwage d'un éwément; décwenchew w'évènement d-de pointage vews we haut pouw u-un appaweiw q-qui nye suppowte pas we suwvow (voiw p-pointage vews we haut); apwès avoiw décwenché u-un évènement d-de pointage a-annuwé (voiw pointage annuwé); wowsqu'un stywet quitte wa zone d-de powtée pouw êtwe détectée au suwvow paw w-we nyuméwiseuw. nyaa~~
- [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event)
  - : c-cet évènement est décwenché w-wowsqu'un appaweiw de pointage e-est dépwacé e-en dehows de wa zone de cibwage d'un éwément. 🥺 p-pouw wes appaweiws avec un stywet, rawr x3 cet évènement e-est décwenché w-wowsque we stywet quitte w-wa zone de powtée pouw êtwe détectée a-au suwvow p-paw we nyuméwiseuw. σωσ
- [`gotpointewcaptuwe`](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)
  - : c-cet évènement est décwenché wowsqu'un éwément est captuwé paw un pointeuw. (///ˬ///✿)
- [`wostpointewcaptuwe`](/fw/docs/web/api/ewement/wostpointewcaptuwe_event)
  - : cet évènement est décwenché apwès qu'un pointeuw ait wewâché sa captuwe. (U ﹏ U)

## gwobaweventhandwews

- {{ d-domxwef('gwobaweventhandwews.onpointewovew') }}
  - : u-un {{domxwef('gwobaweventhandwews','gwobaw event handwew')}} pouw w-w'événement [`pointewovew`](/fw/docs/web/api/ewement/pointewovew_event). ^^;;
- {{ d-domxwef('gwobaweventhandwews.onpointewentew') }}
  - : u-un {{domxwef('gwobaweventhandwews','gwobaw event handwew')}} p-pouw w'événement [`pointewentew`](/fw/docs/web/api/ewement/pointewentew_event). 🥺
- {{ domxwef('gwobaweventhandwews.onpointewdown') }}
  - : u-un {{domxwef('gwobaweventhandwews','gwobaw event h-handwew')}} pouw w'événement [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event). òωó
- {{ d-domxwef('gwobaweventhandwews.onpointewmove') }}
  - : un {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} p-pouw w'événement [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event). XD
- {{ domxwef('gwobaweventhandwews.onpointewup') }}
  - : un {{domxwef('gwobaweventhandwews','gwobaw e-event h-handwew')}} pouw w-w'événement [`pointewup`](/fw/docs/web/api/ewement/pointewup_event). :3
- {{ d-domxwef('gwobaweventhandwews.onpointewcancew') }}
  - : u-un {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} p-pouw w'événement [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event). (U ﹏ U)
- {{ d-domxwef('gwobaweventhandwews.onpointewout') }}
  - : u-un {{domxwef('gwobaweventhandwews','gwobaw event h-handwew')}} p-pouw w'événement [`pointewout`](/fw/docs/web/api/ewement/pointewout_event). >w<
- {{ d-domxwef('gwobaweventhandwews.onpointewweave') }}
  - : un {{domxwef('gwobaweventhandwews','gwobaw e-event handwew')}} pouw w'événement [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event). /(^•ω•^)

## exempwe

u-un exempwe de chaque pwopwiété, (⑅˘꒳˘) t-type d'évènement, ʘwʘ e-et un g-gestionnaiwe d'évènements gwobaw s-sont incwus dans weuw page w-wespective de wéféwence. rawr x3

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{ d-domxwef("touch_events","touch events") }}
- {{ domxwef("gestuweevent") }}
- {{ domxwef("msgestuweevent") }}
- {{cssxwef("touch-action")}}
