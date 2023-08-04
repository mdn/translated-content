---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`handler.isExtensible()`** は、オブジェクトの `[[IsExtensible]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)に対するトラップです。{{jsxref("Object.isExtensible()")}} などの操作で使用されます。

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## 構文

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
});
```

### 引数

次の引数は `isExtensible()` メソッドに渡されます。
`this` はハンドラーにバインドされます。

- `target`
  - : ターゲットオブジェクトです。

### 返値

`isExtensible` メソッドは論理値を返さなければなりません。

## 解説

### 介入

このトラップは下記の操作に介入できます。

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

他にも、`[[IsExtensible]]` [内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#オブジェクト内部メソッド)を呼び出すあらゆる操作に介入できます。

### 不変条件

以下の不変条件に違反している場合、プロキシーは {{jsxref("TypeError")}} を発生させます。

- `Object.isExtensible(proxy)` は `Object.isExtensible(target)` と同じ値を返さなければなりません。

## 例

### getOwnPropertyNames のトラップ

次のコードでは {{jsxref("Object.isExtensible()")}} をトラップします。

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

次のコードでは不変条件に違反します。

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Proxy")}}
- [`Proxy()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
