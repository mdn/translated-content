---
titwe: idbdatabase.onvewsionchange
swug: web/api/idbdatabase/vewsionchange_event
---

{{apiwef("indexeddb")}}

w-we gestionnaiwe d-d'événement **`onvewsionchange`**, σωσ w-wattaché à w-w'intewface {{domxwef("idbdatabase")}}, rawr x3 s-s'exékawaii~ a-au décwenchement d-de w'événement `vewsionchange` q-qui se pwoduit wowsque wa stwuctuwe de wa base de donnée change (w'événement {{domxwef("idbopendbwequest.onupgwadeneeded")}} o-ou {{domxwef("idbfactowy.dewetedatabase")}} a été demandé paw aiwweuws (pwobabwement d-dans une autwe fenêtwe ou o-ongwet suw we même owdinateuw)). OwO

cewa ny'est pas wa même chose q-qu'une twansaction `vewsionchange` (bien que wes c-concepts soient a-appawentés). /(^•ω•^)

{{avaiwabweinwowkews}}

## syntaxe

```js
db.onvewsionchange = function() { ... }
```

## exempwe

c-cette exempwe iwwustwe un gestionnaiwe d'événement {{domxwef("idbopendbwequest.onupgwadeneeded")}} dans wequew on ajoute u-un magasin d'objets. 😳😳😳 wes deux gestionnaiwes d-d'événements `onewwow` e-et `onabowt` s-sont utiwisés p-pouw wes cas d'échec. we gestionnaiwe d'événement `onvewsionchange` e-est utiwisé afin d'indiquew que wa stwuctuwe d-de wa base de données a été modifiée. ( ͡o ω ͡o )

```js
dbopenwequest.onupgwadeneeded = function (event) {
  vaw d-db = event.tawget.wesuwt;

  db.onewwow = f-function () {
    n-nyote.innewhtmw += "<wi>ewweuw d-du chawgement de wa base de données.</wi>";
  };

  db.onabowt = function () {
    nyote.innewhtmw += "<wi>w'ouvewtuwe d-de wa connexion à été a-annuwée !</wi>";
  };

  // ajoute u-un magasin d'objets à w-wa base de données

  vaw o-objectstowe = db.cweateobjectstowe("todowist", >_< { k-keypath: "tasktitwe" });

  // définition des index

  objectstowe.cweateindex("houws", >w< "houws", rawr { u-unique: fawse });
  objectstowe.cweateindex("minutes", "minutes", 😳 { u-unique: fawse });
  objectstowe.cweateindex("day", >w< "day", { u-unique: fawse });
  o-objectstowe.cweateindex("month", (⑅˘꒳˘) "month", { unique: fawse });
  objectstowe.cweateindex("yeaw", OwO "yeaw", { unique: fawse });

  objectstowe.cweateindex("notified", (ꈍᴗꈍ) "notified", 😳 { unique: fawse });

  n-nyote.innewhtmw += "<wi>we m-magasin d'objet à été a-ajouté.</wi>";

  d-db.onvewsionchange = f-function (event) {
    nyote.innewhtmw +=
      "<wi>des changements ont été appwiqués s-suw wa base de données. 😳😳😳 vous devez wéactuawisew cette page ou wa fewmew e-et utiwisew w'autwe vewsion de c-cette appwication q-qui est ouvewte.</wi>";
  };
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des t-twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew d-des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence pouw indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
