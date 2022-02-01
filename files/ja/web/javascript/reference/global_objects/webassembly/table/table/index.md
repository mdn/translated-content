---
title: WebAssembly.Table() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
tags:
  - コンストラクター
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Table.Table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
---
{{JSRef}}

**`WebAssembly.Table()`** コンストラクターは、大きさと要素の型を指定して新しい `Table` オブジェクトを生成します。

## 構文

```js
new WebAssembly.Table(tableDescriptor)
```

### 引数

- _tableDescriptor_

  - : 以下のメンバーを含むことができるオブジェクトです。

    - _element_
      - : 文字列で、テーブルに格納される値の型を表します。現時点では、 `"anyfunc"` (関数) の値のみを取ることができます。
    - _initial_
      - : WebAssembly テーブルの初期の要素数です。
    - _maximum {{optional_inline}}_
      - : WebAssembly テーブルが拡張することができる最大の要素数です。

### 例外

- `tableDescriptor` がオブジェクトでない場合は、 {{jsxref("TypeError")}} が発生します。
- `maximum` が設定されており、かつ `initial` よりも小さい場合は、 {{jsxref("RangeError")}} が発生します。

## 例

### 新しい WebAssembly Table インスタンスの生成

次の例では (table2.html の[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html)と[実行例](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)はこちら) 新しく WebAssembly テーブルのインスタンスを、初期の大きさを 2 要素して生成します。それからテーブルの長さと 2 つの要素の中身を ({{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} で取得して) 表示し、長さは 2 で 2 つの要素は共に {{jsxref("null")}} となります。

```js
var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);  // "2"
console.log(tbl.get(0));  // "null"
console.log(tbl.get(1));  // "null"
```

それからテーブルを含むインポートオブジェクトを作成します。

```js
var importObj = {
  js: {
    tbl:tbl
  }
};
```

最終的に、 wasm モジュール (table2.wasm) を {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して読み込みインスタンス化します。 table2.wasm モジュールには 2 つの関数 (1 つは 42 を返し、もう 1 つは 83 を返す) が入っており、それぞれをインポートされたテーブルの要素 0 と 1 に格納します。 ([テキスト表現](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat)をご覧ください)。インスタンス化した後で、テーブルは長さは 2 のままですが、要素には呼び出し可能な<a href="/ja/docs/WebAssembly/Exported_functions">エクスポートされた WebAssembly 関数</a>が入り、 JS から呼び出せるようになりました。

```js
WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});
```

なお、関数呼び出し演算子がアクセサーの後に二重についており (例えば `get(0)()` を `get(0)` の代わりに使用)、実際に参照している関数を呼び出して、その中に格納された値をログ出力しています。

この例は JavaScript からテーブルを生成してアクセスする方法を示していますが、同じテーブルを wasm インスタンスの中から見ることができ、呼び出すこともできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
