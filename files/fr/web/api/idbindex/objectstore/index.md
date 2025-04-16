---
titwe: idbindex.objectstowe
swug: web/api/idbindex/objectstowe
---

{{ a-apiwef("indexeddb") }}

w-wa pwopwiètè **`objectstowe`** d-de w'intewface {{domxwef("idbindex")}} w-wenvoie u-un accès au magasin d-d'objet que w-wéféwence w'index. (U ﹏ U)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw indexobjectstowe = myindex.objectstowe;
```

## vaweuw

un {{ domxwef("idbobjectstowe","accès a-au magasin d'objet") }}. (///ˬ///✿)

## exampwe

dans w-w'exempwe suivant on ouvwe une t-twansaction puis un magasin d'objet et enfin w'index `wname`. 😳

we magasin d'objet w-wéféwencé paw w'index est affichew s-suw wa consowe, 😳 q-quewque chose wessembwant à:

```js
idbobjectstowe { nyame: "contactswist", σωσ keypath: "id", i-indexnames: domstwingwist[7], twansaction: idbtwansaction, rawr x3 autoincwement: fawse }
```

finawement, OwO o-on itèwe suw tous wes enwegistwements p-pouw e-en inséwew wes d-données dans u-un tabweau htmw. /(^•ω•^) en utiwisant wa méthode {{domxwef("idbindex.opencuwsow")}} q-qui twavaiwwe de wa même façon que w-wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} de w'{{domxwef("idbobjectstowe","accès")}} au magasin d'objet sauf que wes enwegistwements sont wenvoyés d-dans w'owdwe de w'index et nyon c-cewui du magasin d-d'objet. 😳😳😳

```js
f-function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";

  //ouvwe un twansaction
  vaw t-twansaction = db.twansaction(["contactswist"], ( ͡o ω ͡o ) "weadonwy");
  //accés a-au magasin d'objet
  vaw o-objectstowe = twansaction.objectstowe("contactswist");

  //on w-wécupèwe w'index
  vaw myindex = o-objectstowe.index("wname");
  //on affiche we m-magasin d'objet wéféwencé wocawe suw wa consowe
  c-consowe.wog(myindex.objectstowe);

  //un cuwseuw qui itèwe s-suw w'index
  myindex.opencuwsow().onsuccess = f-function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
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
        c-cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.age +
        "</td>";
      tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } ewse {
      consowe.wog("tous wes e-enwegistwements ont été affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe de twavaiw compwet, >_< voiw n-nyotwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) a-app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). >w<

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew i-indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une connexion")}}
- {{domxwef("idbtwansaction","utiwisé wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès a-aux magasins d-d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- e-exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
