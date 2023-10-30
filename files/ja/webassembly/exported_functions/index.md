---
title: エクスポートされた WebAssembly 関数
slug: WebAssembly/Exported_functions
l10n:
  sourceCommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{WebAssemblySidebar}}

エクスポートされた WebAssembly 関数は WebAssembly 関数が JavaScript でどのように表現されるのか、この記事では、もう少し詳しく説明します。

## エクスポートされた...とは?

エクスポートされた WebAssembly 関数は、 WebAssembly 関数を表現する JavaScript の単なるラッパーです。呼び出されると、バックグラウンドでいくつかの動作を行います。引数を Wasm で使える型に（例えば、 JavaScript の数値を Int32 に）変換し、Wasm モジュール内の関数に渡し、実行し、結果を変換して JavaScript 側に戻します。

エクスポートされた WebAssembly 関数は次の 2 つの方法で取得できます。

- 既存のテーブルの [`Table.prototype.get()`](/ja/docs/WebAssembly/JavaScript_interface/Table/get) を呼び出す。
- Wasm モジュールインスタンスの [`Instance.exports`](/ja/docs/WebAssembly/JavaScript_interface/Instance/exports) を通してエクスポートされた関数にアクセスする。

いずれにしても、同じ種類の内在する関数のラッパーを取得できます。 JavaScript からみると、すべての Wasm 関数は JavaScript の関数のようにみえます。しかし、これは Wasm 関数オブジェクトインスタンスによってカプセル化されており、アクセスする方法は限られています。

## 例

物事を明らかにするために例を見ていきましょう（例は GitHub の [table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html) と [動作例](https://mdn.github.io/webassembly-examples/other-examples/table-set.html)、Wasm の [テキスト表現](https://github.com/mdn/webassembly-examples/blob/master/ja-api-examples/table.wat) を参照してください）。

```js
const otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

ここでは、[`WebAssembly.Table`](/ja/docs/WebAssembly/JavaScript_interface/Table) コンストラクターを使用して JavaScript からテーブル (`otherTable`) を作成し、`table.wasm` をページに読み込むために [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/JavaScript_interface/instantiateStreaming) ユーティリティ関数を使用しています。

そのあと、モジュールからエクスポートされた関数を取得し、関数の参照を [`tbl.get()`](/ja/docs/WebAssembly/JavaScript_interface/Table/get) を通して取り出し、それぞれを実行した結果をコンソールに出力します。次に、 `set()` を使用して、`tbl` テーブルと同じ関数への参照を `otherTable` テーブルに含まれるようにします。

確認するために、`otherTable` から参照を取得し直し、その結果もコンソールに出力します(同じ結果が得られます)。

## それらは本物の関数です

前の例で、[`Table.prototype.get()`](/ja/docs/WebAssembly/JavaScript_interface/Table/get) のそれぞれの返値はエクスポートされた WebAssembly 関数でした。まさに私たちが話していたことです。

これらは WebAssembly 関数のラッパーであるのに加えて本物の JavaScript 関数であることに注意してください。上の例を [WebAssembly に対応しているブラウザー](/ja/docs/WebAssembly#ブラウザーの互換性)で読み込み、以下の行をコンソールで実行してみてください。

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

結果として関数が返されます。この関数は他の JavaScript の[関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)と同じように扱うことができます。例えば [`call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) や [`bind()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) などです。 `testFunc.toString()` は興味深い結果を返します。

```plain
function 0() {
    [native code]
}
```

これで、よりラッパーの性質がよくわかると思います。

エクスポートされた WebAssembly 関数について他の注意事項を挙げます。

- [length](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) プロパティは Wasm 内の関数シグネチャで宣言されている引数の数です。
- [name](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) プロパティは `toString()` の結果で見えている Wasm モジュール内での関数のインデックスです。
- i64 型の値を受け取る、または返すエクスポートされた Wasm 関数を呼び出そうとすると、現在 JavaScript 上で i64 を表現する的確な方法がないためエラーが発生します。。これは将来的に変わる可能性があります。新しい int64 型が将来の標準で検討されており、 Wasm によって使用される可能性があります。
