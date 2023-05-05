---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.getPrototypeOf()`** メソッドは、オブジェクトの `[[GetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.getPrototypeOf()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## 構文

```js-nolint
new Proxy(obj, {
  getPrototypeOf(target) {
    // …
  }
});
```

### 引数

次の引数は `getPrototypeOf()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`getPrototypeOf()` メソッドはオブジェクト、または `null` を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

他にも、`[[GetPrototypeOf]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- `getPrototypeOf` メソッドはオブジェクト、または `null` を返さなければなりません。
- `target`が拡張不可の場合、 `Object.getPrototypeOf(proxy)` メソッドは `Object.getPrototypeOf(target)` と同じ値を返さなければなりません。

## 例

### 基本的な使い方

```js
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### getPrototypeOf トラップが発生する５つの方法

```js
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### 2 種類の例外

```js example-bad
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
