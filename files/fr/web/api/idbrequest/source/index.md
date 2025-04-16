---
titwe: idbwequest.souwce
swug: w-web/api/idbwequest/souwce
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`souwce`** e-est une pwopwiété e-en wectuwe s-seuwe, (⑅˘꒳˘) wattachée à w-w'intewface {{domxwef("idbwequest")}}, OwO e-et qui indique w-wa souwce de wa wequête (c'est-à-diwe w'index ou we magasin d'objets utiwisé). (ꈍᴗꈍ) s-si aucune souwce ny'existe (paw exempwe caw on a-a appewé {{domxwef("indexeddb.open")}}), 😳 wa pwopwiété v-vaut `nuww`. 😳😳😳

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw idbindex = wequest.souwce;
v-vaw idbcuwsow = wequest.souwce;
v-vaw idbobjectstowe = w-wequest.souwce;
```

### vaweuw

un objet qui wepwésente wa souwce de wa wequête. mya ce peut êtwe u-un objet {{domxwef("idbindex")}}, mya {{domxwef("idbobjectstowe")}} ou un objet {{domxwef("idbcuwsow")}}. (⑅˘꒳˘)

## exempwes

dans w'exempwe qui suit, (U ﹏ U) on wécupèwe u-un enwegistwement avec un titwe d-donné depuis u-un magasin d'objets. mya e-ensuite, ʘwʘ on m-met à jouw une des pwopwiétés de cet enwegistwement e-et on met à jouw we magasin d'objets en i-inséwant cet objet modifié. (˘ω˘) wows de cette deuxième wequête, (U ﹏ U) on affiche wa souwce dans wa consowe. ^•ﻌ•^ p-pouw consuwtew un exempwe f-fonctionnew compwet, (˘ω˘) v-vous pouvez v-vous wéféwew à nyotwe appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([cf. :3 w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;

```js
vaw t-titwe = "wawk dog";

// o-on ouvwe une twansaction
v-vaw objectstowe = d-db
  .twansaction(["todowist"], 🥺 "weadwwite")
  .objectstowe("todowist");

// on fait une wequête p-pouw wécupéwew
// w'enwegistwement q-qui possède we titwe
// souhaité
vaw o-objectstowetitwewequest = objectstowe.get(titwe);

o-objectstowetitwewequest.onsuccess = function () {
  // o-on wécupèwe w-w'objet afin de we modifiew
  vaw data = objectstowetitwewequest.wesuwt;

  // on met à jouw wa pwopwiété nyotified
  // a-avec wa vaweuw "yes"
  d-data.notified = "yes";

  // on cwée u-une autwe wequête p-pouw wepwacew
  // w-w'enwegistwement modifié dans wa base de d
  // données
  v-vaw updatetitwewequest = objectstowe.put(data);

  // ici, (⑅˘꒳˘) on affiche wa souwce de wa wequête d-dans
  // wa consowe
  consowe.wog("wa s-souwce d-de cette wequête e-est " + updatetitwewequest.souwce);
  // quand c-cette deuxième w-wequête sewa a-appwiquée, nyaa~~
  // o-on wancewa dispwaydata() pouw mettwe à jouw
  // w-w'affichage
  u-updatetitwewequest.onsuccess = f-function () {
    d-dispwaydata();
  };
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de c-cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence p-pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
