---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

**`WebAssembly.Memory`** オブジェクトはサイズ変更可能な {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} であり、[`WebAssembly.Instance`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance) からアクセスする生のバイト列のメモリーを保持します。

WebAssembly と JavaScript の両方が `Memory` オブジェクトを作成できます。
WebAssembly から JavaScript で作成されたメモリーにアクセスしたい場合、あるいはその逆の場合、モジュールから JavaScript へメモリーをエクスポートするか、モジュールが [インスタンス化](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) される際に JavaScript からモジュールへメモリーをインポートすることができます。

当初、 Wasm モジュールでは単一のメモリーに対してのみメモリ操作を実行できたため、複数の `Memory` オブジェクトを作成することは可能でしたが、そうする意味はありませんでした。
最新の実装では、WebAssemblyの[メモリー命令](/ja/docs/WebAssembly/Reference/Memory)が指定されたメモリーを操作できることになります。
詳細の情報については、『WebAssembly テキスト形式の理解』の[複数のメモリー](/ja/docs/WebAssembly/Guides/Understanding_the_text_format#複数のメモリー)を参照してください。

> [!NOTE]
> WebAssemblyのメモリーは、動作するプラットフォームにかかわらず、常にリトルエンディアン形式です。したがって、移植性を確保するためには、JavaScript でマルチバイト値を読み書きする際は {{jsxref("DataView")}} を使用する必要があります。

## コンストラクター

- [`WebAssembly.Memory()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : 新しい `Memory` オブジェクトを生成します。

## インスタンスプロパティ

- [`Memory.prototype.buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : メモリーに格納されているバッファーを返します。

## インスタンスメソッド

- [`Memory.prototype.grow()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : 指定した WebAssembly ページ (64KiB で 1 単位) の数でメモリーのインスタンスのサイズを増やします。

## 例

### 新しい Memory オブジェクトの生成

`WebAssembly.Memory` オブジェクトを取得する方法は 2 つあります。 1 つ目は JavaScript から生成する方法です。以下の例では、初期サイズが 10 ページ (640KiB) 、最大サイズが 100 ページ (6.4MiB) で新しい WebAssembly Memory インスタンスを生成しています。その [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) プロパティは {{jsxref("ArrayBuffer")}} を返します。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

次の例では (GitHub 上の [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) および[実行例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)も参照)、 "memory.wasm" バイトコードを [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) メソッドを使用して読み込んでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、それらの値を合計します。{{jsxref("DataView")}} を使用してメモリーにアクセスしているため、常にリトルエンディアン形式が使用される点に注意してください。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly is little endian
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

`WebAssembly.Memory` オブジェクトを取得する 2 つ目の方法は、 WebAssembly モジュールによってエクスポートされることです。このメモリーは WebAssembly インスタンスの `exports` プロパティで (メモリーが WebAssembly モジュール内でエクスポートされた後に) アクセスできます。次のスニペットは、 WebAssembly からエクスポートされたメモリーを `memory`という名前でインポートし、メモリーの最初の要素を {{jsxref("Uint32Array")}} として解釈して表示しています。

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### 共有メモリーの作成

デフォルトでは、 WebAssembly のメモリーは共有されていません。[共有メモリー](/ja/docs/WebAssembly/Guides/Understanding_the_text_format#共有メモリー)を JavaScript で作成するには、コンストラクターの初期化オブジェクトに `shared: true` を渡します。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

このメモリーの `buffer` プロパティは {{jsxref("SharedArrayBuffer")}} を返します。

### 64 ビットアドレスの使用

次のスニペットは、64 ビットのアドレス型を持つ新しい WebAssembly メモリーインスタンスを作成します。
`initial` および `maximum` の値は、{{jsxref("BigInt")}} の値でなければなりません：

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要
- [WebAssembly の概要](/ja/docs/WebAssembly/Guides/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
