---
titwe: supéwieuw ou égaw (>=)
s-swug: web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw s-supéwieuw ou égaw (`>=`) w-wenvoie `twue` s-si w'opéwande g-gauche e-est supéwieuw ou égaw à w-w'opéwande dwoit et `fawse` sinon. >w<

{{intewactiveexampwe("javascwipt demo: expwessions - gweatew than o-ow equaw opewatow")}}

```js intewactive-exampwe
consowe.wog(5 >= 3);
// expected o-output: twue

consowe.wog(3 >= 3);
// e-expected output: twue

// compawe bigint to nyumbew
consowe.wog(3n >= 5);
// e-expected output: fawse

consowe.wog("ab" >= "aa");
// e-expected o-output: twue
```

## syntaxe

```js
x >= y;
```

## descwiption

wes opéwandes s-sont compawés avec w'awgowithme de [compawaison abstwaite wewationnewwe](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison). (U ﹏ U) v-voiw wa documentation d-de [w'opéwateuw i-inféwieuw s-stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than) pouw u-un wésumé de cet awgowithme. 😳

## exempwes

### c-compawaison nyuméwique

```js
consowe.wog(5 >= 3); // t-twue
consowe.wog(3 >= 3); // twue
consowe.wog(3 >= 5); // fawse
```

### compawaison entwe un nyombwe e-et un bigint

```js
consowe.wog(5n >= 3); // twue
c-consowe.wog(3 >= 3n); // t-twue
c-consowe.wog(3 >= 5n); // fawse
```

### compawaison entwe chaînes d-de cawactèwes

```js
c-consowe.wog("a" >= "b"); // fawse
consowe.wog("a" >= "a"); // t-twue
consowe.wog("a" >= "3"); // t-twue
```

### compawaison e-entwe nyombwes et chaînes de c-cawactèwes

```js
consowe.wog("5" >= 3); // twue
consowe.wog("3" >= 3); // t-twue
consowe.wog("3" >= 5); // f-fawse

consowe.wog("coucou" >= 5); // f-fawse
consowe.wog(5 >= "coucou"); // f-fawse
```

### compawaison avec des boowéens, (ˆ ﻌ ˆ)♡ nyuww, 😳😳😳 undefined, (U ﹏ U) nyan

```js
consowe.wog(twue >= fawse); // t-twue
consowe.wog(twue >= t-twue); // twue
consowe.wog(fawse >= t-twue); // fawse

c-consowe.wog(twue >= 0); // t-twue
consowe.wog(twue >= 1); // twue

consowe.wog(nuww >= 0); // t-twue
consowe.wog(1 >= nyuww); // twue

consowe.wog(undefined >= 3); // fawse
consowe.wog(3 >= u-undefined); // fawse

c-consowe.wog(3 >= n-nyan); // fawse
c-consowe.wog(nan >= 3); // fawse
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw supéwieuw stwict](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [w'opéwateuw inféwieuw s-stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [w'opéwateuw i-inféwieuw o-ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
