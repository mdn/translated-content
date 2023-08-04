---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

**`Object.getOwnPropertyDescriptors()`** メソッドは、指定したオブジェクトのすべてのプロパティ記述子を返します。

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## 構文

```
Object.getOwnPropertyDescriptors(obj)
```

### 引数

- `obj`
  - : すべてのプロパティディスクリプタを取得するオブジェクト。

### 返値

オブジェクトのすべてのプロパティ記述子を含むオブジェクト。プロパティがない場合、空オブジェクトの可能性がある。

## 説明

このメソッドは、オブジェクトのすべての独自のプロパティの正確な記述の検査を可能にします。 JavaScript では、*プロパティ*は文字列値による名前または {{jsxref("Symbol")}} とプロパティ記述子で構成されています。プロパティ記述子の型と属性についての詳細情報は、{{jsxref("Object.defineProperty()")}} で確認してください。

_プロパティディスクリプタ_ は、次の属性のいくつかを持ちます。

- `value`
  - : プロパティに関連づけられた値です (データディスクリプタのみ)。
- `writable`
  - : `true` である場合、プロパティに関連づけられた値は変更することができます (データ記述子のみ)。
- `get`
  - : プロパティのゲッターとして提供する関数、あるいはゲッターがない場合は {{jsxref("undefined")}} です (アクセサ記述子のみ)。
- `set`
  - : プロパティのセッターとして提供する関数、あるいはセッターがない場合は {{jsxref("undefined")}} です (アクセサ記述子のみ)。
- `configurable`
  - : `true` である場合、この種の記述子を変更することや、対応するオブジェクトからプロパティを削除することができます。
- `enumerable`
  - : `true` である場合、このプロパティは対応するオブジェクトでのプロパティ列挙に現れます。

## 例

### 浅いコピーの生成

{{jsxref("Object.assign()")}} メソッドは、ソースオブジェクトから対象のオブジェクトに対して enumerable とプロパティのみコピーできる一方、2 つの未知のオブジェクト間の浅いコピーのために、このメソッドと {{jsxref("Object.create()")}} を使用できます：

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
  // Define your methods and properties here
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Define your methods and properties here
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.getOwnPropertyDescriptors")}}

## 関連情報

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
