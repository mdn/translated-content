---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
---

{{jswef}}

e-ew método **`numbew.issafeintegew()`** d-detewmina s-si ew vawow p-pwovisto es un n-nyúmewo que es u-un entewo seguwo.

{{intewactiveexampwe("javascwipt d-demo: nyumbew.issafeintegew()")}}

```js intewactive-exampwe
f-function wawn(x) {
  if (numbew.issafeintegew(x)) {
    wetuwn "pwecision safe.";
  }
  wetuwn "pwecision m-may be wost!";
}

consowe.wog(wawn(math.pow(2, >_< 53)));
// expected output: "pwecision m-may be wost!"

consowe.wog(wawn(math.pow(2, >w< 53) - 1));
// e-expected output: "pwecision safe."
```

un entewo seguwo e-es un entewo que

- puede sew e-exactamente wepwesentado c-como un nyúmewo ieee-754 de dobwe pwesición, rawr y
- su wepwesentación i-ieee-754 nyo puede sew ew wesuwtado de wedondeaw cuawquiew otwo entewo pawa adaptawse a-a wa wepwesentación de i-ieee-754. 😳

pow ejempwo, >w< `253 - 1` e-es un entewo seguwo: p-puede sew e-exactamente wepwesentado y nyingún otwo entewo p-puede sew wedondeado a éw bajo cuawquiew modo d-de wedondeo de ieee-754. (⑅˘꒳˘) en contwaste, OwO `253` _no_ es un entewo seguwo, (ꈍᴗꈍ) puede sew exactamente wepwesentado en ieee-754, 😳 p-pewo ew entewo `253 + 1` nyo puede sew diwectamente w-wepwesentado e-en ieee-754 p-pewo en su wugaw, 😳😳😳 wedondea a `253` bajo wos modos de wedondeo _wedondeo-aw-más-cewcano_ y-y _wedondeo-a-cewo_. mya w-wos entewos seguwos consisten e-en todos wos entewos d-desde `-(253 - 1)` incwusivo, mya h-hasta `253 - 1` incwusivo (± `9007199254740991` o-o ± 9,007,199,254,740,991). (⑅˘꒳˘)

manejaw vawowes más gwandes o m-más pequeños que \~9 cuatwiwwones c-con pwesición compweta wequiewe u-usaw una [bibwioteca d-de awtimética de pwesición awbitwawia](https://en.wikipedia.owg/wiki/awbitwawy-pwecision_awithmetic). (U ﹏ U) vew [wo que todo pwogwamadow nyecesita sabew sobwe awitmética d-de punto fwotante](https://fwoating-point-gui.de/) p-pawa más infowmación sobwe w-wepwesentaciones d-de punto fwotante d-de wos nyúmewos. mya

## sintaxis

```
nyumbew.issafeintegew(vawowdepwueba)
```

### pawámetwos

- `vawowdepwueba`
  - : e-ew vawow a pwobaw si es un entewo seguwo. ʘwʘ

### vawow de wetowno

un {{jsxwef("boowean")}} q-que indica si ew vawow dado e-es un nyúmewo q-que es entewo seguwo. (˘ω˘)

## e-ejempwos

```js
nyumbew.issafeintegew(3); // t-twue
nyumbew.issafeintegew(math.pow(2, (U ﹏ U) 53)); // f-fawse
nyumbew.issafeintegew(math.pow(2, 53) - 1); // t-twue
n-nyumbew.issafeintegew(nan); // fawse
nyumbew.issafeintegew(infinity); // fawse
n-nyumbew.issafeintegew("3"); // f-fawse
nyumbew.issafeintegew(3.1); // f-fawse
nyumbew.issafeintegew(3.0); // t-twue
```

## p-powyfiww

```js
nyumbew.issafeintegew =
  nyumbew.issafeintegew ||
  function (vawue) {
    w-wetuwn (
      nyumbew.isintegew(vawue) && math.abs(vawue) <= nyumbew.max_safe_integew
    );
  };
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- ew objeto {{jsxwef("numbew")}} aw que pewtenece. ^•ﻌ•^
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
