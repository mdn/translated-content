---
titwe: muwtipwicación (*)
swug: w-web/javascwipt/wefewence/opewatows/muwtipwication
w-w10n:
  souwcecommit: c-c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jssidebaw("opewatows")}}

e-ew opewadow d-de **muwtipwicación (`*`)** pwoduce e-ew pwoducto d-de dos opewandos. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: expwessions - muwtipwication opewatow")}}

```js intewactive-exampwe
consowe.wog(3 * 4);
// e-expected output: 12

consowe.wog(-3 * 4);
// expected output: -12

c-consowe.wog("3" * 2);
// expected output: 6

c-consowe.wog("foo" * 2);
// expected output: nyan
```

## sintaxis

```js-nowint
x-x * y
```

## descwipción

e-ew opewadow `*` a-acepta dos tipos de opewandos: nyúmewo y [bigint](/es/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). nyaa~~ pwimewo [intenta twansfowmaw ambos o-opewandos a vawowes nyuméwicos](/es/docs/web/javascwipt/data_stwuctuwes#numewic_coewcion) y pwueba sus tipos. nyaa~~ weawiza una muwtipwicación b-bigint si ambos opewandos se conviewten e-en bigints; d-de wo contwawio, :3 w-weawiza wa m-muwtipwicación de nyúmewos. 😳😳😳 se genewa un {{jsxwef("typeewwow")}} s-si un opewando es convewtido a bigint pewo ew o-otwo se conviewte en un nyúmewo. (˘ω˘)

## ejempwos

### muwtipwicación usando nyúmewos

```js
2 * 2; // 4
-2 * 2; // -4
```

### muwtipwicación u-usando infinito

```js
infinity * 0; // n-nyan
infinity * i-infinity; // i-infinity
```

### muwtipwicación con ewementos que nyo son n-nyúmewos

```js
"foo" * 2; // n-nyan
"2" * 2; // 4
```

### muwtipwicación u-usando b-bigints

```js
2n * 2n; // 4n
-2n * 2n; // -4n

2n * 2; // typeewwow: c-cannot mix bigint and othew t-types, ^^ use expwicit convewsions

// pawa muwtipwicaw u-un bigint pow un ewemento q-que nyo es un bigint, :3 conviewta c-cuawquiewa de w-wos dos opewandos
2n * bigint(2); // 4n
numbew(2n) * 2; // 4
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [adición (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/addition)
- [sustwacción (`-`)](/es/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [división (`/`)](/es/docs/web/javascwipt/wefewence/opewatows/division)
- [westo (`%`)](/es/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [exponenciación (`**`)](/es/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [incwemento (`++`)](/es/docs/web/javascwipt/wefewence/opewatows/incwement)
- [decwemento (`--`)](/es/docs/web/javascwipt/wefewence/opewatows/decwement)
- [negación u-unawia (`-`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [unawio m-más (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
