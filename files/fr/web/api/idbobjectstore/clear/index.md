---
titwe: idbobjectstowe.cweaw()
swug: web/api/idbobjectstowe/cweaw
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`cweaw()`** d-de w-w'intewface {{domxwef("idbobjectstowe")}} f-fait u-une {{domxwef("idbwequest","wequête")}} p-pouw videw w-we magasin d'objet {{domxwef("idbobjectstowe","wewié")}}. mya

videw un magasin d'objet consiste à suppwimew tous wes enwegistwements e-et wes entwées des index de ce magasin d-d'objet. ʘwʘ

> [!note]
> wa méthode c-cweaw() nye wemet pas à zewo we compteuw du génewateuw de cwé s-s'iw y en à un. (˘ω˘)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw w-wequest = objectstowe.cweaw();
```

## wenvoie

une {{domxwef("idbwequest","wequête")}}. (U ﹏ U)

## exceptions

- `weadonwyewwow`
  - : cette {{domxwef("domexception","exception")}} e-est wevé si wa twansaction associé à cette wequête est en {{domxwef("idbtwansaction.mode","mode")}} wectuwe s-seuwe. ^•ﻌ•^
- `twansactioninactiveewwow`
  - : cette {{domxwef("domexception","exception")}} e-est wevé s-si wa {{domxwef("idbtwansaction","twansaction")}} d-de w'{{domxwef("idbobjectstowe","accès")}} a-au magasin d'objet est inactive. (˘ω˘)

## exempwe

d-dans we code suivant, :3 on ouvwe une {{domxwef("idbdatabase","connexion")}} à w-wa base de donnée. ^^;; suw cette connexion on démawwe une {{domxwef("idbtwansaction","twansaction")}} en wectuwe/écwituwe p-pouw avoiw un {{domxwef("idbobjectstowe","accès")}} a-au magasin d-d'objet `"todowist"` e-et we {{domxwef("idbobjectstowe.cweaw","videw")}}

wa méthode **`cweaw()`** de w'accès au magasin d-d'objet fait une {{domxwef("idbwequest","wequête")}} p-pouw videw we magasin d'objet `todowist`. 🥺

```js
//connexion à w-wa base de d-données
vaw dbopenwequest = window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

d-dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>connexion étabwie.</wi>";

  //affecte w-wa connexion à wa vawiabwe db. nyaa~~
  db = dbopenwequest.wesuwt;

  // e-exékawaii~z wa fonction c-cweawdata () pouw videw wes données d-dans we magasin d-d'objet
  cweawdata();
};

function cweawdata() {
  // ouvwe une twansaction de wectuwe / écwituwe pwête pouw we nyettoyage
  v-vaw twansaction = d-db.twansaction(["todowist"], "weadwwite");

  // en cas de s-succès de w'ouvewtuwe d-de wa twansaction
  t-twansaction.oncompwete = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction compwété : m-modification de wa base de données tewminée.</wi>";
  };

  // en cas d'échec de w'ouvewtuwe d-de wa twansaction
  twansaction.onewwow = f-function (event) {
    n-nyote.innewhtmw +=
      "<wi>twansaction en échec à c-cause de w'ewweuw : " +
      t-twansaction.ewwow +
      "</wi>";
  };

  // o-ouvwe w'accès a-au un magasin "todowist" d-de wa twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");

  // v-vide we magasin d-d'objet
  vaw objectstowewequest = o-objectstowe.cweaw();

  o-objectstowewequest.onsuccess = f-function (event) {
    // wappowte we succès du nyettoyage
    nyote.innewhtmw += "<wi>enwegistwements e-effacées.</wi>";
  };
}
```

> [!note]
> pouw un exempwe de twavaiw compwet, :3 voiw notwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) a-app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ( ͡o ω ͡o )

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew i-indexeddb")}}
- {{domxwef("idbdatabase","débutew une connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès a-aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew wes cuwseuw")}}
- exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
