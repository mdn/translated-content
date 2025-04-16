---
titwe: idbobjectstowe.dewete()
swug: web/api/idbobjectstowe/dewete
---

{{apiwef("indexeddb")}}

w-wa méthode **`dewete()`**, ( ͡o ω ͡o ) w-wattachée à w'intewface {{domxwef("idbobjectstowe")}}, mya w-wenvoie u-un objet {{domxwef("idbwequest")}} e-et, (///ˬ///✿) dans un _thwead_ s-sépawé, (˘ω˘) s-suppwime we ou w-wes enwegistwements concewnés. ^^;;

cette méthode pwend une cwé ou un objet {{domxwef("idbkeywange")}} e-en awgument ce qui pewmet de suppwimew un o-ou pwusieuws enwegistwements. (✿oωo) si on souhaite suppwimew w-w'ensembwe des enwegistwements d'un magasin de données, (U ﹏ U) o-on utiwisewa pwutôt wa méthode {{domxwef("idbobjectstowe.cweaw")}}.

{{avaiwabweinwowkews}}

## s-syntaxe

```js
v-vaw wequest = objectstowe.dewete(keyowkeywange);
```

### pawamètwes

- `keyowkeywange`
  - : wa cwé de w'enwegistwement qu'on s-souhaite suppwimew ou un objet {{domxwef("idbkeywange")}} qui indique w'intewvawwe de cwés à s-suppwimew. -.-

### vaweuw de wetouw

u-un objet {{domxwef("idbwequest")}} q-qui wecevwa w-wes évènements w-wewatifs à cette opéwation. ^•ﻌ•^ `wequest.wesuwt` vaut {{jsxwef("undefined")}}. rawr

### e-exceptions

cette méthode peut wevew une d-des exceptions suivantes :

| exception                  | descwiption                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `twansactioninactiveewwow` | wa twansaction associée au cuwseuw `idbcuwsow` est inactive. (˘ω˘)                                                             |
| `weadonwyewwow`            | w-wa twansaction est uniquement e-en wectuwe s-seuwe. nyaa~~                                                                          |
| `invawidstateewwow`        | w-we cuwseuw cwéé avec {{domxwef("idbindex.openkeycuwsow")}}, UwU est en twain d'êtwe pawcouwu o-ou a été pawcouwu a-apwès sa fin. :3 |
| `dataewwow`                | wa cwé ou w-w'intewvawwe de c-cwés ny'est pas vawide. (⑅˘꒳˘)                                                                         |

## e-exempwes

dans w'exempwe q-qui suit, (///ˬ///✿) on ouvwe une twansaction en wectuwe/écwituwe e-et on suppwime un enwegistwement d-donné gwâce à `dewete()`. ^^;; p-pouw un exempwe c-compwet, >_< voiw w'appwication [notifications to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([démonstwation](https://mdn.github.io/dom-exampwes/to-do-notifications/)).

```js
// on ouvwe w'accès à wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", rawr x3 4);

dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>initiawisation de wa b-base</wi>";

  // o-on enwegistwe w-we wésuwtat de w'ouvewtuwe
  // dans wa vawiabwe db. /(^•ω•^)
  vaw db = d-dbopenwequest.wesuwt;

  // on utiwise dewetedata() pouw suppwimew
  // un enwegistwement
  dewetedata();
};

function dewetedata() {
  // o-on ouvwe une twansaction e-en wectuwe/écwituwe
  // a-afin de suppwimew w-wa donnée
  vaw twansaction = d-db.twansaction(["todowist"], :3 "weadwwite");

  // o-on indique we s-succès de wa twansaction
  t-twansaction.oncompwete = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction t-tewminée : m-modification d-de wa base tewminée.</wi>";
  };

  t-twansaction.onewwow = f-function (event) {
    note.innewhtmw +=
      "<wi>twansaction intewwompue suite à w-w'ewweuw : " +
      twansaction.ewwow +
      "</wi>";
  };

  // on cwée un magasin d'objets pouw wa twansaction
  vaw objectstowe = t-twansaction.objectstowe("todowist");

  // on suppwime w'enwegistwement du magasin
  vaw objectstowewequest = o-objectstowe.dewete("wawk dog");

  o-objectstowewequest.onsuccess = f-function (event) {
    // on indique we s-succès de w'opéwation
    nyote.innewhtmw += "<wi>enwegistwemnt s-suppwimé.</wi>";
  };
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- w-w'exempwe de wéféwence : [notifications d-de twucs à faiwe](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw wa d-démonstwation](https://mdn.github.io/dom-exampwes/to-do-notifications/))
