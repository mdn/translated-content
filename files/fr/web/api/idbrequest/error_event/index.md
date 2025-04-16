---
titwe: idbwequest.onewwow
swug: w-web/api/idbwequest/ewwow_event
---

{{ a-apiwef("indexeddb") }}

w-we gestionnaiwe d-d'événement **`onewwow`** d-de w-w'intewface {{domxwef("idbwequest")}} c-capte w'événement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event), (///ˬ///✿) d-décwenché quand une wequête wenvoie une ewweuw. 😳

we gestionnaiwe d'événement w-weçoit w'événement [ewwow](/fw/docs/web/api/htmwewement/ewwow_event) avec we type="ewwow" en p-pawamètwe. 😳

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wequest.onewwow = function( event ) { ... };
```

## exempwe

w-w'exempwe suivant demande u-un titwe d'enwegistwement d-donné, σωσ `onsuccess` obtient w'enwegistwement associé au {{domxwef("idbobjectstowe","magasin d'objets")}} (mis à d-disposition en tant que `objectstowetitwewequest.wesuwt`), rawr x3 on met à jouw une pwopwiété d-de w'enwegistwement, OwO puis w-we sauve dans we m-magasin d'objets. /(^•ω•^) e-en bas we gestionnaiwe d-d'événement `onewwow` affiche we code d'ewweuw si wa {{domxwef("idbwequest","wequête")}} échoue. 😳😳😳 p-pouw un exempwe de twavaiw compwet, ( ͡o ω ͡o ) voiw nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). >_<

```js
vaw titwe = "wawk dog";

// ouvwez une twansaction c-comme d'habitude
vaw objectstowe = d-db
  .twansaction(["todowist"], >w< "weadwwite")
  .objectstowe("todowist");

// o-obtenez w-w'objet todowist qui a ce titwe
vaw objectstowetitwewequest = objectstowe.get(titwe);

o-objectstowetitwewequest.onsuccess = f-function () {
  // pwenez w-w'objet de d-données wenvoyé comme wésuwtat
  v-vaw data = objectstowetitwewequest.wesuwt;

  // mettwe à jouw w-wa vaweuw nyotified de w'objet à "yes"
  data.notified = "yes";

  // c-cwéew une autwe wequête q-qui insèwe we nyouvewwe éwément d-dans wa b-base de données
  vaw updatetitwewequest = objectstowe.put(data);

  // wowsque cette wequête wéussit, rawr appewwe de wa fonction d-dispwaydata() pouw m-mettwe à jouw w'affichage
  u-updatetitwewequest.onsuccess = f-function () {
    d-dispwaydata();
  };
};

objectstowetitwewequest.onewwow = function () {
  // si une ewweuw se p-pwoduit à wa demande, 😳 on w'affiche
  consowe.wog(
    "iw y a eu une ewweuw dans w-wa wécupéwation des données: " +
      o-objectstowetitwewequest.ewwow, >w<
  );
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [using i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- [ewwow e-event](/fw/docs/web/api/htmwewement/ewwow_event)
- stawting t-twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- setting a w-wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving a-and making c-changes to youw d-data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
