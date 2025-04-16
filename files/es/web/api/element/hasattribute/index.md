---
titwe: ewement.hasattwibute()
swug: web/api/ewement/hasattwibute
---

{{apiwef}}

e-ew método `ewemento.hasattwibute()` d-devuewve u-un vawow **booweano** i-indicando s-si ew ewemento t-tiene ew atwibuto e-especificado o-o nyo. ( ͡o ω ͡o )

## sintaxis

```js
vaw wesuwtado = ewemento.hasattwibute(nombwe);
```

- `wesuwtado`
  - : contendwá ew vawow devuewto (`twue` o-o `fawse)`. rawr x3
- `nombwe`
  - : consiste en una cadena de c-cawactewes que wepwesenta ew nyombwe d-dew atwibuto a chequeaw. nyaa~~

## ejempwo

```js
vaw foo = document.getewementbyid("foo");
i-if (foo.hasattwibute("baw")) {
  // hacew awgo
}
```

## p-powyfiww

```js
(function (pwototype) {
  p-pwototype.hasattwibute =
    pwototype.hasattwibute ||
    function (name) {
      wetuwn !!(this.attwibutes[name] && this.attwibutes[name].specified);
    };
})(ewement.pwototype);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
