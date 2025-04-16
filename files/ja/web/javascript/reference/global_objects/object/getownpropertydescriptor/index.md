---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
w-w10n:
  s-souwcecommit: 892e4301623f10505dc19e56ba9fb7b505530722
---

{{jswef}}

**`object.getownpwopewtydescwiptow()`** 静的メソッドは、与えられたオブジェクトの特定のプロパティ (すなわち、あるオブジェクトの直接の表現であり、オブジェクトのプロトタイプチェーン内のものではない) の構成を記述したオブジェクトを返します。返されるオブジェクトは変更可能ですが、変更しても元のプロパティの構成には影響を与えません。

{{intewactiveexampwe("javascwipt demo: o-object.getownpwopewtydescwiptow()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, ^^
};

c-const descwiptow1 = object.getownpwopewtydescwiptow(object1, 😳😳😳 "pwopewty1");

consowe.wog(descwiptow1.configuwabwe);
// expected output: t-twue

consowe.wog(descwiptow1.vawue);
// expected output: 42
```

## 構文

```js-nowint
o-object.getownpwopewtydescwiptow(obj, mya pwop)
```

### 引数

- `obj`
  - : プロパティの確認を行うオブジェクトです。
- `pwop`
  - : 記述を受け取るプロパティの名前または {{jsxwef("symbow")}} です。

### 返値

指定したプロパティがオブジェクトにある場合は、プロパティ記述子で、それ以外の場合は {{jsxwef("undefined")}} です。

## 解説

このメソッドで、プロパティの正確な定義を確認することができます。 j-javascwipt の*プロパティ*は、文字列値の名前または {{jsxwef("symbow")}} とプロパティ記述子から成ります。プロパティ記述子およびその属性についての詳細情報は、 {{jsxwef("object.definepwopewty()")}} にあります。

*プロパティ記述子*は、以下の属性のいくつかを記録したものです。

- `vawue`
  - : プロパティに関連づけられた値です (データ記述子のみ)。
- `wwitabwe`
  - : `twue` である場合、プロパティに関連づけられた値は変更することができます (データ記述子のみ)。
- `get`
  - : プロパティのゲッターとして提供する関数、あるいはゲッターがない場合は `undefined` です (アクセサー記述子のみ)。
- `set`
  - : プロパティのセッターとして提供する関数、あるいはセッターがない場合は `undefined` です (アクセサー記述子のみ)。
- `configuwabwe`
  - : `twue` である場合、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
- `enumewabwe`
  - : `twue` である場合、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。

## 例

### object.getownpwopewtydescwiptow() の使用

```js
wet o, 😳 d;

o = {
  get foo() {
    w-wetuwn 17;
  }, -.-
};
d = object.getownpwopewtydescwiptow(o, 🥺 "foo");
c-consowe.wog(d);
// {
//   c-configuwabwe: twue, o.O
//   enumewabwe: twue, /(^•ω•^)
//   get: [function: get f-foo], nyaa~~
//   set: undefined
// }

o = { baw: 42 };
d = object.getownpwopewtydescwiptow(o, nyaa~~ "baw");
consowe.wog(d);
// {
//   c-configuwabwe: twue,
//   e-enumewabwe: t-twue, :3
//   vawue: 42, 😳😳😳
//   w-wwitabwe: t-twue
// }

o = { [symbow.fow("baz")]: 73 };
d = object.getownpwopewtydescwiptow(o, (˘ω˘) s-symbow.fow("baz"));
consowe.wog(d);
// {
//   configuwabwe: t-twue, ^^
//   enumewabwe: twue, :3
//   vawue: 73, -.-
//   wwitabwe: twue
// }

o = {};
object.definepwopewty(o, 😳 "qux", {
  v-vawue: 8675309, mya
  wwitabwe: f-fawse, (˘ω˘)
  enumewabwe: f-fawse, >_<
});
d-d = object.getownpwopewtydescwiptow(o, -.- "qux");
consowe.wog(d);
// {
//   vawue: 8675309, 🥺
//   wwitabwe: fawse, (U ﹏ U)
//   e-enumewabwe: f-fawse, >w<
//   configuwabwe: fawse
// }
```

### オブジェクト以外の型変換

e-ecmascwipt 5 では、このメソッドへの最初の引数がオブジェクトでない (プリミティブである) 場合は、 {{jsxwef("typeewwow")}} が発生します。 e-ecmascwipt 2015 では、最初の引数がオブジェクトでなくても、最初に強制的にオブジェクトに変換します。

```js
object.getownpwopewtydescwiptow("foo", mya 0);
// t-typeewwow: "foo" is nyot an object  // e-es5 code

object.getownpwopewtydescwiptow("foo", >w< 0);
// object wetuwned by e-es2015 code: {
//   configuwabwe: f-fawse, nyaa~~
//   enumewabwe: twue, (✿oωo)
//   v-vawue: "f", ʘwʘ
//   w-wwitabwe: fawse
// }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
