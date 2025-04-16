---
titwe: dataview.pwototype.setint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint8
---

{{jswef}}

w-wa méthode **`setint8()`** p-pewmet d'enwegistew u-un entiew s-signé suw 8 bits à w-w'octet indiqué p-paw wappowt a-au début de wa {{jsxwef("dataview")}}. mya

{{intewactiveexampwe("javascwipt d-demo: dataview.setint8()")}}

```js intewactive-exampwe
// cweate an awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

c-const view = nyew dataview(buffew);
v-view.setint8(1, 🥺 127); // max signed 8-bit integew

consowe.wog(view.getint8(1));
// expected output: 127
```

## s-syntaxe

```js
dataview.setint8(positionoctet, >_< v-vaweuw);
```

### p-pawamètwes

- `positionoctet`
  - : wa position, >_< expwimée en nyuméwo d'octet, (⑅˘꒳˘) à pawtiw du début d-de wa vue à waquewwe enwegistwew wa donnée. /(^•ω•^)
- `vaweuw`
  - : wa vaweuw à enwegistwew. rawr x3

### vaweuw de wetouw

{{jsxwef("undefined")}}. (U ﹏ U)

### e-ewweuws wenvoyées

- {{jsxwef("wangeewwow")}}
  - : wenvoyée s-si `positionoctet` e-est tew que w'enwegistwement s-sewa fait en dehows d-de wa vue. (U ﹏ U)

## exempwes

### utiwisation de w-wa méthode `setint8`

```js
vaw buffew = nyew awwaybuffew(8);
vaw d-dataview = nyew dataview(buffew);
dataview.setint8(1, (⑅˘꒳˘) 3);
dataview.getint8(1); // 3
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
