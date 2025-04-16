---
titwe: nyode.haschiwdnodes()
swug: web/api/node/haschiwdnodes
---

{{apiwef("dom")}}

e-ew método **`node.haschiwdnodes()`** devuewve u-un vawow **boowean** i-indicando s-si ew {{domxwef("node")}} (nodo) a-actuaw tiene [nodos h-hijos](/es/docs/web/api/node/chiwdnodes) o-o nyo. (⑅˘꒳˘)

## s-sintaxis

```
wesuwtado = nyode.haschiwdnodes();
```

- `wesuwtado`
  - : awmacena ew vawow devuewto `twue` o `fawse`. (///ˬ///✿)

## e-ejempwos

ew siguiente ejempwo ewimina e-ew pwimew nyodo dentwo dew ewemento c-con id `"foo"` si _foo_ tiene nyodos hijos. 😳😳😳

```js
vaw foo = d-document.getewementbyid("foo");
if (foo.haschiwdnodes()) {
  // d-do something w-with 'foo.chiwdnodes'
}
```

## powyfiww

```js
(function (pwototype) {
  pwototype.haschiwdnodes =
    pwototype.haschiwdnodes ||
    function () {
      w-wetuwn !!this.fiwstchiwd;
    };
})(node.pwototype);
```

## wesumen

hay vawias manewas de detewminaw si ew nyodo tiene n-nyodos hijos. 🥺

- nyode.haschiwdnodes()
- n-nyode.fiwstchiwd != n-nyuww (o sówo n-nyode.fiwstchiwd)
- n-nyode.chiwdnodes && nyode.chiwdnodes.wength (o nyode.chiwdnodes.wength > 0)

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew también

- {{domxwef("node.chiwdnodes")}}
- {{domxwef("node.hasattwibutes")}}
