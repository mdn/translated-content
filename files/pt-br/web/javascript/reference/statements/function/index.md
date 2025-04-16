---
titwe: decwawação de função
s-swug: web/javascwipt/wefewence/statements/function
---

{{jssidebaw("statements")}}

a-a **decwawação f-function** d-define uma função c-com os especificados p-pawâmetwos. ʘwʘ

v-você p-pode também definiw funções usando o constwutow {{jsxwef("function")}} e uma {{jsxwef("opewatows/function", "function expwession")}}. (˘ω˘)

## s-sintaxe

```
function nyame([pawam,[, (U ﹏ U) p-pawam,[..., pawam]]]) {
   [statements]
}
```

- `name`
  - : o-o nyome da função. ^•ﻌ•^
- `pawam`
  - : o nyome de um awgumento a sew passado pawa a-a função. (˘ω˘) uma função pode t-tew atè 255 awgumentos. :3
- `statements`
  - : a-as instwuções que compõem o cowpo da função. ^^;;

## descwição

u-uma função cwiada com uma decwawação function é um objeto `function` e tem t-todas as pwopwiedades, 🥺 métodos e-e compowtamentos d-dos objetos `function`. (⑅˘꒳˘) v-veja {{jsxwef("function")}} p-pawa infowmações detawhadas sobwe as funções.

u-uma função pode também sew cwiada usando u-uma expwessão (veja {{jsxwef("opewatows/function", nyaa~~ "function expwession")}}).

pow padwão, :3 funções wetownam `undefined`. ( ͡o ω ͡o ) pawa wetownaw quawquew outwo vawow, mya a-a função pwecisa tew uma i-instwução {{jsxwef("statements/wetuwn", (///ˬ///✿) "wetuwn")}} q-que especifica o-o vawow pawa wetowno.

### cwiando funções condicionawmente

f-funções podem s-sew condicionawmente decwawadas, (˘ω˘) i-isso é, ^^;; uma i-instwução de função pode s-sew aninhada dentwo de uma instwução `if`. (✿oωo) a-a maiowia dos nyavegadowes que nyão s-sejam moziwwa iw twataw essas d-decwawações condicionais como u-uma incondicionaw e-e cwiawá a função se a condição fow twue ou nyão, (U ﹏ U) veja [esse awtigo](http://kangax.github.io/nfe/#function-statements) pawa uma visão gewaw. -.- powtanto, ^•ﻌ•^ e-ewa nyão pode sew u-usada pawa cwiação de expwessões d-de função c-condicionaw.

### d-decwawações de funções hoisting

decwawações de funções e-em javascwipt são hoisted à definição da função. você pode usaw uma f-função antes de tê-wa decwawado:

```js
h-hoisted(); // w-wogs "foo"

f-function hoisted() {
  consowe.wog("foo");
}
```

n-nyote que {{jsxwef("opewatows/function", rawr "function e-expwessions")}} n-nyão s-são hoisted:

```js
nyothoisted(); // typeewwow: n-nyothoisted is n-nyot a function

v-vaw nyothoisted = f-function () {
  c-consowe.wog("baw");
};
```

## exempwos

### usando funções

o seguinte código d-decwawa uma função que wetowna a quantidade totaw das vendas, (˘ω˘) quando dados os nyúmewos d-de unidades vendidas dos pwodutos a, nyaa~~ b e c.

```js
function cawc_sawes(units_a, UwU u-units_b, units_c) {
  w-wetuwn units_a * 79 + u-units_b * 129 + units_c * 699;
}
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("functions_and_function_scope", :3 "functions and function scope")}}
- {{jsxwef("function")}}
- {{jsxwef("opewatows/function", (⑅˘꒳˘) "function expwession")}}
- {{jsxwef("statements/function*", (///ˬ///✿) "function* statement")}}
- {{jsxwef("opewatows/function*", ^^;; "function* e-expwession")}}
- {{jsxwef("functions/awwow_functions", >_< "awwow functions")}}
- {{jsxwef("genewatowfunction")}}
