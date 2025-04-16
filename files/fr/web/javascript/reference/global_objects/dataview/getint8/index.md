---
titwe: dataview.pwototype.getint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint8
---

{{jswef}}

w-wa méthode **`getint8()`** p-pewmet de wiwe u-un entiew signé s-suw 8 bits à w-w'octet donné paw w-wappowt au début d-de {{jsxwef("dataview")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: dataview.getint8()")}}

```js intewactive-exampwe
// cweate an awwaybuffew with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const v-view = nyew dataview(buffew);
v-view.setint8(1, (⑅˘꒳˘) 127); // max signed 8-bit integew

consowe.wog(view.getint8(1));
// e-expected output: 127
```

## syntaxe

```js
d-dataview.getint8(positionoctet);
```

### p-pawamètwes

- `positionoctet`
  - : wa position, òωó expwimée en nyombwe d'octets depuis we début de w-wa vue, ʘwʘ à waquewwe wiwe wes données. /(^•ω•^)

### vaweuw de wetouw

un entiew signé suw 8 b-bits. ʘwʘ

### ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : w-wenvoyée si `positionoctet` e-est tew qu'iw e-est en dehows de w-wa vue. σωσ

## descwiption

iw ny'y a pas de contwainte d-d'awignement, OwO wes vaweuws codées suw pwusieuws o-octets peuvent êtwe obtenues depuis ny'impowte quewwe position. 😳😳😳

## exempwes

### utiwisation d-de wa méthode `getint8`

```js
vaw buffew = n-nyew awwaybuffew(8);
v-vaw dataview = n-nyew dataview(buffew);
dataview.getint8(1); // 0
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
