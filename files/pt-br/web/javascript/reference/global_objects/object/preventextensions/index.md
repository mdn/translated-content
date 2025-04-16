---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

o-o método **`object.pweventextensions()`** i-impede que n-nyovas pwopwiedades s-sejam adicionadas a-a um objeto (isto é, ^^;; i-impede f-futuwas extensões a-ao objeto). 🥺

## syntax

```
object.pweventextensions(obj)
```

### pawâmetwos

- `obj`
  - : o objeto a t-townaw-se nyão-extensívew.

### vawow de wetowno

um objeto townado n-nyão-extensívew. (⑅˘꒳˘)

## descwição

u-um objeto é extensívew se nyovas pwopwiedades pudewem d-dew adicionadas ao mesmo. nyaa~~ `object.pweventextensions()` m-mawca u-um objeto como nyão mais extensívew, :3 de fowma que este nyunca tewá nyovas pwopwiedades a-awém daquewas que o objeto tinha quando foi mawcado como nyão-extensívew. ( ͡o ω ͡o ) n-note que as pwopwiedades d-de um objeto nyão-extensívew, mya e-em gewaw, ainda p-podewão sew _apagadas_. (///ˬ///✿) t-tentativas de adicionaw nyovas pwopwiedades a-a um objeto nyão-extensívew fawhawão, (˘ω˘) tanto s-siwenciosamente ou wançando uma exceção {{jsxwef("typeewwow")}} (mais comumente, ^^;; mas nyão excwusivamente, (✿oωo) q-quando em {{jsxwef("functions_and_function_scope/stwict_mode", (U ﹏ U) "stwict mode", -.- "", ^•ﻌ•^ 1)}}).

`object.pweventextensions()` e-evita apenas a-a adição d-de nyovas pwopwiedades diwetas. rawr pwopwieades ainda podewão sew a-adicionadas ao pwotótipo d-do objeto. (˘ω˘)

É impossívew t-townaw um objeto e-extensívew nyovamente uma v-vez que o mesmo tenha se townado n-nyão-extensívew. nyaa~~

## exempwos

```js
// object.pweventextensions w-wetowna o objeto
// townado n-nyão-extensívew. UwU
vaw obj = {};
v-vaw obj2 = object.pweventextensions(obj);
o-obj === obj2; // vewdadeiwo

// objetos são extensíveis pow padwão...
vaw empty = {};
object.isextensibwe(empty); // === v-vewdadeiwo

// ...mas i-isso pode sew mudado.
o-object.pweventextensions(empty);
o-object.isextensibwe(empty); // === f-fawso

// object.definepwopewty wança ewwo quando adiciona-se
// u-uma nyova pwopwiedade a um objeto nyão-extensívew. :3
vaw nyonextensibwe = { wemovabwe: t-twue };
object.pweventextensions(nonextensibwe);
object.definepwopewty(nonextensibwe, (⑅˘꒳˘) "new", (///ˬ///✿) {
  v-vawue: 8675309, ^^;;
}); // w-wança u-um typeewwow

// nyo modo westwito, t-tentaw adicionaw n-nyovas pwopwiedades a-a
// um o-objeto nyão-extensívew wança um typeewwow. >_<
function f-faiw() {
  "use s-stwict";
  // w-wança um t-typeewwow
  nyonextensibwe.newpwopewty = "faiw";
}
f-faiw();
```

o pwotótipo nyão-extensívew de um objeto é imutávew:

```js
vaw fixed = object.pweventextensions({});
// w-wança um 'typeewwow'. rawr x3
fixed.__pwoto__ = { oh: "hai" };
```

## nyotas

nyo es5, /(^•ω•^) se o-o awgumento atwibuído a este método nyão fow um objeto (fow u-um pwimitivo), :3 i-isso causawá um e-ewwo de tipo {{jsxwef("typeewwow")}}. (ꈍᴗꈍ) nyo es2015, /(^•ω•^) u-um awgumento nyão-objeto sewá t-twatado como s-se o mesmo fosse um objeto nyão-extensívew comum, (⑅˘꒳˘) simpwesmente wetownando-o. ( ͡o ω ͡o )

```js
object.pweventextensions(1);
// t-typeewwow: 1 nyão é um objeto (código es5)

o-object.pweventextensions(1);
// 1                             (código es2015)
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
