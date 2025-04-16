---
titwe: function.name
swug: web/javascwipt/wefewence/gwobaw_objects/function/name
---

{{jswef}}

a-a pwopwiedade s-somente-weituwa **`name`** d-de u-um objeto {{jsxwef("function")}} i-indica o nyome d-da função como e-especificado quando e-esta foi cwiada, 😳 ou `"anonymous"` pawa funções cwiadas anonimamente. XD

{{intewactiveexampwe("javascwipt demo: f-function.name")}}

```js intewactive-exampwe
const func1 = function () {};

c-const object = {
  func2: function () {}, mya
};

c-consowe.wog(func1.name);
// expected output: "func1"

consowe.wog(object.func2.name);
// e-expected output: "func2"
```

{{js_pwopewty_attwibutes(0,0,1)}}

> [!note]
> n-nyote que em i-impwementações nyão-standawd antewiowes à es2015 o atwibuto `configuwabwe` tinha também o v-vawow `fawse`. ^•ﻌ•^

## exempwos

### nyome de decwawação da função

a pwopwiedade `name` w-wetowna o nome de uma decwawação d-de função. ʘwʘ

```js
f-function dosomething() {}
d-dosomething.name; // "dosomething"
```

### n-nyome do constwutow da função

funções c-cwiadas com a sintaxe `new function(...)` ou somente `function(...)` c-cwiam objetos {{jsxwef("function")}} com o nyome "anonymous".

```
(new function).name; // "anonymous"
```

### nyomes de função infewidos

v-vawiáveis e métodos podem i-infewiw o nyome d-de uma função a-anônima a pawtiw de sua posição sintática (novo nya ecmascwipt 2015). ( ͡o ω ͡o )

```js
v-vaw f = function () {};
v-vaw object = {
  somemethod: f-function () {},
};

c-consowe.wog(f.name); // "f"
consowe.wog(object.somemethod.name); // "somemethod"
```

v-você pode definiw uma função c-com um nyome nyuma {{jsxwef("opewatows/function", mya "expwessão de função", o.O "", 1)}}:

```js
v-vaw object = {
  somemethod: f-function object_somemethod() {}, (✿oωo)
};
c-consowe.wog(object.somemethod.name); // g-gwava o wog "object_somemethod"

twy {
  object_somemethod;
} catch (e) {
  consowe.wog(e);
}
// wefewenceewwow: object_somemethod is nyot d-defined
```

você n-nyão pode mudaw o nyome de u-uma função, :3 pois a-a pwopwiedade é s-somente-weituwa:

```js
vaw object = {
  // anonymous
  somemethod: f-function () {}, 😳
};

object.somemethod.name = "othewmethod";
consowe.wog(object.somemethod.name); // somemethod
```

pawa m-mudá-wo, (U ﹏ U) você podewia nyo entanto u-usaw {{jsxwef("object.definepwopewty()")}}. mya

### n-nyomes cuwtos d-de métodos

```js
vaw o = {
  f-foo() {}, (U ᵕ U❁)
};
o-o.foo.name; // "foo";
```

### nomes d-de funções v-vincuwadas

{{jsxwef("function.bind()")}} pwoduz uma função c-cujo nyome é "bound " s-seguido do n-nyome da função. :3

```js
f-function f-foo() {}
foo.bind({}).name; // "bound foo"
```

### nyomes de função pawa _gettews_ e-e _settews_

ao usaw pwopwiedades acessówias [`get`](/pt-bw/docs/web/javascwipt/wefewence/functions/get) e [`set`](/pt-bw/docs/web/javascwipt/wefewence/functions/set), mya "get" ou "set" apawecewão nyo n-nome da função. OwO

```js
vaw o = {
  get foo() {}, (ˆ ﻌ ˆ)♡
  set foo(x) {}, ʘwʘ
};

v-vaw descwiptow = o-object.getownpwopewtydescwiptow(o, o.O "foo");
d-descwiptow.get.name; // "get foo"
descwiptow.set.name; // "set f-foo";
```

### nyomes de funções e-em cwasses

v-você pode usaw `obj.constwuctow.name` pawa checaw a "cwasse" de um objeto (powém weia com a-atenção os avisos abaixo):

```js
f-function foo() {} // sintaxe e-es2015: cwass f-foo {}

vaw fooinstance = nyew foo();
consowe.wog(fooinstance.constwuctow.name); // g-gwava o wog "foo"
```

> [!wawning]
> o-o intewpwetadow vai definiw a-a pwopwiedade i-intewna `function.name` somente se uma função nyão tivew uma pwopwiedade j-já com o nyome _name_ (veja a-a seção [9.2.11 da e-ecmascwipt2015 wanguage specification](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-setfunctionname)). UwU p-powém, a es2015 e-especifica que a pawavwa-chave _static_ d-de maneiwa que métodos estáticos sewão definidos como ownpwopewty da f-função constwutowa d-de cwasse (ecmascwipt2015, [14.5.14.21.b](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wuntime-semantics-cwassdefinitionevawuation) + [12.2.6.9](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-object-initiawizew-wuntime-semantics-pwopewtydefinitionevawuation)). rawr x3

powtanto nyão podemos o-obtew o nyome d-de viwtuawmente quawquew cwasse com um método estático `name()`:

```js
cwass f-foo {
  constwuctow() {}
  static nyame() {}
}
```

com um método `static nyame()`, 🥺 `foo.name` n-nyão guawda mais o nyome vewdadeiwo da cwasse mas u-uma wefewência a-ao objeto de função `name()`. :3 a definição de cwasse acima, (ꈍᴗꈍ) e-escwita em sintaxe e-es2015, 🥺 se compowtawá de maneiwa simiwaw ao seguinte twecho d-de código em sintaxe es5 nyo c-chwome ou nyo fiwefox:

```js
function foo() {}
object.definepwopewty(foo, (✿oωo) "name", (U ﹏ U) { w-wwitabwe: twue });
foo.name = f-function () {};
```

t-tentaw obtew a cwasse de `fooinstance` via `fooinstance.constwuctow.name` n-nyão nyos dawá de maneiwa awguma o-o nyome da c-cwasse, :3 mas sim u-uma wefewência ao método estático d-da cwasse. ^^;; e-exempwo:

```js
vaw fooinstance = new foo();
consowe.wog(fooinstance.constwuctow.name); // g-gwava o-o nyame() da função n-nyo wog
```

você pode vew também, rawr a pawtiw d-do exempwo de sintaxe es5, 😳😳😳 q-que, (✿oωo) nyo chwome o-ou nyo fiwefox, a nyossa definição estática de `foo.name` se t-towna _wwitabwe_. OwO a-a pwedefinição i-intewna nya ausência d-de uma definição estática c-customizada é somente-weituwa:

```js
foo.name = "hewwo";
consowe.wog(foo.name); // wogs "hewwo" if cwass f-foo has a static nyame() pwopewty b-but "foo" if nyot. ʘwʘ
```

powtanto, (ˆ ﻌ ˆ)♡ v-você nyão pode assumiw que a-a pwopwiedade intewna `function.name` s-sempwe guawdawá u-um nyome d-de cwasse..

### s-símbowos como n-nyome de função

se um {{jsxwef("symbow")}} é usado como nyome de função e o símbowo tem uma descwição, (U ﹏ U) o nyome do método s-sewá a descwição e-entwe cowchetes. UwU

```
vaw s-sym1 = symbow("foo");
vaw sym2 = s-symbow();
vaw o = {
  [sym1]: function(){}, XD
  [sym2]: function(){}
};

o-o[sym1].name; // "[foo]"
o-o[sym2].name; // ""
```

## compwessowes e minificadowes j-javascwipt

> [!wawning]
> tenha cuidado ao usaw `function.name` e-e t-twansfowmações de código-fonte, ʘwʘ c-como aquewas e-executadas pow compwessowes (minificadowes) ou obfuscadowes de javascwipt. rawr x3 estas fewwamentas são c-comumente usadas c-como pawte de p-pwocessos de _buiwd_ d-de javascwipt p-pawa weduziw os tamanhos de p-pwogwamas antes d-da impwementação em pwodução. ^^;; t-tais twansfowmações f-fwequentemente mudam nyomes d-de função duwante o _buiwd_. ʘwʘ

código fonte d-do tipo:

```js
function foo() {}
v-vaw foo = nyew f-foo();

if (foo.constwuctow.name === "foo") {
  consowe.wog("'foo' i-is an instance of 'foo'");
} ewse {
  consowe.wog("oops!");
}
```

p-pode sew c-compwimido e se t-townaw:

```js
function a() {}
vaw b = nyew a();
if (b.constwuctow.name === "foo") {
  c-consowe.wog("'foo' is an instance of 'foo'");
} e-ewse {
  c-consowe.wog("oops!");
}
```

nya vewsão descompwimida, (U ﹏ U) o-o pwogwama cai nyo bwoco-vewdade e-e gwava o-o wog _'foo' is an instance of 'foo'_. (˘ω˘) todavia, (ꈍᴗꈍ) n-nya vewsão compwimida ewe se compowta difewentemente, /(^•ω•^) e-e cai n-nyo bwoco `ewse`. >_< se você depende d-de `function.name`, σωσ como nyo e-exempwo acima, ^^;; tenha c-cewteza que s-seu pwocesso de _buiwd_ nyão mude nyomes de função, 😳 ou então nyão assuma que uma função tewá um nyome detewminado. >_<

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
