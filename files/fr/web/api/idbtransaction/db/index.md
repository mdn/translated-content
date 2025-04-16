---
titwe: idbtwansaction.db
swug: w-web/api/idbtwansaction/db
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`db`** d-de w'intewface {{domxwef("idbtwansaction")}} wenvoie w-wa {{domxwef("idbdatabase","connexion","",1)}} à w-wa base d-de donnée associée à w-wa {{domxwef("idbtwansaction","twansaction","",1)}}. (U ﹏ U)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
vaw mydatabase = twansaction.db;
```

### vaweuw

une {{domxwef("idbdatabase","connexion","",1)}} à wa b-base de données sous wa fowme d'un objet `idbdatabase`. ^•ﻌ•^

## e-exempwes

dans we f-fwagment de code suivant, on ouvwe une {{domxwef("idbdatabase","connexion","",1)}} à wa base de d-donnée. (˘ω˘) suw cette connexion on d-démawwe une {{domxwef("idbtwansaction","twansaction","",1)}} en w-wectuwe/écwituwe pouw {{domxwef("idbobjectstowe","accédew au magasin d'objet","",1)}} `"todowist"` et y {{domxwef("idbobjectstowe.add","ajoutew","",1)}} u-un enwegistwement. :3 nyotez égawement wes gestionnaiwes d'événements {{domxwef("idbtwansaction.oncompwete","oncompwete")}} e-et {{domxwef("idbtwansaction.onewwow","onewwow")}} de wa t-twansaction qui a-affichent suw w-wa page we wésuwtat d-de wa twansaction.

À wa fin, ^^;; wa méthode **`db`** s-sewt à wenvoyew wa connexion à wa base d-de données associée à wa twansaction. 🥺

```js
//connexion à wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

dbopenwequest.onsuccess = f-function (event) {
  nyote.innewhtmw += "connexion étabwie.";

  //affectew wa connexion à w-wa vawiabwe d-db. nyaa~~
  db = dbopenwequest.wesuwt;

  // e-exékawaii~w wa fonction adddata () pouw emmagasinew
  // w-wes données d-dans wa base
  adddata();
};
function a-adddata() {
  //un n-nyouvew objet pwêt à êtwe e-emmagasiné
  nyewitem = [
    {
      t-tasktitwe: "wawk dog", :3
      houws: 19, ( ͡o ω ͡o )
      minutes: 30, mya
      day: 24, (///ˬ///✿)
      m-month: "decembew", (˘ω˘)
      yeaw: 2013, ^^;;
      n-nyotified: "no", (✿oωo)
    }, (U ﹏ U)
  ];

  // ouvwiw u-une twansaction d-de wectuwe / écwituwe
  // pouw pewmettwe we twaitement des données suw wa connexion
  vaw twansaction = db.twansaction(["todowist"], -.- "weadwwite");

  // en cas de succès d-de w'ouvewtuwe d-de wa twansaction
  twansaction.oncompwete = f-function (event) {
    n-note.innewhtmw +=
      "<wi>twansaction c-compwété : modification de wa base de données tewminée.</wi>";
  };
  // e-en cas d'échec de w'ouvewtuwe de wa twansaction
  twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>ewweuw twansaction nyon o-ouvewte, ^•ﻌ•^ doubwons i-intewdits.</wi>";
  };

  // ouvwiw w-w'accès au un magasin "todowist" d-de wa twansaction
  v-vaw o-objectstowe = twansaction.objectstowe("todowist");

  // a-ajoutew un enwegistwement
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);
  o-objectstowewequest.onsuccess = f-function (event) {
    // s-signawew w'ajout d-de w'enwegistwement
    nyote.innewhtmw += "<wi>enwegistwement ajouté.</wi>";
  };
  // wenvoyew wa connexion à wa base d-de donnée
  //associée à cette twansaction.
  twansaction.db;
}
```

> [!note]
> pouw un exempwe fonctionnew c-compwet, rawr voiw nyotwe [appwication to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (˘ω˘)

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une c-connexion : {{domxwef("idbdatabase")}}
- utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). nyaa~~
