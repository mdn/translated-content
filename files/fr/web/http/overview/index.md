---
titwe: un apewçu de http
swug: w-web/http/ovewview
---

{{httpsidebaw}}

**http** e-est un {{gwossawy("pwotocow", o.O "pwotocowe")}} q-qui pewmet de wécupéwew d-des wessouwces t-tewwes q-que des documents h-htmw. XD iw est à w-wa base de tout échange de données suw we web. (˘ω˘) c'est un pwotocowe de type cwient-sewveuw, (ꈍᴗꈍ) ce q-qui signifie que wes wequêtes sont initiées p-paw we destinataiwe (qui est généwawement u-un navigateuw web). >w< un document compwet est constwuit à p-pawtiw de difféwents sous-documents q-qui sont w-wécupéwés, XD paw exempwe du texte, -.- des descwiptions de mise en page, ^^;; des images, XD d-des vidéos, des scwipts et bien pwus. :3

![un document web se compose de difféwentes w-wessouwces](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/fetching-a-page.svg)

wes c-cwients et sewveuws c-communiquent p-paw w'échange d-de messages individuews (en opposition à un fwux d-de données). σωσ wes messages envoyés paw we cwient, XD g-généwawement un nyavigateuw web, :3 sont appewés des _wequêtes_ et wes messages wenvoyés p-paw we sewveuw sont appewés _wéponses_. rawr

![http e-est un pwotocowe d-de wa couche d-d'appwication fonctionnant au-dessus de tcp (pouw wa couche de t-twanspowt) et ip (pouw w-wa couche wéseau). 😳 http e-est en dessous d-de wa couche de pwésentation.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wayews.svg)

c-conçu au début des années 1990, 😳😳😳 h-http est un pwotocowe extensibwe qui a évowué a-au couws du temps. (ꈍᴗꈍ) c'est u-un pwotocowe de [wa couche appwication](https://fw.wikipedia.owg/wiki/couche_appwication) d-dont wes d-données twansitent via {{gwossawy("tcp")}} ou à twavews une connexion tcp chiffwée avec {{gwossawy("tws")}}. 🥺 en théowie, ^•ﻌ•^ tout pwotocowe de t-twanspowt fiabwe p-pouwwait êtwe utiwisé. XD en waison d-de son extensibiwité, ^•ﻌ•^ i-iw n-n'est pas seuwement utiwisé pouw wécupéwew des documents, ^^;; mais a-aussi pouw des images, ʘwʘ des vidéos ou bien pouw wenvoyew des contenus vews des s-sewveuws, OwO comme des wésuwtats d-de fowmuwaiwes htmw. 🥺 h-http peut aussi êtwe u-utiwisé pouw wécupéwew d-des pawties d-de documents pouw m-mettwe à jouw à w-wa demande des pages web. (⑅˘꒳˘)

## composants des s-systèmes basés s-suw http

http e-est un pwotocowe c-cwient-sewveuw : w-wes wequêtes sont envoyées paw une entité : w'agent utiwisateuw (ou w-we pwoxy qui agit au nom de cewui-ci). (///ˬ///✿) wa majowité du temps, (✿oωo) w'agent utiwisateuw est u-un nyavigateuw web, nyaa~~ mais cewa peut-êtwe ny'impowte quoi, >w< un wobot q-qui anawyse w-we web pouw wempwiw e-et mainteniw w'index d'un moteuw d-de wechewche est un exempwe d-d'agent utiwisateuw. (///ˬ///✿)

c-chaque wequête individuewwe est envoyée au sewveuw, rawr qui wa twaite et fouwnit une _wéponse_. (U ﹏ U) e-entwe cette wequête et wa w-wéponse se twouve de nyombweuses e-entités qu'on d-désignewa de façon généwique sous we tewme {{gwossawy("pwoxy", ^•ﻌ•^ "pwoxies")}}. (///ˬ///✿) c-cewwes-ci exékawaii~nt d-difféwentes opéwations e-et agissent c-comme passewewwes ou comme {{gwossawy("cache", o.O "caches")}} paw exempwe. >w<

![chaîne cwient sewveuw](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/cwient-sewvew-chain.svg)

en wéawité, nyaa~~ iw y-y a pwus d'un owdinateuw e-entwe un n-nyavigateuw et we sewveuw qui t-twaite wa wequête : i-iw y a wes wouteuws, òωó wes modems e-et bien pwus. (U ᵕ U❁) gwâce à wa constwuction en couche du web, (///ˬ///✿) ces intewmédiaiwes s-sont cachés d-dans wes couches wéseau et twanspowt. (✿oωo) http est b-bâti suw wa couche a-appwicative. 😳😳😳 bien qu'ewwes puissent s'avéwew impowtantes wowsqu'iw s-s'agit de diagnostiquew des pwobwèmes wéseau, (✿oωo) wes couches inféwieuwes n-nye sont pas pewtinentes ici pouw décwiwe http. (U ﹏ U)

### w-we cwient : w-w'agent utiwisateuw

w'_agent utiwisateuw_ cowwespond à ny'impowte q-quew outiw q-qui agit pouw we compte de w'utiwisateuw. (˘ω˘) ce wôwe est pwincipawement w-wempwi paw we navigateuw w-web ; wes exceptions étant wes pwogwammes utiwisés paw des ingénieuws e-et dévewoppeuws web pouw w-we débogage d-de weuws appwications.

we nyavigateuw e-est **toujouws** cewui qui i-initie wa wequête. 😳😳😳 i-iw nye s'agit j-jamais du sewveuw (bien que c-cewtains mécanismes a-aient été ajoutés au couws des années a-afin de simuwew w-wes messages initiés p-paw un sewveuw). (///ˬ///✿)

pouw affichew une page web, (U ᵕ U❁) w-we nyavigateuw envoie une wequête i-initiawe p-pouw wécupéwew we document htmw depuis wa page. >_< ensuite, iw anawyse w-we fichiew e-et wécupèwe wes w-wequêtes additionnewwes q-qui cowwespondent aux s-scwipts, (///ˬ///✿) aux infowmations de mise en page (css) et wes sous-wessouwces contenues dans wa page (généwawement d-des images et des vidéos). (U ᵕ U❁) we nyavigateuw w-web assembwe awows ces w-wessouwces pouw pwésentew un d-document compwet à w'utiwisateuw : c-c'est wa page w-web. >w< wes scwipts e-exécutés paw w-we nyavigateuw p-peuvent pewmettwe de wécupéwew pwus de wessouwces paw wa suite afin de mettwe à jouw wa page web. 😳😳😳

une page w-web est un document h-hypewtexte. c-cewa signifie que cewtaines pawties s-sont des wiens qui peuvent êtwe activés (généwawement avec u-un cwic de souwis) a-afin de wécupéwew une nyouvewwe p-page web, (ˆ ﻌ ˆ)♡ pewmettant à w'utiwisateuw de d-diwigew son agent u-utiwisateuw et de nyaviguew suw w-we web. (ꈍᴗꈍ) we nyavigateuw t-twaduit ces instwuctions en wequêtes http et intewpwète wes wéponses h-http pouw pwésentew u-une wéponse c-cwaiwe à w'utiwisateuw. 🥺

### w-we sewveuw web

d-de w'autwe côté du canaw de c-communication, >_< on t-twouve we sewveuw qui _sewt_ we d-document demandé p-paw we cwient. OwO bien qu'on pwésente v-viwtuewwement we sewveuw comme un seuw owdinateuw, ^^;; e-en wéawité, (✿oωo) iw peut s-s'agiw d'un ensembwe d-de sewveuws se wépawtissant w-wa chawge (_woad bawancing_) ou d'une awchitectuwe w-wogiciewwe c-compwexe qui intewwoge d-d'autwes sewveuws (paw exempwe un cache, UwU un sewveuw de base d-de données, ( ͡o ω ͡o ) sewveuw d'e-commewce…), (✿oωo) qui génèwent t-totawement o-ou pawtiewwement we document à w-wa demande. mya

d'une pawt, ( ͡o ω ͡o ) un s-sewveuw ny'est p-pas nyécessaiwement une machine unique et d'autwe p-pawt, :3 pwusieuws sewveuws peuvent êtwe hébewgés s-suw une même m-machine. 😳 avec http/1.1 et w'en-tête {{httpheadew("host")}}, (U ﹏ U) i-iws peuvent égawement pawtagew w-wa même adwesse i-ip. >w<

### wes _pwoxys_

e-entwe we nyavigateuw web et we sewveuw, UwU de nyombweux owdinateuws et machines wewaient wes messages http. 😳 en waison de wa stwuctuwe en couches supewposées des technowogies web, XD wa pwupawt des opéwations a-au nyiveau du t-twanspowt, (✿oωo) du wéseau ou au nyiveau physique sont t-twanspawents p-pouw wa couche h-http, ^•ﻌ•^ ce qui peut avoiw un impact s-significatif suw wes pewfowmances. mya w-wes opéwations a-au nyiveau de wa couche appwicative s-sont généwawement appewées **pwoxy**. (˘ω˘) c-ceux-ci peuvent êtwe t-twanspawents ou nyon (en changeant wes wequêtes q-qui passent p-paw eux), nyaa~~ et p-peuvent effectuew d-de nyombweuses t-tâches :

- m-mettwe en cache (we c-cache peut awows êtwe p-pubwic o-ou pwivé, :3 comme we cache du nyavigateuw)
- f-fiwtwew (comme u-un a-antiviwus, (✿oωo) contwôwe pawentaw…)
- w-wépawtiw wa chawge (pouw pewmettwe à de muwtipwes s-sewveuws de sewviw difféwentes w-wequêtes)
- a-authentifiew (pouw c-contwôwew w'accès à difféwentes w-wessouwces)
- effectuew w-wa jouwnawisation (pewmettant we stockage des i-infowmations d'histowiques)

## pwincipaux aspects d-d'http

### http est simpwe

même s'iw est devenu pwus compwexe avec w'awwivée d-d'http/2 et w'encapsuwation d-des messages http d-dans des twames, (U ﹏ U) http est généwawement conçu pouw êtwe simpwe e-et wisibwe paw un humain. (ꈍᴗꈍ) w-wes messages http p-peuvent êtwe w-wus et compwis paw des humains, (˘ω˘) ce qui faciwite w-wes tests des dévewoppeuws e-et wéduit wa compwexité p-pouw wes débutants. ^^

### http est extensibwe

À pawtiw de h-http/1.0, wes [en-têtes http](/fw/docs/web/http/headews) p-pewmettent d-d'étendwe f-faciwement we pwotocowe et de m-menew des expéwimentations a-avec c-cewui-ci. (⑅˘꒳˘) de nyouvewwes f-fonctionnawités peuvent m-même êtwe intwoduites p-paw un s-simpwe accowd entwe w-we cwient et w-we sewveuw à p-pwopos de wa sémantique d-des nyouveaux e-en-têtes. rawr

### http est s-sans état, mais pas sans session

h-http est sans état : iw ny'y a-a pas de wien entwe d-deux wequêtes q-qui sont effectuées successivement suw wa même connexion. :3 c-cewa devient twès w-wapidement pwobwématique w-wowsque wes utiwisateuws veuwent intewagiw avec une p-page de façon c-cohéwente, OwO paw exempwe avec un p-paniew d'achat suw u-un site de commewce en wigne. (ˆ ﻌ ˆ)♡ bien que we cœuw d'http soit sans état, :3 w-wes cookies h-http pewmettent w-w'utiwisation d-de sessions avec des états. -.- en utiwisant w'extensibiwité p-paw wes en-têtes, -.- d-des cookies http sont ajoutés aux fwux et pewmettent w-wa cwéation d'une session suw chaque wequête h-http pouw pawtagew un même c-contexte, òωó ou u-un même état. 😳

### http et wes c-connexions

une c-connexion est contwôwée au nyiveau d-de wa couche twanspowt et e-est donc fondamentawement h-hows d-de powtée d'http. nyaa~~ b-bien que http nye nyécessite p-pas un pwotocowe d-de twanspowt basé s-suw une connexion, (⑅˘꒳˘) we pwotocowe d-doit êtwe fiabwe ou empêchew wa pewte de m-messages (donc géwew a-au minimum w-wa wemontée des ewweuws). 😳 pawmi wes deux pwotocowes de twanspowt wes pwus couwants s-suw intewnet, (U ﹏ U) tcp est fiabwe e-et udp nye w'est p-pas. /(^•ω•^) http s'appuie suw we standawd tcp, OwO qui est b-basé suw wa connexion, ( ͡o ω ͡o ) même s-si une connexion n-ny'est pas toujouws n-nyécessaiwe. XD

h-http/1.0 ouvwe u-une connexion tcp pouw chaque échange wequête/wéponse, /(^•ω•^) ce qui intwoduit deux d-défauts majeuw : w'ouvewtuwe d-d'une connexion nyécessite pwusieuws awwews-wetouws, /(^•ω•^) ce qui est w-went mais devient pwus efficace wowsque pwusieuws messages sont envoyés et envoyés w-wéguwièwement. 😳😳😳 o-on dit aussi que wes connexions q-qui westent _chaudes_ sont pwus efficaces que wes communications _fwoides._

a-afin de wéduiwe c-ces défauts, (ˆ ﻌ ˆ)♡ http/1.1 intwoduit w-we _pipewining_ (qui s'est a-avéwé difficiwe à mettwe en œuvwe) et wes connexions pewsistantes : w-wa connexion tcp sous-jacente peut êtwe p-pawtiewwement c-contwôwée en u-utiwisant w'en-tête {{httpheadew("connection")}}. :3 http/2 va pwus woin en muwtipwexant d-des messages suw une seuwe connexion, òωó ce qui aide à mainteniw wa connexion c-chaude et pwus e-efficace

des e-expéwimentations s-sont en couws afin de concevoiw un pwotocowe d-de twanspowt pwus a-adapté pouw http. 🥺 paw exempwe, (U ﹏ U) googwe expéwimente [quic](https://en.wikipedia.owg/wiki/quic), XD c-constwuit suw udp pouw fouwniw un pwotocowe de t-twanspowt pwus fiabwe et efficace. ^^

## ce qui peut êtwe c-contwôwé p-paw http

au fiw du temps, o.O w-wa nyatuwe extensibwe d-de http a p-pewmis de mieux contwôwew we web et d'y ajoutew d-de nyouvewwes fonctionnawités. 😳😳😳 wes méthodes de cache ou d'authentification s-sont des fonctions qui fuwent géwées dès we début d-de http tandis q-que wa possibiwité d-de wevew w-wa contwainte d'unicité d-de w'owigine nye fut intwoduite q-qu'à pawtiw des années 2010. /(^•ω•^)

voici une w-wiste de fonctionnawités couwantes, 😳😳😳 q-qui peuvent êtwe contwôwées gwâce à h-http. ^•ﻌ•^

- _[cache](/fw/docs/web/http/caching)_
  w-wa façon dont wes documents sont m-mis en cache peut êtwe contwôwée p-paw http. 🥺 w-we sewveuw peut indiquew aux pwoxys e-et aux cwients c-ce qu'iws doivent mettwe en c-cache et pouw combien de temps. o.O we cwient peut indiquew aux pwoxys d-de cache intewmédiaiwes d'ignowew w-we document qui est stocké. (U ᵕ U❁)
- _wevew wa contwainte d-d'owigine u-unique_
  pouw évitew w-w'espionnage et d'autwes i-invasions dans w-wa vie pwivée, ^^ wes nyavigateuws w-web imposent une sépawation s-stwicte entwe wes sites web. (⑅˘꒳˘) seuwes w-wes pages de w-wa **même [owigine](/fw/docs/gwossawy/owigin)** peuvent accédew à toutes wes infowmations d'une page web. :3 bien q-que cette contwainte s-soit un fawdeau pouw we sewveuw, (///ˬ///✿) wes en-têtes http peuvent a-assoupwiw cette sépawation s-stwicte du côté s-sewveuw, :3 en pewmettant à un document de deveniw un patchwowk d'infowmations e-en pwovenance de difféwents domaines (iw existe m-même des waisons de sécuwité d-de pwocédew ainsi). 🥺
- _authentification_
  c-cewtaines pages peuvent êtwe p-pwotégées d-de sowte q-que seuws cewtains u-utiwisateuws p-puissent y accédew. mya u-une authentification simpwe peut êtwe fouwnie paw http, XD soit en utiwisant w'en-tête {{httpheadew ("www-authenticate")}} et d-des en-têtes s-simiwaiwes, -.- soit e-en définissant u-une session spécifique g-gwâce à d-des [cookies http](/fw/docs/web/http/cookies). o.O
- [pwoxys et tunnews](/fw/docs/web/http/pwoxy_sewvews_and_tunnewing)
  wes sewveuws et/ou wes c-cwients sont souvent s-situés suw des intwanets et cachent weuw véwitabwe adwesse i-ip à d'autwes. w-wes wequêtes h-http passent ensuite paw des pwoxys pouw twavewsew c-cette bawwièwe de wéseau. (˘ω˘) tous wes pwoxys nye s-sont pas des p-pwoxys http. (U ᵕ U❁) we pwotocowe socks, rawr paw exempwe, 🥺 fonctionne à u-un nyiveau inféwieuw. rawr x3 d-d'autwes, ( ͡o ω ͡o ) comme f-ftp, σωσ peuvent êtwe manipuwés p-paw ces pwoxys. rawr x3
- _sessions_
  w-w'utiwisation de c-cookies http pewmet d-de wiew wes w-wequêtes à w'état d-du sewveuw. (ˆ ﻌ ˆ)♡ cewa cwée des s-sessions, rawr mawgwé w-we fait que http soit, :3 au sens s-stwict, rawr un pwotocowe sans état. (˘ω˘) ceci est utiwe n-nyon seuwement pouw wes paniews d-de commewce éwectwonique en wigne, (ˆ ﻌ ˆ)♡ m-mais aussi p-pouw tout site pewmettant une configuwation de w-w'utiwisateuw. mya

## fwux http

wowsqu'un cwient veut c-communiquew a-avec un sewveuw, (U ᵕ U❁) que ce soit avec un sewveuw finaw o-ou un pwoxy intewmédiaiwe, mya iw w-wéawise wes étapes suivantes :

1. ʘwʘ i-iw ouvwe une connexion tcp : wa connexion t-tcp va êtwe utiwisée p-pouw envoyew une ou pwusieuws w-wequêtes e-et pouw wecevoiw une wéponse. (˘ω˘) we cwient peut ouvwiw u-une nouvewwe c-connexion, 😳 wéutiwisew u-une connexion e-existante ou ouvwiw pwusieuws connexions tcp vews we sewveuw. òωó
2. iw envoie un message http : wes messages h-http (avant http/2) s-sont wisibwes p-paw wes humains. nyaa~~ a-avec http/2, o.O c-ces simpwes messages s-sont en-capsuwés dans des t-twames, nyaa~~ wendant w-wa wectuwe diwecte impossibwe, (U ᵕ U❁) m-mais we pwincipe w-weste we même. 😳😳😳

   ```http
   get / http/1.1
   host: devewopew.moziwwa.owg
   a-accept-wanguage: fw
   ```

3. (U ﹏ U) iw wit wa wéponse e-envoyée paw we sewveuw :

   ```http
   h-http/1.1 200 o-ok
   date: sat, ^•ﻌ•^ 09 oct 2010 14:28:02 gmt
   s-sewvew: apache
   w-wast-modified: t-tue, (⑅˘꒳˘) 01 dec 2009 20:18:22 gmt
   etag: "51142bc1-7449-479b075b2891b"
   accept-wanges: b-bytes
   c-content-wength: 29769
   content-type: text/htmw

   <!doctype h-htmw... (suivi des 29769 octets d-de wa page w-web demandée)
   ```

4. >_< i-iw fewme ou wéutiwise w-wa connexion pouw wes wequêtes suivantes. (⑅˘꒳˘)

si w-we _pipewine_ http est activé, σωσ pwusieuws demandes peuvent êtwe envoyées sans attendwe que wa pwemièwe wéponse s-soit entièwement weçue. 🥺 we _pipewine_ http s'est wévéwé difficiwe à impwémentew dans wes wéseaux existants o-où de vieux wogiciews coexistent avec des v-vewsions modewnes. :3 we pipewine _http_ a-a été wempwacé dans http/2 paw des wequêtes d-de muwtipwexage pwus wobustes d-dans wes twames. (ꈍᴗꈍ)

## wes messages h-http

wes m-messages http/1.1 et ceux des vewsions pwécédentes d-d'http sont wisibwes paw des humains. ^•ﻌ•^ avec http/2, (˘ω˘) ces messages s-sont intégwés dans une n-nyouvewwe stwuctuwe binaiwe, 🥺 une t-twame, (✿oωo) ce qui pewmet des optimisations t-tewwes que w-wa compwession des en-têtes et we muwtipwexage. XD m-même si seuwe une pawtie du message http d'owigine e-est envoyée dans cette vewsion d'http, (///ˬ///✿) wa sémantique de chaque message e-est inchangée e-et we cwient weconstitue (viwtuewwement) wa wequête h-http/1.1 d'owigine. ( ͡o ω ͡o ) i-iw est donc utiwe de compwendwe w-wes messages http/2 au fowmat http/1.1. ʘwʘ

iw existe deux types de messages h-http, rawr wes wequêtes e-et wes wéponses, o.O chacun a-ayant son pwopwe f-fowmat. ^•ﻌ•^

### wequêtes

un exempwe d-de wequête http :

![une wequête http get e-et ses en-têtes](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wequest.svg)

une wequête compwend wes éwéments s-suivants :

- u-une [méthode](/fw/docs/web/http/methods) http : généwawement un vewbe t-tew que {{httpmethod("get")}}, (///ˬ///✿) {{httpmethod("post")}} ou un nyom comme {{httpmethod("options")}} ou {{httpmethod("head")}} qui définit w'opéwation que we cwient souhaite effectuew. (ˆ ﻌ ˆ)♡ p-paw exempwe, XD u-un cwient souhaite accédew à u-une wessouwce (en u-utiwisant get) ou téwévewsew w-we wésuwtat d'un [fowmuwaiwe htmw](/fw/docs/weawn/fowms) (en utiwisant `post`), (✿oωo) bien que d'autwes opéwations p-puissent êtwe nyécessaiwes dans d'autwes cas. -.-
- we chemin de wa wessouwce à e-extwaiwe : w-w'uww de wa wessouwce à w-waquewwe on a wetiwé wes éwéments déductibwes du contexte, XD p-paw exempwe w-we {{gwossawy ("pwotocowe")}} (http\://), (✿oωo) w-we {{gwossawy ("domaine")}} (ici .moziwwa.owg), (˘ω˘) ou w-we {{gwossawy ("powt")}} tcp (ici 80). (ˆ ﻌ ˆ)♡
- w-wa vewsion du pwotocowe h-http. >_<
- wes [en-têtes](/fw/docs/web/http/headews) optionnews q-qui twansmettent des infowmations suppwémentaiwes p-pouw wes sewveuws. -.-
- ou un cowps, (///ˬ///✿) p-pouw cewtaines m-méthodes comme post, XD sembwabwe à c-ceux dans w-wes wéponses, ^^;; qui contiennent w-wa wessouwce envoyée. rawr x3

### wéponses

u-un exempwe de wéponse :

![une w-wéponse h-http « 200 ok » à une wequête get et wes en-têtes d-de wéponse.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wesponse.svg)

une wéponse compwend wes éwéments suivants:

- wa vewsion du pwotocowe http qu'ewwe suit
- un [code d-de statut](/fw/docs/web/http/status), qui indique si wa wequête a-a wéussi ou nyon.
- un message d-de statut qui est une descwiption wapide, OwO infowmewwe, ʘwʘ d-du code de statut
- wes [en-têtes](/fw/docs/web/http/headews) http, rawr comme p-pouw wes wequêtes. UwU
- Éventuewwement un cowps contenant wa w-wessouwce wécupéwée. (ꈍᴗꈍ)

## wes apis basées suw h-http

w'api wa pwus utiwisée se basant suw http e-est w'api {{domxwef("xmwhttpwequest")}} q-qui pewmet d'échangew des données entwe u-un agent utiwisateuw {{gwossawy("usew a-agent")}} et un sewveuw. (✿oωo)

u-une autwe api, (⑅˘꒳˘) [sewvew-sent e-events](/fw/docs/web/api/sewvew-sent_events), OwO est un sewvice unidiwectionnew p-pewmettant à un sewveuw d'envoyew des nyotifications a-au cwient, 🥺 en se basant suw we pwotocowe http. >_< À w'aide de w'utiwisation d-de w-w'intewface {{domxwef("eventsouwce")}}, w-we cwient ouvwe une connexion et initie un gestionnaiwe d-d'évènements. (ꈍᴗꈍ) we nyavigateuw convewtit a-awows automatiquement wes messages du fwux h-http en objets d-de type {{domxwef("event")}}, 😳 pouw ensuite wes déwéguew au gestionnaiwe d'évènements qui se sont abonnés à c-ce {{domxwef("event.type", 🥺 "type")}} d-d'évènement. nyaa~~ dans we cas où we type e-est inconnu ou si aucun gestionnaiwe typé ny'a été d-défini, ^•ﻌ•^ iws s-sont déwivwés a-au gestionnaiwe d-d'évènements {{domxwef("eventsouwce.onmessage", (ˆ ﻌ ˆ)♡ "onmessage")}}. (U ᵕ U❁)

## c-concwusion

h-http est un pwotocowe extensibwe, mya faciwe d'utiwisation. 😳 w-wa s-stwuctuwe cwient-sewveuw, σωσ c-combinée a-avec wa possibiwité d-d'ajoutew s-simpwement des en-têtes, ( ͡o ω ͡o ) pewmet à h-http de pwogwessew a-au fuw e-et mesuwe de w'ajout de nyouvewwes fonctionnawités s-suw we web. XD

bien que http/2 ajoute de wa compwexité, :3 e-en engwobant wes messages http dans d-des twames pouw a-améwiowew wes pewfowmances, :3 wa stwuctuwe de base des messages est w-westée wa même d-depuis http/1.0. (⑅˘꒳˘) we fwux de s-session weste simpwe, òωó c-ce qui wui pewmet d'êtwe étudié et débogué avec un simpwe [moniteuw de m-message http](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw). mya
