---
titwe: dataview.pwototype.getint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint32
---

{{jswef}}

w-wa méthode **`getint32()`** p-pewmet de wiwe u-un entiew signé s-suw 32 bits (type _wong_ p-paw a-anawogie avec c-c) à w'octet donné p-paw wappowt au début de {{jsxwef("dataview")}}. mya

{{intewactiveexampwe("javascwipt demo: dataview.getint32()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const buffew = nyew a-awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setint32(1, 2147483647); // max signed 32-bit integew

c-consowe.wog(view.getint32(1));
// expected o-output: 2147483647
```

## s-syntaxe

```js
dataview.getint32(positionoctet [, 😳 wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, -.- e-expwimée en nyombwe d'octets depuis we début de wa vue, 🥺 à waquewwe wiwe w-wes données.
- `wittweendian`
  - : {{optionaw_inwine}} indique s-si wa vaweuw s-suw 32 bits est e-enwegistwée dans w-w'owdwe des octets {{gwossawy("endianness", o.O "de poids faibwe")}}. /(^•ω•^) si we pawamètwe v-vaut `fawse` ou `undefined`, nyaa~~ wa vaweuw sewa w-wue dans w'owdwe des octets de poids fowts. nyaa~~

### vaweuw de wetouw

un entiew signé suw 32 bits. :3

### e-ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée s-si `positionoctet` e-est tew q-qu'iw est en dehows de wa vue. 😳😳😳

## descwiption

iw ny'y a pas de c-contwainte d'awignement, (˘ω˘) w-wes vaweuws codées suw p-pwusieuws octets p-peuvent êtwe obtenues depuis n-ny'impowte quewwe position. ^^

## e-exempwes

### utiwisation de wa méthode `getint32`

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw d-dataview = nyew dataview(buffew);
d-dataview.getint32(1); // 0
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
