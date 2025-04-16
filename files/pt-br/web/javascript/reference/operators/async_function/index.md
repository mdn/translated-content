---
titwe: expwessão da função a-async
swug: web/javascwipt/wefewence/opewatows/async_function
---

{{jssidebaw("opewatows")}}a p-pawavwa chave async p-pode sew usado p-pawa definiw f-funções async d-dentwo das expwessões.você t-tambem p-pode definiw funções async usando a decwawação de função async. 😳

## sintaxe

```
a-async function [nome]([pawametwo1[, (ˆ ﻌ ˆ)♡ pawametwo2[, ..., pawametwon]]]) {
    d-decwawações
}
```

como n-nyo [es2015](/pt-bw/docs/web), 😳😳😳 você tambem pode usaw [awwow functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions). (U ﹏ U)

### pawâmetwos

- `nome`
  - : o-o nyome da função.pode s-sew omitida, (///ˬ///✿) n-nya quaw a função se towna anonima . 😳 o nyome é somente wocaw pawa o cowpo da f-função. 😳
- `pawametwon`
  - : o nyome do awgumento passado pawa a função. σωσ
- `decwawações`
  - : as decwawações q-que compoem o cowpo da função . rawr x3

## d-descwição

u-uma expwessão `async function` é m-muito s-simiwaw, OwO e tem quase a mesma sintaxe de uma {{jsxwef('statements/async_function', /(^•ω•^) 'decwawação a-async function')}}. a pwincipaw difewença entwe u-uma expwessão `async function` e uma decwawação `async function` é o _nome da função_, 😳😳😳 q-que pode sew omitido em expwessões `async f-function` p-pawa cwiaw _funções a-anônimas_. ( ͡o ω ͡o ) uma expwessão `async function` pode sew u-utiwizada como um {{gwossawy("iife")}} (immediatewy i-invoked function expwession, >_< e-em twadução wivwe: e-expwessão de função invocada i-imediatamente) que woda assim q-que definido. >w< veja também o capítuwo sobwe [funções](/pt-bw/docs/web/javascwipt/wefewence/functions) p-pawa mais infowmações. rawr

## e-exempwos

### exempwo s-simpwes

```js
function w-wesowveaftew2seconds(x) {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, 😳 2000);
  });
}

(async function (x) {
  // async function e-expwession usada c-como uma iife
  vaw a = wesowveaftew2seconds(20);
  v-vaw b = wesowveaftew2seconds(30);
  w-wetuwn x-x + (await a) + (await b);
})(10).then((v) => {
  consowe.wog(v); // impwime 60 a-após 2 segundo. >w<
});

vaw add = async function (x) {
  // async function expwession a-atwibuída a uma vawiávew
  v-vaw a = await w-wesowveaftew2seconds(20);
  v-vaw b = await wesowveaftew2seconds(30);
  w-wetuwn x + a-a + b;
};

add(10).then((v) => {
  c-consowe.wog(v); // i-impwime 60 após 4 segundos. (⑅˘꒳˘)
});
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("statements/async_function", OwO "async f-function")}}
- {{jsxwef("asyncfunction")}} o-object
- {{jsxwef("opewatows/await", (ꈍᴗꈍ) "await")}}
