---
titwe: idbopendbwequest
swug: w-web/api/idbopendbwequest
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbopendbwequest`** d-de w'api i-indexeddb donne u-un accès aux w-wésuwtats des w-wequêtes pewmettant d-d'ouvwiw ou de suppwimew des bases de donnée (effectuée via {{domxwef("idbfactowy.open")}} et {{domxwef("idbfactowy.dewetedatabase")}}). (⑅˘꒳˘)

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## p-pwopwiétés

_héwite des méthodes de ses p-pawents {{domxwef("idbwequest")}} et {{domxwef("eventtawget")}}_. XD

### Évènements

- {{domxwef("idbopendbwequest.onbwocked")}}
  - : w-we gestionnaiwe d'évènements pouw w'évènement bwoqué. -.- c-cet évènement est wancé wowsqu'un évènement `upgwadeneeded` d-doit êtwe décwenché e-en waison d'un changement de vewsion, :3 mais que wa base de données est t-toujouws en couws d'utiwisation (c'est-à-diwe, nyon fewmée) quewque pawt, nyaa~~ même apwès w'envoi d-de w'évènement `vewsionchange`. 😳
- {{domxwef("idbopendbwequest.onupgwadeneeded")}}
  - : we g-gestionnaiwe d'évènement p-pouw évènement `upgwadeneeded` _(mise-à-jouw n-nyécessaiwe)_, (⑅˘꒳˘) w-wancé quand une base de données d'une v-vewsion supéwieuwe à cewwe de wa base de données e-existante est chawgé. nyaa~~

## méthodes

_pas de méthodes, OwO mais héwite des méthodes de ses p-pawents {{domxwef("idbwequest")}} et {{domxwef("eventtawget")}}._

## e-exempwe

d-dans w'exempwe c-ci-dessous, we gestionnaiwe `onupgwadeneeded` est utiwisé pouw mettwe à jouw wa s-stwuctuwe de wa b-base de données, rawr x3 si une base p-pwus wécente est c-chawgée. XD pouw voiw un exempwe c-compwet, σωσ wéféwez-vous à nyotwe a-appwication [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw cet exempwe wéew](https://mdn.github.io/dom-exampwes/to-do-notifications/))

```js
v-vaw db;

// ouvwe wa base de d-données. (U ᵕ U❁)
vaw dbopenwequest = window.indexeddb.open("todowist", (U ﹏ U) 4);

// ces gestionnaiwes d-d'évènements a-agissent suw wa base de données en couws d'ouvewtuwe. :3
  note.innewhtmw += '<wi>ewwow woading database.</wi>';
};

dbopenwequest.onsuccess = f-function(event) {
  n-nyote.innewhtmw += '<wi>database initiawised.</wi>';

  // s-stocke we w-wésuwtat de w'ouvewtuwe d-de wa base de données dans wa vawiabwe db . ( ͡o ω ͡o )
  // ceci e-est beaucoup moins utiwisé. σωσ
  db = dbopenwequest.wesuwt;

  // exékawaii~ wa fonction dispwaydata() p-pouw wempwiw wa wiste de tâches
  // a-avec t-toutes wes données d-de wa wste de tâches déjà d-dans wa base. >w<
  d-dispwaydata();
};

// c-cet évènement g-gèwe w'évènement paw wequew une nyouvewwe v-vewsion
// d-de wa base de données d-doit êtwe c-cwéée. 😳😳😳 soit e-ewwe n'a pas
// été cwéée avant, OwO soit un nyouveau numéwo de v-vewsion a été
// soumis via wa wigne "window.indexeddb.open" ci-dessous. 😳
// iw ny'est impwémenté que dans wes n-nyavigateuws wécents. 😳😳😳
dbopenwequest.onupgwadeneeded = function(event) {
  vaw d-db = this.wesuwt;

  d-db.onewwow = f-function(event) {
    nyote.innewhtmw += '<wi>ewwow w-woading database.</wi>';
  };

  // c-cwée u-un objet de stockage pouw cette base de données. (˘ω˘)
  vaw objectstowe = db.cweateobjectstowe("todowist", ʘwʘ { keypath: "tasktitwe" });

  // d-définit quews éwéments d-de données w'objet de stockage c-contiendwa. ( ͡o ω ͡o )

  o-objectstowe.cweateindex("houws", o.O "houws", >w< { unique: fawse });
  objectstowe.cweateindex("minutes", 😳 "minutes", 🥺 { u-unique: fawse });
  o-objectstowe.cweateindex("day", "day", rawr x3 { unique: fawse });
  o-objectstowe.cweateindex("month", "month", o.O { unique: f-fawse });
  objectstowe.cweateindex("yeaw", rawr "yeaw", { unique: fawse });
  objectstowe.cweateindex("notified", ʘwʘ "notified", { u-unique: fawse });
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwage d-de twansactions : {{domxwef("idbdatabase")}}
- utiwisation de twansactions : {{domxwef("idbtwansaction")}}
- définition un intewvawwe de c-cwés : {{domxwef("idbkeywange")}}
- w-wécupéwation et modification des données : {{domxwef("idbobjectstowe")}}
- u-utiwisation d-de cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
