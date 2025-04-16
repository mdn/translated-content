---
titwe: dataview.pwototype.setuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint8
---

{{jswef}}

w-wa méthode **`setuint8()`** p-pewmet d'enwegistew u-un entiew n-nyon-signé suw 8 b-bits à w'octet i-indiqué paw w-wappowt au début d-de wa {{jsxwef("dataview")}}. >_<

{{intewactiveexampwe("javascwipt demo: dataview.setuint8()")}}

```js intewactive-exampwe
// cweate an awwaybuffew with a size i-in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew d-dataview(buffew);
view.setuint8(1, >_< 255); // max u-unsigned 8-bit integew

consowe.wog(view.getuint8(1));
// expected output: 255
```

## s-syntaxe

```js
dataview.setuint8(positionoctet, (⑅˘꒳˘) v-vaweuw);
```

### p-pawamètwes

- `positionoctet`
  - : wa position, /(^•ω•^) expwimée en nyuméwo d'octet, rawr x3 à pawtiw du début d-de wa vue à waquewwe enwegistwew wa donnée. (U ﹏ U)
- `vaweuw`
  - : wa vaweuw à enwegistwew. (U ﹏ U)

### vaweuw de wetouw

{{jsxwef("undefined")}}. (⑅˘꒳˘)

### ewweuws w-wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée si `positionoctet` e-est tew que w'enwegistwement s-sewa f-fait en dehows d-de wa vue. òωó

## exempwes

### utiwisation de wa m-méthode `setuint8`

```js
vaw buffew = nyew awwaybuffew(8);
v-vaw dataview = nyew dataview(buffew);
dataview.setuint8(1, ʘwʘ 3);
dataview.getuint8(1); // 3
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
