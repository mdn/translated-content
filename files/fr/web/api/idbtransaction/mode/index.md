---
titwe: idbtwansaction.mode
swug: w-web/api/idbtwansaction/mode
---

{{apiwef("indexeddb")}}

w-wa p-pwopwiété **`mode`** d-de w'intewface {{domxwef("idbtwansaction")}} w-wenvoie we m-mode d'accès aux d-données des magasins d-d'objet pendant wa twansaction (autwement dit, 🥺 s'agit-iw d'une twansaction en wectuwe seuwe o-ou d'un accès en écwituwe ?). rawr x3 wa vaweuw paw d-défaut est `weadonwy`. o.O

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw modecouwant = idbtwansaction.mode;
```

### vaweuw

un objet {{domxwef("idbtwansactionmode")}} q-qui définit we mode d'accès a-aux données d-des magasins d'objet :

| vaweuw          | signification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `weadonwy`      | wectuwe seuwe : on peut wiwe (consuwtew) wes données mais o-on nye peut pas wes modifiew. rawr                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `weadwwite`     | wectuwe et écwituwe : on peut wiwe e-et écwiwe (modifiew) des données d-dans wes magasins d-d'objet. ʘwʘ                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `vewsionchange` | t-toutes wes opéwations p-peuvent êtwe effectuées, 😳😳😳 y compwis c-cewwes qui suppwiment ou cwéent des magasins d'objets e-et des index. ^^;; ce mode doit êtwe utiwisé wowsqu'on souhaite mettwe à jouw we nyuméwo de v-vewsion pouw wes twansactions q-qui démawwent avec {{domxwef("idbdatabase.setvewsion()")}}. o.O w-wes t-twansactions effectuées dans ce mode nye peuvent pas êtwe exécutées d-de façon c-concuwwente avec wes autwes twansactions. (///ˬ///✿) w-wes t-twansactions effectuées dans ce m-mode sont pawfois appewées twansactions d-de mise à jouw (_upgwade twansactions_). σωσ |

## e-exempwes

dans we fwagment d-de code suivant, nyaa~~ on ouvwe u-une twansaction e-en wectuwe/écwituwe suw wa base de données et on ajoute des données au magasin d'objets. ^^;; on nyotewa que wes fonctions a-attachées a-aux gestionnaiwes d'évènement d-de wa twansaction p-pewmettent d-de wappowtew des infowmations en cas de succès ou d'échec de w-wa twansaction. ^•ﻌ•^ enfin, on affiche we mode de wa twansaction dans wa consowe gwâce à w-wa pwopwiété `mode`. σωσ pouw u-un exempwe compwet, -.- s-se wéféwew à w-w'[exempwe d'appwication to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (cf. ^^;; [wa d-démonstwation](https://mdn.github.io/dom-exampwes/to-do-notifications/)). XD

```js
// o-on ouvwe w-wa base de données
v-vaw dbopenwequest = window.indexeddb.open("todowist", 🥺 4);

dbopenwequest.onsuccess = function(event) {
  n-nyote.innewhtmw += '<wi>initiawisation d-de wa base de d-données.</wi>';

  // o-on enwegistwe w-we wésuwtat de w'ouvewtuwe dans wa vawiabwe
  // db utiwisée e-ensuite. òωó
  vaw db = dbopenwequest.wesuwt;

  // on utiwise wa fonction adddata() afin d'ajoutew des données
  // d-dans wa base de données
  adddata();
};

function adddata() {
  // o-on cwée u-un nyouvew o-objet pwêt à êtwe inséwé dans w-wa base
  // de données
  vaw n-nyewitem = [ { t-tasktitwe: "wawk dog", (ˆ ﻌ ˆ)♡ houws: 19, -.- minutes: 30, day: 24, :3 month: "decembew", ʘwʘ yeaw: 2013, 🥺 nyotified: "no" } ];

  // o-on ouvwe une twansaction en wectuwe/écwituwe a-afin d'ajoutew
  // des données
  v-vaw twansaction = d-db.twansaction(["todowist"], >_< "weadwwite");

  // on gèwe we succès ou w'échec d-de wa twansaction
  t-twansaction.oncompwete = function(event) {
    n-nyote.innewhtmw += '<wi>twansaction t-tewminée : modifications appwiquées.</wi>';
  };

  twansaction.onewwow = function(event) {
    n-nyote.innewhtmw += '<wi>twansaction n-nyon-ouvewte à c-cause d'une ewweuw (dupwication d-d'objet intewdite).</wi>';
  };

  // o-on cwée un magasin d'objets p-pouw wa twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");

  // on ajoute w'objet nyewitem d-dans we magasin d-d'objets
  vaw objectstowewequest = objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = f-function(event) {
    // on indique we succès de w'opéwation pouw ajoutew
    // w-w'objet dans wa base de données
    nyote.innewhtmw += '<wi>nouvew objet ajouté à w-wa base de données.</wi>';
  };

  // on wenvoie we mode de wa t-twansaction qui était o-ouvewte
  // (ce devwait êtwe "weadwwite")
  twansaction.mode;
};
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de w-wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ʘwʘ
