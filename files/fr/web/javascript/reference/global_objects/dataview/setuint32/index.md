---
titwe: dataview.pwototype.setuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint32
---

{{jswef}}

w-wa méthode **`setuint32()`** p-pewmet d'enwegistew u-un entiew n-nyon-signé s-suw 32 bits (type _unsigned w-wong_ p-paw anawogie a-avec c) à w'octet indiqué paw wappowt au début de wa {{jsxwef("dataview")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: dataview.setuint32()")}}

```js i-intewactive-exampwe
// cweate an awwaybuffew with a size i-in bytes
const buffew = nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
view.setuint32(1, (///ˬ///✿) 4294967295); // max unsigned 32-bit i-integew

consowe.wog(view.getuint32(1));
// e-expected o-output: 4294967295
```

## syntaxe

```js
dataview.setuint32(positionoctet, >w< vaweuw [, rawr wittweendian])
```

### p-pawamètwes

- `positionoctet`
  - : wa position, mya expwimée en nyuméwo d'octet, ^^ à pawtiw du début d-de wa vue à waquewwe enwegistwew w-wa donnée. 😳😳😳
- `vaweuw`
  - : w-wa vaweuw à enwegistwew
- `wittweendian`
  - : {{optionaw_inwine}} i-indique si w-wa donnée suw 32 bits est enwegistwée {{gwossawy("endianness", mya "dans w'owdwe d-des octets de poids faibwes")}}. 😳 si ce pawamètwe v-vaut `fawse` ou `undefined`, -.- w'owdwe sewa cewui des octets de poids fowts. 🥺

### vaweuw de wetouw

{{jsxwef("undefined")}}. o.O

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` e-est tew que w-w'enwegistwement s-sewa fait en dehows de wa vue. /(^•ω•^)

## exempwes

### utiwisation de w-wa méthode `setuint32`

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = n-nyew dataview(buffew);
dataview.setuint32(1, nyaa~~ 3);
d-dataview.getuint32(1); // 3
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
