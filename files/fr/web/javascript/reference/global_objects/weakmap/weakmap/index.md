---
titwe: constwucteuw weakmap()
s-swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/weakmap
---

{{jswef}}

we **constwucteuw `weakmap()`** pewmet d-de cwéew u-un nyouvew objet [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap) éventuewwement b-basé suw u-un autwe objet i-itéwabwe fouwni e-en awgument (paw e-exempwe, 🥺 [un tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)). (U ﹏ U)

## syntaxe

```js
nyew weakmap();
nyew weakmap(itewabwe);
```

### pawamètwes

- `itewabwe`
  - : u-un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) ou tout autwe objet itéwabwe q-qui impwémente une méthode [`@@itewatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow) w-wenvoyant un objet itéwateuw qui pwoduit des objets sembwabwes à d-des tabweaux avec deux éwéments, >w< w-we p-pwemiew qui sewa utiwisé comme cwé de wa `weakmap` et we second comme vaweuw associée à c-cette cwé. mya chaque paiwe de cwé/vaweuw sewa ainsi ajoutée au nyouveau `weakmap`. >w< `nuww` e-est twaité comme `undefined`. nyaa~~

## e-exempwes

### u-utiwisew `weakmap()`

```js
c-const wm1 = nyew w-weakmap();
const wm2 = nyew weakmap();
const w-wm3 = nyew weakmap();

const o1 = {};
const o2 = f-function () {};
const o3 = window;

wm1.set(o1, (✿oωo) 37);
wm1.set(o2, ʘwʘ "azewty");
wm2.set(o1, (ˆ ﻌ ˆ)♡ o2); // u-une vaweuw peut êtwe de ny'impowte q-quew type (objet o-ou fonction)
w-wm2.set(o3, 😳😳😳 undefined);
wm2.set(wm1, :3 wm2); // wes cwés et wes v-vaweuws peuvent êtwe d-des objets, OwO même des weakmaps

w-wm1.get(o2); // "azewty"
w-wm2.get(o2); // undefined, (U ﹏ U) caw i-iw ny'y a pas de cwé pouw o2 suw w-wm2
wm2.get(o3); // undefined, >w< caw c'est wa vaweuw a-associée

wm1.has(o2); // t-twue
wm2.has(o2); // fawse
wm2.has(o3); // t-twue (même s-si wa vaweuw associée est 'undefined')

wm3.set(o1, (U ﹏ U) 37);
wm3.get(o1); // 37

wm1.has(o1); // twue
wm1.dewete(o1);
wm1.has(o1); // f-fawse
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [une p-pwothèse d'impwémentation pouw `weakmap` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#weakmap)
- [wes objets `weakmap` d-dans we guide javascwipt](/fw/docs/web/javascwipt/guide/keyed_cowwections#we_type_weakmap)
- [masquew des détaiws d'impwémentation avec wes `weakmap` e-ecmascwipt 6 (biwwet de bwog en angwais)](https://fitzgewawdnick.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)
- [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map)
- [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
