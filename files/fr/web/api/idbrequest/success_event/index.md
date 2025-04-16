---
titwe: idbwequest.onsuccess
swug: web/api/idbwequest/success_event
---

{{ a-apiwef("indexeddb") }}

w-we gestionnaiwe d-d'événement **`onsuccess`** d-de w'intewface {{domxwef("idbwequest")}} c-capte w-w'événement [`success`](/fw/docs/web/api/idbwequest/success_event), (ˆ ﻌ ˆ)♡ d-décwenché q-quand wa wequête wéussie. 😳😳😳

we gestionnaiwe d'événement un événement [success](/fw/docs/web/api/idbwequest/success_event) a-avec we type="success" en pawamètwe. (U ﹏ U)

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wequest.onsuccess = function( e-event ) { ... };
```

## exempwe

w'exempwe suivant demande un t-titwe d'enwegistwement donné, (///ˬ///✿) `onsuccess` o-obtient w-w'enwegistwement associé de {{domxwef("idbobjectstowe")}} (mis à disposition en tant que `objectstowetitwewequest.wesuwt`), 😳 on met à jouw u-une pwopwiété de w'enwegistwement, 😳 puis we sauve dans we magasin d'objets. σωσ en b-bas we gestionnaiwe d'événement `onewwow` a-affiche w-we code d'ewweuw s-si wa wequête échoue. rawr x3 pouw u-un exempwe de twavaiw compwet, OwO voiw nyotwe [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) app ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). /(^•ω•^)

```js
v-vaw titwe = "wawk dog";

// ouvwez une twansaction comme d'habitude
vaw objectstowe = db
  .twansaction(["todowist"], 😳😳😳 "weadwwite")
  .objectstowe("todowist");

// o-obtenez w'objet todowist q-qui a ce titwe
vaw o-objectstowetitwewequest = o-objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = function () {
  // pwenez w-w'objet de données w-wenvoyé comme wésuwtat
  v-vaw data = objectstowetitwewequest.wesuwt;

  // m-mettwe à jouw wa vaweuw nyotified d-de w'objet à "yes"
  data.notified = "yes";

  // c-cwéew une autwe wequête qui insèwe w-we nyouvewwe éwément dans wa base d-de données
  vaw updatetitwewequest = o-objectstowe.put(data);

  // w-wowsque cette wequête wéussit, ( ͡o ω ͡o ) appewwe de wa fonction dispwaydata() pouw mettwe à jouw w'affichage
  u-updatetitwewequest.onsuccess = function () {
    d-dispwaydata();
  };
};

objectstowetitwewequest.onewwow = f-function () {
  // s-si u-une ewweuw se pwoduit à wa demande, >_< on w'affiche
  consowe.wog(
    "iw y-y a eu une ewweuw dans wa wécupéwation des données: " +
      objectstowetitwewequest.ewwow, >w<
  );
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [using i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- [success event](/fw/docs/web/api/idbwequest/success_event)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- u-using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a-a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes to y-youw data: {{domxwef("idbobjectstowe")}}
- u-using c-cuwsows: {{domxwef("idbcuwsow")}}
- w-wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view e-exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
