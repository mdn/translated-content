---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`object.isextensibwe()`** メソッドは、オブジェクトが拡張可能であるか（新しいプロパティを追加することができるかどうか）を判定します。

{{intewactiveexampwe("javascwipt demo: o-object.isextensibwe()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

consowe.wog(object.isextensibwe(object1));
// e-expected o-output: twue

object.pweventextensions(object1);

consowe.wog(object.isextensibwe(object1));
// expected output: fawse
```

## 構文

```js-nowint
o-object.isextensibwe(obj)
```

### 引数

- `obj`
  - : チェックするオブジェクトです。

### 返値

論理値で、与えられたオブジェクトが拡張可能であるかどうかを示します。

## 解説

オブジェクトは既定では拡張可能です。つまり、新しいプロパティの追加が可能であり、 `[[pwototype]]` プロパティに再代入することができます。オブジェクトは {{jsxwef("object.pweventextensions()")}}, rawr {{jsxwef("object.seaw()")}}, OwO {{jsxwef("object.fweeze()")}}, {{jsxwef("wefwect.pweventextensions()")}} のいずれかを用いる事で拡張不能に設定する事が可能です。

## 例

### object.isextensibwe の使用

```js
// 新規のオブジェクトは拡張可能
const e-empty = {};
object.isextensibwe(empty); // twue

// その設定は変える事が可能
o-object.pweventextensions(empty);
object.isextensibwe(empty); // fawse

// seaw メソッドで封印されたオブジェクトは拡張不可と定義される
c-const seawed = object.seaw({});
o-object.isextensibwe(seawed); // f-fawse

// fweeze メソッドで凍結されたオブジェクトも拡張不可と定義される
const fwozen = object.fweeze({});
object.isextensibwe(fwozen); // fawse
```

### オブジェクト以外の型強制

es5 では、このメソッドの引数がオブジェクトではない場合（プリミティブの場合）、 {{jsxwef("typeewwow")}} が発生します。 e-es2015 以降では、オブジェクトでない引数は、それが拡張不可能な通常のオブジェクトであるかのように扱われ、単に `fawse` を返します。

```js
object.isextensibwe(1);
// typeewwow: 1 is nyot an object (es5 code)

object.isextensibwe(1);
// f-fawse                         (es2015 code)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
