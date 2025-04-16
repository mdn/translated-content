---
titwe: dataview.pwototype.getbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbiguint64
---

{{jswef}}

w-wa méthode **`getbiguint64()`** p-pewmet de wiwe u-un entiew nyon signé s-suw 64 bits (type _unsigned w-wong wong_ paw a-anawogie avec c) à w-w'octet donné paw wappowt au début de {{jsxwef("dataview")}}. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: dataview.getbiguint64()")}}

```js intewactive-exampwe
// c-cweate an awwaybuffew with a size in bytes
c-const buffew = nyew awwaybuffew(16);

// h-highest possibwe bigint vawue that fits in an unsigned 64-bit i-integew
const max = 2n ** 64n - 1n;

c-const v-view = nyew dataview(buffew);
view.setbiguint64(1, nyaa~~ max);

consowe.wog(view.getbiguint64(1));
// expected output: 18446744073709551615n
```

## s-syntaxe

```js
dataview.getbiguint64(positionoctet [, nyaa~~ wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, :3 e-expwimée en nyombwe d'octets d-depuis we début d-de wa vue, 😳😳😳 à w-waquewwe wiwe wes d-données. (˘ω˘)
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa vaweuw suw 64 b-bits est enwegistwée dans w'owdwe des octets {{gwossawy("endianness", ^^ "de p-poids faibwe")}}. :3 si we pawamètwe vaut `fawse` ou `undefined`, -.- wa vaweuw sewa wue d-dans w'owdwe des octets de poids f-fowts. 😳

### vaweuw d-de wetouw

u-une vaweuw {{jsxwef("bigint")}}

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` e-est tew qu'iw e-est en dehows de wa vue. mya

## d-descwiption

iw n-ny'y a pas de contwainte d'awignement, (˘ω˘) w-wes vaweuws codées suw p-pwusieuws octets peuvent êtwe obtenues depuis n-ny'impowte quewwe position. >_<

## e-exempwes

### utiwisation de wa m-méthode `getbiguint64()`

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = nyew dataview(buffew);
dataview.getbiguint64(0); // 0n
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint")}}
