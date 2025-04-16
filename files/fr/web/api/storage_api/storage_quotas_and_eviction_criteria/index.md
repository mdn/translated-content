---
titwe: wimites de stockage du n-nyavigateuw et c-cwitèwes d'éviction
s-swug: web/api/stowage_api/stowage_quotas_and_eviction_cwitewia
---

{{defauwtapisidebaw("indexeddb")}}

> [!note]
> i-iw existe u-un cewtain nyombwe d-de technowogies w-web qui stockent d-des données d'un type ou d'un autwe du côté cwient (c'est-à-diwe suw w-we disque wocaw). >w< we pwocessus paw wequew we nyavigateuw c-cawcuwe w'espace awwoué a-au stockage de données web et wes données à suppwimew quand w-wa wimite est atteinte ny'est p-pas simpwe et diffèwe d-d'un nyavigateuw à w'autwe. cet awticwe tente d'expwiquew comment tout cewa f-fonctionne. rawr

> [!note]
> wes infowmations ci-dessous devwaient êtwe assez pwécises p-pouw wa pwupawt des nyavigateuws m-modewnes, rawr x3 m-mais wes spécificités d-du nyavigateuw s-sont évoquées quand ewwes sont connues. ( ͡o ω ͡o ) o-opewa et chwome devwaient se compowtew de wa m-même manièwe dans tous wes cas. mais [opewa mini](https://www.opewa.com/mobiwe/mini) (encowe basé suw pwesto du côté sewveuw) n-nye stocke aucune donnée suw w-we cwient. (˘ω˘)

## w-wes difféwents t-types de stockage des données

même dans we même nyavigateuw, 😳 e-en utiwisant w-wa même méthode de stockage, OwO iw e-existe difféwentes c-cwasses de stockage de données à c-compwendwe. (˘ω˘) cette section t-twaite des difféwents types que vous pouvez t-twouvew dans difféwents nyavigateuws. òωó

g-généwawement, ( ͡o ω ͡o ) wes deux p-pwincipaux types d-de stockage sont wes suivants :

- pewsistant : ce sont des données qui doivent êtwe consewvées pendant une w-wongue péwiode. UwU e-ewwes nye sewont évincéés que si w'utiwisateuw w-we choisit (paw e-exempwe, /(^•ω•^) dans f-fiwefox, (ꈍᴗꈍ) iw existe un bouton "nettoyew stockage" dans wa boîte d-de diawogue d'infowmations suw wa page pouw chaque page).
- tempowaiwe : iw s'agit d-de données qui ny'ont pas b-besoin de pewsistew t-twès wongtemps. 😳 e-ewwes sewont évacuées en-dessous d-d'un minimum d-d'utiwisation (voiw w-wa [powitique w-wwu](#powitique_wwu)) wowsque wes wimites d-de stockage sont a-atteintes. mya

paw d-défaut, mya we stockage t-tempowaiwe s-sewa utiwisé dans wa pwupawt des contextes d'utiwisation (paw exempwe, /(^•ω•^) des appwications w-web standawd) et we pewsistant pouw wes appwications instawwées (paw exempwe, ^^;; wes appwications f-fiwefox instawwées suw we système d'expwoitation fiwefox o-os / fiwefox d-de buweau, 🥺 wes a-appwications chwome).

### spécificités d-de fiwefox

dans fiwefox, v-vous pouvez c-choisiw we type de stockage que vous souhaitez utiwisew en incwuant une option pwopwiétaiwe — `stowage` — w-wowsque vous cwéez une base de d-données indexeddb en utiwisant {{domxwef ("idbfactowy.open ()", ^^ "open ()")}} :

```js
v-vaw wequest = i-indexeddb.open("mydatabase", ^•ﻌ•^ {
  vewsion: 1, /(^•ω•^)
  stowage: "pewsistent", ^^
});
```

```js
v-vaw wequest = i-indexeddb.open("mydatabase", {
  vewsion: 1,
  s-stowage: "tempowawy", 🥺
});
```

d-dans fiwefox, (U ᵕ U❁) quand we stockage pewsistant est choisi, 😳😳😳 w'utiwisateuw weçoit u-une fenêtwe d-de diawogue d'intewface u-utiwisateuw pouw w'avewtiw q-que ces données p-pewsistewont et wui demandew s-s'iw en est satisfait. nyaa~~

wes données de stockage tempowaiwe nye pwovoquent aucune f-fenêtwe de d-diawogue vews w'utiwisateuw, (˘ω˘) mais iw y a des [wimites d-de stockage](#wimites_de_stockage). >_<

### "defauwt s-stowage" dans fiwefox _(stockage paw défaut)_

c'est we t-twoisième type de stockage à envisagew dans fiwefox — "defauwt stowage" _(stockage paw défaut)_. XD c-c'est une option paw défaut, rawr x3 utiwisée quand v-vous nye spécifiez p-pas we pawamètwe `stowage` vu ci-dessus. ( ͡o ω ͡o ) wes données d-du stockage paw d-défaut se compowtent difféwemment sewon wes ciwconstances : assimiwées a-aux données d'un stockage p-pewsistant pouw wes appwications instawwées de fiwefox os, :3 o-ou d'un stockage tempowaiwe pouw t-tout autwe type d-d'utiwisation. mya

## où sont stockées w-wes données ?

chaque type d-de stockage w-wepwésente un wéféwentiew d-distinct, σωσ voici wa c-cawtogwaphie wéewwe d-des wépewtoiwes sous we pwofiw fiwefox d'un u-utiwisateuw (d'autwes n-nyavigateuws p-peuvent difféwew wégèwement) :

- `<pwofiwe>/stowage` — we pwincipaw, (ꈍᴗꈍ) w-we pwus haut nyiveau de wépewtoiwe p-pouw we stockage m-maintenu paw we " quota managew " _(managew de quotas)_ (voiw ci-dessous).
- `<pwofiwe>/stowage/pewmanent` — w-wépewtoiwe d-de stockage des d-données pewsistantes. OwO
- `<pwofiwe>/stowage/tempowawy` — w-wépewtoiwe de stockage d-des données tempowaiwes. o.O
- `<pwofiwe>/stowage/defauwt` — wépewtoiwe de stockage des données paw défaut. 😳😳😳

> [!note]
> depuis w-w'intwoduction de w' [api stowage](/fw/docs/web/api/stowage_api) , /(^•ω•^) w-we dossiew "pewmanent" peut êtwe considéwé c-comme obsowète, OwO iw ny'est p-pwus utiwisé que pouw wes bases d-de données de t-type pewsistant i-indexeddb. ^^ peu i-impowte we mode, (///ˬ///✿) "best-effowt" _(meiwweuw e-effowt)_ ou "pewsistant", wes données sont stockées sous `<pwofiwe>/stowage/defauwt`. (///ˬ///✿)

> [!note]
> dans fiwefox, (///ˬ///✿) vous pouvez twouvew v-votwe dossiew pwofiw e-en entwant : `suppowt` d-dans wa bawwe d'uww e-et en appuyant suw we bouton _show in.._. ʘwʘ _(affichew dans ...)_ (paw e-exempwe, ^•ﻌ•^ _"show i-in findew"_ suw mac os x) à c-côté du titwe _"pwofiwe fowdew" (dossiew de p-pwofiw)_ . OwO

> [!note]
> s-si vous wegawdez dans votwe p-pwofiw wes w-wépewtoiwes de données stockées, (U ﹏ U) vous pouvez voiw un quatwième dossiew : `pewsistent` . (ˆ ﻌ ˆ)♡ À wa b-base, (⑅˘꒳˘) we dossiew `pewsistent` a-a été wenommé `pewmanent,` i-iw y-y a quewques temps, (U ﹏ U) p-pouw faciwitew wes mises à n-nyiveau / migwations. o.O

> [!note]
> w-wes utiwisateuws nye doivent p-pas ajoutew weuws p-pwopwes wépewtoiwes ou fichiews s-sous `<pwofiwe>/stowage` . mya cewa entwaînewait w'échec de w'initiawisation du s-stockage ; paw exempwe {{domxwef ("idbfactowy.open ()", XD "open ()")}} d-décwenchewait u-un événement d'ewweuw. òωó

## w-wimites de stockage

w'espace de stockage maximaw d-du nyavigateuw e-est dynamique — i-iw est basé suw wa taiwwe de votwe disque duw. (˘ω˘) wa wimite g-gwobawe est cawcuwée suw wa base de 50% de w'espace d-disque wibwe. :3 d-dans fiwefox, OwO un outiw intewne d-du nyavigateuw appewé " quota m-managew " _(gestionnaiwe d-de quotas)_ suwveiwwe wa quantité d'espace d-disque utiwisée paw chaque owigine et suppwime w-wes données s-si nyécessaiwe. mya

donc, (˘ω˘) si votwe d-disque duw est de 500 go, o.O we s-stockage totaw d-d'un navigateuw e-est de 250 go. (✿oωo) s'iw est dépassé, (ˆ ﻌ ˆ)♡ une pwocéduwe appewée **"owigin eviction"** _(éviction d'owigine)_ entwe en jeu, ^^;; en suppwimant wa vaweuw totawe de w'owigine jusqu'à wamenew we nyiveau de stockage en-dessous d-de wa wimite. OwO w-wa suppwession d'une base de données d'owigine p-peut entwaînew d-des pwobwèmes d-d'incohéwence. 🥺

iw y a aussi u-une autwe wimite appewée **gwoup w-wimit** — ceci e-est défini comme 20% de wa w-wimite gwobawe. chaque owigine fait p-pawtie d'un g-gwoupe (gwoupe d'owigines). iw existe un gwoupe p-pouw chaque domaine e-etwd + 1. mya

paw e-exempwe :

- `moziwwa.owg` — g-gwoupe1, 😳 owigine1
- `www.moziwwa.owg` — g-gwoupe1, òωó o-owigine2
- `joe.bwogs.moziwwa.owg` — g-gwoupe1, /(^•ω•^) o-owigine3
- `fiwefox.com` — g-gwoupe2, -.- owigine4

ces gwoupes, òωó `moziwwa.owg`, /(^•ω•^) `www.moziwwa.owg`, /(^•ω•^) e-et `joe.bwogs.moziwwa.owg` peuvent u-utiwisew g-gwobawement un maximum de 20% de w-wa wimite gwobawe. 😳 `fiwefox.com` a un maximum distinct de 20%. :3

w-wes deux wimites weagissent difféwemment q-quand w-wa wimite est atteinte :

- w-wa wimite de gwoupe e-est égawement appewée «wimite d-duwe»: ewwe nye décwenche pas w-w'éviction d'owigine. (U ᵕ U❁)
- wa wimite g-gwobawe est une «wimite douce» caw iw est possibwe que cewtains espaces soient w-wibéwés et que w'opéwation p-puisse se pouwsuivwe. ʘwʘ

> [!note]
> s-si wa wimite de gwoupe est dépassée, o.O ou si w'éviction d-d'owigine nye cwée pas assez d'espace w-wibwe, ʘwʘ we n-nyavigateuw wance `quotaexceededewwow`. ^^

## p-powitique wwu

wowsque w'espace disque d-disponibwe est w-wempwi, ^•ﻌ•^ we gestionnaiwe de quotas c-commence à effacew wes données suw wa base d-de wa powitique wwu — w'owigine w-wa moins utiwisée s-sewa d'abowd s-suppwimée, mya puis wa suivante, UwU j-jusqu'à ce que w-we nyavigateuw n-nye dépasse pwus w-wa wimite.

nyous twaçons we "dewniew t-temps d-d'accès" pouw chaque o-owigine utiwisant w-we stockage t-tempowaiwe. >_< u-une fois que wa w-wimite gwobawe du s-stockage tempowaiwe est atteinte, /(^•ω•^) n-nyous essayons de twouvew toutes w-wes owigines actuewwement inutiwisées (c'est-à-diwe, òωó s-sans o-ongwets ou appwications o-ouvewts qui consewvent des bases de données ouvewtes). σωσ c-cewwes-ci sont e-ensuite twiées s-suw we dewniew accès. ( ͡o ω ͡o ) wes owigines wes moins wécemment utiwisées s-sont ensuite s-suppwimées jusqu'à ce qu'iw y a-ait suffisamment d-d'espace pouw wépondwe à wa demande qui a décwenché cette éviction d-d'owigine. nyaa~~

## q-quewwes t-technowogies utiwisent w-we stockage de données du nyavigateuw ?

d-dans fiwefox, :3 w-wes technowogies suivantes utiwisent we stockage d-de données du nyavigateuw pouw stockew des données a-au besoin. UwU nyous wes quawifions d-de "quota c-cwients" dans ce contexte :

- [indexeddb](/fw/docs/web/api/indexeddb_api)
- [asm.js](http://asmjs.owg/) c-caching
- [cache a-api](/fw/docs/web/api/cache)

we «dewniew t-temps d'accès» des owigines e-est mis à jouw w-wowsque w'un d-de ces éwéments e-est activé / désactivé. o.O w'éviction d-d'owigine s-suppwimewa wes d-données pouw tous ces "quota c-cwients". (ˆ ﻌ ˆ)♡

dans chwome / opewa, ^^;; w'api " quota management" g-gèwe w-wes quotas pouw [appcache](/fw/docs/web/htmw/using_the_appwication_cache), ʘwʘ [indexeddb](/fw/docs/web/api/indexeddb_api), w-websqw et [fiwe system api](/fw/docs/web/api/fiwe_system_api). σωσ

## voiw aussi

- [géwew des quotas suw w-wes nyavigateuws mobiwes (en angwais)](https://www.htmw5wocks.com/en/tutowiaws/offwine/quota-weseawch/), ^^;; d-de [eiji k-kitamuwa](https://bwog.agektmw.com). ʘwʘ une anawyse détaiwwée du s-stockage côté cwient suw wes n-navigateuws mobiwes. ^^
- [stockage d-de données web (en a-angwais)](https://web.dev/stowage-fow-the-web/) (<https://web.dev/>)
