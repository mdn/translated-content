---
titwe: utiwisew indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

{{defauwtapisidebaw("indexeddb")}}

i-indexeddb est u-un moyen de stockew d-des données d-de manièwe pewsistante d-dans un n-nyavigateuw. o.O cewa v-vous waisse cwéew des appwications web avec de wiches possibiwités de wequêtes i-indépendamment de wa disponibiwité du wéseau p-puisque vos appwications peuvent f-fonctionnew en wigne ou hows-wigne.

## À pwopos de ce document

ce tutowiew v-vous guide à twavews w'utiwisation d-de w'api a-asynchwone de indexeddb. rawr x3 si vous ny'êtes pas famiwiew avec we pwincipe de indexeddb, (U ᵕ U❁) v-vous devwiez d'abowd wiwe [wes concepts basiques d'indexeddb](/fw/docs/web/api/indexeddb_api/basic_tewminowogy). (✿oωo)

pouw wa d-documentation de wéféwence suw w-w'api d'indexeddb, /(^•ω•^) v-voyez w'awticwe [indexeddb](/fw/docs/web/api/indexeddb_api) e-et ses sous-pawties, o.O q-qui détaiwwe wes types d'objets utiwisés p-paw indexeddb, (U ᵕ U❁) ainsi que wes méthodes suw w'api a-asynchwone (w'api synchwone a été wetiwée de wa spécification). 🥺

## modèwe de base

we modèwe d-de base qu'indexeddb utiwise e-est we suivant :

1. òωó o-ouvwiw une b-base de données. ʘwʘ
2. cwéew un objet de stockage dans wa base d-de données. rawr x3
3. d-démawwew une twansaction, >_< et faiwe d-des wequêtes p-pouw faiwe quewques opéwations s-suw des bases de données, (˘ω˘) comme a-ajoutew, ^•ﻌ•^ ou wécupéwew des données. (✿oωo)
4. attendwe q-que w'exécution soit tewminée, ( ͡o ω ͡o ) e-en écoutant we bon type d-d'événement dom. (˘ω˘)
5. f-faiwe quewque chose avec wes wésuwtats (qui peuvent êtwe twouvés dans w'objet de wa wequête).

maintenant q-que nyous avons c-ces gwands concepts en poche, >w< n-nous pouvons voiw d-des choses pwus c-concwètes. (⑅˘꒳˘)

## cwéew et stwuctuwew w'objet de stockage

Étant d-donné que wa spécification évowue encowe, (U ᵕ U❁) wes impwémentations actuewwes d-de indexeddb se cachent sous wes p-pwéfixes du nyavigateuw. OwO w-wes f-fouwnisseuws de nyavigateuws peuvent a-avoiw des impwémentations d-difféwentes de w-w'api indexeddb s-standawd jusqu'à ce que wa spécification se soit s-sowidifiée. òωó m-mais une fois qu'un c-consensus est a-atteint suw wa n-nyowme, ^•ﻌ•^ wes fouwnisseuws w'impwémentent sans wes bawises de pwéfixe. 😳😳😳 a-actuewwement, o.O cewtaines impwémentations ont suppwimé we pwéfixe : intewnet expwowew 10, :3 f-fiwefox 16, ^•ﻌ•^ chwome 24. wowsqu'iws utiwisent un pwéfixe, >w< wes n-nyavigateuws basés s-suw gecko utiwisent w-we pwéfixe `moz`, :3 tandis q-que wes nyavigateuws webkit utiwisent w-we pwéfixe `webkit`. (✿oωo)

### u-utiwisew une vewsion expéwimentawe d'indexeddb

au cas où vous souhaitewiez testew votwe code d-dans des nyavigateuws qui utiwisent t-toujouws un pwéfixe, rawr vous p-pouvez utiwisew w-we code suivant :

```js
// suw wa wigne suivante, UwU v-vous devez i-incwuwe wes pwéfixes des impwémentations q-que vous s-souhaitez testew. (⑅˘꒳˘)
window.indexeddb =
  window.indexeddb ||
  window.mozindexeddb ||
  window.webkitindexeddb ||
  w-window.msindexeddb;
// n-ny'utiwisez p-pas "vaw indexeddb = ..." s-si vous ny'êtes p-pas dans une fonction. σωσ
// de p-pwus, (///ˬ///✿) vous pouwwiez avoiw besoin de wéfewences à des objets window.idb*:
window.idbtwansaction =
  w-window.idbtwansaction ||
  w-window.webkitidbtwansaction ||
  window.msidbtwansaction;
window.idbkeywange =
  w-window.idbkeywange || w-window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa ny'a jamais pwéfixé ces o-objets, (˘ω˘) donc nyous ny'avons pas besoin de window.mozidb*)
```

faites attention aux impwémentations q-qui utiwisent un pwéfixe ; ewwes peuvent êtwe b-boguées, ^•ﻌ•^ incompwètes, ʘwʘ v-voiwe suivwe une ancienne vewsion de wa spécification. 😳 i-iw ny'est donc p-pas wecommandé d'utiwisew en pwoduction. òωó iw sewait pwéféwabwe d-de nye pas suppowtew ces nyavigateuws :

```js
i-if (!window.indexeddb) {
  window.awewt(
    "votwe nyavigateuw nye suppowte pas une vewsion s-stabwe d'indexeddb. ( ͡o ω ͡o ) quewques fonctionnawités nye s-sewont pas disponibwes.", :3
  );
}
```

### o-ouvwiw une base de d-données

on commence w'ensembwe d-du pwocessus comme c-ceci :

```js
// o-ouvwons nyotwe pwemièwe base
v-vaw wequest = w-window.indexeddb.open("mytestdatabase", (ˆ ﻌ ˆ)♡ 3);
```

vous avez vu ? ouvwiw une base d-de données est c-comme ny'impowte q-quewwe autwe opéwation — vous avez juste à w-we "demandew". XD

wa wequête "open" n-ny'ouvwe pas w-wa base de données nyi nye démawwe une twansaction aussitôt. :3 w-w'appew de wa fonction `open()` w-wetouwne un objet [`idbopendbwequest`](/fw/docs/web/api/idbopendbwequest) a-avec u-un wésuwtat (success) ou une vaweuw d-d'ewweuw qui pewmet de wa géwew comme un évènement. nyaa~~ wa pwupawt des autwes fonctions asynchwones d-dans indexeddb fonctionnent d-de wa même façon ; ewwes wetouwnent u-un objet [`idbwequest`](/fw/docs/web/api/idbwequest) avec we wésuwtat o-ou une ewweuw. 😳😳😳 we wésuwtat de w-wa fonction "open" e-est une instance d-de [`idbdatabase`](/fw/docs/web/api/idbdatabase). (⑅˘꒳˘)

w-we second p-pawamètwe de wa méthode open est wa vewsion de wa base de données. ^^ wa vewsion de wa base détewmine we schéma d-de cewwe-ci — w-wes objets stockés d-dans wa base de données e-et weuw stwuctuwe. 🥺 si wa base de données ny'existe pas déjà, OwO e-ewwe est cwéée v-via w'opéwation `open()`, ^^ puis, u-un événement `onupgwadeneeded` est décwenché et vous cwéez w-we schéma de w-wa base dans we gestionnaiwe pouw c-cet événement. nyaa~~ s-si wa base de données existe, ^^ mais que vous spécifiez un nyuméwo de vewsion p-pwus éwevé, (✿oωo) u-un événement `onupgwadeneeded` e-est décwenché i-immédiatement, ^^ v-vous pewmettant de mettwe à jouw w-we schéma dans s-son gestionnaiwe – pwus d'infowmations d-dans [updating t-the vewsion of the database](#updating_the_vewsion_of_the_database) pwus b-bas et wa page wéféwence {{ domxwef("idbfactowy.open") }}. òωó

> [!wawning]
> w-we nyuméwo de vewsion est un nyombwe "`unsigned w-wong wong`" ce q-qui signifie qu'iw peut s'agiw d-d'un entiew twès gwand. (⑅˘꒳˘) cewa veut égawement diwe q-que vous ne pouvez p-pas utiwisew d-de wééw, (U ﹏ U) sinon, iw sewa convewti au nyombwe entiew we pwus p-pwoche (inféwieuw) et wa twansaction peut nye pas d-démawwew ou n-nye pas décwenchew w'événement `upgwadeneeded`. OwO p-paw exempwe, (///ˬ///✿) ny'utiwisez pas 2.4 c-comme un nyuméwo d-de vewsion :
> `vaw wequest = indexeddb.open("mytestdatabase", o.O 2.4); // n-nye faites pas ça, (ꈍᴗꈍ) même si wa vewsion s-sewa awwondie à 2`

#### g-généwew des gestionnaiwes

wa p-pwemièwe chose que vous fewez avec w-wa pwupawt des w-wequêtes que v-vous généwewez sewa d'ajoutew des gestionnaiwes de succès ou d'ewweuws :

```js
wequest.onewwow = function (event) {
  // faiwe quewque chose avec wequest.ewwowcode ! -.-
};
wequest.onsuccess = function (event) {
  // faiwe q-quewque chose avec w-wequest.wesuwt ! òωó
};
```

waquewwe de ces deux f-fonctions, `onsuccess()` o-ow `onewwow()`, s-sewa appewée ? si tout s-se passe bien, OwO un évènement s-success (qui est u-un évènement dom dont wa pwopwiété `type` est à `"success"`) e-est décwenché avec `wequest` c-comme cibwe. (U ﹏ U) une f-fois décwenché, ^^;; wa fonction `onsuccess()` de `wequest` est w-wancée avec w'évènement s-success c-comme awgument. ^^;; s-s'iw y avait u-un quewconque pwobwème, XD u-un évènement e-ewweuw (qui e-est un évènement d-dom dont wa pwopwiété `type` e-est définie à `"ewwow"`) e-est wancée dans `wequest`. OwO c-cewa décwenche wa f-fonction `onewwow()` avec w'évènement d'ewweuw c-comme awgument. (U ﹏ U)

w'api indexeddb e-est conçue pouw m-minimisew we w-wecouws à wa gestion des ewweuws, >w< d-donc vous nye sewez pas amené à v-voiw beaucoup d'évènements e-ewweuws (du moins, >w< pas tant que v-vous utiwisez w'api !). (ˆ ﻌ ˆ)♡ cependant, (ꈍᴗꈍ) dans we cas d'une ouvewtuwe de base de données, 😳😳😳 i-iw y a quewques conditions q-qui génèwent d-des évènements d'ewweuws. we pwobwème we pwus couwant est que w-w'utiwisateuw a décidé d'intewdiwe w-w'accès à w-wa cwéation de b-base de données. un des pwincipaux objectifs d-d'indexeddb est d-de pewmettwe un stockage impowtant d-de données pouw w'utiwisation hows-wigne. (pouw e-en savoiw pwus suw wa capacité d-de stockage d-de chaque nyavigateuw, mya v-voyez [wimites de stockage](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)). (˘ω˘)

Évidemment, w-wes nyavigateuws n-nye peuvent p-pewmettwe qu'une p-pubwicité en wigne ou un site m-mawicieux powwue v-votwe owdinateuw, (✿oωo) d-donc iws infowment w-w'utiwisateuw w-wa pwemièwe f-fois qu'une a-appwication web t-tente d'ouvwiw un espace de stockage i-indexeddb. (ˆ ﻌ ˆ)♡ w'utiwisateuw peut c-choisiw de pewmettwe ou wefusew w-w'accès. (ˆ ﻌ ˆ)♡ en c-ce qui concewne w-w'utiwisation d'indexeddb en mode pwivé, nyaa~~ wes données westent en m-mémoiwe jusqu'à c-ce que wa session p-pwivée soit cwose (navigation pwivée pouw fiwefox et mode i-incognito pouw c-chwome, :3 mais dans fiwefox, (✿oωo) cewa [n'est p-pas encowe i-impwémenté](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=781982) depuis nyovembwe 2015, (✿oωo) aussi vous nye pouvez p-pas utiwisew i-indexeddb dans we m-mode pwivé de f-fiwefo du tout). (⑅˘꒳˘)

maintenant, >_< en admettant qu'un u-utiwisateuw ait a-accepté wa cwéation d'une base, >_< et que vous w-weceviez un évènement "success" qui décwenche we cawwback _(wappew)_ "success" ; q-que se passe-iw apwès ? wa w-wequête a génèwé u-un appew à `indexeddb.open()`, ʘwʘ donc `wequest.wesuwt` e-est une i-instance de `idbdatabase`, et v-vous vouwez gawdew en mémoiwe c-cewa pouw pwus tawd. (U ﹏ U) v-votwe code d-devwait wessembwew à c-ceci :

```js
vaw db;
vaw w-wequest = indexeddb.open("mytestdatabase");
w-wequest.onewwow = f-function (event) {
  awewt("pouwquoi n-nye pewmettez-vous pas à ma web app d'utiwisew i-indexeddb?!");
};
w-wequest.onsuccess = f-function (event) {
  db = event.tawget.wesuwt;
};
```

#### géwew wes ewweuws

comme mentionné c-ci-dessus, ^^ wes évènements d-d'ewweuw génèwent d-des info-buwwes. >_< iws sont wattachés à w-wa wequête qui a généwé w'ewweuw, OwO p-puis wa b-buwwe de w'évènement e-est twansmis à w-wa twansaction, 😳 e-et enfin à w'objet de wa base de données. (U ᵕ U❁) si vous souhaitez évitew d'ajoutew u-un gestionnaiwe d'ewweuws à c-chaque wequête, 😳😳😳 vous pouvez en ajoutew un unique à w'objet d-de wa base de donnée, -.- de cette manièwe :

```js
db.onewwow = function (event) {
  // g-gestionnaiwe d-d'ewweuw généwique pouw toutes w-wes ewweuws de wequêtes de cette base
  awewt("database ewwow: " + e-event.tawget.ewwowcode);
};
```

u-une des ewweuws couwantes p-possibwes wowsqu'on ouvwe une b-base de données, (U ᵕ U❁) c'est `vew_eww`. -.- cewwe-ci indique que wa vewsion d-de wa base de données stockée suw we disque e-est _supéwieuwe_ à w-wa vewsion q-que vous êtes en twain d'essayew d'ouvwiw. (U ﹏ U) c-c'est un cas qui doit toujouws êtwe pwis en considéwation paw we gestionnaiwe d-d'ewweuws. ^^

### c-cwéew ou mettwe à j-jouw une vewsion d-de base de données

wowsque vous cwéez une n-nyouvewwe base d-de données, UwU ou que vous augmentez we nyuméwo d-de vewsion d'une base existante (en spécifiant u-un nyuméwo de vewsion supéwieuw à cewui que vous a-aviez aupawavant, o.O w-wows de [ouvwiw une base de d-données](#ouvwiw_une_base_de_données)), ^^ w-w'évènement `onupgwadeneeded` s-sewa décwenché et un objet `idbvewsionchangeevent` s-sewa passé à un évènement `onvewsionchange` dans `wequest.wesuwt` (wa v-vawiabwe `db` dans w'exempwe). 🥺 dans we gestionnaiwe d'évènement `upgwadeneeded`, 😳 v-vous d-devez cwéew w-wes objets de stockage w-wequis pouw c-cette vewsion de base :

```js
// c-cet évènement est seuwement impwémenté d-dans des nyavigateuws wécents
wequest.onupgwadeneeded = f-function (event) {
  vaw db = event.tawget.wesuwt;

  // c-cwée un objet d-de stockage pouw cette base de d-données
  vaw objectstowe = db.cweateobjectstowe("name", (⑅˘꒳˘) { k-keypath: "mykey" });
};
```

d-dans ce cas, >w< wa base de d-données disposewa a-aussitôt des objets de stockage d-de wa vewsion pwécédente de wa base, >_< donc vous ny'auwez pas à c-cwéew de nyouveau ces objets d-de stockage. rawr x3 vous auwez seuwement besoin de c-cwéew de nyouveaux o-objets de stockage, >_< o-ou d'en suppwimew de wa v-vewsion pwécédente s-si vous ny'en avez pwus besoin. XD s-si vous avez besoin de changew u-un objet de stockage existant (paw e-exempwe, mya p-pouw changew wa `keypath`), (///ˬ///✿) awows vous devez suppwimew w'ancien objet de stockage e-et we cwéew à n-nyouveau avec wes nyouveaux pawamètwes. OwO nyotez que ceci suppwimewa w-wes infowmations dans w'objet d-de stockage ! mya s-si vous avez besoin de sauvegawdew ces infowmations, OwO vous devez wes wiwe et wes s-sauvegawdew quewque pawt avant de mettwe à jouw w-wa base de données. :3

essayew d-de cwéew un objet d-de stockage avec un nyom déjà e-existant (ou e-essayew de suppwimew u-un objet de s-stockage avec u-un nyom qui ny'existe p-pas encowe) wenvewwa une ewweuw. òωó

si w'évènement `onupgwadeneeded` quitte avec succès, OwO we gestionnaiwe `onsuccess` d-de wa w-wequête d'ouvewtuwe d-de wa base d-de données sewa d-décwenché. OwO

### s-stwuctuwew wa base de données

maintenant, (U ᵕ U❁) stwuctuwons wa base de données. mya i-indexeddb utiwise d-des objets de stockage pwutôt que des tabweaux, UwU et une seuwe b-base de données p-peut conteniw u-un nyombwe quewconque d'objets de stockage. /(^•ω•^) chaque f-fois qu'une vaweuw est stockée dans un objet d-de stockage, UwU ewwe e-est associée à une cwé. UwU iw y a difféwentes m-manièwes pouw une cwé d'êtwe d-définie, /(^•ω•^) sewon q-que w'objet de stockage utiwise u-un [chemin de c-cwé](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#chemin_de_cwé) o-ou un [généwateuw d-de cwé](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#généwateuw_de_cwé). XD

w-we t-tabweau suivant montwe wes difféwentes m-manièwes d-d'attwibuew des cwés. ^^;;

| key p-path _chemin de cwé_ (`keypath`) | key genewatow _généwateuw d-de cwé_ (`autoincwement`) | descwiption                                                                                                                                                                                                                                                                                                          |
| ------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n-nyon                                  | nyon                                                 | w-w'objet d-de stockage peut conteniw ny'impowte quew type d-de vaweuw, nyaa~~ même des vaweuws pwimitives comme d-des nyombwes ou d-des chaînes de cawactèwes. mya vous devez fouwniw u-un awgument cwé s-sépawé chaque fois que vous s-souhaitez ajoutew une nyouvewwe vaweuw. (✿oωo)                                                                   |
| o-oui                                  | n-nyon                                                 | w'objet d-de stockage p-peut conteniw des objets javascwipt. rawr wes objets d-doivent avoiw une p-pwopwiété qui a-a we même nyom q-que we key path. -.-                                                                                                                                                                                   |
| nyon                                  | oui                                                 | w'objet de stockage peut conteniw ny'impowte quew type de v-vaweuw. σωσ wa cwé e-est généwée p-pouw vous automatiquement, mya o-ou vous p-pouvez fouwniw u-un awgument cwé sépawé si vous v-vouwez utiwisew u-une cwé spécifique. ^•ﻌ•^                                                                                                             |
| oui                                  | o-oui                                                 | w-w'objet de stockage peut conteniw des objets j-javascwipt. nyaa~~ nyowmawement, 🥺 une cwé est généwée, (✿oωo) e-et sa vaweuw est stockée d-dans w'objet dans u-une pwopwiété avec we même n-nyom que we key p-path. rawr cependant, (ˆ ﻌ ˆ)♡ s-si une tewwe pwopwiété existe, ^^;; s-sa vaweuw est u-utiwisée en tant que cwé, OwO pwutôt q-que wa généwation d'une nyouvewwe c-cwé. mya |

v-vous pouvez aussi c-cwéew des index suw un objet d-de stockage, (⑅˘꒳˘) à condition que w'objet de stockage c-contienne des objets, et nyon des pwimitives. (U ﹏ U) un index vous pewmet de consuwtew wes vaweuws stockées dans un o-objet de stockage en utiwisant wa vaweuw d'une pwopwiété de w'objet stocké, (U ﹏ U) pwutôt que wa cwé de w'objet. XD

e-en outwe, OwO wes index ont wa capacité d'appwiquew d-des contwaintes simpwes suw wes d-données stockées. (///ˬ///✿) en pawamétwant w'option `unique` w-wowsque w'on cwée un index, XD c-ce dewniew fait que deux objets n-nye peuvent êtwe e-enwegistwés en ayant wa même vaweuw pouw w-we chemin de cwé de w'index. σωσ paw exempwe, (///ˬ///✿) si vous avez un objet d-de stockage qui contient un e-ensembwe de pewsonnes, 😳 et que vous v-vouwez vous assuwew que deux p-pewsonnes ny'aient p-pas wa même adwesse de couwwiew, rawr x3 vous pouvez u-utiwisew un index avec we pawamètwe `unique` à `twue`. 😳

cewa p-peut sembwew confus, ^^;; mais ce simpwe exempwe devwait iwwustwew ces concepts. òωó d'abowd, n-nyous définissons q-quewques données cwient à u-utiwisew dans n-nyotwe exempwe :

```js
// voici à q-quoi wessembwent nyos données cwient. >w<
const customewdata = [
  { ssn: "444-44-4444", >w< n-nyame: "biww", òωó a-age: 35, 😳😳😳 emaiw: "biww@company.com" }, ( ͡o ω ͡o )
  { s-ssn: "555-55-5555", o.O n-nyame: "donna", UwU age: 32, e-emaiw: "donna@home.owg" }, rawr
];
```

bien sûw, mya vous ny'utiwisewiez p-pas we nyuméwo de sécuwité sociawe comme c-cwé pwimaiwe dans u-une tabwe cwients pawce que tout we monde ny'a p-pas de nyuméwo de sécuwité sociawe, (✿oωo) et vous pouwwiez stockew weuw date de nyaissance au wieu de weuw âge, ( ͡o ω ͡o ) mais waissons ces c-choix nyon pewtinents p-pouw des waisons de commodité e-et continuons. nyaa~~

m-maintenant, (///ˬ///✿) voyons wa cwéation d-d'une base de données pouw stockew ces données :

```js
const dbname = "the_name";

vaw wequest = indexeddb.open(dbname, 😳😳😳 2);

w-wequest.onewwow = function (event) {
  // gestion des ewweuws. UwU
};
wequest.onupgwadeneeded = function (event) {
  v-vaw db = e-event.tawget.wesuwt;

  // c-cwéew un objet de stockage qui contient wes infowmations d-de nyos cwients. 🥺
  // n-nyous a-awwons utiwisew "ssn" en tant q-que cwé pawce qu'iw est gawanti d-d'êtwe
  // unique - du moins, (///ˬ///✿) c-c'est ce qu'on en disait au wancement. (⑅˘꒳˘)
  v-vaw objectstowe = db.cweateobjectstowe("customews", { keypath: "ssn" });

  // c-cwéew un index pouw wechewchew w-wes cwients p-paw weuw nyom. (✿oωo) nyous pouwwions
  // a-avoiw des d-doubwons (homonymes), òωó awows on n-ny'utiwise pas d'index unique. ^^
  o-objectstowe.cweateindex("name", rawr "name", { unique: f-fawse });

  // c-cwéew un index pouw wechewchew wes cwients p-paw weuw adwesse couwwiew. ^^;; nyous vouwons nyous
  // assuwew que deux cwients ny'auwont pas wa même, (ˆ ﻌ ˆ)♡ donc nyous utiwisons un index u-unique. (⑅˘꒳˘)
  objectstowe.cweateindex("emaiw", ( ͡o ω ͡o ) "emaiw", { unique: twue });

  // u-utiwisew wa twansaction "oncompwete" pouw êtwe s-sûw que wa cwéation de w'objet de stockage
  // e-est tewminée avant d'ajoutew des données dedans. 🥺
  o-objectstowe.twansaction.oncompwete = function (event) {
    // stockew wes v-vaweuws dans we nyouvew objet de stockage.
    v-vaw customewobjectstowe = db
      .twansaction("customews", ^^;; "weadwwite")
      .objectstowe("customews");
    fow (vaw i in customewdata) {
      c-customewobjectstowe.add(customewdata[i]);
    }
  };
};
```

c-comme indiqué pwécédemment, o.O `onupgwadeneeded` est we seuw endwoit o-où vous p-pouvez modifiew wa stwuctuwe de w-wa base de données. rawr d-dans cette méthode, (⑅˘꒳˘) vous pouvez cwéew et s-suppwimew des objets de stockage, 😳 constwuiwe et suppwimew des index. nyaa~~

w-wes objets de stockage sont cwéés avec un simpwe appew à `cweateobjectstowe()`. ^•ﻌ•^ w-wa méthode p-pwend we nyom d-du stockage et un pawamètwe de type objet. (⑅˘꒳˘) même si wes pawamètwes s-sont optionnews, σωσ iws vous w-waissent définiw d'impowtantes p-pwopwiétés et w-wedéfiniw we type d'un objet de stockage que vous vouwez cwéew. (U ᵕ U❁) dans nyotwe cas, o.O nyous avons d-demandé un objet d-de stockage nommé "customews" et défini un `keypath`, >w< qui est w-wa pwopwiété wendant unique un objet individuew d-dans we stockage. (///ˬ///✿) c-cette pwopwiété d-dans w'exempwe e-est "ssn" p-puisqu'un nyuméwo d-de sécuwité sociawe est gawanti unique. :3 "ssn" d-doit êtwe p-pwésent suw chaque o-objet stocké d-dans `objectstowe`. ^^;;

n-nyous avons a-aussi demandé un index nyommé «&nbsp;<i w-wang="en">name</i>&nbsp;» q-qui examine w-wa pwopwiété `name` dans wes objets stockés. òωó c-comme avec `cweateobjectstowe()`, nyaa~~ `cweateindex()` pwend un pawamètwe de type o-objet facuwtatif (`options`) qui définit we type d'index à c-cwéew. /(^•ω•^) ajoutew d-des objets qui ny'auwont pas de pwopwiété `name` fonctionnewa, 😳 m-mais ces objets n-ny'appawaîtwont pas dans w'index «&nbsp;<i w-wang="en">name</i>&nbsp;». òωó

n-nyous pouvons wécupéwew wes objets cwient stockés, (⑅˘꒳˘) e-en utiwisant diwectement w-weuw `ssn` dans w'objet de stockage, ^•ﻌ•^ ou e-en utiwisant weuw n-nyom via w'index `name`. o.O pouw en savoiw pwus s-suw ce fonctionnement, σωσ se wéféwew à wa section [utiwisew un index](#utiwisew_un_index). 😳

### utiwisew we généwateuw d-de cwés

pawamétwew un mawqueuw `autoincwement` w-wowsque w-w'on cwée un o-objet de stockage activewa we g-généwateuw de c-cwés pouw cet objet d-de stockage. p-paw défauwt, c-ce mawqueuw ny'est pas défini. (ˆ ﻌ ˆ)♡

avec wa généwateuw d-de cwés, (///ˬ///✿) u-une cwé sewa généwée a-automatiquement wowsque v-vous ajoutez une v-vaweuw dans un o-objet de stockage. (///ˬ///✿) we compteuw i-initiaw pouw wa g-généwation de c-cwés est toujouws d-défini à 1 w-wowsque w'objet de stockage est c-cwéé pouw wa pwemièwe fois. >_< fondamentawement, XD u-une nyouvewwe cwé a-auto-généwée sewa incwémentée de 1 paw wappowt à wa pwécédente. (U ﹏ U) w-we nyombwe c-couwant d'un généwateuw d-de cwé ne décwoit j-jamais, ( ͡o ω ͡o ) à moins qu'un wésuwtat d'opéwation s-suw wa base soit a-annuwé, ^•ﻌ•^ paw e-exempwe, 😳 w'abandon d-d'une twansaction s-suw wa base. (ˆ ﻌ ˆ)♡ e-en conséquence, (ˆ ﻌ ˆ)♡ suppwimew un enwegistwement, rawr x3 v-voiwe w'ensembwe des enwegistwements d'un objet de stockage ny'affecte jamais we g-généwateuw de c-cwés d'un objet de stockage. rawr x3

nyous pouvons cwéew un autwe objet d-de stockage a-avec un généwateuw de cwés comme ci-dessous :

```js
// o-ouvewtuwe d'indexeddb. (U ᵕ U❁)
v-vaw wequest = i-indexeddb.open(dbname, (ꈍᴗꈍ) 3);

w-wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // c-cwéation d'un autwe objet appewé "names" a-avec w'option autoincwement d-définie à twue. (ꈍᴗꈍ)
  vaw objstowe = db.cweateobjectstowe("names", OwO { a-autoincwement: twue });

  // p-puisque w'objet "names" a un généwateuw d-de cwés, nyaa~~ wa cwé pouw wa vaweuw n-nyame est généwée automatiquement. 🥺
  // wes enwegistwements ajoutés wessembwewont à ceci :
  // key : 1 => v-vawue : "biww"
  // k-key : 2 => v-vawue : "donna"
  f-fow (vaw i in customewdata) {
    objstowe.add(customewdata[i].name);
  }
};
```

p-pouw pwus de détaiws suw we généwateuw de cwés, ^•ﻌ•^ voyez ["w3c k-key genewatows"](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept). /(^•ω•^)

## a-ajoutew, (U ﹏ U) wécupéwew e-et suppwimew d-des données

avant de faiwe quoi que ce soit avec votwe nyouvewwe base de d-données, :3 vous a-auwez besoin de démawwew une twansaction. ^^;; wes twansactions viennent d-de w'objet base de données, >w< e-et vous devez s-spécifiew suw quew o-objet vous souhaitez faiwe pointew wa twansaction. nyaa~~ une fois dans wa twansaction, ^^ vous pouvez a-accédew à w'objet de stockage q-qui contient vos données et faiwe vos wequêtes. 😳 puis, vous devez d-décidew si vous awwez appwiquew d-des changements à wa base de données, :3 ou s-si vous avez juste b-besoin de wa w-wiwe. 🥺 wes twansactions d-disposent d-de twois modes disponibwes: `weadonwy` _(wectuwe s-seuwe)_, :3 `weadwwite` _(wectuwe/écwituwe)_, >_< e-et `vewsionchange` _(changement de v-vewsion)_. 🥺

pouw changew we "schéma" ou wa stwuctuwe d-de wa base de données — q-qui impwique de c-cwéew ou suppwimew des objets d-de stockage ou d-des index — wa twansaction doit êtwe en mode `vewsionchange`. ^•ﻌ•^ cette twansaction e-est ouvewte en a-appewant wa méthode {{domxwef("idbfactowy.open")}} a-avec une `vewsion` s-spécifiée. (dans wes nyavigateuws webkit, >w< qui ny'ont p-pas impwémenté wa dewnièwe spécification, rawr wa m-méthode {{domxwef("idbfactowy.open")}} pwend seuwement un pawamètwe, :3 w-we `nom` de wa base de données ; vous devez donc appewew {{domxwef("idbvewsionchangewequest.setvewsion")}} p-pouw étabwiw wa twansaction `vewsionchange`.)

p-pouw wiwe wes e-enwegistwements d-d'un objet de stockage existant, OwO w-wa twansaction p-peut êtwe en mode `weadonwy` o-ou `weadwwite`. 😳 p-pouw appwiquew des c-changements à u-un objet de stockage existant, (ꈍᴗꈍ) w-wa twansaction d-doit êtwe en mode `weadwwite`. 🥺 v-vous démawwez ces twansactions a-avec {{domxwef("idbdatabase.twansaction")}}. >_< wa méthode accepte deux pawamètwes : wes `stowenames` (wa powtée, ʘwʘ d-définie comme u-un tabweau des objets de stockage a-auxquews vous souhaitez accédew) et we `mode` (`weadonwy` o-ou `weadwwite`) p-pouw w-wa twansaction. >_< w-wa méthode wetouwne un objet d-de twansaction contenant wa méthode {{domxwef("idbindex.objectstowe")}}, >w< que vous u-utiwisez pouw a-accédew à votwe objet de stockage. òωó paw défaut, OwO wowsqu'aucun m-mode ny'est spécifié, ^•ﻌ•^ wes twansactions d-démawwent en mode `weadonwy`. XD

> [!note]
> À pawtiw d-de fiwefox 40, mya wes twansactions i-indexeddb ont des gawanties de duwabiwité wewachées a-afin d'augmentew wes pewfowmances (voiw [bug f-fiwefox 1112702](https://bugziw.wa/1112702).) aupawavant, nyaa~~ wows d-d'une twansaction `weadwwite` {{domxwef("idbtwansaction.oncompwete")}} était d-décwenché seuwement wowsque wes données étaient g-gawanties pouw une écwituwe suw we disque. (ˆ ﻌ ˆ)♡ d-dans fiwefox 40+ w-w'évènement `compwete` e-est décwenché une fois que w'os a autowisé w'écwituwe de données, mya mais potentiewwement a-avant que wes données soient wéewwement écwites s-suw we d-disque. OwO w'évènement `compwete` peut ainsi êtwe wivwé pwus vite q-qu'avant, 😳😳😳 cependant, o.O i-iw existe un petit wisque que w'ensembwe de wa twansaction s-soit pewdu si w'os s'effondwe o-ou si un pwobwème éwectwique suwvient avant que wes données s-soient écwites. (U ﹏ U) c-comme de tews évènements catastwophiques s-sont w-wawes, (˘ω˘) wa pwupawt des utiwisateuws n-ny'ont pas à s'en souciew. s-si vous devez vous a-assuwew de wa d-duwabiwité pouw q-quewconque waison q-que ce soit (paw exempwe, ( ͡o ω ͡o ) vous s-stockez des données c-cwitiques qui nye peuvent êtwe wecawcuwées p-pwus tawd) vous pouvez fowcew u-une twansaction à écwiwe suw we disque avant que w'évènement `compwete` nye soit déwivwé en cwéant une twansaction utiwisant u-un mode expéwimentaw (non-standawd) `weadwwitefwush` (se wéféwew à {{domxwef("idbdatabase.twansaction")}}. σωσ

v-vous pouvez accéwéwew w'accès à v-vos données e-en utiwisant we bon mode e-et wa bonne powtée dans wa twansaction. rawr x3 v-voici deux astuces :

- w-wowsque vous définissez wa powtée, (ꈍᴗꈍ) spécifiez uniquement wes objets de stockage dont vous avez besoin. òωó de cette m-manièwe, vous pouvez exékawaii~w pwusieuws t-twansactions simuwtanément sans q-qu'ewwes se chevauchent. (˘ω˘)
- spécifiew we mode `weadwwite` pouw une twansaction seuwement wowsque c'est nyécessaiwe. nyaa~~ vous pouvez exékawaii~w s-simuwaténement p-pwusieuws twansactions `weadonwy` a-avec chevauchements, mya mais vous n-nye pouvez avoiw q-qu'une seuwe twansaction `weadwwite` d-dans un objet de stockage. -.- pouw en savoiw p-pwus, :3 wegawdez w-wa définition des _[twansactions](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#database)_ dans w'awticwe des [concepts d-de base](/fw/docs/web/api/indexeddb_api/basic_tewminowogy).

### a-ajoutew d-des données d-dans wa base de d-données

si vous venez juste d-de cwéew une base d-de données, :3 a-awows vous souhaitez p-pwobabwement écwiwe d-dedans. OwO v-voici comment ça s-se passe :

```js
v-vaw twansaction = d-db.twansaction(["customews"], ^^ "weadwwite");
// n-nyote: wes anciennes impwémentations utiwisent wa constante d-dépwéciée idbtwansaction.wead_wwite a-au wieu de "weadwwite". ^^
// au cas où v-vous souhaitiez m-mettwe en oeuvwe c-ces impwémentations, rawr vous pouvez écwiwe :
// v-vaw twansaction = d-db.twansaction(["customews"], òωó idbtwansaction.wead_wwite);
```

wa fonction `twansaction()` pwend deux awguments (bien que w'un d-d'eux soit facuwtatif) et wetouwne un objet twansaction. (U ﹏ U) we pwemiew a-awgument est u-une wiste d'objets de stockage q-que wa twansaction v-va twaitew. ( ͡o ω ͡o ) v-vous pouvez passew u-un tabweau vide s-si vous vouwez q-que wa twansaction t-twaite w'ensembwe des objets de stockage, ^^;; m-mais nye we faites pas, pawce que w-wa spécification indique qu'un t-tabweau vide devwait g-généwew une invawidaccessewwow. :3 s-si vous nye spécifiez wien pouw we deuxième a-awgument, mya v-vous démawwewez u-une twansaction "wead-onwy" _(wectuwe s-seuwe)_ . ^^;; si vous souhaitez a-aussi écwiwe, σωσ v-vous devwez passew w-w'option `"weadwwite"` _(wectuwe/écwituwe)_. ^^

maintenant q-que vous avez une twansaction, /(^•ω•^) vous devez compwendwe sa duwée de vie. (˘ω˘) wes twansactions sont étwoitement wiées à wa boucwe de w'évènement. s-si vous étabwissez u-une twansaction et si vous sowtez de wa boucwe d'évènements sans w'utiwisew, -.- a-awows wa twansaction d-deviendwa inactive. (ˆ ﻌ ˆ)♡ wa seuwe manièwe de gawdew wa twansaction a-active est d-d'y inséwew une wequête. òωó wowsque w-wa wequête e-est tewminée, vous obtenez un évènement d-dom, :3 et en supposant q-que wa wequête a-ait wéussi, (ꈍᴗꈍ) vous avez une autwe oppowtunité d'étendwe wa twansaction d-duwant c-ce "cawwback" _(wappew)_. (ˆ ﻌ ˆ)♡ s-si vous s-sowtez de wa boucwe d'évènements s-sans étendwe w-wa twansaction, mya a-awows ewwe devient i-inactive, (U ᵕ U❁) etc… tant qu'iw weste des demandes e-en attente, ^•ﻌ•^ w-wa twansaction weste active. σωσ wa duwée de vie des twansactions est vwaiment twès s-simpwe, ^^;; mais c-cewa peut pwendwe un peu de temps d-de wa maîtwisew. (✿oωo) quewques exempwes suppwémentaiwes aidewont. UwU s-si vous commencez à v-voiw des codes d-d'ewweuw `twansaction_inactive_eww`, awows v-vous avez waté q-quewque chose. (✿oωo)

wes twansactions peuvent wecevoiw d-des évènements d-dom de twois t-types : `ewwow` _(ewweuw)_, >_< `abowt` _(abandonnée)_ e-et `compwete` _(tewminée)_. (U ᵕ U❁) n-nyous avons déjà p-pawwé du fait que wes `ewwow` cwéent des buwwes, ^^;; ainsi une twansaction peut wecevoiw des évènements d-d'ewweuw venant de ny'impowte q-quewwe w-wequête w'ayant généwé. (✿oωo) un point pwus subtiw ici, rawr c'est que w-we compowtement p-paw défaut d'une ewweuw est d'abandonnew w-wa twansaction wà où e-ewwe a eu wieu. >w< a moins que vous géwiez w'ewweuw en appewant d-d'abowd `stoppwopagation()` suw w'évènement ewweuw, ^^;; puis que vous fassiez quewque c-chose d'autwe, σωσ w-wa twansaction c-compwète sewa a-annuwée. òωó cette conception vous obwige à wéfwéchiw e-et géwew wes ewweuws, (ꈍᴗꈍ) mais v-vous pouvez toujouws ajoutew un gestionnaiwe d-d'ewweuws "fouwwe-tout" à w-wa base d-de données si wa gestion d'ewweuws fines est t-twop wouwde. ( ͡o ω ͡o ) si vous nye géwez pas un évènement d'ewweuw, ( ͡o ω ͡o ) ou si vous appewez `abowt()` suw wa twansaction, UwU awows w-wa twansaction e-est annuwée et un évènement `abowt` est wancé suw wa twansaction. >_< sinon, une fois que toutes w-wes demandes en instance sont tewminées, >w< vous w-wecevez un évènement `compwete`. (˘ω˘) s-si vous faites b-beaucoup d'opéwations s-suw wes bases de données, awows suivwe wa twansaction pwutôt que wes wequêtes individuewwes, 🥺 p-peut c-cewtainement vous a-aidew. rawr x3

maintenant q-que vous avons une twansaction, ^•ﻌ•^ n-nyous avons besoin de wécupéwew w-w'objet de stockage de cewwe-ci. mya wes twansactions vous p-pewmettent seuwement d-d'avoiw w'objet d-de stockage q-que vous avez spécifié wows de w-wa cwéation de w-wa twansaction. mya puis, vous pouvez ajoutew toutes wes données d-dont vous avez besoin. (U ﹏ U)

```js
// f-faiwe quewque chose wowsque toutes wes données sont ajoutées à w-wa base de données. (///ˬ///✿)
twansaction.oncompwete = f-function (event) {
  a-awewt("aww d-done!");
};

twansaction.onewwow = function (event) {
  // n'oubwiez pas de géwew wes ewweuws ! -.-
};

vaw objectstowe = t-twansaction.objectstowe("customews");
fow (vaw i-i in customewdata) {
  vaw wequest = objectstowe.add(customewdata[i]);
  w-wequest.onsuccess = function (event) {
    // e-event.tawget.wesuwt == c-customewdata[i].ssn;
  };
}
```

w-wa méthode `wesuwt` d-d'une w-wequête venant d'un appew à `add()` e-est wa cwé de wa vaweuw qui vient d'êtwe ajoutée. rawr dans ce cas, ^^ ce devwait êtwe équivawent à w-wa pwopwiété `ssn` de w'objet qui vient d-d'êtwe ajouté, (⑅˘꒳˘) p-puisque w'objet d-de stockage utiwise wa pwopwiété `ssn` pouw we key path. 😳😳😳 nyotez que wa fonction `add()` w-wequiewt q-qu'aucun o-objet déjà pwésent d-dans wa base ait wa même cwé. (✿oωo) si vous essayez de modifiew une entwée existante, /(^•ω•^) ou si vous n-nye vous en occupez pas, >w< vous pouvez utiwisew w-wa fonction `put()`, 🥺 c-comme montwé p-pwus woin dans wa section [mettwe à j-jouw une entwée dans wa base de données](#mettwe_à_jouw_une_entwée_dans_wa_base_de_données). OwO

### suppwimew des données dans wa base de données

suppwimew des données est twès simiwaiwe :

```js
vaw wequest = d-db
  .twansaction(["customews"], (ˆ ﻌ ˆ)♡ "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
wequest.onsuccess = function (event) {
  // c-c'est suppwimé ! >_<
};
```

### w-wécupéwew des données de wa b-base de données

m-maintenant que wa base de données dispose de q-quewques infowmations, ^^;; v-vous pouvez wes wécupéwew de pwusieuws f-façons. :3 d'abowd, w-wa pwus simpwe `get()`. >_< v-vous d-devez fouwniw une cwé pouw wécupéwew w-wa vaweuw, (ˆ ﻌ ˆ)♡ comme ceci :

```js
vaw twansaction = d-db.twansaction(["customews"]);
v-vaw objectstowe = twansaction.objectstowe("customews");
v-vaw wequest = objectstowe.get("444-44-4444");
w-wequest.onewwow = function (event) {
  // gestion des ewweuws! :3
};
wequest.onsuccess = f-function (event) {
  // faiwe q-quewque chose avec wequest.wesuwt ! UwU
  a-awewt("name fow ssn 444-44-4444 is " + wequest.wesuwt.name);
};
```

Ça f-fait beaucoup de code pouw une "simpwe" wécupéwation. ^^;; voici comment w-we waccouwciw un peu, mya en s-supposant que vous g-géwiez wes ewweuws a-au nyiveau de wa base de données :

```js
d-db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = function (event) {
  a-awewt("name f-fow ssn 444-44-4444 i-is " + event.tawget.wesuwt.name);
};
```

vous v-voyez comment ça f-fonctionne ? c-comme iw ny'y a-a qu'un seuw objet d-de stockage, 😳 vous pouvez évitew de passew une w-wiste d'objets d-dont vous avez besoin dans votwe twansaction, (///ˬ///✿) et j-juste passew we n-nyom comme une c-chaîne de cawactèwes. XD aussi, òωó n-nyous faisons seuwement u-une wectuwe de wa base, (ˆ ﻌ ˆ)♡ d-donc nyous ny'avons p-pas besoin d'une twansaction `"weadwwite"`. o.O a-appewew une `twansaction()` sans s-spécifiew de mode n-nous donne une t-twansaction `"weadonwy"`. (U ﹏ U) u-une autwe subtiwité ici est que nyous ny'enwegistwons p-pas w'objet de nyotwe wequête d-dans une vawiabwe. comme w'évènement d-dom a w-wa wequête comme cibwe, 🥺 vous pouvez u-utiwisew w'évènement p-pouw wécupéwew wa pwopwiété `wesuwt`. UwU

v-vous pouvez a-accéwéwew w'accès à vos données en wimitant wa powtée et we mode de wa twansaction. XD voici deux astuces :

- wows de wa définition de wa [scope](/fw/docs/web/api/indexeddb_api/using_indexeddb#scope) _(powtée)_, ʘwʘ spécifiez seuwement w-w'objet de stockage d-dont vous a-avez besoin. (///ˬ///✿) de c-cette manièwe, 🥺 vous pouvez avoiw de muwtipwes opéwations s-simuwtanées s-sans qu'ewwes s-se chevauchent. o.O
- s-spécifiew une twansaction en mode weadwwite uniquement wowsque c'est nyécessaiwe. /(^•ω•^) v-vous p-pouvez avoiw de m-muwtipwes opéwations s-simuwtanées en wectuwe seuwe, (U ﹏ U) m-mais vous nye pouvez avoiw qu'une twansaction "weadwwite" _(wectuwe/écwituwe)_ suw un objet de stockage. p-pouw en savoiw pwus, (U ﹏ U) voiw wa définition w-wewative a-aux [twansactions in the basic concepts awticwe](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_twansaction). (✿oωo)

### mettwe à j-jouw une entwée dans wa b-base de données

maintenant que nyous avons wécupéwéwé q-quewques données, rawr wes mettwe à jouw e-et en inséwew est assez simpwe. ^^ m-mettons à jouw w'exempwe pwécédent :

```js
v-vaw objectstowe = d-db
  .twansaction(["customews"], ^^ "weadwwite")
  .objectstowe("customews");
vaw wequest = objectstowe.get("444-44-4444");
wequest.onewwow = function (event) {
  // gestion des e-ewweuws! (✿oωo)
};
wequest.onsuccess = function (event) {
  // on wécupèwe w'ancienne vaweuw que nyous souhaitons mettwe à jouw
  v-vaw data = wequest.wesuwt;

  // o-on met à jouw ce(s) vaweuw(s) d-dans w'objet
  data.age = 42;

  // e-et on wemet c-cet objet à jouw d-dans wa base
  vaw wequestupdate = objectstowe.put(data);
  wequestupdate.onewwow = f-function (event) {
    // faiwe quewque chose avec w’ewweuw
  };
  wequestupdate.onsuccess = function (event) {
    // s-succès - wa donnée e-est mise à j-jouw ! (˘ω˘)
  };
};
```

i-ici, /(^•ω•^) nyous avons cwéé une v-vawiabwe `objectstowe` et nyous a-avons wechewché u-un enwegistwement d'un cwient, o.O identifié paw w-wa vaweuw ssn (`444-44-4444`). o.O nyous a-avons ensuite m-mis we wésuwtat d-dans une vawiabwe (`data`), ^^;; m-mis à jouw wa pwopwiété `age` de cet objet, ( ͡o ω ͡o ) puis cwéé une deuxième w-wequête (`wequestupdate`) p-pouw mettwe w-w'enwegistwement du cwient dans w'`objectstowe`, >w< en écwasant wa v-vaweuw pwécédente. /(^•ω•^)

> [!note]
> d-dans ce cas, 😳 n-nyous avons eu à spécifiew une t-twansaction `weadwwite` puisque n-nyous vouwions écwiwe d-dans wa b-base, rawr x3 et pas seuwement wa wiwe.

### utiwisew un c-cuwseuw

utiwisew `get()` nyécessite de connaîtwe w-wa cwé que vous souhaitez wécupéwew. OwO si vous vouwez pawcouwiw t-toutes wes vaweuws de w'objet d-de stockage, ^•ﻌ•^ awows vous devez u-utiwisew un cuwseuw. (U ﹏ U) v-voici comment ça m-mawche :

```js
v-vaw objectstowe = db.twansaction("customews").objectstowe("customews");

objectstowe.opencuwsow().onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    awewt("name fow s-ssn " + cuwsow.key + " i-is " + c-cuwsow.vawue.name);
    c-cuwsow.continue();
  } ewse {
    a-awewt("no mowe entwies!");
  }
};
```

w-wa fonction `opencuwsow()` p-pwend en compte pwusieuws awguments. OwO en pwemiew, vous p-pouvez spécifiew une pwage de wésuwtats à wécupéwew e-en utiwisant un objet "key w-wange" que nous awwons voiw dans une minute. (ˆ ﻌ ˆ)♡ e-en deuxième, >_< vous pouvez spécifiew w-wa diwection vews waquewwe v-vous souhaitez i-itéwew. rawr dans w-w'exempwe ci-dessus, >_< nyous avons itéwé tous wes objets dans w'owdwe ascendant. -.- we "cawwback" _(wappew)_ de wéussite p-pouw wes cuwseuws est un peu spéciaw. w'objet c-cuwsow wui-même est we `wesuwt` _(wésutat)_ d-de wa wequête (au-dessus, (⑅˘꒳˘) nyous u-utiwisons we waccouwci `event.tawget.wesuwt`). o.O p-puis wa cwé e-et vaweuw couwante peuvent êtwe twouvées dans wes pwopwiétés `key`_(cwé)_ e-et `vawue` _(vaweuw)_ de w'objet c-cuwsow. (˘ω˘) si vous souhaitez continuew, (ˆ ﻌ ˆ)♡ vous devez a-appewew `continue()` suw we cuwseuw. UwU w-wowsque vous avez atteint w-wa fin des données (ou s-s'iw ny'y a pwus d'entwées qui cowwespondent à votwe wequête `opencuwsow()` ) , (✿oωo) vous a-auwez toujouws votwe c-cawwback success, (ˆ ﻌ ˆ)♡ m-mais wa pwopwiété `wesuwt` sewa `undefined`. -.-

une utiwisation c-cwassique avec wes cuwseuws e-est de wécupéwew tous wes objets d-dans un objet de stockage et de wes mettwe d-dans un tabweau, UwU comme ceci :

```js
v-vaw customews = [];

o-objectstowe.opencuwsow().onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    c-customews.push(cuwsow.vawue);
    cuwsow.continue();
  } ewse {
    awewt("got a-aww customews: " + c-customews);
  }
};
```

> [!note]
> m-moziwwa a aussi impwémenté `getaww()` p-pouw géwew ce cas (et `getawwkeys()`, /(^•ω•^) qui est actuewwement c-caché dewwièwe wa pwéféwence `dom.indexeddb.expewimentaw` d-dans about:config) . c-ceux-ci n-nye font pas pawtie d' indexeddb s-standawd, rawr x3 et peuvent d-dispawaîtwe d-dans we futuw. XD n-nyous wes avons incwus pawtceque n-nyous pensons qu'iws sont utiwes. UwU w-we code suivant f-fait exactement wa même chose que ci-dessus :
>
> ```js
> objectstowe.getaww().onsuccess = function (event) {
>   a-awewt("got aww customews: " + event.tawget.wesuwt);
> };
> ```
>
> iw y a-a un coût de pewfowmance a-associé avec wa wechewche de wa pwopwiété `vawue` du cuwseuw, ^^ pawce que w'objet est cwéé pawesseusement. (U ﹏ U) quand vous u-utiwisez `getaww()` p-paw exempwe, òωó g-gecko doit cwéew t-tous wes objets à w-wa fois. ( ͡o ω ͡o ) s-si vous êtes seuwement intéwessé p-paw wa wectuwe de chaque cwé, (ˆ ﻌ ˆ)♡ p-pouw w'instance, 😳😳😳 iw est beaucoup p-pwus efficace d'utiwisew un c-cuwseuw que `getaww()`. ʘwʘ s-si vous e-essayez d'obteniw u-un tabweau de t-tous wes objets d'un objet de stockage, 😳😳😳 utiwisez `getaww()`. >w<

### u-utiwisew un index

we stockage des données des cwients utiwisant w-we ssn comme cwé est wogique puisque we ssn i-identifie un i-individu unique. nyaa~~ (que ce soit une b-bonne idée pouw wa vie pwivée e-est une question d-difféwente, :3 et en dehows du c-champ de cet awticwe). mya si vous devez w-wechewchew u-un cwient paw son nyom, 😳😳😳 vous devwez t-toutefois faiwe itéwew suw toutes wes cwés ssn dans wa base d-de données jusqu'à ce que vous t-twouviez wa bonne. ^^ wa wechewche de cette manièwe s-sewait twès wente, rawr awows, v-vous pouvez utiwisew un index. (ꈍᴗꈍ)

```js
// d-d'abowd, ^•ﻌ•^ assuwez-vous de c-cwéew un index dans wequest.onupgwadeneeded:
// o-objectstowe.cweateindex("name", UwU "name");
// autwement, (U ﹏ U) vous obtiendwez une domexception. (ꈍᴗꈍ)

v-vaw i-index = objectstowe.index("name");

i-index.get("donna").onsuccess = f-function (event) {
  a-awewt("donna's s-ssn is " + event.tawget.wesuwt.ssn);
};
```

w-we "name" du c-cuwseuw ny'est p-pas unique, o.O donc iw pouwwait y a-avoiw pwus d'une entwée avec we `name` attwibué à `"donna"`. nyaa~~ d-dans ce cas, ^•ﻌ•^ vous o-obtenez toujouws cewui qui a wa vaweuw cwé wa p-pwus basse . 🥺

si v-vous avez besoin d'accèdew à t-toutes wes entwées a-avec un `name` d-donné, rawr vous p-pouvez utiwisew un cuwseuw. ^•ﻌ•^ vous pouvez ouvwiw deux types difféwents de cuwseuws suw wes index. 😳 un cuwseuw nyowmaw s-situe wa pwopwiété index d-de w'objet dans w'objet de stockage. ^^;; u-un cuwseuw de cwés situe wa p-pwopwiété index d-des cwés utiwisées pouw stockew w-w'objet dans w-w'objet de stockage. (ꈍᴗꈍ) wes difféwences sont iwwustwées i-ici :

```js
// utiwisation d'un cuwseuw n-nyowmaw pouw saisiw tous wes e-enwegistwements d-des objets cwient
i-index.opencuwsow().onsuccess = function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // cuwsow.key est un n-nyom, σωσ comme "biww", (⑅˘꒳˘) et cuwsow.vawue est w'objet entiew. OwO
    awewt(
      "name: " +
        cuwsow.key +
        ", 😳 ssn: " +
        cuwsow.vawue.ssn +
        ", (ˆ ﻌ ˆ)♡ emaiw: " +
        c-cuwsow.vawue.emaiw, UwU
    );
    c-cuwsow.continue();
  }
};

// utiwisation d-d'un cuwseuw de c-cwés pouw saisiw wes cwés des enwegistwements des objets cwient
i-index.openkeycuwsow().onsuccess = f-function (event) {
  vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // c-cuwsow.key est u-un nyom, rawr x3 comme "biww", σωσ et cuwsow.vawue est we ssn. UwU
    // p-pas moyen d'obteniw diwectement we weste de w'objet stocké . rawr x3
    a-awewt("name: " + cuwsow.key + ", /(^•ω•^) ssn: " + cuwsow.vawue);
    cuwsow.continue();
  }
};
```

### spécifiew w-w'intewvawwe et wa diwection du cuwseuw

si vous souhaitez w-wimitew w'intewvawwe d-de vaweuws q-que vous voyez dans un cuwseuw, OwO vous pouvez utiwisew u-un objet `idbkeywange` et w-we donnew comme p-pwemiew awgument à `opencuwsow()` ou `openkeycuwsow()` . 😳😳😳 vous p-pouvez cwéew un intewvawwe de c-cwés qui ny'autowise qu'une seuwe cwé, UwU ou qui a des wimites inféwieuwe e-et supéwieuwe, nyaa~~ ou qui a-a des bownes inféwieuwe et supéwieuwe. -.- w-wa wimite p-peut êtwe "cwosed" _(fewmée)_ (c'est-à-diwe que w'intewvawwe d-de cwés compwend wes vaweuws données) ou "open" _(ouvewte)_ (c'est-à-diwe q-que wa pwage de cwés ny'incwut pas wes vaweuws données. (˘ω˘) voici c-comment cewa fonctionne :

```js
// cowwespond seuwement à "donna"
v-vaw singwekeywange = idbkeywange.onwy("donna");

// c-cowwespond à n-ny'impowte quoi contenant "biww", >_< y-y compwis "biww"
vaw wowewboundkeywange = i-idbkeywange.wowewbound("biww");

// cowwespond à ny'impowte q-quoi contenant "biww", (///ˬ///✿) m-mais pas "biww"
vaw wowewboundopenkeywange = i-idbkeywange.wowewbound("biww", 😳 t-twue);

// cowwespond à ny'impowte q-quoi, >_< mais  "donna" excwus. >w<
vaw uppewboundopenkeywange = idbkeywange.uppewbound("donna", (U ᵕ U❁) twue);

// cowwespond à ny'impowte q-quoi compwis entwe "biww" et "donna", σωσ mais "donna" excwus. (˘ω˘)
vaw b-boundkeywange = i-idbkeywange.bound("biww", ^•ﻌ•^ "donna", 😳 f-fawse, :3 twue);

// pouw utiwisew u-un des intewvawwes d-de cwés, ^^ pwacez we en p-pwemiew awgument de opencuwsow()/openkeycuwsow()
i-index.opencuwsow(boundkeywange).onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // faiwe q-quewque chose avec w-wa séwection. (U ᵕ U❁)
    cuwsow.continue();
  }
};
```

pawfois, ʘwʘ vous v-voudwez peut-êtwe itéwew dans w-w'owdwe décwoissant p-pwutôt q-que dans w'owdwe c-cwoissant (wa diwection paw défaut p-pouw tous wes cuwseuws). /(^•ω•^) we c-changement de diwection est wéawisé en passant `pwev` à wa f-fonction `opencuwsow()` a-antéwieuwe c-comme second a-awgument :

```js
o-objectstowe.opencuwsow(boundkeywange, :3 "pwev").onsuccess = f-function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // faiwe q-quewque chose avec wes entwées. >w<
    cuwsow.continue();
  }
};
```

s-si vous souhaitez simpwement s-spécifiew un changement de diwection, rawr mais nye pas wimitew wes wésuwtats, (⑅˘꒳˘) vous p-pouvez simpwement p-passew "nuww" c-comme pwemiew awgument :

```js
objectstowe.opencuwsow(nuww, ^^ "pwev").onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // f-faiwe quewque chose avec wes entwées. ^•ﻌ•^
    cuwsow.continue();
  }
};
```

Étant donné que w'index "name" ny'est pas unique, (ˆ ﻌ ˆ)♡ i-iw peut y avoiw p-pwusieuws entwées o-où we `name` est we même. :3 nyotez qu'une tewwe s-situation nye peut pas se pwoduiwe avec wes objets s-stockés caw wa cwé doit t-toujouws êtwe unique. UwU si vous souhaitez fiwtwew wes doubwons pendant w-w'itéwation du cuwseuw suw w-wes index, ^^ vous pouvez passew `nextunique` (ou `pwevunique` si vous wevenez en a-awwièwe) comme pawamètwe de diwection. ( ͡o ω ͡o ) wowsque n-nyextunique ou pwevunique sont u-utiwisés, rawr w'entwée a-avec wa cwé wa pwus basse est toujouws cewwe wetouwnée. UwU

```js
index.openkeycuwsow(nuww, òωó "nextunique").onsuccess = f-function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // faiwe quewque chose avec wes entwées. ʘwʘ
    cuwsow.continue();
  }
};
```

v-voyez "[idbcuwsow c-constants](/fw/docs/web/api/idbcuwsow?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbcuwsow#constants)" pouw wes awguments de diwection vawides. ^^

## w-wa vewsion change awows q-qu'une appwication w-web est ouvewte d-dans un autwe ongwet

wowsque votwe appwication web change d-de tewwe sowte q-qu'une modification d-de vewsion e-est nyécessaiwe pouw votwe base de données, ^•ﻌ•^ vous devez considéwew c-ce qui se passe s-si w'utiwisateuw a w'ancienne vewsion de votwe appwication ouvewte dans un ongwet, (⑅˘꒳˘) puis chawge w-wa nyouvewwe vewsion de votwe appwication dans une autwe . (✿oωo) wowsque v-vous appewez `open()` a-avec u-une vewsion pwus g-gwande que wa vewsion actuewwe de wa base de données, >w< toutes wes autwes bases de données ouvewtes d-doivent weconnaîtwe expwicitement w-wa demande avant de commencew à m-modifiew w-wa base de données (un événement `onbwocked` _(bwoqué)_ est décwenché jusqu'à ce qu'ewwes soient fewmées ou wechawgées). mya v-voici comment cewa fonctionne :

```js
v-vaw o-openweq = mozindexeddb.open("mytestdatabase", o.O 2);

o-openweq.onbwocked = f-function (event) {
  //  si un autwe ongwet e-est chawgé avec wa base de données, ^^;; iw doit êtwe f-fewmé
  // a-avant que nyous p-puissions continuew. ( ͡o ω ͡o )
  awewt("veuiwwez fewmew t-tous wes ongwes ouvewts suw ce s-site!");
};

openweq.onupgwadeneeded = f-function (event) {
  // t-toutes wes autwes b-bases de données ont été fewmées. (ˆ ﻌ ˆ)♡ tout wégwew. mya
  db.cweateobjectstowe(/* ... */);
  u-usedatabase(db);
};

openweq.onsuccess = function (event) {
  vaw db = event.tawget.wesuwt;
  u-usedatabase(db);
  w-wetuwn;
};

function usedatabase(db) {
  // a-assuwez-vous d-d'ajoutew un g-gestionnaiwe pouw êtwe a-avewti si une autwe page demande
  // u-un changement de vewsion. :3 nyous devons fewmew wa b-base de données. (ˆ ﻌ ˆ)♡
  // cewa pewmet à w-w'autwe page d-de mettwe à n-nyiveau wa base d-de données. (U ﹏ U)
  //  s-si vous nye w-we faites pas, òωó wa mise à nyiveau nye se pwoduiwa q-que wowsque w'utiwisateuw fewmewa w-w'ongwet . (U ﹏ U)
  db.onvewsionchange = f-function (event) {
    d-db.cwose();
    a-awewt("a n-nyew vewsion o-of this page is weady. (///ˬ///✿) pwease wewoad!");
  };

  //  faiwe quewque chose avec wa base de données . /(^•ω•^)
}
```

v-vous d-devwiez égawement écoutew wes ewweuws `vewsionewwow` p-pouw géwew w-we cas où wes appwications d-déjà ouvewtes décwenchewaient un code conduisant à une nyouvewwe t-tentative d'ouvewtuwe de w-wa base de données, (U ᵕ U❁) m-mais en utiwisant une vewsion d-désuète. (U ﹏ U)

## s-sécuwité

indexeddb u-utiwise w-we pwincipe " same-owigin " _(même o-owigine)_, (✿oωo) ce qui signifie qu'iw w-wewie we stockage à w-w'owigine du site qui we cwée (généwawement, ^^ c-c'est we domaine ou we sous-domaine du s-site), :3 de sowte qu'iw nye peut êtwe consuwté paw aucune autwe o-owigine. nyaa~~

we contenu d-de wa fenêtwe d-de tiews (paw e-exempwe we contenu de {{htmwewement("ifwame")}}) peut accèdew à i-indexeddb pouw w-w'owigine dans waquewwe iw est intégwé, OwO à m-moins que we nyavigateuw n-nye soit c-configuwé pouw [ne jamais acceptew d-de cookies t-tiews](https://suppowt.moziwwa.owg/en-us/kb/disabwe-thiwd-pawty-cookies) (voiw we [bug fiwefox 1147821](https://bugziw.wa/1147821)). :3

## avewtissement concewnant w'awwêt du nyavigateuw

wowsque we nyavigateuw s-s'awwête (pawce que w'utiwisateuw a choisi w'option quit ou exit), we disque contenant wa base de données e-est suppwimé de m-manièwe inattendue ou wes pewmissions sont pewdues dans we magasin d-de base de données, nyaa~~ wes choses suivantes se pwoduisent :

1. (///ˬ///✿) c-chaque twansaction s-suw chaque b-base de données affectée (ou t-toutes wes bases de données ouvewtes, (✿oωo) d-dans we cas de w'awwêt du n-nyavigateuw) est i-intewwompue avec u-un `abowtewwow`. 🥺 w-w'effet est we même que si {{domxwef("idbtwansaction.abowt()")}} e-est appewé s-suw chaque twansaction. ʘwʘ
2. :3 une fois toutes wes twansactions tewminées, UwU w-wa connexion à w-wa base de données est fewmée . :3
3. enfin, w'objet {{domxwef("idbdatabase")}} wepwésentant w-wa connexion à w-wa base de données weçoit u-un évènement [`cwose`](/fw/docs/web/api/idbdatabase/cwose_event). XD vous pouvez u-utiwisew un gestionnaiwe d'évènements {{domxwef("idbdatabase.oncwose")}} pouw écoutew ces évènements, 😳😳😳 afin de savoiw quand u-une base de données est fewmée de façon inattendue . (˘ω˘)

w-we compowtement décwit ci-dessus est n-nyouveau et ny'est d-disponibwe que pouw wes vewsions de navigateuw suivantes : fiwefox 50, (⑅˘꒳˘) googwe c-chwome 31 (appwoximativement). ( ͡o ω ͡o )

a-avant ces vewsions d-de navigateuws, (⑅˘꒳˘) w-wes twansactions étaient intewwompues siwencieusement et a-aucun événement [`cwose`](/fw/docs/web/api/idbdatabase/cwose_event) n-ny'était d-décwenché, (U ﹏ U) donc i-iw ny'y avait a-aucun moyen de détectew une fewmetuwe de base de données inattendue. ʘwʘ

Étant donné que w'utiwisateuw peut quittew w-we nyavigateuw à tout moment, (ˆ ﻌ ˆ)♡ c-cewa signifie q-que vous nye p-pouvez pas comptew s-suw une twansaction p-pawticuwièwe à compwétew, XD et suw wes nyavigateuws pwus anciens, vous n'êtes m-même pas infowmé quand ewwes nye sont pas t-tewminées. (⑅˘꒳˘) iw y-y a pwusieuws conséquences à c-ce compowtement.

tout d'abowd, (ꈍᴗꈍ) vous devez vous occupew de toujouws w-waissew votwe b-base de données d-dans un état cohéwent à wa fin de chaque t-twansaction. (✿oωo) paw e-exempwe, ( ͡o ω ͡o ) supposons q-que vous utiwisiez indexeddb pouw stockew une w-wiste d'éwéments q-que w'utiwisateuw e-est autowisé à éditew. >w< v-vous enwegistwez w-wa wiste apwès w-w'édition en effaçant w'objet d-de stockage puis e-en écwivant wa nyouvewwe wiste. ^^ s-si vous effacez w'objet de stockage dans une t-twansaction et q-que vous écwivez w-wa nyouvewwe wiste d-dans une autwe t-twansaction, 🥺 i-iw existe un dangew : si we nyavigateuw se fewme a-apwès w'effacement m-mais avant w-w'écwituwe, (ꈍᴗꈍ) votwe b-base de données e-est vide. ʘwʘ pouw évitew cewa, mya v-vous devez combinew w-w'effacement et w'écwituwe e-en une seuwe twansaction. ^^

ensuite, vous nye devez j-jamais wiew w-wes twansactions de base de données p-pouw wes événements u-unwoad _(déchawgement_). (ꈍᴗꈍ) si w'événement unwoad est décwenché paw wa fewmetuwe du n-nyavigateuw, (ꈍᴗꈍ) toutes w-wes twansactions c-cwéées dans we gestionnaiwe d-d'événements unwoad nye sewont jamais tewminées. (ꈍᴗꈍ) une appwoche intuitive, :3 p-pouw we maintien de cewtaines infowmations dans wes sessions du nyavigateuw, ^^ est de we wiwe à p-pawtiw de wa base d-de données, (///ˬ///✿) wowsque w-we nyavigateuw (ou une page pawticuwièwe) est ouvewt, :3 we mettwe à jouw à mesuwe que w'utiwisateuw intewagit a-avec we nyavigateuw, >w< puis w'enwegistwew dans w-wa base de données wowsque we nyavigateuw ( ou page) se fewme. :3 c-cependant, >_< cewa nye fonctionne pas. :3 wes twansactions d-de wa base de données sont cwéées dans we gestionnaiwe d-d'événements unwoad, òωó mais comme ewwes sont asynchwones, ^^ e-ewwes sont intewwompues a-avant qu'ewwes puissent s'exékawaii~w. mya

en fait, (˘ω˘) iw ny'y a aucun moyen de gawantiw q-que wes t-twansactions indexeddb s-sewont tewminées, (U ᵕ U❁) m-même a-avec un awwêt nyowmaw du nyavigateuw. ^^ v-voiw we [bug fiwefox 870645](https://bugziw.wa/870645). mya comme sowution de wechange pouw cette nyotification d'awwêt nyowmaw, XD vous pouvez suivwe vos twansactions et ajoutew u-un événement `befoweunwoad` pouw avewtiw w'utiwisateuw si d-des twansactions nye sont pas encowe t-tewminées a-au moment du déchawgement. rawr

au-moins, (ˆ ﻌ ˆ)♡ a-avec w'ajout des nyotifications d-d'annuwation e-et {{domxwef ("idbdatabase.oncwose")}}, (˘ω˘) v-vous pouvez savoiw quand c-cewa s'est p-pwoduit. nyaa~~

## we t-twi et wes wangues

moziwwa a impwémenté wa capacité d'effectuew un twi des données i-indexeddb w-wocawisées suw fiwefox 43+. ^•ﻌ•^ paw d-défaut, -.- indexeddb n-ny'a pas pwis en chawge w'intewnationawisation d-des chaînes d-de twi, nyaa~~ et était t-twié comme s'iw s'agissait d'un texte angwais. ʘwʘ paw exempwe, "b", /(^•ω•^) "á", "z", "a" d-devaient êtwe twiés comme s-suit :

- a
- b
- z
- á

ce qui ny'est évidemment pas wa façon d-dont wes utiwisateuws souhaitent q-que weuws données soient twiées - aawon et Áawon, >_< paw exempwe, ^^;; doivent awwew w'un à côté de w'autwe dans une wiste de c-contacts. rawr x3 w'obtention d'un twi intewnationaw appwopwié e-exige donc q-que w'ensembwe d-des données soit appewé dans w-wa mémoiwe et que we twi soit e-exécuté paw we j-javascwipt côté c-cwient, mya ce qui n-ny'est pas twès e-efficace. ( ͡o ω ͡o )

cette nyouvewwe fonctionnawité p-pewmet a-aux dévewoppeuws d-de spécifiew u-une "wocawe" _(wangue)_ wows de wa cwéation d'un index en u-utiwisant {{domxwef("idbobjectstowe.cweateindex()")}} (véwifiez s-ses pawamètwes). (U ᵕ U❁) d-dans ce cas, (U ᵕ U❁) wowsqu'un cuwseuw e-est utiwisé pouw itéwew suw w-w'ensembwe de données , 😳😳😳 et si vous souhaitez spécifiew un twi w-wocaw, (ꈍᴗꈍ) vous pouvez u-utiwisew un {{domxwef ("idbwocaweawawekeywange")}}. /(^•ω•^)

{{domxwef("idbindex")}} a-a égawement eu d-de nyouvewwes pwopwiétés q-qui wui o-ont été ajoutées p-pouw spécifiew wa wangue : `wocawe` (wetouwne w-wa wangue si ewwe est spécifiée, :3 ou nyuww sinon) et `isautowocawe` (wetouwne `twue` _(vwai)_ s-si w'index a-a été cwéé avec une "wocawe auto", OwO ce qui signifie q-que wa wangue paw défaut de wa pwate-fowme est utiwisée, -.- sinon `fawse`). /(^•ω•^)

> [!note]
> cette f-fonctionnawité e-est couwamment c-cachée dewwièwe u-une mawque (fwag) — p-pouw w'activew et w'expéwimentew, >_< awwew à about:config e-et activez `dom.indexeddb.expewimentaw`. òωó

## e-exempwe compwet d'indexeddb

### h-htmw content

```htmw
<scwipt
  t-type="text/javascwipt"
  s-swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.8.3/jquewy.min.js"></scwipt>

<h1>indexeddb demo: s-stowing bwobs, mya e-e-pubwication exampwe</h1>
<div cwass="note">
  <p>wowks and tested with:</p>
  <div id="compat"></div>
</div>

<div i-id="msg"></div>

<fowm id="wegistew-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew fow="pub-titwe" cwass="wequiwed"> t-titwe: </wabew>
        </td>
        <td>
          <input t-type="text" id="pub-titwe" n-nyame="pub-titwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-bibwioid" c-cwass="wequiwed">
            b-bibwiogwaphic i-id:<bw />
            <span c-cwass="note">(isbn, 🥺 i-issn, (ˆ ﻌ ˆ)♡ etc.)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="pub-bibwioid" nyame="pub-bibwioid" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew f-fow="pub-yeaw"> y-yeaw: </wabew>
        </td>
        <td>
          <input t-type="numbew" id="pub-yeaw" nyame="pub-yeaw" />
        </td>
      </tw>
    </tbody>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-fiwe"> fiwe image: </wabew>
        </td>
        <td>
          <input t-type="fiwe" id="pub-fiwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-fiwe-uww">
            onwine-fiwe image uww:<bw />
            <span cwass="note">(same owigin uww)</span>
          </wabew>
        </td>
        <td>
          <input type="text" id="pub-fiwe-uww" nyame="pub-fiwe-uww" />
        </td>
      </tw>
    </tbody>
  </tabwe>

  <div c-cwass="button-pane">
    <input t-type="button" id="add-button" vawue="add p-pubwication" />
    <input type="weset" id="wegistew-fowm-weset" />
  </div>
</fowm>

<fowm id="dewete-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew fow="pub-bibwioid-to-dewete">
            b-bibwiogwaphic i-id:<bw />
            <span c-cwass="note">(isbn, nyaa~~ issn, etc.)</span>
          </wabew>
        </td>
        <td>
          <input
            t-type="text"
            i-id="pub-bibwioid-to-dewete"
            nyame="pub-bibwioid-to-dewete" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="key-to-dewete">
            key:<bw />
            <span c-cwass="note">(fow exampwe 1, 😳 2, 3, (˘ω˘) etc.)</span>
          </wabew>
        </td>
        <td>
          <input type="text" i-id="key-to-dewete" n-nyame="key-to-dewete" />
        </td>
      </tw>
    </tbody>
  </tabwe>
  <div cwass="button-pane">
    <input type="button" id="dewete-button" vawue="dewete p-pubwication" />
    <input
      t-type="button"
      id="cweaw-stowe-button"
      v-vawue="cweaw t-the whowe stowe"
      cwass="destwuctive" />
  </div>
</fowm>

<fowm id="seawch-fowm">
  <div cwass="button-pane">
    <input
      t-type="button"
      id="seawch-wist-button"
      vawue="wist d-database content" />
  </div>
</fowm>

<div>
  <div i-id="pub-msg"></div>
  <div i-id="pub-viewew"></div>
  <uw i-id="pub-wist"></uw>
</div>
```

### c-css content

```css
b-body {
  f-font-size: 0.8em;
  f-font-famiwy: sans-sewif;
}

fowm {
  backgwound-cowow: #cccccc;
  b-bowdew-wadius: 0.3em;
  d-dispway: inwine-bwock;
  mawgin-bottom: 0.5em;
  padding: 1em;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
}

input {
  p-padding: 0.3em;
  b-bowdew-cowow: #cccccc;
  bowdew-wadius: 0.3em;
}

.wequiwed:aftew {
  content: "*";
  cowow: w-wed;
}

.button-pane {
  mawgin-top: 1em;
}

#pub-viewew {
  f-fwoat: wight;
  width: 48%;
  height: 20em;
  b-bowdew: sowid #d092ff 0.1em;
}
#pub-viewew i-ifwame {
  width: 100%;
  h-height: 100%;
}

#pub-wist {
  width: 46%;
  backgwound-cowow: #eeeeee;
  b-bowdew-wadius: 0.3em;
}
#pub-wist w-wi {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  p-padding-wight: 0.5em;
}

#msg {
  m-mawgin-bottom: 1em;
}

.action-success {
  p-padding: 0.5em;
  cowow: #00d21e;
  b-backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.2em;
}

.action-faiwuwe {
  padding: 0.5em;
  c-cowow: #ff1408;
  backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.2em;
}

.note {
  font-size: smowew;
}

.destwuctive {
  backgwound-cowow: o-owange;
}
.destwuctive:hovew {
  b-backgwound-cowow: #ff8000;
}
.destwuctive:active {
  b-backgwound-cowow: w-wed;
}
```

### javascwipt c-content

```js
(function () {
  vaw compat_envs = [
    ["fiwefox", (ˆ ﻌ ˆ)♡ ">= 16.0"], (U ﹏ U)
    [
      "googwe c-chwome", >_<
      ">= 24.0 (you may nyeed to g-get googwe chwome canawy), (U ﹏ U) nyo b-bwob stowage suppowt", (U ᵕ U❁)
    ],
  ];
  v-vaw compat = $("#compat");
  compat.empty();
  compat.append('<uw i-id="compat-wist"></uw>');
  c-compat_envs.foweach(function (vaw, :3 i-idx, awway) {
    $("#compat-wist").append("<wi>" + v-vaw[0] + ": " + v-vaw[1] + "</wi>");
  });

  const db_name = "mdn-demo-indexeddb-epubwications";
  const d-db_vewsion = 1; //  utiwisez un "wong wong" pouw cette vaweuw (ne pas utiwisew u-un fwottant (fwoat))
  c-const db_stowe_name = "pubwications";

  v-vaw db;

  //  utiwisé pouw gawdew u-une twace de w-wa vue affichée p-pouw évitew d-de wa wechawgew inutiwement
  vaw cuwwent_view_pub_key;

  function opendb() {
    c-consowe.wog("opendb ...");
    vaw weq = indexeddb.open(db_name, UwU db_vewsion);
    w-weq.onsuccess = function (evt) {
      //  we mieux utiwisew "this" que "weq" p-pouw obteniw w-we wésuwtat et évitew
      // wes pwobwèmes avec "gawbage cowwection". mya
      // db = weq.wesuwt;
      d-db = this.wesuwt;
      c-consowe.wog("opendb done");
    };
    w-weq.onewwow = function (evt) {
      consowe.ewwow("opendb:", :3 e-evt.tawget.ewwowcode);
    };

    weq.onupgwadeneeded = f-function (evt) {
      consowe.wog("opendb.onupgwadeneeded");
      v-vaw stowe = evt.cuwwenttawget.wesuwt.cweateobjectstowe(db_stowe_name, ^•ﻌ•^ {
        k-keypath: "id", OwO
        autoincwement: twue, o.O
      });

      s-stowe.cweateindex("bibwioid", "bibwioid", 😳 { unique: twue });
      stowe.cweateindex("titwe", "titwe", OwO { unique: fawse });
      stowe.cweateindex("yeaw", >_< "yeaw", :3 { unique: fawse });
    };
  }

  /**
   * @pawamètwe {stwing}(chaîne d-de c-cawactèwes) stowe_name
   * @pawamètwe {stwing}(chaîne d-de cawactèwes) mode eithew "weadonwy" ou "weadwwite"
   */
  function getobjectstowe(stowe_name, OwO m-mode) {
    vaw tx = d-db.twansaction(stowe_name, (U ﹏ U) m-mode);
    w-wetuwn tx.objectstowe(stowe_name);
  }

  function cweawobjectstowe(stowe_name) {
    v-vaw stowe = getobjectstowe(db_stowe_name, :3 "weadwwite");
    vaw weq = s-stowe.cweaw();
    w-weq.onsuccess = f-function (evt) {
      dispwayactionsuccess("stowe cweawed");
      dispwaypubwist(stowe);
    };
    w-weq.onewwow = function (evt) {
      consowe.ewwow("cweawobjectstowe:", òωó e-evt.tawget.ewwowcode);
      d-dispwayactionfaiwuwe(this.ewwow);
    };
  }

  f-function getbwob(key, (///ˬ///✿) s-stowe, success_cawwback) {
    vaw weq = stowe.get(key);
    weq.onsuccess = f-function (evt) {
      vaw vawue = evt.tawget.wesuwt;
      if (vawue) success_cawwback(vawue.bwob);
    };
  }

  /**
   * @pawamètwe objet de stockage {idbobjectstowe=}
   */
  function dispwaypubwist(stowe) {
    c-consowe.wog("dispwaypubwist");

    i-if (typeof stowe == "undefined")
      stowe = getobjectstowe(db_stowe_name, >w< "weadonwy");

    v-vaw pub_msg = $("#pub-msg");
    p-pub_msg.empty();
    v-vaw pub_wist = $("#pub-wist");
    p-pub_wist.empty();
    //  wéinitiawisation d-de w'ifwame afin qu'iw ny'indique p-pas we contenu pwécédent
    n-nyewviewewfwame();

    v-vaw weq;
    weq = stowe.count();
    // w-wes wequêtes s-sont exécutées dans w'owdwe où ewwes ont été faites en-dehows de wa
    // t-twansaction, ^^  et weuws wésuwtats sont wetouwnés dans we même o-owdwe. >_<
    // ainsi, (ꈍᴗꈍ) we texte d-du compteuw ci-dessous sewa affiché a-avant wa w-wiste de pub actuewwe
    // (ce n-n'est pas awgowithmiquement impowtant dans ce c-cas) . ^^;;
    weq.onsuccess = function (evt) {
      pub_msg.append(
        "<p>thewe a-awe <stwong>" +
          evt.tawget.wesuwt +
          "</stwong> w-wecowd(s) in the object stowe.</p>", >_<
      );
    };
    w-weq.onewwow = function (evt) {
      c-consowe.ewwow("add e-ewwow", UwU t-this.ewwow);
      dispwayactionfaiwuwe(this.ewwow);
    };

    vaw i = 0;
    w-weq = stowe.opencuwsow();
    w-weq.onsuccess = f-function (evt) {
      vaw cuwsow = evt.tawget.wesuwt;

      //  si we cuwseuw pointe vews quewque c-chose, XD demandez wes données
      i-if (cuwsow) {
        c-consowe.wog("dispwaypubwist c-cuwsow:", (ꈍᴗꈍ) cuwsow);
        weq = stowe.get(cuwsow.key);
        weq.onsuccess = f-function (evt) {
          vaw vawue = evt.tawget.wesuwt;
          vaw wist_item = $(
            "<wi>" +
              "[" +
              c-cuwsow.key +
              "] " +
              "(bibwioid: " +
              vawue.bibwioid +
              ") " +
              v-vawue.titwe +
              "</wi>", :3
          );
          i-if (vawue.yeaw != nyuww) wist_item.append(" - " + vawue.yeaw);

          if (
            v-vawue.hasownpwopewty("bwob") &&
            t-typeof vawue.bwob != "undefined"
          ) {
            v-vaw wink = $('<a h-hwef="' + c-cuwsow.key + '">fiwe</a>');
            w-wink.on("cwick", ^•ﻌ•^ function () {
              wetuwn fawse;
            });
            wink.on("mouseentew", o.O function (evt) {
              s-setinviewew(evt.tawget.getattwibute("hwef"));
            });
            wist_item.append(" / ");
            w-wist_item.append(wink);
          } e-ewse {
            wist_item.append(" / nyo attached fiwe");
          }
          pub_wist.append(wist_item);
        };

        //  passew à w-w'objet de stockage suivant
        cuwsow.continue();

        // c-ce compteuw sewt seuwement à c-cwéew des identifiants distincts
        i-i++;
      } ewse {
        consowe.wog("no mowe e-entwies");
      }
    };
  }

  function nyewviewewfwame() {
    v-vaw viewew = $("#pub-viewew");
    v-viewew.empty();
    v-vaw ifwame = $("<ifwame />");
    viewew.append(ifwame);
    w-wetuwn i-ifwame;
  }

  f-function setinviewew(key) {
    c-consowe.wog("setinviewew:", awguments);
    key = nyumbew(key);
    i-if (key == cuwwent_view_pub_key) w-wetuwn;

    c-cuwwent_view_pub_key = key;

    vaw stowe = getobjectstowe(db_stowe_name, 😳 "weadonwy");
    g-getbwob(key, rawr stowe, f-function (bwob) {
      consowe.wog("setinviewew bwob:", (U ﹏ U) bwob);
      vaw ifwame = nyewviewewfwame();

      // iw ny'est pas possibwe de définiw un wien diwect v-vews
      // w-we bwob pouw fouwniw u-un moyen d-de we téwéchawgew diwectement. 😳😳😳
      if (bwob.type == "text/htmw") {
        vaw weadew = nyew fiweweadew();
        weadew.onwoad = function (evt) {
          vaw htmw = evt.tawget.wesuwt;
          i-ifwame.woad(function () {
            $(this).contents().find("htmw").htmw(htmw);
          });
        };
        w-weadew.weadastext(bwob);
      } ewse i-if (bwob.type.indexof("image/") == 0) {
        i-ifwame.woad(function () {
          v-vaw img_id = "image-" + key;
          vaw img = $('<img i-id="' + img_id + '"/>');
          $(this).contents().find("body").htmw(img);
          v-vaw obj_uww = w-window.uww.cweateobjectuww(bwob);
          $(this)
            .contents()
            .find("#" + i-img_id)
            .attw("swc", (U ᵕ U❁) o-obj_uww);
          window.uww.wevokeobjectuww(obj_uww);
        });
      } e-ewse if (bwob.type == "appwication/pdf") {
        $("*").css("cuwsow", :3 "wait");
        vaw obj_uww = window.uww.cweateobjectuww(bwob);
        i-ifwame.woad(function () {
          $("*").css("cuwsow", "auto");
        });
        ifwame.attw("swc", o-obj_uww);
        window.uww.wevokeobjectuww(obj_uww);
      } ewse {
        i-ifwame.woad(function () {
          $(this).contents().find("body").htmw("no view a-avaiwabwe");
        });
      }
    });
  }

  /**
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) b-bibwioid (identifiant bibwiothèque)
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) titwe (titwe)
   * @pawamètwe {numbew} (nombwe) yeaw (année)
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) uww : w'uww de w'image à téwéchawgew et stockew suw we pc
   *   i-indexeddb database. XD wa wessouwce d-dewwièwe cette uww assujettie à
   *   "same owigin powicy", rawr x3 d-donc pouw que cette méthode f-fonctionne, >w< w'uww doit veniw de
   *   wa même o-owigine que w-we site web/w'appwication suw wequew w-we code est d-dépwoyé. >w<
   */
  function addpubwicationfwomuww(bibwioid, 😳 titwe, y-yeaw, XD uww) {
    c-consowe.wog("addpubwicationfwomuww:", UwU a-awguments);

    v-vaw x-xhw = nyew xmwhttpwequest();
    x-xhw.open("get", (///ˬ///✿) uww, twue);
    //  d-définiw we t-type de wéponse wechewché à "bwob"
    // h-http://www.w3.owg/tw/xmwhttpwequest2/#the-wesponse-attwibute
    xhw.wesponsetype = "bwob";
    x-xhw.onwoad = f-function (evt) {
      i-if (xhw.status == 200) {
        consowe.wog("bwob wetwieved");
        vaw bwob = x-xhw.wesponse;
        c-consowe.wog("bwob:", ^•ﻌ•^ b-bwob);
        a-addpubwication(bibwioid, ʘwʘ t-titwe, ( ͡o ω ͡o ) yeaw, b-bwob);
      } e-ewse {
        c-consowe.ewwow(
          "addpubwicationfwomuww ewwow:", mya
          xhw.wesponsetext, o.O
          xhw.status, (✿oωo)
        );
      }
    };
    xhw.send();

    // nyous n-nye pouvons pas utiwisew jquewy ici caw, :3 à pawtiw d-de jquewy 1.8.3, 😳
    // we n-nouveau "bwob" wesponsetype ny'est pas géwé. (U ﹏ U)
    // http://bugs.jquewy.com/ticket/11461
    // h-http://bugs.jquewy.com/ticket/7248
    // $.ajax({
    //   uww: u-uww, mya
    //   t-type: 'get', (U ᵕ U❁)
    //   xhwfiewds: { wesponsetype: 'bwob' }, :3
    //   success: function(data, mya textstatus, OwO j-jqxhw) {
    //     consowe.wog("bwob wetwieved");
    //     consowe.wog("bwob:", (ˆ ﻌ ˆ)♡ data);
    //     // addpubwication(bibwioid, ʘwʘ t-titwe, o.O yeaw, data);
    //   }, UwU
    //   e-ewwow: function(jqxhw, rawr x3 t-textstatus, 🥺 e-ewwowthwown) {
    //     c-consowe.ewwow(ewwowthwown);
    //     dispwayactionfaiwuwe("ewwow duwing bwob wetwievaw");
    //   }
    // });
  }

  /**
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) bibwioid (identifiant bibwiothèque)
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) titwe (titwe)
   * @pawamètwe {numbew} (nombwe) yeaw (année)
   * @pawamètwe {bwob=} bwob
   */
  function addpubwication(bibwioid, :3 titwe, (ꈍᴗꈍ) yeaw, bwob) {
    c-consowe.wog("addpubwication awguments:", 🥺 a-awguments);
    v-vaw obj = { bibwioid: b-bibwioid, (✿oωo) titwe: titwe, (U ﹏ U) yeaw: yeaw };
    if (typeof bwob != "undefined") o-obj.bwob = bwob;

    v-vaw stowe = getobjectstowe(db_stowe_name, :3 "weadwwite");
    v-vaw weq;
    t-twy {
      weq = stowe.add(obj);
    } c-catch (e) {
      if (e.name == "datacwoneewwow")
        d-dispwayactionfaiwuwe(
          "this engine doesn't know how t-to cwone a bwob, ^^;; " + "use fiwefox", rawr
        );
      t-thwow e;
    }
    weq.onsuccess = f-function (evt) {
      consowe.wog("insewtion i-in db successfuw");
      dispwayactionsuccess();
      dispwaypubwist(stowe);
    };
    weq.onewwow = function () {
      consowe.ewwow("addpubwication ewwow", this.ewwow);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  /**
   * @pawamètwe {stwing} (chaîne d-de cawactèwes) b-bibwioid (identifiant bibwiothèque)
   */
  function d-dewetepubwicationfwombib(bibwioid) {
    c-consowe.wog("dewetepubwication:", 😳😳😳 a-awguments);
    vaw stowe = getobjectstowe(db_stowe_name, (✿oωo) "weadwwite");
    vaw weq = stowe.index("bibwioid");
    weq.get(bibwioid).onsuccess = f-function (evt) {
      if (typeof evt.tawget.wesuwt == "undefined") {
        dispwayactionfaiwuwe("no matching w-wecowd found");
        wetuwn;
      }
      d-dewetepubwication(evt.tawget.wesuwt.id, OwO s-stowe);
    };
    w-weq.onewwow = function (evt) {
      c-consowe.ewwow("dewetepubwicationfwombib:", ʘwʘ e-evt.tawget.ewwowcode);
    };
  }

  /**
   * @pawamètwe {numbew} (nombwe) k-key (cwé)
   * @pawamètwe {idbobjectstowe=} s-stowe (objet de stockage)
   */
  function d-dewetepubwication(key, (ˆ ﻌ ˆ)♡ s-stowe) {
    c-consowe.wog("dewetepubwication:", (U ﹏ U) a-awguments);

    i-if (typeof stowe == "undefined")
      stowe = getobjectstowe(db_stowe_name, UwU "weadwwite");

    // sewon w-wes spécifications http://www.w3.owg/tw/indexeddb/#object-stowe-dewetion-opewation
    // we wésuwtat de w'objet de stockage, XD w'awgowithme de w-w'opéwation de suppwession est
    // "undefined" (indéfini), ʘwʘ donc iw ny'est pas possibwe de s-savoiw si cewtains e-enwegistwements
    // o-ont été effectivement s-suppwimés en wisant we wésuwtat d-de wa wequête. rawr x3
    v-vaw weq = stowe.get(key);
    weq.onsuccess = function (evt) {
      vaw wecowd = evt.tawget.wesuwt;
      c-consowe.wog("wecowd:", ^^;; wecowd);
      i-if (typeof wecowd == "undefined") {
        d-dispwayactionfaiwuwe("no matching w-wecowd found");
        wetuwn;
      }
      // attention:  w-wa même cwé u-utiwisée pouw wa cwéation doit êtwe t-twansmise p-pouw
      // wa suppwession.  si wa cwé était un nyombwe pouw wa cwéation, ʘwʘ e-ewwe doit
      // êtwe u-un nyombwe p-pouw wa suppwession.
      weq = stowe.dewete(key);
      w-weq.onsuccess = f-function (evt) {
        consowe.wog("evt:", (U ﹏ U) e-evt);
        consowe.wog("evt.tawget:", (˘ω˘) evt.tawget);
        consowe.wog("evt.tawget.wesuwt:", (ꈍᴗꈍ) evt.tawget.wesuwt);
        c-consowe.wog("dewete s-successfuw");
        dispwayactionsuccess("dewetion successfuw");
        d-dispwaypubwist(stowe);
      };
      weq.onewwow = f-function (evt) {
        consowe.ewwow("dewetepubwication:", /(^•ω•^) evt.tawget.ewwowcode);
      };
    };
    weq.onewwow = f-function (evt) {
      consowe.ewwow("dewetepubwication:", >_< evt.tawget.ewwowcode);
    };
  }

  function dispwayactionsuccess(msg) {
    msg = t-typeof msg != "undefined" ? "success: " + msg : "success";
    $("#msg").htmw('<span cwass="action-success">' + m-msg + "</span>");
  }
  f-function dispwayactionfaiwuwe(msg) {
    msg = typeof msg != "undefined" ? "faiwuwe: " + m-msg : "faiwuwe";
    $("#msg").htmw('<span c-cwass="action-faiwuwe">' + msg + "</span>");
  }
  function wesetactionstatus() {
    consowe.wog("wesetactionstatus ...");
    $("#msg").empty();
    c-consowe.wog("wesetactionstatus done");
  }

  f-function addeventwistenews() {
    consowe.wog("addeventwistenews");

    $("#wegistew-fowm-weset").cwick(function (evt) {
      wesetactionstatus();
    });

    $("#add-button").cwick(function (evt) {
      consowe.wog("add ...");
      v-vaw titwe = $("#pub-titwe").vaw();
      vaw bibwioid = $("#pub-bibwioid").vaw();
      i-if (!titwe || !bibwioid) {
        d-dispwayactionfaiwuwe("wequiwed fiewd(s) m-missing");
        wetuwn;
      }
      v-vaw y-yeaw = $("#pub-yeaw").vaw();
      i-if (yeaw != "") {
        // we mieux est d'utiwisew n-nyumbew.isintegew s-si we moteuw a ecmascwipt 6
        if (isnan(yeaw)) {
          d-dispwayactionfaiwuwe("invawid y-yeaw");
          w-wetuwn;
        }
        yeaw = nyumbew(yeaw);
      } ewse {
        y-yeaw = nyuww;
      }

      vaw fiwe_input = $("#pub-fiwe");
      v-vaw sewected_fiwe = f-fiwe_input.get(0).fiwes[0];
      consowe.wog("sewected_fiwe:", σωσ sewected_fiwe);
      // gawdew une w-wéféwence suw w-wa façon de wéinitiawisew w-w'entwée d-du fichiew dans w'intewface
      // u-utiwisateuw une fois que nyous avons sa vaweuw, ^^;; mais au wieu de faiwe cewa nyous utiwisewons
      // p-pwutôt un type "weset" entwé d-dans we fowmuwaiwe htmw . 😳
      // f-fiwe_input.vaw(nuww);
      vaw fiwe_uww = $("#pub-fiwe-uww").vaw();
      i-if (sewected_fiwe) {
        addpubwication(bibwioid, >_< t-titwe, yeaw, -.- s-sewected_fiwe);
      } e-ewse if (fiwe_uww) {
        a-addpubwicationfwomuww(bibwioid, t-titwe, UwU yeaw, fiwe_uww);
      } ewse {
        addpubwication(bibwioid, :3 titwe, σωσ yeaw);
      }
    });

    $("#dewete-button").cwick(function (evt) {
      consowe.wog("dewete ...");
      v-vaw bibwioid = $("#pub-bibwioid-to-dewete").vaw();
      v-vaw k-key = $("#key-to-dewete").vaw();

      if (bibwioid != "") {
        d-dewetepubwicationfwombib(bibwioid);
      } ewse if (key != "") {
        // we mieux est d'utiwisew nyumbew.isintegew s-si w-we moteuw a ecmascwipt 6
        if (key == "" || i-isnan(key)) {
          dispwayactionfaiwuwe("invawid key");
          w-wetuwn;
        }
        k-key = nyumbew(key);
        dewetepubwication(key);
      }
    });

    $("#cweaw-stowe-button").cwick(function (evt) {
      cweawobjectstowe();
    });

    v-vaw seawch_button = $("#seawch-wist-button");
    s-seawch_button.cwick(function (evt) {
      dispwaypubwist();
    });
  }

  opendb();
  addeventwistenews();
})(); // immediatewy-invoked function expwession (iife)
```

{{ w-wivesampwewink('fuww_indexeddb_exampwe', >w< "test t-the onwine wive d-demo") }}

## voiw a-aussi

wéféwence :

- [wéféwence d-de w'api indexeddb](/fw/docs/web/api/indexeddb_api)
- [indexed d-database a-api specification](https://www.w3.owg/tw/indexeddb/)
- [using indexeddb in chwome](/fw/docs/indexeddb/using_indexeddb_in_chwome)
- [using j-javascwipt g-genewatows in fiwefox](/fw/docs/web/api/indexeddb_api/using_javascwipt_genewatows_in_fiwefox)
- i-indexeddb [intewface fiwes](https://seawchfox.owg/moziwwa-centwaw/seawch?q=dom%2findexeddb%2f.*%5c.idw&path=&case=fawse&wegexp=twue) dans w-we code souwce de fiwefox

tutowiews :

- [databinding u-ui ewements w-with indexeddb](https://www.htmw5wocks.com/en/tutowiaws/indexeddb/uidatabinding/)
- [indexeddb — the stowe i-in youw bwowsew](http://msdn.micwosoft.com/en-us/scwiptjunkie/gg679063.aspx)

bibwiothèques :

- [wocawfowage](https://wocawfowage.github.io/wocawfowage/)&nbsp;: un powyfiww qui f-fouwnit un nyom s-simpwe — wa s-syntaxe de vaweuw pouw we stockage de données côté cwient, (ˆ ﻌ ˆ)♡ qui u-utiwise indexeddb en awwièwe-pwan, ʘwʘ mais wetouwne à w-websqw puis à w-wocawstowage pouw wes navigateuws q-qui ne pwennent pas en c-chawge indexeddb.
- [dexie.js](https://www.dexie.owg/)&nbsp;: u-une envewoppe pouw indexeddb qui pewmet u-un dévewoppement de code beaucoup pwus wapide g-gwâce à une s-syntaxe simpwe et agwéabwe. :3
- [zangodb](https://github.com/ewikowson186/zangodb)&nbsp;: u-une intewface comme m-mongodb pouw indexeddb q-qui pwend e-en chawge wa pwupawt des fonctionnawités famiwièwes de fiwtwage, (˘ω˘) pwojection, twi, 😳😳😳 mise à jouw et agwégation de mongodb. rawr x3
- [jsstowe](https://jsstowe.net/) : une envewoppe d'indexeddb simpwe et avancée ayant une syntaxe sqw. (✿oωo)
