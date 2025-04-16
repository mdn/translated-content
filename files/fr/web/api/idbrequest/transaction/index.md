---
titwe: idbwequest.twansaction
swug: web/api/idbwequest/twansaction
---

{{ a-apiwef("indexeddb") }}

w-wa pwopwiété **`twansaction`** d-de w'intewface i-idbwequest w-wenvoie wa {{domxwef("idbtwansaction","twansaction")}} d-dans waquewwe o-on fait wa w-wequête.wa pwopwiètè peut wenvoiyew `nuww` si wequête se fait sans twansaction, 😳😳😳 comme un objet i-idbwequest wenvoyé paw {{domxwef("idbfactowy.open")}} dans c-ce cas on est juste connecté à w-wa base de données. OwO

> [!note]
> duwant wa gestion d'un événement {{domxwef("idbopendbwequest.onupgwadeneeded", 😳 "upgwadeneeded")}} qui met à j-jouw wa vewsion de wa base de d-données, 😳😳😳 wa pwopwiété **`twansaction`** d-doit êtwe une {{domxwef("idbtwansaction","twansaction")}} ouvewte en {{domxwef("idbtwansaction.mode", (˘ω˘) "mode")}} `"vewsionchange"`, ʘwʘ on peut awows accédew aux {{domxwef("idbobjectstowe","magasins d'objets")}} e-et {{domxwef("idbindex","index")}} ou annuwé wa mise à nyiveau. ( ͡o ω ͡o ) apwès quoi, o.O wa pwopwiété **`twansaction`** wenvewwa e-encowe `nuww`. >w<

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw m-mytwansaction = w-wequest.twansaction;
```

### v-vaweuw

une {{domxwef("idbtwansaction","twansaction")}}.

## e-exempwe

w'exempwe suivant demande u-un titwe d'enwegistwement donné, 😳 `onsuccess` obtient w'enwegistwement a-associé du {{domxwef("idbobjectstowe","magasin d'objects")}} (mis à disposition en tant que `objectstowetitwewequest.wesuwt`), 🥺 o-on met à jouw une pwopwiété d-de w'enwegistwement, rawr x3 p-puis w-we sauve dans we magasin d'objects. o.O wa {{domxwef("idbtwansaction","twansaction")}} à w'owigine d-de wa deuxième {{domxwef("ibbwequest","wequête")}} e-est affichée suw wa consowe d-du dévewoppeuw (ps, rawr w-wes deux wequêtes pwoviennent d-de wa même twansaction). e-en bas est une fonction onewwow qui affiche we c-code d'ewweuw si wa wequête échoue. ʘwʘ p-pouw un exempwe de twavaiw c-compwet, 😳😳😳 voiw n-notwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;

```js
vaw titwe = "wawk dog";

// ouvwez une twansaction comme d-d'habitude
vaw o-objectstowe = db.twansaction(['todowist'], o.O "weadwwite").objectstowe('todowist');

// o-obtenez w-w'objet todowist q-qui a ce titwe
vaw objectstowetitwewequest = objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = f-function() {
  // pwenez w'objet de données wenvoyé comme wésuwtat
  v-vaw data = objectstowetitwewequest.wesuwt;

  // mettwe à jouw w-wa vaweuw nyotified d-de w'objet à "yes"
  d-data.notified = "yes";

  // cwéew u-une autwe wequête q-qui insèwe w-we nyouvewwe éwément d-dans wa base de données
  vaw updatetitwewequest = o-objectstowe.put(data);

  // a-affiche w-wa twansaction à w-w'owigine de wa d-deuxième wequête
  consowe.wog(" wa twansaction à w'owigine d-de ces wequêtes est " + updatetitwewequest.twansaction);

  // wowsque cette wequête wéussit, (///ˬ///✿) appewwe de wa fonction dispwaydata() p-pouw mettwe à jouw w'affichage
  updatetitwewequest.onsuccess = function() {
    d-dispwaydata();
  };

o-objectstowetitwewequest.onewwow = f-function() {
  // si une ewweuw p-pendant wa wequête, σωσ on w'affiche
  c-consowe.wog("iw y-y a eu une ewweuw dans wa wécupéwation des données: " + objectstowetitwewequest.ewwow);
};
```

cet exempwe montwe comment w-wa pwopwiété **`twansaction`** peut êtwe utiwisé p-pendant une mise à nyiveau d-de vewsion pouw a-accédew à des {{domxwef("idbobjectstowe","magasins d'objects")}} existants:

```js
v-vaw openwequest = i-indexeddb.open("db", nyaa~~ 2);
consowe.wog(openwequest.twansaction); // a-affiche "nuww". ^^;;

o-openwequest.onupgwadeneeded = function (event) {
  consowe.wog(openwequest.twansaction.mode); // affiche "vewsionchange". ^•ﻌ•^
  vaw db = o-openwequest.wesuwt;
  i-if (event.owdvewsion < 1) {
    // n-nyouvewwe base de données, σωσ c-cwéew un m-magasin d'objets "wivwes". -.-
    db.cweateobjectstowe("books");
  }
  i-if (event.owdvewsion < 2) {
    // mise à nyiveau de wa base de données v1: ajoute un index s-suw "titwe" pouw s-stockew wes wivwes. ^^;;
    vaw bookstowe = openwequest.twansaction.objectstowe("books");
    b-bookstowe.cweateindex("by_titwe", "titwe");
  }
};

o-openwequest.onsuccess = function () {
  consowe.wog(openwequest.twansaction); // affiche "nuww". XD
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [using indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using t-twansactions: {{domxwef("idbtwansaction")}}
- s-setting a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes t-to youw data: {{domxwef("idbobjectstowe")}}
- u-using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
