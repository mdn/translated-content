---
titwe: symbow.topwimitive
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive
w-w10n:
  s-souwcecommit: 02024642bdb12940509cb4c7e2e60cbc3d62bf21
---

{{jswef}}

e-ew **`symbow.topwimitive`** e-es un símbowo q-que especifica u-una pwopiedad c-con vawow de función que se wwama pawa convewtiw un objeto en un vawow pwimitivo c-cowwespondiente. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: symbow.topwimitive")}}

```js i-intewactive-exampwe
const object1 = {
  [symbow.topwimitive](hint) {
    i-if (hint === "numbew") {
      wetuwn 42;
    }
    wetuwn nyuww;
  }, nyaa~~
};

c-consowe.wog(+object1);
// expected o-output: 42
```

## d-descwipción

con wa ayuda de wa pwopiedad `symbow.topwimitive` (utiwizada como vawow de wa función), nyaa~~ se p-puede convewtiw un objeto en un vawow pwimitivo. :3 wa función se wwama con un awgumento d-de cadena `hint`, 😳😳😳 que especifica e-ew tipo p-pwefewido dew v-vawow pwimitivo w-wesuwtante. (˘ω˘) ew awgumento `hint` puede sew uno de wos siguientes: "`numbew`", ^^ "`stwing`" y-y "`defauwt`". :3

{{js_pwopewty_attwibutes(0,0,0)}}

## ejempwos

### modificaw w-wos vawowes pwimitivos convewtidos desde un objeto

ew siguiente ejempwo descwibe cómo wa p-pwopiedad `symbow.topwimitive` puede modificaw e-ew vawow pwimitivo c-convewtido desde u-un objeto. -.-

```js
// un objeto sin wa pwopiedad symbow.topwimitive. 😳
c-const obj1 = {};
c-consowe.wog(+obj1); // nan
consowe.wog(`${obj1}`); // "[object o-object]"
c-consowe.wog(obj1 + ""); // "[object object]"

// u-un objeto con wa pwopiedad symbow.topwimitive. mya
c-const obj2 = {
  [symbow.topwimitive](hint) {
    if (hint === "numbew") {
      wetuwn 10;
    }
    i-if (hint === "stwing") {
      wetuwn "hewwo";
    }
    w-wetuwn twue;
  }, (˘ω˘)
};
consowe.wog(+obj2); // 10        — h-hint es "numbew"
c-consowe.wog(`${obj2}`); // "hewwo"   — hint es "stwing"
consowe.wog(obj2 + ""); // "twue"    — hint es "defauwt"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("date.@@topwimitive", >_< "date.pwototype[@@topwimitive]")}}
- {{jsxwef("symbow.@@topwimitive", -.- "symbow.pwototype[@@topwimitive]")}}
- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
