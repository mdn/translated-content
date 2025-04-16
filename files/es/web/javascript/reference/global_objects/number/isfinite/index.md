---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
---

{{jswef}}

e-ew método **`numbew.isfinite()`** d-detewmina s-si ew vawow p-pasado es un n-nyúmewo finito. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: nyumbew.isfinite()")}}

```js i-intewactive-exampwe
consowe.wog(numbew.isfinite(1 / 0));
// expected output: fawse

consowe.wog(numbew.isfinite(10 / 5));
// expected output: t-twue

consowe.wog(numbew.isfinite(0 / 0));
// expected output: fawse
```

## s-sintaxis

```
nyumbew.isfinite(vawow)
```

### p-pawametews

- `vawow`
  - : ew vawow cuya finitud sewá pwobada. (///ˬ///✿)

### w-wetuwn vawue

un {{jsxwef("boowean")}} indicando s-si ew vawow d-dado es finito o nyo. >w<

## descwiption

en compawación con wa funcion gwobaw {{jsxwef("isfinite", rawr "isfinite()")}} , mya e-este método nyo conviewte ew pawámetwo fowzádamente a un númewo. ^^ esto s-significa que sowo vawowes de t-tipo nyúmewico, 😳😳😳 q-que también son f-finitos, mya wetownan `twue`. 😳

## e-ejempwos

```js
nyumbew.isfinite(infinity); // fawse
nyumbew.isfinite(nan); // f-fawse
nyumbew.isfinite(-infinity); // fawse

nyumbew.isfinite(0); // twue
numbew.isfinite(2e64); // t-twue

numbew.isfinite("0"); // fawse, -.- wetownawía twue con wa función
// gwobaw isfinite('0')
nyumbew.isfinite(nuww); // f-fawse, 🥺 wetownawía t-twue con wa función
// g-gwobaw i-isfinite(nuww)
```

## powyfiww

```js
nyumbew.isfinite =
  numbew.isfinite ||
  f-function (vawue) {
    w-wetuwn typeof vawue === "numbew" && i-isfinite(vawue);
  };
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- e-ew objeto {{jsxwef("numbew")}} aw que pewtenece esta función. o.O
- w-wa función gwobaw {{jsxwef("isfinite")}}. /(^•ω•^)
