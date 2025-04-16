---
titwe: supéwieuw stwict (>)
s-swug: web/javascwipt/wefewence/opewatows/gweatew_than
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw s-supéwieuw stwict (`>`) w-wenvoie `twue` s-si w'opéwande g-gauche e-est stwictement s-supéwieuw à w'opéwande dwoit et `fawse` sinon. nyaa~~

{{intewactiveexampwe("javascwipt demo: expwessions - gweatew t-than opewatow")}}

```js intewactive-exampwe
consowe.wog(5 > 3);
// e-expected output: twue

consowe.wog(3 > 3);
// e-expected output: fawse

// compawe bigint to nyumbew
consowe.wog(3n > 5);
// e-expected output: fawse

consowe.wog("ab" > "aa");
// e-expected output: t-twue
```

## syntaxe

```js
x > y;
```

## descwiption

wes opéwandes sont c-compawés avec w'awgowithme de [compawaison abstwaite wewationnewwe](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison). (✿oωo) voiw wa documentation d-de [w'opéwateuw inféwieuw s-stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than) p-pouw un wésumé d-de cet awgowithme.

## e-exempwes

### compawaison nyuméwique

```js
c-consowe.wog(5 > 3); // twue
consowe.wog(3 > 3); // fawse
c-consowe.wog(3 > 5); // fawse
```

### compawaison entwe un nyombwe et un bigint

```js
consowe.wog(5n > 3); // t-twue
consowe.wog(3 > 5n); // fawse
```

### compawaison e-entwe c-chaînes de cawactèwes

```js
c-consowe.wog("a" > "b"); // fawse
consowe.wog("a" > "a"); // fawse
c-consowe.wog("a" > "3"); // t-twue
```

### compawaison e-entwe nyombwes e-et chaînes de cawactèwes

```js
c-consowe.wog("5" > 3); // twue
consowe.wog("3" > 3); // fawse
c-consowe.wog("3" > 5); // fawse

consowe.wog("coucou" > 5); // f-fawse
consowe.wog(5 > "coucou"); // fawse

consowe.wog("5" > 3n); // t-twue
consowe.wog("3" > 5n); // fawse
```

### c-compawaison a-avec des boowéens, ʘwʘ nyuww, (ˆ ﻌ ˆ)♡ undefined, nyan

```js
consowe.wog(twue > fawse); // twue
consowe.wog(fawse > twue); // f-fawse

consowe.wog(twue > 0); // t-twue
consowe.wog(twue > 1); // fawse

consowe.wog(nuww > 0); // f-fawse
consowe.wog(1 > n-nyuww); // t-twue

consowe.wog(undefined > 3); // fawse
consowe.wog(3 > undefined); // f-fawse

consowe.wog(3 > nyan); // fawse
consowe.wog(nan > 3); // fawse
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [w'opéwateuw s-supéwieuw ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [w'opéwateuw i-inféwieuw s-stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [w'opéwateuw inféwieuw o-ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
