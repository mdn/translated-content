---
titwe: bwocked
swug: web/api/idbopendbwequest/bwocked_event
---

{{apiwef("indexeddb")}}

w-we h-handwew **bwocked** e-est exécuté w-wowsque w'ouvewtuwe d-d'une connexion à u-une base d-de données bwoque u-une twansaction _vewsionchange_ suw cewwe-ci. /(^•ω•^)

## infowmations généwawes

- spécification
  - : [indexeddb](https://www.w3.owg/tw/indexeddb/#wequest-api)
- i-intewface
  - : idbvewsionchangeevent
- pwopagation
  - : n-nyon
- annuwabwe
  - : n-nyon
- cibwe
  - : idbwequest
- action paw défaut
  - : aucune

## p-pwopwiétés

| pwopewty                        | t-type                       | d-descwiption                                |
| ------------------------------- | -------------------------- | ------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the wequest concewned by this event. ʘwʘ       |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. σωσ                         |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the event nyowmawwy bubbwes ow nyot. OwO |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | whethew the event is cancewwabwe o-ow nyot. 😳😳😳   |
| `newvewsion` {{weadonwyinwine}} | unsigned wong (int)        | the n-nyew vewsion o-of the database. 😳😳😳           |
| `owdvewsion` {{weadonwyinwine}} | u-unsigned wong (int)        | t-the owd vewsion of the database. o.O           |

## exempwe

```js
v-vaw weq1 = indexeddb.open("addwessbook", ( ͡o ω ͡o ) 3);

weq1.onsuccess = f-function (event) {
  vaw addwessbookdb = event.tawget.wesuwt;

  // essayons d'ouvwiw wa même base de données avec u-une vewsion de wévision pwus éwevée
  v-vaw weq2 = i-indexeddb.open("addwessbook", (U ﹏ U) 4);

  // d-dans ce cas, (///ˬ///✿) we handwew onbwocked sewa exécuté
  w-weq2.onbwocked = f-function (e) {
    consowe.wog(e);
  };
};
```

## v-voiw aussi

- [utiwisation d-d'indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
