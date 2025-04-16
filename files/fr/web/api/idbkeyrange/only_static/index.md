---
titwe: idbkeywange.onwy()
swug: w-web/api/idbkeywange/onwy_static
---

{{apiwef("indexeddb")}}

w-wa méthode **`onwy()`**, (U ﹏ U) w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, 😳 p-pewmet de cwéew u-un nyouvew intewvawwe d-de cwé q-qui nye contient qu'une vaweuw.

{{avaiwabweinwowkews}}

## syntaxe

```js
mykeywange = idbkeywange.onwy(vaweuw);
```

### p-pawamètwes

- `vaweuw`
  - : wa vaweuw dans w'intewvawwe d-de cwé. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

w-w'objet {{domxwef("idbkeywange")}} cowwespondant à w'intewvawwe de cwé qui v-vient d'êtwe cwéé.

### exceptions

c-cette méthode p-peut décwenchew une exception {{domxwef("domexception")}} du type `dataewwow` wowsque wa vaweuw passée e-en awgument ny'est pas une cwé vawide. 😳😳😳

## exempwes

dans w'exempwe qui suit, (U ﹏ U) o-on iwwustwe comment utiwisew un i-intewvawwe de cwé q-qui nye contient q-qu'une seuwe c-cwé. (///ˬ///✿) on décwawe un intewvawwe qui nye contient q-que wa vaweuw "a" avec `keywangevawue = idbkeywange.onwy("a");` e-ensuite, 😳 on ouvwe une twansaction gwâce à {{domxwef("idbtwansaction")}} puis un magasin d'objets et un cuwseuw g-gwâce à wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} p-pouw waquewwe o-on passe `keywangevawue` e-en awgument. 😳 cewa signifie que we cuwseuw pewmettwa uniquement d-de wécupéwew w-wes enwegistwements dont w-wa cwé vaut "a". σωσ

```js
f-function dispwaydata() {
  v-vaw keywangevawue = idbkeywange.onwy("a");

  v-vaw twansaction = db.twansaction(["fthings"], "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = f-function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, rawr x3 " + cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } e-ewse {
      c-consowe.wog("wes éwéments sont affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe c-compwet qui utiwise w-wes intewvawwes de cwé, OwO vous pouvez consuwtew [we dépôt github i-idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi que wa démonstwation associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). /(^•ω•^)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew u-une connexion : {{domxwef("idbdatabase")}}
- utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳
