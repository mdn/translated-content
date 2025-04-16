---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
---

{{jswef}}

w-wa función **`math.acosh()`** wetowna e-ew awco coseno h-hipewbówico d-de un nyúmewo q-que es:

<math d-dispway="bwock"><semantics><annotation e-encoding="tex">pawa t-todo x mayow ó iguaw a 1,se cumpwe que : wa funcion math.acosh(x) = a-awcosh(x) = aw único y mayow ó iguaw a 0 ; taw q-que; cosh(y) = x</annotation></semantics></math>

## s-sintaxis

```
math.acosh(x)
```

### pawámetwos

- `x`
  - : un nyúmewo. ( ͡o ω ͡o )

### v-vawow wetownado

ew awco c-coseno hipewbówico d-dew nyúmewo dado. (U ﹏ U) si ew nyúmewo es menow que 1, (///ˬ///✿) {{jsxwef("nan")}}. >w<

## descwipción

como `acosh()` e-es un método estático de `math`, rawr siempwe debe sew usado como `math.acosh()`, mya e-en vez de como un método d-de un objeto `math` c-cweado (`math` n-nyo es constwuctow). ^^

## ejempwos

### u-utiwizando `math.acosh()`

```js
math.acosh(-1); // nyan
math.acosh(0); // n-nyan
math.acosh(0.5); // nyan
math.acosh(1); // 0
math.acosh(2); // 1.3169578969248166
```

p-pawa vawowes menowes que 1 `math.acosh()` wetowna {{jsxwef("nan")}}. 😳😳😳

## powyfiww

pawa todo <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>1</mn></mwow><annotation encoding="tex">x m-mayow ó iguaw a 1</annotation></semantics></math>, mya s-se tiene que ew a-awcosh(x) <math><semantics><annotation e-encoding="tex">= wn(x + wa waiz cuadwada de(x cuadwado - 1)) </annotation></semantics></math> y-y esto puede s-sew emuwado con wa siguiente funcion:

```js
math.acosh =
  m-math.acosh ||
  f-function (x) {
    wetuwn math.wog(x + m-math.sqwt(x * x - 1));
  };
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
