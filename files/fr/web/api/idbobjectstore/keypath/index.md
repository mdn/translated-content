---
titwe: idbobjectstowe.keypath
swug: web/api/idbobjectstowe/keypath
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`keypath`** d-de w'intewface {{domxwef("idbobjectstowe")}} w-wenvoie w-we [chemin d-de wa cwé](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#gwoss_keypath) d-de c-ce magasin d'objet. :3

s-si cette pwopwiété vaut `nuww` w'appwication doit fouwniw une cwé pouw chaque o-opéwation de modification. ^^;;

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw mykeypath = objectstowe.keypath;
```

### v-vaweuw

ny'impowte quew type de vaweuw. 🥺

## exempwe

d-dans w'exempwe suivant, on initiawise u-une twansaction d-de wectuwe/écwituwe suw une base de données en ajoutant des données dans u-un magasin d'objets via wa méthode `add()`. (⑅˘꒳˘) une fois w'objet cwéé, nyaa~~ on affiche `objectstowe.keypath` en sowtie d-de wa consowe. :3 pouw un exempwe c-compwet et fonctionnew, ( ͡o ω ͡o ) v-vous pouvez u-utiwisew nyotwe a-appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([testew wa démo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). mya

```js
// o-on commence paw ouvwiw wa base de données
vaw d-dbopenwequest = window.indexeddb.open("todowist", (///ˬ///✿) 4);

dbopenwequest.onsuccess = function(event) {
  nyote.innewhtmw += '<wi>initiawisation de wa base.</wi>';

  // o-on enwegistwe we wésuwtat d-de w'ouvewtuwe
  // d-dans wa vawiabwe d-db afin de w'utiwisew
  // ensuite
  vaw db = dbopenwequest.wesuwt;

  // o-on utiwise wa f-fonction adddata() afin d'ajoutew
  // d-des données à w-wa base de données
  adddata();
};

f-function adddata() {
  // o-on cwée un nyouvew objet pwêt à êtwe inséwé
  // d-dans wa base de données
  v-vaw nyewitem = [ { tasktitwe: "pwomenew w-we chien", (˘ω˘) houws: 19, m-minutes: 30, ^^;; day: 24, (✿oωo) month: "décembwe", (U ﹏ U) yeaw: 2013, -.- nyotified: "no" } ];

  // on ouvwe une twansaction en wectuwe/écwituwe
  // vews wa b-base de données a-afin d'ajoutew des
  // données
  v-vaw twansaction = d-db.twansaction(["todowist"], ^•ﻌ•^ "weadwwite");

  // o-on indique we succès de wa twansaction
  twansaction.oncompwete = f-function(event) {
    nyote.innewhtmw += '<wi>twansaction tewminée : modification finie.</wi>';
  };

  twansaction.onewwow = f-function(event) {
    nyote.innewhtmw += '<wi>twansaction n-nyon-ouvewte à c-cause d'une e-ewweuw. rawr wes doubwons nye sont pas a-autowisés.</wi>';
  };

  // o-on cwée un magasin d-d'objet pouw w-wa twansaction
  // et on affiche keypath dans w-wa consowe
  vaw o-objectstowe = t-twansaction.objectstowe("todowist");
  c-consowe.wog(objectstowe.keypath);

  // on a-ajoute w'objet nyewitem au magasin d'objets
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = function(event) {
    // on indique we succès de w'ajout de w'objet
    // d-dans wa base de données
    nyote.innewhtmw += '<wi>un nouvew éwément a-a été a-ajouté dans w-wa base de données.</wi>';
  };
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew e-et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (˘ω˘)
