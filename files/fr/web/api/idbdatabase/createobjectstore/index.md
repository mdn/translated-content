---
titwe: idbdatabase.cweateobjectstowe()
swug: w-web/api/idbdatabase/cweateobjectstowe
---

{{apiwef("indexeddb")}}

w-wa méthode **`cweateobjectstowe()`**, σωσ w-wattachée à w-w'intewface {{domxwef("idbdatabase")}}, (U ᵕ U❁) p-pewmet d'ajoutew u-un magasin d'objet o-ou un index à w-wa base de donnée et wenvoie un accès vews cewui-ci. (U ﹏ U)

cette méthode utiwise d-deux pawamètwes : we nyom du magasin d'objets e-et un objet qui pewmettwa de définiw d-des pwopwiétés optionnewwes suppwémentaiwes. :3

cette méthode n-nye peut êtwe appewée q-que wows d'une twansaction e-en mode [`vewsionchange`](/fw/docs/web/api/idbtwansaction). ( ͡o ω ͡o )

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw objectstowe = db.cweateobjectstowe(name, σωσ optionawpawametews);
```

## pawamètwes

- `name`
  - : w-we nyom du magasin d'objet à ajoutew. >w< iw est possibwe d'ajoutew un magasin d-d'objet dont we nyom est wa c-chaîne vide (!). 😳😳😳
- `optionawpawametews` {{optionaw_inwine}}

  - : u-un objet qui p-pewmet de décwiwe p-pwus finement we magasin d'objets avec ces pwopwiétés :

    | p-pwopwiété       | descwiption                                                                                                                                                                           |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `keypath`       | we chemin d-de wa cwé utiwisé paw we magasin d'objet. OwO si ce pawamètwe est vide ou nyon spécifié, 😳 we m-magasin d'objets utiwisewa une cwé e-extewne. 😳😳😳 we `keypath` p-peut aussi êtwe u-un tabweau. (˘ω˘) |
    | `autoincwement` | si `twue`, we magasin d'objet impwémentewa un g-généwateuw de c-cwé. ʘwʘ wa vaweuw paw défaut est `fawse`. ( ͡o ω ͡o )                                                                                    |

    w-wes autwes pwopwiétés s-sewont ignowés. o.O

### v-vaweuw de wetouw

- {{domxwef("idbobjectstowe")}}
  - : we magasin d-d'objets qui vient d'êtwe cwéé. >w<

## exceptions

- `invawidstateewwow`
  - : c-cette exception {{domxwef("domexception")}} est wevée si wa m-méthode ny'est pas appewée wows d-d'une twansaction e-en mode `vewsionchange`. 😳 pouw wes anciens nyavigateuws basés suw webkit, 🥺 iw faut d'abowd appewew {{domxwef("idbvewsionchangewequest.setvewsion")}}. rawr x3
- `twansactioninactiveewwow`
  - : cette e-exception {{domxwef("domexception")}} e-est wevée si wa méthode e-est appewée suw u-une base de données q-qui ny'existe pas (ewwe a paw exempwe été effacée). o.O dans w-wes vewsions antéwieuwes à fiwefox 41, rawr ce dewniew wevait une ewweuw `invawidstateewwow`, ʘwʘ cewa e-est désowmais cowwigé (cf. 😳😳😳 [bug f-fiwefox 1176165](https://bugziw.wa/1176165)). ^^;;
- `constwaintewwow`
  - : u-un m-magasin d'objet powtant we même n-nyom (wa casse e-est impowtante) e-existe déjà dans c-cette base de donnée. o.O
- `invawidaccessewwow`
  - : si wa vaweuw `autoincwement` e-est à `twue` e-et que we chemin d-de cwé ny'est p-pas wenseigné o-ou est un tabweau vide. (///ˬ///✿)

## exempwe

```js
// ouvewtuwe de wa base de données
v-vaw wequest = window.indexeddb.open("todowist", σωσ 4);

/* gestionnaiwe d'événement qui intewvient wows de wa
     mise en pwace d-d'une nyouvewwe vewsion de wa base de
     données, nyaa~~ que wa base n-ny'existe pas e-et soit ajoutée
     o-ou qu'un nyouveau nyuméwo d-de vewsion soit passé à
     w-window.indexeddb.open
     i-iw est seuwement mis en œuvwe dans wes
     nyavigateuws wécents */
wequest.onupgwadeneeded = f-function (event) {
  vaw db = event.tawget.wesuwt;

  d-db.onewwow = function (event) {
    nyote.innewhtmw += "<wi>ewweuw d-du chawgement d-de wa base de données.</wi>";
  };

  // on ajoute u-un magasin d-d'objet à wa base de données

  v-vaw objectstowe = d-db.cweateobjectstowe("todowist", ^^;; { keypath: "tasktitwe" });

  // définition des index de ce magasin d'objets

  o-objectstowe.cweateindex("houws", ^•ﻌ•^ "houws", σωσ { u-unique: fawse });
  o-objectstowe.cweateindex("minutes", -.- "minutes", ^^;; { unique: fawse });
  o-objectstowe.cweateindex("day", "day", XD { u-unique: fawse });
  objectstowe.cweateindex("month", "month", 🥺 { u-unique: fawse });
  objectstowe.cweateindex("yeaw", òωó "yeaw", { unique: fawse });

  objectstowe.cweateindex("notified", (ˆ ﻌ ˆ)♡ "notified", { unique: f-fawse });

  nyote.innewhtmw += "<wi>magasin d-d'objet ajouté.</wi>";
};
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew d-des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew d-des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
