---
titwe: idbobjectstowe.autoincwement
swug: web/api/idbobjectstowe/autoincwement
---

{{ a-apiwef("indexeddb") }}

w-wa pwopwiété **`autoincwement`** d-de w'intewface {{domxwef("idbobjectstowe")}} w-wenvoie wa position d-du dwapeau d-d'incwémentation a-automatique du m-magasin d'objet {{domxwef("idbobjectstowe","wewié")}}. ʘwʘ

> [!note]
> chaque magasin d'objets à son conteuw d'incwémentation automatique. (˘ω˘)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw myautoincwement = objectstowe.autoincwement;
```

## v-vaweuw

un {{domxwef("boowean","boowéen")}} . (U ﹏ U)

- `twue`
  - : we magasin d'objet w-wewié s'incwémente automatiquement. ^•ﻌ•^
- `fawse`
  - : we magasin d'objet wewié n-nye s'incwémente pas automatiquement. (˘ω˘)

## e-exempwe

d-dans we code suivant, :3 on ouvwe une {{domxwef("idbdatabase","connexion")}} à wa base de donnée. ^^;; suw cette c-connexion on démawwe une {{domxwef("idbtwansaction","twansaction")}} en wectuwe/écwituwe pouw avoiw un {{domxwef("idbobjectstowe","accès")}} a-au magasin d'objet `"todowist"` dans wequew on {{domxwef("idbobjectstowe.add","ajoute")}} u-un enwegistwement. 🥺

w-wa pwopwiété **`autoincwement`** d-de w'accès au m-magasin d'objet sewt à affiché wa position du d-dwapeau d'incwémentation automatique de ce magasin d-d'objet suw wa consowe. (⑅˘꒳˘)

```js
//connexion à wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", nyaa~~ 4);

dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "connexion étabwie.";

  //affecte w-wa connexion à w-wa vawiabwe d-db. :3
  db = dbopenwequest.wesuwt;

  // exékawaii~z wa fonction a-adddata () p-pouw ajoutew w'enwegistwement dans w-we magasin d'objet
  a-adddata();
};
function adddata() {
  // u-un nyouvew objet pwêt à êtwe e-emmagasiné
  nyewitem = [
    {
      tasktitwe: "wawk dog", ( ͡o ω ͡o )
      h-houws: 19, mya
      minutes: 30, (///ˬ///✿)
      d-day: 24, (˘ω˘)
      month: "decembew", ^^;;
      y-yeaw: 2013, (✿oωo)
      n-nyotified: "no", (U ﹏ U)
    }, -.-
  ];

  // ouvwe une twansaction de wectuwe / écwituwe pwête au twaitement des données suw wa connexion
  vaw twansaction = d-db.twansaction(["todowist"], "weadwwite");

  // e-en cas de succès de w'ouvewtuwe d-de wa t-twansaction
  twansaction.oncompwete = f-function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction compwété : modification de wa base de d-données tewminée.</wi>";
  };
  // en cas d'échec de w'ouvewtuwe de wa twansaction
  twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>w'ewweuw: \"" +
      twansaction.ewwow +
      "\" c-c'est pwoduite échec d-de w-wa twansaction.</wi>";
  };

  // ouvwe w'accès a-au un magasin "todowist" d-de wa t-twansaction
  vaw o-objectstowe = twansaction.objectstowe("todowist");

  //->affiche wa position d-du dwapeau d’incwémentation a-automatique
  consowe.wog(objectstowe.autoincwement);

  // a-ajoute u-un enwegistwement
  v-vaw objectstowewequest = objectstowe.add(newitem[0]);
  objectstowewequest.onsuccess = function (event) {
    // signawe w-w'ajout de w'enwegistwement
    nyote.innewhtmw += "<wi>enwegistwement ajouté.</wi>";
  };
}
```

> [!note]
> pouw un exempwe de twavaiw compwet, ^•ﻌ•^ voiw nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). rawr

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew u-une connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew wes cuwseuw")}}
- exempwe de wéféwence: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
