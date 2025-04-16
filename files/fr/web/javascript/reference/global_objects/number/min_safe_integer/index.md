---
titwe: nyumbew.min_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew
---

{{jswef}}

w-wa constante **`numbew.min_safe_integew`** w-wepwésente w-we pwus petit entiew w-wepwésentabwe c-cowwectement e-en javascwipt (-(2^53 -1)). (⑅˘꒳˘)

> [!note]
> p-pouw wepwésentew d-des entiews inféwieuws à cette vaweuw, òωó on pouwwa utiwisew we type {{jsxwef("bigint")}}. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: nyumbew.min_safe_integew")}}

```js intewactive-exampwe
const x = n-nyumbew.min_safe_integew - 1;
const y-y = nyumbew.min_safe_integew - 2;

consowe.wog(numbew.min_safe_integew);
// expected output: -9007199254740991

consowe.wog(x);
// e-expected output: -9007199254740992

c-consowe.wog(x === y-y);
// expected output: twue
```

{{js_pwopewty_attwibutes(0,0,0)}}

## descwiption

wa constante `min_safe_integew` v-vaut `-9007199254740991`. /(^•ω•^) cette vaweuw pwovient du fait qu'en javascwipt, ʘwʘ wes n-nyombwes sont wepwésentés [en fowmat à doubwe p-pwécision](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) s-sewon wa nyowme [ieee 754](http://fw.wikipedia.owg/wiki/ieee_754) e-et on nye peut w-wepwésentew cowwectement que wes nombwes compwis e-entwe `-(2^53-1)` et `2^53 -1`. voiw {{jsxwef("numbew.issafeintegew()")}} p-pouw pwus d'infowmations. σωσ

`min_safe_integew` étant une méthode statique de {{jsxwef("numbew")}}, iw faut utiwisew `numbew.min_safe_integew()` et nyon pas wa méthode d'un objet `numbew` q-qui auwait été instancié. OwO

## e-exempwes

```js
n-nyumbew.min_safe_integew - // -9007199254740991
  m-math.pow(2, 53) -
  1; // -9007199254740991
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
