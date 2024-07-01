---
title: WebAssembly.Memory() コンストラクター
slug: WebAssembly/JavaScript_interface/Memory/Memory
---

{{WebAssemblySidebar}}

**`WebAssembly.Memory()`** コンストラクターは新しい `Memory` オブジェクトを生成します。これは {{jsxref("WebAssembly/Memory/buffer","buffer")}} プロパティがサイズ変更可能な [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) または `SharedArrayBuffer` であり、 WebAssembly の `Instance` からアクセスする生のバイト列のメモリーであるものです。

JavaScript または WebAssembly コードから生成されたメモリーは JavaScript と WebAssembly のどちらからもアクセス、変更が可能になります。

## 構文

```js
new WebAssembly.Memory(memoryDescriptor);
```

### 引数

- _memoryDescriptor_

  - : 以下のメンバーを含むことができるオブジェクトです。

    - _initial_
      - : WebAssembly メモリーの初期サイズで、単位は WebAssembly ページ数です。
    - _maximum {{optional_inline}}_
      - : WebAssembly メモリーを拡張できる最大サイズで、単位は WebAssembly ページ数です。存在する場合、 `maximum` 引数はエンジンがメモリーを予約するヒントとして使用されます。ただし、エンジンはこの予約リクエストを無視したり固定したりすることがあります。一般的に、ほとんどの WebAssembly モジュールでは `maximum` を設定する必要はありません。
    - shared _{{optional_inline}}_
      - : 論理値で、このメモリーを共有メモリーにするかどうかを定義します。 `true` に設定すると、共有メモリーになります。既定値は `false` です。

> **メモ:** WebAssembly ページは 65,536 バイト、すなわち 64KiB の固定長です。

### 例外

- `memoryDescriptor` がオブジェクトでない場合は、 {{jsxref("TypeError")}} が発生します。
- `maximum` が設定されており、かつ `initial` よりも小さい場合は、 {{jsxref("RangeError")}} が発生します。

## 例

### 新しい Memory インスタンスの作成

`WebAssembly.Memory` オブジェクトを取得する方法は 2 つあります。 1 つ目は JavaScript から構築する方法です。次の例では、新しい WebAssembly Memory インスタンスを初期サイズが 10 ページ (640KiB) 、最大サイズが 100 ページ (6.4MiB) で生成しています。この [`buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) プロパティは [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) を返します。

```js
var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
```

2 つ目は WebAssembly モジュールからエクスポートされた `WebAssembly.Memory` オブジェクトを使用する方法です。次の例では (GitHub 上の [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) および[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)も参照)、 memory.wasm バイトコードを {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドで読み込みんでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

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

### 共有メモリーの作成

既定では、 WebAssembly のメモリーは共有されていません。[共有メモリー](/ja/docs/WebAssembly/Understanding_the_text_format#共有メモリー)を作成するには、コンストラクター
の初期化オブジェクトに `shared: true` を渡してください。

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
