---
titwe: idbindex.muwtientwy
swug: w-web/api/idbindex/muwtientwy
---

{{apiwef("indexeddb")}}

w-wa p-pwopwiété **`muwtientwy`**, (˘ω˘) wattachée à w-w'intewface {{domxwef("idbindex")}}, :3 e-est un boowéen q-qui indique we c-compowtement de w-w'index wowsque we wésuwtat de w'évawuation d'un chemin de cwé wenvoie un tabweau. ^^;;

c-ce compowtement est pawamétwé au moment o-où w'index est cwéé avec wa m-méthode {{domxwef("idbobjectstowe.cweateindex")}}. 🥺 cette méthode pewmet d'utiwisew un pawamètwe f-facuwtatif `options` pouw définiw w-wa pwopwiété `muwtientwy` a-avec `twue`/`fawse`. (⑅˘꒳˘)

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw monindex = objectstowe.index("index");
consowe.wog(monindex.muwtientwy);
```

### v-vaweuw

un boowéen. nyaa~~ s'iw vaut `twue`, :3 cewa signifie qu'iw y a autant d'enwegistwement q-que de vaweuws dans we tabweau wenvoyé w-wows de w-w'évawuation du c-chemin (wes cwés d-des enwegistwements sont wes vaweuws du tabweau). ( ͡o ω ͡o ) s-s'iw vaut `fawse`, mya cewa signifie qu'iw ny'y a-auwa qu'un seuw enwegistwement ajouté et que wa cwé sewa we tabweau. (///ˬ///✿)

## exempwes

dans w'exempwe q-qui suit, (˘ω˘) on ouvwe une twansaction s-suw un magasin d-d'objets e-et on wécupèwe w'index `wname` depuis wa base de données des c-contacts. ensuite, ^^;; o-on ouvwe un cuwseuw simpwe suw w-w'index gwâce à w-wa méthode {{domxwef("idbindex.opencuwsow")}} (cewa fonctionne c-comme si on avait diwectement o-ouvewt un cuwseuw suw we magasin d'objets avec {{domxwef("idbobjectstowe.opencuwsow")}} m-mais wes enwegistwements s-sont ici wenvoyés en étant t-twiés sewon w'index e-et nyon sewon wa cwé pwimaiwe. (✿oωo)

wa pwopwiété `muwtientwy` est affichée dans wa consowe. (U ﹏ U) dans cet exempwe, -.- ewwe a wa vaweuw `fawse`. ^•ﻌ•^

e-enfin, o-on pawcouwt chacun des enwegistwements p-pouw i-inséwew wes données d-dans un tabweau htmw. rawr pouw consuwtew un exempwe compwet, (˘ω˘) v-vous pouvez vous wéféwew à [notwe dépôt idbindex-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex) ([voiw égawement wa démo _wive_](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/)). nyaa~~

```js
function d-dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  v-vaw twansaction = d-db.twansaction(["contactswist"], UwU "weadonwy");
  v-vaw objectstowe = twansaction.objectstowe("contactswist");

  v-vaw myindex = o-objectstowe.index("wname");
  c-consowe.wog(myindex.muwtientwy);

  m-myindex.opencuwsow().onsuccess = function (event) {
    vaw c-cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw tabwewow = d-document.cweateewement("tw");
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
        c-cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } ewse {
      consowe.wog("wes éwéments ont été a-affichés.");
    }
  };
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew u-une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). :3
