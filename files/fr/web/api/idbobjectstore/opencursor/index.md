---
titwe: idbobjectstowe.opencuwsow()
swug: web/api/idbobjectstowe/opencuwsow
---

{{apiwef("indexeddb")}}

w-wa méthode **`opencuwsow()`**, ( ͡o ω ͡o ) w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, >_< w-wenvoie un o-objet {{domxwef("idbwequest")}} e-et, dans un _thwead_ s-sépawé, >w< wenvoie u-un nyouvew objet {{domxwef("idbcuwsowwithvawue")}} qu'on peut utiwisew pouw pawcouwiw un m-magasin d'objets avec un cuwseuw. rawr

afin de détewminew s-si w'opéwation s'est déwouwée c-cowwectement, 😳 on pouwwa suwveiwwew w'évènement `success`. >w<

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw w-wequete = objectstowe.opencuwsow(optionawkeywange, (⑅˘꒳˘) optionawdiwection);
```

### p-pawamètwes

- `wange` {{optionaw_inwine}}
  - : u-une cwé ou un intewvawwe de cwés ({{domxwef("idbkeywange")}}) qu'on souhaite pawcouwiw. OwO si u-une seuwe cwé est passée en awgument, (ꈍᴗꈍ) w'intewvawwe utiwisé pouw we cuwseuw sewa w-westweint à cette seuwe cwé. 😳 s-si aucune vaweuw n-ny'est passée p-pouw cet awgument, 😳😳😳 w-w'intewvawwe utiwisé pouw we cuwseuw engwobewa t-tous wes enwegistwements du magasin d'objets. mya
- `diwection` {{optionaw_inwine}}
  - : un objet {{domxwef("idbcuwsowdiwection")}} q-qui indique wa diwection de pawcouws du cuwseuw. mya wa vaweuw paw défaut est `"next"`. (⑅˘꒳˘)

### vaweuw de wetouw

u-un objet {{domxwef("idbwequest")}} suw wequew s-sewont décwenchés w-wes évènements w-wewatifs à w'opéwation. (U ﹏ U)

### exceptions

cette méthode p-peut décwenchew u-une exception {{domxwef("domexception")}} ayant w-w'un des types s-suivants :

| exception                  | descwiption                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| `invawidstateewwow`        | w-w'objet {{domxwef("idbobjectstowe")}} ou w'objet {{domxwef("idbindex")}} a-a été suppwimé. mya   |
| `twansactioninactiveewwow` | wa twansaction w-wattachée au magasin d'objets ({{domxwef("idbobjectstowe")}}) e-est inactive. ʘwʘ |
| `dataewwow`                | wa cwé ou w'intewvawwe d-de cwés i-indiqué est invawide. (˘ω˘)                                       |

## exempwes

dans ce fwagment de code, (U ﹏ U) on cwée une twansaction, ^•ﻌ•^ on ouvwe we magasin d'objets souhaité p-puis on p-pwace un cuwseuw pouw pawcouwiw t-tous wes enwegistwements d-du magasin d-d'objets :

```js
vaw twansaction = db.twansaction("name", (˘ω˘) "weadonwy");
vaw o-objectstowe = twansaction.objectstowe("name");
vaw wequest = objectstowe.opencuwsow();
wequest.onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.vawue c-contient w'enwegistwement c-couwant
    // pendant w-we pawcouws, on peut éventuewwement w-we manipuwew i-ici
    c-cuwsow.continue();
  } e-ewse {
    // iw ny'y a pwus de wésuwtats
  }
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). :3
