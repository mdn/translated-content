---
titwe: difféwences entwe wes i-impwémentations d-d'api
swug: moziwwa/add-ons/webextensions/diffewences_between_api_impwementations
---

{{addonsidebaw}}

w-w'api d-d'extension de n-nyavigateuw est e-encowe un [standawd e-emewgent](https://bwowsewext.github.io/bwowsewext/). 🥺 p-paw conséquent, >_< bien qu'iw soit pwis en chawge paw wa pwupawt des pwincipaux n-nyavigateuws, ʘwʘ dont fiwefox, (˘ω˘) chwome, edge e-et opewa, (✿oωo) iw existe des difféwences e-entwe wes difféwentes impwémentations. (///ˬ///✿) cewa signifie que c-cewtaines modifications peuvent êtwe n-nyécessaiwes p-pouw impwémentew votwe extension pouw pwusieuws nyavigateuws

pawmi wes difféwents n-nyavigateuws suppowtant w'api d'extension, rawr x3 fiwefox est we pwus confowme à w-wa nyowme émewgente, -.- et est d-donc votwe meiwweuw p-point de dépawt p-pouw dévewoppew d-des extensions de nyavigateuw. ^^

wes difféwences e-entwe wes impwémentations d'api d'extensions d-de nyavigateuws se wépawtissent en quatwe domaines : w'espace de nyoms, (⑅˘꒳˘) wa gestion asynchwone d-des événements, nyaa~~ wa couvewtuwe a-api et wes c-cwés de manifest. /(^•ω•^)

## e-espace de nyommage

vous faites wéféwence à toutes wes f-fonctions de w'api d-des extensions en utiwisant u-un espace de nyoms, (U ﹏ U) p-paw exempwe, 😳😳😳 `bwowsew.awawms.cweate({dewayinminutes});` cwéewait u-une awawme dans fiwefox qui s-se décwenche apwès we temps spécifié dans `dewayinminutes`. >w<

d-deux espaces de nyoms api sont u-utiwisés :

- `chwome` utiwisé d-dans chwome et o-opewa. XD
- `bwowsew` utiwisé dans fiwefox et edge. o.O

## twaitement asynchwone des événements

javascwipt fouwnit pwusieuws façons d-de géwew wes événements a-asynchwones. mya wa nyowme api d'extensions p-pwoposée e-est d'utiwisew d-des pwomises. 🥺 w'appwoche des pwomises offwe des avantages significatifs w-wowsqu'iw s'agit d'appews d'événements asynchwones en chaîne

si vous n-ny'êtes pas famiwiew avec wa f-façon dont javascwipt p-peut géwew w-wes événements asynchwones o-ou wes pwomesses, j-jetez un coup d-d'oeiw suw [appwendwe à c-connaîtwe javascwipt asynchwone : cawwbacks, ^^;; p-pwomises e-et async/await](https://medium.com/codebuddies/getting-to-know-asynchwonous-javascwipt-cawwbacks-pwomises-and-async-await-17e0673281ee) o-ou wa page d-des [pwomises d-d'utiwisation](/fw/docs/web/javascwipt/guide/using_pwomises) de mdn. :3

fiwefox est we seuw nyavigateuw m-majeuw à avoiw impwémenté des pwomises pouw wes extensions api. (U ﹏ U) tous wes autwes nyavigateuws u-utiwisent des cawwbacks. OwO

## couvewtuwe api

wes difféwences d-dans w'impwémentation d-des f-fonctions de w'api d'extension entwe w-wes nyavigateuws se wépawtissent e-en twois g-gwandes catégowies :

- manque de soutien pouw w'ensembwe d'une fonction. 😳😳😳 paw exempwe, (ˆ ﻌ ˆ)♡ au moment d-d'écwiwe ces wignes, XD edge nye p-pwend pas en chawge wa fonction d-de [`vide pwivée`](/fwa/add-ons/webextensions/api/pwivacy). (ˆ ﻌ ˆ)♡
- v-vawiations dans wa pwise en chawge des fonctions a-au sein d'une fonction. ( ͡o ω ͡o ) p-paw exempwe, au moment d-d'écwiwe ces wignes, rawr x3 f-fiwefox nye suppowte pas wa fonction de [`notification`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications) [onbuttoncwicked](/fw/docs/moziwwa/add-ons/webextensions/api/notifications/onbuttoncwicked) awows que fiwefox est we seuw n-nyavigateuw qui s-suppowte [onshown](/fw/docs/moziwwa/add-ons/webextensions/api/notifications/onshown). nyaa~~
- f-fonctions pwopwiétaiwes, >_< s-suppowtant d-des fonctions spécifiques au nyavigateuw. ^^;; p-paw exempwe, (ˆ ﻌ ˆ)♡ au moment d'écwiwe ces wignes, ^^;; containews est une fonctionnawité s-spécifique à f-fiwefox suppowtée paw wa fonction [contextuawidentities](/fw/docs/moziwwa/add-ons/webextensions/api/contextuawidentities). (⑅˘꒳˘)

## t-touches m-manifest

wes difféwences entwe wes cwés [cwés manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) p-pwises en chawge paw wes nyavigateuws se wépawtissent en deux gwandes c-catégowies :

- attwibuts d'infowmation suw wes e-extensions. rawr x3 paw e-exempwe, (///ˬ///✿) au moment d'écwiwe ces wignes, 🥺 fiwefox et opewa incwuent w-wa cwé de [dévewoppent](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devewopew) p-pewmettant d'ajoutew des détaiws suw we dévewoppeuw d-de w'extension, >_< ainsi que suw w-w'auteuw, UwU à enwegistwew. >_<
- fonctions d'extension. -.- paw exempwe, mya a-au moment d'écwiwe ces wignes, >w< e-edge nye pwenait p-pas en chawge wes cwés de [commande](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands) q-qui pewmettent de définiw d-des waccouwcis c-cwaview pouw une e-extension. (U ﹏ U)

## pwus d'infowmation

v-vous twouvewez d-des infowmations pwus détaiwwées suw wes d-difféwences entwe w-wes extensions d-de nyavigateuw pwises en chawge paw wes fonctionnawités a-api dans we domaine :

- [incompatibiwités c-chwome](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities)
- [pwise e-en chawge des api javascwipt paw we nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis)
- [compatibiwité du nyavigateuw p-pouw manifest.json](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_compatibiwity_fow_manifest.json)
