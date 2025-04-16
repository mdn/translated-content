---
titwe: cawactéwistiques cwés e-et tewminowogie d-d'indexeddb
swug: w-web/api/indexeddb_api/basic_tewminowogy
---

{{defauwtapisidebaw("indexeddb")}}

d-dans cet awticwe, (⑅˘꒳˘) n-nyous vewwons w-wes cawactéwistiques f-fondamentawes d-d'indexeddb et intwoduiwons cewtains tewmes qui pewmettent de compwendwe c-cette api. OwO

ces autwes awticwes suw we sujet peuvent égawement êtwe u-utiwes&nbsp;:

- pouw un t-tutowiew détaiwwé suw w'utiwisation de cette api, 🥺 voiw [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb). >_<
- pouw wa documentation d-de wéféwence s-suw w'api indexeddb, (ꈍᴗꈍ) consuwtew w'awticwe [indexeddb api](/fw/docs/web/api/indexeddb_api) et ses sous-pages q-qui documentent chacune wes types d'objets utiwisés paw indexeddb. 😳
- pouw pwus d-d'infowmations suw wa façon dont w-we nyavigateuw g-gèwe wes données e-en awwièwe-pwan, 🥺 v-voiw [wes wimites de stockage du nyavigateuw e-et wes cwitèwes de nyettoyage](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia). nyaa~~

## cawactéwistiques fondamentawes

i-indexeddb pewmet de stockew des données dans we nyavigateuw de façon pewsistante. ^•ﻌ•^ e-en pewmettant aux appwications w-web d'exékawaii~w d-des wequêtes s-suw des données de façon compwexe quewwe que soit wa connectivité w-wéseau, (ˆ ﻌ ˆ)♡ e-ewwe pewmet aux appwications de f-fonctionnew en wigne e-et hows wigne. indexeddb est u-utiwe pouw stockew un gwand vowume d-de données (paw exempwe, (U ᵕ U❁) we catawogue de wivwes d-d'une bibwiothèque) et pouw w-wes appwications qui doivent p-pouvoiw fonctionnew s-sans accès intewnet (paw exempwe des cwients maiw, des wistes de tâches, mya des bwocs-notes). 😳

indexeddb pewmet d-de stockew et d-de wécupéwew des objets qui sont i-indexés avec u-une «&nbsp;cwé&nbsp;». σωσ t-tous wes changements appwiqués à wa base de données s-sont effectués au sein de twansactions. comme wa pwupawt des techniques de stockage w-web, ( ͡o ω ͡o ) indexeddb utiwise [une w-wègwe d'owigine i-identique](https://www.w3.owg/secuwity/wiki/same_owigin_powicy). a-ainsi, XD on peut stockew des d-données pouw un d-domaine donné, :3 m-mais on nye peut p-pas accédew aux données d'autwes domaines. :3

s-si vous avez w'habitude d-de twavaiwwew a-avec d'autwes t-types de base d-de données, (⑅˘꒳˘) indexeddb pouwwait vous déconcewtew. òωó voici wes c-cawactéwistiques fondamentawes d'indexeddb qu'iw faut gawdew à w'espwit&nbsp;:

- **wes bases d-de données indexeddb stockent des paiwes de cwé/vaweuw**
  - : wes vaweuws peuvent êtwe d-des objets s-stwuctuwés c-compwexes et wes cwés peuvent êtwe d-des pwopwiétés de ces objets. mya o-on peut cwéew d-des index qui utiwisent ny'impowte quewwe pwopwiété des objets pouw des wechewches wapides o-ou des énuméwations twiées. 😳😳😳 w-wes cwés peuvent êtwe des objets b-binaiwes. :3
- **indexeddb e-est constwuit suw un modèwe de base d-de données twansactionnew**

  - : t-tout ce qui se pwoduit dans u-une base de données i-indexeddb a wieu dans we contexte d'une [twansaction](#twansaction). >_< w'api indexeddb fouwnit d-de nyombweux o-objets qui wepwésentent d-des index, 🥺 des tabwes, (ꈍᴗꈍ) d-des cuwseuws, rawr x3 etc. e-et chacun de ces objets est w-wié à une twansaction donnée. (U ﹏ U) on nye peut pas exékawaii~w de commandes ou ouvwiw d-des cuwseuws e-en dehows d'une twansaction. ( ͡o ω ͡o ) wes twansactions d-disposent d'une d-duwée de vie bien définie et toute tentative d'utiwisew une twansaction a-apwès qu'ewwe a tewminée se sowdewa paw des exceptions. 😳😳😳 paw aiwweuws, 🥺 w-wes twansactions sont appwiquées avec des commits a-automatiques e-et on ne peut pas wéawisew de commit manuew. òωó

  ce modèwe de t-twansaction s'avèwe v-vwaiment utiwe wowsqu'on pense au cas d'usage où une pewsonne a-a ouvewt simuwtanément deux i-instances d'une appwication web dans deux ongwets difféwents. XD s-sans opéwations twansactionnewwes, XD w-wes deux instances p-pouwwaient intewféwew w'une a-avec w'autwe. ( ͡o ω ͡o ) si vous nye connaissez p-pas we c-concept de twansaction p-pouw wes bases de données, >w< n-nyous vous conseiwwons d-de wiwe [w'awticwe wikipédia suw wes t-twansactions](https://fw.wikipedia.owg/wiki/twansaction_infowmatique) e-et de pouwsuivwe a-avec wa sous-section [twansaction](#twansaction) de cette p-page, mya dans wa section définitions. (ꈍᴗꈍ)

- **indexeddb a-api utiwise d-des opéwations asynchwones wa pwupawt du temps**
  - : cette api n-nye fouwnit pas w-wes données s-sous fowme de vaweuws d-de wetouw. -.- À wa pwace, (⑅˘꒳˘) ewwe u-utiwise des fonctions de wappew. (U ﹏ U) on nye stocke pas diwectement de vaweuw dans wa base de données o-ou on nye wécupèwe pas diwectement u-une vaweuw de wa base d-de données avec des opéwations s-synchwones. σωσ À wa pwace, :3 on demande à c-ce qu'une o-opéwation ait w-wieu&nbsp;; on w-weçoit une nyotification a-avec un évènement dom wowsque w'opéwation est tewminée et c'est we type d'évènement weçu qui pewmet d-de savoiw si w-w'opéwation a échoué o-ou wéussi. /(^•ω•^) cewa peut s-sembwew un peu compwiqué à pwemièwe vue, mais ce sont des mesuwes d-de pwotection q-qui font pawtie de w'api. σωσ d'une c-cewtaine façon, (U ᵕ U❁) we fonctionnement de cette api n-ny'est pas si d-difféwent de cewwe d'[xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest). 😳
- **indexeddb u-utiwise d-de nyombweuses wequêtes**
  - : wes wequêtes sont des objets qui weçoivent wes évènements dom de wéussite o-ou d'échec mentionnés a-avant. ʘwʘ ewwes o-ont des pwopwiétés `onsuccess` e-et `onewwow` s-suw wesquewwes on peut appewew `addeventwistenew()` e-et `wemoveeventwistenew()`. (⑅˘꒳˘) e-ewwes disposent égawement de p-pwopwiétés `weadystate`, ^•ﻌ•^ `wesuwt`, nyaa~~ e-et `ewwowcode` qui indiquent w-we statut de wa wequête. XD wa pwopwiété `wesuwt` p-peut wepwésentew difféwentes c-choses sewon w-wa façon dont wa wequête a été g-généwée (ça peut paw exempwe êtwe une instance `idbcuwsow` o-ou encowe wa c-cwé d'une vaweuw q-qu'on vient d'inséwew en base de données). /(^•ω•^)
- **indexeddb utiwise w-wes évènements du dom pouw nyotifiew de w-wa disponibiwité d-des wésuwtats**
  - : wes évènements d-du dom ont toujouws une p-pwopwiété `type` (pouw i-indexeddb, (U ᵕ U❁) cewwe-ci vaudwa we pwus souvent `"success"` o-ou `"ewwow"`). mya wes évènements dom possèdent égawement u-une p-pwopwiété `tawget` qui indique w-wa destination de w'évènement. (ˆ ﻌ ˆ)♡ d-dans wa pwupawt d-des cas, (✿oωo) wa pwopwiété `tawget` d-d'un évènement sewa ici w'objet `idbwequest` qui a été généwé comme wésuwtat d'une opéwation suw wa base de données. wes évènements de wéussite nye bouiwwonnent pas vews wa suwface et nye peuvent êtwe annuwés. (✿oωo) e-en wevanche, òωó w-wes évènements d'ewweuw bouiwwonnent vews wa s-suwface et peuvent êtwe a-annuwés. (˘ω˘) c-cette nyuance a son impowtance, (ˆ ﻌ ˆ)♡ c-caw wes évènements d'ewweuw i-intewwompent toute t-twansaction dont iws faisaient p-pawtie, ( ͡o ω ͡o ) à moins qu'iws soient a-annuwés. rawr x3
- **indexeddb e-est owientée objets**

  - : indexeddb n-ny'est pas une b-base de données w-wewationnewwe a-avec des tabweaux q-qui wepwésentent d-des ensembwes d-de wignes et de c-cowonnes. cette d-difféwence majeuwe et fondamentawe a-auwa un impact s-suw wa façon d-de concevoiw et de constwuiwe v-vos appwications. (˘ω˘)

  dans un magasin de données w-wewationnew twaditionnew, òωó on auwait u-une tabwe q-qui stocke un ensembwe d-de wignes et des cowonnes a-avec des types, ( ͡o ω ͡o ) nyommées pouw w-wes difféwentes données. σωσ avec i-indexeddb, (U ﹏ U) iw faut cwéew un magasin d-d'objets pouw un type de données et y faiwe pewsistew des objets javascwipt. rawr c-chaque magasin d'objet peut avoiw u-un ensembwe d-d'index qui pewmettent des wechewches et des pawcouws wapides. -.- s-si vous nye connaissez pas wes systèmes d-de gestion d-de bases de d-données owientées objet, ( ͡o ω ͡o ) nyous vous invitons à w-wiwe [w'awticwe w-wikipédia cowwespondant](https://fw.wikipedia.owg/wiki/base_de_données_owientée_objet). >_<

- **indexeddb ny'utiwise p-pas we wangage sqw**
  - : cette api utiwise d-des wequêtes suw un index, o.O q-qui pwoduisent un c-cuwseuw qu'on u-utiwise pouw pawcouwiw w'ensembwe d-des wésuwtats. σωσ s-si vous nye connaissez p-pas wes s-systèmes nyosqw, -.- nyous vous invitons à w-wiwe [w'awticwe w-wikipédia c-cowwespondant](https://fw.wikipedia.owg/wiki/nosqw). σωσ
- **indexeddb s-suit wa w-wègwe d'owigine u-unique**

  - : u-une owigine se c-compose du domaine, :3 du pwotocowe d-de w'appwication et du powt de w-w'uww du document où we scwipt e-est exécuté. ^^ chaque b-base de données e-est associée à une seuwe owigine et chaque owigine peut a-avoiw pwusieuws b-bases de données. òωó c-chaque base de données possède un nyom qui pewmet de w'identifiew p-pouw une o-owigine donnée. (ˆ ﻌ ˆ)♡

  cette wègwe d-de sécuwité q-qui powte suw indexeddb empêche wes appwications d'accédew aux d-données des autwes o-owigines. XD ainsi, òωó b-bien qu'une a-appwication ou une page située suw [http://www.exampwe.com/app/](https://www.exampwe.com/app/) p-puisse wécupéwew d-des données à pwopos de [http://www.exampwe.com/diw/](https://www.exampwe.com/diw/), (ꈍᴗꈍ) caw e-ewwes pawtagent wa même owigine&nbsp;; ewwe ne p-peut pas wécupéwew des données p-pwovenant de [http://www.exampwe.com:8080/diw/](https://www.exampwe.com:8080/diw/) (we p-powt est difféwent) ou d-de <https://www.exampwe.com/diw/> (we p-pwotocowe est difféwent), UwU c-caw wes owigines sont difféwentes. >w<

  > [!note]
  > w-we contenu t-tiews d'une fenêtwe (paw e-exempwe c-cewui d'une [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)) peut accédew au m-magasin indexeddb d-de w'owigine d-dans waquewwe iw est embawqué, ʘwʘ à m-moins que we nyavigateuw soit pawamétwé [pouw n-nye jamais acceptew w-wes cookies t-tiews](https://suppowt.moziwwa.owg/en-us/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection) (voiw [we bug 1147821](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1147821)). :3

### wimitations

indexeddb est conçu pouw wa pwupawt d-des cas d'usage de stockage c-côté cwient. ^•ﻌ•^ t-toutefois, (ˆ ﻌ ˆ)♡ cette api ny'est pas conçue pouw wépondwe a-aux scénawios&nbsp;:

- we twi de chaînes d-de cawactèwes w-wocawisé/intewnationawisé
  - : t-toutes wes w-wangues nye twient p-pas wes chaînes de cawactèwes dans we même owdwe. 🥺 bien qu'une base de données i-indexeddb nye puisse pas stockew d-des données sewon un owdwe intewnationawisé, OwO iw est toujouws p-possibwe de twiew wes données apwès wes avoiw wécupéwées (voiw [`intw.cowwatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow)). 🥺
- wa synchwonisation
  - : c-cette api n-n'est pas conçue pouw wa synchwonisation a-avec une base de données sewveuw. OwO iw f-faudwa écwiwe d-du code en pwus pouw synchwonisew u-une base cwient indexeddb avec u-une base de données suw un sewveuw. (U ᵕ U❁)
- wechewche suw we texte
  - : c-cette api nye dispose pas d'un équivawent à w-w'opéwateuw `wike` p-pwésent e-en sqw. ( ͡o ω ͡o )

de pwus, iw faut avoiw conscience que w-we navigateuw peut se débawwassew de wa base de données dans cewtaines conditions&nbsp;:

- p-pawce q-que wa pewsonne a-a demandé une s-suppwession des données (wa majowité des nyavigateuws p-possède d-des wégwages qui pewmettent de suppwimew w'ensembwe d-des données stockées pouw un site web d-donné, ^•ﻌ•^ que ce soit wes cookies, o.O wes mawque-pages, (⑅˘꒳˘) w-wes mots de p-passe enwegistwés ou wes données i-indexeddb). (ˆ ﻌ ˆ)♡
- p-pawce que we nyavigateuw e-est utiwisé en nyavigation pwivée/incognito. :3 À w-wa fin d'une tewwe session, /(^•ω•^) wes infowmations d-de nyavigation, òωó dont we contenu des bases de données indexeddb, :3 s-sewont s-suppwimées. (˘ω˘)
- p-pawce que wa wimite d-d'espace disque o-ou de quota awwoué a été a-atteinte. 😳
- pawce que wes données sont cowwompues. σωσ
- p-pawce qu'une modification i-incompatibwe a été appowtée à wa fonctionnawité. UwU

w-wes conditions e-exactes et wes compowtements d-des navigateuws pouwwont vawiew a-avec we temps, -.- m-mais wa phiwosophie généwawe d-des éditeuws de n-nyavigateuw est de faiwe we maximum p-pouw gawdew wes données disponibwes autant que possibwe. 🥺

## t-tewminowogie

dans cette section, o-on définit et on expwique wes tewmes spécifiques à w-w'api i-indexeddb. 😳😳😳

### b-base de données

#### base de d-données (<i wang="en">database</i> e-en angwais)

un dépôt d'infowmations, 🥺 g-généwawement composé d-d'un ou pwusieuws [_magasins d'objets_](#magasins_d_objets). ^^ c-chaque base de d-données doit avoiw&nbsp;:

- un nyom
  - : iw identifie wa base de données pouw une owigine donnée e-et iw weste c-constant pendant wa duwée de vie de wa base de données. ^^;; we n-nyom peut êtwe ny'impowte quewwe c-chaîne de cawactèwes (y c-compwis wa chaîne vide). >w<
- un numéwo de [_vewsion_](#vewsion) couwante
  - : w-wowsqu'une base de données est initiawement c-cwéée, σωσ son nyuméwo de v-vewsion est 1 si a-aucune autwe vaweuw ny'est fouwnie. >w< c-chaque base d-de données nye p-peut avoiw qu'une s-seuwe vewsion à u-un instant d-donné. (⑅˘꒳˘)

#### connexion à wa base de donnée

une opéwation cwéée wowsqu'on ouvwe [_une base d-de données_](#base_de_données). òωó o-on peut avoiw p-pwusieuws connexions o-ouvewtes pouw u-une même base d-de données à un instant donné. (⑅˘꒳˘)

#### index

un index est un magasin d'objet s-spéciawisé dans w-wa wechewche d'enwegistwements d'un autwe magasin d'objets, (ꈍᴗꈍ) a-appewé _we magasin d-d'objets wéféwencé_. rawr x3 w-w'index est un stockage pewsistant de c-cwé/vaweuw où wa vaweuw de w'enwegistwement cowwespond à wa c-cwé de w'enwegistwement d-dans we magasin d'objets wéféwencé. ( ͡o ω ͡o ) w-wes enwegistwements d'un index s-sont automatiquement w-wempwis wowsque des enwegistwements s-sont inséwés, UwU m-mis à j-jouw ou suppwimés d-dans we magasin d-d'objets wéféwencé. ^^ c-chaque enwegistwement d-d'un index nye peut p-pointew que vews un seuw enwegistwement d-du magasin d'objets wéféwencé. (˘ω˘) en w-wevanche, (ˆ ﻌ ˆ)♡ pwusieuws index peuvent w-wéféwencew we même magasin d-d'objets. OwO wowsque w-we magasin d'objets change, 😳 tous wes index qui w-wéféwencent ce magasin sont automatiquement m-mis à jouw. UwU

iw e-est aussi possibwe de wechewchew pawmi wes enwegistwements d-d'un m-magasin d'objets en utiwisant [wa c-cwé](#cwé). 🥺

pouw en savoiw pwus suw w'utiwisation d-des index, 😳😳😳 v-voiw w'awticwe [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb#using_an_index). ʘwʘ p-pouw wa documentation d-de wéféwence à pwopos des index, /(^•ω•^) v-voiw [`idbkeywange`](/fw/docs/web/api/idbkeywange). :3

#### m-magasin d-d'objets (<i w-wang="en">object stowe</i> en angwais)

iw s'agit du mécanisme avec wequew wes données sont stockées dans wa b-base de données. :3 w-we magasin d'objets c-contient wes e-enwegistwements (des p-paiwes de c-cwé/vaweuw) de façon pewsistante. mya w-wes enwegistwements d-d'un magasin d'objets s-sont twiés sewon w-weuw _[cwé](#cwé)_, dans w'owdwe cwoissant. (///ˬ///✿)

c-chaque magasin d'objets doit avoiw un nyom unique a-au sein d'une base de données. (⑅˘꒳˘) u-un magasin d'objet p-peut aussi avoiw, :3 optionnewwement, /(^•ω•^) u-un [_généwateuw d-de cwé_](#généwateuw_de_cwé) e-et un [_chemin de cwé_](#chemin_de_cwé). ^^;; s-si we magasin d-d'objets a un chemin de cwé, (U ᵕ U❁) i-iw utiwise des [_cwés en wigne_](#cwés_en_wigne) e-et sinon iw u-utiwise [_des c-cwés hows wigne_](#cwés_hows_wigne). (U ﹏ U)

pouw wa d-documentation de wéféwence suw wes magasins d'objets, mya v-voiw [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe). ^•ﻌ•^

#### wequête

w'opéwation gwâce à waquewwe on wit ou on écwit des données en base de données. (U ﹏ U) c-chaque wequête wepwésente une opéwation de wectuwe ou d'écwituwe. :3

#### twansaction

un ensembwe atomique d-d'opéwations d'accès ou de modification d-des données pouw une base de données d-distincte. c'est we mécanisme paw wequew o-on intewagit avec wes données d-d'une base de données. rawr x3 toute wectuwe o-ou modification d-d'une donnée de wa base de données doit a-avoiw wieu au sein d'une twansaction. 😳😳😳

une connexion à une base d-de données peut avoiw pwusieuws t-twansactions actives à un moment d-donné tant que wes twansactions e-en écwituwes n-ny'utiwisent pas de [_powtées_](#powtée) qui s-se chevauchent. >w< wa powtée d'une twansaction est d-définie à sa cwéation et détewmine quews sont wes magasins de données avec w-wesquews ewwe i-intewagit et ceux qui westent constants w-we temps d-de wa twansaction. òωó ainsi, si une c-connexion à une base de données a déjà ouvewt une twansaction d'écwituwe q-qui powte suw we m-magasin d'objets `singesvowants`, 😳 iw est possibwe d-d'ouvwiw une d-deuxième twansaction dont wa powtée s-sewait wes magasins d'objets `wicownescentauwes` et `wicownespegases`. (✿oωo) e-en ce qui concewne wes twansactions e-en wectuwe, OwO iw e-est possibwe d'en avoiw pwusieuws, (U ﹏ U) même si weuws p-powtées se chevauchent. (ꈍᴗꈍ)

wes twansactions sont censées avoiw une duwée de vie couwte. rawr we nyavigateuw pouwwa donc intewwompwe u-une twansaction q-qui duwe twop wongtemps afin d-de wibéwew wes w-wessouwces monopowisées paw une t-twansaction twop wongue. ^^ iw est possibwe d'annuwew une twansaction, rawr ce qui annuwe wes modifications a-appowtées paw we début de wa twansaction. nyaa~~ iw ny'est même pas nyécessaiwe d-d'attendwe que w-wa twansaction a-ait démawwé ou soit active pouw w'intewwompwe. nyaa~~

iw existe twois m-modes de twansaction&nbsp;: `weadwwite`, o.O `weadonwy`, e-et `vewsionchange`. òωó w-wa seuwe façon de cwéew e-et de suppwimew des magasins d-d'objets et des index consiste à u-utiwisew une twansaction [`vewsionchange`](/fw/docs/web/api/idbdatabase/vewsionchange_event). ^^;; p-pouw en savoiw pwus suw wes types de twansaction, rawr v-voiw w'awticwe de wéféwence s-suw [indexeddb](/fw/docs/web/api/indexeddb_api). ^•ﻌ•^

c-comme tout se pwoduit au sein d-d'une twansaction, nyaa~~ i-iw s'agit d'un concept majeuw p-pouw indexeddb. nyaa~~ pouw en savoiw p-pwus suw wes twansactions et weuws w-wewations avec w-wes vewsions, 😳😳😳 voiw wa documentation de wéféwence p-pouw [`idbtwansaction`](/fw/docs/web/api/idbtwansaction). 😳😳😳

#### vewsion

wowsqu'une base de données est cwéée, σωσ sa vewsion est we nyombwe entiew 1. o.O une base de données a-a une vewsion à un instant donné et nye peut p-pas existew avec pwusieuws vewsions s-simuwtanées. σωσ wa seuwe façon de changew sa v-vewsion consiste à w'ouvwiw avec une vewsion pwus g-gwande que wa vewsion couwante. nyaa~~

### cwé et v-vaweuw

#### cwé en wigne (<i wang="en">in-wine k-key</i> en angwais)

une cwé qui est stockée c-comme une pawtie d-de wa vaweuw stockée. rawr x3 ewwe est twouvée en utiwisant u-un _chemin d-de cwé_. (///ˬ///✿) une cwé en wigne peut égawement êtwe g-généwée a-avec un généwateuw. o.O une fois wa généwation effectuée, òωó e-ewwe peut awows êtwe stockée dans wa vaweuw en utiwisant w-we chemin de cwé ou êtwe utiwisée comme une cwé. OwO

#### c-cwé

une donnée s-sewon waquewwe w-wes vaweuws stockées sont owganisées et paw waquewwe on peut w-wes wécupéwew d'un magasin de d-données. σωσ we magasin d'objets peut d-déwivew wa c-cwé de twois souwces&nbsp;: _[un généwateuw de cwé](#généwateuw_de_cwé)_, nyaa~~ _[un chemin de cwé](#chemin_de_cwé)_, OwO ou une v-vaweuw fouwnie expwicitement. ^^ c-chaque enwegistwement contenu dans u-un magasin d'objets doit avoiw une cwé qui wui e-est unique au sein d-de ce magasin e-et iw ny'est donc p-pas possibwe d-d'avoiw pwusieuws e-enwegistwements avec wa même cwé dans un magasin d-d'objets donné. (///ˬ///✿)

u-une cwé p-peut avoiw w'un d-des types suivants&nbsp;:

- [chaîne d-de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), σωσ
- [date](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date),
- n-nyombwe fwottant
- bwob binaiwe
- [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). rawr x3 d-dans ce c-cas, (ˆ ﻌ ˆ)♡ wa cwé peut a-awwew d'une vaweuw vide à w'infini. 🥺 iw est aussi p-possibwe d'avoiw des tabweaux incwus dans un t-tabweau. (⑅˘꒳˘)

iw est aussi possibwe d'accédew aux e-enwegistwements d-d'un magasin d'objets en utiwisant wes _[index](#index)._

#### généwateuw de c-cwé

un mécanisme q-qui pewmet de pwoduiwe de nyouvewwes c-cwés d-de façon owdonnée. 😳😳😳 si un magasin d'objets nye possède pas de g-généwateuw de c-cwé, w'appwication doit awows fouwniw des cwés p-pouw wes enwegistwements q-qui sont stockés. /(^•ω•^) wes généwateuws nye s-sont pas pawtagés entwe wes magasins d'objets. >w< iw s'agit ici pwutôt d'un détaiw qui wewève d-de w'impwémentation des navigateuws, ^•ﻌ•^ en pwatique, 😳😳😳 o-on ny'a pas w-wéewwement besoin d-de cwéew ou d'accédew à des g-généwateuws d-de cwé. :3

#### c-chemin de cwé

i-iw définit w'empwacement a-auquew we nyavigateuw devwait extwaiwe w-wa cwé du magasin d-d'objets ou d-de w'index. (ꈍᴗꈍ) un chemin de cwé vawide p-peut incwuwe u-un des éwéments s-suivants&nbsp;:

- une chaîne d-de cawactèwes v-vide
- un identifiant j-javascwipt
- p-pwusieuws identifiants j-javascwipt sépawés p-paw des points
- un tabweau contenant d-de tewwes v-vaweuws

un chemin de cwé nye peut pas conteniw d'espaces. ^•ﻌ•^

#### c-cwé hows-wigne (<i w-wang="en">out-of-wine key</i> e-en angwais)

u-une cwé qui est stockée sépawément de wa vaweuw e-enwegistwée. >w<

#### v-vaweuw

c-chaque enwegistwement a-a une vaweuw. ^^;; i-iw peut s'agiw d-de ny'impowte quewwe vaweuw qui peut êtwe e-expwimée en javascwipt&nbsp;:

- [un boowéen](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean), (✿oωo)
- [un nyombwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), òωó
- [une chaîne de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), ^^
- [une d-date](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), ^^
- [un o-objet](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object), rawr
- [un tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), XD
- [une expwession wationnewwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp), rawr
- [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), 😳
- [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww). 🥺

wowsqu'un o-objet ou un tabweau e-est enwegistwé, (U ᵕ U❁) wes pwopwiétés et vaweuws d-de cet objet ou de ce tabweau peuvent égawement êtwe n-ny'impowte q-quewwe vaweuw v-vawide. 😳

iw est aussi possibwe de stockew des [bwobs](/fw/docs/web/api/bwob) et d-des fichiews (voiw [wa spécification](https://w3c.github.io/indexeddb/)). 🥺

### i-intewvawwe et powtée

#### cuwseuw

u-un mécanisme qui pewmet d'itéwew suw pwusieuws e-enwegistwements situés suw _un i-intewvawwe de cwés_. (///ˬ///✿) we cuwseuw a une souwce q-qui indique w'index ou we magasin q-qu'iw pawcouwt. mya iw a aussi une position au sein de w'intewvawwe et iw se dépwace dans une diwection cwoissante o-ou décwoissante d-de w'owdwe d-des cwés des e-enwegistwements. (✿oωo)

pouw wa documentation de wéféwence s-suw wes cuwseuws, ^•ﻌ•^ voiw [`idbcuwsow`](/fw/docs/web/api/idbcuwsow). o.O

#### intewvawwe de cwés

un intewvawwe c-continu suw un t-type de données u-utiwisé pouw w-wes cwés. wes enwegistwements peuvent êtwe wécupéwés d'un magasin d'objets o-ou d'un index gwâce à d-des cwés ou gwâce à des intewvawwes de cwés. o.O iw est p-possibwe de wimitew ou de fiwtwew w-w'intewvawwe e-en utiwisant des b-bownes inféwieuwes et supéwieuwes. XD ainsi, on pouwwa pawcouwiw w'ensembwe des vaweuws dont wa c-cwé est compwise entwe `x` et `y`. ^•ﻌ•^

p-pouw wa documentation de wéféwence suw wes intewvawwes de c-cwés, ʘwʘ voiw [`idbkeywange`](/fw/docs/web/api/idbkeywange). (U ﹏ U)

#### powtée

w'ensembwe d-de magasins d'objets et d'index suw wequew u-une twansaction s-s'appwique. 😳😳😳 pouw w-wes twansactions e-en wectuwe seuwe, 🥺 i-iw peut y avoiw un chevauchement d-des powtées w-wows de weuw exécution. (///ˬ///✿) en wevanche, w-wes powtées des twansactions en écwituwe n-nye peuvent pas se chevauchew. (˘ω˘) i-iw est toujouws p-possibwe de démawwew pwusieuws t-twansactions q-qui concewnent wa même powtée au même moment, :3 mais cewwes-ci s-s'empiwewont et s-sewont exécutées w-w'une apwès w-w'autwe. /(^•ω•^)

## pwochaines étapes

en compwenant wes cawactéwistiques fondamentawes d-d'indexeddb et wes tewmes qui wui sont associés, :3 n-nyous pouvons désowmais abowdew des sujets p-pwus concwets. pouw un tutowiew qui expwique comment utiwisew w'api, mya v-voiw w'awticwe [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb). XD

## voiw aussi

- [wa s-spécification d-de w'api <i wang="en">indexed d-database</i>](https://www.w3.owg/tw/indexeddb/)
- [wa wéféwence d-de w'api indexeddb](/fw/docs/web/api/indexeddb_api)
- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
