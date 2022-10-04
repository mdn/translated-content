---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
---

{{JSRef}}

**`handler.preventExtensions()`** は {{jsxref("Object.preventExtensions()")}} に対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## 構文

```js
const p = new Proxy(target, {
  preventExtensions: function(target) {
  }
});
```

### 引数

次の引数は `preventExtensions()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`preventExtensions()` メソッドは真偽値を返さなければなりません。

## 解説

**`handler.preventExtensions()`** メソッドは {{jsxref("Object.preventExtensions()")}} に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- `Object.preventExtensions(proxy)` は、 `Object.isExtensible(proxy)` が `false` の場合のみ `true` を返します。

## 例

### preventExtensions のトラップ

次のコードでは {{jsxref("Object.preventExtensions()")}} をトラップします。

```js
const p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "called"
                                          // false
```

The following code violates the invariant.

```js example-bad
const p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError is thrown
```

## 仕様書

| 仕様書                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-preventextensions', '[[PreventExtensions]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.preventExtensions")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
