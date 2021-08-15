---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
tags:
  - Deprecated
  - JavaScript
  - Method
  - Object
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Object.lookupSetter
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
---
{{JSRef}} {{deprecated_header}}

**`__lookupSetter__`** メソッドは、指定されたプロパティに結びつけられているセッター関数を返します。

## 構文

```js
__lookupSetter__(sprop)
```

### 引数

- `sprop`
  - : セッター関数を返すプロパティの名前を表す文字列です。

### 返値

指定されたプロパティへのセッターとしてバインドされている関数です。

## 解説

オブジェクトのプロパティに対してセッター関数が定義されていても、そのプロパティを通してセッター関数への参照を得ることはできません。そのプロパティは、セッター関数の返値を参照するからです。 `__lookupSetter__` を使うことで、セッター関数への参照を得ることができます。

これは標準化された {{jsxref("Object.getOwnPropertyDescriptor()")}} を使用する方法で行うことが可能になりました。

## 例

### プロパティセッターを取得するための標準準拠の方法と標準外の方法

```js
var obj = {
  set foo(value) {
    this.bar = value;
  }
};

// 標準外かつ非推奨の方法
obj.__lookupSetter__('foo')
// (function(value) { this.bar = value; })

// 標準準拠の方法
Object.getOwnPropertyDescriptor(obj, 'foo').set;
// (function(value) { this.bar = value; })
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.prototype.__lookupSetter__` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- {{jsxref("Object.prototype.__lookupGetter__()")}}
- {{jsxref("Functions/set", "set")}} 演算子
- {{jsxref("Object.getOwnPropertyDescriptor()")}} と
  {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.__defineGetter__()")}}
- {{jsxref("Object.prototype.__defineSetter__()")}}
- [JavaScript ガイド: ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
