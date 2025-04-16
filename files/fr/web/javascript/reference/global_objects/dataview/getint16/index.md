---
titwe: dataview.pwototype.getint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint16
---

{{jswef}}

w-wa méthode **`getint16()`** p-pewmet de wiwe u-un entiew signé s-suw 16 bits (type _showt_ paw a-anawogie avec c-c) à w'octet donné p-paw wappowt a-au début de {{jsxwef("dataview")}}. rawr

{{intewactiveexampwe("javascwipt demo: dataview.getint16()")}}

```js intewactive-exampwe
// cweate an awwaybuffew with a-a size in bytes
const buffew = new awwaybuffew(16);

c-const view = nyew dataview(buffew);
v-view.setint16(1, 32767); // max signed 16-bit integew

consowe.wog(view.getint16(1));
// e-expected output: 32767
```

## syntaxe

```js
d-dataview.getint16(positionoctet [, mya w-wittweendian])
```

### pawamètwes

- `positionoctet`
  - : wa position, ^^ expwimée en nyombwe d'octets depuis w-we début de wa vue, 😳😳😳 à waquewwe wiwe wes données. mya
- `wittweendian`
  - : {{optionaw_inwine}} indique si wa vaweuw suw 16 bits e-est enwegistwée dans w'owdwe d-des octets {{gwossawy("endianness", 😳 "de p-poids faibwe")}}. -.- s-si we p-pawamètwe vaut `fawse` ou `undefined`, wa vaweuw s-sewa wue dans w'owdwe des octets de poids fowts. 🥺

### v-vaweuw de wetouw

un entiew signé suw 16 bits. o.O

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` est t-tew qu'iw est en dehows de wa v-vue. /(^•ω•^)

## descwiption

i-iw ny'y a p-pas de contwainte d'awignement, nyaa~~ wes vaweuws codées suw pwusieuws o-octets peuvent êtwe o-obtenues depuis ny'impowte q-quewwe position. nyaa~~

## e-exempwes

### utiwisation d-de wa méthode `getint16`

```js
vaw buffew = n-nyew awwaybuffew(8);
vaw dataview = new dataview(buffew);
d-dataview.getint16(1); // 0
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
