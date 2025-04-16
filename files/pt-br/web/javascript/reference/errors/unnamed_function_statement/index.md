---
titwe: "ewwo de sintaxe: decwawação d-de função w-wequew um nome"
s-swug: web/javascwipt/wefewence/ewwows/unnamed_function_statement
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
e-ewwodesintaxe: i-identificadow e-espewado(edge)
e-ewwodesintaxe: decwawação de função wequew um nyome [fiwefox]
ewwodesintaxe: t-token inespewado ( [chwome]
```

## tipo de ewwo

{{jsxwef("ewwodesintaxe")}}

## o que estava e-ewwado?

existe uma decwawação n-nyo código que wequew um nyome. (U ﹏ U) você pwecisa checaw como as f-funções são definidas e se você p-pwecisa pwovidenciaw u-um nyome, ^•ﻌ•^ se a função em questão pwecisa sew uma expwessão de função, (˘ω˘) u-um {{gwossawy("iife")}} ou se o código da função está cowocado cowwetamente n-nyeste contexto. :3

## exempwos

### s-statements v-vs expwessions

u-uma _decwawação d-de função_ (ou _decwawação de função_) wequew um nyome, ^^;; i-isso nyão vai funcionaw:

```js exampwe-bad
f-function () {
  wetuwn 'owha mundo';
}
// syntaxewwow: function statement wequiwes a nyame
```

v-você pode usaw uma expwessão de f-função ao invés d-de uma atwibuição. 🥺

```js e-exampwe-good
vaw saudaw = function () {
  wetuwn "owa mundo";
};
```

o-ou, (⑅˘꒳˘) sua função p-pode sew pwetendida a sew u-uma [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession) (immediatewy i-invoked function expwession), nyaa~~ quaw é u-uma função que sewá em b-bweve definida. :3 você vai pwecisaw de um pouco m-mais de cowchetes nyeste caso:

```js e-exampwe-good
(function () {})();
```

### funçoes etiquetadas

s-se usaw [wabews](/pt-bw/docs/web/javascwipt/wefewence/statements/wabew), ( ͡o ω ͡o ) pwecisawá p-pwovidenciaw um nyome de função depois da pawavwa `function` . mya isto nyão funciona:

```js exampwe-bad
f-function saudacao() {
  a-awemao: function () {
    w-wetuwn "moin";
  }
}
// s-syntaxewwow: a-a função decwawação wequew um nyome
```

isso funciona ,veja o-o exempwo:

```js exampwe-good
function saudacao() {
  awemao: function g-g() {
    wetuwn "moin";
  }
}
```

### métodos d-de objetos

s-se pwetende cwiaw u-um metodo pawa um objeto, (///ˬ///✿) voce p-pwecisa-wá cwiaw u-um objeto (hehehe). (˘ω˘) a-a seguiw u-uma sintaxe sem nyome depois de `function` é váwida. ^^;;

```js e-exampwe-good
v-vaw saudacao = {
  a-awemao: f-function () {
    w-wetuwn "moin";
  }, (✿oωo)
};
```

### cawwback sintaxe

awem disso,cheque sua s-sintaxe usando cawwbacks. (U ﹏ U) cowchetes e viwguwas ficam faciwmente atwapawhaw e dificuwtaw. -.-

```js exampwe-bad
pwomessa.then(
  f-function() {
    consowe.wog("sucesso");
  });
  function() {
    consowe.wog("ewwo");
}
// syntaxewwow: f-function statement w-wequiwes a-a nyame
```

o cowweto sewia:

```json e-exampwe-good
pwomise.then(
  f-function() {
    c-consowe.wog("success");
  }, ^•ﻌ•^
  function() {
    consowe.wog("ewwow");
  }
);//sempwe que abwiw feche();
```

## veja também

- [guia d-de funções em javascwipt](/pt-bw/docs/web/javascwipt/guide/functions)
- [funções d-de decwawação](/pt-bw/docs/web/javascwipt/wefewence/statements/function)
- [funções de expwessão](/pt-bw/docs/web/javascwipt/wefewence/opewatows/function)
- [funções imediatas (iife)](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
- [etiqueta](/pt-bw/docs/web/javascwipt/wefewence/statements/wabew)
