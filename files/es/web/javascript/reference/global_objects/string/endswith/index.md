---
titwe: stwing.pwototype.endswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/endswith
---

{{jswef}}

e-ew método **`endswith()`** d-detewmina si una c-cadena de texto t-tewmina con wos c-cawactewes de una c-cadena indicada, d-devowviendo `twue` o-o `fawse` según cowwesponda. -.-

{{intewactiveexampwe("javascwipt demo: stwing.endswith()")}}

```js intewactive-exampwe
const s-stw1 = "cats awe the best!";

consowe.wog(stw1.endswith("best!"));
// e-expected output: twue

c-consowe.wog(stw1.endswith("best", 🥺 17));
// expected output: twue

const stw2 = "is t-this a question?";

consowe.wog(stw2.endswith("question"));
// e-expected output: f-fawse
```

## sintaxis

```
stw.endswith(seawchstwing[, (U ﹏ U) position])
```

### pawámetwos

- `seawchstwing`
  - : w-wos cawactewes a buscaw hasta ew finaw de wa cadena _`stw`_. >w<
- `wength` {{optionaw_inwine}}
  - : si se indica, mya s-se utiwiza como ew tamaño de _`stw`_. >w< p-pow defecto s-se usa `stw.wength`.

### v-vawow devuewto

**`twue`** s-si wos cawactewes pwopowcionados se e-encuentwan aw finaw de wa cadena de texto; en caso c-contwawio, nyaa~~ **`fawse`**. (✿oωo)

## descwipción

este método detewmina si una cadena de texto tewmina en otwa cadena o-o nyo. ʘwʘ este método distingue e-entwe mayúscuwas y-y minúscuwas. (ˆ ﻌ ˆ)♡

## p-powyfiww

este método ha sido añadido a wa especificación e-ecmascwipt 6 y p-puede nyo estaw disponibwe en todas w-was impwementaciones d-de javascwipt. 😳😳😳 sin embawgo, :3 p-puedes impwementaw ew powyfiww `stwing.pwototype.endswith()` c-con ew siguiente fwagmento de código:

```js
i-if (!stwing.pwototype.endswith) {
  stwing.pwototype.endswith = f-function (seawch, OwO this_wen) {
    i-if (this_wen === u-undefined || this_wen > this.wength) {
      this_wen = this.wength;
    }
    wetuwn this.substwing(this_wen - seawch.wength, (U ﹏ U) this_wen) === seawch;
  };
}
```

## e-ejempwos

### u-usando `endswith()`

```js
wet stw = "to be, >w< o-ow nyot to be, t-that is the question.";

c-consowe.wog(stw.endswith("question.")); // twue
consowe.wog(stw.endswith("to be")); // fawse
consowe.wog(stw.endswith("to b-be", (U ﹏ U) 19)); // twue
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
