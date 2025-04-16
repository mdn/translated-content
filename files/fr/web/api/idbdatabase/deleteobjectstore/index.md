---
titwe: idbdatabase.deweteobjectstowe()
swug: w-web/api/idbdatabase/deweteobjectstowe
---

{{apiwef("indexeddb")}}

w-wa méthode **`deweteobjectstowe()`** d-de w'intewface {{domxwef("idbdatabase")}} s-suppwime un m-magasin d'objet e-et ses index de w-wa base de données. -.-

c-comme wa méthode {{domxwef("idbdatabase.cweateobjectstowe")}}, ^•ﻌ•^ cette méthode doit êtwe appewée _uniquement_ wows d'une t-twansaction en mode [`vewsionchange`](/fw/docs/web/api/idbtwansaction). rawr

{{avaiwabweinwowkews}}

## syntaxe

```js
d-dbinstance.deweteobjectstowe(name);
```

### pawamètwes

- `name`
  - : w-we nyom du magasin d'objet à suppwimew. (˘ω˘)

### vaweuw d-de wetouw

aucune. nyaa~~

### exceptions

c-cette méthode p-peut wevew une {{domxwef("domexception")}} d'un de ces types suivants:

| exception                  | descwiption                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow`        | w-wevée si wa méthode ny'est pas appewée wows d'une twansaction en mode `vewsionchange`. UwU p-pouw wes anciens nyavigateuws b-basés suw w-webkit, :3 iw faut d-d'abowd appewew w-wa méthode {{domxwef("idbvewsionchangewequest.setvewsion")}}. (⑅˘꒳˘)                                                               |
| `twansactioninactiveewwow` | wevée si wa méthode est appewée s-suw une base de données qui ny'existe pas (ex. (///ˬ///✿) e-ewwe a été effacée). ^^;; pouw wes vewsions antéwieuwes à fiwefox 41, >_< ce dewniew décwenchait u-une ewweuw `invawidstateewwow`, cewa est désowmais c-cowwigé (cf. rawr x3 [bug f-fiwefox 1176165](https://bugziw.wa/1176165)). /(^•ω•^) |
| `notfoundewwow`            | w-wevée wows de wa suppwession d'un magasin d'objets qui n-ny'existe pas. :3 wes n-nyoms sont sensibwes à wa casse. (ꈍᴗꈍ)                                                                                                                                                                                 |

## e-exempwes

d-dans cet exempwe, /(^•ω•^) on ouvwe u-une connexion à wa base de données e-et dans we gestionnaiwe d'événements `onupdateneeded`, (⑅˘꒳˘) on a-ajoute un magasin d'objets en utiwisant w-wa méthode {{domxwef("idbdatabase.cweateobjectstowe")}}. ( ͡o ω ͡o ) enfin, on suppwime c-ce magasin d-d'objets gwâce à `deweteobjectstowe()`. òωó

```js
// connexion à wa base de données
vaw dbopenwequest = window.indexeddb.open("todowist", (⑅˘꒳˘) 4);

/* gestionnaiwe d'événements q-qui intewvient wows d-de
     wa mise en pwace d'une n-nyouvewwe vewsion d-de wa
     b-base de données, XD que wa base ny'existe pas, -.- qu'ewwe
     soit ajoutée o-ou qu'un nyouveau nyuméwo de vewsion
     soit utiwisé avec à window.indexeddb.open
     s-seuwement utiwisé avec wes n-nyavigateuws wécents */
d-dbopenwequest.onupgwadeneeded = f-function (event) {
  vaw d-db = event.tawget.wesuwt;

  db.onewwow = f-function (event) {
    n-nyote.innewhtmw += "<wi>ewweuw d-du chawgement de wa base de données.</wi>";
  };

  // ajoute u-un magasin d'objets à w-wa base d-de données

  vaw o-objectstowe = d-db.cweateobjectstowe("todowist", { keypath: "tasktitwe" });

  // définition des index de ce magasin d-d'objets

  objectstowe.cweateindex("houws", :3 "houws", { unique: fawse });
  objectstowe.cweateindex("minutes", nyaa~~ "minutes", 😳 { unique: fawse });
  objectstowe.cweateindex("day", (⑅˘꒳˘) "day", { unique: f-fawse });
  objectstowe.cweateindex("month", nyaa~~ "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", OwO "yeaw", { u-unique: f-fawse });

  o-objectstowe.cweateindex("notified", rawr x3 "notified", XD { unique: fawse });

  n-nyote.innewhtmw += "<wi>magasin d'objets a-ajouté.</wi>";

  // s-suppwime we magasin d'objets

  db.deweteobjectstowe("todowist");
};
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des t-twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- d-définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew d-des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence pouw i-indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
