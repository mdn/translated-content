---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
---

{{JSRef}}

**`handler.isExtensible()`** は {{jsxref("Object.isExtensible()")}} に対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  isExtensible: function(target) {
  }
});
```

### 引数

次の引数は `isExtensible` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`isExtensible` メソッドは真偽値を返さなければなりません。

## 解説

**`handler.isExtensible()`** メソッドは {{jsxref("Object.isExtensible()")}} に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- `Object.isExtensible(proxy)` は `Object.isExtensible(target)` と同じ値を返さなければなりません。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.isExtensible()")}} をトラップします。

```js
const p = new Proxy({}, {
  isExtensible: function(target) {
    console.log('called');
    return true;
  }
});

console.log(Object.isExtensible(p)); // "called"
                                     // true
```

次のコードでは不変条件に違反します。

```js example-bad
const p = new Proxy({}, {
  isExtensible: function(target) {
    return false;
  }
});

Object.isExtensible(p); // TypeError is thrown
```

## 仕様書

| 仕様書                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-isextensible', '[[IsExtensible]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.isExtensible")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
