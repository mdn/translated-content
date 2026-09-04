---
title: WebAssembly.Global.prototype.valueOf()
short-title: valueOf()
slug: WebAssembly/Reference/JavaScript_interface/Global/valueOf
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
---

**`valueOf`** は [`WebAssembly.Global`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global) オブジェクトプロパティのメソッドで、グローバル変数に含まれている値を返します。

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

グローバル変数の値を示す文字列。

## 例

### 基本的な使い方

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.valueOf());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`global`](/ja/docs/WebAssembly/Reference/Definitions/global) の定義
- [WebAssembly](/ja/docs/WebAssembly)
