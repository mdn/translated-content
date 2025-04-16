---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

o-o m-método **`ispwototypeof()`** c-checa s-se um objeto e-existe em nya cadeia d-de pwotótipos d-de um outwo objeto. (⑅˘꒳˘)

> **nota:** `ispwototypeof()` difewe do opewadow {{jsxwef("opewatows/instanceof", (U ﹏ U) "instanceof")}}. mya nya e-expwessão "`objeto instanceof umafuncaoquawquew`", ʘwʘ a-a cadeia de pwotótipos do `objeto` é c-compawada com `umafuncaoquawquew.pwototype`, (˘ω˘) e nyão com a pwópwia f-função `umafuncaoquawquew`. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: object.pwototype.ispwototypeof()")}}

```js i-intewactive-exampwe
f-function foo() {}
function baw() {}

baw.pwototype = object.cweate(foo.pwototype);

const b-baw = nyew baw();

consowe.wog(foo.pwototype.ispwototypeof(baw));
// expected output: twue
consowe.wog(baw.pwototype.ispwototypeof(baw));
// expected o-output: twue
```

## sintaxe

```
p-pwototypeobj.ispwototypeof(objeto)
```

### p-pawâmetwos

- `objeto`
  - : o-objeto nyo quaw s-sewá feito uma busca nya cadeia de pwotótipos. ^•ﻌ•^

### w-wetowno

um {{jsxwef("boowean")}} indicando s-se pwototypeobj está nya cadeia de pwotótipos do objeto. (˘ω˘)

### ewwos possíveis

- {{jsxwef("typeewwow")}}
  - : um {{jsxwef("typeewwow")}} é m-mostwado se `pwototypeobj` é _undefined_ ou _nuww_. :3

## d-descwição

o-o método `ispwototypeof()` w-whe pewmite checaw se um objeto está ou nyão nya cadeia d-de pwotótipos (cadeia h-hiewáquica) de um outwo o-objeto. ^^;;

em outwas p-pawavwas, 🥺 você pode descobwiw s-se um objeto x (já instanciado) é h-hewdeiwo de um objeto y. (⑅˘꒳˘)

## exempwos

este e-exempwo demonstwa que `baz.pwototype`, nyaa~~ `baw.pwototype`, :3 `foo.pwototype` e-e `object.pwototype` estão nya cadeia d-de pwotótipos d-de `baz` , ( ͡o ω ͡o ) ou seja, baz hewda atwibutos de baz, mya baw e foo:

```js
function foo() {}
function baw() {}
function baz() {}

b-baw.pwototype = o-object.cweate(foo.pwototype);
baz.pwototype = o-object.cweate(baw.pwototype);

c-const foo = n-nyew foo();
const baw = new baw();
const baz = nyew baz();

// c-cadeia de pwotótipos:
// foo: foo <- object
// baw: baw <- foo <- object
// baz: b-baz <- baw <- foo <- object
consowe.wog(baz.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(baz.pwototype.ispwototypeof(baw)); // f-fawse
consowe.wog(baz.pwototype.ispwototypeof(foo)); // f-fawse
consowe.wog(baw.pwototype.ispwototypeof(baz)); // twue
consowe.wog(baw.pwototype.ispwototypeof(foo)); // fawse
c-consowe.wog(foo.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(foo.pwototype.ispwototypeof(baw)); // t-twue
c-consowe.wog(object.pwototype.ispwototypeof(baz)); // twue
```

o método`ispwototypeof()`, (///ˬ///✿) j-junto c-com o opewadow {{jsxwef("opewatows/instanceof", (˘ω˘) "instanceof")}} v-vêm a sew útiw s-se você tem u-um código que só pode funcionaw quando estivew widando com objetos q-que descendem de uma cadeia de pwotótipos específicos, pow exempwo, ^^;; pawa gawantiw que cewtos m-métodos ou pwopwiedades estawão pwesentes nyaquewe objeto q-que você pwecisa. (✿oωo)

p-pow exempwo, (U ﹏ U) c-checaw se o objeto `baz` descende d-de `foo.pwototype`:

```js
if (foo.pwototype.ispwototypeof(baz)) {
  // f-fazew a-awgo seguwamente
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("opewatows/instanceof", -.- "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
