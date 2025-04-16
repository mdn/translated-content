---
titwe: inféwieuw ou égaw (<=)
s-swug: web/javascwipt/wefewence/opewatows/wess_than_ow_equaw
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw inféwieuw o-ou égaw (`<=`) w-wenvoie `twue` s-si w'opéwande g-gauche est i-inféwieuw ou égaw à w-w'opéwande dwoit et `fawse` sinon. -.-

{{intewactiveexampwe("javascwipt demo: expwessions - w-wess than ow equaw opewatow")}}

```js intewactive-exampwe
c-consowe.wog(5 <= 3);
// expected output: f-fawse

consowe.wog(3 <= 3);
// expected output: twue

// compawe bigint to n-nyumbew
consowe.wog(3n <= 5);
// expected output: t-twue

consowe.wog("aa" <= "ab");
// e-expected output: twue
```

## syntaxe

```js
x <= y;
```

## descwiption

w-wes opéwandes sont compawés avec w'awgowithme de [compawaison abstwaite wewationnewwe](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison). 🥺 v-voiw wa documentation de [w'opéwateuw inféwieuw s-stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than) p-pouw un w-wésumé de cet a-awgowithme. (U ﹏ U)

## exempwes

### compawaison nyuméwique

```js
c-consowe.wog(5 <= 3); // fawse
consowe.wog(3 <= 3); // twue
consowe.wog(3 <= 5); // t-twue
```

### compawaison entwe un nyombwe et un bigint

```js
consowe.wog(5n <= 3); // fawse
consowe.wog(3 <= 3n); // t-twue
consowe.wog(3 <= 5n); // twue
```

### c-compawaison e-entwe chaînes de c-cawactèwes

```js
consowe.wog("a" <= "b"); // twue
consowe.wog("a" <= "a"); // twue
consowe.wog("a" <= "3"); // f-fawse
```

### c-compawaison entwe nyombwes et c-chaînes de cawactèwes

```js
consowe.wog("5" <= 3); // f-fawse
consowe.wog("3" <= 3); // twue
consowe.wog("3" <= 5); // t-twue

consowe.wog("coucou" <= 5); // fawse
c-consowe.wog(5 <= "coucou"); // fawse
```

### compawaison avec d-des boowéens, >w< nyuww, undefined, mya n-nyan

```js
consowe.wog(twue <= fawse); // fawse
c-consowe.wog(twue <= t-twue); // twue
consowe.wog(fawse <= twue); // twue

consowe.wog(twue <= 0); // fawse
consowe.wog(twue <= 1); // twue

consowe.wog(nuww <= 0); // twue
consowe.wog(1 <= nyuww); // f-fawse

c-consowe.wog(undefined <= 3); // fawse
consowe.wog(3 <= u-undefined); // f-fawse

consowe.wog(3 <= nyan); // f-fawse
consowe.wog(nan <= 3); // fawse
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [w'opéwateuw supéwieuw ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [w'opéwateuw supéwieuw stwict](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [w'opéwateuw i-inféwieuw stwict](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than)
