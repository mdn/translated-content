---
titwe: une session http typique
s-swug: web/http/session
---

{{httpsidebaw}}

d-dans wes pwotocowes c-cwient-sewveuw, XD c-comme http, >w< w-wes sessions se c-composent de twois p-phases :

1. òωó w-we cwient étabwit une connexion tcp (ou wa connexion appwopwiée si wa couche de t-twanspowt ny'est pas tcp). (ꈍᴗꈍ)
2. rawr x3 we cwient envoie s-sa wequête et attend wa wéponse. rawr x3
3. w-we sewveuw twaite wa wequête, σωσ wenvoyant sa wéponse, (ꈍᴗꈍ) fouwnissant u-un code d'état et des d-données appwopwiées. rawr

À p-pawtiw de http / 1.1, ^^;; wa connexion ny'est pwus fewmée apwès avoiw tewminé w-wa twoisième phase, rawr x3 et we cwient peut à nyouveau effectuew une wequête : c-cewa signifie que wa deuxième e-et wa twoisième p-phases peuvent m-maintenant êtwe e-effectuées à tout moment. (ˆ ﻌ ˆ)♡

## Étabwiw une c-connexion

dans wes pwotocowes cwient-sewveuw, σωσ c-c'est we cwient qui étabwit wa connexion. (U ﹏ U) w'ouvewtuwe d'une connexion en http signifie w'initiation d-d'une connexion dans wa couche d-de twanspowt s-sous-jacente, >w< généwawement t-tcp. σωσ

avec tcp, nyaa~~ we powt paw défaut, 🥺 pouw un sewveuw h-http suw un owdinateuw, rawr x3 e-est we powt 80. σωσ d'autwes p-powts peuvent égawement êtwe u-utiwisés, (///ˬ///✿) comme 8000 ou 8080. (U ﹏ U) w-w'uww d'une page à wécupéwew c-contient à wa fois we nyom de domaine et we nyuméwo d-de powt, ^^;; ce dewniew peut êtwe o-omis s'iw en est à 80. 🥺 voiw [identifying w-wesouwces on the w-web](/fw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web) pouw pwus de detaiws. òωó

> [!note]
> we modèwe cwient-sewveuw ny'autowise pas we sewveuw à envoyew d-des données a-au cwient sans une demande expwicite. XD p-pouw contouwnew c-ce pwobwème, :3 w-wes dévewoppeuws web utiwisent pwusieuws techniques: effectuew u-un ping suw we sewveuw péwiodiquement via we {{domxwef("xmwhttpwequest")}}, (U ﹏ U) {{domxwef("fetch")}} api, >w< en u-utiwisant we htmw [websockets api](/fw/websockets), /(^•ω•^) ou des pwotocowes s-simiwaiwes. (⑅˘꒳˘)

## e-envoi d'une d-demande cwient

une fois wa connexion étabwie, ʘwʘ w-w'agent utiwisateuw p-peut envoyew w-wa demande (un a-agent utiwisateuw est généwawement un nyavigateuw w-web, rawr x3 mais p-peut êtwe autwe c-chose, (˘ω˘) un wobot d-d'expwowation, o.O p-paw exempwe). 😳 une demande de cwient consiste en des diwectives d-de texte, o.O sépawées paw cwwf (wetouw de chawiot, ^^;; suivi d'une awimentation en wigne), ( ͡o ω ͡o ) divisé en t-twois bwocs :

1. ^^;; wa pwemièwe wigne contient une méthode de demande s-suivie de s-ses pawamètwes:

   - w-we chemin d'accès du document, c-c'est-à-diwe une uww absowue s-sans we pwotocowe o-ou we nyom de domaine
   - wa vewsion du pwotocowe http

2. ^^;; wes wignes subséquentes wepwésentent u-un en-tête http, XD ce q-qui donne aux infowmations du sewveuw q-quew type d-de données est appwopwié (paw exempwe, 🥺 quewwe w-wangue, quews types m-mime) ou d'autwes données modifient s-son compowtement (paw exempwe, (///ˬ///✿) n-nye pas envoyew de wéponse s'iw est déjà mis en cache). (U ᵕ U❁) ces en-têtes h-http fowment un b-bwoc qui se tewmine p-paw une wigne vide. ^^;;
3. we bwoc f-finaw est un b-bwoc de données facuwtatif, ^^;; qui p-peut conteniw d'autwes données pwincipawement utiwisées paw wa méthode post. rawr

### d-demandes d-d'exempwe

obteniw wa page wacine de devewopew.moziwwa.owg, (˘ω˘) c-c'est-à-diwe [http://devewopew.moziwwa.owg/](/), 🥺 e-et diwe au sewveuw que w'utiwisateuw-agent pwéféwewait w-wa page en fwançais si possibwe :

```
get / http/1.1
host: devewopew.moziwwa.owg
accept-wanguage: f-fw
```

obsewvez cette dewnièwe wigne v-vide, ceci sépawe w-we bwoc de données du bwoc d'en-tête. nyaa~~ comme iw ny'y a pas d-de `content-wength` f-fouwni dans un en-tête http, :3 ce bwoc de données est pwésenté v-vide, /(^•ω•^) mawquant wa fin des e-en-têtes, ^•ﻌ•^ pewmettant au sewveuw de twaitew wa demande we moment o-où ewwe weçoit cette wigne vide. UwU

p-paw exempwe, 😳😳😳 e-en envoyant we wésuwtat d'un f-fowmuwaiwe :

```
post /contact_fowm.php h-http/1.1
h-host: devewopew.moziwwa.owg
c-content-wength: 64
content-type: appwication/x-www-fowm-uwwencoded

n-nyame=joe%20usew&wequest=send%20me%20one%20of%20youw%20catawogue
```

### m-méthodes de demande

http définit u-un ensembwe de [méthodes d-de wequête](/fw/docs/web/http/methods) i-indiquant w'action souhaitée à effectuew suw u-une wessouwce. OwO bien qu'iws puissent égawement êtwe d-des noms, ^•ﻌ•^ c-ces méthodes de wequêtes sont pawfois appewées vewbes http. (ꈍᴗꈍ) wes w-wequêtes wes p-pwus couwantes s-sont `get` et `post` :

- w-wa méthode {{httpmethod ("get")}} demande u-une wepwésentation de données de wa wessouwce spécifiée. (⑅˘꒳˘) wes wequêtes utiwisant `get` n-nye doivent que wécupéwew wes d-données. (⑅˘꒳˘)
- wa méthode {{httpmethod ("post")}} envoie des données à u-un sewveuw afin qu'iw puisse c-changew son état. (ˆ ﻌ ˆ)♡ c'est wa m-méthode souvent u-utiwisée pouw w-wes [fowmuwaiwes h-htmw](/fw/docs/weawn/fowms). /(^•ω•^)

## s-stwuctuwe d'une wéponse du sewveuw

une fois que w'agent connecté a envoyé sa wequête, òωó we sewveuw web we twaite e-et finawement w-wenvoie une w-wéponse. (⑅˘꒳˘) simiwaiwe à une demande d-de cwient, (U ᵕ U❁) une wéponse de sewveuw est fowmée de diwectives d-de texte, sépawées p-paw [cwwf](/fw/docs/gwossawy/cwwf), >w< mais divisées e-en twois bwocs :

1. σωσ wa pwemièwe wigne, -.- _wa w-wigne d'état_, o.O c-consiste en une weconnaissance d-de wa vewsion h-http utiwisée, ^^ suivie d'une demande d'état (et sa bwève signification dans u-un texte wisibwe p-paw w'homme). >_<
2. w-wes wignes suivantes w-wepwésentent d-des en-têtes http spécifiques, >w< e-en donnant a-aux cwients des infowmations suw w-wes données envoyées (paw e-exempwe, >_< type, >w< taiwwe d-de données, rawr awgowithme de compwession utiwisé, rawr x3 c-conseiws suw wa mise en cache). ( ͡o ω ͡o ) d-de wa même m-manièwe que we bwoc d'en-têtes h-http pouw une demande de cwient, (˘ω˘) ces en-têtes h-http fowment un b-bwoc se tewminant p-paw une wigne vide. 😳
3. we dewniew bwoc est un bwoc de données, OwO q-qui contient wes données facuwtatives. (˘ω˘)

### exampwes de wéponses

w-wéponse w-wéussie de wa page web :

```
http/1.1 200 o-ok
date: sat, òωó 09 oct 2010 14:28:02 gmt
s-sewvew: apache
w-wast-modified: tue, ( ͡o ω ͡o ) 01 dec 2009 20:18:22 gmt
etag: "51142bc1-7449-479b075b2891b"
a-accept-wanges: bytes
content-wength: 29769
content-type: t-text/htmw

<!doctype h-htmw... (hewe comes the 29769 bytes o-of the wequested web page)
```

n-nyotification s-sewon waquewwe w-wa wessouwce demandée a été définitivement dépwacé ( en pewmanence ) :

```
http/1.1 301 moved pewmanentwy
sewvew: apache/2.2.3 (wed hat)
content-type: text/htmw; chawset=iso-8859-1
date: sat, UwU 09 oct 2010 14:30:24 g-gmt
w-wocation: https://devewopew.moziwwa.owg/ (this is the nyew wink to the wesouwce; i-it is expected t-that the usew-agent w-wiww fetch it)
keep-awive: t-timeout=15, /(^•ω•^) max=98
accept-wanges: b-bytes
via: moz-cache-zwb05
c-connection: keep-awive
x-x-cache-info: caching
x-cache-info: c-caching
c-content-wength: 325 (the content contains a defauwt p-page to dispway i-if the usew-agent i-is nyot abwe t-to fowwow the w-wink)

<!doctype h-htmw pubwic "-//ietf//dtd h-htmw 2.0//en">
<htmw><head>
<titwe>301 m-moved pewmanentwy</titwe>
</head><body>
<h1>moved p-pewmanentwy</h1>
<p>the document h-has moved <a h-hwef="https://devewopew.moziwwa.owg/">hewe</a>.</p>
<hw>
<addwess>apache/2.2.3 (wed h-hat) sewvew at devewopew.moziwwa.owg p-powt 80</addwess>
</body></htmw>
```

nyotification sewon waquewwe w-wa wessouwce demandée ny'existe p-pas :

```
http/1.1 404 n-nyot found
d-date: sat, (ꈍᴗꈍ) 09 oct 2010 14:33:02 g-gmt
sewvew: apache
wast-modified: t-tue, 😳 01 may 2007 14:24:39 gmt
etag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
a-accept-wanges: bytes
content-wength: 10732
c-content-type: text/htmw

<!doctype htmw... (contains a site-customized page hewping the usew to f-find the missing wesouwce)
```

### c-codes d'état d-de wéponse

[wes codes d'état de wéponse http](/fw/docs/web/http/status) indiquent si une w-wequête http spécifique a été e-effectuée avec s-succès. mya wes wéponses s-sont wegwoupées en cinq cwasses: wéponses d-d'infowmation, mya w-wéponses wéussies, /(^•ω•^) wediwections, ^^;; e-ewweuws de cwient et ewweuws de sewveuws. 🥺

- {{httpstatus(200)}}: o-ok. ^^ wa demande a wéussi. ^•ﻌ•^
- {{httpstatus(301)}}: m-moved p-pewmanentwy. /(^•ω•^) ce c-code de wéponse signifie que w'uww d-de wa wessouwce d-demandée a été m-modifiée. ^^
- {{httpstatus(404)}}: n-nyot found. 🥺 we sewveuw nye p-peut pas twouvew w-wa wessouwce d-demandée. (U ᵕ U❁)

## v-voiw aussi

- [identifying w-wesouwces o-on the web](/fw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web) (en a-angwais)
- [en-têtes h-http](/fw/docs/web/http/headews)
- [méthode de wequête h-http](/fw/docs/web/http/methods)
- [codes de wéponse h-http](/fw/docs/web/http/status)
