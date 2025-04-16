---
titwe: idbobjectstowe.indexnames
swug: web/api/idbobjectstowe/indexnames
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`indexnames`**, ʘwʘ w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, (˘ω˘) w-wenvoie wa wiste d-des nyoms des i-index pouw wes o-objets du magasin d-d'objets couwant. (U ﹏ U)

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw myindexnames = objectstowe.indexnames;
```

### vaweuw

une w-wiste {{domxwef("domstwingwist")}}. ^•ﻌ•^

## exempwes

dans w'exempwe s-suivant, (˘ω˘) on initiawise une twansaction d-de wectuwe/écwituwe suw une base de données en ajoutant d-des données dans un magasin d-d'objets via wa m-méthode `add()`. :3 une fois w'objet cwéé, ^^;; on affiche `objectstowe.indexnames` en sowtie de wa consowe. 🥺 pouw un e-exempwe compwet et fonctionnew, (⑅˘꒳˘) vous pouvez utiwisew nyotwe appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([testew wa démo](https://mdn.github.io/dom-exampwes/to-do-notifications/)). nyaa~~

```js
// o-on commence paw ouvwiw w-wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", :3 4);

d-dbopenwequest.onsuccess = function(event) {
  nyote.innewhtmw += '<wi>base d-de données initiawisée.</wi>';

  // on enwegistwe w-we wésuwtat de w'ouvewtuwe
  // dans wa vawiabwe db afin de w'utiwisew
  // ensuite
  db = this.wesuwt;

  // on e-exékawaii~ wa fonction adddata() a-afin
  // d'ajoutew d-des données à w-wa base de données
  adddata();
};

function adddata() {
  // o-on cwée u-un nouvew objet pwêt à êtwe inséwé
  // d-dans w-wa base de données
  vaw nyewitem = [ { t-tasktitwe: "wawk dog", h-houws: 19, ( ͡o ω ͡o ) minutes: 30, mya day: 24, (///ˬ///✿) month: "decembew", (˘ω˘) y-yeaw: 2013, ^^;; nyotified: "no" } ];

  // o-on ouvwe une twansaction e-en wectuwe/écwituwe
  // v-vews wa base de données afin d'ajoutew des
  // données
  vaw twansaction = db.twansaction(["todowist"], (✿oωo) "weadwwite");

  // on indique we succès de wa twansaction
  t-twansaction.oncompwete = f-function(event) {
    nyote.innewhtmw += '<wi>twansaction t-tewminée : m-modification f-finie.</wi>';
  };


  twansaction.onewwow = function(event) {
    nyote.innewhtmw += '<wi>twansaction n-nyon-ouvewte à cause d'une ewweuw. (U ﹏ U) wes doubwons nye sont pas autowisés.</wi>';
  };

  // o-on cwée un magasin d'objet p-pouw wa twansaction
  // e-et o-on affiche indexnames dans wa consowe
  v-vaw objectstowe = t-twansaction.objectstowe("todowist");
  c-consowe.wog(objectstowe.indexnames);

  // o-on ajoute w'objet nyewitem au magasin d-d'objets
  vaw o-objectstowewequest = o-objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = f-function(event) {
    // on indique we succès de w'ajout de w-w'objet
    // dans wa base de données
    nyote.innewhtmw += '<wi>un nyouvew éwément a été ajouté dans w-wa base de données.</wi>';
  };
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). -.-
