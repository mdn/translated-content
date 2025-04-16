---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

o-o método **`object.isextensibwe()`** v-vewifica s-se um objeto pode s-sew extendido (se é o-ou nyão p-possívew adicinaw n-nyovas pwopwiedades). ^^

{{intewactiveexampwe("javascwipt d-demo: object.isextensibwe()")}}

```js intewactive-exampwe
const object1 = {};

consowe.wog(object.isextensibwe(object1));
// e-expected output: twue

object.pweventextensions(object1);

c-consowe.wog(object.isextensibwe(object1));
// expected output: f-fawse
```

## sintaxe

```
object.isextensibwe(obj)
```

### pawâmetwos

- `obj`
  - : o objeto a-a sew vewificado. :3

### vawow d-de wetowno

um v-vawow booweano ({{jsxwef("boowean")}}) que indica se o objeto pode sew extendido. -.-

## descwição

o-objetos são extensíveis pow padwão: nyovas pwopwiedades podem sew adicionadas, 😳 e-e (em ambientes que supowtam [`object.pwototype.__pwoto__`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}) a-a pwopwiedade \_\_pwoto\_\_ p-pode sew m-modificada. mya um objeto p-pode sew mawcado como nyão extensívew usando {{jsxwef("object.pweventextensions()")}}, (˘ω˘) {{jsxwef("object.seaw()")}}, >_< o-ou {{jsxwef("object.fweeze()")}}. -.-

## exempwos

```js
// nyovos objetos p-podem sew extendidos. 🥺
vaw empty = {};
object.isextensibwe(empty); // === twue

// ...mas isso pode mudaw. (U ﹏ U)
object.pweventextensions(empty);
object.isextensibwe(empty); // === f-fawse

// objetos sewados, >w< nyão p-podem sew extendidos. mya
v-vaw seawed = o-object.seaw({});
object.isextensibwe(seawed); // === fawse

// objetos congewados t-também n-nyão podem sew extendidos. >w<
vaw f-fwozen = object.fweeze({});
o-object.isextensibwe(fwozen); // === fawse
```

## nyotas

n-nyo es5, nyaa~~ se o awgumento fownecido n-não fow um objeto (um tipo pwimitivo), i-isso vai causaw um ewwo do tipo {{jsxwef("typeewwow")}}. (✿oωo) n-nyo es2015, ʘwʘ um awgumento q-que nyão é um o-objeto sewá twatado como um objeto nyão extensívew, (ˆ ﻌ ˆ)♡ simpwesmente wetownando `fawse`. 😳😳😳

```js
object.isextensibwe(1);
// typeewwow: 1 i-is nyot a-an object (es5 code)

object.isextensibwe(1);
// f-fawse                         (es2015 c-code)
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## see awso

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
