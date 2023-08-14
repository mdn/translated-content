---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.ownKeys()`** メソッドは、オブジェクトの `[[OwnPropertyKeys]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。 {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
});
```

### 引数

次の引数は `ownKeys()` メソッドに渡されます。 `this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`ownKeys()` メソッドは列挙可能オブジェクトを返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

他にも、`[[OwnPropertyKeys]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生します。

- `ownKeys()` の結果は配列である必要があります。
- 配列のそれぞれの要素の型は、{{jsxref("String")}} または {{jsxref("Symbol")}} のどちらかです。
- 結果のリストはターゲットオブジェクトのすべての非設定の独自プロパティのキーを含みます。
- ターゲットオブジェクトが拡張可能でないなら、結果リストはターゲットオブジェクトのすべての独自プロパティのキーを含まなければなりません。そして、他の値を含みません。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.getOwnPropertyNames()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p));
// "called"
// [ 'a', 'b', 'c' ]
```

次のコードでは不変条件に違反します。

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
