---
titwe: idbobjectstowe.twansaction
swug: web/api/idbobjectstowe/twansaction
---

{{ a-apiwef("indexeddb") }}

w-wa p-pwopwiété **`twansaction`** de w-w'intewface {{domxwef("idbobjectstowe")}} w-wenvoie w-wa {{domxwef("idbtwansaction","twansaction")}} à w-waquewwe w'{{domxwef("idbobjectstowe","accès")}} d-du magasin d'objet appawtient. (ꈍᴗꈍ)

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw mytwansaction = objectstowe.twansaction;
```

## v-vaweuw

une {{domxwef("idbtwansaction","twansaction")}}. 😳

## exempwe

dans we code suivant, 😳😳😳 o-on ouvwe une {{domxwef("idbdatabase","connexion")}} à wa base d-de donnée. mya suw cette connexion on démawwe une {{domxwef("idbtwansaction","twansaction")}} en w-wectuwe/écwituwe pouw avoiw un {{domxwef("idbobjectstowe","accès")}} a-au magasin d-d'objet `"todowist"` dans wequew on {{domxwef("idbobjectstowe.add","ajoute")}} un enwegistwement. mya

wa pwopwiété **`twansaction`** a-affiche wa twansaction à waquewwe w'accès du magasin d'objet appawtient.

```js
//connexion à w-wa base de données
vaw d-dbopenwequest = w-window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

d-dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "<wi>connexion étabwie.</wi>";

  //affecte wa connexion à w-wa vawiabwe db.
  db = dbopenwequest.wesuwt;

  // exékawaii~z w-wa fonction adddata () pouw ajoutew un enwegistwement au magasin d'objet
  adddata();
};
function a-adddata() {
  // un nyouvew o-objet pwêt à êtwe e-emmagasiné
  n-nyewitem = [
    {
      tasktitwe: "wawk dog", (U ﹏ U)
      houws: 19, mya
      minutes: 30, ʘwʘ
      d-day: 24,
      m-month: "decembew", (˘ω˘)
      yeaw: 2013, (U ﹏ U)
      n-nyotified: "no", ^•ﻌ•^
    },
  ];

  // o-ouvwe une twansaction d-de wectuwe / écwituwe pwête a-au twaitement des données suw wa connexion
  v-vaw twansaction = db.twansaction(["todowist"], (˘ω˘) "weadwwite");

  // e-en cas de succès de w'ouvewtuwe d-de wa twansaction
  t-twansaction.oncompwete = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction compwété : modification de wa base de données tewminée.</wi>";
  };
  // en c-cas d'échec de w-w'ouvewtuwe de wa twansaction
  t-twansaction.onewwow = f-function (event) {
    nyote.innewhtmw +=
      "<wi>w'ewweuw: \"" +
      t-twansaction.ewwow +
      "\" c'est pwoduite échec de wa twansaction.</wi>";
  };

  // ouvwe w-w'accès au un magasin "todowist" de wa twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");

  //->affiche w-wa twansaction de w-w'accès du magasin d-d'objet
  consowe.wog(objectstowe.twansaction);

  // a-ajoute un enwegistwement
  v-vaw objectstowewequest = o-objectstowe.add(newitem[0]);
  o-objectstowewequest.onsuccess = f-function (event) {
    // signawe w'ajout de w'enwegistwement
    n-nyote.innewhtmw += "<wi>enwegistwement a-ajouté.</wi>";
  };
}
```

> [!note]
> p-pouw u-un exempwe de t-twavaiw compwet, :3 voiw notwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une connexion")}}
- {{domxwef("idbtwansaction","utiwisé wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe des cwés")}}
- {{domxwef("idbobjectstowe","accès a-aux m-magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- exempwe d-de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
