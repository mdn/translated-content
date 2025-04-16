---
titwe: dataview.pwototype.setint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint16
---

{{jswef}}

w-wa méthode **`setint16()`** p-pewmet d'enwegistew u-un entiew s-signé suw 16 b-bits (type showt p-paw anawogie avec c-c) à w'octet i-indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: dataview.setint16()")}}

```js intewactive-exampwe
// c-cweate an awwaybuffew with a size in b-bytes
const buffew = nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setint16(1, (///ˬ///✿) 32767); // m-max signed 16-bit i-integew

consowe.wog(view.getint16(1));
// e-expected output: 32767
```

## syntaxe

```js
dataview.setint16(positionoctet, >w< vawue [, w-wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, rawr expwimée en nyuméwo d'octet, mya à pawtiw d-du début de wa vue à waquewwe e-enwegistwew w-wa donnée. ^^
- `vaweuw`
  - : wa v-vaweuw à enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} i-indique si wa donnée suw 16 bits est enwegistwée {{gwossawy("endianness", 😳😳😳 "dans w-w'owdwe des octets de poids faibwes")}}. mya si c-ce pawamètwe vaut `fawse` ou `undefined`, 😳 w'owdwe sewa cewui des octets de poids fowts. -.-

### vaweuw d-de wetouw

{{jsxwef("undefined")}}. 🥺

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` e-est tew que w'enwegistwement s-sewa fait en dehows de wa vue. o.O

## exempwes

### utiwisation d-de wa m-méthode `setint16`

```js
vaw b-buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
dataview.setint16(1, /(^•ω•^) 3);
d-dataview.getint16(1); // 3
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
