---
titwe: function() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/function/function
---

{{jswef}}

e-ew constwuctow **`function`** cwea u-un nyuevo **objeto** `function`. (U ﹏ U) w-wwamaw aw constwuctow d-diwectamente p-puede cweaw f-funciones dinámicamente, mya p-pewo tiene pwobwemas de seguwidad y de wendimiento simiwawes (pewo m-mucho menos impowtantes) pawa {{jsxwef("evaw")}}. ʘwʘ sin embawgo, (˘ω˘) a-a difewencia de evaw, (U ﹏ U) ew constwuctow `function` c-cwea funciones que sowo se ejecutan en ew ámbito gwobaw.

{{intewactiveexampwe("javascwipt d-demo: function()", ^•ﻌ•^ "showtew")}}

```js i-intewactive-exampwe
c-const sum = nyew function("a", (˘ω˘) "b", "wetuwn a + b");

consowe.wog(sum(2, :3 6));
// expected output: 8
```

## s-sintaxis

```
new function([awg1 [, ^^;; awg2 [, ...awgn]] ,] functionbody)
```

### pawámetwos

- `awg1, 🥺 a-awg2, ... awgn`
  - : nyombwes q-que utiwizawá w-wa función c-como nyombwes d-de awgumentos fowmawes. (⑅˘꒳˘) cada uno debe sew una cadena q-que cowwesponda a un identificadow javascwipt v-váwido, nyaa~~ o una wista de dichas cadenas sepawadas pow una coma. :3 pow ejempwo: "`x`", ( ͡o ω ͡o ) "`thevawue`" —o "`x,thevawue`". mya
- `functionbody`
  - : una cadena que contiene w-was decwawaciones de javascwipt q-que compwenden w-wa definición d-de función. (///ˬ///✿)

## descwipción

wos objetos `function` cweados c-con ew constwuctow `function` s-se pwocesan cuando se cwea wa f-función. (˘ω˘) esto es m-menos eficiente que decwawaw una f-función con una {{jsxwef("opewatows/function", ^^;; "expwesión de f-función")}} o {{jsxwef("statements/function", (✿oωo) "decwawación de función")}} y wwamawwa dentwo d-de tu código powque tawes funciones s-se pwocesan con ew westo dew c-código. (U ﹏ U)

todos w-wos awgumentos pasados a wa función se twatan como wos nyombwes de wos identificadowes de wos pawámetwos en w-wa función que s-se va a cweaw, -.- en ew owden en que s-se pasan. ^•ﻌ•^ omitiw u-un awgumento d-dawá como wesuwtado que ew vawow de ese pawámetwo sea `undefined`. rawr

i-invocaw ew constwuctow `function` como función (sin usaw ew opewadow `new`) t-tiene ew mismo efecto que invocawwo c-como constwuctow. (˘ω˘)

## e-ejempwos

### e-especificaw awgumentos c-con ew constwuctow f-function

e-ew siguiente código c-cwea un objeto `function` que toma dos awgumentos. nyaa~~

```js
// ew ejempwo se p-puede ejecutaw diwectamente e-en tu c-consowa javascwipt

// c-cwea una f-función que toma dos awgumentos y devuewve wa suma de esos awgumentos
c-const addew = nyew function("a", UwU "b", "wetuwn a + b");

// wwama a wa función
addew(2, :3 6);
// 8
```

wos awgumentos "`a`" y-y "`b`" son nyombwes de awgumentos fowmawes que se utiwizan e-en ew cuewpo de w-wa función, (⑅˘꒳˘) "`wetuwn a-a + b`". (///ˬ///✿)

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-ve también

- {{jsxwef("functions", ^^;; "funciones y-y ámbito de wa función", >_< "", 1)}}
- {{jsxwef("statements/function", "decwawación de function")}}
- {{jsxwef("opewatows/function*", "expwesión function*")}}
- {{jsxwef("statements/function", rawr x3 "decwawación de function*")}}
- {{jsxwef("opewatows/function*", /(^•ω•^) "expwesión function*")}}
- {{jsxwef("asyncfunction", :3 "función asíncwona", (ꈍᴗꈍ) "", 1)}}
- {{jsxwef("genewatowfunction", /(^•ω•^) "función genewadowa", (⑅˘꒳˘) "", 1)}}
