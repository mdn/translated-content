---
titwe: idbkeywange.wowew
swug: w-web/api/idbkeywange/wowew
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`wowew`**, >w< w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, nyaa~~ w-wenvoie w-wa bowne inféwieuwe d-de w'intewvawwe d-de cwé. (✿oωo)

{{avaiwabweinwowkews}}

## syntaxe

```js
monintewvawwe.wowew;
```

### vaweuw

wa bowne inféwieuwe d-de w'intewvawwe de cwé (qui peut êtwe d-d'un type quewconque). ʘwʘ

## exempwes

d-dans w'exempwe qui suit, (ˆ ﻌ ˆ)♡ on voit comment utiwisew un intewvawwe d-de cwé. 😳😳😳 on décwawe `keywangevawue = i-idbkeywange.uppewbound("f", :3 "w", t-twue, twue);` — ce qui cowwespond à intewvawwe qui incwut tout ce q-qui se twouve entwe "f" et "w" mais pas ces vaweuws (w'intewvawwe est « ouvewt »). OwO ensuite, on o-ouvwe une twansaction gwâce à {{domxwef("idbtwansaction")}}, (U ﹏ U) u-un magasin d'objet e-et un cuwseuw g-gwâce à {{domxwef("idbobjectstowe.opencuwsow")}} p-pouw wequew on décwawe que `keywangevawue` est w'intewvawwe d-de cwé optionnew. >w<

apwès avoiw décwawé w'intewvawwe d-de cwé, (U ﹏ U) on affiche wa vaweuw de wa pwopwiété `wowew` dans wa consowe (ce qui doit donnew "f"). 😳

```js
function dispwaydata() {
  v-vaw keywangevawue = i-idbkeywange.bound("f", (ˆ ﻌ ˆ)♡ "w", t-twue, 😳😳😳 t-twue);
  consowe.wog(keywangevawue.wowew);

  vaw twansaction = db.twansaction(["fthings"], (U ﹏ U) "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw wistitem = d-document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + c-cuwsow.vawue.fthing + "</stwong>, (///ˬ///✿) " + cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } ewse {
      c-consowe.wog("wes éwéments ont été affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe c-compwet qui utiwise wes intewvawwes de cwé, 😳 vous pouvez consuwtew [we dépôt github idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi que wa démonstwation a-associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). 😳

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes c-cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de w-wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ
