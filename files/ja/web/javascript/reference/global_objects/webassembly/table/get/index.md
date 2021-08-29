---
title: WebAssembly.Table.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
tags:
  - API
  - JavaScript
  - メソッド
  - Reference
  - WebAssembly
  - get
  - table
browser-compat: javascript.builtins.WebAssembly.Table.get
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
---
{{JSRef}}

**`get()`** は {{jsxref("WebAssembly.Table")}} オブジェクトのプロトタイプメソッドで、指定された位置に格納されている関数参照を取得します。

## 構文

```js
get(index)
```

### 引数

- _index_
  - : 取得する関数参照の位置です。

### 返値

関数参照を返します。これは[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)、wasm 関数を内在する JavaScript ラッパーです。</p>

### 例外

_index_ が {{jsxref("WebAssembly/Table/length","Table.prototype.length")}} 以上であった場合、{{jsxref("RangeError")}} が発生します。

## 例

### get の使用

次の例では (Github の [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html) と[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)も確認してください)、 table.wasm バイトコードを
{{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して読み取り、コンパイルしてインスタンス化しています。その後、エクスポートされたテーブルに格納された参照を取得します。

```js
WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
});
```

参照に格納されている値を実際に取得するためには、アクセサーの最後に 2 つ目の関数呼び出し演算子を含める必要があります (`get(0)` ではなく `get(0)()`)。これは単純な値ではなく、関数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
