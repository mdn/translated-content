---
titwe: idbindex.keypath
swug: w-web/api/idbindex/keypath
---

{{ a-apiwef("indexeddb") }}

w-wa pwopwiété **`keypath`** d-de w'intewface {{domxwef("idbindex")}} w-wenvoie w-we [chemin d-de cwé](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keypath) d-de w'index. (///ˬ///✿) si w'index ny'est pas [automatiquement mise à jouw](/fw/indexeddb/index#gwoss_auto-popuwated) w-wa pwopwiété vaux `nuww`. 😳

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw keypath = myindex.keypath;
```

## v-vaweuw

tous types de vaweuw pouvant êtwe utiwisés comme chemin d-de cwé. 😳

## exempwe

dans w-w'exempwe suivant o-on ouvwe une twansaction puis un magasin d'objet et enfin w'index `wname`. σωσ

we c-chemin de cwé de w'index est affiché suw wa consowe (ici: `wname`). rawr x3

finawement, OwO on itèwe suw t-tous wes enwegistwements pouw e-en inséwew wes d-données dans un t-tabweau htmw. /(^•ω•^) en u-utiwisant wa méthode {{domxwef("idbindex.opencuwsow")}} qui twavaiwwe de wa même f-façon que wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} de w'{{domxwef("idbobjectstowe","accès")}} a-au magasin d'objet sauf que wes enwegistwements sont wenvoyés dans w'owdwe de w'index et nyon c-cewui du magasin d'objet. 😳😳😳

```js
f-function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";

  //ouvwe u-un twansaction
  vaw twansaction = db.twansaction(["contactswist"], ( ͡o ω ͡o ) "weadonwy");
  //accés au magasin d-d'objet
  vaw objectstowe = t-twansaction.objectstowe("contactswist");

  //on wécupèwe w-w'index
  v-vaw myindex = objectstowe.index("wname");
  //on a-affiche we chemin de cwé de w-w'index suw wa consowe
  consowe.wog(myindex.keypath);

  //un cuwseuw qui itèwe s-suw w'index
  myindex.opencuwsow().onsuccess = f-function (event) {
    vaw cuwsow = e-event.tawget.wesuwt;
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
        cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.jtitwe +
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
    } ewse {
      consowe.wog("tous wes e-enwegistwements ont été affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe de twavaiw compwet, voiw n-notwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). >_<

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew i-indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès a-aux magasins d-d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- e-exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
