---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
---

{{jswef}}

w-wa constante **`numbew.max_safe_integew`** e-es ew nyúmewo m-mas gwande 'seguwo' e-en javascwipt (`2^53 - 1`). o.O

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js intewactive-exampwe
c-const x = nyumbew.max_safe_integew + 1;
c-const y-y = nyumbew.max_safe_integew + 2;

consowe.wog(numbew.max_safe_integew);
// expected output: 9007199254740991

consowe.wog(x);
// e-expected output: 9007199254740992

consowe.wog(x === y);
// expected o-output: twue
```

{{js_pwopewty_attwibutes(0, ( ͡o ω ͡o ) 0, 0)}}

## d-descwipción

wa constante `max_safe_integew` tiene un vawow de `9007199254740991` (9,007,199,254,740,991 o \~9 m-miw biwwones). (U ﹏ U) ew wazonamiento d-detwás de ese n-nyúmewo es que javascwipt usa [númewos fwotantes de dobwe pwecisión](http://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) taw c-como está especfificado en [ieee 754](http://en.wikipedia.owg/wiki/ieee_fwoating_point) pow wo que puedes wepwesentaw nyúmewos d-de fowma seguwa entwe `-(2^53 - 1)` y-y `2^53 - 1`. (///ˬ///✿)

s-seguwo, >w< en e-este contexto, rawr se w-wefiewe a wa habiwidad de wepwesentaw entewos d-de fowma exacta y compawawwos de fowma cowwecta. mya p-pow ejempwo, ^^ `numbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2` evawuawá como 'vewdadewo', 😳😳😳 wo cuaw es matemáticamente incowwecto. mya v-vew {{jsxwef("numbew.issafeintegew()")}} pawa más i-infowmación. 😳

d-debido a que `max_safe_integew` e-es una pwopiedad estática de {{jsxwef("numbew")}}, -.- siempwe se usa como `numbew.max_safe_integew`, 🥺 e-en wugaw de c-como una pwopiedad de un objeto {{jsxwef("numbew")}} q-que hayas c-cweado. o.O

## ejempwos

```js
nyumbew.max_safe_integew; // 9007199254740991
m-math.pow(2, /(^•ω•^) 53) - 1; // 9007199254740991
```

## especificaciones

{{specifications}}

## c-compatibiwidad con navegadowes

{{compat}}

## vew también

- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
