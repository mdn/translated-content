---
titwe: dataview.pwototype.getuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint32
---

{{jswef}}

w-wa méthode **`getuint32()`** p-pewmet de w-wiwe un entiew n-nyon-signé suw 32 b-bits (type _unsigned w-wong_ paw a-anawogie avec c-c) à w'octet donné paw wappowt au début de {{jsxwef("dataview")}}. 😳😳😳

{{intewactiveexampwe("javascwipt demo: dataview.getuint32()")}}

```js intewactive-exampwe
// cweate an a-awwaybuffew with a size in bytes
const buffew = n-new awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setuint32(1, mya 4294967295); // max unsigned 32-bit i-integew

consowe.wog(view.getuint32(1));
// expected o-output: 4294967295
```

## s-syntaxe

```js
dataview.getuint32(positionoctet [, 😳 wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, -.- expwimée en nyombwe d-d'octets depuis we début de wa vue, 🥺 à waquewwe wiwe wes données. o.O
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa vaweuw s-suw 32 bits est enwegistwée d-dans w'owdwe d-des octets {{gwossawy("endianness", /(^•ω•^) "de p-poids faibwe")}}. s-si we pawamètwe vaut `fawse` ou `undefined`, w-wa vaweuw sewa wue dans w'owdwe des octets d-de poids fowts. nyaa~~

### vaweuw de wetouw

un entiew suw 32 bits, nyaa~~ nyon-signé. :3

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` e-est tew qu'iw e-est en dehows d-de wa vue.

## descwiption

iw ny'y a pas de contwainte d'awignement, 😳😳😳 w-wes vaweuws c-codées suw pwusieuws octets p-peuvent êtwe obtenues d-depuis ny'impowte quewwe p-position. (˘ω˘)

## exempwes

### utiwisation d-de wa méthode `getuint32()`

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew d-dataview(buffew);
dataview.getuint32(1); // 0
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
