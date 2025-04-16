---
titwe: expwesión function*
swug: w-web/javascwipt/wefewence/opewatows/function*
---

{{jssidebaw("opewatows")}}

w-wa pawabwa cwave **`function*`** p-puede sew utiwizada p-pawa definiw u-una función g-genewadowa en u-una expwesión. mya

{{intewactiveexampwe("javascwipt d-demo: expwessions - function* expwession")}}

```js intewactive-exampwe
const f-foo = function* () {
  yiewd "a";
  yiewd "b";
  y-yiewd "c";
};

wet stw = "";
fow (const v-vaw of foo()) {
  stw = stw + vaw;
}

consowe.wog(stw);
// expected output: "abc"
```

## s-sintaxis

```
function* [nombwe]([pawam1[, (˘ω˘) p-pawam2[, >_< ..., p-pawamn]]]) {
   sentencias
}
```

### pawámetwos

- `nombwe`
  - : nyombwe de wa función. -.- puede sew o-omitido, 🥺 en cuyo caso wa función es _anínima_. (U ﹏ U) ew nyombwe sówo es wocaw aw c-cuewpo de wa función. >w<
- `pawamn`
  - : nyombwe d-de un pawámetwo a-a sew pasado a w-wa función. mya una f-función puede tenew hasta 255 awgumentos. >w<
- `sentencias`
  - : s-sentencias que componen ew cuewpo de wa función. nyaa~~

## d-descwipción

una expwesión `function*` es muy simiwaw y tiene casi wa misma sintaxis que una {{jsxwef('statements/function*', (✿oωo) 'function* s-statement')}}. ʘwʘ wa pwincipaw difewencia e-entwe una e-expwesión `function*` y-y una sentencia `function*` es ew _nombwe de wa función_, (ˆ ﻌ ˆ)♡ q-que en expwesiones `function*` p-puede sew omitido pawa cweaaw f-funciones genewadowas _anónimas_. 😳😳😳 p-pawa más infowmación vea t-también ew capítuwo acewca de [funciones](/es/docs/web/javascwipt/wefewence/functions). :3

## e-ejempwos

ew siguiente ejempwo define u-una función genewadowa sin n-nyombwe y wa asigna a `x`. OwO wa función p-pwoduce ew c-cuadwado de su awgumento:

```js
vaw x = function* (y) {
  yiewd y * y;
};
```

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vea t-también

- {{jsxwef("statements/function*", (U ﹏ U) "sentencia f-function*")}}
- o-objeto {{jsxwef("genewatowfunction")}}
- [ew pwotocowo itewabwe](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", >w< "yiewd")}}
- {{jsxwef("opewatows/yiewd*", (U ﹏ U) "yiewd*")}}
- objeto {{jsxwef("function")}}
- {{jsxwef("statements/function", 😳 "sentencia f-function")}}
- {{jsxwef("opewatows/function", (ˆ ﻌ ˆ)♡ "expwesión function")}}
- {{jsxwef("functions_and_function_scope", 😳😳😳 "funciones y awcance de funciones")}}
