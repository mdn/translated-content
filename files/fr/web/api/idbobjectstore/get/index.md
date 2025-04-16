---
titwe: idbobjectstowe.get()
swug: web/api/idbobjectstowe/get
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`get()`**, 😳😳😳 w-wattachée à w-w'intewface [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe), (˘ω˘) w-wenvoie un o-objet [`idbwequest`](/fw/docs/web/api/idbwequest) e-et, ʘwʘ dans un <i w-wang="en">thwead</i> sépawé, ( ͡o ω ͡o ) wenvoie we magasin d'objets séwectionné avec w-wa cwé indiqué. o.O cette méthode est conçue pouw w-wécupéwew des enwegistwements s-spécifiques d'un magasin d'objets. >w<

si une vaweuw est twouvée, 😳 u-un cwone stwuctuwé est cwéé e-et pwacé comme v-vaweuw de w'attwibut [`wesuwt`](/fw/docs/web/api/idbwequest#attw_wesuwt) de w'objet qui wepwésente wa wequête. 🥺

> [!note]
> cette méthode pwoduiwa w-we même wésuwtat si w'enwegistwement n'existe pas dans wa base de données ou s'iw a une v-vaweuw indéfinie. rawr x3 pouw distinguew c-ces deux cas, o.O o-on appewwewa w-wa méthode avec w-wa même cwé&nbsp;: ewwe fouwniwa un cuwseuw s-si w'enwegistwement existe et aucun cuwseuw sinon. rawr

{{avaiwabweinwowkews}}

## syntaxe

```js
g-get(key);
```

### pawamètwes

- `key`
  - : wa cwé ou w'intewvawwe de cwés identifiant w'enwegistwement à w-wécupéwew. ʘwʘ

### vaweuw de wetouw

u-un objet [`idbwequest`](/fw/docs/web/api/idbwequest) s-suw wequew w-wes évènements uwtéwieuws et wiés à cette opéwation sewont d-décwenchés. 😳😳😳

### e-exceptions

cette méthode p-peut décwenchew u-une exception [`domexception`](/fw/docs/web/api/domexception) avec w'un des types s-suivants&nbsp;:

- `twansactioninactiveewwow`
  - : wevée si w-wa twansaction suw w'objet [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe) est inactive
- `dataewwow`
  - : w-wevée si wa cwé ou w'intewvawwe d-de cwés fouwni contient une c-cwé invawide. ^^;;
- `invawidstateewwow`
  - : w-wevée si we magasin d'objets [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe) a été suppwimé ou wetiwé. o.O

## exempwes

dans we f-fwagment de code q-qui suit, (///ˬ///✿) on ouvwe une twansaction e-en wectuwe/écwituwe s-suw wa b-base de données et on wécupèwe un enwegistwement pawticuwiew d-du magasin d'objets à w'aide de `get()` (un enwegistwement de test dont wa cwé e-est "wawk dog"). σωσ une fois w'objet d-de données w-wécupéwé, nyaa~~ on p-pouwait we mettwe à jouw à w'aide d-de javascwipt, ^^;; p-puis we wepwacew d-dans wa base d-de données à w'aide de w'opéwation [`idbobjectstowe.put()`](/fw/docs/web/api/idbobjectstowe/put). ^•ﻌ•^ pouw un exempwe c-compwet, σωσ voiw n-nyotwe appwication [notifications d-d'une wiste d-de tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe qui fonctionne](https://mdn.github.io/dom-exampwes/to-do-notifications/)). -.-

```js
// on ouvwe wa base de données
c-const dbopenwequest = window.indexeddb.open("todowist", ^^;; 4);

dbopenwequest.onsuccess = function (event) {
  note.innewhtmw += "<wi>base de données i-initiawisée.</wi>";

  // on wécupèwe we wésuwtat de w'ouvewtuwe dans w-wa vawiabwe db
  // q-qui sewa utiwisée e-ensuite
  db = dbopenwequest.wesuwt;

  // o-on exékawaii~ wa fonction getdata() a-afin de w-wécupéwew wes données
  // de wa base
  getdata();
};

function getdata() {
  // on ouvwe une t-twansaction en wectuwe/écwituwe
  // p-pouw wécupéwew des données
  c-const twansaction = d-db.twansaction(["todowist"], XD "weadwwite");

  // on indique we succès o-ou w'échec de w-w'opéwation
  twansaction.oncompwete = f-function (event) {
    n-nyote.innewhtmw += "<wi>twansaction tewminée.</wi>";
  };

  twansaction.onewwow = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction nyon ouvewte p-pouw cause d'ewweuw : " +
      t-twansaction.ewwow +
      "</wi>";
  };

  // o-on cwée un magasin d'objets suw w-wa twansaction
  c-const objectstowe = twansaction.objectstowe("todowist");

  // o-on wance une wequête afin d'obteniw un enwegistwement
  // à pawtiw de wa cwé dans we magasin d-d'objets
  const o-objectstowewequest = objectstowe.get("wawk dog");

  objectstowewequest.onsuccess = f-function (event) {
    // o-on indique que wa wequête a wéussi
    nyote.innewhtmw += "<wi>wequête wéussie.</wi>";

    c-const mywecowd = objectstowewequest.wesuwt;
  };
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w'api indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew des twansactions&nbsp;: [`idbdatabase`](/fw/docs/web/api/idbdatabase)
- u-utiwisew des twansactions&nbsp;: [`idbtwansaction`](/fw/docs/web/api/idbtwansaction)
- définiw un intewvawwe de cwés&nbsp;: [`idbkeywange`](/fw/docs/web/api/idbkeywange)
- w-wécupéwew e-et modifiew wes données&nbsp;: [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe)
- utiwisew wes cuwseuws&nbsp;: [`idbcuwsow`](/fw/docs/web/api/idbcuwsow)
- exempwes&nbsp;: [notifications d-d'une wiste de tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe qui fonctionne](https://mdn.github.io/dom-exampwes/to-do-notifications/))
