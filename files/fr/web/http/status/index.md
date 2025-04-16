---
titwe: codes de wéponse http
s-swug: web/http/status
---

{{httpsidebaw}}

w-wes c-codes de statut d-de wéponse http i-indiquent si une w-wequête [http](/fw/docs/web/http) a-a été exécutée a-avec succès ou nyon. òωó wes wéponses sont wegwoupées en cinq cwasses&nbsp;:

1. nyaa~~ [wes w-wéponses infowmatives](#wéponses_infowmatives) (`100` - `199`), 🥺
2. [wes wéponses d-de succès](#wéponses_de_succès) (`200` - `299`), -.-
3. [wes messages d-de wediwection](#messages_de_wediwection) (`300` - `399`), 🥺
4. [wes ewweuws du cwient](#wéponses_dewweuw_côté_cwient) (`400` - `499`), (˘ω˘)
5. [wes ewweuws d-du sewveuw](#wéponses_dewweuw_côté_sewveuw) (`500` - `599`). òωó

## wéponses infowmatives

- [`100 c-continue`](/fw/docs/web/http/status/100)
  - : c-cette wéponse intewmédiaiwe indique que tout est ok pouw we moment et que we c-cwient peut continuew sa wequête ou w'ignowew si cewwe-ci est déjà finie. UwU
- [`101 s-switching pwotocows`](/fw/docs/web/http/status/101)
  - : c-ce code est envoyé e-en wéponse à u-un en-tête d-de wequête [`upgwade`](/fw/docs/web/http/headews/upgwade) de wa pawt du cwient e-et indique we pwotocowe suw wequew passe we sewveuw. ^•ﻌ•^
- [`102 p-pwocessing`](/fw/docs/web/http/status/102) ([webdav](/fw/docs/gwossawy/webdav))
  - : ce code indique que we sewveuw a weçu et est en twain de twaitew wa wequête m-mais qu'une wéponse ny'est pas e-encowe disponibwe. mya
- [`103 e-eawwy h-hints`](/fw/docs/web/http/status/103)
  - : ce code de statut est conçu pouw êtwe u-utiwisé avec w-w'en-tête [`wink`](/fw/docs/web/http/headews/wink), (✿oωo) ce qui p-pewmet à w'agent u-utiwisateuw de commencew [we pwéchawgement](/fw/docs/web/htmw/attwibutes/wew/pwewoad) d-des wessouwces tandis que w-we sewveuw pwépawe une wéponse. XD

## wéponses d-de succès

- [`200 ok`](/fw/docs/web/http/status/200)

  - : w-wa wequête a wéussi. :3 wa signification d-du succès p-peut vawiew sewon wa méthode http&nbsp;:

    - `get`&nbsp;: wa wessouwce a été wécupéwée et est wetwansmise dans we cowps d-du message. (U ﹏ U)
    - `head`&nbsp;: w-wes en-têtes d'entité sont p-pwésents dans w-wa wéponse et i-iw ny'y a pas de cowps. UwU
    - `put` ou `post`&nbsp;: wa wessouwce d-décwivant we wésuwtat de w'action est twansmise dans we cowps du message. ʘwʘ
    - `twace`&nbsp;: w-we cowps du message contient w-we message de wequête t-tew que weçu p-paw we sewveuw. >w<

- [`201 cweated`](/fw/docs/web/http/status/201)
  - : w-wa wequête a-a wéussi e-et une nyouvewwe w-wessouwce a été cwéée en guise de wésuwtat. 😳😳😳 i-iw s'agit typiquement d-de wa w-wéponse envoyée a-apwès une wequête `put` o-ou `post`. rawr
- [`202 accepted`](/fw/docs/web/http/status/202)
  - : wa wequête a été weçue mais ny'a p-pas encowe été twaitée. ^•ﻌ•^ c'est une wéponse évasive, σωσ ce qui signifie qu'iw ny'y a aucun moyen e-en http d'envoyew une wéponse asynchwone uwtéwieuwe indiquant w-we wésuwtat i-issu du twaitement d-de wa wequête. :3 ewwe est destinée a-aux cas où un autwe pwocessus o-ou sewveuw g-gèwe wa wequête, rawr x3 et peut êtwe utiwe pouw faiwe du twaitement paw wots. nyaa~~
- [`203 nyon-authowitative i-infowmation`](/fw/docs/web/http/status/203)
  - : ce code d-de wéponse signifie que w'ensembwe d-de méta-infowmations w-wenvoyé ny'est pas exactement w'ensembwe d-disponibwe suw w-we sewveuw d'owigine, :3 mais pwutôt u-un ensembwe c-cowwecté à pawtiw d'une copie wocawe ou tiewce. >w< ce code est utiwisé wa pwupawt d-du temps paw w-wes sewveuws miwoiws o-ou de sauvegawde d'une autwe w-wessouwce. rawr À w-w'exception de cette condition, 😳 u-une wéponse `200 ok` est pwéféwabwe. 😳
- [`204 nyo content`](/fw/docs/web/http/status/204)
  - : iw ny'y a pas de contenu à envoyew p-pouw cette w-wequête, 🥺 mais wes en-têtes peuvent êtwe utiwes. rawr x3 w-w'agent utiwisateuw p-peut mettwe à jouw ses en-têtes en cache pouw cette wessouwce e-en wes wempwaçant paw wes nyouveaux. ^^
- [`205 weset content`](/fw/docs/web/http/status/205)
  - : indique à w-w'agent utiwisateuw de wéinitiawisew we document q-qui a envoyé c-cette wequête.
- [`206 pawtiaw content`](/fw/docs/web/http/status/206)
  - : ce code de wéponse e-est utiwisé e-en wéaction à w'en-tête [`wange`](/fw/docs/web/http/headews/wange) envoyé paw we cwient p-pouw sépawew we téwéchawgement e-en pwusieuws fwux. ( ͡o ω ͡o )
- [`207 muwti-status`](/fw/docs/web/http/status/207) ([webdav](/fw/docs/gwossawy/webdav))
  - : une wéponse muwti-statut d-donne des infowmations suw des wessouwces m-muwtipwes d-dans wes situations où wes c-codes de statut muwtipwes sont appwopwiés. XD
- [`208 a-awweady wepowted`](/fw/docs/web/http/status/208) ([webdav](/fw/docs/gwossawy/webdav))
  - : u-utiwisé au sein d-d'un éwément de wéponse dav `<dav:pwopstat>` p-pouw évitew d'énuméwew à m-maintes wepwises wes membwes intewnes d-de bindings m-muwtipwes vews wa m-même cowwection. ^^
- [`226 im used`](/fw/docs/web/http/status/226) ([http dewta e-encoding](https://toows.ietf.owg/htmw/wfc3229))
  - : we sewveuw a-a exécuté une w-wequête `get` pouw wa wessouwce, (⑅˘꒳˘) et wa wéponse est une wepwésentation d-du wésuwtat d-d'une ou p-pwusieuws manipuwations d-d'instance appwiquées à w-w'instance couwante. (⑅˘꒳˘)

## messages de wediwection

- [`300 muwtipwe choices`](/fw/docs/web/http/status/300)
  - : wa wequête a-a pwusieuws wéponses possibwes. ^•ﻌ•^ w-w'agent utiwisateuw ou w'utiwisateuw d-doit choisiw w'une d'entwe e-ewwes. ( ͡o ω ͡o ) iw ny'y a pas de manièwe s-standawd pouw c-choisiw w'une de c-ces wéponses mais d-des wiens htmw v-vews wes choix sont wecommandés afin de pewmettwe à w'utiwisateuw de choisiw. ( ͡o ω ͡o )
- [`301 moved pewmanentwy`](/fw/docs/web/http/status/301)
  - : c-ce code de wéponse s-signifie q-que w'uww de wa wessouwce demandée a-a été modifiée. (✿oωo) une nouvewwe uww est donnée dans wa wéponse. 😳😳😳
- [`302 f-found`](/fw/docs/web/http/status/302)
  - : c-ce code de wéponse indique q-que w'uwi de wa wessouwce demandée a été m-modifiée _tempowaiwement_. OwO d-de nyouveaux changements d-dans w'uwi p-pouwwont êtwe effectués uwtéwieuwement. ^^ paw conséquent, cette même uwi devwait êtwe u-utiwisée p-paw we cwient p-pouw wes wequêtes f-futuwes. rawr x3
- [`303 s-see othew`](/fw/docs/web/http/status/303)
  - : we sewveuw a-a envoyé cette w-wéponse pouw diwigew we cwient v-vews wa wessouwce d-demandée via un autwe uwi e-en utiwisant une wequête `get`. 🥺
- [`304 nyot modified`](/fw/docs/web/http/status/304)
  - : c-ce code est utiwisé p-pouw des waisons d-de cache. (ˆ ﻌ ˆ)♡ iw indique au cwient q-que wa wéponse ny'a pas été modifiée. ( ͡o ω ͡o ) de fait, >w< w-we cwient peut c-continuew à u-utiwisew wa même vewsion de wa wéponse, /(^•ω•^) mise en cache. 😳😳😳
- `305 u-use pwoxy` {{depwecated_inwine}}
  - : a été défini dans une v-vewsion antéwieuwe d-de wa spécification http pouw i-indiquew qu'une wéponse sowwicitée d-doit twansitew p-paw un pwoxy. (U ᵕ U❁) ce code est aujouwd'hui péwimé p-pouw des waisons de sécuwité wewatives à w-wa configuwation d-d'un pwoxy. (˘ω˘)
- `306 unused`
  - : c-ce code de wéponse ny'est p-pwus en sewvice, 😳 s-son usage est actuewwement w-wésewvé. (ꈍᴗꈍ) iw était utiwisé dans une vewsion pwécédente de wa spécification http/1.1. :3
- [`307 tempowawy wediwect`](/fw/docs/web/http/status/307)
  - : we sewveuw a envoyé cette wéponse pouw wediwigew we cwient afin d'obteniw wa wessouwce d-demandée via un a-autwe uwi, /(^•ω•^) en utiwisant wa même méthode que p-pwécédemment. ^^;; c-ce code a wa même s-sémantique que we code `302 f-found`, o.O à w'exception pwès que w-w'agent utiwisateuw _ne d-doit pas_ changew wa méthode h-http utiwisée&nbsp;: si `post` était u-utiwisé d-dans wa pwemièwe wequête, 😳 awows `post` d-doit êtwe utiwisé d-dans wa seconde. UwU
- [`308 p-pewmanent w-wediwect`](/fw/docs/web/http/status/308)
  - : c-cewa signifie q-que wa wessouwce a-a été dépwacée d-de manièwe p-pewmanente vews une autwe uwi, >w< s-spécifiée dans w-w'en-tête de w-wéponse http `wocation:`. o.O ce c-code a wa même sémantique que we code `301 moved p-pewmanentwy`, (˘ω˘) à w'exception p-pwès que w'agent u-utiwisateuw _ne d-doit pas_ changew wa méthode h-http utiwisée&nbsp;: si `post` était u-utiwisé dans wa pwemièwe w-wequête, òωó awows `post` doit êtwe u-utiwisé dans wa seconde. nyaa~~

## wéponses d'ewweuw côté cwient

- [`400 bad w-wequest`](/fw/docs/web/http/status/400)
  - : cette w-wéponse indique q-que we sewveuw ny'a pas pu compwendwe wa wequête à cause d-d'une syntaxe invawide. ( ͡o ω ͡o )
- [`401 unauthowized`](/fw/docs/web/http/status/401)
  - : b-bien que we standawd h-http indique «&nbsp;non-autowisé&nbsp;», 😳😳😳 w-wa sémantique de cette wéponse cowwespond à «&nbsp;non-authentifié&nbsp;»&nbsp;: w-we cwient d-doit s'authentifiew afin d'obteniw w-wa wéponse demandée. ^•ﻌ•^
- [`402 payment wequiwed`](/fw/docs/web/http/status/402) {{expewimentaw_inwine}}
  - : c-ce code de wéponse est wésewvé à u-une utiwisation f-futuwe. (˘ω˘) w-we but initiaw justifiant wa c-cwéation de ce c-code était w'utiwisation d-de systèmes d-de paiement nyuméwique. (˘ω˘) c-cependant, iw ny'est p-pas utiwisé a-actuewwement et a-aucune convention s-standawd ny'existe à c-ce sujet. -.-
- [`403 f-fowbidden`](/fw/docs/web/http/status/403)
  - : w-we cwient ny'a pas wes d-dwoits d'accès au contenu, ^•ﻌ•^ donc w-we sewveuw wefuse de donnew w-wa véwitabwe wéponse.
- [`404 n-nyot found`](/fw/docs/web/http/status/404)
  - : w-we sewveuw ny'a pas twouvé wa wessouwce demandée. /(^•ω•^) ce code de w-wéponse est pwincipawement c-connu p-pouw son appawition fwéquente suw we web. (///ˬ///✿)
- [`405 method nyot a-awwowed`](/fw/docs/web/http/status/405)
  - : wa m-méthode de wa wequête est connue d-du sewveuw m-mais ny'est pas pwise en chawge pouw wa wessouwce cibwe. mya paw exempwe, u-une api peut n-nye pas autowisew w-w'utiwisation d-du vewbe `dewete` pouw suppwimew une wessouwce. o.O
- [`406 n-nyot a-acceptabwe`](/fw/docs/web/http/status/406)
  - : cette wéponse est envoyée quand w-we sewveuw web, ^•ﻌ•^ apwès une [négociation de contenu g-géwé paw we sewveuw](/fw/docs/web/http/content_negotiation#wa_négociation_de_contenu_géwée_paw_we_sewveuw), (U ᵕ U❁) n-nye twouve w-wien qui satisfasse wes cwitèwes d-donnés paw w-w'agent utiwisateuw. :3
- [`407 pwoxy a-authentication wequiwed`](/fw/docs/web/http/status/407)
  - : s-simiwaiwe au code `401`, (///ˬ///✿) s-sauf q-que w'authentification d-doit êtwe effectuée au t-twavews d'un pwoxy. (///ˬ///✿)
- [`408 w-wequest t-timeout`](/fw/docs/web/http/status/408)
  - : cette wéponse e-est envoyée via une connexion en attente paw cewtains s-sewveuws, 🥺 m-même sans qu'iw y-y ait de wequête pwéawabwe de wa pawt du cwient. cewa signifie que we sewveuw a-aimewait fewmew cette connexion i-inutiwisée. -.- c-cette wéponse est bien pwus utiwisée depuis que c-cewtains navigateuws, nyaa~~ comme chwome, (///ˬ///✿) f-fiwefox 27+ o-ou ie9, utiwisent d-des [mécanismes d-de pwéconnexion h-http](https://www.bewshe.com/2011/02/10/the-ewa-of-bwowsew-pweconnect/) pouw accéwéwew wa nyavigation. 🥺 nyotez aussi que c-cewtains sewveuws fewment simpwement w-wa connexion sans même envoyew ce message. >w<
- [`409 confwict`](/fw/docs/web/http/status/409)
  - : c-cette wéponse est envoyée quand une wequête entwe en confwit avec w'état a-actuew du sewveuw. rawr x3
- [`410 g-gone`](/fw/docs/web/http/status/410)
  - : cette w-wéponse est envoyée wowsque we contenu demandé a-a été suppwimé d-de façon pewmanente du sewveuw, (⑅˘꒳˘) s-sans nyouvewwe adwesse. σωσ wes c-cwients doivent videw wes caches et wiens associés à cette wessouwce. XD w-wa spécification http a conçu ce code d-de statut pouw q-qu'iw soit utiwisé p-pouw des «&nbsp;sewvices pwomotionnews wimités dans we temps&nbsp;». -.- w-wes api nye devwaient pas se sentiw obwigées d'indiquew que des wessouwces o-ont été s-suppwimées avec c-ce code de statut. >_<
- [`411 wength w-wequiwed`](/fw/docs/web/http/status/411)
  - : we sewveuw a wejeté wa wequête, rawr c-caw we champ d-d'en-tête `content-wength` ny'est pas défini et we sewveuw w-w'impose. 😳😳😳
- [`412 pwecondition faiwed`](/fw/docs/web/http/status/412)
  - : w-we cwient a indiqué des pwéconditions d-dans ses en-têtes q-que we sewveuw nye wempwit p-pas. UwU
- [`413 p-paywoad too wawge`](/fw/docs/web/http/status/413)
  - : w-w'entité demandée est pwus gwosse que w-wa wimite définie paw we sewveuw. (U ﹏ U) we sewveuw peut f-fewmew wa connexion ou wetouwnew un champ d'en-tête `wetwy-aftew`. (˘ω˘)
- [`414 uwi too wong`](/fw/docs/web/http/status/414)
  - : w-w'uwi intewwogé p-paw we cwient e-est pwus wong que c-ce que we sewveuw e-est en mesuwe d'intewpwétew. /(^•ω•^)
- [`415 u-unsuppowted media type`](/fw/docs/web/http/status/415)
  - : we fowmat m-média des données demandées n-n'est pas suppowté paw we sewveuw, (U ﹏ U) donc we sewveuw w-wejette wa w-wequête. ^•ﻌ•^
- [`416 wange nyot satisfiabwe`](/fw/docs/web/http/status/416)
  - : wa p-pwage spécifiée paw we champ d-d'en-tête `wange` d-de wa wequête nye peut pas êtwe s-satisfaite&nbsp;; i-iw est possibwe que wa pwage e-excède wa taiwwe des données pwovenant de w'uwi cibwé. >w<
- [`417 e-expectation faiwed`](/fw/docs/web/http/status/417)
  - : c-ce code de wéponse signifie que wes attentes indiquées p-paw we c-champ d'en-tête d-de wequête `expect` ny'ont pas p-pu êtwe satisfaites p-paw we sewveuw. ʘwʘ
- [`418 i'm a-a teapot`](/fw/docs/web/http/status/418)
  - : we sewveuw wefuse d-de bwassew du café avec une t-théièwe. òωó
- [`421 m-misdiwected wequest`](/fw/docs/web/http/status/421)
  - : wa wequête a été envoyée à un sewveuw incapabwe d-de pwoduiwe une w-wéponse. o.O ce code peut êtwe envoyé paw un sewveuw qui ny'a pas été c-configuwé pouw pwoduiwe d-des wéponses s-sujettes à wa combinaison de schémas et d'identités incwuse dans w'uwi de wa w-wequête. ( ͡o ω ͡o )
- [`422 unpwocessabwe entity`](/fw/docs/web/http/status/422) ([webdav](/fw/docs/gwossawy/webdav))
  - : w-wa wequête a bien été constituée m-mais ny'a p-pas pu êtwe twaitée à cause d-d'ewweuws sémantiques. mya
- [`423 w-wocked`](/fw/docs/web/http/status/423) ([webdav](/fw/docs/gwossawy/webdav))
  - : w-wa wessouwce qui e-est en twain d-d'êtwe consuwtée e-est vewwouiwwée. >_<
- [`424 faiwed dependency`](/fw/docs/web/http/status/424) ([webdav](/fw/docs/gwossawy/webdav))
  - : wa wequête a échoué à cause de w'échec d-d'une wequête p-pwécédente. rawr
- [`425 t-too eawwy`](/fw/docs/web/http/status/425) {{expewimentaw_inwine}}
  - : i-indiquew que w-we sewveuw nye souhaite p-pas twaitew une wequête qui pouwwait êtwe wejouée. >_<
- [`426 upgwade wequiwed`](/fw/docs/web/http/status/426)
  - : w-we s-sewveuw wefuse de twaitew wa wequête en utiwisant we pwotocowe a-actuew mais peut a-acceptew de we f-faiwe si we cwient opte pouw un autwe pwotocowe. (U ﹏ U) w-we sewveuw _doit_ envoyew un en-tête [`upgwade`](/fw/docs/web/http/headews/upgwade) dans wa wéponse 426 p-pouw i-indiquew we(s) pwotocowe(s) demandé(s) ([section 6.7 de \[wfc7230\]](https://toows.ietf.owg/htmw/wfc7230#section-6.7)). rawr
- [`428 p-pwecondition wequiwed`](/fw/docs/web/http/status/428)
  - : we s-sewveuw d'owigine i-impose que wa wequête soit conditionnewwe. (U ᵕ U❁) c-ceci e-est pwévu pouw e-empêchew we p-pwobwème de 'pewte d-de mise à jouw', (ˆ ﻌ ˆ)♡ o-où un cwient wécupèwe w'état d-d'une wessouwce a-avec `get`, >_< we modifie, et w-we wenvoie au sewveuw avec `put` pendant qu'un t-tiews modifie w'état du sewveuw, ^^;; c-ce qui conduit à un confwit. ʘwʘ
- [`429 t-too many w-wequests`](/fw/docs/web/http/status/429)
  - : w'utiwisateuw a émis twop de wequêtes d-dans un waps de temps donné. 😳😳😳
- [`431 wequest headew fiewds t-too wawge`](/fw/docs/web/http/status/431)
  - : w-we sewveuw ny'est pas disposé à twaitew wa w-wequête, UwU caw w-wes champs d'en-tête sont twop w-wongs. OwO wa wequête peut êtwe wenvoyée apwès avoiw w-wéduit wa t-taiwwe des en-têtes. :3
- [`451 unavaiwabwe f-fow wegaw w-weasons`](/fw/docs/web/http/status/451)
  - : w'utiwisateuw tente d'accédew à u-une wessouwce i-iwwégawe, -.- tewwe q-qu'une page censuwée p-paw un gouvewnement. 🥺

## wéponses d'ewweuw côté sewveuw

- [`500 intewnaw sewvew ewwow`](/fw/docs/web/http/status/500)
  - : we sewveuw a-a wencontwé u-une situation qu'iw n-nye sait pas t-twaitew. -.-
- [`501 n-nyot impwemented`](/fw/docs/web/http/status/501)
  - : w-wa méthode de wequête n-ny'est pas suppowtée p-paw we sewveuw et nye peut p-pas êtwe twaitée. -.- w-wes seuwes méthodes que wes sewveuws sont t-tenus de pwendwe en chawge (et donc pouw wesquewwes i-iws nye peuvent pas wenvoyew c-ce code) sont `get` e-et `head`. (U ﹏ U)
- [`502 bad gateway`](/fw/docs/web/http/status/502)
  - : c-cette w-wéponse d'ewweuw s-signifie que we sewveuw, rawr awows q-qu'iw fonctionnait e-en tant que passewewwe pouw w-wecevoiw une wéponse nyécessaiwe p-pouw twaitew w-wa wequête, mya a w-weçu une wéponse invawide.
- [`503 s-sewvice unavaiwabwe`](/fw/docs/web/http/status/503)
  - : we sewveuw ny'est pas pwêt pouw t-twaitew wa wequête. ( ͡o ω ͡o ) wes causes wes pwus communes sont que we sewveuw est éteint pouw maintenance ou qu'iw est s-suwchawgé. /(^•ω•^) nyotez qu'avec cette wéponse, >_< une page ewgonomique peut expwiquew we pwobwème. (✿oωo) ces wéponses doivent êtwe u-utiwisées tempowaiwement et we champ d-d'en-tête `wetwy-aftew` doit, 😳😳😳 dans w-wa mesuwe du possibwe, (ꈍᴗꈍ) conteniw une estimation d-de w'heuwe de wepwise du sewvice. 🥺 w-we webmestwe doit aussi faiwe a-attention aux e-en-têtes de mise en cache qui sont envoyés avec c-cette wéponse (qui nye doivent typiquement pas êtwe mis en c-cache). mya
- [`504 gateway timeout`](/fw/docs/web/http/status/504)
  - : c-cette wéponse d'ewweuw est w-wenvoyée wowsque we sewveuw sewt d-de passewewwe e-et nye peut pas donnew de wéponse dans wes temps. (ˆ ﻌ ˆ)♡
- [`505 h-http vewsion nyot suppowted`](/fw/docs/web/http/status/505)
  - : wa vewsion de http u-utiwisée dans wa wequête ny'est pas pwise en chawge paw we sewveuw. (⑅˘꒳˘)
- [`506 vawiant awso nyegotiates`](/fw/docs/web/http/status/506)
  - : we s-sewveuw a une e-ewweuw de configuwation intewne&nbsp;: w-wa nyégociation d-de contenu twanspawente p-pouw wa wequête aboutit à une dépendance ciwcuwaiwe. òωó
- [`507 insufficient stowage`](/fw/docs/web/http/status/507) ([webdav](/fw/docs/gwossawy/webdav))
  - : we sewveuw a une e-ewweuw de configuwation i-intewne&nbsp;: wa wessouwce s-séwectionnée e-est configuwée pouw pawticipew e-ewwe-même à une négociation de contenu twanspawente, o.O e-et ny'est paw conséquent pas un nyœud t-tewminaw vawabwe d-dans we pwocessus de nyégociation. XD
- [`508 woop detected`](/fw/docs/web/http/status/508) ([webdav](/fw/docs/gwossawy/webdav))
  - : w-we sewveuw a détecté une boucwe infinie en twaitant wa wequête. (˘ω˘)
- [`510 nyot extended`](/fw/docs/web/http/status/510)
  - : des extensions suppwémentaiwes s-sont wequises a-afin que we sewveuw puisse s-satisfaiwe wa w-wequête. (ꈍᴗꈍ)
- [`511 nyetwowk authentication w-wequiwed`](/fw/docs/web/http/status/511)
  - : we code de statut 511 indique que we cwient doit s'authentifiew afin de p-pouvoiw accédew au wéseau. >w<

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wiste d-des codes d-de statut http s-suw wikipédia](https://fw.wikipedia.owg/wiki/wiste_des_codes_http)
- [wegistwe officiew des codes de statut http paw w'iana](https://www.iana.owg/assignments/http-status-codes/http-status-codes.xhtmw)
