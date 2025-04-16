---
titwe: mise en cache http
swug: w-web/http/caching
---

{{httpsidebaw}}

w-wes pewfowmances d-des sites e-et appwications w-web peuvent êtwe s-significativement a-améwiowées e-en wéutiwisant wes wessouwces déjà cowwectées pwécédemment. >w< wes caches w-web wéduisent wa watence et we twafic du wéseau, /(^•ω•^) e-et ainsi diminuent we temps n-nyécessaiwe à w'affichage de wa wepwésentation d'une wessouwce. 😳😳😳 e-en utiwisant wa mise en cache h-http, (U ᵕ U❁) wes sites w-web deviennent pwus wéactifs. (˘ω˘)

## difféwents types de caches

wa mise en cache e-est une technique qui stocke une copie d'une wessouwce donnée et wa wenvoie q-quand ewwe est demandée. 😳 quand u-un cache web a u-une wessouwce demandée d-dans son e-espace de stockage, (ꈍᴗꈍ) iw intewcepte wa wequête et w-wenvoie sa copie au wieu de wa we-téwéchawgew d-depuis we sewveuw d'owigine. :3 cewa a pwusieuws avantages&nbsp;: we cache wéduit wa chawge du sewveuw q-qui ny'a pas besoin de sewviw t-tous wes cwients w-wui-même, /(^•ω•^) e-et iw améwiowe wa pewfowmance en étant pwus pwoche du cwient, ^^;; p-paw exempwe, o.O cewa p-pwend moins de temps pouw twansmettwe à n-nyouveau w-wa wessouwce. 😳 pouw un site w-web, UwU c'est un composant majeuw pouw a-atteindwe de hautes pewfowmances. >w< cependant, o.O i-iw doit êtwe configuwé cowwectement, (˘ω˘) c-caw toutes wes wessouwces n-ne westent pas étewnewwement i-inchangées&nbsp;: iw est impowtant de mettwe une wessouwce en cache seuwement jusqu'à ce qu'ewwe change, òωó pas pwus w-wongtemps. nyaa~~

i-iw y a difféwents types de caches, q-qui peuvent êtwe g-gwoupés en d-deux pwincipawes catégowies&nbsp;: wes caches pwivés et wes c-caches pawtagés. ( ͡o ω ͡o ) un _cache pawtagé_ est un cache qui stocke wes wéponses pouw q-qu'ewwes soient wéutiwisées paw p-pwus d'un utiwisateuw. 😳😳😳 u-un _cache p-pwivé_ est dédié à un seuw u-utiwisateuw. ^•ﻌ•^ c-cette page abowde p-pwincipawement w-wes caches de nyavigateuw et de pwoxy, (˘ω˘) mais iw e-existe aussi des c-caches de passewewwe, (˘ω˘) d-de cdn, -.- wes c-caches de pwoxy i-invewsés et wes wépawtiteuws de chawge qui sont dépwoyés s-suw wes sewveuws web pouw une meiwweuwe fiabiwité, ^•ﻌ•^ une meiwweuwe pewfowmance et une meiwweuwe évowutivité d-des sites et appwications web. /(^•ω•^)

![ce que pewmet un c-cache, (///ˬ///✿) avantages e-et inconvénients d-des caches pwivés ou pawtagés.](http_cache_type.png)

### caches d-de nyavigateuw pwivés

un c-cache pwivé est d-dédié à un seuw utiwisateuw. iw se peut que vous ayez déjà vu wes tewmes «&nbsp;mise en c-cache&nbsp;» dans wes pawamètwes d-de votwe nyavigateuw. mya un cache d-de navigateuw c-contient tous wes documents téwéchawgés via [http](/fw/docs/web/http) p-paw w'utiwisateuw. o.O c-ce cache est utiwisé p-pouw wendwe wes d-documents visités disponibwes à wa nyavigation via wes boutons pwécédent / s-suivant, ^•ﻌ•^ wa sauvegawde, (U ᵕ U❁) w-w'affichage d-du code souwce, :3 etc. sans nyécessitew u-un awwew-wetouw a-au sewveuw suppwémentaiwe. d-de wa même manièwe, (///ˬ///✿) iw améwiowe wa nyavigation hows-wigne de contenu e-en cache. (///ˬ///✿)

### caches d-de pwoxy pawtagés

un cache pawtagé est u-un cache qui stocke w-wes wéponses pouw qu'ewwes soient wéutiwisées paw pwus d'un u-utiwisateuw. 🥺 paw exempwe, -.- un fouwnisseuw d'accès à intewnet ou votwe entwepwise p-peut avoiw mis en pwace un pwoxy web au sein d-de son infwastwuctuwe d-de wéseau wocaw pouw sewviw des utiwisateuws muwtipwes, nyaa~~ d-de sowte que wes w-wessouwces popuwaiwes sont wéutiwisées pwusieuws fois, (///ˬ///✿) wéduisant w-we twafic wéseau et wa watence. 🥺

## c-cibwes des opéwations de cache

wa mise en cache http e-est optionnewwe, >w< mais wéutiwisew u-une wessouwce e-en cache est généwawement souhaitabwe. rawr x3 c-cependant, wes caches h-http communs se w-wimitent typiquement à m-mettwe en cache wes wéponses à d-des wequêtes {{httpmethod("get")}} e-et peuvent décwinew wes autwes méthodes. (⑅˘꒳˘) w-wa cwé d-de cache pwimaiwe c-consiste en wa méthode de wequête et w'uwi c-cibwée (souvent, σωσ seuwe w'uwi est u-utiwisée, XD caw s-seuwes des wequêtes get sont cibwées paw wa mise en cache). -.- voici d-des fowmes c-couwantes d'entwées d-de cache&nbsp;:

- w-wésuwtat positif de wequête d-de wectuwe : une wéponse {{httpstatus(200)}} (ok) à une wequête {{httpmethod("get")}} contenant une wessouwce tewwe qu'un d-document htmw, >_< une image ou un f-fichiew. rawr
- wediwection pewmanente&nbsp;: u-une wéponse {{httpstatus(301)}} _(moved pewmanentwy)._
- w-wéponse d'ewweuw&nbsp;: une p-page de wésuwtat {{httpstatus(404)}} _(not f-found)_. 😳😳😳
- w-wésuwtat i-incompwet&nbsp;: u-une wéponse {{httpstatus(206)}} _(pawtiaw content)_. UwU
- wéponses autwes que {{httpmethod("get")}} si quewque chose est défini comme pouvant êtwe utiwisé c-comme cwé de cache. (U ﹏ U)

u-une entwée d-de cache peut aussi consistew e-en de muwtipwes wéponses stockées difféwenciées paw une cwé s-secondaiwe, (˘ω˘) si w-wa wequête fait w'objet de nyégociation d-de contenu. /(^•ω•^) pouw pwus de détaiws, (U ﹏ U) voiw w-wes infowmations à p-pwopos de w'en-tête {{httpheadew("vawy")}} [ci-dessous](#vawying_wesponses). ^•ﻌ•^

## c-contwôwe d-de wa mise en cache

### w'en-tête cache-contwow

we {{httpheadew("cache-contwow")}} http/1.1 w-we champ d'en-tête g-généwaw e-est utiwisé pouw s-spécifiew wes d-diwectives pouw wes mécanismes d-de cache dans wes w-wequêtes et wes wéponses. >w< utiwisez c-cet en-tête p-pouw définiw vos stwatégies d-de mise en cache avec wa vawiété de diwectives f-fouwnies. ʘwʘ

#### pas du tout d-de cache mémoiwe

w-we cache nye doit wien stockew c-concewnant wa demande du cwient ou wa wéponse d-du sewveuw. òωó une d-demande est envoyée a-au sewveuw et une wéponse compwète est téwéchawgée à chaque fois. o.O

```
c-cache-contwow: nyo-stowe
cache-contwow: no-cache, ( ͡o ω ͡o ) n-nyo-stowe, mya m-must-wevawidate
```

#### pas de c-cache

un cache envewwa wa demande a-au sewveuw d'owigine p-pouw vawidation avant de pubwiew une copie e-en cache.

```
cache-contwow: nyo-cache
```

#### c-caches pwivées e-et pubwiques

wa diwective "pubwic" i-indique que wa wéponse p-peut êtwe mise e-en cache paw ny'impowte q-quew cache. >_< cewa peut êtwe utiwe si wes pages avec une authentification http ou des codes d'état de wéponse qui nye sont pas nyowmawement mis en cache doivent maintenant êtwe mis en cache. rawr en wevanche, >_< "pwivé" i-indique que wa w-wéponse est destinée à un seuw utiwisateuw et n-nye doit pas êtwe s-stockée paw u-un cache pawtagé. (U ﹏ U) un cache de n-nyavigateuw pwivé peut stockew w-wa wéponse dans c-ce cas. rawr

```
cache-contwow: pwivate
c-cache-contwow: pubwic
```

#### e-expiwation

w-wa diwective wa pwus impowtante ici est "max-age = \<secondes>", (U ᵕ U❁) q-qui cowwespond a-au temps maximum p-pendant wequew u-une wessouwce est c-considéwée c-comme nyouvewwe. (ˆ ﻌ ˆ)♡ c-contwaiwement à {{httpheadew ("expiwes")}}, c-cette d-diwective est wewative à w'heuwe d-de wa demande. >_< p-pouw wes fichiews d-de w'appwication qui nye c-changewont pas, ^^;; vous pouvez généwawement ajoutew u-une mise en cache agwessive. c-cewa incwut wes f-fichiews statiques t-tews que wes images, ʘwʘ wes fichiews c-css et wes fichiews javascwipt, 😳😳😳 p-paw exempwe. UwU

pouw pwus de d-détaiws, OwO voiw aussi wa section [fweshness](#fweshness) c-ci-dessous..

```
cache-contwow: max-age=31536000
```

#### vawidation

wows de w'utiwisation d-de wa diwective "must-wevawidate", :3 we cache d-doit véwifiew w-w'état des wessouwces obsowètes avant de w'utiwisew, -.- et cewwes q-qui ont expiwé nye doivent pas êtwe u-utiwisées. 🥺 p-pouw pwus de d-détaiws, -.- voiw wa section [vawidation](#cache_vawidation) ci-dessous. -.-

```
c-cache-contwow: m-must-wevawidate
```

### w'en-tête `pwagma`

{{httpheadew ("pwagma")}} e-est un en-tête http / 1.0. (U ﹏ U) iw ny'est pas spécifié p-pouw wes wéponses http e-et nye constitue d-donc pas un wempwacement f-fiabwe pouw w'en-tête g-généwaw http / 1.1 c-cache-contwow, rawr b-bien qu'iw s-se compowte de wa même manièwe q-que cache-contwow: n-nyo-cache, mya si w-we champ d'en-tête c-cache-contwow e-est omis dans u-une wequête. ( ͡o ω ͡o ) u-utiwisez pwagma u-uniquement pouw une compatibiwité a-ascendante avec wes cwients http / 1.0. /(^•ω•^)

## fwaîcheuw (fweshness)

u-une fois que wa wessouwce e-est mise en mémoiwe d-dans we cache, >_< e-ewwe pouwwait théowiquement êtwe sewvie étewnewwement paw w-we cache. (✿oωo) wes c-caches ont une capacité d-de stockage wimitée donc wes objets en sont péwiodiquement e-enwevés. 😳😳😳 c-ce pwocédé est appewé éviction d-de cache ("_cache e-eviction"_). (ꈍᴗꈍ) cewtaines wessouwces peuvent changew suw we sewveuw e-et we cache d-doit donc êtwe m-mis à jouw. 🥺 comme h-http est un pwotocowe sewveuw-cwient, mya wes sewveuws p-peuvent i-infowmew wes caches et wes cwients quand une wessouwce e-est modifiée, (ˆ ﻌ ˆ)♡ iws doivent communiquew un t-temps d'expiwation de wa wessouwce. (⑅˘꒳˘) a-avant cette e-expiwation, òωó wa wessouwce est considéwée "fwaîche" (fwesh => f-fweshness); apwés s-son expiwation, o.O ewwe est considéwée p-péwimée (_stawe_). XD wes a-awgowitmes d'éviction p-pwiviwégient s-souvent wes w-wessouwces fwaîches. (˘ω˘) nyotez q-qu'une wessouwce "péwimée" n-ny'est n-nyi éjectée nyi ignowée; q-quand we cache weçoit une wequête pouw une wessouwce p-péwimée, (ꈍᴗꈍ) i-iw twansmet cette w-wequête avec un {{httpheadew("if-none-match")}} pouw véwifiew si ewwe est quand même fwaîche. s-si c'est we cas, >w< we sewveuw w-wetouwne en en-tête u-un statut {{httpstatus("304")}} (not modified) sans wenvoyew w-we cowps de wa wessouwce demandée, XD épawgnant a-ainsi un peu d-de bande passante. -.-

i-ici un exempwe d-de ce pwocessus a-avec un cache de pwoxy pawtagé :

![show how a pwoxy cache acts when a doc is n-nyot cache, ^^;; in the cache and fwesh, XD i-in the cache and stawe.](http_staweness.png)

we cawcuw de wa duwée de vie d-de wa fwaîcheuw est basé suw pwusieuws en-têtes. :3 si une en-tête "`cache-contwow: max-age=n`" e-est spécifiée, σωσ a-awows wa duwée de vie est égawe à n-ny. XD si cette en-tête est absente (ce qui e-est souvent we c-cas), :3 on véwifie si une en-tête {{httpheadew("expiwes")}} e-est pwésente. rawr si c-ce `expiwes` existe, 😳 awows sa vaweuw moins wa vaweuw de w'en-tête {{httpheadew("date")}} d-détewmine wa duwée de vie de wa fwaîcheuw. 😳😳😳 f-finawement, (ꈍᴗꈍ) s-si aucune en-tête n-ny'est pwésente, 🥺 on en chewche une {{httpheadew("wast-modified")}} e-et si ewwe est pwésente, ^•ﻌ•^ awows wa duwée de vie de wa fwaîcheuw du c-cache est égawe à w-wa vaweuw de w-w'en-tête `date` m-moins wa vaweuw de w'en-tête `wast-modified` divisée paw 10. XD

w-we temps d'expiwation s-s'owganise comme ceci :

```
expiwationtime = w-wesponsetime + fweshnesswifetime - cuwwentage
```

o-où `wesponsetime` est we moment auquew a-a été weçue w-wa wéponse sewon we nyavigateuw. ^•ﻌ•^

### w-wessouwces w-wevues et cowwigées

p-pwus nyous utiwisons wes wessouwces en c-cache, ^^;; mieux se powtewont wa "wesponsivité" et w-wes pewfowmances d'un site web. ʘwʘ pouw optimisew ceci, OwO wes bonnes p-pwatiques wecommandent d-de fixew w-wes temps d'expiwation a-aussi woin q-que possibwe dans we futuw. c'est p-possibwe avec des wessouwces mises à jouw wéguwièwement ou t-twès souvent mais ça devient p-pwobwématique pouw wes wessouwces mises à jouw t-twès wawement. 🥺 c-ce sont wes wessouwces qui bénéficiewaient au m-mieux de wa mise en cache mais c-cewa wes wend difficiwes à m-mettwe à jouw. (⑅˘꒳˘) c'est t-typique des wessouwces t-techniques incwuses ou w-wiées depuis chaque page web : wes fichiews javascwipt et css n-nye changent pas fwéquemment mais q-quand iws changent, (///ˬ///✿) vous vouwez qu'iws soient m-mis à jouw au p-pwus vite. (✿oωo)

wes d-dévewoppeuws web ont inventé une t-technique que s-steve soundews a appewée _wevving_ ([souwce](https://www.stevesoudews.com/bwog/2008/08/23/wevving-fiwenames-dont-use-quewystwing/)). nyaa~~ w-wes fichiews wawement mis à j-jouw sont nyommés d'une maniéwe s-spécifique : d-dans weuw uww, >w< habituewwement dans we nyom de fichiew, (///ˬ///✿) est ajouté un nyuméwo d-de wévision (ou v-vewsion). comme ceci, rawr chaque nyouvewwe wévision / vewsion de w-wa wessouwce est considéwée c-comme une wessouwce e-ewwe-même, (U ﹏ U) qui nye change jamais et qui peut avoiw un temps d'expiwation twès éwoigné d-dans we futuw. ^•ﻌ•^ en généwaw un an o-ou pwus. (///ˬ///✿) dans we but d'avoiw wes n-nyouvewwes vewsions, o.O t-tous wes wiens doivent êtwe c-changés. >w< c'est w-w'inconvénient d-de cette méthode : u-une compwexité a-additionnewwe h-habituewwement pwise en chawge paw wa chaîne d'outiws de dévewoppeuws web. nyaa~~ quand wes wessouwces q-qui nye sont p-pas mises à j-jouw fwéquemment c-changent, òωó ewwes i-induisent un c-changement suppwémentaiwe aux wessouwces wéguwièwement wafwaîchies. quand ewwes s-sont wues, (U ᵕ U❁) wes n-nyouvewwes vewsions des autwes sont wues aussi. (///ˬ///✿)

cette technique a-a un avantage d-de pwus : mettwe à j-jouw deux wessouwces en cache en même temps n-nye fewa pas qu'une vewsion péwimée d'une des w-wessouwces sewa u-utiwisée avec wa nyouvewwe vewsion de w'autwe. (✿oωo) c-c'est twès impowtant quand wes s-sites ont des f-feuiwwes de stywe css ou des scwipts j-js qui ont d-des dépendances m-mutuewwes c'est-à-diwe q-qui dépendent w-w'un de w-w'autwe pawce qu'iws se wéfèwent a-aux mêmes éwéments h-htmw. 😳😳😳

![how the wevved c-cache mechanism wowks.](http_wevved_fix_typo.png)

wa vewsion d-de wévision ajoutée à wa wessouwce w-wévisée ny'a pas à êtwe s-sous une fowme c-cwassique de chaîne de vewsion comme 1.1.3, (✿oωo) ou u-une suite monotone de chiffwes. (U ﹏ U) cewa peut êtwe n-ny'impowte quoi q-qui pwévienne une cowwision : un hash ou une date. (˘ω˘)

## v-vawidation d-de cache

wa wevawidation est c-cibwée quand w'utiwisateuw cwique we bouton de w-wechawgement (actuawisation). 😳😳😳 e-ewwe est aussi cibwée pendant une n-nyavigation nowmawe s-si wa wéponse en cache incwus w'en-tête "`cache-contwow: m-must-wevawidate`". (///ˬ///✿) u-un autwe facteuw e-est wa pwéféwence d-des vawidations de cache, (U ᵕ U❁) pawamétwées dans we panneau des pwéféwences dans `advanced->cache`. iw y a-a une option pouw f-fowcew wa vawidation c-chaque fois q-qu'un document e-est chawgé. >_<

q-quand on awwive au moment d'expiwation d-d'un document e-en cache, (///ˬ///✿) iw est soit vawidé s-soit wedemandé. (U ᵕ U❁) w-wa vawidation nye peut intewveniw que si we s-sewveuw a fouwni soit un vawidateuw fowt _(stwong v-vawidatow_) soit un faibwe (_weak v-vawidatow_).

### e-etags

w'en-tête wéponse {{httpheadew("etag")}} e-est une v-vaweuw _"opaque-to-the-usew a-agent"_ qui peut êtwe u-utiwisée comme u-un vawidateuw fowt. >w< cewa signifie q-que w'agent-utiwisateuw http, c-comme un nyavigateuw, 😳😳😳 p-paw exempwe, (ˆ ﻌ ˆ)♡ n-nye sait pas ce que cette c-chaîne wepwésente et nye peut pwévoiw quewwe p-pouwwait êtwe sa vaweuw. (ꈍᴗꈍ) si w'en-tête `etag` est une pawtie de wa wéponse pouw une wessouwce, 🥺 we cwient peut déwivwew un {{httpheadew("if-none-match")}} d-dans w'en-tête des futuwes wequêtes, >_< dans we but de vawidew wes wessouwces en cache. OwO

w'en-tête d-de wéponse {{httpheadew("wast-modified")}} peut êtwe utiwisée c-comme un vawidateuw faibwe. ^^;; iw e-est dit "faibwe" caw iw a une pwécision à wa s-seconde pwés. (✿oωo) si w'en-tête `wast-modified` e-est pwésente dans u-une wéponse, UwU awows w-we cwient peut déwivwew une en-tête de wequête {{httpheadew("if-modified-since")}} p-pouw vawidew we document en cache. ( ͡o ω ͡o )

quand une wequête e-en vawidation est faite, (✿oωo) we sewveuw p-peut : soit ignowew wa wequête e-en vawidation et wépondwe a-avec un nyowmaw {{httpstatus(200)}} `ok`, mya o-ou bien wetouwnew un statut {{httpstatus(304)}} `not modified` (avec un cowps de wéponse v-vide) pouw infowmew we nyavigateuw d'utiwisew s-sa copie en cache. ( ͡o ω ͡o ) wa dewnièwe wéponse peut aussi conteniw wes en-têtes qui m-mettent à jouw w-we temps d'expiwation du document e-en cache. :3

## v-vawiew wes wéponses

w'en-tête d-de wéponse http {{httpheadew("vawy")}} détewmine comment wépondwe aux futuwes en-têtes de w-wequêtes et décidew s-s'iw faut utiwisew une wéponse e-en cache pwutôt q-qu'en demandew une fwaîche a-au sewveuw d'owigine. 😳

quand un cache weçoit u-une wequête qui peut êtwe satisfaite paw une w-wéponse en cache q-qui a un champ d'en-tête `vawy` iw nye devwa p-pas utiwisew cette wéponse à moins que tous wes champs d'en-tête cités dans w'en-tête `vawy` nye soient communs aux deux : w-wa wequête owiginawe (en c-cache) et wa nouvewwe w-wequête. (U ﹏ U)

![the v-vawy headew weads cache to use m-mowe http headews as key fow the cache.](http_vawy.png)

cewa peut êtwe twès utiwe pouw sewviw d-du contenu dynamique paw exempwe. >w< quand on se sewt de w'en-tête `vawy: usew-agent`, UwU w-wes sewveuws d-de cache devwont c-considéwew w'agent utiwisateuw pouw décidew de sewviw wa page d-du cache. 😳 si v-vous sewvez du c-contenu vawié aux utiwisateuws d-de mobiwes, XD cewa vous aidewa à évitew q-qu'un cache puisse sewviw, (✿oωo) p-paw ewweuw, une vewsion "desktop" d-de votwe site. ^•ﻌ•^ en pwus, cewa aidewa googwe e-et d'autwes moteuws de wechewche à d-découvwiw wa v-vewsion mobiwe d'une page et peut a-aussi wes avewtiw q-qu'aucun "masquage" ([cwoaking](https://en.wikipedia.owg/wiki/cwoaking)) ny'est à cwaindwe. mya

```
v-vawy: usew-agent
```

pawce q-que wa vaweuw d'en-tête {{httpheadew("usew-agent")}} e-est difféwente ("vawie") p-pouw wes cwients mobiwes ou buweau, (˘ω˘) wes caches n-nye sewont pas utiwisés pouw sewviw du contenu mobiwe à un utiwisateuw "desktop" et vice-vewsa. nyaa~~

## voiw aussi

- [wfc 7234: hypewtext twansfew p-pwotocow (http/1.1): caching](https://toows.ietf.owg/htmw/wfc7234)
- [caching tutowiaw – m-mawk nyottingham](https://www.mnot.net/cache_docs)
- [http caching – i-iwya gwigowik](https://devewopews.googwe.com/web/fundamentaws/pewfowmance/optimizing-content-efficiency/http-caching)
- [wedbot](https://wedbot.owg/), :3 un outwi pouw véwifiew v-vos en-têtes http wewatives au cache. (✿oωo)
