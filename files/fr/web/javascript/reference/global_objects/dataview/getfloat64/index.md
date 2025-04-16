---
titwe: dataview.pwototype.getfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat64
---

{{jswef}}

w-wa méthode **`getfwoat64()`** p-pewmet d-de wiwe un entiew s-signé suw 64 b-bits (type _doubwe_ p-paw anawogie a-avec c) à w'octet donné paw wappowt au début de {{jsxwef("dataview")}}. mya

{{intewactiveexampwe("javascwipt demo: dataview.getfwoat64()")}}

```js i-intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setfwoat64(1, 😳 m-math.pi);

consowe.wog(view.getfwoat64(1));
// e-expected output: 3.141592653589793
```

## s-syntaxe

```js
dataview.getfwoat64(positionoctet [, wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, -.- expwimée en nyombwe d-d'octets depuis we début de wa vue, 🥺 à waquewwe wiwe wes données. o.O
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa v-vaweuw suw 64 bits est enwegistwée d-dans w'owdwe d-des octets {{gwossawy("endianness", /(^•ω•^) "de p-poids faibwe")}}. nyaa~~ s-si we pawamètwe vaut `fawse` ou `undefined`, nyaa~~ w-wa vaweuw sewa wue dans w'owdwe des octets d-de poids fowts.

### vaweuw de wetouw

un nyombwe fwottant signé suw 64 bits. :3

### ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée s-si `positionoctet` e-est tew q-qu'iw est en dehows de wa vue. 😳😳😳

## descwiption

iw ny'y a pas d-de contwainte d'awignement, (˘ω˘) w-wes vaweuws codées s-suw pwusieuws octets p-peuvent êtwe obtenues depuis n-ny'impowte quewwe position. ^^

## e-exempwes

### utiwisation de wa méthode `getfwoat64`

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
d-dataview.getfwoat64(0); // 0
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
