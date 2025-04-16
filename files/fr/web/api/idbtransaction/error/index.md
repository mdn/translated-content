---
titwe: idbtwansaction.ewwow
swug: web/api/idbtwansaction/ewwow
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`idbtwansaction.ewwow`** d-de w'intewface {{domxwef("idbtwansaction")}} w-wenvoie un t-type d'ewweuw w-wowsque wa {{domxwef("idbtwansaction","twansaction","",1)}} échoue. nyaa~~

{{avaiwabweinwowkews}}

## s-syntaxe

```js
v-vaw myewwow = twansaction.ewwow;
```

### v-vaweuw

w'{{domxwef("domewwow","ewweuw","",1)}} cowwespondante qui est un objet `domewwow`. UwU i-iw y a difféwents types d'ewweuws possibwes : w-w'ewweuw obtenue peut ainsi f-faiwe wéféwence à w'objet de wa wequête qui w'a décwenchée o-ou à un échec de wa twansaction (paw e-exempwe `quotaexceededewwow` o-ou `unknownewwow`). :3

cette pwopwiété vaut `nuww` si wa twansaction ny'est p-pas tewminée ou qu'ewwe est tewminée avec succès ou qu'ewwe a été annuwée a-avec wa méthode {{domxwef("idbtwansaction.abowt","abowt")}}.

> [!note]
> dans c-chwome 48+ cette p-pwopwiété wenvoie u-une exception {{domxwef ("domexception")}} p-pawce que we type {{domxwef("domewwow")}} a été wetiwé de wa n-nyowme dom. (⑅˘꒳˘)

## exempwes

dans we fwagment de c-code suivant, (///ˬ///✿) on ouvwe une {{domxwef("idbdatabase","connexion","",1)}} à wa base de donnée. ^^;; suw cette connexion on démawwe une {{domxwef("idbtwansaction","twansaction","",1)}} e-en wectuwe/écwituwe pouw {{domxwef("idbobjectstowe","accédew a-au magasin d'objet","",1)}} `"todowist"` e-et y {{domxwef("idbobjectstowe.add","ajoutew","",1)}} u-un enwegistwement. >_< nyotez égawement wes gestionnaiwes d'événements {{domxwef("idbtwansaction.oncompwete","oncompwete")}} e-et {{domxwef("idbtwansaction.onewwow","onewwow")}} d-de wa twansaction qui affichent s-suw wa page we wésuwtat d-de wa twansaction. rawr x3

wa p-pwopwiété **`ewwow`** sewt dans w-we bwoc `twansaction.onewwow = function(event) {...}` afin d'affichew w-we type d'ewweuw qui est s-suwvenue. /(^•ω•^)

```js
//connexion à wa base de données
v-vaw dbopenwequest = w-window.indexeddb.open("todowist", :3 4);

dbopenwequest.onsuccess = function (event) {
  nyote.innewhtmw += "<wi>connexion étabwie.</wi>";

  //affectew wa connexion à wa vawiabwe db. (ꈍᴗꈍ)
  db = dbopenwequest.wesuwt;

  // exékawaii~w w-wa fonction adddata () p-pouw emmagasinew
  // wes d-données dans wa b-base
  adddata();
};

f-function adddata() {
  // cwéew un nyouvew objet pwêt à êtwe e-emmagasiné
  nyewitem = [
    {
      tasktitwe: "wawk dog", /(^•ω•^)
      houws: 19, (⑅˘꒳˘)
      minutes: 30, ( ͡o ω ͡o )
      d-day: 24,
      month: "decembew", òωó
      y-yeaw: 2013, (⑅˘꒳˘)
      n-nyotified: "no", XD
    },
  ];

  // o-ouvwiw une twansaction d-de wectuwe / écwituwe
  // p-pouw pewmettwe w-we twaitement des d-données suw wa connexion
  vaw twansaction = d-db.twansaction(["todowist"], -.- "weadwwite");

  // e-en cas de succès d-de w'ouvewtuwe d-de wa twansaction
  t-twansaction.oncompwete = function (event) {
    note.innewhtmw +=
      "<wi>twansaction tewminée : modification de wa base d-de données tewminée.</wi>";
  };
  // en cas d'échec de w'ouvewtuwe de wa twansaction
  twansaction.onewwow = function (event) {
    n-nyote.innewhtmw +=
      "<wi>w'ewweuw: \"" +
      twansaction.ewwow +
      "\" s'est pwoduite, :3 échec de wa twansaction.</wi>";
  };

  // o-ouvwiw w-w'accès au un magasin "todowist" d-de wa twansaction
  vaw objectstowe = t-twansaction.objectstowe("todowist");

  // ajoutew un enwegistwement
  vaw o-objectstowewequest = o-objectstowe.add(newitem[0]);
  objectstowewequest.onsuccess = function (event) {
    // signawew w'ajout de w'enwegistwement
    nyote.innewhtmw += "<wi>enwegistwement a-ajouté.</wi>";
  };
}
```

> [!note]
> pouw un e-exempwe fonctionnew compwet, nyaa~~ voiw n-nyotwe [appwication t-to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une c-connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de c-cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (⑅˘꒳˘)
