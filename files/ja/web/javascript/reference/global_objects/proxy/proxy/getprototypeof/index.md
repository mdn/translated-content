---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
---

{{JSRef}}

**`handler.getPrototypeOf()`** メソッドは `[[GetPrototypeOf]]` 内部メソッドに対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## 構文

```
const p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
});
```

### 引数

次の引数は `getPrototypeOf()` メソッドに渡されます。`this` はハンドラにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`getPrototypeOf()` メソッドはオブジェクト、または `null` を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- {{jsxref("Object/proto", "__proto__")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Operators/instanceof", "instanceof")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- `getPrototypeOf` メソッドはオブジェクト、または `null` を返さなければなりません。
- `target`が拡張不可の場合、 `Object.getPrototypeOf(proxy)` メソッドは `Object.getPrototypeOf(target)` と同じ値を返さなければなりません。

## 例

### 基本的な使い方

```js
const obj = {};
const proto = {};
const handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
```

### getPrototypeOf トラップが発生する５つの方法

```js
const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
```

### ２種類の例外

```js example-bad
const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return 'foo';
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
```

## 仕様書

| 仕様書                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.getPrototypeOf")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
