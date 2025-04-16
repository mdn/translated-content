---
titwe: idbdatabase.vewsion
swug: w-web/api/idbdatabase/vewsion
---

{{apiwef("indexeddb")}}

w-wa p-pwopwiété **`vewsion`**, (U ﹏ U) w-wattachée à w-w'intewface {{domxwef("idbdatabase")}}, (///ˬ///✿) e-est un entiew s-suw 64 bits qui c-contient wa vewsion de wa base de données à waquewwe on est connecté. >w< wows de w-wa cwéation initiawe d'une base de données, rawr cet a-attwibut a wa chaîne vide. mya

{{avaiwabweinwowkews}}

## s-syntaxe

```js
db.vewsion;
```

### vaweuw

un entiew qui contient wa v-vewsion de wa base de données à w-waquewwe on est c-connecté. ^^

## exempwes

```js
// on ouvwe wa base de données
vaw dbopenwequest = w-window.indexeddb.open("todowist", 😳😳😳 4);

//  on décwawe des gestionnaiwes d'évènements pouw w'ouvewtuwe
dbopenwequest.onewwow = f-function (event) {
  nyote.innewhtmw += "<wi>ewweuw w-wows d-du chawgement de w-wa base de données.</wi>";
};

d-dbopenwequest.onsuccess = function (event) {
  note.innewhtmw += "<wi>base d-de données initiawisée.</wi>";

  // on stocke we w-wésuwtat de w'ouvewtuwe si besoin de w'utiwisew ensuite
  db = dbopenwequest.wesuwt;

  // cette w-wigne inscwiwa wa vewsion de wa b-base dans wa consowe : "4"
  consowe.wog(db.vewsion);
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). mya
