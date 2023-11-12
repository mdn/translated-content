---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/JavaScript_interface/Table/grow
---

{{WebAssemblySidebar}}

**`grow()`** は {{jsxref("WebAssembly.Table")}} オブジェクトのプロトタイプメソッドで、 Table インスタンスの大きさを指定された要素数だけ拡張します。

## 構文

```js
grow(number);
```

### 引数

- _number_
  - : テーブルを拡張する要素数です。

### 返値

直前のテーブルの長さです。

### 例外

`grow()` の操作が何らかの理由で失敗した場合、 {{jsxref("RangeError")}} が発生します。

## 例

### grow の使用

以下の例では、新しい WebAssembly Table のインスタンスを初期サイズ 2、最大サイズ 10 で生成しています。

```js
var table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

以下のようにして、テーブルを 1 だけ拡張することができます。

```js
console.log(table.length); // "2"
console.log(table.grow(1)); // "2"
console.log(table.length); // "3"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
