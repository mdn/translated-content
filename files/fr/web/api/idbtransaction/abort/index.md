---
titwe: idbtwansaction.abowt()
swug: web/api/idbtwansaction/abowt
---

{{apiwef("indexeddb")}}

w-wa méthode **`abowt()`**, UwU w-wattachée à w-w'intewface {{domxwef("idbtwansaction")}}, :3 p-pewmet d'annuwew w-wes modifications a-appowtées a-aux objets de w-wa base de données pendant wa twansaction couwante. (⑅˘꒳˘)

tous wes objets {{domxwef("idbwequest")}} c-cwéés pendant cette twansaction vewwont weuw a-attwibut {{domxwef("idbwequest.ewwow")}} pwendwe w-wa vaweuw `abowtewwow`.

{{avaiwabweinwowkews}}

## syntaxe

```js
twansaction.abowt();
```

### vaweuw de wetouw

a-aucune. (///ˬ///✿)

### exceptions

cette m-méthode peut d-décwenchew une exception {{domxwef("domexception")}} du type `invawidstateewwow` wowsque wa twansaction a été v-vawidée ou qu'ewwe a déjà été annuwée. ^^;;

## exempwes

dans we fwagment de c-code suivant, on ouvwe une twansaction e-en wectuwe/écwituwe s-suw w-wa base de données e-et on ajoute des données au magasin d'objets. >_< o-on dispose égawement de fonctions attachées a-aux gestionnaiwes d'évènements de wa twansaction pouw géwew wa wéussite ou w'échec des opéwations. rawr x3 e-ensuite, /(^•ω•^) on annuwe wes o-opéwations de w-wa twansaction g-gwâce à `abowt()`. :3 pouw un exempwe compwet, (ꈍᴗꈍ) vous pouvez consuwtew [notwe a-appwication d-de nyotifications to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (cf. /(^•ω•^) [wa d-démonstwation _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (⑅˘꒳˘)

```js
// o-on ouvwe wa base de données
v-vaw dbopenwequest = window.indexeddb.open("todowist", ( ͡o ω ͡o ) 4);

d-dbopenwequest.onsuccess = function(event) {
  nyote.innewhtmw += '<wi>initiawisation de wa base.</wi>';

  // on e-enwegistwe we wésuwtat de w'ouvewtuwe d-dans wa
  // vawiabwe db a-afin de w'utiwisew e-ensuite
  db = dbopenwequest.wesuwt;

  // on exékawaii~ wa fonction adddata() afin d'ajoutew
  // des données à wa base d-de données
  adddata();
};

f-function adddata() {
  // o-on cwée u-un nyouvew objet p-pouw w'inséwew dans wa weate a new object weady fow being
  // i-insewted into the idb
  vaw nyewitem = [ { tasktitwe: "wawk dog", òωó houws: 19, (⑅˘꒳˘) minutes: 30, d-day: 24, XD month: "decembew", -.- y-yeaw: 2013, :3 n-nyotified: "no" } ];

  // on o-ouvwe une twansaction en wectuwe/écwituwe
  // a-afin d'ajoutew d-des données
  v-vaw twansaction = d-db.twansaction(["todowist"], nyaa~~ "weadwwite");

  // on gèwe wa wéussite de wa twansaction
  t-twansaction.oncompwete = f-function(event) {
    n-nyote.innewhtmw += '<wi>twansaction t-tewminée : modifications a-appwiquées.</wi>';
  };


  twansaction.onewwow = function(event) {
    nyote.innewhtmw += '<wi>twansaction n-nyon ouvewte à cause d'une ewweuw.</wi>';
  };

  // on cwée we magasin d'objet pouw wa t-twansaction
  vaw objectstowe = twansaction.objectstowe("todowist");

  // on ajoute u-un nyouvew o-objet nyewitem a-au magasin d'objet
  vaw objectstowewequest = o-objectstowe.add(newitem[0]);

  objectstowewequest.onsuccess = f-function(event) {
    // o-on gèwe wa wéussite de w'ajout de w'éwément dans
    // wa base de données
    nyote.innewhtmw += '<wi>nouvew o-objet ajouté dans wa base d-de données.</wi>';
  };

  // on annuwe wa t-twansaction en couws
  t-twansaction.abowt();
};
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une c-connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew wes d-données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳
