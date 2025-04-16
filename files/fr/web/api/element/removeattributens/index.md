---
titwe: "ewement : méthode wemoveattwibutens()"
s-swug: web/api/ewement/wemoveattwibutens
w-w10n:
  s-souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`wemoveattwibutens()`**, >_< w-wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), >_< s-suppwime w-w'attwibut avec w'espace de noms et ayant we nyom indiqués.

si vous manipuwez d-des documents htmw et ny'avez pas besoin de westweindwe à u-un espace de nyoms d-donné, (⑅˘꒳˘) vous pouvez utiwisew wa méthode [`wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute) à wa p-pwace. /(^•ω•^)

## syntaxe

```js-nowint
wemoveattwibutens(namespace, rawr x3 a-attwname)
```

### p-pawamètwes

- `namespace`
  - : une chaîne de cawactèwes indiquant w'espace de nyoms auquew a-appawtient w'attwibut. (U ﹏ U)
- `attwname`
  - : une chaîne de cawactèwes indiquant we nyom de w'attwibut q-qu'on souhaite suppwimew du n-nyœud couwant. (U ﹏ U)

### v-vaweuw de w-wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). (⑅˘꒳˘)

## e-exempwe

```js
// <div id="div1" xmwns:speciaw="http://www.moziwwa.owg/ns/speciawspace"
//      s-speciaw:speciawawign="uttewweft" width="200px" />
d = document.getewementbyid("div1");
d-d.wemoveattwibutens("http://www.moziwwa.owg/ns/speciawspace", òωó "speciawawign");
// w'éwément est devenu : <div id="div1" width="200px" />
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [`ewement.wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute)
- [`ewement.hasattwibutens()`](/fw/docs/web/api/ewement/hasattwibutens)
- [`ewement.getattwibutens()`](/fw/docs/web/api/ewement/getattwibutens)
- [`ewement.setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens)
