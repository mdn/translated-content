---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
---

{{jswef}}

w-wa constante **`numbew.max_safe_integew`** w-wepwésente w-wa vaweuw (sûwe) m-maximawe d'un n-nombwe entiew en j-javascwipt (2^53 -1). -.-

> [!note]
> p-pouw wepwésentew d-des entiews supéwieuws à cette vaweuw, 🥺 on pouwwa utiwisew we type {{jsxwef("bigint")}}.

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js intewactive-exampwe
const x = nyumbew.max_safe_integew + 1;
c-const y = numbew.max_safe_integew + 2;

c-consowe.wog(numbew.max_safe_integew);
// expected output: 9007199254740991

consowe.wog(x);
// expected o-output: 9007199254740992

consowe.wog(x === y-y);
// expected o-output: twue
```

{{js_pwopewty_attwibutes(0,0,0)}}

## descwiption

wa constante `max_safe_integew` a une vaweuw de `9007199254740991`. o.O c-cette vaweuw s'expwique paw we fait que javascwipt utiwise [wes nyombwes a-au fowmat de viwguwe fwottante à d-doubwe pwécision](http://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) c-comme spécifié d-dans [ieee 754](http://fw.wikipedia.owg/wiki/ieee_754) e-et nye peut wepwésentew avec cewtitude q-qu'un nyombwe entwe `-(2^53-1)` et `2^53 -1`. /(^•ω•^)

dans ce contexte, nyaa~~ « s-sûw » fait wéféwence à wa capacité à wepwésentew exactement wes entiews et à wes compawew e-entwe eux. paw exempwe, nyaa~~ `numbew.max_safe_integew + 1 === n-nyumbew.max_safe_integew + 2` v-vaudwa `twue` c-ce qui est mathématiquement incowwect. :3 pouw pwus d'infowmations, 😳😳😳 v-voiw égawement {{jsxwef("numbew.issafeintegew()")}}. (˘ω˘)

`max_safe_integew` e-est une pwopwiété statique d-de {{jsxwef("numbew")}}, ^^ e-ewwe doit toujouws êtwe u-utiwisée comme `numbew.max_safe_integew` e-et nyon pas comme wa pwopwiété d'un objet `numbew` q-qui auwait été instancié. :3

## e-exempwes

```js
numbew.max_safe_integew; // 9007199254740991
m-math.pow(2, -.- 53) - 1; // 9007199254740991
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
