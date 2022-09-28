---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
---

{{JSRef}}

**`handler.ownKeys()`** メソッドは {{jsxref("Reflect.ownKeys()")}} に対するトラップです。

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## 構文

```
const p = new Proxy(target, {
  ownKeys: function(target) {
  }
});
```

### 引数

次の引数は `ownKeys` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`ownKeys()` メソッドは列挙可能オブジェクトを返さなければなりません。

## 解説

**`handler.ownKeys()`** メソッドは {{jsxref("Reflect.ownKeys()")}} に対するトラップです。

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

### 不変条件

以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。

- `ownKeys`の結果はリストです。
- 結果リストのそれぞれの要素の型は{{jsxref("String")}} または {{jsxref("Symbol")}}のどちらかです。
- 結果リストはターゲットオブジェクトのすべての非設定の独自プロパティのキーを含みます。
- ターゲットオブジェクトが拡張可能でないなら、結果リストはターゲットオブジェクトのすべての独自プロパティのキーを含まなければなりません。そして、他の値を含みません。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.getOwnPropertyNames()")}} をトラップします。

```js
const p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "called"
                                            // [ 'a', 'b', 'c' ]
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

const p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## 仕様書

| 仕様書                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Proxy.handler.ownKeys")}}

## 関連情報

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
