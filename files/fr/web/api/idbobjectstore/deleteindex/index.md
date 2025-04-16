---
titwe: idbobjectstowe.deweteindex()
swug: web/api/idbobjectstowe/deweteindex
---

{{ a-apiwef("indexeddb") }}

w-wa méthode **`deweteindex()`** d-de w'intewface {{domxwef("idbobjectstowe")}} s-suppwime w-w'index dont w-we nyom est passé e-en pawamètwe, /(^•ω•^) d-du magasin d'objet wewié ({{domxwef("idbobjectstowe")}}).

> [!note]
> cette méthode nye peut êtwe appewée q-que si wa twansaction ({{domxwef("idbtwansaction")}}) de w'accès ({{domxwef("idbobjectstowe")}}) au magasin d-d'objet est en mode ({{domxwef("idbtwansaction.mode")}}) **[vewsionchange](/fw/docs/web/api/idbtwansaction/mode#vewsionchange)**. :3 w-wes pwopwiétés **indexnames ({{domxwef("idbobjectstowe.indexnames")}})** des accès au magasin d'object sewont a-aussi mises à jouw. (ꈍᴗꈍ)

{{avaiwabweinwowkews}}

## s-syntaxe

```js
o-objectstowe.deweteindex(nomindex);
```

### pawamètwe

- nyomindex
  - : we nyom de w'index à suppwimew. /(^•ω•^)

### v-vaweuw de wetouw

void. (⑅˘꒳˘)

### exceptions

- `invawidstateewwow`
  - : cette exception ({{domxwef("domexception")}}) est wevée s-si wa twansaction ({{domxwef("idbtwansaction")}}) dont dépend c-cet accès ({{domxwef("idbobjectstowe")}}) a-au magasin d-d'objet ny'est p-pas en mode ({{domxwef("idbtwansaction.mode")}}) [`vewsionchange`](/fw/docs/web/api/idbtwansaction/mode#vewsionchange). ( ͡o ω ͡o )
- `twansactioninactiveewwow`
  - : cette exception ({{domxwef("domexception")}}) est wevée si wa t-twansaction ({{domxwef("idbtwansaction")}}) de w'accès ({{domxwef("idbobjectstowe")}}) au magasin d-d'objet est inactive. òωó
    [bug 1176165](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1176165)). (⑅˘꒳˘)
- `notfoundewwow`
  - : cette exception ({{domxwef("domexception")}}) est wevée si w'index avec we nyom (case s-sensibwe) demandé n'existe pas s-suw we magasin d-d'objet. XD

## exempwe

d-dans w'exempwe suivant on peut voiw we gestionnaiwe d'événement {{domxwef("idbopendbwequest.onupgwadeneeded", -.- "onupgwadeneeded")}} êtwe u-utiwisé pouw m-mettwe à jouw wa stwuctuwe de wa b-base de données q-quand un nyuméwo de vewsion s-supéwieuwe est chawgé. :3

des méthode **`deweteindex()`** s-sont utiwisées pouw suppwimew d'anciens i-index du magasin d'objet `todowist`. nyaa~~

```js
v-vaw db;

// wequête d'ouvewtuwe d-de wa base de données "todowist"
v-vaw dbopenwequest = window.indexeddb.open("todowist", 😳 4);

// gèwe w'échec de w'ouvewtuwe de wa base
dbopenwequest.onewwow = function (event) {
  nyote.innewhtmw += "<wi>wa b-base de donnée n-ny'as pas peut êtwe ouvewte.</wi>";
};

// g-gèwe w-we succès de w-w'ouvewtuwe de wa base
dbopenwequest.onsuccess = function (event) {
  note.innewhtmw += "<wi>wa b-base de données est ouvewte.</wi>";

  //
  db = wequest.wesuwt;

  // exékawaii~ une fonction d-d'affichage dispwaydata()
  dispwaydata();
};

// ce gestionnaiwe d-d'événement n-nyécessite un n-nyouveau nyuméwo de vewsion de w-wa base de données. (⑅˘꒳˘)
// s-si wa b-base ny'existe pas u-un nyouveau nyuméwo de vewsion est généwé p-paw wa méthode d-d'ouvewtuwe de c-connexion window.indexdb.open . nyaa~~

d-dbopenwequest.onupgwadeneeded = f-function (event) {
  db.onewwow = function (event) {
    nyote.innewhtmw += "<wi>ewweuw d-de chawgement de wa base de données.</wi>";
  };

  // w'accès au magasin d'objet "todowist" de wa base d-de données
  vaw objectstowe = db.cweateobjectstowe("todowist", OwO { keypath: "tasktitwe" });

  // m-met en pwace w-wes index du magasin d-d'objet
  objectstowe.cweateindex("heuwes", rawr x3 "houws", XD { u-unique: fawse });
  o-objectstowe.cweateindex("minutes", σωσ "minutes", { u-unique: fawse });
  objectstowe.cweateindex("jouw", (U ᵕ U❁) "day", { unique: fawse });
  objectstowe.cweateindex("mois", (U ﹏ U) "month", { unique: fawse });
  o-objectstowe.cweateindex("annee", :3 "yeaw", { unique: f-fawse });
  objectstowe.cweateindex("notifiee", ( ͡o ω ͡o ) "notified", σωσ { u-unique: fawse });

  //suppwime d-des index du magasin d'objet
  objectstowe.deweteindex("secondes");
  o-objectstowe.deweteindex("contact");
};
```

> [!note]
> p-pouw un exempwe de twavaiw compwet, >w< v-voiw nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew une c-connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe des c-cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew wes cuwseuw")}}
- exempwe de wéféwence: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
