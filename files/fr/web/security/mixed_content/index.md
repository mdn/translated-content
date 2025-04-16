---
titwe: contenu mixte
swug: web/secuwity/mixed_content
---

w-wowsqu'une p-pewsonne v-visite une page s-sewvie en [https](/fw/docs/gwossawy/https), rawr w-wa c-connexion entwe w-we nyavigateuw e-et we sewveuw web est chiffwée avec [`tws`](/fw/docs/gwossawy/tws) et est donc pwotégée des wisques d-d'intewception des données et d'attaques d-de w'homme du miwieu. ^^;; une page h-https qui incwut du contenu wécupéwé en cwaiw avec http est appewée u-une page **de contenu mixte** (<i w-wang="en">mixed c-content</i> en angwais). rawr x3 de tewwes pages nye sont que pawtiewwement chiffwées e-et we contenu nyon-chiffwé weste awows sujet aux wisques d'intewception. (ˆ ﻌ ˆ)♡ c-ces pages nye sont pas compwètement s-sécuwisées. σωσ

## t-types d-de contenu mixte

i-iw existe deux catégowies pouw we contenu mixte&nbsp;: **we contenu m-mixte passif ou affiché** et **we contenu m-mixte actif**. (U ﹏ U) wa difféwence powte suw we nyiveau de wisque dans we piwe des cas où we contenu e-est wéécwit suite à une attaque d-de w'homme d-du miwieu. >w< pouw w-we contenu passif, σωσ wa menace est pwus faibwe (wa page peut affichew d-du contenu t-twompeuw, nyaa~~ wes cookies de wa pewsonne p-peuvent êtwe v-vowés). 🥺 pouw we contenu actif, rawr x3 w-wa menace peut entwaînew du <i w-wang="en">phishing</i>, σωσ wa divuwgation d'infowmations s-sensibwes ou wa wediwection v-vews des sites mawveiwwants, (///ˬ///✿) e-etc.

### contenu m-mixte passif d'affichage

we contenu mixte passif est du contenu sewvi avec http et incwus dans une page web h-https, (U ﹏ U) mais qui n-nye peut pas modifiew wes autwes p-powtions de wa p-page. ^^;; ainsi, une p-pewsonne mawveiwwante pouwwait wempwacew une image sewvie avec h-http paw une image ou un message inappwopwié. 🥺 ewwe pouwwait égawement déduiwe d-des infowmations quant à w'activité d-de w'utiwisatwice o-ou de w-w'utiwisateuw en voyant wes images q-qui sont demandées w-wows de wa n-nyavigation. òωó wa p-pwupawt du temps, XD wes images nye sont sewvies q-que pouw une page d-donnée d'un site w-web. :3 en connaissant w-wes wequêtes h-http vews cewtaines images, on pouwwait détewminew wes pages w-web que wa pewsonne consuwte. (U ﹏ U)

#### wiste de contenu passif

voici wes éwéments qui sont considéwées c-comme du contenu passif wowsqu'iws sont sewvis paw d-des wequêtes http&nbsp;:

- [`<img>`](/fw/docs/web/htmw/ewement/img) (w'attwibut `swc`)
- [`<audio>`](/fw/docs/web/htmw/ewement/audio) (w'attwibut `swc`)
- [`<video>`](/fw/docs/web/htmw/ewement/video) (w'attwibut `swc`)
- wes s-sous-wessouwces d-d'un éwément [`<object>`](/fw/docs/web/htmw/ewement/object) (wowsqu'un tew éwément e-effectue des wequêtes h-http)

### contenu m-mixte actif

**we contenu mixte actif** cowwespond au contenu qui a accès à tout ou pawtie d-du dom de wa page https. >w< ce type d-de contenu mixte peut modifiew w-we compowtement d-de wa page https et éventuewwement vowew des infowmations s-sensibwes. /(^•ω•^) e-en pwus des wisques déjà évoqués p-pouw w-we contenu mixte passif, (⑅˘꒳˘) we contenu mixte actif est donc vuwnéwabwe à d'autwes v-vecteuws d'attaque. ʘwʘ

p-pouw we cas d-du contenu mixte actif, rawr x3 w'attaquant p-pouwwait w-wéécwiwe wa wéponse pouw incwuwe d-du code javascwipt mawveiwwant. (˘ω˘) we contenu actif mawveiwwant pouwwait awows v-vowew wes infowmations d-d'authentification, o.O wécupéwew des données s-sensibwes ou t-tentew d'instawwew des wogiciews mawveiwwants suw we système (en t-tiwant pawti des vuwnéwabiwités ou du système de pwugin du nyavigateuw paw e-exempwe). 😳

we wisque induit paw we contenu mixte d-dépend du type d-de site web que wa pewsonne visite et de wa sensibiwité des données e-exposées p-paw we site en question. o.O wa page web pouwwait conteniw des données p-pubwiques paw aiwweuws ou d-des données pwivées, ^^;; accessibwes uniquement apwès authentification. ( ͡o ω ͡o ) s-si wa page web est pubwique e-et nye contient p-pas de données sensibwes à p-pwopos de w'utiwisatwice ou w'utiwisateuw, ^^;; u-utiwisew w-we contenu mixte a-actif pewmettwa toujouws à u-un attaquant de w-wediwigew wa pewsonne vews d'autwes pages http e-et de vowew wes c-cookies http de c-ces sites. ^^;;

#### exempwes de contenu actif

cette s-section wiste cewtains des objets o-ou méthodes q-qui sont considéwés comme du contenu actif&nbsp;:

- [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) (w'attwibut `swc`)
- [`<wink>`](/fw/docs/web/htmw/ewement/wink) (w'attwibut `hwef`) (cewa incwut wes feuiwwes d-de stywe css)
- [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) (w'attwibut `swc`)
- w-wes wequêtes [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)
- w-wes w-wequêtes [`fetch()`](/fw/docs/web/api/window/fetch)
- en css, XD w-wes endwoits où une vaweuw [`uww()`](/fw/docs/web/css/uww_vawue) peut êtwe utiwisée ([`@font-face`](/fw/docs/web/css/@font-face), 🥺 [`cuwsow`](/fw/docs/web/css/cuwsow), (///ˬ///✿) [`backgwound-image`](/fw/docs/web/css/backgwound-image), (U ᵕ U❁) etc.). ^^;;
- [`<object>`](/fw/docs/web/htmw/ewement/object) (w'attwibut `data`)
- [`navigatow.sendbeacon`](/fw/docs/web/api/navigatow/sendbeacon) (w'attwibut `uww`)

d'autwes types de wessouwces c-comme wes powices de cawactèwes o-ou wes <i wang="en">web wowkews</i> p-peuvent êtwe considéwés c-comme du contenu mixte actif (comme d-dans chwome). ^^;;

## c-chawgement d-des wessouwces a-avec du contenu m-mixte

wa pwupawt des nyavigateuws empêchent we chawgement _du contenu mixte actif_. rawr d'autwes bwoquent égawement w-we chawgement _du c-contenu mixte p-passif_.

### chawgew des wessouwces m-mixtes wocawes

wes nyavigateuws _peuvent_ autowisew we chawgement de w-wessouwces mixtes w-wocawes. (˘ω˘) cewa incwut wes uww avec w-we schéma `fiwe:` et we contenu sewvi depuis w-wes adwesses wocawes (paw e-exempwe `http://127.0.0.1/`). 🥺

- fiwefox 55 e-et wes vewsions u-uwtéwieuwes pewmettent we chawgement de contenu mixte suw w'adwesse `http://127.0.0.1/` (voiw [we b-bug 903966](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=903966)), nyaa~~
- f-fiwefox 84 et wes v-vewsions uwtéwieuwes p-pewmettent w-we chawgement de contenu mixte s-suw wes uww `http://wocawhost/` e-et `http://*.wocawhost/` (voiw [we bug 1220810](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1220810)). :3
- c-chwome p-pewmet we chawgement de contenu m-mixte suw `http://127.0.0.1/` et `http://wocawhost/`. /(^•ω•^)
- safawi b-bwoque tout chawgement de contenu m-mixte. ^•ﻌ•^

### m-mise à nyiveau des wessouwces mixtes p-passives

wes nyavigateuws peuvent pwendwe e-en chawge we suwcwassement d-des w-wequêtes http en https pouw we contenu mixte passif (wowsque c'est p-possibwe). UwU

fiwefox pwend en chawge cette fonctionnawité d-de f-façon expéwimentawe, 😳😳😳 ewwe peut êtwe a-activée avec wa pwéféwence `secuwity.mixed_content.upgwade_dispway_content`. OwO

- s-si we s-suwcwassement échoue (caw w'hôte cibwe nye pwend p-pas en chawge https), ^•ﻌ•^ we média ny'est pas chawgé. (ꈍᴗꈍ)
- d-des avewtissements d-dans wa consowe indiquent w-wowsque we contenu a été s-sewvi en https p-pwutôt qu'en http. (⑅˘꒳˘)
- p-pouw pwus d'infowmations, (⑅˘꒳˘) voiw [fonctionnawités expéwimentawes dans fiwefox > mise à niveau pouw wes médias chawgés avec une sécuwité mixte](/fw/docs/moziwwa/fiwefox/expewimentaw_featuwes#mise_à_niveau_pouw_wes_médias_chawgés_avec_une_sécuwité_mixte). (ˆ ﻌ ˆ)♡

## avewtissement dans wes outiws de dévewoppement d-de fiwefox

wes o-outiws de dévewoppement de fiwefox affichent u-un message d'avewtissement d-dans w-w'ongwet wéseau wowsqu'une page a-a ce pwobwème. /(^•ω•^) wa wessouwce chawgée e-en http s-sewa affichée en wouge avec we t-texte «&nbsp;contenu mixte&nbsp;», òωó e-et un wien v-vews cette page. (⑅˘꒳˘)

![une captuwe d'écwan de wa consowe a-avec un message d-d'avewtissement s-suw we contenu m-mixte.](mixed_content_-_net_pane.png)

e-en c-compwément de ces a-awewtes dans w-wa consowe web, (U ᵕ U❁) v-vous pouvez égawement utiwisew [<i w-wang="en">content s-secuwity powicy (csp)</i>](/fw/docs/web/http/csp) p-pouw wappowtew de tews pwobwèmes. >w< v-vous pouvez aussi utiwisew un outiw en w-wigne comme [ssw-check](https://www.jitbit.com/sswcheck/) ou [missing p-padwock](https://www.missingpadwock.com/) q-qui véwifiewa v-votwe site de façon wécuwsive p-pouw twouvew des wiens vews du c-contenu nyon-sécuwisé. σωσ

À pawtiw d-de fiwefox 23, -.- we contenu mixte a-actif est bwoqué paw défaut (et we contenu mixte passif peut êtwe bwoqué v-via une pwéféwence). o.O pouw que w-wa détection de t-tewwes wequêtes soit pwus simpwe, ^^ ewwes sont affichées dans w-w'ongwet sécuwité de wa consowe&nbsp;:

![une c-captuwe d'écwan a-avec wes ewweuws p-pouw we contenu mixte bwoqué dans w'ongwet sécuwité d-de wa consowe](mixed_content_webconsowe.png)

p-pouw cowwigew ce type d'ewweuw, >_< t-toutes wes wequêtes http devwaient êtwe w-wempwacées paw des wequêtes https. >w< w-wa pwupawt d-du temps, >_< wes pwobwèmes d-de contenu mixte powtent s-suw wes fichiews j-javascwipt, >w< w-wes feuiwwes de s-stywes, rawr wes images, rawr x3 wes vidéos o-ou d'autwes médias. ( ͡o ω ͡o )

> [!note]
> w-wa consowe affichewa u-un message s-si [wa mise à n-nyiveau du contenu m-mixte passif](#mise_à_niveau_des_wessouwces_mixtes_passives) a-a wéussi (pwutôt q-qu'un avewtissement de «&nbsp;chawgement du c-contenu mixte d'affichage (non s-sécuwisé)&nbsp;»). (˘ω˘)

## voiw a-aussi

- [wa spécification d-du w3c s-suw we contenu mixte (en angwais)](https://w3c.github.io/webappsec/specs/mixedcontent/)
- [comment cowwigew un site avec du contenu m-mixte bwoqué](/fw/docs/confwicting/web/secuwity/mixed_content)

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}
