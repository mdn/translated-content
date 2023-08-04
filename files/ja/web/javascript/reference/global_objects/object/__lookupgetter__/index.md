---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---

{{JSRef}} {{deprecated_header}}

**`__lookupGetter__`** メソッドは、指定されたプロパティに結びつけられているゲッター関数を返します。

## 構文

```js
__lookupGetter__(sprop);
```

### 引数

- `sprop`
  - : ゲッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定されたプロパティへのゲッターとしてバインドされている関数です。

## 解説

オブジェクトのプロパティに対してゲッター関数が定義されていても、そのプロパティを通してゲッター関数への参照を得ることはできません。そのプロパティは、ゲッター関数の返値を参照するからです。 `__lookupGetter__` を使うことで、そのゲッター関数への参照を得ることができます。

これは標準化された {{jsxref("Object.getOwnPropertyDescriptor()")}} と {{jsxref("Object.getPrototypeOf()")}} を使用する方法で行うことが可能になりました。

## 例

### プロパティゲッターを取得するための標準準拠の方法と標準外の方法

```js
var obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

// 標準外かつ非推奨の方法
obj.__lookupGetter__("foo");
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })

// 標準準拠の方法
Object.getOwnPropertyDescriptor(obj, "foo").get;
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.prototype.__lookupGetter__` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- [`Object.prototype.__lookupSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}} 演算子
- {{jsxref("Object.getOwnPropertyDescriptor()")}} と
  {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
