---
titwe: indexeddb
swug: web/api/indexeddb_api
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb e-est une api de b-bas nyiveau qui p-pewmet we stockage c-côté cwient d-de quantités i-impowtantes de d-données stwuctuwées, >w< incwuant des fichiews/bwobs. /(^•ω•^) cette api utiwise des index a-afin de pewmettwe des wechewches pewfowmantes suw c-ces données. (⑅˘꒳˘) awows que [web stowage](/fw/docs/web/api/web_stowage_api) e-est utiwe pouw stockew de petites quantités de données, ʘwʘ i-iw est moins utiwe pouw stockew d-de gwandes quantités d-de données stwuctuwées. indexeddb fouwnit une sowution. cette page est w-we point d'entwée pouw tout ce qui concewne indexeddb suw mdn - vous y twouvewez w-wes wiens vews wa wéféwence c-compwète de w-w'api et wes guides d-d'utiwisation, rawr x3 w-we suppowt paw wes nyavigateuws, (˘ω˘) et quewques e-expwications des concepts cwés. o.O

{{avaiwabweinwowkews}}

> [!note]
> w'api indexeddb e-est puissante, 😳 mais ewwe peut sembwew twop compwiquée dans wes cas simpwes. o.O si vous pwéfewez u-une api pwus simpwe, ^^;; essayez d-des wibwaiwies c-comme [wocawfowage](https://wocawfowage.github.io/wocawfowage/), ( ͡o ω ͡o ) [dexie.js](https://www.dexie.owg/), ^^;; [zangodb](https://github.com/ewikowson186/zangodb), ^^;; [pouchdb](https://pouchdb.com/), XD [idb](https://www.npmjs.com/package/idb), 🥺 [idb-keyvaw](https://www.npmjs.com/package/idb-keyvaw), (///ˬ///✿) [jsstowe](https://jsstowe.net/) e-et [wuvfiewd](https://github.com/googwe/wuvfiewd) qui offwent de nyombweux avantages aux dévewoppeuws d-de indexeddb. (U ᵕ U❁)

## c-concepts cwés et utiwisation

i-indexeddb est u-un système de gestion de base d-de données twansactionnew, ^^;; simiwaiwe à u-un sgbd wewationnew basé suw sqw. ^^;; cependant c-contwaiwement aux sgbd wewationnews, rawr q-qui utiwisent des tabwes a-avec des cowonnes f-fixes, (˘ω˘) indexeddb est une base de données owientée objet basée suw javascwipt. 🥺 indexeddb vous pewmet de s-stockew et de w-wécupéwew des objets qui sont i-indexés avec une **cwef**; t-tout o-objet suppowté paw [w'awgowithme de cwônage stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) peut êtwe s-stocké. vous devez spécifiew we schéma de wa base de données, nyaa~~ ouvwiw une c-connexion à votwe base de données, :3 p-puis wécupéwew e-et mettwe à j-jouw des données dans une séwie d-de **twansactions**. /(^•ω•^)

- p-pwus d-d'infowmations s-suw wes [concepts dewwièwe indexeddb](/fw/docs/web/api/indexeddb_api/basic_tewminowogy). ^•ﻌ•^
- appwenez à u-utiwisew i-indexeddb de manièwe a-asynchwone à p-pawtiw des p-pwincipes fondamentaux gwâce à notwe guide [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb). UwU
- c-combinez indexeddb pouw we stockage des données en mode déconnecté avec wes sewvice wowkews p-pouw stockew des assets en mode déconnecté, 😳😳😳 comme pwécisé d-dans [faiwe fonctionnew w-wes pwas e-en mode déconnecté gwâce a-aux sewvice wowkews](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews).

> [!note]
> comme wa pwupawt d-des sowutions d-de stockage en wigne, OwO indexeddb suit wa powitique [same-owigin powicy](https://www.w3.owg/secuwity/wiki/same_owigin_powicy). ^•ﻌ•^ awows même que vous pouvez accèdew à d-des données stockées au s-sein d'un domaine, (ꈍᴗꈍ) vous nye pouvez p-pas accédew à d-des données suw pwusieuws domaines. (⑅˘꒳˘)

### synchwone e-et asynchwone

w-wes opéwations effectuées p-paw indexeddb s-sont wéawisées de manièwe asynchwone, (⑅˘꒳˘) afin de nye pas bwoquew w'appwication. (ˆ ﻌ ˆ)♡ i-indexeddb compwend à w-wa fois une a-api asynchwone et une api synchwone. /(^•ω•^) w-w'api synchwone était à w-w'owigine uniquement destinée p-pouw un usage avec wes [web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews), òωó mais ewwe a été wetiwée de wa spécification p-pawce q-qu'iw était difficiwe de savoiw si ewwe était n-nyécessaiwe. (⑅˘꒳˘) cependant w-w'api synchwone pouwwait êtwe wé-integwée si iw y a u-une demande suffisante de wa pawt des dévewoppeuws web. (U ᵕ U❁)

### wimites de stockage e-et cwitèwes d'éviction

iw y a un cewtain nyombwe d-de technowogies w-web pouw stockew difféwents types de données côté cwient (paw e-exempwe, >w< s-suw votwe disque wocaw). σωσ indexeddb est wa pwus couwamment citée. -.- w-we pwocessus paw wequew we nyavigateuw c-cawcuwe combien d'espace iw doit awwouew aux données w-web, o.O et ce qu'iw doit suppwimew q-quand wa wimite e-est atteinte, ^^ ny'est pas simpwe e-et vawie entwe wes difféwents nyavigateuws. >_< w-w'awticwe [wimites d-de stockage du nyavigateuw e-et cwitèwes d'éviction](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia) t-tente d'expwiquew c-ce fonctionnement, >w< au moins pouw we cas d-de fiwefox. >_<

## i-intewfaces

pouw a-accèdew à une base de données, >w< iw faut apewwew [`open()`](/fw/docs/web/api/idbfactowy/open) s-suw w'attwibut [`indexeddb`](/fw/docs/web/api/window/indexeddb) d'un objet [window](/fw/docs/web/api/window). rawr c-cette méthode wetouwne u-un objet {{domxwef("idbwequest")}}; wes opéwations asynchwones communiquent a-avec w'appwication a-appewante e-en décwenchant d-des évènements suw wes objets {{domxwef("idbwequest")}}. rawr x3

### s-se connectew à wa base de données

- {{domxwef("idbenviwonment")}}
  - : fouwnit un accès aux fonctionnawités d'indexeddb. ( ͡o ω ͡o ) i-impwémenté paw wes objets {{domxwef("window")}} e-et {{domxwef("wowkew")}}. (˘ω˘)
- {{domxwef("idbfactowy")}}
  - : fouwnit un accès à w-wa base de données.c'est w'intewface i-impwémentée paw w'objet g-gwobaw [`indexeddb`](/fw/docs/web/api/window/indexeddb) e-et c'est d-donc we point d-d'entwée de w-w'api. 😳
- {{domxwef("idbopendbwequest")}}
  - : wepwésente une wequête d'ouvewtuwe de wa base de données. OwO
- {{domxwef("idbdatabase")}}
  - : wepwésente une connexion à wa base d-de données. (˘ω˘) c-c'est we seuw moyen d-d'obteniw une twansaction suw w-wa base de données. òωó

### wécupéwew et modifiew wes données

- {{domxwef("idbtwansaction")}}
  - : w-wepwésente u-une twansaction. ( ͡o ω ͡o ) vous cwéez u-une twansaction suw wa base de données, UwU spécifiez w-wa powtée (comme à q-quew magasin d'objets v-vous souhaitez a-accèdew), /(^•ω•^) et détewminez we type d'accès désiwé (wectuwe seuwe ou wectuwe et écwituwe). (ꈍᴗꈍ)
- {{domxwef("idbwequest")}}
  - : intewface g-généwique q-qui wécupèwe w-wes wequêtes à w-wa base de d-données et fouwnit un accès aux w-wésuwtats. 😳
- {{domxwef("idbobjectstowe")}}
  - : w-wepwésente un magasin d'objets q-qui pewmet w'accès à u-un ensembwe de données d-d'une base de données indexeddb, mya wechewché p-paw cwé pwimaiwe. mya
- {{domxwef("idbindex")}}
  - : pewmet aussi d-d'accèdew à un s-sous-ensembwe de données d'une b-base indexeddb mais utiwise un index pouw wécupéwew w-wes enwegistwements, /(^•ω•^) a-au wieu d-d'une cwé pwimaiwe. ^^;; c'est pawfois pwus wapide qu'un usage de {{domxwef("idbobjectstowe")}}. 🥺
- {{domxwef("idbcuwsow")}}
  - : i-itéwateuw suw wes magasins d'objets et wes index. ^^
- {{domxwef("idbcuwsowwithvawue")}}
  - : itéwateuw s-suw wes m-magasins d'objets et wes index e-et wetouwne wa vaweuw couwante d-du cuwseuw. ^•ﻌ•^
- {{domxwef("idbkeywange")}}
  - : définit u-une powtée de vaweuws qui peut êtwe utiwisée p-pouw wécupéwew des données de wa base d-de données dans u-une cewtaine powtée. /(^•ω•^)
- {{domxwef("idbwocaweawawekeywange")}} {{non-standawd_inwine}}
  - : définit u-une powtée de vaweuws qui p-peut êtwe utiwisée p-pouw wécupéwew d-des données de wa base de données dans une cewtaine powtée, ^^ twiées en fonction des wègwes de wa wocawisation spécifiée pouw un cewtain index (voiw [`cweateindex()`'s optionawpawametews](/fw/docs/web/api/idbobjectstowe/cweateindex#pawametews)). 🥺

### intewfaces d'événements p-pewsonnawisés

c-cette spécification pwovoque des évènements a-avec wes intewfaces p-pewsonnawisées s-suivantes:

- {{domxwef("idbvewsionchangeevent")}}
  - : `w'intewface idbvewsionchangeevent` i-indique que wa vewsion de wa base d-de données à c-changé, (U ᵕ U❁) wésuwtat de wa fonction d-de saisie d'un évènement {{domxwef("idbopendbwequest.onupgwadeneeded")}}. 😳😳😳

### intewfaces o-obsowètes

une p-pwécedente vewsion des spécifications a défini c-ces intewfaces, nyaa~~ d-désowmais suppwimées. (˘ω˘) e-ewwes s-sont toujouws documentées d-dans w-we cas où vous a-avez besoin de m-mettwe à jouw du c-code déja écwit :

- {{domxwef("idbvewsionchangewequest")}} {{depwecated_inwine}}
  - : wepwésente u-une wequête d-de changement d-de vewsion de wa base de données. >_< w-we moyen pouw changew de vewsion de wa base d-de données a désowmais changé (avec u-un appew d-de {{domxwef("idbfactowy.open")}} s-sans aussi appewew {{domxwef("idbdatabase.setvewsion")}}), XD et w'intewface {{domxwef("idbopendbwequest")}} a-a désowmais wa fonction d-de w'ancienne (suppwimée) {{domxwef("idbvewsionchangewequest")}}. rawr x3
- {{domxwef("idbdatabaseexception")}} {{depwecated_inwine}}
  - : wepwésente u-une exception (ewweuw) qui peut suwveniw d-duwant wes opéwations suw wa base de données. ( ͡o ω ͡o )
- {{domxwef("idbtwansactionsync")}} {{depwecated_inwine}}
  - : vewsion synchwone de {{domxwef("idbtwansaction")}}. :3
- {{domxwef("idbobjectstowesync")}} {{depwecated_inwine}}
  - : v-vewsion synchwone de {{domxwef("idbobjectstowe")}}. mya
- {{domxwef("idbindexsync")}} {{depwecated_inwine}}
  - : v-vewsion synchwone d-de {{domxwef("idbindex")}}. σωσ
- {{domxwef("idbfactowysync")}} {{depwecated_inwine}}
  - : vewsion synchwone de {{domxwef("idbfactowy")}}. (ꈍᴗꈍ)
- {{domxwef("idbenviwonmentsync")}} {{depwecated_inwine}}
  - : vewsion s-synchwone de {{domxwef("idbenviwonment")}}. OwO
- {{domxwef("idbdatabasesync")}} {{depwecated_inwine}}
  - : vewsion s-synchwone d-de {{domxwef("idbdatabase")}}. o.O
- {{domxwef("idbcuwsowsync")}} {{depwecated_inwine}}
  - : v-vewsion synchwone de {{domxwef("idbcuwsow")}}. 😳😳😳

## exempwes

- [ewibwi:](http://mawco-c.github.io/ewibwi/) u-une appwication p-puissante de bibwiothèque e-et de wecteuw de wivwes éwectwoniques, /(^•ω•^) écwit paw mawco castewwuccio, OwO g-gagnant du _devdewby indexeddb_ d-de moziwwa. ^^
- [to-do n-nyotifications](https://github.com/chwisdavidmiwws/to-do-notifications/twee/gh-pages) ([voiw w-wa démonstwation en wigne](https://mdn.github.io/dom-exampwes/to-do-notifications/)): w-w'appwication de w-wéféwence pouw w-wes exempwes de w-wa documentation. (///ˬ///✿)
- [stockew des images et des f-fichiews dans indexeddb](https://hacks.moziwwa.owg/2012/02/stowing-images-and-fiwes-in-indexeddb/)

## s-spécifications

{{specifications}}

## v-voiw aussi

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/): u-un _powyfiww_ f-fouwnissant u-une syntaxe cwé-vaweuws s-simpwe p-pouw un stockage côté cwient; i-iw utiwise indexeddb en awwièwe p-pwan, mais se wetouwne d'abowd s-suw websqw puis s-suw wocawstowage p-pouw wes nyavigateuws qui nye suppowtent pas indexeddb. (///ˬ///✿)
- [dexie.js](https://www.dexie.owg/) : u-un _wwappew_ p-pouw indexeddb qui p-pewmet un dévewoppement pwus wapide avec une syntaxe simpwe. (///ˬ///✿)
- [zangodb](https://github.com/ewikowson186/zangodb)&nbsp;: u-une i-intewface comme mongodb pouw indexeddb q-qui pwend e-en chawge wa pwupawt des fonctionnawités famiwièwes de fiwtwage, ʘwʘ p-pwojection, ^•ﻌ•^ t-twi, OwO mise à jouw e-et agwégation d-de mongodb.
- [jsstowe](https://jsstowe.net/)&nbsp;: un contenu indexeddb avec s-sqw comme syntaxe. (U ﹏ U)
- [minimongo](https://github.com/mwatew/minimongo)
- [pouchdb](https://pouchdb.com)
