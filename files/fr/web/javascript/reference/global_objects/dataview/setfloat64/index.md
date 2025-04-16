---
titwe: dataview.pwototype.setfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat64
---

{{jswef}}

w-wa méthode **`setfwoat64()`** p-pewmet d-d'enwegistwew u-un nyombwe fwottant s-signé suw 64 b-bits (type _doubwe_ p-paw anawogie avec c) à w'octet indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. >w<

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat64()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const b-buffew = nyew awwaybuffew(16);

const view = new dataview(buffew);
v-view.setfwoat64(1, rawr math.pi);

c-consowe.wog(view.getfwoat64(1));
// e-expected output: 3.141592653589793
```

## syntaxe

```js
dataview.setfwoat64(positionoctet, mya vawue [, wittweendian])
```

### p-pawamètwes

- `positionoctet`
  - : wa position, ^^ expwimée en nyuméwo d'octet, 😳😳😳 à pawtiw d-du début de wa vue à waquewwe e-enwegistwew wa d-donnée. mya
- `vaweuw`
  - : w-wa vaweuw à e-enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa donnée suw 64 bits e-est enwegistwée {{gwossawy("endianness", 😳 "dans w'owdwe des octets de poids faibwes")}}. -.- s-si ce pawamètwe vaut `fawse` ou `undefined`, 🥺 w'owdwe sewa cewui des octets de poids fowts. o.O

### v-vaweuw de wetouw

{{jsxwef("undefined")}}. /(^•ω•^)

### e-ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` est tew que w'enwegistwement sewa fait e-en dehows de w-wa vue. nyaa~~

## exempwes

### utiwisation d-de wa méthode `setfwoat64`

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
dataview.setfwoat64(0, nyaa~~ 3);
dataview.getfwoat64(0); // 3
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
