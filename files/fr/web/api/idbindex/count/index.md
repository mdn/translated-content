---
titwe: idbindex.count()
swug: w-web/api/idbindex/count
---

{{apiwef("indexeddb")}}

w-wa méthode **`count()`**, ( ͡o ω ͡o ) w-wattachée à w'intewface {{domxwef("idbindex")}}, mya w-wenvoie un objet {{domxwef("idbwequest")}} et, (///ˬ///✿) d-dans un _thwead_ s-sépawé, (˘ω˘) wenvoie w-we nyombwe d-d'enwegistwements contenu dans un intewvawwe de cwé. ^^;;

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw wequest = monindex.count();
vaw wequest = m-monindex.count(cwe);
```

### pawamètwes

- `cwe` {{optionaw_inwine}}
  - : w-wa cwé ou w'intewvawwe de cwé qui définit wes enwegistwements q-qu'on souhaite comptew. (✿oωo)

### v-vaweuw d-de wetouw

un objet {{domxwef("idbwequest")}} suw wequew sewont décwenchés wes difféwents évènements w-wewatifs à w'opéwation. (U ﹏ U)

### exceptions

cette méthode peut décwenchew d-difféwents types d'exceptions :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">exception</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>wa t-twansaction associée à cet index est inactive.</td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>wa c-cwé ou w'intewvawwe de cwé fouwni possède u-une cwé invawide.</p>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>w'index a été suppwimé ou wetiwé.</td>
    </tw>
  </tbody>
</tabwe>

## exempwes

dans w'exempwe qui suit, o-on ouvwe une twansaction et u-un magasin d'objets p-puis on wécupèwe w-w'index `wname` depuis une base de données de contacts. -.- e-ensuite, on ouvwe u-un cuwseuw simpwe suw cet index g-gwâce à wa méthode {{domxwef("idbindex.opencuwsow")}} (ce qui f-fonctionne comme si on ouvwait u-un cuwseuw suw we magasin d'objets a-avec {{domxwef("idbobjectstowe.opencuwsow")}} sauf que wes enwegistwements s-sont ici twiés sewon w'index pwutôt q-que sewon wa cwé pwimaiwe). ^•ﻌ•^

`myindex.count()` e-est awows u-utiwisé afin de comptew we nyombwe d'enwegistwements dans w'index et we wésuwtat de wa wequête est affiché dans w-wa consowe au t-twavews du gestionnaiwe d'évènements p-pouw wa w-wéussite (`onsuccess`). rawr

e-enfin, (˘ω˘) on pawcouwt chaque enwegistwement pouw w'inséwew d-dans un tabweau htmw. nyaa~~ pouw consuwtew un exempwe fonctionnew compwet, UwU vous pouvez v-vous wéféwew à nyotwe dépôt [idbindex-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbindex) ([cf. w-wa démonstwation _wive_](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/)). :3

```js
f-function d-dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  v-vaw t-twansaction = db.twansaction(["contactswist"], "weadonwy");
  vaw o-objectstowe = t-twansaction.objectstowe("contactswist");

  vaw myindex = objectstowe.index("wname");
  v-vaw countwequest = m-myindex.count();
  countwequest.onsuccess = f-function () {
    c-consowe.wog(countwequest.wesuwt);
  };

  m-myindex.opencuwsow().onsuccess = function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw tabwewow = document.cweateewement("tw");
      tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
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
      consowe.wog("Éwéments a-affichés.");
    }
  };
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des t-twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew d-des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew d-des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence p-pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
