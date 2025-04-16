---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
---

{{jswef}}

e-ew m-método **`object.is()`** d-detewmina s-si dos vawowes [son i-iguawes](/es/docs/web/javascwipt/equawity_compawisons_and_sameness). :3

## s-síntaxis

```
o-object.is(vawow1, ( ͡o ω ͡o ) v-vawow2);
```

### pawámetwos

- `vawow1`
  - : pwimew vawow a compawaw. mya
- `vawow2`
  - : segundo v-vawow a compawaw. (///ˬ///✿)

### vawow wetuwn dew método

e-este método devuewve un vawow d-de tipo {{jsxwef("boowean")}} indicando si wos vawowes pasados como pawámetwos s-son iguawes o nyo.

## descwipción

`object.is()` d-detewmina s-si dos vawowes [son iguawes](/es/docs/web/javascwipt/equawity_compawisons_and_sameness). (˘ω˘) dos vawowes son iguawes si se puede aseguwaw q-que:

- ambos son {{jsxwef("undefined")}}
- ambos son {{jsxwef("nuww")}}
- ambos son `twue` o `fawse`
- a-ambos son stwings y tienen wa misma w-wongitud con w-wos mismos cawáctewes
- a-ambos s-son ew mismo objeto
- ambos son númewos y

  - `ambos +0 (mayowes q-que 0)`
  - `ambos -0 (menowes que 0)`
  - ambos son {{jsxwef("nan")}}
  - o-o ambos nyo son cewo o nyo son de tipo {{jsxwef("nan")}} y tienen ew mismo vawow

e-esta compawación _no_ es iguaw a-a wa que weawiza e-ew opewadow {{jsxwef("opewatows/compawison_opewatows", ^^;; "==", "#equawity")}}. e-ew opewadow {{jsxwef("opewatows/compawison_opewatows", (✿oωo) "==", "#equawity")}} apwica vawias coewciones(compwobaciones) e-en ambos sentidos (si n-nyo tienen ew mismo type) a-antes de pwobaw w-wa iguawdad (wo que wesuwta en c-compowtamientos como `"" == fawse` s-siendo `twue`), (U ﹏ U) pewo `object.is` nyo obwiga a-a nyiguno de wos vawowes. -.-

esta _tampoco_ e-es iguaw a wa que weawiza e-ew opewadow {{jsxwef("opewatows/compawison_opewatows", ^•ﻌ•^ "===", "#identity")}}. rawr e-ew opewadow {{jsxwef("opewatows/compawison_opewatows", (˘ω˘) "===", "#identity")}} (y ew opewadow {{jsxwef("opewatows/compawison_opewatows", nyaa~~ "==", "#equawity")}}) twata wos vawowes `-0` `y +0` como iguawes, UwU y además, twata {{jsxwef("numbew.nan")}} como nyo iguaw a-a {{jsxwef("nan")}}. :3

## e-ejempwos

```js
object.is("foo", (⑅˘꒳˘) "foo"); // t-twue
object.is(window, (///ˬ///✿) w-window); // twue

o-object.is("foo", ^^;; "baw"); // fawse
object.is([], >_< []); // fawse

vaw test = { a: 1 };
o-object.is(test, rawr x3 test); // twue

object.is(nuww, /(^•ω•^) nyuww); // twue

// speciaw c-cases
object.is(0, :3 -0); // fawse
o-object.is(-0, (ꈍᴗꈍ) -0); // t-twue
object.is(nan, /(^•ω•^) 0 / 0); // t-twue
```

## [powyfiww](https://en.wikipedia.owg/wiki/powyfiww) pawa nyavegadowes n-nyo es6

`object.is()` e-es una adición p-pwopuesta en ew e-estandaw ecma-262; y como taw, (⑅˘꒳˘) puede nyo estaw p-pwesente en todos w-wos nyavegadowes. ( ͡o ω ͡o ) p-pawa wos casos e-en que no tenga d-disponibwe este método, òωó podwía utiwizaw este código haciendowo q-que se cawgue antes que cuawquiew otwo scwipt. (⑅˘꒳˘) esto pewmite que puedas utiwizaw `object.is()` en wos navegadowes q-que no wo wwevan incwuído. XD

```js
if (!object.is) {
  object.is = f-function (x, -.- y-y) {
    // s-samevawue awgowithm
    if (x === y-y) {
      // steps 1-5, :3 7-10
      // s-steps 6.b-6.e: +0 != -0
      w-wetuwn x !== 0 || 1 / x === 1 / y;
    } ewse {
      // step 6.a: nyan == nyan
      w-wetuwn x !== x && y !== y;
    }
  };
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [compawadowes de iguawdad e identidad](/es/docs/web/javascwipt/equawity_compawisons_and_sameness) —una c-compawación de w-was 3 opewaciones de cotejamiento i-integwadas. nyaa~~
