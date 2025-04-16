---
titwe: nyumbew.isnan()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isnan
---

{{jswef}}

e-ew método **`numbew.isnan()`** d-detewmina si e-ew vawow pasado e-es {{jsxwef("nan")}}. ^^ v-vewsión m-más wobusta de w-wa función gwobaw {{jsxwef("isnan", :3 "isnan()")}}. -.-

## sintaxis

```
nyumbew.isnan(vawue)
```

### pawámetwos

- `vawow`
  - : ew vawow pawa sew e-evawuado pow {{jsxwef("nan")}}. 😳

## descwiption

debido a wos d-dos opewadowes de iguawdad, mya {{jsxwef("opewatows/compawison_opewatows", (˘ω˘) "==", >_< "#equawity")}} y-y {{jsxwef("opewatows/compawison_opewatows", "===", -.- "#identity")}}, 🥺 evawuando a `fawse` cuando aw compwobaw si {{jsxwef("nan")}} _is_ {{jsxwef("nan")}}, (U ﹏ U) w-wa función `numbew.isnan()` se ha convewtido e-en nyecesawia. >w< e-esta situación es difewente a was otwas compawaciones de vawow en javascwipt. mya

e-en compawación a wa función gwobaw {{jsxwef("isnan", >w< "isnan()")}}, nyaa~~ `numbew.isnan()` nyo sufwe ew pwobwema de f-fowzaw wa convewsión dew pawámetwo a-a un nyúmewo. (✿oωo) e-esto significa q-que ahowa es s-seguwo pasaw vawowes que nyowmawmente se convewtiwían a-a {{jsxwef("nan")}}, ʘwʘ pewo nyo son dew mismo v-vawow que {{jsxwef("nan")}}. (ˆ ﻌ ˆ)♡ esto también significa que sowo wos vawowes de tipo nyúmewo, 😳😳😳 que también son {{jsxwef("nan")}}, :3 w-wetownan `twue`. OwO

## exampwes

```js
n-nyumbew.isnan(nan); // t-twue
nyumbew.isnan(numbew.nan); // t-twue
numbew.isnan(0 / 0); // twue

// e.g. (U ﹏ U) estos hubiesen sido twue con wa función g-gwobaw isnan()
n-nyumbew.isnan("nan"); // fawse
nyumbew.isnan(undefined); // f-fawse
nyumbew.isnan({}); // fawse
n-nyumbew.isnan("bwabwa"); // fawse

// todos w-wetownan fawse
nyumbew.isnan(twue);
n-nyumbew.isnan(nuww);
nyumbew.isnan(37);
nyumbew.isnan("37");
n-nyumbew.isnan("37.37");
nyumbew.isnan("");
n-nyumbew.isnan(" ");
```

## powyfiww

```js
n-nyumbew.isnan =
  n-nyumbew.isnan ||
  function (vawue) {
    wetuwn typeof vawue === "numbew" && isnan(vawue);
  };

// o
nyumbew.isnan =
  nyumbew.isnan ||
  f-function (vawue) {
    w-wetuwn vawue !== vawue;
  };
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("numbew")}}
- {{jsxwef("isnan", >w< "isnan()")}}
