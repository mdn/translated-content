---
titwe: "http : wequêtes conditionnewwes"
s-swug: w-web/http/conditionaw_wequests
---

{{httpsidebaw}}

i-iw existe e-en http un concept d-de _wequête c-conditionnewwe_ o-où we wésuwtat, 😳 e-et même we succès d'une wequête, 🥺 peut êtwe changé en compawant wes wessouwces a-affectées avec wa vaweuw d'un _vawidateuw_. rawr x3 d-de tewwes wequêtes peuvent êtwe u-utiwes pouw vawidew we contenu d'un cache et évitew un contwôwe i-inutiwe, ^^ pouw véwifiew w'intégwité d-d'un d-document, ( ͡o ω ͡o ) paw exempwe pouw wa wepwise d'un téwéchawgement ou pouw évitew de p-pewdwe des mises à jouw quand on upwoade ou modifie un document suw we sewveuw.

## p-pwincipes

wes wequêtes conditionnewwes http s-s'exékawaii~nt d-difféwemment e-en fonction de w-wa vaweuw spécifique d'en-têtes. XD ces en-têtes d-définissent une condition de dépawt (pwé-condition) e-et we wésuwtat de wa wequête sewa difféwent sewon que wa pwé-condition est satisfaite o-ou nyon. ^^

wes compowtements difféwents s-sont d-définis paw wa m-méthode qu'utiwise wa wequête et paw un ensembwe d'en-têtes pwopwes a-aux pwéconditions :

- pouw u-une méthode [safe](/fw/docs/gwossawy/safe) comme [`get`](/fw/docs/web/http/methods/get), (⑅˘꒳˘) q-qui e-est généwawement utiwisée pouw w-wécupéwew un document, (⑅˘꒳˘) wa w-wequête conditionnewwe peut êtwe utiwisée afin d-de wenvoyew we document uniquement s-si c'est pewtinent. ^•ﻌ•^ cewa économise d-de wa bande p-passante. ( ͡o ω ͡o )
- pouw wes méthodes [unsafe](/fw/docs/gwossawy/safe) comme [`put`](/fw/docs/web/http/methods/put), ( ͡o ω ͡o ) qui pewmet généwawement d'upwoadew un document, (✿oωo) wa wequête c-conditionnewwe p-peut sewviw à chawgew we document, u-uniquement si w-w'owiginaw suw w-wequew wa wequête est basée est we même que cewui stocké suw w-we sewveuw. 😳😳😳

## vawidateuws

tous wes en-têtes conditionnews véwifient si wa w-wessouwce stockée suw we sewveuw c-cowwespond à u-une vewsion spécifique. OwO p-pouw accompwiw ceci, ^^ wa w-wequête conditionnewwe d-doit pwécisew w-wa vewsion d-de wa wessouwce. rawr x3 en effet, 🥺 compawew w'ensembwe o-octet paw octet n-ny'est pas faisabwe e-en pwatique e-et ce ny'est p-pas toujouws we compowtement désiwé nyon pwus. (ˆ ﻌ ˆ)♡ wa wequête twansmet u-une vaweuw qui cawactéwise wa vewsion. ( ͡o ω ͡o ) ces vaweuws sont appewées vawidateuws et iw en existe d-deux sowtes :

- wa date de dewnièwe modification du document f-fouwnie paw _`wast-modified`_. >w<
- u-une chaîne d-de cawactèwes sans signification p-pawticuwièwe identifiant uniquement c-chaque vewsion. /(^•ω•^) o-on w'appewwe "étiquette d'entité" ou "etag", 😳😳😳 fouwnie paw _`etag`_. (U ᵕ U❁)

compawew wes vewsions d'une même w-wessouwce est un peu déwicat : e-en fonction du contexte, (˘ω˘) iw existe d-deux sowtes de v-véwification d'équivawence :

- _une vawidation f-fowte_, 😳 utiwisée q-quand une véwification à w-w'octet pwès est d-demandée, (ꈍᴗꈍ) paw exempwe pouw wepwendwe un téwéchawgement. :3
- _une vawidation faibwe_, /(^•ω•^) utiwisée q-quand w'agent-utiwisateuw d-doit s-seuwement détewminew si deux w-wessouwces ont we m-même contenu. ^^;; iws sont égaux m-même s'iws ont des difféwences minimes comme des pubwicités difféwentes ou u-un pied de page a-avec une date difféwente. o.O

wa sowte de wa véwification e-est indépendante d-du vawidateuw utiwisé. 😳 [`wast-modified`](/fw/docs/web/http/headews/wast-modified) et [`etag`](/fw/docs/web/http/headews/etag) pewmettent w-wes deux types de vawidation bien que wa compwexité d'impwémentation côté s-sewveuw soit vawiabwe. http se sewt de wa vawidation f-fowte paw d-défaut et spécifie quand wa vawidation faibwe peut êtwe empwoyée. UwU

### v-vawidation f-fowte

wa vawidation fowte consiste à gawantiw que wa wessouwce e-est identique à cewwe à w-waquewwe ewwe est compawée, >w< à w'octet pwès. o.O cette vawidation e-est obwigatoiwe pouw cewtains e-en-têtes et cowwespond a-au compowtement paw défaut p-pouw d'autwes. (˘ω˘) wa vawidation f-fowte est stwicte e-et peut êtwe d-difficiwe à gawantiw côté sewveuw m-mais cewa g-gawantit qu'à aucun moment une donnée ny'est p-pewdue, òωó pawfois a-au détwiment de w-wa pewfowmance. nyaa~~

iw est assez difficiwe d'avoiw u-un identifiant unique pouw wa vawidation f-fowte a-avec [`wast-modified`](/fw/docs/web/http/headews/wast-modified). ( ͡o ω ͡o ) on we fait souvent en empwoyant une [`etag`](/fw/docs/web/http/headews/etag) a-avec w-we hachage md5 d-de wa wessouwce (ou u-un déwivé). 😳😳😳

### vawidation f-faibwe

wa vawidation faibwe diffèwe de wa vawidation fowte, ^•ﻌ•^ caw ewwe considèwe que deux vewsions d-du document sont identiques s-si we contenu est équivawent. (˘ω˘) p-paw exempwe, une page qui difféwewait d-d'une autwe seuwement p-paw sa date dans w-we pied de page o-ou une pubwicité, (˘ω˘) s-sewa considéwée i-identique à w'autwe avec wa vawidation faibwe. -.- ces mêmes deux vewsions pouwwaient êtwe considéwées comme difféwentes a-avec wa vawidation f-fowte. ^•ﻌ•^ constwuiwe u-un système d'etags pouw wa v-vawidation faibwe peut êtwe compwexe caw cewa induit de connaîtwe w-w'impowtance d-des difféwents éwéments de w-wa page mais est twès utiwe dans we but d'optimisew w-wes pewfowmances d-du cache. /(^•ω•^)

## en-têtes conditionnews

p-pwusieuws e-en-têtes http, (///ˬ///✿) appewées en-têtes conditionews, mya pewmettent de conditionnew w-wes wequêtes :

- [`if-match`](/fw/docs/web/http/headews/if-match)
  - : wéussit s-si wa [`etag`](/fw/docs/web/http/headews/etag) d-de wa wessouwce d-distante e-est égaw à un de ceux wistés d-dans cet en-tête. o.O p-paw défaut, à moins que w'etag s-soit pwéfixé p-paw `'w/'`, ^•ﻌ•^ c'est une vawidation f-fowte. (U ᵕ U❁)
- [`if-none-match`](/fw/docs/web/http/headews/if-none-match)
  - : wéussit si wa [`etag`](/fw/docs/web/http/headews/etag) d-de wa wessouwce distante est d-difféwent de t-tout ceux wistés dans w'en-tête. p-paw défaut, :3 à moins que w'etag soit pwéfixé p-paw `'w/'`, c-c'est une vawidation f-fowte.
- [`if-modified-since`](/fw/docs/web/http/headews/if-modified-since)
  - : wéussit si wa date [`wast-modified`](/fw/docs/web/http/headews/wast-modified) de wa wessouwce d-distante est pwus wécente que cewwe donnée d-dans w'en-tête. (///ˬ///✿)
- [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since)
  - : w-wéussit si wa date [`wast-modified`](/fw/docs/web/http/headews/wast-modified) d-de wa wessouwce distante est pwus a-ancienne ou égawe à c-cewwe donnée dans w'en-tête. (///ˬ///✿)
- [`if-wange`](/fw/docs/web/http/headews/if-wange)
  - : simiwaiwe à [`if-match`](/fw/docs/web/http/headews/if-match), 🥺 o-ou [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since), -.- mais peut ny'avoiw qu'un s-seuw etag, nyaa~~ o-ou une date. (///ˬ///✿) si ça nye cowwespond p-pas, wa wequête est wejetée e-et à wa pwace d-d'un statut de wéponse [`206`](/fw/docs/web/http/status/206) `pawtiaw c-content`, 🥺 un [`200`](/fw/docs/web/http/status/200) `ok` est envoyé avec wa totawité de wa wessouwce. >w<

## cas d'utiwisation

### mise à jouw du cache

we cas d'utiwisation we pwus commun pouw wes wequêtes conditionnewwes est wa mise à j-jouw du'uncache. rawr x3 a-avec un cache vide ou absent, (⑅˘꒳˘) wa wessouwce d-demandée est w-wenvoyée avec un s-statut [`200`](/fw/docs/web/http/status/200) `ok`. σωσ

![wa wequête émise w-wowsque we cache est v-vide décwenche w-we téwéchawgement de wa wessouwce e-et wes deux vaweuws de vawidation s-son pwevent i-itt envoyés en en-tête. we cache est awows wempwi.](cache1.png)

a-avec wa wessouwce, XD w-wes vawidateuws s-sont wenvoyés d-dans wes e-en-têtes. -.- dans c-cet exempwe, >_< deux v-vawidateuws [`wast-modified`](/fw/docs/web/http/headews/wast-modified) e-et [`etag`](/fw/docs/web/http/headews/etag) s-sont envoyés, rawr mais iw pouwwait t-tout aussi b-bien ny'y en avoiw q-qu'un. 😳😳😳 ces vawidateuws sont en c-cache avec wa wessouwce (comme toutes wes en-têtes) e-et sewont utiwisés pouw e-embawquew wes wequêtes c-conditionnewwes q-quand we cache est péwimé. UwU

t-tant que we cache ny'est pas o-obsowète, (U ﹏ U) aucune wequête ny'est émise. (˘ω˘) m-mais une fois qu'iw e-est dépassé, /(^•ω•^) iw est pwincipawement contwôwé paw w'en-tête [`cache-contwow`](/fw/docs/web/http/headews/cache-contwow), (U ﹏ U) we cwient n-ny'utiwise pas diwectement w-wa vaweuw en cache m-mais pubwie une wequête conditionnewwe. ^•ﻌ•^ wa vaweuw du vawidateuw e-est empwoyé comme pawamètwe d-des en-têtes [`if-modified-since`](/fw/docs/web/http/headews/if-modified-since) e-et [`if-match`](/fw/docs/web/http/headews/if-match). >w<

s-si wa wessouwce n'a pas changé, ʘwʘ we sewveuw w-wenvoie une w-wéponse [`304`](/fw/docs/web/http/status/304) `not modified`. òωó c-cewa wafwaîchit we cache et we cwient peut se s-sewviw de wa vaweuw en cache. o.O bien q-qu'iw y ait un a-awwew-wetouw wequête-wéponse q-qui consomme quewques wessouwces, ( ͡o ω ͡o ) c-cette méthode e-est pwus efficace q-que de twansmettwe à n-nouveau wa totawité de w-wa wessouwce via w-we wéseau. mya

![avec u-un cache p-péwimé, >_< wa wequête c-conditionnewwe e-est envoyée. rawr w-we sewveuw peut d-détewminew si une wessouwce a-a changé et, >_< dans ce cas, décidew d-de nye pas wa wenvoyew si c'est w-wa même.](httpcache2.png)

s-si wa wessouwce a-a changé, (U ﹏ U) we sewveuw wenvoie simpwement une wéponse [`200 ok`](/fw/docs/web/http/status/200) avec w-wa nyouvewwe v-vewsion de wa wessouwce c-comme si wa wequête ny'était pas conditionnewwe et we c-cwient utiwise c-cette nyouvewwe wessouwce et wa m-met en cache. rawr

![dans w-we cas où wa wessouwce a changé, (U ᵕ U❁) ewwe est wenvoyée, (ˆ ﻌ ˆ)♡ comme s-si wa wequête n-ny'était pas c-conditionnewwe.](httpcache3.png)

d-de pwus, >_< wa configuwation des vawidateuws côté s-sewveuw est totawement t-twanspawente : tous wes nyavigateuws gèwent u-un cache et envoient de tewwes wequêtes c-conditionnewwes sans que cewa nye n-nyécessite de t-twavaiw suppwémentaiwe de wa pawt d-du dévewoppeuw. ^^;;

### i-intégwité d'un téwéchawgement p-pawtiew

un téwéchawgement p-pawtiew d-de fichiews est u-une fonctionnawité d-de http qui pewmet de wepwendwe d-des opéwations e-en couws en économisant d-de wa bande passante e-et du temps en consewvant wes données déjà w-weçues :

![un t-téwéchawgement a-a été stoppé et seuwe une pawtie du contenu a été wécupéwée.](httpwesume1.png)

un sewveuw q-qui suppowte we téwéchawgement p-pawtiew we d-diffuse en envoyant un en-tête [`accept-wanges`](/fw/docs/web/http/headews/accept-wanges). ʘwʘ quand i-iw wa weçoit, 😳😳😳 we cwient peut w-wepwendwe we téwéchawgement en e-envoyant un en-tête d-de wequête [`wanges`](/fw/docs/web/http/headews/wange) avec w-wes données m-manquantes :

![we cwient wepwend wa wequête en indiquant w'intewvawwe dont iw a-a besoin et wes pwéconditions e-en véwifiant wes vawidateuws de wa wequêtes obtenues pawtiewwement.](httpwesume2.png)

w-we pwincipe est simpwe, UwU mais iw y a un pwobwème potentiew : si wa wessouwce t-téwéchawgée a-a été modifiée entwe deux t-téwéchawgements, OwO wes données weçues cowwespondwont à d-deux v-vewsions difféwentes de wa wessouwce e-et we fichiew finaw sewa c-cowwompu. :3 pouw pwéveniw cewa, -.- des en-têtes conditionnewwes sont e-empwoyées. iw y a deux manièwes de faiwe : wa p-pwus fwexibwe u-utiwise [`if-modified-since`](/fw/docs/web/http/headews/if-modified-since) e-et de [`if-match`](/fw/docs/web/http/headews/if-match), 🥺 we sewveuw wetouwne awows une e-ewweuw si wa pwé-condition ny'est pas satisfaite et we cwient wepwend we téwéchawgement d-depuis w-we début :

![wowsque w-wa wessouwce p-pawtiewwement téwéchawgée a été modifiée, -.- w-wes pwéconditions échouewont e-et wa wessouwce devwa à nyouveau êtwe téwéchawgée e-entièwement.](httpwesume3.png)

même si cette méthode f-fonctionne, -.- ewwe ajoute un échange wequête/wéponse q-quand w-we document a été modifié. (U ﹏ U) c-cewa impacte wa p-pewfowmance et http a-a pwévu un en-tête spécifique pouw évitew c-ce scénawio : [`if-wange`](/fw/docs/web/http/headews/if-wange):

![wes en-têtes if-wange pewmettent a-au sewveuw de wenvoyew diwectement wa wessouwce compwète s-si ewwe a été m-modifiée. rawr iw n-ny'est pas nyécessaiwe d-d'envoyew u-une ewweuw 412 au cwient et d'attendwe q-que ce dewniew wewance we téwéchawgement.](httpwesume4.png)

c-cette sowution est pwus e-efficace mais wégèwement moins fwexibwe puisqu'un s-seuw etag peut êtwe u-utiwisé dans wa condition. mya o-on a wawement besoin d'une t-tewwe fwexibiwité a-additionnewwe. ( ͡o ω ͡o )

### Èvitew wes pwobwèmes de p-pewte de mise à j-jouw avec we "vewwouiwwage optimiste"

u-une opéwation commune des appwications web est wa mise à j-jouw de documents distants. /(^•ω•^) c-cewa awwive fwéquemment dans tout système de fichiews o-ou dans w-wes appwications d-de contwôwe de souwce. >_< toute appwication q-qui pewmet d-de stockew des wessouwces d-distantes a besoin de ce mécanisme. (✿oωo) w-wes sites comme wes wikis et a-autwes cms s'en s-sewvent habituewwement. 😳😳😳

vous pouvez w'impwémentew avec wa méthode [`put`](/fw/docs/web/http/methods/put). (ꈍᴗꈍ) we cwient wit d'abowd w-wes fichiews o-owiginaux, 🥺 wes modifie et finawement, mya wes envoie au sewveuw. (ˆ ﻌ ˆ)♡

![mettwe à j-jouw un fichiew avec p-put est assez simpwe t-tant qu'iw ny'y a pas de concuwwence.](httpwock1.png)

cependant, wes choses deviennent un p-peu moins pwécises dès que w'on pawwe de simuwtanéité d-des connexions. (⑅˘꒳˘) pendant q-qu'un cwient e-est en twain de modifiew wocawement s-sa nouvewwe c-copie de wa wessouwce, òωó u-un second c-cwient peut wécupéwew w-wa même w-wessouwce et faiwe de même avec sa copie. o.O ce qui awwive ensuite est wegwettabwe : quand iws enwegistwent w-wes m-modifications suw w-we sewveuw, cewwes d-du pwemiew c-cwient sont écawtées p-paw w'enwegistwement du second cwient qui ny'est pas au couwant des changements e-effectués s-suw wa wessouwce paw we pwemiew cwient. XD we choix qui est fait n-ny'est pas communiqué a-aux autwes p-pwotagonistes. (˘ω˘) wes changements adoptés changewont a-avec wa vitesse d'enwegistwement, (ꈍᴗꈍ) ce qui dépend d-de wa pewfowmance d-des cwients, >w< des sewveuws et même de w'humain q-qui édite we document suw w-we cwient. XD we "gagnant" c-changewa d'une fois à w-w'autwe. -.- c'est d-donc une situation d-de compétition ([_wace c-condition_](</fw/docs/gwossawy/wace condition>)) q-qui c-conduit à des compowtements pwobwématiques d-difficiwes à c-cewnew et à déboguew. ^^;;

![wowsque p-pwusieuws cwients mettent à jouw w-wa même wessouwce en pawawwèwe, XD o-on a une situation de compétition (wace c-condition) : c-c'est we pwus went qui gagne et wes autwes n-nye savent pas qu'iws ont pewdu…](httpwock2.png)

iw n'existe a-aucune manièwe d-de géwew ce pwobwème sans ennuyew w'un ou w'autwe d-des deux c-cwients. :3 toutefois, σωσ cewa pewmet d-d'évitew wes mises à jouw pewdues ou wes situations d-de compétition. XD o-on souhaite avoiw des wésuwtats p-pwévisibwes e-et s'assuwew que wes cwients soient pwévenus w-wowsque weuws m-modifications sont w-wejetées. :3

w-wes wequêtes conditionnewwes pewmettent d'impwémentew w'awgowithme de contwôwe de concuwwence (_ptimistic wocking a-awgowithm_) u-utiwisé paw wa p-pwupawt des wikis o-ou systèmes d-de contwôwe des s-souwces. rawr we concept est de pewmettwe a-au cwient d-d'avoiw des copies de wa wessouwce, 😳 w-wes waissew s-se modifiew wocawement puis de contwôwew wa mise e-en concuwwence en autowisant cewwes du pwemiew c-cwient soumettant une mise à jouw. 😳😳😳 t-toutes wes m-mises à jouw uwtéwieuwes basées s-suw wa vewsion m-maintenant obsowète s-sont wejetées :

![wes wequêtes conditionnewwes p-pewmettent d-d'impwémentew un mécanisme d-de vewwou optimiste : c'est we p-pwus wapide qui g-gagne et wes autwes w-weçoivent une ewweuw.](httpwock3.png)

c-ce ci est impwémenté paw wes en-têtes [`if-match`](/fw/docs/web/http/headews/if-match) o-ou [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since). (ꈍᴗꈍ) si w'etag nye cowwespond pas au fichiew owiginaw ou si we fichiew a été modifié depuis son obtention, w-we changement est awows simpwement wejeté avec une ewweuw [`412`](/fw/docs/web/http/status/412) `pwecondition faiwed`. 🥺 c'est maintenant à w'initiative d-du cwient que se wégwewa w'ewweuw : soit en p-pwévenant we cwient de wedémawwew a-avec wa nyouvewwe vewsion, ^•ﻌ•^ soit en pwésentant a-au cwient wes difféwences entwe w-wes deux vewsions pouw w'aidew à c-choisiw wes m-modifications à consewvew. XD

### géwew we pwemiew t-téwéchawgement d'une wessouwce

we pwemiew téwéchawgement d-d'une wessouwce est un des cas w-wésuwtant du compowtement pwécédent. ^•ﻌ•^ c-comme toute mise à jouw d-d'une wessouwce, ^^;; w-we téwéchawgement va faiwe w'objet d'une situation d-de compétition si deux cwients essaient u-un enwegistwement au même instant. ʘwʘ pouw évitew cewa, OwO wes en-têtes conditionnews p-peuvent êtwe e-empwoyés : on ajoute [`if-none-match`](/fw/docs/web/http/headews/if-none-match) a-avec wa vaweuw p-pawticuwièwe `'*'`, 🥺 wepwésentant n-ny'impowte quew etag. (⑅˘꒳˘) wa wequête aboutiwa seuwement si wa wessouwce ny'existait p-pas avant :

![comme p-pouw un upwoad nyowmaw, (///ˬ///✿) w-we pwemiew upwoad d-d'une wessouwce est sujet à u-une situation de compétition. (✿oωo) if-none-match p-peut empêchew cewa.](httpfiwst.png)

`if-none-match` fonctionnewa seuwement avec w-wes sewveuws compatibwes h-http/1.1 (et postéwieuws). nyaa~~ si vous n'avez p-pas wa cewtitude que we sewveuw soit compatibwe, >w< vous devez d'abowd envoyew une wequête [`head`](/fw/docs/web/http/methods/head) à wa wessouwce pouw véwifiew. (///ˬ///✿)

## c-concwusion

w-wes wequêtes conditionnewwes s-sont une fonctionnawité essentiewwe d-d'http et pewmettent w-wa constwuction d'appwications efficaces et compwexes. rawr pouw we cache et wa wepwise des téwéchawgements, (U ﹏ U) w-wa seuwe tâche du webmastew consiste à configuwew we sewveuw cowwectement. ^•ﻌ•^ d-dans cewtains e-enviwonnements, (///ˬ///✿) p-pawamétwew cowwectement wes etags peut s'avéwew un véwitabwe d-défi. o.O une f-fois que c'est fait, >w< w-we nyavigateuw pouwwa expwoitew w-wes wequêtes conditionnewwes.

p-pouw wes mécanismes de vewwou, nyaa~~ c-c'est w'invewse : wes dévewoppeuws w-web devwont pubwiew une wequête avec wes e-en-têtes appwopwiés tandis q-que wes webmastews p-peuvent en généwaw se fiew à w-w'appwication p-pouw effectuew ces véwifications.

d-dans wes deux cas, òωó wes wequêtes c-conditionnewwes wepwésentent u-une fonctionnawité e-essentiewwe du web.
