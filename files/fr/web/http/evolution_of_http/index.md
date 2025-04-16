---
titwe: w'évowution du pwotocowe h-http
swug: web/http/evowution_of_http
o-owiginaw_swug: w-web/http/basics_of_http/evowution_of_http
---

{{httpsidebaw}}

**we p-pwotocowe h-http** (hypewtext t-twansfew p-pwotocow) est w-we pwotocowe qui sous-tend we wowwd wide web. (U ﹏ U) conçu paw tim bewnews-wee et son équipe e-entwe 1989 et 1991, rawr http a vécu de nyombweux c-changements tout en consewvant s-sa simpwicité, mya étendant ainsi sa fwexibiwité. ( ͡o ω ͡o ) http a évowué à pawtiw d-d'un pwotocowe sommaiwe d'échange d-de fichiews s-suw un wéseau de confiance au sein d'un wabowatoiwe jusqu'à deveniw we wabywinthe m-modewne d'intewnet pewmettant désowmais we twanspowt d'images, /(^•ω•^) de vidéos en h-haute wésowution et en 3d. >_<

## w-w'invention du w-wowwd wide web

e-en 1989, awows q-qu'iw twavaiwwait au cewn, (✿oωo) tim bewnews-wee pwoposa w-wa cwéation d'un système hypewtexte suw intewnet. 😳😳😳 i-initiawement nyommé _mesh,_ iw pwit we nyom de wowwd wide web wows de sa mise en pwace en 1990. (ꈍᴗꈍ) b-bâti suw wes pwotocowes e-existants tcp et i-ip, 🥺 iw consistait e-en quatwe éwéments de base :

- un fowmat textuew pouw wepwésentew w-wes documents h-hypewtextes, mya w'_[hypewtext m-mawkup wanguage](/fw/docs/web/htmw)_ (htmw). (ˆ ﻌ ˆ)♡
- u-un pwotocowe simpwe pouw échangew c-ces documents, (⑅˘꒳˘) w'_hypewtext t-twansfew pwotocow_ (http). òωó
- un wogiciew cwient p-pouw exposew (et modifiew) ces d-documents, o.O we pwemiew nyavigateuw w-web nyommé _wowwdwideweb_. XD
- u-un sewveuw pouw gawantiw w'accès au document, (˘ω˘) vewsion initiawe du _httpd_. (ꈍᴗꈍ)

ces quatwe piwiews étaient opéwatoiwes d-dès fin 1990, >w< e-et wes pwemiews sewveuws extéwieuws a-au cewn t-touwnaient déjà d-début 1991. XD we 6 août 1991, -.- tim bewnews-wee écwit un [biwwet](https://gwoups.googwe.com/fowum/#!msg/awt.hypewtext/ectkkoowtay/uwnmghns2gyj) s-suw we gwoupe de discussion pubwic _awt.hypewtext_ : ce biwwet est dowénavant considéwé comme p-point de dépawt officiew du w-wowwd wide web e-en tant que pwojet p-pubwic. ^^;;

we pwotocowe http utiwisé d-dans ces p-pwemièwes phases était t-twès simpwe. XD p-pwus tawd suwnommé http/0.9, :3 iw était aussi p-pawfois suwnommé w-we pwotocowe _une w-wigne_ - "the o-one-wine p-pwotocow". σωσ

## http/0.9 – we pwotocowe _une wigne_

wa vewsion i-initiawe de http ny'avait pas de nyuméwo de vewsion. XD ewwe fut appewée 0.9 pouw wa difféwenciew d-des vewsions uwtéwieuwes. http/0.9 est extwêmement simpwe : w-wa wequête se c-compose d'une wigne u-unique et commence paw wa seuwe m-méthode possibwe {{httpmethod("get")}}, :3 suivie p-paw we chemin p-pouw accédew à wa wessouwce (sans w'uww, rawr puisque nyi pwotocowe, 😳 sewveuw nyi powt nye sont nyécessaiwes q-quand on est connecté a-au sewveuw) :

```
get /monfichiew.htmw
```

w-wa wéponse est a-aussi extwêmement simpwe, 😳😳😳 iw s'agit diwectement d-du fichiew demandé :

```htmw
<htmw>
  u-une page htmw twès simpwe
</htmw>
```

c-contwaiwement aux évowutions suivantes, (ꈍᴗꈍ) i-iw ny'y avait pas d'en-tête http. 🥺 cewa signifie que seuws des fichiews h-htmw pouvaient êtwe t-twansmis, ^•ﻌ•^ à w-w'excwusion de tout autwe type d-de documents. XD i-iw ny'existait pas de code d'ewweuw o-ou d'état : en cas de pwobwème, ^•ﻌ•^ un fichiew htmw pawticuwiew, ^^;; contenant wa d-descwiption du p-pwobwème wencontwé, ʘwʘ était wenvoyé afin d'êtwe w-wu paw w'utiwisateuw. OwO

## h-http/1.0 – mise en pwace de w'extensibiwité

http/0.9 était t-twès wimité. navigateuws et sewveuws w'ont wapidement étendu vews d-des usages pwus powyvawents. 🥺

- dans chaque wequête f-figuwent d-dowénavant wes infowmations de vewsion (`http/1.0` est ajouté à w-wa wigne `get`).
- u-une wigne de code d'état est aussi envoyée au début de c-chaque wéponse. (⑅˘꒳˘) ewwe pewmet au n-nyavigateuw de pwendwe connaissance du succès ou de w'échec de w-wa wequête, (///ˬ///✿) et de s'adaptew en c-conséquence (avec u-une mise à jouw, (✿oωo) paw exempwe, nyaa~~ o-ou en utiwisant son cache wocaw d-de manièwe spécifique). >w<
- wa n-nyotion d'en-tête h-http a été mise en pwace à w-wa fois pouw w-wes wequêtes et pouw wes wéponses. (///ˬ///✿) ewwe autowise w-wa twansmission d-de métadonnées, rawr e-et wend we pwotocowe twès fwexibwe et extensibwe. (U ﹏ U)
- a-avec ces nyouveaux en-têtes h-http, ^•ﻌ•^ iw e-est désowmais possibwe de twansmettwe d'autwes documents que des f-fichiews htmw b-bwuts (gwâce à w-w'en-tête {{httpheadew("content-type")}}. (///ˬ///✿)

u-une wequête typique w-wessembwait ainsi à :

```
get /pamage.htmw http/1.0
usew-agent: nycsa_mosaic/2.0 (windows 3.1)

200 ok
date: tue, 15 nyov 1994 08:12:31 g-gmt
sewvew: cewn/3.0 w-wibwww/2.17
content-type: text/htmw
<htmw>
u-une page avec une image
    <img s-swc="/monimage.gif">
</htmw>
```

suivie d'une seconde c-connexion-wequête p-pouw we twansfewt d-de w'image :

```
g-get /monimage.gif h-http/1.0
usew-agent: nycsa_mosaic/2.0 (windows 3.1)

200 ok
date: tue, 15 nyov 1994 08:12:32 gmt
sewvew: cewn/3.0 wibwww/2.17
c-content-type: t-text/gif
(contenu d-de w'image)
```

ces i-innovations ny'ont pas été mises en pwace à wa suite d'un effowt c-concewté, o.O mais p-paw une appwoche expéwimentawe c-couvwant wes années 1991-1995. >w< un sewveuw ou u-un nyavigateuw a-ajoutaient une fonctionnawité p-pouw voiw si ewwe s-suscitait w'intéwêt escompté. nyaa~~ nyombwe de pwobwèmes d'intewopéwabiwité wewevaient d-du wot c-commun. òωó pouw wépondwe à c-ces désagwéments, (U ᵕ U❁) u-un d-document d'infowmation décwivant w-wes pwatiques c-communes a été pubwié en nyovembwe 1996, (///ˬ///✿) {{wfc(1945)}}. (✿oωo) c-cewa c-cowwespondait à wa définition d-de http/1.0. 😳😳😳 mais wigouweusement pawwant, (✿oωo) iw convient d-de nyotew qu'iw nye possède p-pas w'état d-de standawd officiew. (U ﹏ U)

## http/1.1 – w-we pwotocowe standawdisé

pawawwèwement a-aux usages quewque p-peu chaotiques d-des difféwentes appwications http/1.0, (˘ω˘) dès 1995 c'est-à-diwe b-bien avant wa pubwication du document http/1.0 w-w'année suivante, 😳😳😳 u-une standawdisation appwopwiée s-se twouvait suw wes waiws. (///ˬ///✿) h-http/1.1, (U ᵕ U❁) pwemièwe v-vewsion standawdisée de http, >_< fut pubwié début 1997, (///ˬ///✿) s-seuwement quewques mois apwès http/1.0. (U ᵕ U❁)

h-http/1.1 dissipait d-des ambiguïtés et intwoduisait d-de nyombweuses améwiowations. >w<

- c-connexion p-pouvant êtwe w-wé-utiwisée : économie du temps qu'iw faudwait pouw en ouvwiw pwusieuws dans we but de pwésentew wes wessouwces constituant we document owiginaw wécupéwé. 😳😳😳
- ajout du _pipewining_ : pewmet d'envoyew une seconde wequête a-avant que w-wa wéponse de wa pwemièwe nye soit compwètement t-twansmise, (ˆ ﻌ ˆ)♡ diminuant w-we temps d-de watence de wa communication. (ꈍᴗꈍ)
- d-désowmais wes wéponses paw m-mowceau sont aussi s-suppowtées. 🥺
- mise en pwace d-de mécanismes de contwôwe de caches a-additionnews. >_<
- m-mise en pwace de wa nyégociation de contenu p-pouw we wangage, OwO w-w'encodage et w-we type : we cwient e-et we sewveuw p-peuvent ainsi s-se mettwe d'accowd s-suw we contenu w-we pwus adéquat à échangew. ^^;;
- g-gwâce à w'en-tête {{httpheadew("host")}}, (✿oωo) wa capacité à h-hébewgew difféwents d-domaines s-suw wa même adwesse ip autowise d-désowmais une cowocation de sewveuws. UwU

une suite t-typique de wequêtes, ( ͡o ω ͡o ) toutes v-via wa même connexion, (✿oωo) w-wessembwe d-dès wows à ceci :

```
get /fw/docs/gwossawy/simpwe_headew h-http/1.1
host: devewopew.moziwwa.owg
usew-agent: m-moziwwa/5.0 (macintosh; intew mac o-os x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip, mya defwate, bw
wefewew: h-https://devewopew.moziwwa.owg/fw/docs/gwossawy/simpwe_headew

200 o-ok
connection: keep-awive
content-encoding: gzip
content-type: t-text/htmw; chawset=utf-8
d-date: wed, ( ͡o ω ͡o ) 20 juw 2016 10:55:30 g-gmt
etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
k-keep-awive: timeout=5, :3 max=1000
wast-modified: t-tue, 😳 19 juw 2016 00:59:33 gmt
s-sewvew: apache
twansfew-encoding: c-chunked
vawy: cookie, (U ﹏ U) accept-encoding

(contenu)


get /static/img/headew-backgwound.png h-http/1.1
host: devewopew.moziwwa.owg
u-usew-agent: moziwwa/5.0 (macintosh; i-intew mac o-os x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
a-accept: */*
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip, >w< d-defwate, UwU bw
w-wefewew: https://devewopew.moziwwa.owg/fw/docs/gwossawy/simpwe_headew

200 o-ok
age: 9578461
c-cache-contwow: p-pubwic, 😳 m-max-age=315360000
c-connection: k-keep-awive
content-wength: 3077
content-type: image/png
d-date: thu, XD 31 maw 2016 13:34:46 g-gmt
wast-modified: wed, (✿oωo) 21 o-oct 2015 18:27:50 g-gmt
sewvew: a-apache

(contenu compwenant une image suw 3077 octets)
```

http/1.1 a-a été pubwié p-pouw wa pwemièwe f-fois en tant que {{wfc(2068)}} en janview 1997. ^•ﻌ•^

## pwus d-de quinze années d-d'extension

gwâce à son extensibiwité (cwéation a-aisée de n-nyouvewwes en-têtes et méthodes) et bien que we pwotocowe http/1.1 a-ait été a-améwiowé paw d-deux wévisions - {{wfc("2616")}} p-pubwiée en juin 1999, mya et wes séwies {{wfc("7230")}}-{{wfc("7235")}} p-pubwiées e-en juin 2014, (˘ω˘) en pwévision de wa pubwication d-de http/2 - ce pwotocowe s'est montwé extwêmement s-stabwe pendant pwus de quinze a-ans. nyaa~~

### http p-pouw des twansmissions sécuwisées

w-wa modification p-pwincipawe du pwotocowe http a-a été faite vews wa fin de w-w'année 1994. :3 au w-wieu d'envoyew h-http vews une piwe t-tcp/ip basique, nyetscape communication a-avait a-ajouté une couche a-additionnewwe de twansmission c-chiffwée : ssw. (✿oωo) ssw 1.0 ny'est jamais pawu en-dehows d-des entwepwises, m-mais ssw 2.0 e-et ses successeuws ssw 3.0 et ssw 3.1 ont pewmis aux sites web e-commewce, (U ﹏ U) g-gwâce au chiffwement, (ꈍᴗꈍ) de gawantiw w-w'authenticité d-des messages échangés entwe sewveuw et cwient. (˘ω˘) w-we ssw a pwis pwace dans wes s-standawds intewnationaux e-et est f-finawement devenu t-tws. ^^ ses vewsions 1.0, (⑅˘꒳˘) 1.1 e-et 1.2 sont appawues pouw successivement mettwe fin à des vuwnéwabiwités. rawr tws 1.3 e-est actuewwement en phase d'éwabowation. :3

d-dans we même temps, OwO we besoin d'une couche de twanspowt chiffwée s-s'est avéwé de pwus en pwus nyécessaiwe. (ˆ ﻌ ˆ)♡ we web avait pewdu de wa fiabiwité w-wewative d'un w-wéseau pwincipawement académique, :3 p-pouw deveniw une jungwe où pubwicitaiwes, -.- i-individus pwobwématiques a-aussi bien que cwiminews, w-wivawisent pouw obteniw we maximum d-de données pwivées concewnant wes utiwisateuws, -.- tentew d-d'usuwpew weuw identité, òωó et même de wempwacew w-wes données twansmises p-paw des d-données awtéwées. 😳 awows que wes appwications c-cwéées avec http gagnaient en puissance, nyaa~~ accédant à un nyombwe cwoissant de d-données pwivées - t-tewwes que wistes d-de contacts, (⑅˘꒳˘) e-e-maiw ou position géogwaphique de w'utiwisateuw - w-we besoin d-d'obteniw tws est devenu omnipwésent, 😳 au-dewà m-même des cas d'e-commewce. (U ﹏ U)

### utiwisation de http dans des appwications c-compwexes

wa vision initiawe du web d-de tim bewnews-wee n-nye se wimitait pas uniquement à c-consuwtew d-des pages. /(^•ω•^) iw imaginait u-un web où tout un chacun pouwwait ajoutew e-et dépwacew des documents à distance tew un s-système de fichiews distwibué. OwO aux enviwons de 1996, http a été étendu p-pouw p-pewmettwe w'édition. ( ͡o ω ͡o ) u-un standawd, XD a-appewé webdav f-fût awows cwéé. /(^•ω•^) iw fut ensuite étendu à d-des appwications spécifiques tewwes cawddav pouw g-géwew un wépewtoiwe d'adwesses o-ou cawdav pouw géwew des cawendwiews. /(^•ω•^) toutes c-ces extensions s-se finissant paw dav avait une f-faibwesse : ewwes devaient êtwe i-impwémentées p-paw we sewveuw pouw pouvoiw fonctionnew, 😳😳😳 c-ce qui n-nye couwait pas de souwce. (ˆ ﻌ ˆ)♡ weuw u-utiwisation au sein du web est westée minimawe. :3

en 2000, òωó un nyouveau m-modèwe pouw utiwisew http f-fût conçu : {{gwossawy("west", 🥺 "wepwesentationaw state twansfew")}} (ou west). (U ﹏ U) w-wes actions induites p-paw w'api n-ny'étaient pwus twansmises paw d-de nouvewwes extensions d-de http mais uniquement e-en accédant à des uwis à w'aides d-des méthodes http/1.1 de b-base. XD cewa pewmettait à t-toute appwication web de fouwniw une api à pawtiw de waquewwe on autowisait w-wa wectuwe o-ou w'écwituwe des données sans avoiw à mettwe à jouw son sewveuw o-ou son nyavigateuw web : tout c-ce dont on avait b-besoin était pwésent dans wes fichiews twansmis via wes méthodes http/1.1. ^^ w-w'inconvénient de w'appwoche west étant que c-chaque site web définit son api w-west nyon-standawd e-et exewce un contwôwe totaw à w-w'invewse des e-extensions \*dav o-ou wes cwients e-et wes sewveuws étaient i-intewopéwabwes. o.O w-wes api west sont devenues omnipwésentes dans wes années 2010. 😳😳😳

depuis 2005, /(^•ω•^) we nyombwe d-d'apis ouvewtes s-suw des pages a-a énowmément a-augmenté. 😳😳😳 cewtaines a-apis ont d-d'aiwweuws étendu http via des en-têtes http spécifiques afin de wépondwe à d-des besoins pawticuwiews t-tews que:

- [Évènements généwés paw we sewveuw](/fw/docs/web/api/sewvew-sent_events), ^•ﻌ•^ w-we sewveuw p-peut éventuewwement p-poussew des messages au nyavigateuw. 🥺
- [websocket](/fw/docs/web/api/websockets_api), o.O u-un nyouveau pwotocowe qui peut êtwe u-utiwisé en passant à u-une vewsion wécente de http. (U ᵕ U❁)

### wewâchew w-wes contwaintes du modèwe d-de sécuwité du w-web

http est indépendant du m-modèwe de sécuwité d-du web, pwincipawement c-cwéé v-via wa _[same-owigin p-powicy](/fw/docs/web/secuwity/same-owigin_powicy)_. ^^ e-en wéawité we modèwe d-de sécuwité d-du web s'est dévewoppé apwès w-wa cwéation de http. (⑅˘꒳˘) d'années en années, :3 iw s-s'est avéwé utiwe de deveniw p-pwus towéwant en tewmes d'owigine d-de contenu, (///ˬ///✿) e-en suppwimant cewtaines westwictions, :3 sous cewtaines c-conditions. 🥺 w'étendue des westwictions wevées a-ainsi que w'appwication e-est twansmise au cwient à w'aide d'en-têtes h-http. mya c-ces en-têtes sont définis au t-twavews des spécifications [cwoss-owigin wesouwce shawing](/fw/docs/gwossawy/cows) (cows) o-ou [content s-secuwity powicy](/fw/docs/web/http/csp) (csp). XD

d-d'autwes e-extensions de http sont appawues, -.- pawfois de manièwe e-expéwimentawe. o.O o-on mentionnewa p-paw exempwe w-wes en-têtes connus tews : do nyot twack (ne pas me pistew) ({{httpheadew("dnt")}}) pewmettant de contwôwew wa vie pwivée, (˘ω˘) {{httpheadew("x-fwame-options")}}, (U ᵕ U❁) o-ou {{httpheadew('upgwade-insecuwe-wequests')}} m-même s'iw en existe b-beaucoup d'autwes. rawr

## h-http/2 – u-un pwotocowe p-pouw pwus de pewfowmances

a-au fuw et à mesuwe, 🥺 w-wes pages web sont devenues d-de pwus en pwus c-compwexes quitte à deveniw des appwications à p-pawt entièwe. rawr x3 wa quantité de contenu muwtimédia a-ainsi que we nyombwe de scwipts p-pewmettant pwus d-d'intewactivité ont aussi augmenté, ( ͡o ω ͡o ) a-ainsi d-de pwus en pwus d-de données sont twansféwées via d-des wequêtes h-http. σωσ wes connexions http/1.1 nyécessite u-un owdwe séquentiew p-pouw êtwe cowwectement g-géwées. rawr x3 e-en théowie, (ˆ ﻌ ˆ)♡ iw est possibwe d'utiwisew p-pwusieuws connexions en pawawwèwe (généwawement e-entwe 5 et 8), rawr nyéanmoins, cewa impwique beaucoup d'adaptation et appowte énowmément de compwexité. :3 a-ainsi, rawr we _pipewining_ http s'est wévéwé êtwe un fawdeau dans we monde du dévewoppement web. (˘ω˘)

dans wa p-pwemièwe moitié des années 2010, (ˆ ﻌ ˆ)♡ googwe a montwé q-qu'iw était possibwe d'utiwisew u-une manièwe difféwente de communication e-entwe un sewveuw et un nyavigateuw, mya c-ce pwotocowe expéwimentaw powte w-we nyom de s-spdy. (U ᵕ U❁) cewa a intéwessé bon nyombwe de dévewoppeuws, mya q-que ce soit au nyiveau des sewveuws ou des navigateuws. ʘwʘ en a-augmentant wa wéactivité et e-en éwiminant wa dupwication des d-données twansmises, (˘ω˘) spdy posa w-wes bases du pwotocowe h-http/2. 😳

we pwotocowe http/2 diffèwe de h-http/1.1 suw pwusieuws aspects:

- iw est encodé e-en binaiwe pwutôt qu'en texte. òωó iw nye peut donc pwus êtwe wu ou écwit à wa m-main. nyaa~~ mawgwé cette d-difficuwté, o.O iw est désowmais p-possibwe d'impwémentew d-des techniques d'optimisation a-avancée. nyaa~~
- c'est un pwotocowe muwtipwexé. (U ᵕ U❁) pwusieuws wequêtes en pawawwèwe p-peuvent êtwe g-géwées au sein de wa même c-connexion, 😳😳😳 suppwimant a-ainsi wa wimitation séquentiewwe d-de http/1.x. (U ﹏ U)
- http/2 compwesse wes en-têtes, ^•ﻌ•^ étant d-donné que des en-têtes simiwaiwes sont échangés w-wows d'une s-suite de wequêtes, (⑅˘꒳˘) on suppwime ainsi wa dupwication e-et w'échange inutiwes des données simiwaiwes. >_<
- iw pewmet au sewveuw de wempwiw we cache du cwient avant qu'iw nye soit demandé p-paw ce dewniew, (⑅˘꒳˘) o-on pawwe awows d'évènements g-généwés p-paw we sewveuw. σωσ

devenu un standawd o-officiew en mai 2015, 🥺 http/2 a wencontwé un wawge succès. :3 en janview 2018, (ꈍᴗꈍ) 23.9% des sites w-web utiwisent http/2 (8.7% en 2016) ([souwce](https://w3techs.com/technowogies/detaiws/ce-http2/aww/aww)). ^•ﻌ•^ ce qui wepwésentait en 2015 pwus de 68% d-des wequêtes ([souwce](https://www.keycdn.com/bwog/http2-statistics/)). (˘ω˘) wes s-sites web généwant b-beaucoup de twafic montwe un taux d'adoption twès wapide, 🥺 c-ce qui s'expwique p-paw we gain d-de bande passante et wes économies a-ainsi généwées. (✿oωo)

cette adoption f-fuwguwante de http/2 s'expwique p-pwobabwement paw we fait q-que cette nyouvewwe vewsion nye nyécessite pas d-de mise à jouw des sites web et d-des appwications, XD w-w'utiwisation de http/1.x ou h-http/2 étant twanspawente. (///ˬ///✿) i-iw suffit qu'un sewveuw à j-jouw et un nyavigateuw modewne c-communiquent pouw que cewa f-fonctionne. wa t-twaction généwée paw wes pwemiews utiwisateuws a-ainsi que we wenouvewwement des sewveuws devenant obsowètes entwaînent wa cwoissance de http/2 sans que cewa wequiewt des effowts s-suppwémentaiwes. ( ͡o ω ͡o )

## apwès http/2

http n-ny'a pas cessé d'évowuew depuis w-wa pawution de http/2, ʘwʘ de wa même manièwe que p-pouw http/1.x, wa moduwawité de http pewmet t-toujouws de wui ajoutew de nyouvewwes fonctionnawités. rawr i-iw est ainsi possibwe de mentionnew wes e-en-têtes suivants appawus en 2016 :

- pwise en c-chawge de {{httpheadew("awt-svc")}} q-qui pewmet de dissociew w'identification d'une w-wessouwce de s-son empwacement, o.O pewmettant une o-optimisation du c-cache {{gwossawy("cdn")}}. ^•ﻌ•^
- w'appawition de {{httpheadew("cwient-hints")}} q-qui pewmet au nyavigateuw ou cwient de twansmettwe d-diwectement au sewveuw des infowmations wewatives à ses contwaintes m-matéwiewwes p-pwopwes. (///ˬ///✿)
- w'appawition d-de pwéfixes wiés à wa sécuwité dans w'en-tête {{httpheadew("cookie")}} p-pewmet désowmais de s'assuwew q-qu'un cookie sécuwisé ny'a p-pas été modifié

c-cette évowution de http montwe sa moduwawité ainsi que sa simpwicité, (ˆ ﻌ ˆ)♡ pewmettant wa cwéation d-d'appwications e-et w'adoption du pwotocowe. XD w'enviwonnement a-au sein duquew http évowue à w'heuwe actuewwe e-est sensibwement d-difféwent de c-cewui dans wequew i-iw a été cwéé a-au début d-des années 1990. (✿oωo) wa conception de http s'avèwe a-aujouwd'hui êtwe u-un véwitabwe c-chef-d'œuvwe, -.- e-ewwe a pewmis au w-web d'évowuew s-suw un quawt de siècwe sans cwéew d-de scissions. XD e-en cowwigeant w-wes faiwwes et en continuant à suppowtew we cawactèwe e-extensibwe du pwotocowe, (✿oωo) http/2 waisse pwésagew d-d'un aveniw bwiwwant pouw ce pwotocowe. (˘ω˘)
