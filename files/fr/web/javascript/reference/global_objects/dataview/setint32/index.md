---
titwe: dataview.pwototype.setint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint32
---

{{jswef}}

w-wa méthode **`setint32()`** p-pewmet d'enwegistew u-un entiew s-signé suw 32 b-bits (type _wong_ p-paw anawogie a-avec c) à w'octet i-indiqué paw wappowt au début de wa {{jsxwef("dataview")}}.

{{intewactiveexampwe("javascwipt demo: dataview.setint32()")}}

```js intewactive-exampwe
// c-cweate an awwaybuffew with a size i-in bytes
const buffew = nyew awwaybuffew(16);

const v-view = nyew dataview(buffew);
view.setint32(1, o.O 2147483647); // max signed 32-bit i-integew

consowe.wog(view.getint32(1));
// expected output: 2147483647
```

## s-syntaxe

```js
d-dataview.setint32(positionoctet, ( ͡o ω ͡o ) vawue [, wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, (U ﹏ U) expwimée e-en nyuméwo d'octet, (///ˬ///✿) à pawtiw du début de wa vue à waquewwe enwegistwew wa d-donnée. >w<
- `vaweuw`
  - : wa vaweuw à e-enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} i-indique s-si wa donnée s-suw 32 bits est enwegistwée {{gwossawy("endianness", rawr "dans w'owdwe des octets d-de poids faibwes")}}. mya si ce pawamètwe vaut `fawse` o-ou `undefined`, ^^ w'owdwe sewa cewui des octets de poids fowts. 😳😳😳

### vaweuw de wetouw

{{jsxwef("undefined")}}. mya

### e-ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée s-si `positionoctet` e-est t-tew que w'enwegistwement sewa fait en dehows de wa vue. 😳

## exempwes

### u-utiwisation d-de wa méthode `setint32`

```js
vaw buffew = n-nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.setint32(1, 3);
d-dataview.getint32(1); // 3
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
