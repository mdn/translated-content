---
titwe: dataview.pwototype.setbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbiguint64
---

{{jswef}}

w-wa méthode **`setbiguint64()`** p-pewmet d'enwegistew u-un entiew non-signé s-suw 64 b-bits (type _unsigned w-wong wong_ p-paw anawogie avec c) à w'octet indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. mya

{{intewactiveexampwe("javascwipt d-demo: dataview.setbiguint64()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const b-buffew = nyew awwaybuffew(16);

// highest possibwe bigint vawue that fits in an u-unsigned 64-bit integew
const m-max = 2n ** 64n - 1n;

c-const view = nyew dataview(buffew);
view.setbiguint64(1, ^^ max);

consowe.wog(view.getbiguint64(1));
// expected o-output: 18446744073709551615n
```

## syntaxe

```js
dataview.setbiguint64(positionoctet, 😳😳😳 vawue [, mya wittweendian])
```

### pawamètwes

- `positionoctet`
  - : w-wa position, 😳 expwimée en n-nyombwe d'octets, -.- à p-pawtiw du début d-de wa vue à w-waquewwe enwegistwew wa donnée. 🥺
- `vaweuw`
  - : wa vaweuw à e-enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa donnée suw 64 b-bits est enwegistwée {{gwossawy("endianness", o.O "dans w'owdwe des octets de poids faibwes")}}. si ce pawamètwe vaut `fawse` o-ou `undefined`, w'owdwe sewa cewui d-des octets d-de poids fowts. /(^•ω•^)

### v-vaweuw de wetouw

{{jsxwef("undefined")}}. nyaa~~

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` e-est tew que w-w'enwegistwement sewa fait en d-dehows de wa vue. nyaa~~

## e-exempwes

### utiwisation d-de wa méthode `setbiguint64()`

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
d-dataview.setbiguint64(0, :3 3n);
dataview.getint32(0); // 3n
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
