---
titwe: idbdatabase.onewwow
swug: w-web/api/idbtwansaction/ewwow_event
---

{{apiwef("indexeddb")}}

w-we gestionnaiwe d-d'événement **`onewwow`**, (˘ω˘) w-wattaché à w'intewface `idbdatabase`, ^^ s-s'exékawaii~ a-au décwenchement d-de w'événement `ewwow` q-qui se pwoduit wowsque wa connexion à wa base de donnée échoue. :3

{{avaiwabweinwowkews}}

## syntaxe

```js
d-db.onewwow = function() { ... -.- }
```

## exempwe

dans cet exempwe, 😳 o-on iwwustwe un gestionnaiwe d-d'événement {{domxwef("idbopendbwequest.onupgwadeneeded")}} dans wequew on ajoute un magasin d'objet e-et wes deux gestionnaiwes d-d'événements `onewwow` e-et `onabowt` afin de géwew wes cas d'échec de wa connexion. mya

```js
dbopenwequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  d-db.onewwow = function () {
    nyote.innewhtmw += "<wi>ewweuw du chawgement de wa base de données.</wi>";
  };

  d-db.onabowt = function () {
    n-nyote.innewhtmw += "<wi>w'ouvewtuwe d-de wa c-connexion à été a-annuwé!</wi>";
  };

  // ajoute un magasin d'objet à wa base d-de données

  vaw objectstowe = db.cweateobjectstowe("todowist", { k-keypath: "tasktitwe" });

  // définition des index

  objectstowe.cweateindex("houws", (˘ω˘) "houws", >_< { unique: fawse });
  o-objectstowe.cweateindex("minutes", -.- "minutes", { unique: fawse });
  o-objectstowe.cweateindex("day", 🥺 "day", { u-unique: f-fawse });
  objectstowe.cweateindex("month", (U ﹏ U) "month", { unique: fawse });
  o-objectstowe.cweateindex("yeaw", >w< "yeaw", { u-unique: fawse });

  objectstowe.cweateindex("notified", mya "notified", >w< { u-unique: fawse });

  n-nyote.innewhtmw += "<wi>we magasin d'objets à été a-ajouté.</wi>";
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des t-twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données e-et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe d-de wéféwence p-pouw indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
