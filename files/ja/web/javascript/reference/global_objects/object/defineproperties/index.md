---
title: Object.defineProperties()
short-title: defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.defineProperties()`** メソッドは、オブジェクトに直接新しいプロパティを定義し、あるいは既存のプロパティを変更して、そのオブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Object.defineProperties()")}}

```js interactive-example
const object = {};

Object.defineProperties(object, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object.property1);
// 予想される結果: 42
```

## 構文

```js-nolint
Object.defineProperties(obj, props)
```

### 引数

- `obj`
  - : プロパティを定義または変更するオブジェクト。
- `props`
  - : キーが定義または変更されるプロパティの名前を表し、値がそれらのプロパティを記述するオブジェクトであるオブジェクトです。 `props` の各値は、データ記述子かアクセサー記述子のいずれかでなければなりませんが、両方を指定することはできません (詳細は {{jsxref("Object.defineProperty()")}} を参照してください)。

    データ記述子およびアクセサー記述子は、オプションで以下のキーを含むことができます。
    - `configurable`
      - : プロパティの記述子が変更でき、プロパティが対応するオブジェクトから削除できるときのみ `true`。
        **既定値は `false`。**
    - `enumerable`
      - : 対応するオブジェクトのプロパティを列挙したとき表示される場合のみ `true`。
        **既定値は `false`。**

    データ記述子には以下のオプションのキーもあります。
    - `value`
      - : プロパティに関連づける値。 JavaScript で有効な任意の値です (数値、オブジェクト、関数など)。
        **既定値は {{jsxref("undefined")}}。**
    - `writable`
      - : プロパティに関連づけられた値が{{jsxref("Operators", "assignment operator", "代入演算子", 1)}}で変更できる場合のみ `true`。
        **既定値は `false`。**

        アクセサー記述子には、以下のオプションのキーもあります。

    - `get`
      - : プロパティのゲッターとして用いられる関数。ゲッターがなければ {{jsxref("undefined")}} になります。関数の返値がプロパティの値として使用されます。
        **既定値は {{jsxref("undefined")}}。**
    - `set`
      - : プロパティのセッターとして用いられる関数。セッターがなければ {{jsxref("undefined")}} になります。関数はただひとつの引数として、プロパティに代入された新たな値を受取ります。
        **既定値は {{jsxref("undefined")}}。**

    記述子が `value`, `writable`, `get` `set` キーのいずれでもない場合は、データ記述子として扱われます。記述子に `value` または `writable` と `get` または `set` キーの両方があった場合は、例外が発生します。

### 返値

関数に渡されたオブジェクト。

## 例

### Object.defineProperties の使用

```js
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.defineProperties` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.defineProperties` のポリフィル](https://www.npmjs.com/package/object.defineproperties)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
