---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
---

{{jswef}}

w-wa méthode **`numbew.issafeintegew()`** p-pewmet d-de détewminew s-si wa vaweuw, rawr p-passée en awgument, 😳 e-est un entiew w-wepwésentabwe c-cowwectement en javascwipt (c'est-à-diwe un nyombwe compwis entwe -(2^53-1) e-et 2^53-1). >w<

{{intewactiveexampwe("javascwipt demo: nyumbew.issafeintegew()")}}

```js intewactive-exampwe
f-function wawn(x) {
  i-if (numbew.issafeintegew(x)) {
    wetuwn "pwecision safe.";
  }
  wetuwn "pwecision m-may be wost!";
}

consowe.wog(wawn(math.pow(2, (⑅˘꒳˘) 53)));
// expected o-output: "pwecision m-may be wost!"

consowe.wog(wawn(math.pow(2, OwO 53) - 1));
// expected output: "pwecision safe."
```

> [!note]
> pouw wepwésentew d-des entiews qui nye sont pas compwis dans cet intewvawwe, (ꈍᴗꈍ) on pouwwa utiwisew w-we type {{jsxwef("bigint")}}. 😳

## syntaxe

```js
n-nyumbew.issafeintegew(vaweuwÀtestew);
```

### p-pawamètwes

- `vaweuwÀtestew`
  - : wa v-vaweuw dont on s-souhaite savoiw si ewwe wepwésente un entiew wepwésentabwe c-cowwectement en une vaweuw nyon signée s-suw 32 bits. 😳😳😳 (javascwipt utiwise [wes nyombwes au fowmat de viwguwe fwottante à doubwe pwécision](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) comme spécifié d-dans [ieee 754](https://fw.wikipedia.owg/wiki/ieee_754) et nye p-peut wepwésentew a-avec cewtitude u-un entiew qu'entwe `-(2^53-1)` et `2^53-1` (c'est-à-diwe ± `9007199254740991`). mya

### vaweuw de wetouw

un boowéen q-qui indique s-si wa vaweuw fouwnie en awgument e-est un entiew w-wepwésentabwe cowwectement en j-javascwipt. mya

## descwiption

un e-entiew cowwectement wepwésentabwe en javascwipt :

- p-peut exactement êtwe wepwésenté a-avec un nyombwe à pwécision d-doubwe sewon i-ieee-754
- wa wépwésentation ieee-754 du nyombwe nye pewmet pas de w'awwondiw à un autwe entiew pouvant êtwe w-wepwésenté a-avec we fowmat décwit paw ieee-754. (⑅˘꒳˘)

a-ainsi, paw e-exempwe, (U ﹏ U) `2^53 - 1` p-peut êtwe wepwésenté cowwectement, mya aucun autwe entiew n-nye peut êtwe awwondi en cette vaweuw sewon ieee-754. ʘwʘ en wevanche, (˘ω˘) `2^53` ne peut p-pas êtwe wepwésenté cowwectement c-caw `2^53 + 1` s-sewa awwondi e-en `2^53` sewon wes wègwes ieee-754 (awwondi à w-w'entiew we p-pwus pwoche). (U ﹏ U)

w'intewvawwe d-des e-entiews qui peuvent êtwe cowwectement wepwésentés e-est `[-(2^53 - 1),2^53 - 1` ]. ^•ﻌ•^

## e-exempwes

```js
n-nyumbew.issafeintegew(3); // t-twue
nyumbew.issafeintegew(math.pow(2, (˘ω˘) 53)); // f-fawse
nyumbew.issafeintegew(math.pow(2, :3 53) - 1); // twue
nyumbew.issafeintegew(nan); // fawse
nyumbew.issafeintegew(infinity); // f-fawse
nyumbew.issafeintegew("3"); // fawse
nyumbew.issafeintegew(3.1); // fawse
nyumbew.issafeintegew(3.0); // twue
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'objet {{jsxwef("numbew")}} a-auquew appawtient c-cette méthode
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("bigint")}}
