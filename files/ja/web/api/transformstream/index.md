---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`TransformStream`** は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、変換ストリームの概念である[パイプチェーン](/ja/docs/Web/API/Streams_API/Concepts#パイプチェーン)の具体的な実装を表します。

これは、データのストリームをある形式から別の形式に変換するために {{domxref("ReadableStream.pipeThrough()")}} メソッドに渡すことができます。
例えば、動画フレームをデコード（またはエンコード）したり、データを解凍したり、ストリームを XML から JSON に変換したりするために使用します。

変換アルゴリズムは、オブジェクトのコンストラクターのオプション引数として指定されます。
提供されない場合、ストリームを通してパイプ処理されたデータは変更されません。

`TransformStream` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## コンストラクター

- {{domxref("TransformStream.TransformStream", "TransformStream()")}}
  - : 指定されたハンドラーから変換ストリームを作成して返却します。オプションで、変換オブジェクトとストリームのキューイング戦略を指定します。

## インスタンスプロパティ

- {{domxref("TransformStream.readable")}} {{ReadOnlyInline}}
  - : `TransformStream` の `readable` 側の端点です。
- {{domxref("TransformStream.writable")}} {{ReadOnlyInline}}
  - : `TransformStream` の `writable` 側の端点です。

## インスタンスメソッド

なし

## 例

### 何かを uint8array に変換するストリーム

以下の例では、変換ストリームは受信したすべてのチャンクを {{jsxref("Uint8Array")}} の値に渡します。

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

### TextEncoderStream および TextDecoderStream の代替

なお、これはネイティブのコンストラクターを使っているため非推奨です。これは対応していないプラットフォームで代替とすることを意図しています。

```js
const tes = {
  start() {
    this.encoder = new TextEncoder();
  },
  transform(chunk, controller) {
    controller.enqueue(this.encoder.encode(chunk));
  },
};

let _jstes_wm = new WeakMap(); /* info holder */
class JSTextEncoderStream extends TransformStream {
  constructor() {
    let t = { ...tes };

    super(t);
    _jstes_wm.set(this, t);
  }
  get encoding() {
    return _jstes_wm.get(this).encoder.encoding;
  }
}
```

同様に、 `TextDecoderStream` は次のように書くことができます。

```js
const tds = {
  start() {
    this.decoder = new TextDecoder(this.encoding, this.options);
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk, { stream: true }));
  },
};

let _jstds_wm = new WeakMap(); /* info holder */
class JSTextDecoderStream extends TransformStream {
  constructor(encoding = "utf-8", { ...options } = {}) {
    let t = { ...tds, encoding, options };

    super(t);
    _jstds_wm.set(this, t);
  }
  get encoding() {
    return _jstds_wm.get(this).decoder.encoding;
  }
  get fatal() {
    return _jstds_wm.get(this).decoder.fatal;
  }
  get ignoreBOM() {
    return _jstds_wm.get(this).decoder.ignoreBOM;
  }
}
```

### 複数の ReadableStreams を互いに結合

これは、複数のストリームを結合できる便利なものです。例ではプログレッシブ読み込みやプログレッシブストリーミングを持つ PWA の構築が含まれます。

```js
let responses = [
  /* conjoined response tree */
];
let { readable, writable } = new TransformStream();

responses.reduce(
  (a, res, i, arr) =>
    a.then(() => res.pipeTo(writable, { preventClose: i + 1 !== arr.length })),
  Promise.resolve(),
);
```

これは他への影響に対して耐性がないことに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/): 読み取り、書き込み、変換ストリームの基本的な視覚化
- [Streams—The Definitive Guide](https://web.dev/streams/)
