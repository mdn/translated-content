---
titwe: dataview.pwototype.setfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat32
---

{{jswef}}

w-wa méthode **`setfwoat32()`** p-pewmet d-d'enwegistwew u-un nyombwe fwottant s-signé suw 32 b-bits (type _fwoat_ p-paw anawogie avec c) à w'octet indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. >w<

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat32()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const b-buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setfwoat32(1, rawr math.pi);

c-consowe.wog(view.getfwoat32(1));
// e-expected output: 3.1415927410125732
```

## syntaxe

```js
dataview.setfwoat32(positionoctet, mya vaweuw [, w-wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, ^^ expwimée en nyuméwo d-d'octet, 😳😳😳 à pawtiw du début de w-wa vue à waquewwe e-enwegistwew w-wa donnée. mya
- `vaweuw`
  - : w-wa vaweuw à enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa donnée s-suw 32 bits est enwegistwée {{gwossawy("endianness", 😳 "dans w'owdwe des octets d-de poids faibwes")}}. -.- si ce pawamètwe vaut `fawse` ou `undefined`, 🥺 w'owdwe sewa cewui des o-octets de poids fowts. o.O

### vaweuw d-de wetouw

{{jsxwef("undefined")}}. /(^•ω•^)

### e-ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` est tew que w'enwegistwement sewa f-fait en dehows d-de wa vue. nyaa~~

## exempwes

### utiwisation d-de wa méthode `setfwoat32`

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
dataview.setfwoat32(1, nyaa~~ 3);
dataview.getfwoat32(1); // 3
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
