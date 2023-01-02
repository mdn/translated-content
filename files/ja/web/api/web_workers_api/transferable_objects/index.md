---
title: Transferable objects (移譲可能オブジェクト)
slug: Web/API/Web_Workers_API/Transferable_objects
original_slug: Glossary/Transferable_objects
---

**移譲可能オブジェクト** は、あるコンテキストから別のコンテキストへ _移譲_ することができるリソースを自分自身で所有するオブジェクトで、そのリソースが一度に1つのコンテキストでのみ利用できることを保証するものです。
移譲が終わると、元のオブジェクトはもう使えません。移譲されたリソースをもう指しておらず、オブジェクトの読み書きをしようとすると例外が発生します。

移譲可能なオブジェクトは一般的に、一度に単一のJavaScriptスレッドにしか安全に公開されないリソースを共有するために使用されます。
例えば、{{jsxref("ArrayBuffer")}} はメモリーブロックを自分自身で所有する移譲可能なオブジェクトです。
このようなバッファーがスレッド間で転送されるとき、関連するメモリーリソースは元のバッファーから切り離され、新しいスレッドで作成されたバッファーオブジェクトに装着されます。
元のスレッドのバッファーオブジェクトは、もはやメモリリソースを所有していないため、使用できなくなります。

移譲は {{domxref("structuredClone()")}} でオブジェクトのディープコピーを作成するときにも使用されるかもしれません。
複製操作の後に、移譲されたリソースは、コピーされたオブジェクトにコピーされるのではなく、移動されます。

オブジェクトのリソースを移譲するために使用されるメカニズムは、オブジェクトに依存します。
例えば、 {{jsxref("ArrayBuffer")}} がスレッド間で移譲されるとき、それが指すメモリーリソースは高速で効率の良いゼロコピー操作により、文字通りコンテキスト間で移動されます。
他にも、関連するリソースをコピーして、古いコンテキストから削除することで、オブジェクトを移譲することができる場合もあります。

すべてのオブジェクトが移譲可能なわけではありません。
移譲可能なオブジェクトの一覧は[下記の通りです](#対応しているオブジェクト)。

## オブジェクトのスレッド間の移譲

以下のコードは、メインスレッドから {{domxref("Web Workers API", "ウェブワーカースレッド","","true")}} にメッセージを送信する際に、転送がどのように動作するのかを示しています。
{{jsxref("Uint8Array")}} は、バッファーが移譲されている間、ワーカー内でコピーされます（複製されます）。
転送後、メインスレッドから `uInt8Array` を読み書きしようとするとエラーが発生しますが、`byteLength` を調べるとゼロになったことが確認できます。

```js
// 8MB の "file" を作成して中身を埋めます。 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength); // 8388608

// 下層のバッファーからワーカーに移譲する
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **メモ:** [型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) {{jsxref("Int32Array")}} や {{jsxref("Uint8Array")}} は{{Glossary("serializable object", "シリアライズ可能")}}ですが、転送は行えません。
> しかし、その下にあるバッファーは {{jsxref("ArrayBuffer")}} であり、これは移譲可能なオブジェクトです。
> data 引数に `uInt8Array.buffer` を設定しても、転送配列に `uInt8Array` を保有しなくても、送ることができます。

### 複製操作中の移譲について

以下のコードは、 {{domxref("structuredClone()")}} 操作で、基礎となるバッファーが元のオブジェクトから複製にコピーされる様子を示しています。

```js
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength); // 1024
console.log(clone.byteLength); // 1024

original[0] = 1;
console.log(clone[0]); // 0

// Uint8Array を移譲すると、移譲可能なオブジェクトではないため、例外が発生します。
// const transferred = structuredClone(original, {transfer: [original]});

// Uint8Array.buffer ならば移譲できます。
const transferred = structuredClone(original, { transfer: [original.buffer] });
console.log(transferred.byteLength); // 1024
console.log(transferred[0]); // 1

// Uint8Array.buffer は移譲した後は使用することができません。
console.log(original.byteLength); // 0
```

## 対応しているオブジェクト

各種仕様書が示す委譲可能な項目は以下の通りです。

- {{jsxref("ArrayBuffer")}}
- {{domxref("MessagePort")}}
- {{domxref("ReadableStream")}}
- {{domxref("WritableStream")}}
- {{domxref("TransformStream")}}
- {{domxref("AudioData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("VideoFrame")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("RTCDataChannel")}}

ブラウザーの対応は、それぞれのオブジェクトの互換性情報の `transferable` サブ機能で示す必要があります（例として [`RTCDataChannel`](/ja/docs/Web/API/RTCDataChannel#ブラウザーの互換性) を参照してください）。
この記事を書いている時点では、すべての移譲可能なオブジェクトがこの情報に更新されているわけではありません。

> **メモ:** 移譲可能なオブジェクトは [Web IDL ファイル](https://github.com/w3c/webref/tree/main/ed/idl) の中で `[Transferable]` という属性でマークアップされます。

## 関連情報

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Transferable objects in the HTML specification](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
