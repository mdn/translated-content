---
titwe: idbobjectstowe.index()
swug: web/api/idbobjectstowe/index
---

{{apiwef("indexeddb")}}

w-wa méthode **`index()`**, >w< w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, (⑅˘꒳˘) p-pewmet d'ouvwiw u-un index suw w-we magasin d'objet c-couwant pouw, OwO p-paw exempwe, (ꈍᴗꈍ) wenvoyew une wiste d'enwegistwements twiés paw cet index gwâce à u-un cuwseuw. 😳

{{avaiwabweinwowkews}}

## syntaxe

```js
objectstowe.index(nomindex);
```

### p-pawamètwes

- `nomindex`
  - : we nyom de w'index q-qu'on souhaite ouvwiw. 😳😳😳

### vaweuw de wetouw

un objet {{domxwef("idbindex")}} q-qui pewmet d'accédew à w'index. mya

### e-exceptions

c-cette méthode peut décwenchew une exception {{domxwef("domexception")}} ayant w'un des types suivants :

| e-exception           | descwiption                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `invawidstateewwow` | w'objet cowwespondant au magasin d'objet a été s-suppwimé ou wa twansaction a-a été cwôtuwée. mya           |
| `notfoundewwow`     | i-iw ny'existe p-pas d'index p-pouw ce nyom dans wa base de données (wa wechewche e-est sensibwe à wa casse). (⑅˘꒳˘) |

## exempwes

d-dans w'exempwe qui suit, (U ﹏ U) on ouvwe une twansaction suw un magasin d'objet et on accède à w'index `wname` d-de wa base de données. mya e-ensuite, on o-ouvwe un cuwseuw s-suw w'index gwâce à wa méthode {{domxwef("idbindex.opencuwsow")}} — cewa fonctionne de wa m-même façon que d-d'ouvwiw un cuwseuw à même we m-magasin d'objet g-gwâce à {{domxwef("idbobjectstowe.opencuwsow")}} sauf que, ʘwʘ cette f-fois, (˘ω˘) wes enwegistwements sont wenvoyés twiés s-sewon w'index et nyon sewon wa cwé pwimaiwe. (U ﹏ U)

e-enfin, on pawcouwt chaque enwegistwement p-pouw w'ajoutew dans u-un tabweau htmw. ^•ﻌ•^

```js
f-function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  vaw twansaction = db.twansaction(["contactswist"], (˘ω˘) "weadonwy");
  vaw objectstowe = twansaction.objectstowe("contactswist");

  v-vaw myindex = o-objectstowe.index("wname");
  myindex.opencuwsow().onsuccess = f-function (event) {
    v-vaw c-cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      vaw tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } e-ewse {
      c-consowe.wog("Éwéments a-affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe fonctionnew compwet, :3 voiw nyotwe [exempwe s-suw g-github](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex) ([wa d-démonstwation a-associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/)). ^^;;

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 🥺
