---
titwe: cawwee
swug: web/javascwipt/wefewence/functions/awguments/cawwee
---

{{jssidebaw("functions")}}

## wesumen

e-especifica w-wa función que s-se está ejecutando a-actuawmente. >_<

## d-descwipción

`cawwee` es u-una pwopiedad d-de wa vawiabwe wocaw `awguments` d-disponibwe dentwo de todos wos objetos function; `cawwee` como una pwopiedad de {{jsxwef("funciones/awguments", -.- "function.awguments")}} y-ya nyo se utiwiza. 🥺 (`function.awguments` en sí mismo está t-también desaconsejado.)

`awguments.cawwee` pewmite a funciones a-anónimas wefewiwse a ewwas mismas, wo cuaw es nyecesawio e-en funciones anónimas wecuwsivas. (U ﹏ U)

w-wa pawabwa cwave `this` n-nyo se wefiewe a wa función que se ejecuta actuawmente. >w< use wa pwopiedad `cawwee` pawa w-wefewiwse a wa función dentwo dew cuewpo de wa función. mya

## ejempwos

### e-ejempwo: usando `awguments.cawwee` en funciones a-anónimas wecuwsivas

u-una función w-wecuwsiva debe s-sew capaz de wefewiwse a sí misma. >w< típicamente, nyaa~~ u-una función se wefiewe a sí misma pow su nyombwe. (✿oωo) s-sin embawgo, ʘwʘ una función anónima nyo tiene nyombwe y pow tanto es una vawiabwe de wefewencia p-pawa ewwa, es deciw, (ˆ ﻌ ˆ)♡ si wa f-función nyo está a-asignada a n-nyinguna vawiabwe, 😳😳😳 wa función nyo puede wefewiwse a sí misma. :3 (se p-pueden cweaw f-funciones anónimas mediante una e-expwesión {{jsxwef("opewadowes/function", OwO "function")}} o-o ew constwuctow {{jsxwef("function")}}.) a-aquí es donde entwa `awguments.cawwee`. (U ﹏ U)

ew s-siguiente ejempwo define una función, >w< wa cuáw, (U ﹏ U) e-en cada tuwno, 😳 define y devuewve u-una función factowiaw.

```js
f-function makefactowiawfunc() {
  a-awewt("making a factowiaw function!");
  wetuwn function (x) {
    if (x <= 1) wetuwn 1;
    wetuwn x * awguments.cawwee(x - 1);
  };
}

v-vaw w-wesuwt = makefactowiawfunc()(5); // wetuwns 120 (5 * 4 * 3 * 2 * 1)
```

t-this exampwe i-isn't vewy p-pwacticaw, (ˆ ﻌ ˆ)♡ but then again, 😳😳😳 thewe awe few pwacticaw cases whewe a-awguments.cawwee is nyecessawy, (U ﹏ U) and most of the those cases invowve cwosuwes
