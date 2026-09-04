---
title: WebAssembly.Memory() コンストラクター
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

**`WebAssembly.Memory()`** コンストラクターは新しい `Memory` オブジェクトを生成します。これは [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) プロパティがサイズ変更可能な {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} であり、[`WebAssembly.Instance`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance) からアクセスする生のバイト列のメモリーであるものです。

JavaScript または WebAssembly コードによって作成されたメモリーオブジェクトは、そのコードが当該オブジェクトを構築したか、あるいはそのオブジェクトが指定されている場合に限り、JavaScript と WebAssembly の双方からアクセスおよび変更が可能となります。

WebAssembly と JavaScript の両方で `Memory` オブジェクトを作成できます。JavaScript で作成されたメモリーに Wasm からアクセスしたい場合、あるいはその逆の場合でも、一方からもう一方へメモリーへの参照を渡すことで実現できます。

## 構文

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### 引数

- `memoryDescriptor`
  - : 以下のメンバーを含むことができるオブジェクトです。
    - `address` {{optional_inline}}
      - : メモリーのアドレス型を指定する文字列値です。`"i32"` または `"i64"` を指定できます。デフォルトは `"i32"` です。
        `address` が `"i64"` の場合、`initial` および `maximum`（存在する場合）は、長整数 ({{jsxref("BigInt")}}) の値でなければなりません。
    - `initial`
      - : WebAssembly メモリーの初期サイズで、単位は WebAssembly ページ数です。
    - `maximum` {{optional_inline}}
      - : WebAssembly メモリーを拡張できる最大サイズで、単位は WebAssembly ページ数です。存在する場合、 `maximum` 引数はエンジンがメモリーを予約するヒントとして使用されます。ただし、エンジンはこの予約リクエストを無視したり固定したりすることがあります。一般的に、ほとんどの WebAssembly モジュールでは `maximum` を設定する必要はありません。
    - `shared` {{optional_inline}}
      - : 論理値で、このメモリーを共有メモリーにするかどうかを定義します。 `true` に設定すると、共有メモリーになります。既定値は `false` です。

> [!NOTE]
> WebAssembly ページは 65,536 バイト、すなわち 64KiB の固定長です。

### 例外

- {{jsxref("TypeError")}}
  - : 以下の条件の一つ以上に該当する場合に発生します。
    - `memoryDescriptor` がオブジェクトではない。
    - `initial` が指定されていない。
    - `shared` がぞんざいしていて `true` であるが、`maximum` が指定されていない。
- {{jsxref("RangeError")}}
  - : 以下の条件の一つ以上に該当する場合に発生します。
    - `maximum` が指定されており、`initial` よりも小さい。
    - `address` が `"i32"` に設定されているか省略されており、`initial` が `65,536` (2^16) を超えている。2^16 ページは 4GiB (2^16 \* 64KiB) と等しく、32 ビットアドレッシングで Wasm モジュールがアドレス指定できる最大の範囲です。
    - 割り当てに失敗した。これは、一度に割り当てようとする量が大きすぎる場合や、ユーザーエージェントのメモリーが不足している場合に発生することがあります。

## 例

### 新しい Memory インスタンスの作成

`WebAssembly.Memory` オブジェクトを取得する方法は 2 つあります。 1 つ目は JavaScript から構築する方法と、WebAssembly モジュールからエクスポートする方法です。

次の例（GitHubで [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) を参照、 [ライブ実行](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)）では、初期サイズ 10 ページ (640KiB)、最大サイズ 100 ページ (6.4MiB) の新しい WebAssembly メモリーインスタンスを作成しています。この例では、[`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) 関数を使用して、読み込まれた memory.wasm バイトコードを取得・インスタンス化すると同時に、以上で生成されたメモリーをインポートします。その後、そのメモリーにいくつかの値を格納し、関数をエクスポートして、エクスポートされた関数を使用してそれらの値の合計を算出します。`Memory` オブジェクトの [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) プロパティは、{{jsxref("ArrayBuffer")}} を返します。

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

### 共有メモリーの作成

既定では、 WebAssembly のメモリーは共有されていません。[共有メモリー](/ja/docs/WebAssembly/Guides/Understanding_the_text_format#共有メモリー)を作成するには、コンストラクターの初期化オブジェクトに `shared: true` を渡してください。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

このメモリーの `buffer` プロパティは [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) を返します。

### 64 ビットアドレスの使用

64ビットのアドレス型を持つメモリーを作成するには、`address: "i64"` を渡します。
`initial` および `maximum` の値は、長整数 ({{jsxref("BigInt")}}) の値でなければなりません。

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});
```

## 仕様書

`shared` 属性については、[WebAssembly 向けのスレッド処理に関する提案](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#javascript-api-changes)でのみ文書化されており、公式仕様には属しません。

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Guides/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
