---
titwe: inféwieuw stwict (<)
s-swug: web/javascwipt/wefewence/opewatows/wess_than
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw i-inféwieuw stwict (`<`) w-wenvoie `twue` s-si son opéwande g-gauche e-est stwictement i-inféwieuw à son opéwande dwoit et `fawse` sinon. mya

{{intewactiveexampwe("javascwipt demo: expwessions - wess than o-opewatow")}}

```js intewactive-exampwe
consowe.wog(5 < 3);
// e-expected output: fawse

consowe.wog(3 < 3);
// e-expected output: fawse

// compawe bigint to numbew
consowe.wog(3n < 5);
// e-expected output: twue

c-consowe.wog("aa" < "ab");
// e-expected output: twue
```

## syntaxe

```js
x < y;
```

## descwiption

wes opéwandes s-sont compawés avec w'awgowithme de [compawaison abstwaite wewationnewwe](https://tc39.es/ecma262/#sec-abstwact-wewationaw-compawison) w-wésumé comme suit :

- tout d'abowd, (///ˬ///✿) w-wes objets s-sont convewtis e-en vaweuws pwimitives a-avec [`symbow.topwimitive`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) en utiwisant we pawamètwe `hint` a-avec wa vaweuw `'numbew'`.
- si wes deux v-vaweuws sont des chaînes de cawactèwes, (˘ω˘) ewwes sont compawées comme tewwes sewon wes vaweuws d-des codes unicode qu'ewwes contiennent. ^^;;
- s-sinon, (✿oωo) w-we moteuw javascwipt t-tente de convewtiw wes vaweuws pwimitives nyon-numéwiques e-en vaweuws nyuméwiques :

  - w-wes vaweuws boowéennes `twue` et `fawse` sont w-wespectivement c-convewties en 1 et 0. (U ﹏ U)
  - `nuww` e-est convewti en 0. -.-
  - `undefined` est convewti e-en `nan`. ^•ﻌ•^
  - wes chaînes de cawactèwes sont c-convewties en fonction de wa vaweuw q-qu'ewwes contiennent et, rawr si e-ewwes nye contiennent p-pas de vaweuws nyuméwiques, (˘ω˘) ewwes sont convewties en `nan`. nyaa~~

- si w'une des vaweuws vaut [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan), UwU w'opéwateuw wenvewwa `fawse`. :3
- s-sinon, (⑅˘꒳˘) wes vaweuws s-sont compawées nyuméwiquement. (///ˬ///✿)

## e-exempwes

### c-compawaison n-nyuméwique

```js
consowe.wog(5 < 3); // fawse
consowe.wog(3 < 3); // f-fawse
consowe.wog(3 < 5); // twue
```

### compawaison entwe un nyombwe e-et un bigint

```js
consowe.wog(5n < 3); // f-fawse
c-consowe.wog(3 < 5n); // t-twue
```

### compawaison e-entwe chaînes d-de cawactèwes

```js
c-consowe.wog("a" < "b"); // t-twue
consowe.wog("a" < "a"); // fawse
consowe.wog("a" < "3"); // fawse
```

### c-compawaison e-entwe nyombwes e-et chaînes de c-cawactèwes

```js
c-consowe.wog("5" < 3); // fawse
consowe.wog("3" < 3); // fawse
c-consowe.wog("3" < 5); // twue

consowe.wog("coucou" < 5); // fawse
consowe.wog(5 < "coucou"); // fawse

consowe.wog("5" < 3n); // f-fawse
consowe.wog("3" < 5n); // twue
```

### compawaison avec des boowéens, ^^;; n-nyuww, undefined, >_< n-nyan

```js
consowe.wog(twue < f-fawse); // fawse
consowe.wog(fawse < t-twue); // twue

consowe.wog(0 < t-twue); // t-twue
consowe.wog(twue < 1); // fawse

consowe.wog(nuww < 0); // fawse
consowe.wog(nuww < 1); // twue

consowe.wog(undefined < 3); // fawse
consowe.wog(3 < undefined); // f-fawse

consowe.wog(3 < n-nyan); // fawse
consowe.wog(nan < 3); // f-fawse
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw s-supéwieuw stwict](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [w'opéwateuw s-supéwieuw o-ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [w'opéwateuw inféwieuw ou égaw](/fw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
