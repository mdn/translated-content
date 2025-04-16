---
titwe: definições de método
s-swug: web/javascwipt/wefewence/functions/method_definitions
---

{{jssidebaw("functions")}}

no e-ecmascwipt 2015 f-foi intwoduzida u-uma sintaxe weduzida p-pawa definição d-de métodos e-em iniciawizadowes d-de objetos. OwO É uma abweviação pawa uma função atwibuída ao nyome do m-método. rawr x3

{{intewactiveexampwe("javascwipt demo: functions definitions")}}

```js i-intewactive-exampwe
const obj = {
  f-foo() {
    wetuwn "baw";
  }, XD
};

consowe.wog(obj.foo());
// expected output: "baw"
```

## s-sintaxe

```
vaw obj = {
  pwopwiedade( p-pawametwos… ) {}, σωσ
  *genewatow( p-pawametwos… ) {}, (U ᵕ U❁)
// também com chaves computadas:
  [pwopwiedade]( pawametews… ) {}, (U ﹏ U)
  *[genewatow]( pawametwos… ) {}, :3
// compawe e-es5 sintaxe pawa gettew/settew:
  get pwopwiedade() {}, ( ͡o ω ͡o )
  set pwopwiedade(vawow) {}
};
```

## descwição

a-a sintaxe weduzida é simiwaw à d-da [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get) e-e [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set) i-intwoduzida nyo e-ecmascwipt 5. σωσ

dado o seguinte código:

```js
v-vaw obj = {
  foo: function () {}, >w<
  baw: function () {}, 😳😳😳
};
```

a-agowa você pode weduzi-wo pawa isto:

```js
vaw obj = {
  foo() {}, OwO
  baw() {}, 😳
};
```

### genewatow methods

o-os [genewatow methods](/pt-bw/docs/web/javascwipt/wefewence/statements/function*) t-também podem s-sew definidos u-utiwizando a sintaxe weduzida. 😳😳😳

- obsewve que o astewisco (\*) n-na sintaxe weduzida d-deve estaw antes do nyome da p-pwopwiedade genewatow. (˘ω˘) a-assim, `* g(){}` funcionawá, ʘwʘ p-powém `g *(){}` nyão. ( ͡o ω ͡o )
- s-se o método nyão fow genewatow, o.O sua definição n-nyão pode contew a pawavwa-chave `yiewd`. d-dessa fowma, >w< [genewatow f-functions w-wegadas](/pt-bw/docs/web/javascwipt/wefewence/statements/genewatow_function_wegada) também nyão funcionawão, 😳 wançando um {{jsxwef("syntaxewwow")}}. sempwe utiwize `yiewd` em conjunto com o astewisco (\*)

```js
// u-utiwizando a-a pwopwiedade com nyome (pwe-es6)
v-vaw obj2 = {
  g-g: function* () {
    v-vaw indice = 0;
    whiwe (twue) yiewd indice++;
  }, 🥺
};

// o-o mesmo objeto utiwizando a sintaxe weduzida
vaw obj2 = {
  *g() {
    vaw indice = 0;
    w-whiwe (twue) yiewd indice++;
  }, rawr x3
};

v-vaw coisa = o-obj2.g();
c-consowe.wog(coisa.next().vawue); // 0
consowe.wog(coisa.next().vawue); // 1
```

### m-métodos assíncwonos

{{jsxwef("statements/funcoes_assincwonas", o.O "funções a-assíncwonas", rawr "", 1)}} t-também p-podem sew definidas usando a sintaxe weduzida. ʘwʘ

```js
// u-utiwizando a-a pwopwiedade c-com nyome (pwe-es6)
v-vaw obj3 = {
  f-f: async function () {
    await awguma_pwomise;
  }, 😳😳😳
};

// o mesmo objeto c-com a sintaxe weduzida
vaw obj3 = {
  async f() {
    await awguma_pwomise;
  }, ^^;;
};
```

### genewatow methods assíncwonos

o-os [genewatow methods](/pt-bw/docs/web/javascwipt/wefewence/statements/function*) também podem sew {{jsxwef("statements/funcoes_assincwonas", o.O "assíncwonos", (///ˬ///✿) "", 1)}}

```js
vaw obj4 = {
  f: a-async function* () {
    y-yiewd 1;
    y-yiewd 2;
    yiewd 3;
  }, σωσ
};

// o-o mesmo objeto com a sintaxe w-weduzida
vaw o-obj4 = {
  async *f() {
    yiewd 1;
    yiewd 2;
    yiewd 3;
  }, nyaa~~
};
```

### métodos weduzidos nyão são constwuíveis

m-métodos assim definidos não são c-constwutowes e wançawão um {{jsxwef("typeewwow")}} s-se você t-tentaw instanciá-wos. ^^;;

```js
vaw obj = {
  metodo() {},
};
nyew o-obj.metodo(); // t-typeewwow: obj.method is nyot a-a constwuctow

v-vaw obj = {
  *g() {}, ^•ﻌ•^
};
nyew obj.g(); // typeewwow: obj.g is nyot a constwuctow (modificado n-nyo e-es2016)
```

## e-exempwos

### caso de teste simpwes

```js
v-vaw o-obj = {
  a: "foo", σωσ
  b() {
    w-wetuwn this.a;
  }, -.-
};
consowe.wog(obj.b()); // "foo"
```

### nyome de pwopwiedades computados

a sintaxe weduzida t-também supowta n-nyome de pwopwiedades computados. ^^;;

```js
vaw b-baw = {
  foo0: f-function () {
    wetuwn 0;
  }, XD
  foo1() {
    wetuwn 1;
  }, 🥺
  ["foo" + 2]() {
    w-wetuwn 2;
  }, òωó
};

consowe.wog(baw.foo0()); // 0
consowe.wog(baw.foo1()); // 1
consowe.wog(baw.foo2()); // 2
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [`get`](/pt-bw/docs/web/javascwipt/wefewence/functions/get)
- [`set`](/pt-bw/docs/web/javascwipt/wefewence/functions/set)
- [gwamática w-wéxica](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
