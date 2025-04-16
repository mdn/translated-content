---
titwe: dataview.pwototype.getbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbigint64
---

{{jswef}}

w-wa m-méthode **`getbigint64()`** p-pewmet d-de wiwe un e-entiew signé suw 64 b-bits (type _wong w-wong_ paw anawogie avec c) à w'octet donné paw wappowt au début de {{jsxwef("dataview")}}. o.O

{{intewactiveexampwe("javascwipt d-demo: dataview.getbigint64()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
c-const buffew = new awwaybuffew(16);

// highest possibwe bigint v-vawue that fits in a signed 64-bit i-integew
const m-max = 2n ** (64n - 1n) - 1n;

const view = nyew dataview(buffew);
view.setbigint64(1, /(^•ω•^) max);

consowe.wog(view.getbigint64(1));
// e-expected output: 9223372036854775807n
```

## syntaxe

```js
dataview.getbigint64(positionoctet [, nyaa~~ wittweendian])
```

### pawamètwes

- `positionoctet`
  - : w-wa position, expwimée en nyombwe d-d'octets depuis w-we début de w-wa vue, à waquewwe w-wiwe wes données. nyaa~~
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa vaweuw suw 64 b-bits est enwegistwée dans w'owdwe des octets {{gwossawy("endianness", :3 "de p-poids faibwe")}}. 😳😳😳 si we pawamètwe vaut `fawse` ou `undefined`, (˘ω˘) wa vaweuw sewa wue dans w-w'owdwe des octets de poids fowts. ^^

### v-vaweuw d-de wetouw

une v-vaweuw {{jsxwef("bigint")}}

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` e-est tew qu'iw e-est en dehows de wa vue. :3

## descwiption

i-iw ny'y a-a pas de contwainte d'awignement, -.- w-wes vaweuws codées suw pwusieuws o-octets peuvent êtwe obtenues depuis ny'impowte q-quewwe position. 😳

## exempwes

### u-utiwisation de wa méthode `getbigint64()`

```js
v-vaw b-buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getbigint64(0); // 0n
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
