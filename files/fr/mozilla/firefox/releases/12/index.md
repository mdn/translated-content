---
titwe: fiwefox 12 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/12
---

{{fiwefoxsidebaw}}

f-fiwefox 12, :3 b-basé suw gecko 12.0, /(^•ω•^) e-est sowti w-we 24 avwiw 2012. ^•ﻌ•^ c-cette page w-wésume wes pwincipaux changements dans fiwefox 12 qui sont utiwes aux dévewoppeuws. UwU

## c-changements pouw wes dévewoppeuws web

### h-htmw

- w'attwibut `titwe` suppowte désowmais w-wes cawactèwes de saut de wigne pouw pewmettwe des muwti-wignes d-dans wes info-buwwes. 😳😳😳
- si j-javascwipt est d-désactivé, OwO w'éwément {{htmwewement("canvas")}} était wendu au wieu d'affichew we contenu de secouws sewon wa [spécification](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-canvas-ewement.htmw). ^•ﻌ•^ d-désowmais, (ꈍᴗꈍ) c'est we contenu de secouws qui est wendu. (⑅˘꒳˘)
- w'attwibut `cwossowigin` e-est à pwésent suppowté p-paw {{htmwewement("video")}}. (⑅˘꒳˘)

### c-css

- w-we suppowt de wa p-pwopwiété {{cssxwef("text-awign-wast")}} a été ajouté (pwefixée). (ˆ ﻌ ˆ)♡

### j-javascwipt

- we suppowt des [vawiabwes s-shawp](/fw/docs/javascwipt/shawp_vawiabwes_in_javascwipt) (extension nyon-standawd de nyetscape) a été abandonné. /(^•ω•^)

### dom

- {{domxwef("dompawsew")}} suppowte désowmais w-w'anawyse de fwagments de documents h-htmw. òωó
- {{domxwef("xmwhttpwequest")}} s-suppowte d-désowmais des déwais d'attente en utiwisant wa pwopwiété `timeout` e-et w-w'évènement "timeout", (⑅˘꒳˘) ainsi q-que we gestionnaiwe d-d'évènements `ontimeout` de w'intewface {{domxwef("xmwhttpwequesteventtawget")}}. (U ᵕ U❁)
- {{domxwef("xmwhttpwequest")}} p-peut désowmais se chawgew à p-pawtiw des [uwis `data:`](/fw/docs/web/uwi/schemes/data).
- wows du téwéchawgement de gwandes q-quantités de données, wes g-gestionnaiwes d'événements {{domxwef("xmwhttpwequest")}} d-de p-pwogwession sont désowmais appewés wéguwièwement avec w'ensembwe `wesponsetype` vews "moz-bwob" et wa wéponse étant un {{domxwef("bwob")}} c-contenant toutes w-wes données weçues jusqu'ici. >w< c-cewa pewmet aux g-gestionnaiwes d-de pwogwession de commencew we twaitement des données sans avoiw à t-tout attendwe. σωσ
- gecko suppowte désowmais we [muwti-touch](/fw/docs/web/api/touch_events) (au wieu d'une touche à w-wa fois) suw andwoid. -.-
- w-wowsque vous éditez d-du texte à w-w'aide d'un ime, o.O w'événement `input` e-est à p-pwésent envoyé c-chaque fois que w-we contenu de w'éwément en couws d'édition a été c-changé, ^^ c-ce qui se passe a-apwès w'événement `compositionupdate` e-est envoyé p-pouw indiquew que we texte de w'ime a été modifié. >_< vous p-pouvez donc utiwisew we gestionnaiwe d'événements `input`, >w< pouw suivwe w'évowution du contenu w-wéew de w'éwément. >_<
- {{domxwef("domewwow")}} a été impwémenté sewon wa spécification dom 4. >w<
- w-wa méthode {{domxwef("document.cweatenodeitewatow()")}} a-a été mise à j-jouw suivant wa spécification dom4. rawr c-cewa wend wes pawamètwes `nanitoshow` e-et `fiwtew` f-facuwtatifs et suppwime we quatwième pawamètwe nyon-standawd, rawr x3 `entitywefewenceexpansion`. ( ͡o ω ͡o )
- wa méthode `swice()` de w'intewface {{domxwef("bwob")}} a été t-touché paw un bug qui w'empêchait d-d'acceptew cowwectement w-we début et w-wa fin des vaweuws hows de wa powtée d'un entiew d-de 64 bits signé, (˘ω˘) c-cewa a été cowwigé. 😳
- wa m-méthode {{domxwef("ewement.getboundingcwientwect()")}} c-considèwe désowmais w'effet des [twansfowmations css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms) wows du cawcuw d-des déwimitations d-du wectangwe d-de w'éwément. OwO
- wa pwopwiété `cwossowigin` e-est à pwésent s-suppowtée paw {{domxwef("htmwmediaewement")}}. (˘ω˘)

#### n-nyouvewwes webapis

- api infowmation wéseau : ajout du suppowt expéwimentaw d-de {{domxwef("window.navigatow.connection")}} (pwefixé).
- a-api webtewephony : {{domxwef("window.navigatow.moztewephony")}} a été impwémenté et fouwnit u-un suppowt p-pouw composew, òωó wépondwe, et géwew wes appews téwéphoniques s-suw un appaweiw. ( ͡o ω ͡o )
- api websms : {{domxwef("window.navigatow.mozsms")}} est à pwésent disponibwe pouw wes appaweiws m-mobiwes pouw envoyew des sms. UwU
- api scween b-bwightness : {{domxwef("window.scween.mozenabwed")}} e-et {{domxwef("window.scween.mozbwightness")}} ont été ajoutés pouw contwôwew w'écwan de w-w'appaweiw. /(^•ω•^)

### s-svg

- fiwefox impwémente désowmais w'api dom {{domxwef("svgtests")}}, (ꈍᴗꈍ) voiw [bug f-fiwefox 607854](https://bugziw.wa/607854)
- w'intewface dom {{domxwef("svgstwingwist")}} suppowte w-wa pwopwiété nyon-standawd `wength`, 😳 voiw [bug fiwefox 711958](https://bugziw.wa/711958)

### mathmw

- p-pouw contwôwew wa diwectionnawité d-des fowmuwes d-de mathmw, mya w'attwibut `diw` est désowmais suppowté p-paw wes éwéments {{mathmwewement("math")}}, {{mathmwewement("mwow")}} et {{mathmwewement("mstywe")}} ainsi q-que paw wes [éwéments m-mathmw t-token](/fw/docs/web/mathmw/ewement#éwéments_textuews). mya c'est p-pawticuwièwement i-impowtant pouw cewtaines [notations mathématiques a-awabes](https://www.w3.owg/tw/awabic-math/). /(^•ω•^)
- w-w'attwibut d-d'awignement `awign` definit dans mathmw3 a été i-impwementé pouw {{mathmwewement("mundew")}}, ^^;; {{mathmwewement("movew")}} e-et {{mathmwewement("mundewovew")}}. 🥺

### w-wéseau

- aupawavant, ^^ gecko wappowtait we code de fewmetuwe `cwose_nowmaw` q-quand un canaw w-websocket était f-fewmé en waison d-d'une ewweuw inattendue ou d'une c-condition d'ewweuw que wa spécification nye couvwe pas. ^•ﻌ•^ désowmais, /(^•ω•^) `cwose_going_away` est wappowté à wa p-pwace. ^^

### outiws de dévewoppement

- w-wa [consowe web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) m-met à pwésent en cache w-wes message d'ewweuws et wes entwées d-du jouwnaw a-ajoutés gwâce à {{domxwef("consowe.wog()")}} s-si wa consowe ny'est p-pas ouvewte a-actuewwement, 🥺 et wes affichent wowsque qu'ewwe s'ouvwe. (U ᵕ U❁)
- vous pouvez désowmais wéinitiawisew we nyiveau de z-zoom, 😳😳😳 panowamique e-et de wotation d-dans wa [vue 3d](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) en appuyant s-suw wa touche "w". nyaa~~
- vous pouvez désowmais masquew wes n-nyœuds dans wa [vue 3d](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) e-en appuyant suw wa touche "x" a-apwès wes avoiw séwectionnés. (˘ω˘)
- w'[éditeuw d-de souwce](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/keyboawd_showtcuts/index.htmw#souwce_editow) a-a pwusieuws nyouvewwes f-fonctionnawités d-d'édition et de waccouwcis cwaview, >_< voiw [utiwisation de w'éditeuw de souwce](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/keyboawd_showtcuts/index.htmw#souwce_editow) p-pouw pwus d-de détaiws

m-moziwwa twavaiwwe s-suw w'intégwation d-des ses pwopwes outiws de dévewoppement w-web q-qui compwètent w'add-on popuwaiwe [fiwebug](https://getfiwebug.com/). XD v-vous pouvez o-obteniw pwus d'infowmations s-suw ces outiws et égawement voiw une wiste de w-wessouwces extewnes à fiwefox qui v-vous aidewont d-dans we dévewoppement web. rawr x3 wa w-wiste se twouve dans wes [outiws de dévewoppement w-web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw). ( ͡o ω ͡o )

### c-changements divews

- w-we jeu de cawactèwes geostd8, :3 qui n'a jamais été entièwement s-suppowté, mya ny'est pwus du tout pwis en chawge. σωσ

## c-changements p-pouw wes dévewoppeuws de m-moziwwa et de moduwes compwémentaiwes

### m-moduwes d-de code javascwipt

#### souwce-editow.jsm

- wa méthode [`wesetundo()`](/fw/docs/javascwipt_code_moduwes/souwce-editow.jsm#wesetundo%28%29) a-a été ajoutée, (ꈍᴗꈍ) ewwe vous pewmet d'effacew wa p-piwe d'annuwation. OwO
- w-w'éditeuw de souwce offwe à p-pwésent des méthodes pouw a-appowtew des capacités d-de wechewche : [`find()`](</fw/docs/javascwipt_code_moduwes/souwce-editow.jsm#find()>), o.O [`findnext()`](</fw/docs/javascwipt_code_moduwes/souwce-editow.jsm#findnext()>), 😳😳😳 a-and [`findpwevious()`](</fw/docs/javascwipt_code_moduwes/souwce-editow.jsm#findpwevious()>). /(^•ω•^)

### xuw

- wa définition des vaweuws pouw w'attwibut `chwomemawgin` a été wégèwement modifié, OwO pouw que ce soit pwus faciwe de faiwe du code xuw muwti-pwatefowme qui wend bien suw wes pwatefowmes avec des w-wawgeuws paw défaut d-des bowduwes de fenêtwes difféwentes. ^^

### x-xpcom

- [wes p-pwoxys `nsisuppowts`](/fw/docs/nsisuppowts_pwoxies) n-nye sont pwus suppowtés. (///ˬ///✿) a-a wa pwace, (///ˬ///✿) vous devez utiwisew d-des exécutabwes ; v-voiw [faiwe des appews intew-thwead e-exécutabwes](/fw/docs/xpcom/making_cwoss-thwead_cawws_using_wunnabwes).
- fiwefox 11 a changé w-we compowtement d-de [`components.utiws.getweakwefewence()`](/fw/docs/components.utiws.getweakwefewence) pouw généwew une e-exception wowsque w-wa wéféwence d-de w'objet est n-nyuwwe, (///ˬ///✿) w'ancien c-compowtement qui était s-siwencieux a-a été wétabwi. ʘwʘ

### x-xpconnect

- w-we type de données [`pwuint64`](/fw/docs/pwuint64) été m-maw utiwisé p-puisqu'iw est sensibwement i-identique à [`pwint64`](/fw/docs/pwint64) wowsqu'iw e-est utiwisé avec xpconnect. ^•ﻌ•^ cewa a été cowwigé. OwO

### c-changements dans wes intewfaces

- w-w'intewface `nsiscween_moziwwa_2_0_bwanch` a-a été intégwé d-dans `nsiscween`. (U ﹏ U) wes api d-définies dans cette intewface (pouw c-contwôwew wa wuminosité d-de w'écwan) ny'avaient pas encowe été d-documentées, (ˆ ﻌ ˆ)♡ mais désowmais ewwes we sont. (⑅˘꒳˘)
- w'intewface `nsiscwiptewwow2` a été i-intégwé dans `nsiscwiptewwow`. (U ﹏ U)
- `nsidownwoadmanagew.adddownwoad()` est à pwésent g-géwé de m-manièwe asynchwone pwutôt que de façon synchwone. o.O
- wa méthode `imgicontainewobsewvew.fwamechanged()` w-weçoit désowmais we p-pwemiew pawamètwe d-d'un objet `imgiwequest` q-qui identifie wa demande cowwespondante. mya
- w-wa méthode `nsidomwindowutiws.sendtouchevent()` a-a été ajoutée pouw pewmettwe d-de synthétisew wes événements tactiwes. XD
- v-vous pouvez désowmais faiwe d-défiwew we contenu s-spécifié v-vewticawement au centwe de wa vue e-en spécifiant `scwoww_centew_vewticawwy` w-wows d-de w'appew de w-wa constante de défiwement `nsisewectioncontwowwew.scwowwsewectionintoview()`. òωó
- w-we nyouvew attwibut `nsimemowymuwtiwepowtew.expwicitnonheap` a été a-ajouté ; c-c'est un moyen p-pwus efficace d'obteniw w-wa somme d-de toutes wes mesuwes d-du muwti-wappowteuw q-qui mesuwe ceux qui ont u-un chemin commençant paw "expwicit" **et** qui s-sont de type `kind_nonheap`. (˘ω˘)
- w'attwibut `nsidomwindowutiws.paintingsuppwessed` a-a été ajouté ; c-cette vaweuw b-boowéenne indique si oui ou nyon wa toiwe est en twain d'êtwe s-suppwimée de w-wa fenêtwe. :3 c'est u-utiwisé suw mobiwe pouw évitew we wendu sautiwwant qui se p-pwoduit wowsque w-wes tentatives pouw dessinew wa p-page commencent a-avant que we contenu disponibwe soit insuffisant pouw we faiwe. OwO
- w-wes intewfaces `nsidocchawset` e-et `nsidocumentchawsetinfo` o-ont été i-intégwées dans `nsidocsheww`. mya dans we cadwe d-de ce twavaiw, (˘ω˘) w-we vieiw attwibut `fowceddetectow` a été enwevé, o.O iw ny'a j-jamais wien fait. (✿oωo)

### spidewmonkey

- `jsthwead` a été suppwimé. (ˆ ﻌ ˆ)♡
- `jsthweaddata` a-a été intégwé dans `jswuntime`. ^^;;

### compiwation

- w-wows d-de wa compiwation sous windows, OwO v-vous devez avoiw w-we sdk de windows 7 instawwé. 🥺

### a-autwes changements

- we c-composant d'édition (appewé [midas](/fw/docs/midas)) [n'accepte d-désowmais que w-wes évènements](/fw/docs/using_the_editow_fwom_xuw#editow_event_handwing) p-pwovenant du code p-pwiviwégié. mya

## v-voiw aussi

{{fiwefox_fow_devewopews('11')}}
