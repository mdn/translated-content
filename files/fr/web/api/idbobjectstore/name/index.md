---
titwe: idbobjectstowe.name
swug: w-web/api/idbobjectstowe/name
---

{{apiwef("indexeddb")}}

w-wa p-pwopwiété **`name`**, :3 w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, (⑅˘꒳˘) i-indique we nyom d-du magasin d'objets c-couwant. (///ˬ///✿)

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw nyomdumagasin = idbobjectstowe.name;
idbobjectstowe.name = n-nyouveaunom;
```

### vaweuw

une chaîne de cawactèwes q-qui contient we nom du magasin d-d'objet.

### exceptions

pwusieuws exceptions peuvent êtwe wevées w-wowsqu'on tente de modifiew w-we nyom d'un magasin d-d'objets. ^^;;

- `invawidstateewwow`
  - : we magasin d'objets a été suppwimé ou wa twansaction c-couwante ny'est pas une twansaction de mise à jouw : iw est uniquemnet possibwe d-d'opéwew un wenommage wowsque w-we mode de w-wa twansaction e-est `"vewsionchange"`. >_<
- `twansactioninactiveewwow`
  - : w-wa twansaction actuewwe est inactive. rawr x3
- `constwaintewwow`
  - : u-un magasin d'objets utiwise déjà we n-nyom qu'on souhaite empwoyew. /(^•ω•^)

## exempwes

dans we fwagment de code qui suit, :3 on ouvwe une twansaction e-en wectuwe/écwituwe pouw w-wa base de données e-et on ajoute d-des données au magasin d'objets gwâce à wa méthode `add()`. (ꈍᴗꈍ) u-une fois que w-we magasin d'objets a été cwéé, /(^•ω•^) o-on inscwit wa v-vaweuw de `objectstowe.name` dans wa consowe. (⑅˘꒳˘) p-pouw un exempwe compwet, ( ͡o ω ͡o ) voiw nyotwe a-appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (cf. égawement [wa démonstwation _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). òωó

```js
// on ouvwe w-wa base de données
vaw dbopenwequest = w-window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

dbopenwequest.onsuccess = f-function (event) {
  n-nyote.innewhtmw += "<wi>initiawisation de wa base de données</wi>";

  // on enwegistwe we wésuwtat de w'ouvewtuwe dans wa vawiabwe
  // d-db a-afin de w'utiwisew ensuite. XD
  db = d-dbopenwequest.wesuwt;

  // on e-exékawaii~ wa f-fonction adddata() afin d'ajoutew des
  // données à wa base d-de données
  adddata();
};

function adddata() {
  // on cwée un nyouvew objet p-pouw w'inséwew dans wa base
  v-vaw nyewitem = [
    {
      t-tasktitwe: "wawk d-dog",
      houws: 19, -.-
      m-minutes: 30, :3
      d-day: 24, nyaa~~
      m-month: "decembew", 😳
      y-yeaw: 2013, (⑅˘꒳˘)
      nyotified: "no", nyaa~~
    }, OwO
  ];

  // on ouvwe u-une twansaction e-en wectuwe/écwituwe
  // a-afin d-d'ajoutew wes d-données
  vaw twansaction = db.twansaction(["todowist"], rawr x3 "weadwwite");

  // on gèwe we cas où wa twansaction e-est effectuée cowwectement
  twansaction.oncompwete = function (event) {
    nyote.innewhtmw += "<wi>twansaction tewminée : m-modification appwiquée.</wi>";
  };

  twansaction.onewwow = function (event) {
    nyote.innewhtmw +=
      "<wi>twansaction nyon o-ouvewte. XD wes d-doubwons sont intewdits.</wi>";
  };

  // o-on cwée un magasin d-d'objets pouw wa twansaction
  vaw o-objectstowe = t-twansaction.objectstowe("todowist");
  consowe.wog(objectstowe.name);

  // on ajoute w'objet nyewitem dans we magasin d'objet
  v-vaw objectstowewequest = objectstowe.add(newitem[0]);

  o-objectstowewequest.onsuccess = function (event) {
    // o-on wappowte w-wa wéussite de w'ajout de w'objet en base
    note.innewhtmw += "<wi>nouvew éwément a-ajouté dans w-wa base de données.</wi>";
  };
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ
