---
title: Object.getOwnPropertyDescriptors()
short-title: getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Object.getOwnPropertyDescriptors()`** は静的メソッドで、指定したオブジェクトのすべてのプロパティ記述子を返します。

{{InteractiveExample("JavaScript デモ: Object.getOwnPropertyDescriptors()")}}

```js interactive-example
const object = {
  foo: 42,
};

const descriptors = Object.getOwnPropertyDescriptors(object);

console.log(descriptors.foo.writable);
// 予想される結果: true

console.log(descriptors.foo.value);
// 予想される結果: 42
```

## 構文

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### 引数

- `obj`
  - : すべてのプロパティ記述子を取得するオブジェクト。

### 返値

オブジェクトのすべてのプロパティ記述子を含むオブジェクト。プロパティがない場合、空オブジェクトの可能性がある。

## 説明

このメソッドは、オブジェクトのすべての独自のプロパティの正確な記述の検査を可能にします。 JavaScript では、*プロパティ*は文字列値による名前または {{jsxref("Symbol")}} とプロパティ記述子で構成されています。プロパティ記述子の型と属性についての詳細情報は、{{jsxref("Object.defineProperty()")}} で確認してください。

_プロパティ記述子_ は、次の属性のいくつかを持ちます。

- `value`
  - : プロパティに関連づけられた値です（データ記述子のみ）。
- `writable`
  - : `true` である場合、プロパティに関連づけられた値は変更することができます（データ記述子のみ）。
- `get`
  - : プロパティのゲッターとして提供する関数、あるいはゲッターがない場合は {{jsxref("undefined")}} です（アクセサー記述子のみ）。
- `set`
  - : プロパティのセッターとして提供する関数、あるいはセッターがない場合は {{jsxref("undefined")}} です（アクセサー記述子のみ）。
- `configurable`
  - : `true` である場合、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
- `enumerable`
  - : `true` である場合、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。

## 例

### シャローコピーの生成

{{jsxref("Object.assign()")}} メソッドは、ソースオブジェクトから対象のオブジェクトに対して列挙可能かつ自身のプロパティのみコピーできる一方、2 つの未知のオブジェクト間の[シャローコピー](/ja/docs/Glossary/Shallow_copy)のために、このメソッドと {{jsxref("Object.create()")}} を使用できます。

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### サブクラスの作成

サブクラスを作成する通常の方法は、サブクラスを定義し、そのプロトタイプをスーパークラスのインスタンスに設定し、そのインスタンスにプロパティを定義することです。これは特にセッターやゲッターが無骨になることがあります。代わりに、プロトタイプを設定するためにこのコードを使用することもできます。

```js
function superclass() {}
superclass.prototype = {
  // ここで superclass のコンストラクター、メソッド、プロパティを定義
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // ここで subclass のコンストラクター、メソッド、プロパティを定義
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.getOwnPropertyDescriptors` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims による `Object.getOwnPropertyDescriptors` のポリフィル](https://www.npmjs.com/package/object.getownpropertydescriptors)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
