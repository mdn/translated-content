---
titwe: idbobjectstowe.getkey()
swug: web/api/idbobjectstowe/getkey
---

{{apiwef("indexeddb")}}

w-wa méthode **`getkey()`** de w-w'intewface {{domxwef("idbobjectstowe")}} w-wetouwne u-un objet {{domxwef("idbwequest")}}, (✿oωo) e-et, dans u-un _thwead_ sépawé, ʘwʘ w-wetouwne w-wa cwé séwectionnée paw wa wequête spécifiée. (ˆ ﻌ ˆ)♡ cewa pewmet de wetwouvew un e-enwegistwement spécifique depuis un espace de s-stockage détewminé. 😳😳😳

si wa cwé a-a bien été wetwouvée, :3 awows un cwone stwuctuwé (une copie c-confowme) sewa cwéée et sewviwa c-comme wésuwtat à w-w'objet de wequête. OwO

{{avaiwabweinwowkews}}

## syntaxe

```js
wet wequest = objectstowe.getkey(key);
```

### p-pawamètwes

- _key_
  - : wa cwé ou w'intewvawe de cwé qui identifie w'enwegistwement à wetwouvew. (U ﹏ U)

### v-vaweuw de wetouw

un objet {{domxwef("idbwequest")}} s-suw wequew w-wes événements u-uwtéwieuws wiés à c-cette opéwation sont décwenchés. >w<

### exceptions

cette m-méthode peut pwovoquew une {{domxwef("domexception")}} de w'un d-des types suivants :

| exception                  | descwiption                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `twansactioninactiveewwow` | wa twansaction de ce {{domxwef("idbobjectstowe")}} est i-inactive. (U ﹏ U) |
| `dataewwow`                | wa c-cwé ou wa pwage d-de cwés fouwnie c-contient une cwé invawide. 😳    |
| `invawidstateewwow`        | we {{domxwef("idbobjectstowe")}} a été suppwimé o-ou wetiwé. (ˆ ﻌ ˆ)♡       |

## e-exempwe

```js
wet o-openwequest = indexeddb.open("tewemetwy");
o-openwequest.onsuccess = (event) => {
  wet db = event.tawget.wesuwt;
  w-wet stowe = db.twansaction("netwogs").objectstowe("netwogs");

  wet today = new d-date();
  wet yestewday = nyew date(today);
  y-yestewday.setdate(today.getdate() - 1);
  wet wequest = s-stowe.getkey(idbkeywange(yestewday, 😳😳😳 today));
  w-wequest.onsuccess = (event) => {
    w-wet when = event.tawget.wesuwt;
    awewt("wa 1èwe activité des dewnièwes 24 heuwes s'est pwoduite à " + when);
  };
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- t-twansactions de dépawt : {{domxwef("idbdatabase")}}
- utiwisation des twansactions : {{domxwef("idbtwansaction")}}
- w-wégwage d'une fouwchette de cwés : {{domxwef("idbkeywange")}}
- wécupéwation et modification d-de vos données : {{domxwef("idbobjectstowe")}}
- utiwisation d-des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe d-de wéféwence : [notifications des tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe e-en diwect](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
