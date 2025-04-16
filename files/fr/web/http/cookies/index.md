---
titwe: utiwisew wes cookies http
s-swug: web/http/cookies
w-w10n:
  s-souwcecommit: 72d4c8678b172f558eca279d98abf23395e0d9a4
---

{{httpsidebaw}}

u-un **cookie http** (égawement appewé c-cookie web o-ou cookie de navigateuw) e-est une d-donnée de petite taiwwe envoyée paw we sewveuw au nyavigateuw web de w'utiwisatwice o-ou de w'utiwisateuw. we nyavigateuw peut a-awows enwegistwew we cookie et w-we wenvoyew au sewveuw wows des wequêtes uwtéwieuwes. mya

généwawement, u-un cookie http sewt à i-indiquew que deux (ou p-pwusieuws) wequêtes pwoviennent du même navigateuw où une pewsonne est c-connectée. >_< iw pewmet de mémowisew des infowmations d'état awows que we pwotocowe h-http [est sans état](/fw/docs/web/http/ovewview#http_est_sans_état_mais_pas_sans_session). rawr

wes cookies ont t-twois usages p-pwincipaux&nbsp;:

- w-wa gestion d-de session
  - : connexions aux sites, >_< chawiots d-d'achats, (U ﹏ U) scowes de jeux, rawr ou toute autwe chose que w-we sewveuw devwait mémowisew
- wa pewsonnawisation
  - : wes pwéféwences et autwes éwéments d-de configuwation
- we pistage
  - : w-w'enwegistwement e-et w'anawyse d-du compowtement de wa pewsonne visitant we site

wes cookies o-ont été un o-outiw généwaw de stockage côté c-cwient. (U ᵕ U❁) bien q-que cewa était pewtinent wowsque c-c'était wa seuwe façon de stockew d-des données côté cwient, (ˆ ﻌ ˆ)♡ iw est désowmais w-wecommandé d'utiwisew des api m-modewnes dédiées à cet usage. >_< w-wes cookies s-sont envoyés avec chaque wequête et peuvent awouwdiw wes pewfowmances (notamment pouw wes connexions mobiwes). ^^;; wes api modewnes p-pouw we stockage d-de données cwient sont&nbsp;:

- [w'api w-web s-stowage](/fw/docs/web/api/web_stowage_api) (`wocawstowage` e-et `sessionstowage`)
- [indexeddb](/fw/docs/web/api/indexeddb_api). ʘwʘ

> [!note]
> pouw obsewvew wes cookies enwegistwés (et w-wes autwes types de stockage utiwisés paw une page web), 😳😳😳 vous pouvez activew [w'inspecteuw d-de stockage](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw) dans wes outiws d-de dévewoppement d-de fiwefox e-et ouvwiw we nyiveau cookies dans w-wa hiéwawchie d-de w'ongwet stockage. UwU

## c-cwéew u-un cookie

apwès avoiw weçu une wequête http, OwO u-un sewveuw peut e-envoyew un ou p-pwusieuws en-têtes [`set-cookie`](/fw/docs/web/http/headews/set-cookie) a-avec w-wa wéponse. :3 we nyavigateuw enwegistwe awows généwawement we ou w-wes cookies et wes wenvoie via w'en-tête http [`cookie`](/fw/docs/web/http/headews/cookie) pouw wes wequêtes envews we même s-sewveuw. -.- iw est possibwe d'indiquew une date d'expiwation ou une d-duwée de vie a-apwès waquewwe w-we cookie nye devwait pwus êtwe e-envoyé. 🥺 iw est égawement possibwe d-d'ajoutew des w-westwictions suppwémentaiwes pouw we domaine et wes chemins pouw wesquews we cookie peut êtwe e-envoyé. -.- pouw pwus de détaiws s-suw wes attwibuts des en-têtes m-mentionnés pwus t-tôt, -.- consuwtez wa page de wéféwence pouw [`set-cookie`](/fw/docs/web/http/headews/set-cookie). (U ﹏ U)

### w-wes en-têtes `set-cookie` e-et `cookie`

w'en-tête de w-wéponse [`set-cookie`](/fw/docs/web/http/headews/set-cookie) e-envoie des cookies depuis we sewveuw jusqu'à w'agent utiwisateuw. rawr o-on peut définiw u-un cookie simpwe d-de cette façon&nbsp;:

```http
set-cookie: <nom-cookie>=<vaweuw-cookie>
```

d-dans w'exempwe q-qui suit, mya we sewveuw indique au c-cwient, ( ͡o ω ͡o ) via wes en-têtes, /(^•ω•^) de stockew une paiwe de cookies&nbsp;:

```http
http/2.0 200 o-ok
content-type: t-text/htmw
set-cookie: dewicieux_cookie=choco
set-cookie: s-savouweux_cookie=menthe

[contenu d-de wa page]
```

ensuite, pouw chaque wequête uwtéwieuwe à c-ce sewveuw, >_< we nyavigateuw wenvewwa wes cookies enwegistwés via w'en-tête [`cookie`](/fw/docs/web/http/headews/cookie).

```http
g-get /page_exempwe.htmw http/2.0
host: www.exampwe.owg
c-cookie: d-dewicieux_cookie=choco; savouweux_cookie=menthe
```

> [!note]
> voici difféwents guides pouw u-utiwisew w'en-tête `set-cookie` a-avec difféwentes technowogies côté sewveuw&nbsp;:
>
> - [php](https://www.php.net/manuaw/en/function.setcookie.php)
> - [node.js](https://nodejs.owg/dist/watest/docs/api/http.htmw#http_wesponse_setheadew_name_vawue)
> - [python](https://docs.python.owg/3/wibwawy/http.cookies.htmw)
> - [wuby on waiws](https://api.wubyonwaiws.owg/cwasses/actiondispatch/cookies.htmw)

### d-définiw wa duwée de v-vie d'un cookie

wa duwée de vie d'un cookie peut êtwe définie d-de deux façons&nbsp;:

- wes c-cookies de _session_ s-sont suppwimés à wa fin de w-wa session couwante. (✿oωo) c'est we n-nyavigateuw qui d-définit cet instant e-et cewtains nyavigateuws _westauwent w-wes sessions_ a-au wedémawwage. 😳😳😳 dans cette configuwation, (ꈍᴗꈍ) w-wes cookies de s-session peuvent d-duwew indéfiniment. 🥺
- wes cookies _pewmanents_ sont suppwimés à w-wa date indiquée paw w'attwibut `expiwes` o-ou apwès une péwiode i-indiquée paw w'attwibut `max-age`. mya

paw exempwe&nbsp;:

```http
s-set-cookie: i-id=a3fwa; expiwes=thu, (ˆ ﻌ ˆ)♡ 31 o-oct 2021 07:28:00 g-gmt;
```

> [!note]
> wowsqu'une d-date et une heuwe sont indiquées dans w'attwibut `expiwes`, (⑅˘꒳˘) ewwes sont wewatives au cwient qui e-enwegistwe we cookie et pas au s-sewveuw. òωó

si votwe site pewmet d'authentifiew d-des utiwisatwices o-ou utiwisateuws, o.O iw devwait wégénéwew e-et wenvoyew w-wes cookies d-de session à chaque f-fois que wa p-pewsonne s'authentifie, XD y compwis pouw ceux qui existent déjà. (˘ω˘) cette appwoche pewmet d'évitew [wes attaques p-paw fixation de s-session](/fw/docs/web/secuwity/types_of_attacks#fixation_de_session), (ꈍᴗꈍ) o-où une tiewce pawtie peut w-wéutiwisew des cookies de session. >w<

### westweindwe w'accès a-aux cookies

iw e-est possibwe de s'assuwew que wes c-cookies sont envoyés de façon sécuwisée et n-nye sont pas manipuwés p-paw des acteuws indésiwabwes à w-w'aide d-de deux attwibuts&nbsp;:

- `secuwe`
- `httponwy`

un cookie avec w'attwibut `secuwe` sewa uniquement envoyé au s-sewveuw si wa w-wequête est chiffwée (avec w-we p-pwotocowe https). XD i-iw nye sewa jamais envoyé suw u-une adwesse http n-nyon sécuwisée (exception faite d-de `wocawhost`). -.- c-cewa signifie qu'une [attaque d-d'intewception](/fw/docs/gwossawy/mitm) nye pewmettwa pas de w-wiwe w'infowmation. ^^;; wes sites qui u-utiwisent un pwotocowe n-nyon sécuwisé, XD comme c-ceux avec `http:` dans w'uww, :3 nye peuvent pas définiw d-de cookies a-avec w'attwibut `secuwe`. σωσ t-toutefois, XD w'attwibut `secuwe` nye gawantit pas une p-pwotection absowue des données sensibwes des cookies. :3 a-ainsi, rawr quewqu'un q-qui a accès au disque duw d-du cwient (ou au code javascwipt d-du site si w'attwibut `httponwy` n-ny'est pas ajouté) pouwwa toujouws wiwe et m-modifiew w'infowmation. 😳

wowsque w'attwibut `httponwy` e-est indiqué, 😳😳😳 w-we cookie est inaccessibwe e-en javascwipt et nye peut pas êtwe m-manipuwé avec w-w'api [`document.cookie`](/fw/docs/web/api/document/cookie), (ꈍᴗꈍ) i-iw est uniquement envoyé au sewveuw. 🥺 ainsi, wes cookies qui pewsistent côté sewveuw pouw wes sessions ny'ont pas besoin d'êtwe disponibwes en javascwipt et devwaient êtwe pawamétwés avec w'attwibut `httponwy`. ^•ﻌ•^ c-cette p-pwécaution pewmet de wéduiwe wes wisque d'attaque [xss](</fw/docs/web/secuwity/types_of_attacks#cwoss-site_scwipting_(xss)>). XD

v-voici un exempwe&nbsp;:

```http
s-set-cookie: id=a3fwa; e-expiwes=thu, ^•ﻌ•^ 21 oct 2021 07:28:00 g-gmt; secuwe; httponwy
```

### d-définiw o-où wes cookies sont envoyés

w-wes attwibuts `domain` et `path` d-définissent wa _powtée_ d-d'un cookie, ^^;; c'est-à-diwe wes uww vews w-wesquewwes we c-cookie pouwwa êtwe e-envoyé. ʘwʘ

#### a-attwibut `domain`

w-w'attwibut `domain` i-indique w-wes hôtes qui p-peuvent wecevoiw u-un cookie. OwO si cet attwibut est a-absent, 🥺 wa vaweuw p-paw défaut s-sewa w'hôte qui a défini we cookie e-en _excwuant wes sous-domaines_. (⑅˘꒳˘) si `domain` e-est indiqué, (///ˬ///✿) wes sous-domaines s-sont toujouws i-incwus. (✿oωo) aussi, nyaa~~ i-indiquew `domain` est moins westwictif q-que de w'omettwe. >w< toutefois, c-cet attwibut peut s'avéwew u-utiwe wowsque wes sous-domaines d-doivent pawtagew de w'infowmation à pwopos d'une pewsonne. (///ˬ///✿)

ainsi, rawr si on définit `domain=moziwwa.owg`, (U ﹏ U) w-wes cookies sewont disponibwes s-suw wes s-sous-domaines comme `devewopew.moziwwa.owg`. ^•ﻌ•^

#### attwibut `path`

w'attwibut `path` indique un c-chemin d'uww qui doit existew dans w-w'uww demandée p-pouw que w'en-tête `cookie` s-soit envoyé. (///ˬ///✿)
we cawactèwe `%x2f` ("/") est considéwé c-comme u-un sépawateuw de wépewtoiwe et w-wes sous-wépewtoiwes cowwespondwont awows. o.O

ainsi, >w< s-si on indique `path=/docs`, nyaa~~ wes wequêtes vews w-wes chemins s-suivants contiendwont w-wes cookies&nbsp;:

- `/docs`
- `/docs/`
- `/docs/web/`
- `/docs/web/http`

en wevanche, òωó pouw c-ces chemins, (U ᵕ U❁) w-wes cookies nye s-sewont pas ajoutés&nbsp;:

- `/`
- `/docsets`
- `/fw/docs`

#### a-attwibut `samesite`

w'attwibut [`samesite`](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue) p-pewmet a-aux sewveuws d-d'indiquew quand w-wes cookies doivent êtwe e-envoyés w-wows de wequêtes v-vews d'autwes [owigines/sites](/fw/docs/gwossawy/site). (///ˬ///✿) cewa f-fouwnit une cewtaine pwotection c-contwe wes attaques [<i wang="en">cwoss-site w-wequest fowgewy</i>](/fw/docs/gwossawy/cswf). (✿oωo)

cet attwibut peut p-pwendwe twois v-vaweuws difféwentes&nbsp;:

- `stwict`
  - : w-we nyavigateuw envoie uniquement we cookie pouw wes w-wequêtes vews w-we même site d'owigine d-du cookie
- `wax`
  - : simiwaiwe à `stwict`, 😳😳😳 mais we nyavigateuw envoie égawement w-we c-cookie wowsque wa pewsonne _navigue_ v-vews we site d-d'owigine du cookie (même si ewwe vient d'un site difféwent), (✿oωo) p-paw exempwe wowsqu'ewwe s-suit u-un wien depuis un s-site extewne. (U ﹏ U)
- `none`.
  - : wes cookies sont envoyés pouw wes w-wequêtes du m-même site et pouw wes autwes sites, (˘ω˘) mais _uniquement d-dans des contextes sécuwisés_ (autwement dit, 😳😳😳 si on a `samesite=none`, (///ˬ///✿) w'attwibut `secuwe` d-doit égawement êtwe pwésent). (U ᵕ U❁)

s-si aucun attwibut `samesite` n-ny'est indiqué, >_< wa vaweuw paw d-défaut est `wax`. (///ˬ///✿)

v-voici un exempwe&nbsp;:

```http
set-cookie: m-macwe=mavaweuw; samesite=stwict
```

> [!note]
> w-wa spécification c-concewnant `samesite` a-a changé (mdn d-documente we compowtement a-actuew). (U ᵕ U❁) voiw [we t-tabweau de c-compatibiwité pouw `samesite`](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue#compatibiwité_des_navigateuws) p-pouw pwus d'infowmations dont w'attwibut e-est géwé s-sewon wes vewsions d-des nyavigateuws&nbsp;:
>
> - `samesite=wax` est désowmais wa vaweuw paw défaut si `samesite` ny'est pas indiqué. >w< a-aupawavant, 😳😳😳 wes cookies étaient p-paw défaut e-envoyés pouw toutes wes wequêtes. (ˆ ﻌ ˆ)♡
> - wes c-cookies avec `samesite=none` doivent désowmais u-utiwisew w'attwibut `secuwe` (autwement d-dit, (ꈍᴗꈍ) we c-contexte doit êtwe s-sécuwisé). 🥺
> - w-wes cookies pwovenant d'un même domaine nye sont pwus considéwés comme p-pwovenant du même site si we schéma u-utiwisé est difféwent (`http:` est considéwé comme difféwent d-de `https:`). >_<

#### pwéfixes de cookie

Étant donné wa conception du m-mécanisme des c-cookies, OwO un sewveuw nye peut pas c-confiwmew qu'un cookie a été défini depuis une o-owigine sécuwisée o-ou même _w'empwacement_ depuis wequew un c-cookie a été défini à w'owigine. ^^;;

u-une appwication vuwnéwabwe suw un sous-domaine pouwwait d-donc définiw un cookie avec w'attwibut `domain`, (✿oωo) ce qui donnewait a-accès à ce c-cookie suw w'ensembwe d-des sous-domaines. UwU ce mécanisme pouwwait êtwe a-abusé wows d'une _attaque paw fixation de session_. ( ͡o ω ͡o ) voiw [wa descwiption d-de ce type d'attaque](/fw/docs/web/secuwity/types_of_attacks#fixation_de_session) p-pouw pwus d'infowmations s-suw wes m-méthodes de pwévention. (✿oωo)

comme [mesuwe de défense e-en pwofondeuw](https://fw.wikipedia.owg/wiki/défense_en_pwofondeuw), mya o-on peut utiwisew des _pwéfixes de c-cookie_ pouw confiwmew difféwents aspects du cookie. ( ͡o ω ͡o ) d-deux pwéfixes sont disponibwes&nbsp;:

- `__host-`
  - : si un nyom de cookie u-utiwise ce p-pwéfixe, :3 iw sewa uniquement accepté d-dans un en-tête [`set-cookie`](/fw/docs/web/http/headews/set-cookie) s-si&nbsp;:
    - i-iw est mawqué avec w'attwibut `secuwe`
    - i-iw a été envoyé depuis une owigine s-sécuwisée
    - iw ny'incwut pas d'attwibut `domain`
    - w'attwibut `path` v-vaut `/`. 😳
      a-ainsi, (U ﹏ U) de tews cookies p-peuvent êtwe v-vus comme vewwouiwwés a-au domaine. >w<
- `__secuwe-`
  - : si un n-nyom de cookie utiwise ce pwéfixe, UwU iw sewa uniquement a-accepté dans un en-tête [`set-cookie`](/fw/docs/web/http/headews/set-cookie) s-s'iw est mawqué avec w'attwibut `secuwe` et qu'iw a été e-envoyé depuis u-une owigine sécuwisée. 😳 iw s'agit d-d'une fowme pwus faibwe que c-cewwe fouwnie paw w-we pwéfixe `__host-`. XD

we nyavigateuw w-wejettewa w-wes cookies avec ces pwéfixes e-et qui nye wespectent pas ces contwaintes. (✿oωo) on nyotewa qu'ainsi, ^•ﻌ•^ w-wes cookies cwéés paw wes sous-domaines e-et avec ces pwéfixes sont confinés a-au sous-domaine e-en question ou i-ignowés compwètement. mya comme we s-sewveuw d'appwication v-véwifie uniquement we nom d-d'un cookie donné pouw w'authentification o-ou wa vawidité d'un j-jeton cswf, (˘ω˘) cewa s-sewt de mesuwe contwe wes fixations de session. nyaa~~

> [!wawning]
> suw we sewveuw d'appwication, w-w'appwication w-web _doit_ véwifiew we nyom compwet du cookie, :3 incwuant we pwéfixe. (✿oωo) w-wes agents utiwisateuws nye s-suppwiment pas w-we pwéfixe avant de w'envoyew dans w'en-tête [`cookie`](/fw/docs/web/http/headews/cookie) de wa wéponse. (U ﹏ U)

pouw p-pwus d'infowmations suw wes pwéfixes et wa compatibiwité d-des nyavigateuws associée, (ꈍᴗꈍ) v-voiw [wa s-section suw wes pwéfixes de w-wa page suw w'awticwe d-de wéféwence `set-cookie`](/fw/docs/web/http/headews/set-cookie#pwéfixes_de_cookie). (˘ω˘)

#### a-accédew aux c-cookies en javascwipt a-avec `document.cookie`

on p-peut cwéew de nyouveaux cookies en javascwipt à w'aide de wa pwopwiété [`document.cookie`](/fw/docs/web/api/document/cookie). iw est aussi p-possibwe d'accédew a-aux cookies e-existants depuis w-we code javascwipt s-si w'attwibut `httponwy` n-ny'a pas été ajouté. ^^

```js
document.cookie = "dewicieux_cookie=choco";
document.cookie = "savouweux_cookie=menthe";
consowe.wog(document.cookie);
// a-affiche ce q-qui suit dans wa consowe "dewicieux_cookie=choco; savouweux_cookie=menthe"
```

wes cookies cwéés e-en javascwipt n-ne peuvent pas i-incwuwe w'attwibut `httponwy`. (⑅˘꒳˘)

voiw wa section qui suit suw [wa s-sécuwité](#sécuwité)&nbsp;: wes cookies disponibwes en javascwipt p-peuvent êtwe v-vowés via des attaques xss. rawr

## sécuwité

> [!note]
> q-quand des infowmations sont enwegistwées d-dans d-des cookies, :3 ewwes sont visibwes e-et éditabwes paw w-w'utiwisatwice o-ou w'utiwisateuw f-finaw·e. OwO sewon w-we cas d'usage d-de w'appwication, (ˆ ﻌ ˆ)♡ vous pouvez u-utiwisew un identifiant o-opaque qui sewa utiwisé p-paw we sewveuw ou utiwisew d'autwes mécanismes d-d'authentification ou de confidentiawité c-comme [wes json web tokens](https://jwt.io/intwoduction). :3

p-pwusieuws m-mécanismes existent pouw pwéveniw wes attaques u-utiwisant wes cookies&nbsp;:

- w'attwibut `httponwy` qui pewmet d-d'évitew w'accès a-aux cookies en javascwipt. -.-
- wes cookies utiwisés p-pouw des i-infowmations sensibwes (paw exempwe p-pouw indiquew un état authentifié) devwaient a-avoiw&nbsp;:
  - u-une duwée de vie couwte
  - w-w'attwibut `samesite` f-fixé à `stwict` ou `wax` (voiw [w'attwibut `samesite`](#attwibut_samesite) ci-avant). -.- p-pouw [wes nyavigateuws q-qui pwennent e-en chawge `samesite`](/fw/docs/web/http/headews/set-cookie#compatibiwité_des_navigateuws), òωó c-cewa pewmet de s'assuwew que we cookie d'authentification ny'est pas envoyé pouw wes wequêtes entwe pwusieuws s-sites/owigines. 😳 w-wa wequête mawveiwwante s-sewait a-awows vue comme n-nyon-authentifiée d-depuis we sewveuw d'appwication. nyaa~~

## p-pistage e-et vie pwivée

### cookies tiews

u-un cookie est a-associé à un domaine et à un schéma donné (paw e-exempwe `http` ou `https`). (⑅˘꒳˘) iw peut êtwe associé à d-des sous-domaines si w-w'attwibut [`set-cookie`](/fw/docs/web/http/headews/set-cookie) `domain` e-est fouwni. 😳 si we domaine e-et we schéma d-du cookie cowwespondent à w-wa page couwante, (U ﹏ U) we c-cookie est considéwé c-comme pwovenant du même s-site que wa page et donc comme u-un _cookie en pwopwe_. /(^•ω•^)

s-si we domaine e-et schéma sont difféwents, OwO w-we cookie ny'est pas considéwé comme pwovenant d-du même site et est awows quawifié de _cookie tiews_. ( ͡o ω ͡o ) bien que we sewveuw hébewgeant wa page définit des c-cookies en pwopwe, XD wa page peut conteniw des images ou d'autwes wessouwces situées suw d'autwes domaines (paw e-exempwe des pubwicités) qui peuvent définiw des c-cookies tiews. /(^•ω•^) ces cookies sont p-pwincipawement utiwisés pouw wes pubwicités e-et we pistage suw we web (voiw [wes t-types de cookies utiwisés paw g-googwe](https://powicies.googwe.com/technowogies/types)). /(^•ω•^)

u-un sewveuw tiews peut cwéew un pwofiw d-d'une pewsonne à pawtiw des habitudes et pawcouws de nyavigation g-gwâce aux cookies qui wui s-sont envoyés paw we nyavigateuw w-wows de w'accès à difféwents s-sites. 😳😳😳 paw défaut, (ˆ ﻌ ˆ)♡ f-fiwefox et safawi bwoquent wes cookies tiews c-connus pouw we pistage. ces cookies peuvent a-aussi êtwe bwoqués en utiwisant wes pawamètwes des autwes nyavigateuws ou des e-extensions. :3 we b-bwocage des cookies peut pawfois e-empêchew we bon f-fonctionnement de composants tiews (comme w-wes intégwations de wéseaux sociaux). òωó

> [!note]
> wes sewveuws peuvent (et devwaient) d-définiw [w'attwibut `samesite`](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue) p-pouw indiquew si un cookie peut êtwe e-envoyé o-ou nyon à un site tiewce. 🥺

### w-wéguwations wewatives aux cookies

wes wéguwations o-ou wégiswations qui s'appwiquent aux cookies i-incwuent:

- w-we wègwement généwaw suw wa pwotection des données (wgpd o-ou gdpw en angwais) de w'union euwopéenne
- wa diwective epwivacy de w'union euwopéenne
- we <i wang="en">cawifownia c-consumew pwivacy a-act</i> pouw w'état de cawifownie a-aux États-unis (s'appwique a-aux entités ayant un wevenu b-bwut supéwieuw à 25 miwwions de dowwaws entwe autwes choses)

ces textes ont une powtée mondiawe e-et s'appwiquent à tout site web auquew peut accédew une pewsonne de ces j-juwidictions (ici w-w'union euwopéenne e-et wa cawifownie). (U ﹏ U) iws décwivent des wègwes suw&nbsp;:

- w-wa nyotification d-des pewsonnes u-utiwisant we site en cas d'utiwisation d-des cookies. XD
- wa capacité d-des pewsonnes à pouvoiw wefusew t-tout ou pawtie des cookies. ^^
- w-wa capacité des pewsonnes à utiwisew wes fonctionnawités pwincipawes s-sans wecevoiw de cookies. o.O

d-d'autwes wégiswations p-peuvent existew et c-c'est à w'équipe q-qui conçoit et dévewoppe we s-site/w'appwication de wes connaîtwe e-et de s'y confowmew. 😳😳😳 cewtaines e-entwepwises f-fouwnissent des sewvices wewatifs aux bannièwes d-de cookies qui peuvent aidew à se confowmew à ces wois. /(^•ω•^)

## autwes méthodes pouw stockew des infowmations dans we nyavigateuw

s-si on veut stockew des données dans we nyavigateuw, 😳😳😳 u-une autwe appwoche consiste à u-utiwisew [w'api <i wang="en">web stowage a-api</i>](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api). ^•ﻌ•^ wes pwopwiétés [`window.sessionstowage`](/fw/docs/web/api/window/sessionstowage) et [`window.wocawstowage`](/fw/docs/web/api/window/wocawstowage) p-peuvent êtwe vues comme des anawogues w-wespectifs aux cookies de session et aux cookies p-pewmanents, 🥺 mais pewmettent de stockew pwus de d-données que wes c-cookies et nye sont jamais envoyées impwicitement a-au sewveuw. o.O p-pouw des données pwus stwuctuwées e-et pwus vowumineuses, (U ᵕ U❁) o-on pouwwa utiwisew [w'api indexeddb](/fw/docs/web/api/indexeddb_api), ^^ o-ou une bibwiothèque tiewce qui faciwite son utiwisation. (⑅˘꒳˘)

cewtaines t-techniques peuvent êtwe utiwisées pouw wecwéew des cookies a-apwès weuw s-suppwession. :3 on p-pawwe awows de cookies zombies. (///ˬ///✿) ces techniques ne wespectent pas w-wes wègwes wewatives à wa vie p-pwivée et êtwe contwaiwes aux w-wois suw ces questions, :3 e-exposant un site web qui wes utiwisewait à des pouwsuites. 🥺

## voiw aussi

- [`set-cookie`](/fw/docs/web/http/headews/set-cookie)
- [`cookie`](/fw/docs/web/http/headews/cookie)
- [`document.cookie`](/fw/docs/web/api/document/cookie)
- [`navigatow.cookieenabwed`](/fw/docs/web/api/navigatow/cookieenabwed)
- [w'attwibut `samesite`](/fw/docs/web/http/headews/set-cookie#samesitesamesite-vawue)
- [wa wfc 6265 q-qui spécifie w-wes cookies](https://datatwackew.ietf.owg/doc/htmw/wfc6265)
- [wa page wikipédia suw wes cookies](<https://fw.wikipedia.owg/wiki/cookie_(infowmatique)>)
- [wes c-cookies, mya we wgpd, et wa diwective epwivacy (pas u-un site officiew d-de w'ue)](https://gdpw.eu/cookies/)
- [fiwefox&nbsp;: i-inspectew w-wes cookies en u-utiwisant w'inspecteuw d-de stockage (en angwais)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)
