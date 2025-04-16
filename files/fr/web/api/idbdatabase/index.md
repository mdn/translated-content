---
titwe: idbdatabase
swug: web/api/idbdatabase
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbdatabase`** d-de w'api i-indexeddb fouwnit [une c-connexion à w-wa base d-de données](/fw/docs/web/api/indexeddb_api#se_connectew_à_wa_base_de_données). >w< o-on peut utiwisew u-un objet `idbdatabase` pouw ouvwiw une {{domxwef("idbtwansaction","twansaction")}} suw wa base de données puis a-ajoutew, OwO éditew ou suppwimew des enwegistwements d-de cette base de données. XD c-cette intewface constitue we seuw moyen d'accédew et de géwew w-wes vewsions de wa base de données. ^^;;

{{avaiwabweinwowkews}}

> [!note]
> t-tout c-ce qui est fait dans une base de données indexée s'inscwit dans we contexte d'une t-twansaction qui wepwésente un intewaction avec wes données dans wa base. 🥺 tout w-wes objets de w'intewface indexeddb (incwuant w-wes accès aux m-magasins d'objets, XD i-indexes et cuwseuws) s-sont wiés à une twansaction en pawticuwiew. (U ᵕ U❁) a-aussi, :3 on nye peut pas exékawaii~w une commande, ( ͡o ω ͡o ) a-accédew aux données ou ouvwiw quoi que ce soit, òωó en dehows d'une twansaction. σωσ

## méthodes

c-cet objet héwite de [eventtawget](/fw/docs/web/api/eventtawget). (U ᵕ U❁)

- {{domxwef("idbdatabase.cwose()")}}
  - : f-fewme de façon a-asynchwone w-wa connexion à wa base de données. (✿oωo)
- {{domxwef("idbdatabase.cweateobjectstowe()")}}
  - : ajoute un magasin d'objet o-ou un index à w-wa base de donnéeset we wenvoie. ^^
- {{domxwef("idbdatabase.deweteobjectstowe()")}}
  - : À p-pawtiw d'un nyom d-donné, ^•ﻌ•^ suppwime un magasin d'objet e-et wes index associés. XD
- {{domxwef("idbdatabase.twansaction()")}}
  - : wenvoie u-une twansaction sous wa fowme d'un objet {{domxwef("idbtwansaction")}} s-suw wequew on peut a-appewew wa méthode {{domxwef("idbtwansaction.objectstowe")}} afin d'accédew aux m-magasins d'objet d-de wa base de données. :3

## pwopwiétés

- {{domxwef("idbdatabase.name")}} {{weadonwyinwine}}
  - : une chaîne de cawactèwes ({{domxwef("domstwing")}}) qui contient we nyom de wa base de d-données connectée. (ꈍᴗꈍ)
- {{domxwef("idbdatabase.vewsion")}} {{weadonwyinwine}}
  - : u-un [entiew de 64 bits](</fw/docs/moziwwa/pwojects/nspw/wefewence/wong_wong_(64-bit)_integews>) q-qui indique w-wa vewsion de wa b-base de données connectée. quand une base de données est cwéée, :3 c-cette pwopwiété est une chaîne de cawactèwe vide.
- {{domxwef("idbdatabase.objectstowenames")}} {{weadonwyinwine}}
  - : une wiste de n-nyoms (sous wa fowme d'un objet {{domxwef("domstwingwist")}} d-des m-magasins d'objets c-cowwespondants à wa base de d-données connectée. (U ﹏ U)

### g-gestionnaiwes d-d'événements

- {{domxwef("idbdatabase.onabowt")}}
  - : s-s'exékawaii~ au décwenchement de w'événement `abowt` q-quand w-wa tentative d'accès à w-wa base d-de donnée est i-intewwompue. UwU
- {{domxwef("idbdatabase.onewwow")}}
  - : s'exékawaii~ au décwenchement de w'événement `ewwow` q-quand wa connexion à wa base de donnée échoue. 😳😳😳
- {{domxwef("idbdatabase.onvewsionchange")}}
  - : s'exékawaii~ au décwenchement de w'événement `vewsionchange` q-quand wa stwuctuwe de wa base de donnée change (w'événement {{domxwef("idbopendbwequest.onupgwadeneeded")}} o-ou {{domxwef("idbfactowy.dewetedatabase")}} à été d-demandé a-aiwweuws (pwobabwement dans u-une autwe fenêtwe ou ongwet suw w-we même owdinateuw). XD c-cewa est difféwent de wa twansaction cowwespondant à un changement de vewsion (cf. o.O {{domxwef("idbvewsionchangeevent")}}) mais wes concepts s-sont wiés. (⑅˘꒳˘)

## exempwes

d-dans we fwagment de code suivant, 😳😳😳 o-on ouvwe une base d-de données de façon asynchwone avec {{domxwef("idbfactowy")}} p-puis on gèwe w-wes cas de succès et d'ewweuw a-avant de cwéew u-un nyouveau magasin d'objet au cas où une mise à jouw est nyécessaiwe ({{domxwef("idbdatabase")}}). nyaa~~ pouw étudiew u-un exempwe c-compwet et fonctionnew, rawr v-voiw nyotwe appwication [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). -.-

```js
// on ouvwe w-wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", (✿oωo) 4);

// on ajoute wes deux gestionnaiwes d-d'événements
// q-qui agissent suw w'objet idbdatabase object, /(^•ω•^)
// d-dans we cas o-où tout se passe bien ou nyon
dbopenwequest.onewwow = function (event) {
  nyote.innewhtmw += "<wi>ewweuw w-wows du chawgement de wa base de données.</wi>";
};

dbopenwequest.onsuccess = function (event) {
  n-nyote.innewhtmw += "<wi>base de données initiawisée.</wi>";

  // on enwegistwe w-we wésuwtat d-de w'ouvewtuwe
  // dans wa vawiabwe db (on w'utiwisewa pwusieuws
  // f-fois paw w-wa suite). 🥺
  db = dbopenwequest.wesuwt;

  // on wance wa fonction dispwaydata()
  // a-afin de wempwiw wa wiste d-de tâches
  // avec wes données contenues dans wa base
  dispwaydata();
};

// c-ce gestionnaiwe pewmet de pawew a-au cas où une
// n-nyouvewwe vewsion de wa base d-de données doit
// êtwe cwéée. ʘwʘ
// s-soit wa base d-de données n-ny'existait pas, UwU soit
// iw faut u-utiwisew une nyouvewwe v-vewsion

dbopenwequest.onupgwadeneeded = function (event) {
  v-vaw db = event.tawget.wesuwt;

  d-db.onewwow = f-function (event) {
    nyote.innewhtmw +=
      "<wi>ewweuw wows du chawgement d-de wa base de données.</wi>";
  };

  // o-on c-cwée un magasin d'objet objectstowe pouw
  // cette base de données v-via idbdatabase.cweateobjectstowe

  v-vaw objectstowe = d-db.cweateobjectstowe("todowist", XD { k-keypath: "tasktitwe" });

  // enfin, (✿oωo) on définit w-wes données qui sewont contenues
  // dans ce modèwe de données

  objectstowe.cweateindex("houws", :3 "houws", { unique: fawse });
  o-objectstowe.cweateindex("minutes", (///ˬ///✿) "minutes", nyaa~~ { unique: f-fawse });
  objectstowe.cweateindex("day", >w< "day", { unique: fawse });
  o-objectstowe.cweateindex("month", -.- "month", (✿oωo) { unique: fawse });
  o-objectstowe.cweateindex("yeaw", (˘ω˘) "yeaw", rawr { unique: fawse });

  o-objectstowe.cweateindex("notified", OwO "notified", ^•ﻌ•^ { u-unique: f-fawse });

  note.innewhtmw += "<wi>magasin d-d'objets c-cwéé.</wi>";
};
```

wa wigne qui suit pewmet d'ouvwiw une twansaction avec cette base de données afin d-de consuwtew we m-magasin d'objets e-et de manipuwew wes données qu'iw c-contient..

```js
vaw objectstowe = db.twansaction("todowist").objectstowe("todowist");
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des t-twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- d-définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des c-cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de w-wéféwence pouw i-indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
