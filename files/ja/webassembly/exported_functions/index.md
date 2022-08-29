---
title: エクスポートされた WebAssembly 関数
slug: WebAssembly/Exported_functions
---
{{WebAssemblySidebar}}

エクスポートされた WebAssembly 関数は WebAssembly 関数が JavaScript でどのように表現されるのか、この記事では、もう少し詳しく説明します。

## エクスポートされた...とは?

エクスポートされた WebAssembly 関数は WebAssembly 関数を表現する JavaScript ラッパーです。それらを呼び出したときにバックグラウンドでいくつかの動作を行います。引数を wasm で使える型に(例えば、JavaScript の数値を Int32 に)変換し、wasm モジュール内の関数に渡し、実行し、結果を変換して JavaScript 側に戻します。

エクスポートされた WebAssembly 関数は次の 2 つの方法で取得できます:

- 既存のテーブルの [`Table.prototype.get()`](/ja/docs/WebAssembly/API/Table/get) を呼び出す。
- wasm モジュールインスタンスの [`Instance.exports`](/ja/docs/WebAssembly/API/Instance/exports) を通してエクスポートされた関数にアクセスする。

いずれにしても、同じ種類の内在する関数のラッパーを取得できます。JavaScript からみると、すべての wasm 関数は JavaScript 関数のようにみえます。しかし、これは wasm 関数オブジェクトインスタンスによってカプセル化されており、アクセスする方法は限られています。

## 例

物事を明らかにするために例を見ていきましょう(例は GitHub の [table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html) と [動作例](https://mdn.github.io/webassembly-examples/other-examples/table-set.html)、wasm の [テキスト表現](https://github.com/mdn/webassembly-examples/blob/master/ja-api-examples/table.wat) を参照してください):

```js
var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instances.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
  otherTable.set(0,tbl.get(0));
  otherTable.set(1,tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

ここでは、{{jsxref("WebAssembly.Table")}} コンストラクタを使用して JavaScript からテーブル(`otherTable`)を作成し、{{jsxref("WebAssembly.instantiateStreaming()")}} ユーティリティ関数を使用して table.wasm をページに読み込みます。

そのあと、モジュールからエクスポートされた関数を取得し、関数の参照を [`tbl.get()`](/ja/docs/WebAssembly/API/Table/get) を通して取り出し、それぞれを実行した結果をコンソールに出力します。次に、 `set()` を使用して、`tbl` テーブルと同じ関数への参照を `otherTable` テーブルに含まれるようにします。

確認するために、`otherTable` から参照を取得し直し、その結果もコンソールに出力します(同じ結果が得られます)。

## それらは本当の関数です

前の例で、[`Table.prototype.get()`](/ja/docs/WebAssembly/API/Table/get) のそれぞれの返り値はエクスポートされた WebAssembly 関数でした。まさに私達が話していたことです。

これらは WebAssembly 関数のラッパーであるのに加えて本当の JavaScript 関数 であることに注意してください。上の例を [WebAssembly をサポートするブラウザー](/ja/docs/WebAssembly#Browser_compatibility)でロードして、コンソール上で実行すると:

```js
var testFunc = otherTable.get(0);
typeof testFunc;
```

結果として関数が返されます。この関数は他の JavaScript の他の [関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) と同じように扱うことができます(` call()、``bind()、その他 `)。`testFunc.toString()` は興味深い結果を返します:

```js
function 0() {
    [native code]
}
```

これはラッパー型の性質のアイデアの多くを提供します。

エクスポートされた WebAssembly 関数について他の注意事項は:

- [length](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) プロパティは wasm 内の関数シグネチャで宣言されている引数の数です。
- [name](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) プロパティは `toString()` の結果で見えている wasm モジュール内での関数のインデックスです。
- i64 型の値を受け取る、または返すエクスポートされた wasm 関数を呼び出そうとすると、現在 JavaScript 上で i64 を表現する的確な方法がないためエラーをスローします。これは将来的に変わる可能性があります。新しい int64 型が将来の標準で検討されており、wasm によって使用される可能性があります。
