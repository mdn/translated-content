---
title: WebAssembly.Memory()
slug: WebAssembly/JavaScript_interface/Memory
---

{{WebAssemblySidebar}}

**`WebAssembly.Memory`** オブジェクトはサイズ変更可能な {{jsxref("ArrayBuffer")}} または [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) であり、 WebAssembly `Instance` からアクセスする生のバイト列のメモリーを持ちます。</p>

JavaScript または WebAssembly コードから生成されたメモリーは JavaScript と WebAssembly のどちらからもアクセス、変更が可能になります。

## コンストラクター

- [`WebAssembly.Memory()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory)
  - : 新しい `Memory` オブジェクトを生成します。

## インスタンスプロパティ

- [`Memory.prototype.buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer)
  - : メモリーに格納されているバッファーを返すアクセサープロパティです。

## インスタンスメソッド

- [`Memory.prototype.grow()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow)
  - : 指定した WebAssembly ページ (64KB で 1 単位) の数でメモリーのインスタンスのサイズを増やします。

## 例

### 新しい Memory オブジェクトの生成

`WebAssembly.Memory` オブジェクトを取得する方法は 2 つあります。 1 つ目は JavaScript から生成する方法です。以下の例では、初期サイズが 10 ページ (640KiB) 、最大サイズが 100 ページ (6.4MiB) で新しい WebAssembly Memory インスタンスを生成しています。その [`buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) プロパティは [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を返します。

```js
var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
```

次の例では (GitHub 上の [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) および[実行例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)も参照)、 memory.wasm バイトコードを {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して読み込みんでインスタンス化し、その上の行で生成されたメモリにインポートします。それから、メモリにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

WebAssembly.Memory オブジェクトを取得する 2 つ目の方法は、 WebAssembly モジュールによってエクスポートされることです。このメモリは WebAssembly インスタンスの `exports` プロパティで (メモリーが WebAssembly モジュール内でエクスポートされた後に) アクセスできます。次のスニペットは、 WebAssembly からエクスポートされたメモリを `memory`という名前でインポートし、メモリーの最初の要素を Uint32Array として解釈して表示しています。

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  var i32 = new Uint32Array(obj.instance.exports.memory.buffer);
  console.log(i32[0]);
});
```

### 共有メモリーの作成

既定では、 WebAssembly のメモリーは共有されていません。[共有メモリー](/ja/docs/WebAssembly/Understanding_the_text_format#共有メモリー)を作成するには、コンストラクター
の初期化オブジェクトに `shared: true` を渡します。

```js
let memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

このメモリーの `buffer` プロパティは [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
