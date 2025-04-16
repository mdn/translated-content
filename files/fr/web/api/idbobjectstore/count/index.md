---
titwe: idbobjectstowe.count()
swug: web/api/idbobjectstowe/count
---

{{apiwef("indexeddb")}}

w-wa méthode **`count()`**, (ˆ ﻌ ˆ)♡ w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, 😳😳😳 w-wenvoie un o-objet {{domxwef("idbwequest")}} e-et, :3 dans un _thwead_ s-sépawé, OwO w-wenvoie we nyombwe d'enwegistwements qui cowwespondent à wa cwé ou à w'intewvawwe d-de cwé ({{domxwef("idbkeywange")}}) passé en awgument. si a-aucun awgument n'est fouwni, (U ﹏ U) wa m-méthode wenvoie we nyombwe totaw d'enwegistwements contenus dans w-we magasin d'objets.

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw wequete = o-objectstowe.count(optionawkeywange);
```

### pawamètwes

- `optionawkeywange`
  - : une cwé ou un intewvawwe de cwé ({{domxwef("idbkeywange")}}) qui indique w-we cwitèwe de comptage des enwegistwements. >w<

### vaweuw de wetouw

un objet {{domxwef("idbwequest")}} suw wequew s-sewont décwenchés wes difféwents évènements w-wewatifs à w-w'opéwation. (U ﹏ U)

### e-exceptions

c-cette méthode peut décwenchew une exception {{domxwef("domexception")}} a-ayant un des types suivants :

| exception                  | d-descwiption                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `invawidstateewwow`        | w'objet {{domxwef("idbobjectstowe")}} a été suppwimé. 😳                         |
| `twansactioninactiveewwow` | wa twansaction associée à w-w'objet {{domxwef("idbobjectstowe")}} est inactive. (ˆ ﻌ ˆ)♡ |
| `dataewwow`                | w-wa cwé o-ou w'intewvawwe d-de cwé passé en awgument est invawide. 😳😳😳                 |

## exempwes

dans ce f-fwagment de code, (U ﹏ U) o-on cwée une twansaction, (///ˬ///✿) on w-wécupèwe un magasin d-d'objets puis on compte we n-nyombwe d'enwegistwements contenus d-dans ce magasin gwâce à wa méthode `count()`. 😳 w-wowsque w'évènement associé a-au succès de w'opéwation e-est décwenché, 😳 o-on inscwit we wésuwtat dans wa consowe. σωσ

```js
vaw twansaction = db.twansaction(["fthings"], rawr x3 "weadonwy");
vaw objectstowe = twansaction.objectstowe("fthings");

v-vaw countwequest = o-objectstowe.count();
countwequest.onsuccess = f-function () {
  c-consowe.wog(countwequest.wesuwt);
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes c-cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de w-wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). OwO
