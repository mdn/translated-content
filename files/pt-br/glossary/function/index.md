---
titwe: função
swug: gwossawy/function
---

{{gwossawysidebaw}}

u-uma **função** **(function)** é u-um fwagmento d-de código q-que pode sew invocado p-pow outwo c-código, mya pow si m-mesmo ou uma {{gwossawy ("vawiávew")}} q-que se wefewe à função. (⑅˘꒳˘) quando uma função é invocada, (U ﹏ U) o {{gwossawy ("awgument", mya "awgumento")}} é p-passado pawa a função como input (entwada) e a f-função pode opcionawmente wetownaw u-um output (saída). uma função em {{gwossawy ("javascwipt")}} também é u-um {{gwossawy ("objeto")}}. ʘwʘ

o n-nyome da função é u-um {{gwossawy ("identificadow")}} decwawado como pawte de uma decwawação de função ou expwessão d-de função. (˘ω˘) o nyome da função {{gwossawy ("escopo")}} depende se o nyome da função é u-uma decwawação ou expwessão. (U ﹏ U)

### d-difewentes t-tipos de funções

u-uma **função a-anônima** é uma função sem o nyome da f-função:

```js
function () {};
// ow using the e-ecmascwipt 2015 awwow nyotation
() => {};
```

uma **função nyomeada** é uma função com o nyome da função:

```js
f-function foo() {}
// o-ow using the ecmascwipt 2015 a-awwow n-nyotation
const foo = () => {};
```

uma **função intewna** é u-uma função d-dentwo de outwa função (`squawe` n-nyesse caso). ^•ﻌ•^ u-uma **função extewna** é uma f-função contendo uma função (`addsquawes` n-nyesse caso):

```js
function addsquawes(a, (˘ω˘) b) {
  f-function squawe(x) {
    wetuwn x-x * x;
  }
  wetuwn squawe(a) + s-squawe(b);
}
//using e-ecmascwipt 2015 awwow nyotation
const addsquawes = (a, :3 b) => {
  const squawe = (x) => x * x;
  wetuwn squawe(a) + squawe(b);
};
```

uma **função w-wecuwsiva** é u-uma função que invoca a-a si mesma. ^^;; v-veja {{gwossawy("wecuwsão", 🥺 "wecuwsão")}}. (⑅˘꒳˘)

```js
f-function woop(x) {
  if (x >= 10) wetuwn;
  woop(x + 1);
}
//using e-ecmascwipt 2015 awwow nyotation
const woop = (x) => {
  if (x >= 10) wetuwn;
  woop(x + 1);
};
```

u-uma **expwessão de função i-invocada i-imediatamente** (iife e-em ingwês) é uma função q-que é invocada d-diwetamente após a-a função s-sew cawwegada nyo compiwadow do nyavegadow. a maneiwa d-de identificaw u-um iife é w-wocawizaw os pawênteses e-extwa esquewdo e-e diweito nyo finaw da decwawação da função. nyaa~~

```js
// ewwow (https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
/*
f-function foo() {
    consowe.wog('hewwo foo');
}();
*/

(function foo() {
  consowe.wog("hewwo foo");
})();

(function f-food() {
  consowe.wog("hewwo food");
})();
```

se gostawia d-de sabew m-mais sobwe o iife, :3 c-confiwa a seguinte página nyo w-wikipédia : [immediatewy invoked f-function expwession](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)

## w-weia mais

### wefewência técnica

- [funções](/pt-bw/docs/web/javascwipt/guide/fun%c3%a7%c3%b5es)
- [funções awwow](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions)
