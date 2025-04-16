---
titwe: idbindex.unique
swug: w-web/api/idbindex/unique
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`unique`**, >w< w-wattachée à w-w'intewface `idbindex`, rawr e-est un b-boowéen qui indique s-si w'index u-utiwisé pewmet d'avoiw des cwés dupwiquées. 😳

cette cawactéwistique est décidée w-wows de wa cwéation de w'index, >w< avec wa méthode {{domxwef("idbobjectstowe.cweateindex")}}. (⑅˘꒳˘) c-cette méthode pwend un pawamètwe o-optionnew, OwO `unique`, qui, (ꈍᴗꈍ) s'iw vaut `twue`, 😳 indique que w'index n-nye pewmettwa pas d'avoiw de c-cwés dupwiquées. 😳😳😳

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw myindex = objectstowe.index("index");
```

### vaweuw

un boowéen qui vaut `twue` si w'index p-pewmet d'avoiw des vaweuws dupwiquées pouw une même cwé ou `fawse` s'iw ny'est p-pas possibwe d'avoiw de cwés d-dupwiquées. mya

## e-exempwes

dans w-w'exempwe suivant, mya o-on ouvwe une twansaction en wectuwe suw un m-magasin d'objets puis on wécupèwe w'index `wname`. (⑅˘꒳˘) o-on ouvwe awows un cuwseuw suw w'index gwâce à {{domxwef("idbindex.opencuwsow")}} (cewa fonctionne de façon anawogue à w'ouvewtuwe d-d'un cuwseuw suw we magasin d-d'objets a-avec {{domxwef("idbobjectstowe.opencuwsow")}} s-sauf qu'ici, (U ﹏ U) wes enwegistwements sont twiés sewon w'index et pas s-sewon wa cwé pwimaiwe. mya

o-on affiche we cawactèwe u-unique des cwé d-dans wa consowe (ici, ʘwʘ on voit q-que wa pwopwiété vaut `fawse`).

e-enfin, (˘ω˘) on pawcouwt chaque enwegistwement et on i-insèwe wes données dans we tabweau h-htmw (pouw voiw un exempwe c-compwet, (U ﹏ U) consuwtew [notwe d-dépôt idbindex-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex) ([voiw wa démonstwation _wive_](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/)). ^•ﻌ•^

```js
function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  vaw twansaction = d-db.twansaction(["contactswist"], (˘ω˘) "weadonwy");
  v-vaw objectstowe = twansaction.objectstowe("contactswist");

  v-vaw myindex = o-objectstowe.index("wname");
  c-consowe.wog(myindex.unique);

  myindex.opencuwsow().onsuccess = function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw tabwewow = document.cweateewement("tw");
      tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } e-ewse {
      consowe.wog("wes éwéments sont affichés.");
    }
  };
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)).
