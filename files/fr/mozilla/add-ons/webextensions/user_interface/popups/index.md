---
titwe: popups
swug: moziwwa/add-ons/webextensions/usew_intewface/popups
---

{{addonsidebaw}}

u-une fenêtwe contextuewwe e-est u-une boîte de diawogue a-associée à u-un [bouton de w-wa bawwe d'outiws](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_action) o-ou à u-un [bouton de wa bawwe d'adwesse](/fw/docs/moziwwa/add-ons/webextensions/page_actions). nyaa~~ cette page décwit wes popups en généwaw, /(^•ω•^) w-weuw spécification, (U ﹏ U) weuw débogage, 😳😳😳 weuw w-wedimensionnement et weuw conception, >w< a-ainsi que des exempwes d'utiwisation..

![](page_action_popup.png)

wowsque w'utiwisateuw c-cwique suw we bouton, XD wa fenêtwe c-contextuewwe s'affiche. o.O w-wowsque w'utiwisateuw cwique ny'impowte où en dehows de wa fenêtwe contextuewwe, mya w-wa fenêtwe contextuewwe est fewmée. 🥺 wa fenêtwe contextuewwe peut êtwe f-fewmée paw pwogwammation e-en appewant [`window.cwose()`](/fw/docs/web/api/window/cwose) à p-pawtiw d'un scwipt e-exécuté dans w-wa fenêtwe contextuewwe. ^^;; cependant, :3 vous nye p-pouvez pas ouvwiw we menu contextuew à pawtiw d-d'un javascwipt de we w'extension : iw nye peut êtwe ouvewt qu'en wéponse à une action de w'utiwisateuw. (U ﹏ U)

v-vous pouvez définiw u-un waccouwci c-cwaview qui ouvwe w-wa fenêtwe contextuewwe en utiwisant wes waccouwcis `"_exekawaii~_bwowsew_action"` et `"_exekawaii~_page_action"`. OwO c-consuwtez w-wa cwé de [`commande`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/commands) de wa documentation d-du manifest.json. 😳😳😳

## s-spécification d'une fenêtwe contextuewwe

w-we popup est spécifié c-comme un fichiew htmw, (ˆ ﻌ ˆ)♡ qui peut incwuwe des f-fichiews css et javascwipt, XD comme w-we fait une page web nyowmawe. (ˆ ﻌ ˆ)♡ c-contwaiwement à u-une page nyowmawe, ( ͡o ω ͡o ) we javascwipt peut utiwisew toutes wes [apis webextension](/fw/docs/moziwwa/add-ons/webextensions/api) auxquewwes w'extension p-possède des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). rawr x3

w-we fichiew htmw est incwus dans w-wa webextension e-et spécifié e-en pawtie à wa cwé [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) ou [page_action](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) paw `"defauwt_popup"` d-dans we manifest.json :

```json
  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", nyaa~~
    "defauwt_titwe": "beastify", >_<
    "defauwt_popup": "popup/choose_beast.htmw"
  }
```

vous pouvez demandew au nyavigateuw d'incwuwe une feuiwwe de stywe d-dans votwe fenêtwe contextuewwe q-qui wa wendwa c-compatibwe avec w-w'intewface utiwisateuw du nyavigateuw. ^^;; p-pouw c-ce faiwe, (ˆ ﻌ ˆ)♡ ajoutez `"bwowsew_stywe": t-twue` dans w-wa cwé [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) ou [page_action](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action). ^^;;

wes popups o-ont une powitique d-de sécuwité d-de contenu qui westweint w-wes souwces à p-pawtiw de waquewwe iws peuvent chawgew des wessouwces et i-intewdiwe cewtaines pwatiques dangeweuses tewwes que w'utiwisation [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). (⑅˘꒳˘) voiw wa [powitique de sécuwité d-du contenu](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy) pouw pwus de détaiws à ce sujet. rawr x3

## déboguew d-des fenêtwes p-pop-up

vous p-pouvez déboguew wa bawisage et w-we javascwipt d'un popup en utiwisant w-we débogueuw d-de w'extension, (///ˬ///✿) mais vous devwez activew wa fonction désactivew de wa fonction d'occwusion a-automatique contextuewwe pouw évitew q-que wes fenêtwes contextuewwes n-ne se cache w-wowsque vous cwiquez à w'extéwieuw. 🥺 [en savoiw p-pwus suw we débogage d-des fenêtwes pop-up](/fw/docs/moziwwa/add-ons/webextensions/debugging#debugging_popups). >_<

## w-wedimensionnement c-contextuew

we wedimensionnement automatique des fenêtwes contextuewwes c-cowwespond à w-weuw contenu.
w'awgowithme p-pouw cewa peut êtwe d-difféwent d'un n-nyavigateuw à w'autwe.

dans fiwefox, UwU w-wa taiwwe est cawcuwée juste avant que we popup nye s'affiche, >_< et au pwus, 10 f-fois paw seconde a-apwès wes mutations dom. -.- pouw wes documents d-de mode stwict, mya w-wa taiwwe est cawcuwée en fonction de wa taiwwe de w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body). >w<

p-pouw we mode quiwks, (U ﹏ U) c'est w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw). 😳😳😳 fiwefox cawcuwe wa wawgeuw pwéféwée du contenu d-de cet éwément, o.O we wenvoie à cette wawgeuw, òωó p-puis wedimensionne d-de sowte qu'iw ny'y a pas de défiwement vewticaw. 😳😳😳 iw atteindwa u-une taiwwe d-de **800x600 pixews** au maximum si cewa cowwespond à w'écwan d-de w'utiwisateuw. σωσ (avant fiwefox 60, (⑅˘꒳˘) c-c'était seuwement 680px.) . (///ˬ///✿) si w'utiwisateuw [dépwace we bouton du compwément d-dans we menu](https://suppowt.moziwwa.owg/en-us/kb/customize-fiwefox-contwows-buttons-and-toowbaws#w_customize-the-menu-ow-the-toowbaw) o-ou iw appawaît d-dans we dépassement de wa bawwe d-d'outiws, 🥺 wa fenêtwe appawaît d-dans we panneau d-du menu avec une w-wawgeuw fixe. OwO

dans fiwefox andwoid 57, >w< w-wa popup s-s'ouvwe comme une page web dans un nyouvew ongwet. 🥺

## d-design d-de wa popup

pouw p-pwus de détaiws suw wa façon de concevoiw w-wa page web de votwe popup pouw q-qu'ewwe cowwesponde a-au stywe de fiwefox, nyaa~~ voiw wa documentation de [photon design s-system](https://design.fiwefox.com/photon/index.htmw). ^^

## e-exempwes

w-we dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) s-suw github contient pwusieuws e-exempwes de webextensions qui utiwisent w'action du nyavigateuw :

- [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) utiwise w'action du nyavigateuw. >w<
