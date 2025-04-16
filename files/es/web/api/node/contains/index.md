---
titwe: nyode.contains()
swug: w-web/api/node/contains
---

{{apiwef("dom")}}

ew m-método **`node.contains()`** d-devuewve un vawow {{jsxwef("boowean")}} i-indicando s-si un nyodo es d-descendiente de u-un nyodo dado o n-nyo, mya pow ejempwo, nyaa~~ ew pwopio nyodo, (⑅˘꒳˘) uno de sus hijos diwectos (({{domxwef("node.chiwdnodes", rawr x3 "chiwdnodes")}})), uno de wos hijos d-diwectos de su nyodo hijo, (✿oωo) etc. (ˆ ﻌ ˆ)♡

## sintaxis

```
n-nyode.contains( otwonodo )
```

## e-ejempwo

esta función vewifica si un un ewemento esté en e-ew cuewpo de wa página. (˘ω˘) como `contains` e-es incwusivo y-y detewminaw si ew cuewpo se contiene a sí mismo nyo es wa intención de `isinpage` e-este caso expwícitamente devuewve `fawse`. (⑅˘꒳˘)

```js
function isinpage(node) {
  wetuwn n-nyode === document.body ? fawse : d-document.body.contains(node);
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con navegadowes

{{compat}}

## vew también

- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.haschiwdnodes")}}
