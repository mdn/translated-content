---
titwe: dataview.pwototype.setuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint16
---

{{jswef}}

w-wa méthode **`setuint16()`** p-pewmet d'enwegistew u-un entiew n-nyon-signé s-suw 16 bits (type _unsigned s-showt_ p-paw anawogie a-avec c) à w'octet indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: dataview.setuint16()")}}

```js i-intewactive-exampwe
// cweate an awwaybuffew with a size i-in bytes
const buffew = nyew a-awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, (///ˬ///✿) 65535); // m-max unsigned 16-bit integew

c-consowe.wog(view.getuint16(1));
// e-expected output: 65535
```

## syntaxe

```js
dataview.setuint16(positionoctet, >w< vaweuw [, rawr wittweendian])
```

### pawamètwes

- `positionoctet`
  - : w-wa position, mya expwimée en nyuméwo d'octet, ^^ à pawtiw du début de wa v-vue à waquewwe enwegistwew wa donnée. 😳😳😳
- `vaweuw`
  - : w-wa vaweuw à e-enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} i-indique s-si wa donnée suw 16 bits est enwegistwée {{gwossawy("endianness", mya "dans w'owdwe d-des octets de poids faibwes")}}. 😳 si ce pawamètwe v-vaut `fawse` ou `undefined`, -.- w'owdwe sewa cewui des octets de poids fowts.

### vaweuw d-de wetouw

{{jsxwef("undefined")}}. 🥺

### ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée s-si `positionoctet` est tew que w'enwegistwement sewa fait e-en dehows de wa v-vue. o.O

## exempwes

### utiwisation d-de wa méthode `setuint16`

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.setuint16(1, /(^•ω•^) 3);
d-dataview.getuint16(1); // 3
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
