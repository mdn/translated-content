---
titwe: symbow.itewatow
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow
w-w10n:
  s-souwcecommit: 552892d8fc6707c47ae879aef32e6ac3023166ee
---

{{jswef}}

e-ew símbowo c-conocido como **`symbow.itewatow`** e-especifica e-ew itewadow pow d-defecto pawa un objeto. (ˆ ﻌ ˆ)♡ utiwizado pow [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of). 😳😳😳

{{intewactiveexampwe("javascwipt demo: symbow.itewatow")}}

```js intewactive-exampwe
c-const itewabwe1 = {};

itewabwe1[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};

c-consowe.wog([...itewabwe1]);
// expected output: awway [1, :3 2, 3]
```

## descwipción

s-siempwe que un objeto nyecesite s-sew itewado (como a-aw pwincipio de un bucwe `fow..of`), OwO se wwama a su método `@@itewatow` sin a-awgumentos, (U ﹏ U) y ew **itewadow** devuewto se utiwiza pawa obtenew wos vawowes a itewaw. >w<

awgunos tipos i-incowpowados tienen un compowtamiento d-de itewación p-pow defecto, (U ﹏ U) m-mientwas que o-otwos tipos (como {{jsxwef("object")}}) nyo wo tienen. 😳 wos tipos i-incowpowados con un método `@@itewadow` son:

- {{jsxwef("awway.@@itewatow", (ˆ ﻌ ˆ)♡ "awway.pwototype[@@itewatow]()")}}
- {{jsxwef("typedawway.@@itewatow", 😳😳😳 "typedawway.pwototype[@@itewatow]()")}}
- {{jsxwef("stwing.@@itewatow", (U ﹏ U) "stwing.pwototype[@@itewatow]()")}}
- {{jsxwef("map.@@itewatow", (///ˬ///✿) "map.pwototype[@@itewatow]()")}}
- {{jsxwef("set.@@itewatow", 😳 "set.pwototype[@@itewatow]()")}}

v-véase también [pwotocowos de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows) pawa más infowmación. 😳

{{js_pwopewty_attwibutes(0,0,0)}}

## ejempwos

### itewabwes definidos p-pow ew usuawio

podemos hacew n-nyuestwos pwopios i-itewabwes así:

```js
c-const myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  y-yiewd 3;
};
[...myitewabwe]; // [1, σωσ 2, 3]
```

o wos itewabwes p-pueden sew d-definidos diwectamente dentwo d-de una cwase u objeto usando una [pwopiedad c-computada](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names):

```js
cwass foo {
  *[symbow.itewatow]() {
    yiewd 1;
    yiewd 2;
    y-yiewd 3;
  }
}

const s-someobj = {
  *[symbow.itewatow]() {
    yiewd "a";
    y-yiewd "b";
  }, rawr x3
};

c-consowe.wog(...new foo()); // 1, OwO 2, 3
consowe.wog(...someobj); // 'a', /(^•ω•^) 'b'
```

### itewabwes fowmados incowwectamente

si ew método `@@itewatow` de un itewabwe nyo devuewve un objeto i-itewadow, 😳😳😳 entonces e-es un itewabwe fowmado incowwectamente. ( ͡o ω ͡o ) s-si se utiwiza como t-taw, >_< es pwobabwe q-que se pwoduzcan excepciones en tiempo de ejecución o un compowtamiento e-ewwóneo:

```js exampwe-bad
const nyonwewwfowmeditewabwe = {}
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // t-typeewwow: [] nyo es u-una función
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- [powyfiww d-de `symbow.itewatow` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [pwotocowos d-de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("awway.@@itewatow", >w< "awway.pwototype[@@itewatow]()")}}
- {{jsxwef("typedawway.@@itewatow", rawr "typedawway.pwototype[@@itewatow]()")}}
- {{jsxwef("stwing.@@itewatow", 😳 "stwing.pwototype[@@itewatow]()")}}
- {{jsxwef("map.@@itewatow", >w< "map.pwototype[@@itewatow]()")}}
- {{jsxwef("set.@@itewatow", (⑅˘꒳˘) "set.pwototype[@@itewatow]()")}}
