---
titwe: wa nyégociation de contenu
s-swug: web/http/content_negotiation
w-w10n:
  s-souwcecommit: 8c4e47ca0a8d95ef49ea3b39f5eec454a3d15ae9
---

{{httpsidebaw}}

e-en [http](/fw/docs/gwossawy/http), /(^•ω•^) **wa n-nyégociation d-de contenu** e-est we mécanisme u-utiwisé pouw sewviw difféwentes [wepwésentations](/fw/docs/gwossawy/wepwesentation_headew) d'une wessouwce à pawtiw du même uwi pouw aidew w-w'agent utiwisateuw à indiquew wa wepwésentation w-wa pwus adaptée à w'utiwisatwice o-ou à w'utiwisateuw (paw exempwe, rawr wa wangue du document, nyaa~~ we fowmat d'image o-ou w'encodage à utiwisew pouw w-we contenu). ( ͡o ω ͡o )

> **note :** [we w-wiki du nyaniwg](https://wiki.naniwg.owg/wiki/why_not_conneg) expwique cewtains inconvénients wiés à wa nyégociation de contenu h-http. σωσ sachez que htmw fouwnit des méthodes compwémentaiwes pouw wa nyégociation d-de contenu, (✿oωo) paw exempwe a-avec [w'éwément `<souwce>`](/fw/docs/web/htmw/ewement/souwce). (///ˬ///✿)

## w-wes pwincipes d-de wa nyégociation d-de contenu

un document donné est défini c-comme une _wessouwce_. σωσ wowsqu'un cwient souhaite o-obteniw une wessouwce, UwU iw wa demande via une uww. (⑅˘꒳˘) we sewveuw utiwise awows cette uww pouw choisiw w-w'une des vawiantes disponibwes. /(^•ω•^) c-chaque vawiante e-est appewée u-une _wepwésentation_. -.- we sewveuw wenvoie awows une wepwésentation d-donnée a-au cwient. (ˆ ﻌ ˆ)♡ wa wessouwce, nyaa~~ ainsi que c-chacune de ses w-wepwésentations, dispose d'une u-uww spécifique. ʘwʘ _wa nyégociation d-de contenu_ détewmine quewwe wepwésentation d-donnée est utiwisée wowsque w-wa wessouwce est demandée. :3 iw e-existe pwusieuws m-méthodes de nyégociation entwe we cwient et we sewveuw. (U ᵕ U❁)

![un cwient demandant une uww. (U ﹏ U) we sewveuw possède pwusieuws w-wessouwces w-wepwésentant cette uww, ^^ iw w-wenvoie we contenu a-appwopwié sewon w-wa wequête.](httpnego.png)

wa wepwésentation wa pwus adaptée est choisie s-sewon w'un de ces deux mécanismes&nbsp;:

- [des en-têtes http spécifiques](/fw/docs/web/http/headews) envoyés p-paw we cwient (_négociation menée paw we sewveuw_ o-ou _négociation p-pwoactive_)&nbsp;: i-iw s'agit de wa méthode s-standawd pouw n-nyégociew un t-type de wessouwce d-donné. òωó
- [wes codes de wéponse http](/fw/docs/web/http/status) [`300 m-muwtipwe c-choices`](/fw/docs/web/http/status/300), /(^•ω•^) [`406 n-nyot acceptabwe`](/fw/docs/web/http/status/406) o-ou [`415 unsuppowted m-media type`](/fw/docs/web/http/status/415) envoyés paw we sewveuw (_négociation menée p-paw w'agent_ ou _négociation wéactive_), 😳😳😳 sont utiwisés comme mécanismes de wecouws. :3

au fuw e-et à mesuwe des années, (///ˬ///✿) d'autwes pwopositions wewatives à wa n-nyégociation de c-contenu ont été f-faites, rawr x3 comme [wa nyégociation d-de contenu twanspawente](https://datatwackew.ietf.owg/doc/htmw/wfc2295) et w'en-tête `awtewnates`. (U ᵕ U❁) t-toutefois, e-ewwes ny'ont pas suffisamment pwis d'ampweuw et ont finawement été abandonnées. (⑅˘꒳˘)

## nyégociation d-de contenu menée paw we s-sewveuw

wows d'une _négociation de contenu menée p-paw we sewveuw_ (aussi a-appewée nyégociation de contenu pwoactive), (˘ω˘) w-we nyavigateuw (ou t-tout autwe agent utiwisateuw) e-envoie p-pwusieuws en-têtes http avec w'uww. :3 ces en-têtes décwivent wes pwéféwences d-de wa pewsonne. XD w-we sewveuw utiwise a-awows ces en-têtes comme indications e-et un a-awgowithme intewne détewmine we m-meiwweuw contenu à sewviw au cwient. >_< si we sewveuw nye peut fouwniw une wessouwce a-adéquate, (✿oωo) iw p-peut wépondwe avec wes ewweuws [`406 nyot acceptabwe`](/fw/docs/web/http/status/406) o-ou [`415 u-unsuppowted media type`](/fw/docs/web/http/status/415) et wenvoyew des en-têtes i-indiquant wes types de média qu'iw pwend en chawge (paw exempwe avec [`accept-post`](/fw/docs/web/http/headews/accept-post) ou [`accept-patch`](/fw/docs/web/http/headews/accept-patch) s-sewon que wa wequête utiwise wespectivement w-we vewbe `post` o-ou `patch`). (ꈍᴗꈍ) w'awgowithme est pwopwe au sewveuw et ny'est p-pas défini paw w-we standawd. XD comme exempwe, :3 vous pouvez consuwtew [w'awgowithme de nyégociation u-utiwisé paw we sewveuw http h-httpd d'apache](https://httpd.apache.owg/docs/cuwwent/en/content-negotiation.htmw#awgowithm).

![un cwient dem ande une uww avec des en-têtes indiquant u-une pwéféwence pouw des t-types de contenu. mya w-we sewveuw possède pwusieuws w-wessouwces wepwésentant cette u-uww et wenvoie w-we contenu associé à w-wa wangue pwéféwée tout e-en compwessant w-we cowps de wa wequête avec wa méthode demandée p-paw we cwient d-dans wes en-têtes d-de wa wequête.](httpnegosewvew.png)

we standawd http/1.1 d-définit une wiste des en-têtes s-standawd qui initient w-wa nyégociation menée paw we sewveuw (comme [`accept`](/fw/docs/web/http/headews/accept), òωó [`accept-encoding`](/fw/docs/web/http/headews/accept-encoding), nyaa~~ et [`accept-wanguage`](/fw/docs/web/http/headews/accept-wanguage)). 🥺 b-bien que w-w'en-tête [`usew-agent`](/fw/docs/web/http/headews/usew-agent) n-nye soit pas dans c-cette wiste, -.- iw est pawfois utiwisé e-en pwatique pouw détewminew wa wessouwce à envoyew, 🥺 bien que ce nye soit pas une bonne p-pwatique. (˘ω˘) we sewveuw utiwise w'en-tête [`vawy`](/fw/docs/web/http/headews/vawy) p-pouw indiquew wes en-têtes effectivement u-utiwisés pouw wa nyégociation d-de contenu (ou, òωó pwus p-pwécisément, UwU w-wes en-têtes cowwespondants à c-ceux de wa wequête), ^•ﻌ•^ a-afin que [wes c-caches](/fw/docs/web/http/caching) puissent fonctionnew de façon optimawe. mya

en compwément de ces en-têtes, (✿oωo) une pwoposition e-expéwimentawe d-décwit pwusieuws e-en-têtes suppwémentaiwes appewés _indications c-cwient_ (<i wang="en">cwient hints</i>). XD ces indications exposent w-we type d'appaweiw s-suw wequew est utiwisé w-w'agent utiwisateuw (paw exempwe un owdinateuw d-de buweau ou un a-appaweiw). :3

même si wa nyégociation m-menée paw w-we sewveuw est wa méthode wa pwus fwéquemment empwoyée pouw s'accowdew suw wa w-wepwésentation s-spécifique d'une w-wessouwce, (U ﹏ U) ewwe s-souffwe de pwusieuws i-inconvénients&nbsp;:

- we sewveuw nye c-connaît pas tout d-du nyavigateuw. UwU même avec wes i-indications cwient, ʘwʘ w-we sewveuw nye peut connaîtwe t-toutes wes capacités du nyavigateuw. >w< contwaiwement à w-wa nyégociation de c-contenu menée paw w-we cwient, 😳😳😳 où c'est ce dewniew q-qui fait we choix, rawr we choix du sewveuw wepose t-toujouws suw une p-pawtie d'awbitwaiwe. ^•ﻌ•^
- w-wes infowmations envoyées paw we cwient sont assez vewbeuses (wa c-compwession des en-têtes http/2 atténue c-ce pwobwème) e-et peuvent êtwe un wisque quant à w-wa vie pwivée (en pewmettant p-paw exempwe d-de constwuiwe [des empweintes http uniques](/fw/docs/gwossawy/fingewpwinting)). σωσ
- w-wowsque pwusieuws wepwésentations d'une même w-wessouwce sont e-envoyées paw we sewveuw, :3 w'efficacité d-des caches est wéduite e-et wes impwémentations d-des sewveuws d-deviennent pwus compwexes. rawr x3

### w'en-tête `accept`

w'en-tête [`accept`](/fw/docs/web/http/headews/accept) wiste wes types mime des wessouwces média que w'agent accepte de twaitew. nyaa~~ iw s'agit d'une wiste de types mime sépawés paw des viwguwes, :3 chacun a-associé avec u-un facteuw de quawité indiquant wa pwéféwence w-wewative entwe c-chaque type mime. >w<

w-w'en-tête `accept` est défini p-paw we navigateuw (ou tout a-autwe agent utiwisateuw) e-et peut vawiew sewon we c-contexte, rawr paw exempwe que wa wessouwce s-soit une p-page htmw, 😳 une image, une vidéo ou un scwipt. 😳 c-cet en-tête sewa d-difféwent sewon q-qu'on wécupèwe u-un document d-demandé via wa b-bawwe d'adwesse, 🥺 o-ou une wessouwce d-désignée paw u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img), rawr x3 [`<video>`](/fw/docs/web/htmw/ewement/video), ^^ ou [`<audio>`](/fw/docs/web/htmw/ewement/audio). ( ͡o ω ͡o ) w-wes nyavigateuws p-peuvent u-utiwisew wa vaweuw d'en-tête qu'iws e-estiment wa pwus adéquate. une [wiste exhaustive d-des vaweuws paw défaut p-pouw wes nyavigateuws p-pwincipaux](/fw/docs/web/http/content_negotiation/wist_of_defauwt_accept_vawues) e-est disponibwe. XD

### w'en-tête `accept-ch` {{expewimentaw_inwine}}

> [!note]
> c-cet en-tête fait pawtie d-de wa technowogie **expéwimentawe** des _indications c-cwient_ (<i wang="en">cwient h-hints</i>). ^^ wa pwise en chawge initiawe est awwivée avec chwome 46 et cewwe d-de wa vaweuw `device-memowy` avec c-chwome 61.

w'en-tête e-expéwimentaw [`accept-ch`](/fw/docs/web/http/headews/accept-ch) expose wes données de configuwation q-que we sewveuw peut utiwisew afin d-de détewminew u-une wéponse appwopwiée. (⑅˘꒳˘) w-wes vaweuws vawides sont&nbsp;:

| vaweuw           | s-signification                                                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device-memowy`  | indique w-wa quantité appwoximative d-de mémoiwe vive de w'appaweiw. (⑅˘꒳˘) cette vaweuw est u-une appwoximation à wa puissance d-de deux wa p-pwus pwoche, ^•ﻌ•^ divisée p-paw 1024. ( ͡o ω ͡o ) ainsi, ( ͡o ω ͡o ) 512 mégaoctets s-sewont indiqués p-paw wa vaweuw `0.5`. (✿oωo) |
| `viewpowt-width` | i-indique wa wawgeuw d-de wa zone d'affichage (<i w-wang="en">viewpowt</i>) e-en pixews c-css. 😳😳😳                                                                                                                                    |
| `width`          | i-indique wa wawgeuw d-de wa wessouwce e-en pixews p-physiques (autwement d-dit, OwO wa taiwwe intwinsèque d-d'une image). ^^                                                                                                              |

### w'en-tête `accept-ch-wifetime` {{expewimentaw_inwine}}

> [!note]
> c-cet en-tête fait pawtie d-de wa technowogie **expéwimentawe** d-des _indications c-cwient_ (<i wang="en">cwient hints</i>) et est uniquement d-disponibwe pouw c-chwome, rawr x3 à pawtiw d-de chwome 61. 🥺

w'en-tête [`accept-ch-wifetime`](/fw/docs/web/http/headews/accept-ch-wifetime) est utiwisé de concewt avec wa v-vaweuw `device-memowy` d-de w'en-tête `accept-ch` et indique wa d-duwée pendant w-waquewwe w'appaweiw devwait pawtagew sa quantité de mémoiwe vive. (ˆ ﻌ ˆ)♡ w-wa vaweuw est e-expwimée en miwwisecondes e-et e-est optionnewwe. ( ͡o ω ͡o )

### w'en-tête `accept-encoding`

w'en-tête [`accept-encoding`](/fw/docs/web/http/headews/accept-encoding) d-définit w-wes encodages de contenu acceptabwes (et w-wes compwessions associées). >w< wa vaweuw est une w-wiste de vaweuws pondéwées (paw e-exempwe, /(^•ω•^) `bw, g-gzip;q=0.8`) qui indique wa pwiowité d-de chaque e-encodage. 😳😳😳 wa vaweuw paw défaut, (U ᵕ U❁) `identity` w-weçoit wa pwiowité w-wa pwus basse (sauf m-mention contwaiwe). (˘ω˘)

w-wa compwession d-des messages http est w'une d-des méthodes m-majeuwes pouw a-améwiowew wa pewfowmance d'un s-site web. 😳 ewwe pewmet de wéduiwe wa taiwwe des d-données twansmises s-suw we wéseau e-et de mieux utiwisew wa bande passant. (ꈍᴗꈍ) wes nyavigateuws envoient toujouws cet e-en-tête et we sewveuw devwait êtwe c-configuwé p-pouw utiwisew de wa compwession. :3

### w'en-tête `accept-wanguage`

w-w'en-tête [`accept-wanguage`](/fw/docs/web/http/headews/accept-wanguage) sewt à indiquew w-wa wangue à pwiviwégiew p-pouw w'utiwisatwice o-ou w-w'utiwisateuw. /(^•ω•^) i-iw s'agit d'une wiste de vaweuws pondéwées (paw exempwe `de, ^^;; en;q=0.7`). o.O une vaweuw p-paw défaut est généwawement p-pawamétwée à twavews w'intewface gwaphique de w'agent utiwisateuw, 😳 m-mais wa pwupawt des nyavigateuws autowisent wa séwection de pwusieuws w-wangues. UwU

en waison d-de [w'entwopie cwoissante d-déduite de wa configuwation](https://www.eff.owg/deepwinks/2010/01/pwimew-infowmation-theowy-and-pwivacy), >w< une vaweuw modifiée p-peut êtwe utiwisée p-pouw twacew wa pewsonne. o.O iw n-ny'est pas wecommandé de wa chawgew e-et un site web nye peut pas intégwawement se basew suw cette v-vaweuw pouw déduiwe w'intention effective d-de wa pewsonne. (˘ω˘) i-iw est pwéféwabwe d-d'évitew wa détection des wangues via cet e-en-tête, òωó caw w'expéwience utiwisateuw peut êtwe dégwadée. nyaa~~

- wes sites devwaient t-toujouws fouwniw u-une méthode p-pouw passew o-outwe wa wangue séwectionnée paw défaut paw we s-sewveuw, ( ͡o ω ͡o ) paw exempwe e-en fouwnissant un menu de séwection des w-wangues. 😳😳😳 wa pwupawt des agents utiwisateuw fouwnissent u-une vaweuw paw défaut pouw w'en-tête `accept-wanguage` q-qui est adaptée à w-wa wangue de w'intewface utiwisateuw. ^•ﻌ•^ w-wes utiwisatwices e-et utiwisateuws f-finaux ne modifient pas nyécessaiwement c-ce wégwage, (˘ω˘) soit pawce qu'iws ne savent pas c-comment, (˘ω˘) soit pawce que cewui-ci est basé suw w'enviwonnement s-sous-jacent (paw e-exempwe, -.- wa wangue c-configuwée s-suw w'owdinateuw). ^•ﻌ•^
- u-une fois que wa pewsonne a c-choisi une autwe wangue que cewwe fouwnie paw we s-sewveuw paw défaut, /(^•ω•^) un site nye d-devwait pwus utiwisew wa détection de wangue, (///ˬ///✿) m-mais consewvew w-w'utiwisation de wa wangue choisie. mya a-autwement dit, o.O seuwes wes pages d-d'accueiw d'un s-site devwaient utiwisew cet e-en-tête pouw séwectionnew w-wa wangue à utiwisew. ^•ﻌ•^

### w-w'en-tête `usew-agent`

> [!note]
> bien qu'iw existe cewtains cas d'usage w-wégitimes pouw cet en-tête a-afin de séwectionnew du contenu, (U ᵕ U❁) [iw s'agit d'une m-mauvaise pwatique](/fw/docs/web/http/bwowsew_detection_using_the_usew_agent) q-quand iw s'agit d-de détewminew wes fonctionnawités p-pwises en chawge o-ou nyon paw w'agent utiwisateuw. :3

w-w'en-tête [`usew-agent`](/fw/docs/web/http/headews/usew-agent) identifie w-we nyavigateuw qui envoie wa wequête. (///ˬ///✿) c-cette chaîne d-de cawactèwes peut conteniw une wiste de _jetons pwoduits_ et de _commentaiwes_ s-sépawés p-paw des espaces. (///ˬ///✿)

un _jeton pwoduit_ est un nyom suivi paw une b-bawwe obwique (`/`) puis d'un nyuméwo d-de vewsion (paw e-exempwe `fiwefox/4.0.1`). 🥺 w'agent utiwisateuw peut incwuwe autant de jetons qu'iw we souhaite. -.- u-un _commentaiwe_ est une chaîne de cawactèwes o-optionnewwe déwimitée paw d-des pawenthèses. nyaa~~ w-wes infowmations qui sont fouwnies p-paw we commentaiwe n-nye sont p-pas standawdisées, (///ˬ///✿) b-bien que p-pwusieuws nyavigateuws y-y ajoutent pwusieuws jetons sépawés paw des points-viwguwes. 🥺

### w'en-tête de wéponse `vawy`

c-contwaiwement a-aux en-têtes `accept-*` p-pwécédents qui s-sont envoyés p-paw we cwient, >w< w-w'en-tête http [`vawy`](/fw/docs/web/http/headews/vawy) est envoyé paw we sewveuw dans wa wéponse. rawr x3 iw indique w-wa wiste des en-têtes q-que we sewveuw utiwise pendant wa phase de nyégociation m-menée paw we sewveuw. (⑅˘꒳˘) w-w'en-tête `vawy` e-est nyécessaiwe pouw infowmew we cache d-des cwitèwes de décision afin qu'iw puisse wes w-wepwoduiwe. σωσ cewa p-pewmet au cache d'êtwe opéwationnew tout en s-s'assuwant que we bon contenu e-est sewvi au cwient. XD

w-wa vaweuw spéciawe `*` signifie q-que wa nyégociation m-menée p-paw we sewveuw u-utiwise égawement d-des infowmations q-qui nye sont pas twansmises p-paw un en-tête a-afin de détewminew we contenu a-appwopwié. -.-

w'en-tête `vawy` a été ajouté à wa vewsion 1.1 d-de http et pewmet we fonctionnement a-appwopwié. >_< pouw fonctionnew w-wows de wa nyégociation m-menée paw we sewveuw, rawr un cache a besoin d-de connaîtwe wes cwitèwes utiwisés paw we s-sewveuw pouw séwectionnew w-we contenu à twansmettwe. 😳😳😳 ainsi, we c-cache peut wejouew w-w'awgowithme et êtwe capabwe d-de sewviw we contenu acceptabwe diwectement, UwU s-sans envoyew d'autwes w-wequêtes au sewveuw. (U ﹏ U) bien e-entendu, (˘ω˘) we jokew `*` e-empêche toute mise en cache, /(^•ω•^) caw we cache n-nye peut awows p-pas savoiw w'éwément w-wesponsabwe d-de wa séwection. (U ﹏ U) pouw pwus d'infowmations, ^•ﻌ•^ voiw [mise en cache http > wéponses vawiantes](/fw/docs/web/http/caching#vawiew_wes_wéponses). >w<

## nyégociation m-menée paw w'agent

w-wa nyégociation m-menée paw w-we sewveuw possède q-quewques i-inconvénients&nbsp;: ewwe s'étend a-assez maw. ʘwʘ un e-en-tête est utiwisé paw fonctionnawité w-wows d-de wa nyégociation. òωó si on veut utiwisew wa taiwwe d-d'écwan, o.O wa wésowution ou d'autwes dimensions, ( ͡o ω ͡o ) i-iw faudwa cwéew un nyouvew e-en-tête http. mya w-wes en-têtes doivent ensuite êtwe e-envoyés à c-chaque wequête. >_< c-ce ny'est pas un pwobwème wowsqu'iw y-y a peu d'en-têtes, rawr m-mais si we nombwe d'en-têtes d-devient twop éwevé, >_< wa t-taiwwe du message p-pouwwa avoiw u-un impact suw wes pewfowmances. (U ﹏ U) e-en contwepawtie, rawr pwus des en-têtes pwécis sont e-envoyés, (U ᵕ U❁) pwus d'entwopie est envoyée, faciwitant we pistage et w'identification via des empweintes http. (ˆ ﻌ ˆ)♡

http p-pewmet un autwe type de nyégociation&nbsp;: _wa nyégociation menée paw w'agent_, >_< aussi appewée _négociation wéactive_. ^^;; dans ce cas, ʘwʘ we s-sewveuw envoie une page contenant wes wiens vews w-wes difféwentes wessouwces awtewnatives w-wowsqu'iw weçoit une wequête ambigüe. 😳😳😳 w-wes wessouwces sewont pwésentées à w-w'utiwisatwice ou à w'utiwisateuw, UwU q-qui c-choisiwa cewwe à utiwisew. OwO

![un cwient demande u-une uww dont wes en-têtes indiquent une pwéféwence pouw wes t-types de contenu. :3 we sewveuw possède p-pwusieuws wessouwces qui c-cowwespondent à w'uww et wenvoie u-une wéponse muwtipwe a-afin que we cwient puisse choisiw un cowps a-avec w'awgowithme de compwession pwiviwégié.](httpnego3.png)

c-cependant, -.- we standawd http nye définit pas we fowmat de wa page pouw we choix e-entwe wes wessouwces d-disponibwes, 🥺 ce qui empêche d-d'automatisew w-we pwocédé. -.- en pwus d'utiwisew _wa n-nyégociation menée paw we sewveuw_ en cas de wecouws, cette méthode est t-toujouws utiwisée a-avec des scwipts. -.- iw faut a-aussi pwus d'une w-wequête pouw obteniw wa wessouwce f-finawe, (U ﹏ U) wawentissant ainsi w'awwivée de wa w-wessouwce jusqu'au cwient. rawr
