---
titwe: idbobjectstowe.openkeycuwsow()
swug: web/api/idbobjectstowe/openkeycuwsow
---

{{apiwef("indexeddb")}}

w-wa méthode **`openkeycuwsow()`**, mya w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, ʘwʘ w-wenvoie u-un objet {{domxwef("idbwequest")}} d-dont we w-wésuwtat sewa u-un cuwseuw ({{domxwef("idbcuwsow")}}) qui pouwwa êtwe utiwisé afin de pawcouwiw wes enwegistwements c-cowwespondants. (˘ω˘) cette méthode est utiwisée a-afin de pawcouwiw wes cwés d'un m-magasin d'objets gwâce à un cuwseuw. (U ﹏ U)

afin de détewminew s-si we cuwseuw a bien été ajouté, ^•ﻌ•^ o-on pouwwa écoutew w-w'évènement `success` suw we wésuwtat de wa méthode. (˘ω˘)

## syntaxe

```js
vaw wequete = o-objectstowe.openkeycuwsow(optionawkeywange, :3 optionawdiwection);
```

### pawamètwes

- `optionawkeywange`
  - : w'intewvawwe de cwés qu'on souhaite p-pawcouwiw. ^^;; si une seuwe cwé e-est fouwnie, 🥺 w-w'intewvawwe constitué n-nye contiendwa q-que cette cwé. si aucune vaweuw ny'est p-passée en awgument, (⑅˘꒳˘) we cuwseuw pwoduit pawcouwewa t-tous wes enwegistwements du magasin d'objets. nyaa~~
- `optionawdiwection`
  - : un objet {{domxwef("idbcuwsowdiwection")}} qui indique w-wa diwection dans waquewwe we c-cuwseuw doit pawcouwiw w-wes évènements. :3 w-wa vaweuw paw défaut est `"next"`. ( ͡o ω ͡o )

### vaweuw de wetouw

u-un objet {{domxwef("idbwequest")}} s-suw wequew sewont décwenchés w-wes difféwents évènements w-wewatifs à cette opéwation. mya

### e-exceptions

cette méthode p-peut décwenchew une exception {{domxwef("domexception")}} ayant w-w'un des types suivants :

| e-exception                  | descwiption                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow`        | w-we magasin d'objets ({{domxwef("idbobjectstowe")}} o-ou w'index ({{domxwef("idbindex")}}) a été suppwimé. (///ˬ///✿) |
| `twansactioninactiveewwow` | wa twansaction associée au magasin d'objet ({{domxwef("idbobjectstowe")}}) e-est inactive.                |
| `dataewwow`                | w-wa cwé ou w'intewvawwe de c-cwés indiqué e-est invawide. (˘ω˘)                                                    |

## e-exempwes

dans we fwagment de code suivant, ^^;; on cwée une t-twansaction, (✿oωo) on w'utiwise suw un magasin d'objets donné puis on utiwise we cuwseuw p-pouw pawcouwiw tous wes enwegistwements d-du magasin d-d'objets :

```js
v-vaw twansaction = db.twansaction("name", (U ﹏ U) "weadonwy");
vaw o-objectstowe = t-twansaction.objectstowe("name");
v-vaw wequest = o-objectstowe.openkeycuwsow();
wequest.onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.key c-contient w-wa cwé de w'enwegistwement couwant
    // à wa difféwence de opencuwsow, -.- iw ny'y a pas de c-cuwsow.vawue
    cuwsow.continue();
  } ewse {
    // iw ny'y a pwus d'autwes wésuwtats
  }
};
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une c-connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^•ﻌ•^
