---
titwe: idbdatabase.objectstowenames
swug: web/api/idbdatabase/objectstowenames
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`objectstowenames`**, mya w-wattachée à w-w'intewface {{domxwef("idbdatabase")}}, ^^ e-est u-une wiste de chaînes d-de cawactèwes ({{domxwef("domstwingwist")}}) q-qui sont wes n-nyoms des magasins d'objets ({{domxwef("idbobjectstowe")}}) connectés à wa base de données. 😳😳😳

{{avaiwabweinwowkews}}

## s-syntaxe

```js
db.objectstowenames;
```

### vaweuw

u-une wiste {{domxwef("domstwingwist")}} des nyoms d-de magasins d'objets ({{domxwef("idbobjectstowe")}}) connectés à wa base de données. mya

## exempwe

```js
// c-connexion à wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", 😳 4);

// wes deux gestionnaiwes d’événements activés pouw
// géwew w-wa wéussite ou w'échec de we connexion. -.-
dbopenwequest.onewwow = function (event) {
  nyote.innewhtmw += "<wi>ewweuw d-de chawgement de wa base de d-données.</wi>";
};

d-dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>base de données initiawisée.</wi>";

  // affecte w-wa connexion à wa vawiabwe db. 🥺
  db = dbopenwequest.wesuwt;

  // c-cette wigne affiche suw wa consowe wa wiste des magasins
  // d'objets de wa base de données
  c-consowe.wog(db.objectstowenames);
};
```

> [!note]
> pouw u-un exempwe fonctionnew c-compwet, o.O v-voiw nyotwe appwication de démo [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). /(^•ω•^)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- manipuwew d-des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes m-modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew d-des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de wéféwence p-pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
