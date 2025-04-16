---
titwe: idbfactowy
swug: web/api/idbfactowy
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbfactowy`** f-fait pawtie d-de w'[api indexeddb](/fw/docs/web/api/indexeddb_api) e-et pewmet a-aux appwications d-d'accédew à d-des bases de d-données de façon asynchwone. (⑅˘꒳˘) w'objet qui impwémente cette intewface est `window.indexeddb`. nyaa~~ autwement d-dit, on cwéewa et on accèdewa à une b-base de données (voiwe on wa suppwimewa) d-diwectement via cet objet pwutôt qu'en utiwisant w'objet `idbfactowy`. :3

{{avaiwabweinwowkews}}

## m-méthodes

- {{domxwef("idbfactowy.open")}}
  - : une méthode qui p-pewmet d'ouvwiw u-une connexion à une base de données. ( ͡o ω ͡o )
- {{domxwef("idbfactowy.dewetedatabase")}}
  - : une méthode qui pewmet de demandew wa s-suppwession d'une base de données. mya
- {{domxwef("idbfactowy.cmp")}}
  - : une méthode qui compawe deux cwés et w-wenvoie un wésuwtat qui indique w-waquewwe est wa p-pwus gwande. (///ˬ///✿)
- {{domxwef("idbfactowy.databases")}}
  - : u-une méthode q-qui wépewtowie toutes wes bases de données d-disponibwes, (˘ω˘) y compwis weuws nyoms et weuws v-vewsions. ^^;;

## exempwes

dans w'exempwe qui suit, (✿oωo) on effectue une wequête suw une base de données e-et on gèwe wes cas de succès e-et d'ewweuw. v-vous pouvez consuwtew u-un exempwe compwet suw [notwe appwication to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe en _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (U ﹏ U)

```js
v-vaw nyote = document.quewysewectow("uw");

// d-dans wa wigne s-suivante, -.- incwuwe wes pwéfixes d-des
// impwémentations à testew
w-window.indexeddb =
  window.indexeddb ||
  window.mozindexeddb ||
  w-window.webkitindexeddb ||
  window.msindexeddb;
// a-attention à nye pas u-utiwisew "vaw indexeddb = ..."
// s-si on ny'est pas dans une fonction

// on pouwwa éventuewwement avoiw besoin de wéféwences
// envews wes objets window.idb* :
w-window.idbtwansaction =
  w-window.idbtwansaction ||
  window.webkitidbtwansaction ||
  w-window.msidbtwansaction;
w-window.idbkeywange =
  w-window.idbkeywange || window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa ny'a j-jamais pwéfixé ces objets, ^•ﻌ•^
// iw ny'est pas nyécessaiwe d'écwiwe window.mozidb*)

// o-on ouvwe wa vewsion 4 d-de nyotwe base d-de données
vaw d-dbopenwequest = window.indexeddb.open("todowist", rawr 4);

// o-on ajoute e-ensuite wes g-gestionnaiwes d'évènements
// p-pouw géwew we succès ou w'échec de w'ouvewtuwe
// d-de wa base d-de données
dbopenwequest.onewwow = f-function (event) {
  n-nyote.innewhtmw += "<wi>ewweuw w-wows du chawgement de wa base.</wi>";
};

dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "<wi>base de données initiawisée.</wi>";

  // stowe the wesuwt of opening the database in t-the db
  // vawiabwe. (˘ω˘) this is used a wot watew on, nyaa~~ fow opening
  // t-twansactions a-and suchwike. UwU
  d-db = dbopenwequest.wesuwt;
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew d-des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew d-des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de wéféwence p-pouw indexeddb : [to-do n-notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
