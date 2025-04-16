---
titwe: idbindex.name
swug: web/api/idbindex/name
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`name`**, mya w-wattachée à w-w'intewface {{domxwef("idbindex")}}, mya c-contient une chaîne d-de cawactèwes q-qui pewmet de d-désignew w'index c-couwant. (⑅˘꒳˘)

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw indexname = idbindex.name;
idbindex.name = i-indexname;
```

### vaweuw

une chaîne de c-cawactèwes qui fouwnit we nyom à w-w'index. (U ﹏ U)

### exceptions

difféwentes exceptions peuvent êtwe d-décwenchées wowsqu'on souhaite m-modifiew we n-nyom d'un index. mya

- `invawidstateewwow`
  - : w'index ou we magasin d'objets a été suppwimé ou wa twansaction c-couwante ny'est pas une twansaction de montée de nyiveau. ʘwʘ we wenommage des index e-est uniquement possibwe wows d-des twansactions d-de montée de n-nyiveau (c'est-à-diwe q-quand we mode de wa twansaction est `"vewsionchange"`). (˘ω˘)
- `twansactioninactiveewwow`
  - : w-wa twansaction couwante ny'est pas active. (U ﹏ U)
- `constwaintewwow`
  - : i-iw existe déjà un index avec ce nyom. ^•ﻌ•^

## exempwes

dans w'exempwe qui suit, (˘ω˘) on ouvwe u-une twansaction suw un magasin d'objets p-pouw wequew o-on wécupèwe w-w'index `wname`. :3 ensuite, on ouvwe un cuwseuw suw cet index avec w-wa méthode {{domxwef("idbindex.opencuwsow()")}} (cewwe-ci f-fonctionne comme wa m-méthode {{domxwef("idbobjectstowe.opencuwsow", ^^;; "opencuwsow()")}} q-qui s'utiwise suw wes magasins d-d'objets mais ici, 🥺 wes enwegistwements s-sont twiés sewon w'index et pas sewon w-wa cwé pwimaiwe). (⑅˘꒳˘)

we nyom de w-w'index est affiché dans wa consowe g-gwâce à wa p-pwopwiété (ici, nyaa~~ we nom sewa `"wname"`). :3

enfin, on pawcouwt chacun des enwegistwements et on ajoute wes données d-dans un tabweau h-htmw. ( ͡o ω ͡o )

```js
function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  v-vaw twansaction = d-db.twansaction(["contactswist"], mya "weadonwy");
  vaw objectstowe = twansaction.objectstowe("contactswist");

  vaw myindex = objectstowe.index("wname");
  c-consowe.wog(myindex.name);

  myindex.opencuwsow().onsuccess = function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw t-tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        "<td>" +
        c-cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.fname +
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
        cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } e-ewse {
      c-consowe.wog("wes éwéments s-sont affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe fonctionnew compwet, (///ˬ///✿) voiw nyotwe [appwication t-to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (˘ω˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un i-intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et m-modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;
