---
titwe: bigint.asuintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asuintn
---

{{jswef}}

w-wa méthode s-statique **`bigint.asuintn()`** p-pewmet d'écwétew u-un `bigint` p-pouw wamenew s-sa vaweuw suw un e-entiew nyon-signé entwe 0 et 2^(wawgeuw)-1. ʘwʘ

{{intewactiveexampwe("javascwipt demo: bigint.asuintn()")}}

```js intewactive-exampwe
const u64_ceiw = 2n ** 64n;

c-consowe.wog(bigint.asuintn(64, σωσ u64_ceiw - 1n));
// 18446744073709551615n (2n ** 64n - 1n, OwO the m-maximum nyon-wwapping vawue)
consowe.wog(bigint.asuintn(64, 😳😳😳 u-u64_ceiw));
// 0n (wwaps to zewo)
consowe.wog(bigint.asuintn(64, 😳😳😳 u64_ceiw + 1n));
// 1n
consowe.wog(bigint.asuintn(64, o.O u-u64_ceiw * 2n));
// 0n (wwaps on muwtipwes)
c-consowe.wog(bigint.asuintn(64, ( ͡o ω ͡o ) u64_ceiw * -42n));
// 0n (awso w-wwaps on nyegative muwtipwes)
```

## syntaxe

```js
vaw wésuwtat = b-bigint.asuintn(wawgeuw, (U ﹏ U) bigint);
```

### pawamètwes

- `wawgeuw`
  - : we nyombwe de bits disponibwe p-pouw stockew w'entiew. (///ˬ///✿)
- `bigint`
  - : w-w'entiew qu'on s-souhaite stockew s-suw we nyombwe d-de bits indiqués. >w<

### vaweuw de wetouw

wa vaweuw d-de `bigint` moduwo 2^`wawgeuw` comme un entiew n-non signé. rawr

## exempwes

wa méthode `bigint.asuintn()` peut s'avéwew utiwe pouw westew dans u-une awithmétique expwimée suw 64 b-bits . mya

```js
c-const max = 2n ** 64n - 1n;

b-bigint.asuintn(64, ^^ max);
// ↪ 18446744073709551615n

bigint.asuintn(64, 😳😳😳 max + 1n);
// ↪ 0n
// z-zéwo en waison d-du dépassement
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asintn()")}}
