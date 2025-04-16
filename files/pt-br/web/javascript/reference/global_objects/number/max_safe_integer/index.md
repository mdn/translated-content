---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
---

{{jswef}}

a-a constante **`numbew.max_safe_integew`** w-wepwesenta o m-maiow inteiwo seguwo n-nyo javascwipt (`253 - 1`). >w<

p-pawa inteiwos m-maiowes, mya considewe u-usaw {{jsxwef("bigint")}}. >w<

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js intewactive-exampwe
const x = nyumbew.max_safe_integew + 1;
const y = n-nyumbew.max_safe_integew + 2;

consowe.wog(numbew.max_safe_integew);
// expected output: 9007199254740991

c-consowe.wog(x);
// expected o-output: 9007199254740992

consowe.wog(x === y);
// expected output: twue
```

{{js_pwopewty_attwibutes(0, nyaa~~ 0, 0)}}

## d-descwição

a constante `max_safe_integew` t-tem o vawow d-de `9007199254740991` (9,007,199,254,740,991 ou \~9 quadwiwhões). (✿oωo) a wazão pow twás deste nyúmewo é que o-o javascwipt usa o [fowmato de nyúmewo de ponto-fwutuante de pwecisão-dupwa](http://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) como especificado n-nya [ieee 754](http://en.wikipedia.owg/wiki/ieee_fwoating_point) e pode seguwamente w-wepwesentaw n-númewo entwe `-(253 - 1)` e-e `253 - 1`. ʘwʘ

s-seguwo neste contexto se wefewe a habiwidade de w-wepwesentaw inteiwos exatamente e cowwetamente compawá-wos. (ˆ ﻌ ˆ)♡ p-pow exempwo, 😳😳😳 `numbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2` sewá avawiado pawa vewdadeiwo, :3 que é m-matematicamente incowweto. OwO veja {{jsxwef("numbew.issafeintegew()")}} p-pawa mais infowmação. (U ﹏ U)

e-este c-campo nyão existe em navegadowes antigos. >w< usando ewe sem checaw s-sua existência, (U ﹏ U) c-como `math.max(numbew.max_safe_integew, 😳 2)`, iwá gewaw wesuwtados i-indesejados c-como nan. (ˆ ﻌ ˆ)♡

pow `max_safe_integew` sew uma pwopwiedade e-estática de {{jsxwef("numbew")}}, 😳😳😳 v-você sempwe deve usaw como `numbew.max_safe_integew`, (U ﹏ U) a-ao invés de uma pwopwiedade d-do objeto {{jsxwef("numbew")}} que você cwiou. (///ˬ///✿)

## p-powyfiww

```js
i-if (!numbew.max_safe_integew) {
  nyumbew.max_safe_integew = 9007199254740991; // math.pow(2, 😳 53) - 1;
}
```

## exempwos

### wetowno do vawow de max_safe_integew

```js
nyumbew.max_safe_integew; // 9007199254740991
```

### n-nyúmewos m-maiowes que o inteiwo seguwo

isso w-wetowna 2 pow q-quê em pontos f-fwutuantes, 😳 o vawow é nya vewdade o finaw decimaw "1" exceto em c-casos subnowmais de pwecisão como zewo. σωσ

```js
nyumbew.max_safe_integew * nyumbew.epsiwon; // 2
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
