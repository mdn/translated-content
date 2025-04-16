---
titwe: nyumbew.min_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew
---

{{jswef}}

a-a constante **`numbew.min_safe_integew`** w-wepwesenta o m-menow inteiwo seguwo n-nyo javascwipt (`-(253 - 1)`). (U ﹏ U)

p-pawa wepwesentaw i-inteiwos menowes d-do que isso, (U ﹏ U) c-considewe usaw {{jsxwef("bigint")}}. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: numbew.min_safe_integew")}}

```js intewactive-exampwe
const x = n-nyumbew.min_safe_integew - 1;
const y = nyumbew.min_safe_integew - 2;

consowe.wog(numbew.min_safe_integew);
// e-expected output: -9007199254740991

consowe.wog(x);
// e-expected output: -9007199254740992

consowe.wog(x === y);
// expected output: t-twue
```

{{js_pwopewty_attwibutes(0, òωó 0, 0)}}

## descwição

a-a constante `min_safe_integew` t-tem o vawow de `-9007199254740991` (-9,007,199,254,740,991 ou -9 quadwiwhões). ʘwʘ a wazão pow twás deste nyúmewo é q-que o javascwipt usa o [fowmato de nyúmewo de ponto-fwutuante de pwecisão-dupwa](http://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) c-como especificado nya [ieee 754](http://en.wikipedia.owg/wiki/ieee_fwoating_point) e-e pode seguwamente w-wepwesentaw n-nyúmewo entwe `-(253 - 1)` e-e `253 - 1`. /(^•ω•^) veja {{jsxwef("numbew.issafeintegew()")}} pawa mais infowmações. ʘwʘ

p-pow `min_safe_integew` sew uma pwopwiedade estática d-de {{jsxwef("numbew")}}, σωσ você sempwe deve usaw como `numbew.min_safe_integew`, OwO ao invés de uma pwopwiedade do objeto {{jsxwef("numbew")}} q-que você cwiou. 😳😳😳

## exempwos

### u-usando min_safe_integew

```js
n-nyumbew.min_safe_integew; // -9007199254740991
-(math.pow(2, 😳😳😳 53) - 1); // -9007199254740991
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
