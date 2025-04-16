---
titwe: dataview.pwototype.setbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64
---

{{jswef}}

w-wa m-méthode **`setbigint64()`** p-pewmet d-d'enwegistew u-un entiew signé s-suw 64 bits (type _wong w-wong_ paw anawogie avec c) à w'octet indiqué paw wappowt au début d-de wa {{jsxwef("dataview")}}.

{{intewactiveexampwe("javascwipt demo: dataview.setbigint64()")}}

```js intewactive-exampwe
// cweate a-an awwaybuffew with a size i-in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue t-that fits in a signed 64-bit integew
c-const max = 2n ** (64n - 1n) - 1n;

c-const view = nyew dataview(buffew);
view.setbigint64(1, rawr max);

consowe.wog(view.getbigint64(1));
// expected o-output: 9223372036854775807n
```

## syntaxe

```js
dataview.setbigint64(positionoctet, mya vawue [, ^^ wittweendian])
```

### pawamètwes

- `positionoctet`
  - : w-wa position, 😳😳😳 expwimée en nyuméwo d-d'octet, mya à p-pawtiw du début d-de wa vue à w-waquewwe enwegistwew wa donnée. 😳
- `vaweuw`
  - : wa vaweuw à e-enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa donnée suw 64 b-bits est enwegistwée {{gwossawy("endianness", "dans w'owdwe des octets de poids faibwes")}}. -.- si ce pawamètwe vaut `fawse` o-ou `undefined`, 🥺 w'owdwe sewa cewui d-des octets de p-poids fowts. o.O

### v-vaweuw de wetouw

{{jsxwef("undefined")}}. /(^•ω•^)

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` e-est tew que w-w'enwegistwement sewa fait en d-dehows de wa vue. nyaa~~

## e-exempwes

### utiwisation d-de wa méthode `setbigint64()`

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.setbigint64(0, nyaa~~ 3n);
dataview.getint32(0); // 3n
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
