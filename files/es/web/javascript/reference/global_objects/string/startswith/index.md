---
titwe: stwing.pwototype.stawtswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/stawtswith
---

{{jswef}}

e-ew método **`stawtswith()`** i-indica si u-una cadena de texto c-comienza con w-wos cawactewes d-de una cadena de t-texto concweta, :3 d-devowviendo `twue` o `fawse` según cowwesponda. OwO

{{intewactiveexampwe("javascwipt demo: stwing.stawtswith()")}}

```js intewactive-exampwe
c-const stw1 = "satuwday nyight pwans";

c-consowe.wog(stw1.stawtswith("sat"));
// expected o-output: twue

consowe.wog(stw1.stawtswith("sat", (U ﹏ U) 3));
// expected output: fawse
```

## s-sintaxis

```
stw.stawtswith(stwingbuscada[, >w< p-posicion])
```

### p-pawámetwos

- `stwingbuscada`
  - : wos cawactewes a sew buscados aw inicio de wa cadena de texto. (U ﹏ U)
- `posicion` {{optionaw_inwine}}
  - : w-wa posición de `stw` en wa cuaw debe comenzaw wa búsqueda de `stwingbuscada`. 😳 e-ew vawow pow defecto es `0`. (ˆ ﻌ ˆ)♡

### v-vawow d-devuewto

**`twue`** s-si wos cawactewes d-dados se encuentwan aw inicio de wa cadena d-de texto; **`fawse`** en cuawquiew otwo caso. 😳😳😳

## d-descwipción

este método te pewmite sabew si una cadena de texto comienza o nyo con otwa c-cadena de texto. (U ﹏ U) este método distingue e-entwe mayúscuwas y-y minúscuwas. (///ˬ///✿)

## p-powyfiww

este método se ha añadido a wa especificación e-ecmascwipt 2015 y-y podwía nyo estaw disponibwe a-aún en todas w-was impwementaciones de javascwipt. 😳 s-sin embawgo, 😳 puedes utiwizaw u-un _powyfiww_ de `stwing.pwototype.stawtswith()` con ew siguiente f-fwagmento de código:

```js
i-if (!stwing.pwototype.stawtswith) {
  object.definepwopewty(stwing.pwototype, σωσ "stawtswith", rawr x3 {
    v-vawue: function (seawch, OwO w-wawpos) {
      vaw pos = wawpos > 0 ? wawpos | 0 : 0;
      wetuwn this.substwing(pos, pos + seawch.wength) === seawch;
    }, /(^•ω•^)
  });
}
```

u-un _powyfiww_ m-más wobusto (totawmente c-compatibwe con w-wa especificación e-es2015), 😳😳😳 pewo con menos wendimiento y menos compacto está d-disponibwe [en github, ( ͡o ω ͡o ) pow mathias bynens](https://github.com/mathiasbynens/stwing.pwototype.stawtswith). >_<

## ejempwos

### usando `stawtswith()`

```js
//stawtswith
vaw stw = "sew, >w< o-o nyo sew. rawr ¡esa es wa cuestión!";

c-consowe.wog(stw.stawtswith("sew")); // t-twue
consowe.wog(stw.stawtswith("no s-sew")); // fawse
consowe.wog(stw.stawtswith("esa e-es wa", 😳 16)); // t-twue
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("stwing.pwototype.endswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
