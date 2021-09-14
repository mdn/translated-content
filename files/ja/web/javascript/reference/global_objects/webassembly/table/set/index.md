---
title: WebAssembly.Table.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set
tags:
  - API
  - JavaScript
  - メソッド
  - Reference
  - WebAssembly
  - set
  - table
browser-compat: javascript.builtins.WebAssembly.Table.set
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set
---
{{JSRef}}

**`set()`** は {{jsxref("WebAssembly.Table")}} オブジェクトのプロトタイプメソッドで、指定された位置に格納されている参照を別な値に変更します。

## 構文

```js
set(index, value)
```

### 引数

- _index_
  - : 変更する関数参照の位置。
- _value_
  - : 変更する参照。これは[エクスポートされた WebAssembly 関数](/ja/docs/WebAssembly/Exported_functions)、 wasm 関数を内在する JavaScript ラッパーである必要があります。

### 返値

なし。

### 例外

- _index_ が {{jsxref("WebAssembly/Table/length","Table.prototype.length")}} 以上の場合、 {{jsxref("RangeError")}} が発生します。
- _value_ がエクスポートされた WebAssembly 関数でも <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/null">null</a></code> でもない場合、{{jsxref("TypeError")}} が発生します。

## 例

### Table.set の使用

次の例 (table2.html の[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html)と[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)を確認してください) では、初期サイズが参照 2 つである WebAssembly Table インスタンスを生成しています。そして、テーブルの長さと 2 つの位置の内容 ({{jsxref("WebAssembly/Table/get","Table.prototype.get()")}} で取得) を出力して、長さが 2 であること、それぞれの位置には現在、関数の参照が含まれていないこと (現在は {{jsxref("null")}} を返すこと) を示しています。

```js
var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

次に、テーブルの参照を含むインポートオブジェクトを作成します。

```js
var importObj = {
  js: {
    tbl:tbl
  }
};
```

最後に、 wasm モジュール (table2.wasm) を {{jsxref("WebAssembly.instantiateStreaming()")}} を使用して読み込みインスタンス化します。テーブルの長さを記録し、テーブルに格納された 2 つの関数参照を呼び出します (table2.wasm モジュール ([テキスト表現]](https://github.com/mdn/webassembly-examples/blob/master/text-format-examples/table2.was)) がテーブルに 2 つの関数の参照を追加し、どちらも単純な表示を表示します)。

```js
WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});
```

内部の値を表示するためには、参照された関数のアクセサーの呼び出しの後に、 2 つ目の関数呼び出しを含める必要があることに注意して下さい (`get(0)` ではなく `get(0)()`)。

この例では、JavaScript からテーブルを作成してアクセスしていますが、wasm インスタンス内で同じテーブルを参照して呼び出すこともできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/en-US/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/en-US/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
