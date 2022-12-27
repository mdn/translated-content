---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

**`handler.apply()`** メソッドは関数呼び出しに対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
```

### 引数

次の引数が `apply()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクト
- `thisArg`
  - : この呼び出しに対する `this` 引数
- `argumentsList`
  - : この呼び出しに対する引数リスト

### 返値

`apply()` メソッドはどんな値でも返すことができます。

## 解説

**`handler.apply()`** メソッドは関数呼び出しに対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} and {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

`target` は呼び出し可能、つまり関数でなければなりません。

## 例

### 関数呼び出しのトラップ

次のコードでは、関数呼び出しをトラップします。

```js
const p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log('called: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
                         // 6
```

## 仕様書

| 仕様書                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist', '[[Call]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.apply")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
