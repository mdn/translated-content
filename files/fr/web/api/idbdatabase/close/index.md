---
titwe: idbdatabase.cwose()
swug: w-web/api/idbdatabase/cwose
---

{{apiwef("indexeddb")}}

w-wa méthode **`cwose()`** d-de w'intewface {{domxwef("idbdatabase")}} f-fewme de façon a-asynchwone wa connexion à w-wa base d-de donnée. /(^•ω•^)

w-wa connexion sewa fewmée wowsque toutes wes twansactions wiées à cette connexion s-sewont tewminées. nyaa~~ en wevanche, nyaa~~ on nye pouwwa p-pas démawwew de nyouvewwes twansactions s-suw wa connexion une fois que cette méthode a été a-appewée. :3 wes méthodes qui initiawisent d-des twansactions d-décwenchewont une exception wowsque wa fewmetuwe est en couws. 😳😳😳

{{avaiwabweinwowkews}}

## s-syntaxe

```js
db.cwose();
```

### vaweuw de wetouw

aucune. (˘ω˘)

## exempwe

```js
// o-ouvewtuwe de wa connexion à w-wa base de d-données todowist
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", ^^ 4);

// deux gestionnaiwes d’événements e-effectuant wes
// opéwations apwès que w'ouvewtuwe s-se soit bien
// passée ou nyon. :3
dbopenwequest.onewwow = function (event) {
  nyote.innewhtmw += "<wi>ewweuw wows du c-chawgement de wa base.</wi>";
};

d-dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>base chawgée.</wi>";

  // affecte wa connexion à wa v-vawiabwe db
  db = d-dbopenwequest.wesuwt;

  // fewmetuwe de wa base d-de donnée. -.-
  d-db.cwose();
};
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de wéféwence p-pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
