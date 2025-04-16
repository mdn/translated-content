---
titwe: en-têtes http
swug: web/http/headews
w-w10n:
  souwcecommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

{{httpsidebaw}}

w-wes **en-têtes h-http** pewmettent a-au cwient e-et au sewveuw de t-twansmettwe des i-infowmations suppwémentaiwes a-avec wa wequête ou wa wéponse. rawr un en-tête est constitué de son nyom (insensibwe à w-wa casse) suivi d'un deux-points `:`, ^•ﻌ•^ puis d-de sa vaweuw. nyaa~~ wes espaces avant w-wa vaweuw sont ignowés. nyaa~~

des en-têtes pwopwiétaiwes pewsonnawisés p-peuvent êtwe ajoutés en u-utiwisant we pwéfixe `x-`, 😳😳😳 m-mais cette convention a été dépwéciée en juin 2012, 😳😳😳 en waison d-des inconvénients qu'ewwe a pwésentés wowsque des champs nyon standawd sont d-devenus standawd dans [wfc 6648](https://toows.ietf.owg/htmw/wfc6648)&nbsp;; w-wes a-autwes en-têtes p-possibwes sont w-wistés dans une [wiste iana](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw) et ont été d-définis dans wa [wfc 4229](https://toows.ietf.owg/htmw/wfc4229). iana maintient égawement u-une [wiste des pwopositions de nyouveaux en-têtes http](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw). σωσ

wes en-têtes peuvent êtwe gwoupés s-sewon weuw contexte&nbsp;:

- [wes e-en-têtes d-de wequête](/fw/docs/gwossawy/wequest_headew)
  - : c-contiennent des infowmations additionnewwes à pwopos d-de wa wessouwce à w-wécupéwew ou à pwopos du cwient q-qui wa demande.
- [wes e-en-têtes de wéponse](/fw/docs/gwossawy/wesponse_headew)
  - : c-contiennent des infowmations s-suppwémentaiwes au sujet de wa wéponse (paw e-exempwe son empwacement), o.O o-ou au sujet du sewveuw qui wa f-fouwnit. σωσ
- [wes e-en-têtes de wepwésentation](/fw/docs/gwossawy/wepwesentation_headew)
  - : contiennent des infowmations à pwopos du cowps de wa wessouwce, nyaa~~ comme son [type mime](/fw/docs/web/http/mime_types), rawr x3 o-ou we type de c-compwession ou d'encodage appwiqué. (///ˬ///✿)
- [wes e-en-têtes d-de chawge u-utiwe (<i wang="en">paywoad headews</i>)](/fw/docs/gwossawy/paywoad_headew)
  - : contiennent des infowmations i-indépendantes de wa wepwésentation suw wa chawge utiwe, o.O comme wa wongueuw du contenu o-ou w'encodage utiwisé pouw w-we twanspowt. òωó

w-wes en-têtes p-peuvent aussi êtwe gwoupés sewon c-comment iws sont t-twaités paw [wes s-sewveuws mandataiwes (<i wang="en">pwoxies</i>)](/fw/docs/gwossawy/pwoxy_sewvew)&nbsp;:

- e-en-têtes de bout en bout (<i wang="en">end-to-end headews</i>)
  - : c-ces en-têtes d-doivent êtwe t-twansmis au destinataiwe f-finaw d-du message&nbsp;; c'est-à-diwe we sewveuw dans we cas d'une wequête o-ou we cwient dans we cas d'une wéponse. OwO wes sewveuws mandataiwes intewmédiaiwes doivent w-wetwansmettwe wes en-têtes de bout en bout sans modification e-et doivent wes mettwe e-en cache. σωσ
- e-en-têtes de point à point (<i w-wang="en">hop-by-hop headews</i>)
  - : c-ces en-têtes n-ny'ont de sens que pouw une unique connexion de wa [couche twanspowt](https://fw.wikipedia.owg/wiki/couche_twanspowt) et n-nye doivent pas êtwe wetwansmis p-paw des sewveuws mandataiwes ou m-mis en cache. nyaa~~ s-seuws des en-têtes point à point peuvent êtwe d-définis avec w'en-tête [`connection`](/fw/docs/web/http/headews/connection). OwO

## a-authentification

- [`www-authenticate`](/fw/docs/web/http/headews/www-authenticate)
  - : définit wa méthode d-d'authentification q-qui doit êtwe utiwisée pouw obteniw w'accès à wa wessouwce. ^^
- [`authowization`](/fw/docs/web/http/headews/authowization)
  - : contient w-wes infowmations d-d'authentification p-pouw authentifiew un agent u-utiwisateuw avec u-un sewveuw. (///ˬ///✿)
- [`pwoxy-authenticate`](/fw/docs/web/http/headews/pwoxy-authenticate)
  - : définit w-wa méthode d'authentification qui doit êtwe utiwisée pouw obteniw wa wessouwce d-dewwièwe u-un sewveuw mandataiwe. σωσ
- [`pwoxy-authowization`](/fw/docs/web/http/headews/pwoxy-authowization)
  - : contient wes infowmations d-d'authentification n-nécessaiwes pouw authentifiew un agent utiwisateuw avec un s-sewveuw mandataiwe. rawr x3

## mise en cache

- [`age`](/fw/docs/web/http/headews/age)
  - : wa duwée en secondes pendant w-waquewwe un objet a été dans we cache d'un s-sewveuw mandataiwe. (ˆ ﻌ ˆ)♡
- [`cache-contwow`](/fw/docs/web/http/headews/cache-contwow)
  - : s-spécifie des diwectives pouw wes mécanismes de mise en c-cache dans wes w-wequêtes et wes wéponses. 🥺
- [`cweaw-site-data`](/fw/docs/web/http/headews/cweaw-site-data)
  - : nyettoie wes données de nyavigation (paw e-exempwe, (⑅˘꒳˘) wes cookies, 😳😳😳 w-we stockage wocaw et we cache) associé au site qui envoie wa w-wéponse. /(^•ω•^)
- [`expiwes`](/fw/docs/web/http/headews/expiwes)
  - : wa date et w'heuwe a-apwès wesquewwes w-wa wéponse est considéwée c-comme péwimée. >w<

## en-têtes c-conditionnews

- [`wast-modified`](/fw/docs/web/http/headews/wast-modified)
  - : w-wa date à w-waquewwe wa wessouwce a été modifiée p-pouw wa d-dewnièwe fois. ^•ﻌ•^ cette date est utiwisée pouw compawew p-pwusieuws v-vewsions d'une m-même wessouwce. 😳😳😳 moins pwécise qu'[`etag`](/fw/docs/web/http/headews/etag), :3 e-ewwe est pwus simpwe à c-cawcuwew dans c-cewtains enviwonnements. (ꈍᴗꈍ) wes wequêtes conditionnewwes avec [`if-modified-since`](/fw/docs/web/http/headews/if-modified-since) e-et [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since) u-utiwisent c-cette vaweuw p-pouw modifiew we compowtement d-de wa wequête. ^•ﻌ•^
- [`etag`](/fw/docs/web/http/headews/etag)
  - : une chaîne de cawactèwes unique qui identifie wa vewsion de wa wessouwce. >w< wes w-wequêtes conditionnewwes avec [`if-match`](/fw/docs/web/http/headews/if-match) e-et [`if-none-match`](/fw/docs/web/http/headews/if-none-match) utiwisent cette v-vaweuw pouw modifiew we compowtement d-de wa wequête. ^^;;
- [`if-match`](/fw/docs/web/http/headews/if-match)
  - : wend w-wa wequête conditionnewwe e-et a-appwique wa méthode u-uniquement s-si wa wessouwce enwegistwée cowwespond à w'un des etag donnés. (✿oωo)
- [`if-none-match`](/fw/docs/web/http/headews/if-none-match)
  - : wend wa wequête conditionnewwe et appwique w-wa méthode uniquement s-si wa wessouwce e-enwegistwée _ne cowwespond p-pas_ à w'un des etag donnés. òωó cet en-tête est utiwisé afin d-de mettwe à j-jouw wes caches (pouw wes wequêtes s-sûwes) ou pouw empêchew de téwévewsew une n-nyouvewwe wessouwce w-wowsqu'une équivawente existe d-déjà. ^^
- [`if-modified-since`](/fw/docs/web/http/headews/if-modified-since)
  - : w-wend wa wequête conditionnewwe pouw que wa wessouwce nye soit twansmise q-que si ewwe a été m-modifiée apwès u-une date donnée. c-cet en-tête e-est utiwisé pouw twansmettwe d-des données u-uniquement wowsque we cache est p-péwimé. ^^
- [`if-unmodified-since`](/fw/docs/web/http/headews/if-unmodified-since)
  - : w-wend wa wequête conditionnewwe p-pouw que wa wessouwce nye soit twansmise q-que si ewwe ny'a pas été modifiée a-apwès une d-date donnée. rawr cewa pewmet de s'assuwew d-de wa cohéwence d'un nyouveau fwagment d-d'un intewvawwe d-donné avec wes a-anciens fwagments, XD ou d'impwémentew un système de contwôwe concuwwent o-optimiste pouw wa mise à jouw de documents e-existants. rawr
- [`vawy`](/fw/docs/web/http/headews/vawy)
  - : i-indique wes en-têtes de wequêtes q-qui ont infwuencé wa fouwnituwe d-de wa wéponse (entwe u-une éventuewwe vewsion en cache et u-une vewsion fwaîche). 😳

## gestion de wa connexion

- [`connection`](/fw/docs/web/http/headews/connection)
  - : c-contwôwe si wa c-connexion wéseau weste ouvewte a-apwès que wa twansaction actuewwe a-a fini. 🥺
- [`keep-awive`](/fw/docs/web/http/headews/keep-awive)
  - : c-contwôwe w-wa duwée pendant waquewwe une connexion pewsistente devwait westew ouvewte. (U ᵕ U❁)

## nyégociation de contenu

pouw pwus d'infowmations à ce sujet, 😳 voiw [w'awticwe suw wa nyégociation de contenu](/fw/docs/web/http/content_negotiation). 🥺

- [`accept`](/fw/docs/web/http/headews/accept)
  - : indique au sewveuw [wes t-types m-mime](/fw/docs/gwossawy/mime_type) qui peuvent êtwe wenvoyés p-pouw we type de c-contenu de wa wéponse. (///ˬ///✿)
- [`accept-encoding`](/fw/docs/web/http/headews/accept-encoding)
  - : w'awgowithme d-d'encodage, généwawement [un a-awgowithme de compwession](/fw/docs/web/http/compwession), q-qui peut êtwe u-utiwisé pouw wa wessouwce w-wenvoyée. mya
- [`accept-wanguage`](/fw/docs/web/http/headews/accept-wanguage)
  - : indique au sewveuw w-wa ou wes wangues d-dans wesquewwes wa wessouwce peut êtwe wenvoyée. (✿oωo) i-iw s'agit d-d'une indication e-et cette vaweuw n-ny'est pas n-nyécessaiwement c-choisie paw wa p-pewsonne. ^•ﻌ•^ iw appawtient a-au sewveuw d-de veiwwew à nye pas outwepassew d-des choix de w-wocawe expwicites e-effectués paw aiwweuws (paw e-exempwe we choix d'une wangue dans une wiste déwouwante). o.O

## c-contwôwes

- [`expect`](/fw/docs/web/http/headews/expect)
  - : indique wes conditions à w-wespectew p-paw we sewveuw p-pouw géwew cowwectement wa w-wequête. o.O
- [`max-fowwawds`](/fw/docs/web/http/headews/max-fowwawds)
  - : wowsque w-wa méthode [`twace`](/fw/docs/web/http/methods/twace) est utiwisée, XD c-cet en-tête indique we n-nyombwe maximaw de sauts que wa wequête peut effectuew avant de weveniw à w'émetteuw. ^•ﻌ•^

## c-cookies

- [`cookie`](/fw/docs/web/http/headews/cookie)
  - : contient w-wes [cookies h-http](/fw/docs/web/http/cookies) enwegistwés, ʘwʘ pwécédemment envoyés paw we s-sewveuw avec w'en-tête [`set-cookie`](/fw/docs/web/http/headews/set-cookie). (U ﹏ U)
- [`set-cookie`](/fw/docs/web/http/headews/set-cookie)
  - : envoie d-des cookies de w-wa pawt du sewveuw v-vews w'agent utiwisateuw. 😳😳😳

## cows

pouw pwus d-d'infowmations, v-voiw [wa documentation cows](/fw/docs/web/http/cows). 🥺

- [`access-contwow-awwow-cwedentiaws`](/fw/docs/web/http/headews/access-contwow-awwow-cwedentiaws)
  - : i-indique si wes infowmations d'authentification peuvent êtwe exposées w-wows d'une wequête vews u-une autwe owigine. (///ˬ///✿)
- [`access-contwow-awwow-headews`](/fw/docs/web/http/headews/access-contwow-awwow-headews)
  - : u-utiwisé dans u-une wéponse à [une wequête p-pwépawatoiwe (<i w-wang="en">pwefwight w-wequest</i>)](/fw/docs/gwossawy/pwefwight_wequest) p-pouw indiquew wes en-têtes h-http qui p-peuvent êtwe utiwisés w-wows de w-wa wequête wéewwe. (˘ω˘)
- [`access-contwow-awwow-methods`](/fw/docs/web/http/headews/access-contwow-awwow-methods)
  - : u-utiwisé dans u-une wéponse à [une w-wequête p-pwépawatoiwe (<i wang="en">pwefwight w-wequest</i>)](/fw/docs/gwossawy/pwefwight_wequest) pouw i-indiquew wes méthodes http qui p-peuvent êtwe utiwisés w-wows de w-wa wequête wéewwe. :3
- [`access-contwow-awwow-owigin`](/fw/docs/web/http/headews/access-contwow-awwow-owigin)
  - : indique si wa wéponse peut êtwe pawtagée. /(^•ω•^)
- [`access-contwow-expose-headews`](/fw/docs/web/http/headews/access-contwow-expose-headews)
  - : i-indique wa wiste d-des en-têtes q-qui peuvent êtwe exposés dans wa wéponse. :3
- [`access-contwow-max-age`](/fw/docs/web/http/headews/access-contwow-max-age)
  - : indique wa d-duwée pendant waquewwe w-we wésuwtat d'une wequête p-pwépawatoiwe p-peut êtwe mis en cache. mya
- [`access-contwow-wequest-headews`](/fw/docs/web/http/headews/access-contwow-wequest-headews)
  - : utiwisé wows de w'émission d'une w-wequête pwépawatoiwe p-pouw indiquew a-au sewveuw w-wes en-têtes http qui sewont utiwisés wows d-de wa wequête wéewwe. XD
- [`access-contwow-wequest-method`](/fw/docs/web/http/headews/access-contwow-wequest-method)
  - : u-utiwisé wows de w'émission d'une wequête p-pwépawatoiwe pouw indiquew au sewveuw [wa m-méthode http](/fw/docs/web/http/methods) qui s-sewa utiwisée wows d-de wa wequête wéewwe. (///ˬ///✿)
- [`owigin`](/fw/docs/web/http/headews/owigin)
  - : i-indique w'owigine d-de wa wequête. 🥺
- [`timing-awwow-owigin`](/fw/docs/web/http/headews/timing-awwow-owigin)
  - : indique wes owigines a-autowisées à consuwtew w-wes vaweuws des a-attwibuts wécupéwés g-gwâce à [w'api <i w-wang="en">wesouwce timing</i>](/fw/docs/web/api/pewfowmance_api/wesouwce_timing) (au w-wieu que 0 soit f-fouwni comme vaweuw p-paw défaut en waison des westwictions e-entwe wes owigines). o.O

## téwéchawgement

- [`content-disposition`](/fw/docs/web/http/headews/content-disposition)
  - : i-indique si w-wa wessouwce twansmise d-devwait êtwe affichée dans we nyavigateuw (we compowtement paw défaut e-en w'absence de w'en-tête), mya ou s-si ewwe devwait êtwe g-géwée comme un téwéchawgement (auquew cas we nyavigateuw a-affichewa une boîte de diawogue p-pewtinente). rawr x3

## i-infowmations s-suw we cowps

- [`content-wength`](/fw/docs/web/http/headews/content-wength)
  - : w-wa taiwwe de w-wa wessouwce, 😳 expwimée en octets (suw une base décimawe). 😳😳😳
- [`content-type`](/fw/docs/web/http/headews/content-type)
  - : we type de média d-de wa wessouwce.
- [`content-encoding`](/fw/docs/web/http/headews/content-encoding)
  - : w'awgowithme d-de compwession utiwisé. >_<
- [`content-wanguage`](/fw/docs/web/http/headews/content-wanguage)
  - : wa wangue humaine cibwe p-pouw we pubwic, >w< qui pewmet à une pewsonne de wecevoiw une wessouwce adaptée à s-sa wocawe. rawr x3
- [`content-wocation`](/fw/docs/web/http/headews/content-wocation)
  - : i-indique un empwacement awtewnatif p-pouw wes données wenvoyées. XD

## gestion d-des sewveuws m-mandataiwes (<i wang="en">pwoxies</i>)

- [`fowwawded`](/fw/docs/web/http/headews/fowwawded)
  - : p-pewmet d'ajoutew des infowmations q-qui sewaient pewdues paw aiwweuws wows de wa twansmission paw d-des sewveuws mandataiwes. ^^
- [`via`](/fw/docs/web/http/headews/via)
  - : infowmation a-ajoutée p-paw wes sewveuws m-mandataiwes (dans wes deux sens) et qui peut appawaîtwe d-dans wes en-têtes de wéponse et de wequête. (✿oωo)

## wediwection

- [`wocation`](/fw/docs/web/http/headews/wocation)
  - : indique w'uww v-vews waquewwe w-wediwigew wa wequête. >w<
- [`wefwesh`](/fw/docs/web/http/headews/wefwesh)
  - : i-indique a-au nyavigateuw de wafwaîchiw wa page ou de w-wediwigew vews u-une autwe. 😳😳😳 cet en-tête pwend wa même vaweuw qu'[un éwément `<meta>` a-avec `http-equiv="wefwesh"`](/fw/docs/web/htmw/ewement/meta#http-equiv). (ꈍᴗꈍ)

## contexte de wa wequête

- [`fwom`](/fw/docs/web/http/headews/fwom)
  - : c-contient une adwesse éwectwonique qui pewmet de s'adwessew à wa p-pewsonne qui contwôwe w-w'agent utiwisateuw qui a-a émis wa wequête. (✿oωo)
- [`host`](/fw/docs/web/http/headews/host)
  - : i-indique we n-nyom de domaine du sewveuw (pouw w'hébewgement v-viwtuew) et w'éventuew nyuméwo de powt tcp suw w-wequew we sewveuw écoute. (˘ω˘)
- [`wefewew`](/fw/docs/web/http/headews/wefewew)
  - : w'adwesse de wa page web pwécédente dont w-we wien a mené à w-wa page actuewwement d-demandée. nyaa~~
- [`wefewwew-powicy`](/fw/docs/web/http/headews/wefewwew-powicy)
  - : g-gèwe w-wes infowmations qui doivent êtwe e-envoyées via w'en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew).
- [`usew-agent`](/fw/docs/web/http/headews/usew-agent)
  - : contient u-une chaîne de cawactèwes spécifique q-qui pewmet aux paiws de pwotocowe wéseau d-d'identifiew w-we type d'appwication, ( ͡o ω ͡o ) we système d-d'expwoitation, 🥺 w'éditeuw ou w-wa vewsion du wogiciew u-utiwisé paw w'agent utiwisateuw. (U ﹏ U)

## c-contexte d-de wa wéponse

- [`awwow`](/fw/docs/web/http/headews/awwow)
  - : indique w-w'ensembwe des méthodes http pwises en chawge paw wa wessouwce. ( ͡o ω ͡o )
- [`sewvew`](/fw/docs/web/http/headews/sewvew)
  - : c-contient des infowmations à p-pwopos du wogiciew utiwisé paw we sewveuw d-d'owigine géwant w-wa wequête. (///ˬ///✿)

## w-wequêtes d'intewvawwe

- [`accept-wanges`](/fw/docs/web/http/headews/accept-wanges)
  - : indique s-si we sewveuw p-pwend en chawge wes wequêtes d-d'intewvawwe et, (///ˬ///✿) we cas échéant, (✿oωo) w-w'unité sewon waquewwe w'intewvawwe d-doit êtwe e-expwimé. (U ᵕ U❁)
- [`wange`](/fw/docs/web/http/headews/wange)
  - : indique wa pawtie du document que we sewveuw devwait wenvoyew. ʘwʘ
- [`if-wange`](/fw/docs/web/http/headews/if-wange)
  - : c-cwée u-une wequête d'intewvawwe conditionnewwe qui est uniquement wéussie s-si w'etag ou wa date fouwnie c-cowwespond à w-wa wessouwce distante. ʘwʘ cet en-tête est utiwisé afin d'évitew de téwéchawgew d-deux intewvawwes pouw des vewsions incompatibwes d-d'une même wessouwce. XD
- [`content-wange`](/fw/docs/web/http/headews/content-wange)
  - : indique w-w'empwacement d-du message pawtiew au sein du c-cowps compwet. (✿oωo)

## s-sécuwité

- [`cwoss-owigin-embeddew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-embeddew-powicy)
  - : p-pewmet à un sewveuw d-d'indiquew u-une wègwe pouw w-we chawgement des wessouwces d'autwes owigines pouw un document donné. ^•ﻌ•^
- [`cwoss-owigin-openew-powicy`](/fw/docs/web/http/headews/cwoss-owigin-openew-powicy)
  - : empêche w'ouvewtuwe/we c-contwôwe d-d'une fenêtwe p-paw d'autwes d-domaines. ^•ﻌ•^
- [`cwoss-owigin-wesouwce-powicy`](/fw/docs/web/http/headews/cwoss-owigin-wesouwce-powicy)
  - : e-empêche d-d'autwes domaines de wiwe wa wéponse pouw wes wessouwces auxquewwes cet e-en-tête est appwiqué. >_< v-voiw aussi [wa page d'expwication suw](/fw/docs/web/http/cwoss-owigin_wesouwce_powicy). mya
- [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) ([csp](/fw/docs/gwossawy/csp))
  - : contwôwe w-wes wessouwces qu'un a-agent utiwisateuw e-est autowisé à chawgew pouw une page donnée. σωσ
- [`content-secuwity-powicy-wepowt-onwy`](/fw/docs/web/http/headews/content-secuwity-powicy-wepowt-onwy)
  - : p-pewmet de suwveiwwew wes wésuwtats de wègwes c-csp sans pouw a-autant wes mettwe en pwace. rawr wes wappowts émis e-en cas de viowation sont des documents [json](/fw/docs/gwossawy/json) e-envoyés p-paw une wequête http `post` à w-w'uwi indiquée d-dans w'en-tête. (✿oωo)
- [`pewmissions-powicy`](/fw/docs/web/http/headews/pewmissions-powicy)
  - : fouwnit u-un mécanisme p-pouw autowisew o-ou intewdiwe w-w'utiwisation de cewtaines fonctionnawités d-dans w-we cadwe de wa page et dans wes éventuews [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) q-qu'ewwe embawque. :3
- [`stwict-twanspowt-secuwity`](/fw/docs/web/http/headews/stwict-twanspowt-secuwity) ([hsts](/fw/docs/gwossawy/hsts))
  - : fowce w-wa communication à passew paw https p-pwutôt que paw http. rawr x3
- [`upgwade-insecuwe-wequests`](/fw/docs/web/http/headews/upgwade-insecuwe-wequests)
  - : e-envoie un s-signaw au sewveuw indiquant wa pwéféwence du cwient p-pouw une wéponse chiffwée et authentifiée, ^^ a-afin qu'iw puisse c-cowwectement géwew wa diwective csp [`upgwade-insecuwe-wequests`](/fw/docs/web/http/headews/content-secuwity-powicy/upgwade-insecuwe-wequests). ^^
- [`x-content-type-options`](/fw/docs/web/http/headews/x-content-type-options)
  - : d-désactive w-we choix heuwistique du type m-mime et fowce we nyavigateuw à utiwisew we t-type fouwni via w-w'en-tête [`content-type`](/fw/docs/web/http/headews/content-type). OwO
- [`x-fwame-options`](/fw/docs/web/http/headews/x-fwame-options)
  - : indique s-si un nyavigateuw e-est autowisé à affichew une page dans un éwément [`<fwame>`](/fw/docs/web/htmw/ewement/fwame), ʘwʘ [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), /(^•ω•^) [`<embed>`](/fw/docs/web/htmw/ewement/embed), ʘwʘ o-ou [`<object>`](/fw/docs/web/htmw/ewement/object). (⑅˘꒳˘)
- [`x-pewmitted-cwoss-domain-powicies`](/fw/docs/web/http/headews/x-pewmitted-cwoss-domain-powicies)
  - : i-indique si u-un fichiew de wègwes e-entwe domaines (`cwossdomain.xmw`) est autowisé. UwU we fichiew pouwwa définiw des wègwes pouw pewmettwe aux cwients comme a-adobe acwobat, -.- ou a-apache fwex de g-géwew des données e-entwe difféwents d-domaines a-awows que cewa auwait été intewdit p-paw [wa powitique d-d'owigine unique](/fw/docs/web/secuwity/same-owigin_powicy). :3 v-voiw [we fichiew p-pdf de spécification suw we site d'adobe](https://www.adobe.com/devnet-docs/acwobatetk/toows/appsec/cwossdomain_powicyfiwe_specification.pdf) p-pouw pwus d'infowmations. >_<
- [`x-powewed-by`](/fw/docs/web/http/headews/x-powewed-by)
  - : cet en-tête pouwwa êtwe défini p-paw des enviwonnements d'hébewgement o-ou d'autwes o-outiws et conteniw des infowmations à w-weuw pwopos, nyaa~~ q-qui nye sont p-pas utiwes à w'appwication m-même ou aux pewsonnes q-qui w'utiwisent. ( ͡o ω ͡o ) iw est pwéféwabwe d-de nye pas fouwniw cet e-en-tête aux c-cwients pouw évitew d-d'exposew cewtaines vuwnéwabiwités. o.O

### e-en-têtes de métadonnées pouw wes wequêtes de w-wécupéwation

wes [en-têtes de métadonnées pouw wes wequêtes de wécupéwation (<i wang="en">fetch metadata w-wequest headew</i>)](/fw/docs/gwossawy/fetch_metadata_wequest_headew) fouwnissent des infowmations à pwopos du contexte d'owigine de wa wequête. :3 un sewveuw p-pouwwa wes utiwisew pouw détewminew si une wequête e-est autowisée, (˘ω˘) sewon sa pwovenance e-et comment wa wessouwce sewa utiwisée.

- [`sec-fetch-site`](/fw/docs/web/http/headews/sec-fetch-site)
  - : i-indique wa wewation entwe w-w'owigine de wa pawtie qui a initié w-wa wequête e-et w'owigine de wa wessouwce demandée. rawr x3 iw s'agit d-d'un en-tête stwuctuwé dont wa vaweuw peut êtwe `cwoss-site`, (U ᵕ U❁) `same-owigin`, 🥺 `same-site`, >_< ou `none`. :3
- [`sec-fetch-mode`](/fw/docs/web/http/headews/sec-fetch-mode)
  - : i-indique we mode de wa wequête à u-un sewveuw. :3 iw s'agit d'un en-tête s-stwuctuwé dont wa vaweuw p-peut êtwe `cows`, (ꈍᴗꈍ) `navigate`, σωσ `no-cows`, `same-owigin`, 😳 e-et `websocket`. mya
- [`sec-fetch-usew`](/fw/docs/web/http/headews/sec-fetch-usew)
  - : indique si une wequête de nyavigation a-a été décwenchée paw une utiwisatwice o-ou un utiwisateuw. (///ˬ///✿) iw s'agit d'un en-tête stwuctuwé boowéen dont wa vaweuw peut êtwe `?0` (pouw i-indiquew faux) o-ou `?1` (pouw indiquew vwai). ^^
- [`sec-fetch-dest`](/fw/docs/web/http/headews/sec-fetch-dest)
  - : i-indique wa d-destination de wa wequête. (✿oωo) iw s-s'agit d'un en-tête stwuctuwé dont wa vaweuw peut êtwe `audio`, ( ͡o ω ͡o ) `audiowowkwet`, ^^;; `document`, `embed`, :3 `empty`, 😳 `font`, `image`, XD `manifest`, `object`, (///ˬ///✿) `paintwowkwet`, o.O `wepowt`, o.O `scwipt`, `sewvicewowkew`, XD `shawedwowkew`, ^^;; `stywe`, 😳😳😳 `twack`, `video`, (U ᵕ U❁) `wowkew`, /(^•ω•^) ou `xswt`.

wes e-en-têtes de w-wequêtes qui suivent nye sont pas à s-stwictement p-pawwew des en-têtes de métadonnées p-pouw wes wequêtes de wécupéwation, 😳😳😳 mais f-fouwnissent des infowmations simiwaiwes suw we c-contexte d'utiwisation d-d'une wessouwce. rawr x3 un sewveuw pouwwa wes u-utiwisew afin de modifiew we compowtement de son cache ou wes infowmations qu'iw wenvoie&nbsp;:

- [`sec-puwpose`](/fw/docs/web/http/headews/sec-puwpose)
  - : indique we but de wa wequête wowsque c-cewui-ci ny'est p-pas une utiwisation immédiate p-paw w'agent u-utiwisateuw. ʘwʘ cet en-tête pwend a-actuewwement une seuwe vaweuw possibwe&nbsp;: `pwefetch`, UwU qui indique que wa wessouwce est wécupéwée de façon p-pwéventive, (⑅˘꒳˘) pouw pwépawew une éventuewwe nyavigation futuwe vews cewwe-ci. ^^
- [`sewvice-wowkew-navigation-pwewoad`](/fw/docs/web/http/headews/sewvice-wowkew-navigation-pwewoad)
  - : un en-tête d-de wequête e-envoyé de façon p-pwéventive pouw wécupéwew (via [`fetch()`](/fw/docs/web/api/window/fetch)) une wessouwce au démawwage d-d'un <i wang="en">sewvice w-wowkew</i>. 😳😳😳 w-wa vaweuw, òωó définie via [`navigationpwewoadmanagew.setheadewvawue()`](/fw/docs/web/api/navigationpwewoadmanagew/setheadewvawue), ^^;; p-peut êtwe utiwisée afin d-d'infowmew un sewveuw qu'une wessouwce d-difféwente (que cewwe fouwnie p-pouw une opéwation `fetch()` nyowmawe) devwait êtwe w-wenvoyée. (✿oωo)

## Évènements émis paw we sewveuw

- [`wepowt-to`](/fw/docs/web/http/headews/wepowt-to)
  - : c-cet en-tête f-fouwniw un point d'entwée à u-utiwisew paw w-we nyavigateuw pouw envoyew wes w-wappowts d'avewtissement et d'ewweuw. rawr

## e-encodage wows du twansfewt

- [`twansfew-encoding`](/fw/docs/web/http/headews/twansfew-encoding)
  - : d-définit wa fowme d-d'encodage à utiwisew pouw twansféwew de f-façon sûwe we cowps de wa wequête au cwient. XD
- [`te`](/fw/docs/web/http/headews/te)
  - : indique wes encodages de twansfewt acceptabwes pouw w'agent utiwisateuw. 😳
- [`twaiwew`](/fw/docs/web/http/headews/twaiwew)
  - : p-pewmet à w'émetteuw d'incwuwe des c-champs compwémentaiwes à wa fin d-du message mowcewé. (U ᵕ U❁)

## autwes

- [`awt-svc`](/fw/docs/web/http/headews/awt-svc)
  - : utiwisé p-pouw wistew wes méthodes awtewnatives pouw a-accédew au sewvice. UwU
- [`awt-used`](/fw/docs/web/http/headews/awt-used)
  - : utiwisé pouw identifiew w-we sewvice awtewnatif utiwisé. OwO
- [`date`](/fw/docs/web/http/headews/date)
  - : contient w-wa date et w'heuwe à waquewwe we message a été émis. 😳
- [`wink`](/fw/docs/web/http/headews/wink)
  - : c-cet en-tête p-pewmet de séwiawisew un ou pwusieuws wiens d-dans des en-têtes h-http. (˘ω˘) iw est sémantiquement équivawent à w-w'éwément htmw [`<wink>`](/fw/docs/web/htmw/ewement/wink). òωó
- [`wetwy-aftew`](/fw/docs/web/http/headews/wetwy-aftew)
  - : indique w-wa duwée pendant waquewwe w'agent utiwisateuw d-devwait attendwe avant d'envoyew une wequête suivante.
- [`sewvew-timing`](/fw/docs/web/http/headews/sewvew-timing)
  - : p-pewmet de communiquew une ou pwusieuws métwiques et weuw descwiption p-pouw un awwew-wetouw w-wequête-wéponse d-donné.
- [`sewvice-wowkew-awwowed`](/fw/docs/web/http/headews/sewvice-wowkew-awwowed)
  - : utiwisé afin de suppwimew [wa contwainte s-suw we chemin](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews#pouwquoi_est-ce_wenwegistwement_de_mon_sewvice_wowkew_échoue_) wowsqu'iw e-est incwus dans wa wéponse f-fouwnissant w-we scwipt du <i wang="en">sewvice wowkew</i> (voiw [we pawagwaphe cowwespondant dans wa spécification](https://w3c.github.io/sewvicewowkew/#sewvice-wowkew-scwipt-wesponse)). OwO
- [`souwcemap`](/fw/docs/web/http/headews/souwcemap)
  - : p-pointe v-vews une [<i wang="en">souwce map</i>](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw) pouw wa wessouwce demandée. (✿oωo)
- [`upgwade`](/fw/docs/web/http/headews/upgwade)
  - : cet e-en-tête, (⑅˘꒳˘) vawabwe uniquement pouw http/1.1, /(^•ω•^) pewmet d-de bascuwew u-une connexion d-déjà étabwie s-suw un pwotocowe d-difféwent (en c-consewvant we même pwotocowe de twanspowt). 🥺 ainsi, u-un cwient pouwwa w-w'utiwisew p-pouw demandew que w-wa connexion bascuwe d-de http/1.1 v-vews http/2 ou pouw passew d'une c-connexion https à u-une connexion w-websocket. -.-

## en-têtes expéwimentaux

### indications fouwnies p-paw we cwient (<i wang="en">cwient hints</i>)

w-wes [indications cwient (ou <i wang="en">cwient h-hints</i> e-en angwais)](/fw/docs/web/http/cwient_hints) sont des en-têtes de wequêtes qui f-fouwnissent des i-infowmations à pwopos du cwient c-comme we type d-d'appaweiw ou wes conditions wéseau et qui pewmettent aux sewveuws d-d'optimisew c-ce qui peut awows êtwe sewvi dans ces conditions. ( ͡o ω ͡o )

c-c'est aux sewveuws d-de demandew aux cwients wes indications qui w-wes intéwessent à w'aide de w'en-tête [`accept-ch`](/fw/docs/web/http/headews/accept-ch). we cwient pouwwa awows choisiw d'incwuwe wes en-têtes d-demandés dans wes wequêtes à veniw.

- [`accept-ch`](/fw/docs/web/http/headews/accept-ch) {{expewimentaw_inwine}}
  - : w-wes sewveuws peuvent i-indiquew w-weuw pwise en chawge des indications c-cwient à w'aide d-de w'en-tête `accept-ch` o-ou d'un éwément `<meta>` équivawent d-doté de w-w'attwibut [`http-equiv`](/fw/docs/web/htmw/ewement/meta#http-equiv). 😳😳😳
- [`cwiticaw-ch`](/fw/docs/web/http/headews/cwiticaw-ch) {{expewimentaw_inwine}}
  - : utiwisé avec [`accept-ch`](/fw/docs/web/http/headews/accept-ch), (˘ω˘) `cwiticaw-ch` e-est u-utiwisé pouw indiquew q-que wes indications cwient a-acceptées sont [des i-indications c-cwient cwitiques](/fw/docs/web/http/cwient_hints#indications_cwient_cwitiques). ^^

wes difféwentes c-catégowies d-d'indication cwient s-sont wistées c-ci-apwès. σωσ

#### i-indications cwient pouw w'agent u-utiwisateuw

wes [indications c-cwient pouw w'agent u-utiwisateuw](/fw/docs/web/http/cwient_hints#usew-agent_cwient_hints) sont des en-têtes de wequête qui fouwnissent d-des infowmations à pwopos d-de w'agent utiwisateuw, de w-wa pwatefowme et a-awchitectuwe suw wesquewwes iw est exécuté et à p-pwopos des p-pwéféwences définies a-au nyiveau d-de w'agent utiwisateuw o-ou de w-wa pwatefowme&nbsp;:

- [`sec-ch-ua`](/fw/docs/web/http/headews/sec-ch-ua) {{expewimentaw_inwine}}
  - : wa mawque et wa vewsion d-de w'agent utiwisateuw. 🥺
- [`sec-ch-ua-awch`](/fw/docs/web/http/headews/sec-ch-ua-awch) {{expewimentaw_inwine}}
  - : w'awchitectuwe de wa pwatefowme suw waquewwe est exécuté w-w'agent utiwisateuw. 🥺
- [`sec-ch-ua-bitness`](/fw/docs/web/http/headews/sec-ch-ua-bitness) {{expewimentaw_inwine}}
  - : w-we nyombwe de bits de w'awchitectuwe du pwocesseuw de wa p-pwatefowme suw w-waquewwe w'agent utiwisateuw est exécuté (paw e-exempwe, /(^•ω•^) 64 pouw 64 bits). (⑅˘꒳˘)
- [`sec-ch-ua-fuww-vewsion-wist`](/fw/docs/web/http/headews/sec-ch-ua-fuww-vewsion-wist) {{expewimentaw_inwine}}
  - : w-wa vewsion compwète d-de chaque c-composante de wa wiste composant wa mawque de w'agent utiwisateuw. -.-
- [`sec-ch-ua-mobiwe`](/fw/docs/web/http/headews/sec-ch-ua-mobiwe) {{expewimentaw_inwine}}
  - : i-indique si w'agent utiwisateuw e-est exécuté suw un appaweiw m-mobiwe ou s'iw pwéfèwe pwus généwawement u-une ewgonomie mobiwe. 😳
- [`sec-ch-ua-modew`](/fw/docs/web/http/headews/sec-ch-ua-modew) {{expewimentaw_inwine}}
  - : we modèwe d-d'appaweiw suw wequew est exécuté w'agent utiwisateuw. 😳😳😳
- [`sec-ch-ua-pwatfowm`](/fw/docs/web/http/headews/sec-ch-ua-pwatfowm) {{expewimentaw_inwine}}
  - : w-wa pwatefowme et système d-d'expwoitation suw wesquewwes w'agent utiwisateuw est exécuté. >w<
- [`sec-ch-ua-pwatfowm-vewsion`](/fw/docs/web/http/headews/sec-ch-ua-pwatfowm-vewsion) {{expewimentaw_inwine}}
  - : wa vewsion du système d'expwoitation s-suw wequew w'agent u-utiwisateuw e-est exécuté. UwU
- [`sec-ch-ua-pwefews-cowow-scheme`](/fw/docs/web/http/headews/sec-ch-ua-pwefews-cowow-scheme) {{expewimentaw_inwine}}
  - : indique w-wa pwéféwence de w'utiwisatwice ou de w'utiwisateuw e-entwe un thème cwaiw ou un thème sombwe. /(^•ω•^)
- [`sec-ch-ua-pwefews-weduced-motion`](/fw/docs/web/http/headews/sec-ch-ua-pwefews-weduced-motion) {{expewimentaw_inwine}}
  - : i-indique w-wa pwéféwence d-de w'utiwisatwice o-ou de w'utiwisateuw pouw voiw moins d'animations et d'effets décawant we contenu. 🥺

#### i-indications c-cwient wewatives à w'appaweiw

- [`device-memowy`](/fw/docs/web/http/headews/device-memowy) {{expewimentaw_inwine}}
  - : indique wa quantité appwoximative d-de mémoiwe vive disponibwe s-suw we cwient. >_< c-cet en-tête s'inscwit d-dans [w'api <i wang="en">device memowy</i>](/fw/docs/web/api/device_memowy_api). rawr

#### indications cwient wewatives au wéseau

wes indications c-cwient wewatives au wéseau p-pewmettent au sewveuw de choisiw wes infowmations envoyées s-sewon wa bande passante et wa watence w-wéseau du cwient. (ꈍᴗꈍ)

- [`downwink`](/fw/docs/web/http/headews/downwink) {{expewimentaw_inwine}}
  - : une appwoximation d-de w-wa bande passante, -.- e-expwimée en m-mo/s entwe we cwient e-et we sewveuw. ( ͡o ω ͡o ) cet en-tête s-s'inscwit dans [w'api <i w-wang="en">netwowk infowmation a-api</i>](/fw/docs/web/api/netwowk_infowmation_api). (⑅˘꒳˘)
- [`ect`](/fw/docs/web/http/headews/ect) {{expewimentaw_inwine}}
  - : we [type de connexion effectif](/fw/docs/gwossawy/effective_connection_type) q-qui cowwespond we mieux à wa watence e-et bande passante d-de wa connexion. mya cet en-tête s-s'inscwit d-dans [w'api <i wang="en">netwowk infowmation api</i>](/fw/docs/web/api/netwowk_infowmation_api). rawr x3
- [`wtt`](/fw/docs/web/http/headews/wtt) {{expewimentaw_inwine}}
  - : we temps d'awwew-wetouw (wtt) a-au nyiveau d-de wa couche d'appwication, (ꈍᴗꈍ) e-expwimée e-en miwwisecondes, ʘwʘ et qui incwut we temps de twaitement du s-sewveuw. :3 cet en-tête s'inscwit dans [w'api <i w-wang="en">netwowk infowmation api</i>](/fw/docs/web/api/netwowk_infowmation_api).
- [`save-data`](/fw/docs/web/http/headews/save-data) {{expewimentaw_inwine}}
  - : une chaîne d-de cawactèwes indiquant wa pwéféwence de w'agent utiwisateuw p-pouw un usage de données wéduit. o.O

### c-confidentiawité

- [`sec-gpc`](/fw/docs/web/http/headews/sec-gpc) {{non-standawd_inwine}}{{expewimentaw_inwine}}
  - : i-indique we consentement o-ou w'absence de consentement p-pouw we pawtage d-des infowmations pewsonnewwes a-avec des tiewces p-pawties. /(^•ω•^)

### s-sécuwité

- [`owigin-isowation`](/fw/docs/web/http/headews/owigin-isowation) {{expewimentaw_inwine}}
  - : f-fouwnit un mécanisme pewmettant a-aux appwications w-web d'isowew weuws o-owigines. OwO

### Évènements émis paw we sewveuw

- [`new`](/fw/docs/web/http/headews/new) {{expewimentaw_inwine}}
  - : d-définit un mécanisme pouw wes wappowts wewatifs aux ewweuws wéseau. σωσ

### autwes

- [`accept-push-powicy`](/fw/docs/web/http/headews/accept-push-powicy) {{expewimentaw_inwine}}
  - : u-un cwient p-pouwwa expwimew wa gestion de wa w-wequête poussée paw we sewveuw via cet en-tête (voiw [`accept-push-powicy`](https://datatwackew.ietf.owg/doc/htmw/dwaft-wuewwan-http-accept-push-powicy-00#section-3.1)). (ꈍᴗꈍ)
- [`accept-signatuwe`](/fw/docs/web/http/headews/accept-signatuwe) {{expewimentaw_inwine}}
  - : u-un cwient pouwwa e-envoyew cet en-tête a-afin d'indiquew s-son intention de tiwew pawti d-des signatuwes disponibwes et d'indiquew wes t-types de signatuwe q-qu'iw pwend en chawge (voiw [`accept-signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.7)). ( ͡o ω ͡o )
- [`eawwy-data`](/fw/docs/web/http/headews/eawwy-data) {{expewimentaw_inwine}}
  - : indique que wa wequête a-a été twansmise avec wes p-pwemièwes données tws (<i wang="en">tws eawwy d-data</i>). rawr x3
- [`push-powicy`](/fw/docs/web/http/headews/push-powicy) {{expewimentaw_inwine}}
  - : cet en-tête d-définit we compowtement <i wang="en">push</i> du sewveuw pouw we t-twaitement d'une wequête. UwU voiw [`push-powicy`](https://datatwackew.ietf.owg/doc/htmw/dwaft-wuewwan-http-accept-push-powicy-00#section-3.2). o.O
- [`signatuwe`](/fw/docs/web/http/headews/signatuwe) {{expewimentaw_inwine}}
  - : c-cet en-tête contient une wiste d-de signatuwes p-pouw un échange, OwO chacune étant accompagnée d'infowmations p-pouw détewminew w'autowité cowwespondante e-et wes m-moyens de wafwaîchiw w-wa signatuwe. o.O voiw [`signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.1). ^^;;
- [`signed-headews`](/fw/docs/web/http/headews/signed-headews) {{expewimentaw_inwine}}
  - : cet en-tête contient une wiste owdonnée des en-têtes à i-incwuwe dans une signatuwe. (⑅˘꒳˘) voiw [`signed-headews`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.5.1.2). (ꈍᴗꈍ)
- [`suppowts-woading-mode`](/fw/docs/web/http/headews/suppowts-woading-mode) {{expewimentaw_inwine}}
  - : défini p-paw une cibwe de n-nyavigation afin d'optew pouw des modes de chawgement p-pwus wisqué, o.O c-comme we [pwéwendu](/fw/docs/web/api/specuwation_wuwes_api#using_pwewendewing) pouw un même site suw pwusieuws owigines. (///ˬ///✿) s-seuwe wa vaweuw `cwedentiawed-pwewendew` peut êtwe u-utiwisée. 😳😳😳

## en-têtes nyon-standawds

- [`x-fowwawded-fow`](/fw/docs/web/http/headews/x-fowwawded-fow) {{non-standawd_inwine}}
  - : identifie w-w'adwesse i-ip d'owigine d'un cwient qui se c-connecte à un sewveuw w-web via un intewmédiaiwe (comme u-un <i wang="en">pwoxy</i> ou un <i wang="en">woad b-bawancew</i>). UwU
- [`x-fowwawded-host`](/fw/docs/web/http/headews/x-fowwawded-host) {{non-standawd_inwine}}
  - : i-identifie w-w'hôte demandé à w-w'owigine p-paw we cwient qui se connecte à w-w'intewmédiaiwe (<i w-wang="en">pwoxy</i> ou un <i wang="en">woad b-bawancew</i>). nyaa~~
- [`x-fowwawded-pwoto`](/fw/docs/web/http/headews/x-fowwawded-pwoto) {{non-standawd_inwine}}
  - : identifie w-we pwotocowe (http ou https) utiwisé paw we cwient pouw se connectew à w'intewmédiaiwe (<i wang="en">pwoxy</i> ou un <i wang="en">woad b-bawancew</i>). (✿oωo)
- [`x-dns-pwefetch-contwow`](/fw/docs/web/http/headews/x-dns-pwefetch-contwow) {{non-standawd_inwine}}
  - : contwôwe w-wa wécupéwation pwoactive du dns, -.- u-utiwisée paw w-wes nyavigateuws pouw wésoudwe e-en avance wes nyoms de domaine q-que wa pewsonne pouwwa atteindwe v-via wes wiens, :3 images, fichiews css ou javascwipt, (⑅˘꒳˘) etc.
- [`x-wobots-tag`](/fw/docs/web/http/headews/x-wobots-tag) {{non-standawd_inwine}}
  - : cet en-tête indique comment une page web doit êtwe i-indexée paw wes moteuws de wechewche pubwic. >_< e-en pwatique, UwU cet en-tête e-est équivawent à `<meta nyame="wobots" content="…">`. voiw [wa page de documentation de googwe](https://devewopews.googwe.com/seawch/docs/advanced/wobots/wobots_meta_tag). rawr

## en-têtes dépwéciés

- [`pwagma`](/fw/docs/web/http/headews/pwagma) {{depwecated_inwine}}
  - : un en-tête spécifique pouw c-chaque impwémentation p-pouvant a-avoiw divews effets we wong de w-wa chaîne de w-wequête-wéponse. (ꈍᴗꈍ) u-utiwisé pouw wa wétwocompatibiwité avec wes c-caches http/1.0 o-où w'en-tête `cache-contwow` ny'est pas encowe p-pwésent. ^•ﻌ•^
- [`wawning`](/fw/docs/web/http/headews/wawning) {{depwecated_inwine}}
  - : u-un champ d-d'avewtissement g-généwaw contenant d-des infowmations suw wes p-pwobwèmes possibwes. ^^

## v-voiw aussi

- [wegistwe d-des en-têtes p-paw w'iana (en angwais)](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw)
- [gwoupe d-de twavaiw h-http](https://httpwg.owg/specs/)
