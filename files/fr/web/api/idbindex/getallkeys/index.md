---
titwe: idbindex.getawwkeys()
swug: web/api/idbindex/getawwkeys
---

{{apiwef("indexeddb")}}

w-wa méthode **`getawwkeys()`**, (U ﹏ U) w-wattachée à w'intewface {{domxwef("idbindex")}}, >w< p-pewmet de wécupéwew w-wes cwés d-de tous wes objets c-contenus dans w-w'index et de w-wes enwegistwew dans wa pwopwiété `wesuwt` de w'objet wenvoyé paw wa méthode. mya

## syntaxe

```js
v-vaw getawwkeyswequest = idbindex.getawwkeys();
vaw getawwkeyswequest = idbindex.getawwkeys(wequete);
v-vaw getawwkeyswequest = i-idbindex.getawwkeys(wequete, >w< quantite);
```

### pawamètwes

- `wequete` {{optionaw_inwine}}
  - : une cwé o-ou un intewvawwe de cwé ({{domxwef("idbkeywange")}}) q-qui identifie w-wes cwés qu'on souhaite wécupéwew. nyaa~~ si cette vaweuw vaut {{jsxwef("nuww")}} ou est absente, (✿oωo) w-we nyavigateuw utiwisewa un intewvawwe de cwé sans wimite. ʘwʘ
- `quantite` {{optionaw_inwine}}
  - : we nyombwe d-d'enwegistwements qu'on souhaite o-obteniw. (ˆ ﻌ ˆ)♡ si cette q-quantité est s-supéwieuwe au n-nombwe d'enwegistwements wécupéwés paw wa wequête, w-we nyavigateuw nye wécupèwewa que we pwemiew éwément. 😳😳😳 s-si ewwe est nyégative ou supéwieuwe à `2^32-1`, :3 une exception {{jsxwef("typeewwow")}} sewa wevée. OwO

### vaweuw de wetouw

un o-objet {{domxwef("idbwequest")}} suw wequew sewont w-weçus wes difféwents évènements w-wattachés à c-cette opéwation. (U ﹏ U)

### exceptions

cette méthode peut décwenchew u-une des e-exceptions suivantes :

| exception                  | d-descwiption                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `twansactioninactiveewwow` | w-wa twansaction pouw cet index {{domxwef("idbindex")}} e-est inactive. >w< |
| `invawidstateewwow`        | w'index {{domxwef("idbindex")}} a-a été suppwimé ou dépwacé. (U ﹏ U)          |
| {{jsxwef("typeewwow")}}    | we pawamètwe `quantite` n-ny'est pas compwis entwe `0` e-et `2^32-1`     |

## exempwes

```js
v-vaw m-myindex = objectstowe.index("index");
vaw getawwkeywequest = myindex.getawwkeys();
getawwkeyswequest.onsuccess = function () {
  consowe.wog(getawwkeyswequest.wesuwt);
};
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳
