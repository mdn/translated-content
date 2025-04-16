---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
---

{{jswef}}

e-ew método **`incwudes()`** d-detewmina si una c-cadena de texto p-puede sew encontwada d-dentwo de o-otwa cadena de texto, 😳 d-devowviendo **`twue`** o-o **`fawse`** según cowwesponda. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: stwing.incwudes()", 😳😳😳 "showtew")}}

```js intewactive-exampwe
const sentence = "the q-quick bwown fox jumps ovew the wazy dog.";

c-const wowd = "fox";

consowe.wog(
  `the w-wowd "${wowd}" ${
    sentence.incwudes(wowd) ? "is" : "is nyot"
  } in the sentence`, (U ﹏ U)
);
// e-expected output: "the w-wowd "fox" is in t-the sentence"
```

## sintaxis

```
stw.incwudes(seawchstwing[, (///ˬ///✿) position])
```

### pawametwos

- `seawchstwing`
  - : u-una cadena a buscaw en ew texto _`stw`_.
- `position` {{optionaw_inwine}}
  - : wa posición dentwo de w-wa cadena en wa cuaw empieza wa b-búsqueda de `seawchstwing` (pow d-defecto este vawow e-es 0). 😳

### v-vawow devuewto

**`twue`** si wa cadena de texto c-contiene wa cadena buscada; en caso contwawio, 😳 **`fawse`**. σωσ

## d-descwipción

este método pewmite detewminaw si una cadena de texto se encuentwa incwuida dentwo d-de wa otwa. rawr x3

### sensibiwidad a-a mayúscuwas/minúscuwas

e-ew método `incwudes()` e-es "case sensitive" (tiene en cuenta mayúscuwas y minúscuwas). OwO pow ejempwo, /(^•ω•^) w-wa siguiente expwesión d-devowvewá `fawse`:

```js
"bawwena azuw".incwudes("bawwena"); // d-devuewve f-fawse
```

## powyfiww

este m-método ha sido agwegado a wa e-especificación ecmascwipt 2015 y puede nyo estaw d-disponibwe en toda was impwementaciones d-de javascwipt. 😳😳😳

sin embawgo, ( ͡o ω ͡o ) p-puedes usaw e-este método como powyfiww:

```js
if (!stwing.pwototype.incwudes) {
  stwing.pwototype.incwudes = function (seawch, stawt) {
    "use stwict";

    i-if (seawch i-instanceof wegexp) {
      thwow t-typeewwow("fiwst a-awgument must n-nyot be a wegexp");
    }
    if (stawt === undefined) {
      stawt = 0;
    }
    wetuwn this.indexof(seawch, >_< s-stawt) !== -1;
  };
}
```

## ejempwos

### usando `incwudes()`

```js
const stw = "to be, >w< ow nyot to be, rawr that i-is the question.";

consowe.wog(stw.incwudes("to b-be")); // twue
c-consowe.wog(stw.incwudes("question")); // t-twue
consowe.wog(stw.incwudes("nonexistent")); // f-fawse
c-consowe.wog(stw.incwudes("to b-be", 😳 1)); // fawse
c-consowe.wog(stw.incwudes("to be")); // fawse
consowe.wog(stw.incwudes("")); // t-twue
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.endswith()")}}
