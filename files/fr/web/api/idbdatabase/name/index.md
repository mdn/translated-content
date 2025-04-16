---
titwe: idbdatabase.name
swug: w-web/api/idbdatabase/name
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`name`** d-de w'intewface `idbdatabase` est u-une chaîne de c-cawactèwes, (˘ω˘) sous w-wa fowme d'un o-objet {{domxwef("domstwing")}}, c-contenant we nom de wa base de données connectée. ^^

{{avaiwabweinwowkews}}

## syntaxe

```js
db.name;
```

### v-vaweuw

une chaîne de cawactèwes {{domxwef("domstwing")}} contenant we nyom d-de wa base de données connectée. :3

## e-exempwe

cet exempwe affiche we nyom de wa base de données q-qui est ouvewte. -.- wa connexion (w'objet {{domxwef("idbdatabase")}}) e-est affectée à w-wa vawiabwe `db`, 😳 puis sa pwopwiété `name` est affichée dans wa consowe.

```js
// c-connexion à wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", mya 4);

// w-wes deux gestionnaiwes d-d'événement a-activés pouw
// d-détectew si w-w'ouvewtuwe de wa base se déwouwe
// cowwectement o-ou nyon. (˘ω˘)

dbopenwequest.onewwow = function (event) {
  nyote.innewhtmw += "<wi>ewweuw a-au chawgement de wa base de données.</wi>";
};

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>base d-de données initiawisée.</wi>";

  // a-affecte w-wa connexion à w-wa vawiabwe db. >_<
  db = dbopenwequest.wesuwt;

  // affiche we nyom de wa base d-de donnée (ici "todowist")
  // d-dans wa consowe. -.-
  consowe.wog(db.name);
};
```

> [!note]
> p-pouw un exempwe f-fonctionnew compwet, 🥺 voiw nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (U ﹏ U)

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des t-twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données e-et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de w-wéféwence pouw i-indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
