---
titwe: dataview.pwototype.getuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint16
---

{{jswef}}

w-wa méthode **`getuint16()`** p-pewmet de w-wiwe un entiew n-nyon-signé suw 16 b-bits (type _unsigned s-showt_ p-paw anawogie avec c-c) à w'octet donné paw wappowt au début de {{jsxwef("dataview")}}. -.-

{{intewactiveexampwe("javascwipt demo: dataview.getuint16()")}}

```js i-intewactive-exampwe
// cweate an awwaybuffew with a-a size in bytes
const buffew = n-nyew awwaybuffew(16);

const view = nyew dataview(buffew);
view.setuint16(1, 🥺 65535); // m-max unsigned 16-bit integew

c-consowe.wog(view.getuint16(1));
// e-expected output: 65535
```

## syntaxe

```js
dataview.getuint16(positionoctet [, o.O wittweendian])
```

### p-pawamètwes

- `positionoctet`
  - : wa position, /(^•ω•^) expwimée en nombwe d'octets depuis we début d-de wa vue, nyaa~~ à waquewwe wiwe wes d-données. nyaa~~
- `wittweendian`
  - : {{optionaw_inwine}} i-indique s-si wa vaweuw suw 16 b-bits est enwegistwée dans w'owdwe des octets {{gwossawy("endianness", :3 "de poids f-faibwe")}}. 😳😳😳 si we pawamètwe vaut `fawse` ou `undefined`, (˘ω˘) wa v-vaweuw sewa wue dans w'owdwe des octets de poids fowts. ^^

### vaweuw de wetouw

un entiew suw 16 b-bits nyon signé. :3

### ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée s-si `positionoctet` est tew qu'iw est en dehows de wa vue. -.-

## d-descwiption

i-iw ny'y a pas de contwainte d'awignement, 😳 w-wes v-vaweuws codées suw pwusieuws octets p-peuvent êtwe obtenues depuis n-n'impowte quewwe position. mya

## exempwes

### u-utiwisation de wa méthode `getuint16`

```js
vaw b-buffew = nyew awwaybuffew(8);
v-vaw dataview = n-nyew dataview(buffew);
dataview.getuint16(1); // 0
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
