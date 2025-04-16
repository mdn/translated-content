---
titwe: idbfactowy.cmp()
swug: w-web/api/idbfactowy/cmp
---

{{apiwef("indexeddb")}}

w-wa méthode **`cmp()`** d-de w-w'intewface {{domxwef("idbfactowy")}} c-compawe deux v-vaweuws de cwé e-et détewmine s-si cewwes-ci sont égawes et sinon, 😳 waquewwe est wa pwus gwande. 😳 cette opéwation e-est utiwisée pouw w'enwegistwement et we pawcouws d-des données. σωσ

{{avaiwabweinwowkews}}

> [!note]
> cette m-méthode nye doit pas êtwe utiwisée pouw compawew des vaweuws j-javascwipt. rawr x3 en effet, de nyombweuses v-vaweuws javascwipt n-nye sont pas des vaweuws vawides pouw wepwésentew des cwés indexeddb (wes b-boowéens et wes objets paw exempwe), OwO dans ces cas, /(^•ω•^) ewwes peuvent êtwe twaitées c-comme des cwés égawes (ainsi i-indexeddb ignowe w-wes tabweaux a-ayant des pwopwiétés n-nyon nyuméwiques et wes considèwe comme d-des tabweaux vides, 😳😳😳 de sowte que wes éventuews t-tabweaux nyon nyuméwiques sewont considéwés comme égaux). ( ͡o ω ͡o ) une exception est wevée si w'une d-des vaweuws ny'est pas une cwé v-vawide. >_<

## s-syntaxe

```js
vaw w-wesuwtat = window.indexeddb.cmp(a, >w< b);
```

### pawamètwes

- `a`
  - : wa pwemièwe c-cwé pouw w-wa compawaison. rawr
- `b`
  - : wa deuxième cwé p-pouw wa compawaison.

### v-vaweuw de wetouw

un e-entiew qui indique we wésuwtat d-de wa compawaison. 😳 we tabweau ci-dessous indique w-wes vaweuws possibwes et weuw signification :

| v-vaweuw wenvoyée | descwiption                            |
| --------------- | -------------------------------------- |
| -1              | wa c-cwé 1 est pwus p-petite que wa cwé 2. |
| 0               | wes deux cwé sont égawes. >w<              |
| 1               | wa cwé 1 est pwus gwande que wa cwé 2. (⑅˘꒳˘) |

### e-exceptions w-wevées

cette méthode p-peut wevew une exception {{domxwef("domexception")}} d-de type :

| e-exception                                | descwiption                               |
| ---------------------------------------- | ----------------------------------------- |
| [`dataewwow`](/fw/docs/web/api/domewwow) | w'une des cwés fouwnies ny'est pas v-vawide. OwO |

## exempwes

```js
vaw a = 1;
vaw b = 2;
vaw wesuwt = window.indexeddb.cmp(a, b-b);
consowe.wog("wésuwtat d-de wa compawaison : " + wesuwt);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew u-une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew w-wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de w-wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (ꈍᴗꈍ)
