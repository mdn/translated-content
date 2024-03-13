---
title: WebAssembly.Table
slug: WebAssembly/JavaScript_interface/Table
---

{{WebAssemblySidebar}}

**`WebAssembly.Table()`** オブジェクトは JavaScript のラッパーオブジェクトであり、関数の参照を格納する WebAssembly Table を表す配列風の構造を持っています。 JavaScript や WebAssembly のコードで作成されたテーブルは、 JavaScript と WebAssembly の両方からアクセスでき、変更もできます。

> **メモ:** 現在、テーブルには関数の参照のみが格納できますが、将来的に拡張される予定です。

## コンストラクター

- [`WebAssembly.Table()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table)
  - : 新しい `Table` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : テーブルの長さを返します。すなわち、要素数です。

## インスタンスメソッド

- {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}
  - : アクセサー関数です。指定した位置に格納された要素を取得します。
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}
  - : Table インスタンスを指定した要素数だけ拡張します。
- {{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}
  - : 指定した位置に要素を格納します。

## 例

### 新しい WebAssembly Table インスタンスの生成

次の例では ([table2.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) と[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)を確認してください)、新しい WebAssembly Table メソッドを初期サイズ 2 要素で生成します。それからそのテーブルの長さと 2 つの位置の内容を ({{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} を使用して受け取って) 表示し、長さが 2 で両方の要素が {{jsxref("null")}} であることを示します。

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

次に、テーブルを含むインポートオブジェクトを生成します。

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

<p>最後に {{jsxref("WebAssembly.instantiateStreaming()")}} を使用して wasm モジュール (table2.wasm) をロード し、インスタンス化します。table2.wasm モジュールは2の関数を持っていて (1つは42を、もう1つは83を返す) 、インポートされたテーブルの0、1番目に両方の要素が格納されます (<a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat">text representation</a>を参照) 。そして、インスタンス化された後、テーブルの長さは2のままです。しかし、今はJSから呼び出し可能な <a href="/ja/docs/WebAssembly/Exported_functions">エクスポートされたWebAssembly関数</a> が含まれています。</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});</pre>

<p>内部の値を表示するためには、参照された関数のアクセサの呼び出しの後に、2つ目の関数呼び出しを含める必要があることに注意して下さい (<code>get(0)</code> ではなく <code>get(0)()</code>)。</p>

<p>この例では、JavaScript からテーブルを作成してアクセスしていますが、wasm インスタンス内で同じテーブルを参照して呼び出すこともできます。</p>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
