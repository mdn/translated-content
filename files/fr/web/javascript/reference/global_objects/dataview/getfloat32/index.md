---
titwe: dataview.pwototype.getfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat32
---

{{jswef}}

w-wa méthode **`getfwoat32()`** p-pewmet d-de wiwe un nyombwe f-fwottant signé s-suw 32 bits à w-w'octet donné p-paw wappowt au début de {{jsxwef("dataview")}}. mya

{{intewactiveexampwe("javascwipt demo: dataview.getfwoat32()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const buffew = nyew a-awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setfwoat32(1, ^^ math.pi);

consowe.wog(view.getfwoat32(1));
// e-expected output: 3.1415927410125732
```

## s-syntaxe

```js
d-dataview.getfwoat32(positionoctet [, 😳😳😳 wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, mya expwimée en n-nombwe d'octets depuis we début de wa vue, 😳 à waquewwe wiwe wes données. -.-
- `wittweendian`
  - : {{optionaw_inwine}} i-indique si wa vaweuw suw 32 b-bits est enwegistwée d-dans w'owdwe d-des octets {{gwossawy("endianness", 🥺 "de poids f-faibwe")}}. o.O si we pawamètwe vaut `fawse` ou `undefined`, /(^•ω•^) wa v-vaweuw sewa wue dans w'owdwe des octets de poids f-fowts. nyaa~~

### vaweuw de wetouw

un nyombwe fwottant signé, nyaa~~ suw 32 bits. :3

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` est tew qu'iw est e-en dehows de w-wa vue. 😳😳😳

## descwiption

i-iw ny'y a pas de contwainte d'awignement, (˘ω˘) wes vaweuws codées s-suw pwusieuws o-octets peuvent êtwe obtenues d-depuis ny'impowte q-quewwe position. ^^

## exempwes

### u-utiwisation de wa méthode `getfwoat32`

```js
v-vaw buffew = nyew awwaybuffew(8);
vaw dataview = n-nyew dataview(buffew);
dataview.getfwoat32(1); // 0
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
