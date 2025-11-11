---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

`ReadableStreamBYOBReader` は[ストリーム API](/ja/docs/Web/API/Streams_API) のインターフェイスで、 {{domxref("ReadableStream")}} 用のリーダーを定義します。このリーダーは、基盤となるバイトソースからのゼロコピー読み込みに対応しています。
ファイルなど、データがバイト列の「無名」シーケンスとして配信される基盤から効率的にコピーするために使用します。

このリーダー型のインスタンスは、通常、ストリーム上で {{domxref("ReadableStream.getReader()")}} を呼び出して、オプション引数に `mode: "byob"` を指定します。
読み取り可能なストリームは、基盤バイトソースを保有していなければなりません。言い換えれば、[構築](/ja/docs/Web/API/ReadableStream/ReadableStream)時に[`type: "bytes"`](/ja/docs/Web/API/ReadableStream/ReadableStream#type)を持つ基盤を指定されていなければなりません。

この種のリーダーを使用すると、読み取り可能なストリームの内部キューが空のときに [`read()`](#readablestreambyobreader.read) リクエストを行うと、基盤となっているソースから（ストリームの内部キューをバイパスして）ゼロコピーで移譲されます。
内部キューが空でない場合、 `read()` はバッファーされたデータからリクエストを満たします。

メソッドとプロパティは 既定のリーダー ({{domxref("ReadableStreamDefaultReader")}}) のものと似ていることに注意してください。
`read()` メソッドは、データを書き込むビューを提供するという点で異なります。

## コンストラクター

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : `ReadableStreamBYOBReader` オブジェクトのインスタンスを作成して返します。

## インスタンスプロパティ

- {{domxref("ReadableStreamBYOBReader.closed")}} {{ReadOnlyInline}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たすプロミスを返します。ストリームがエラーの場合は拒否します。

## インスタンスメソッド

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された `reason` 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : ストリームのリーダーのロックを解除します。

## 例

以下の例は、[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#例)から取ったものです。

まず、ストリーム上で {{domxref("ReadableStream.getReader()")}} を使用してリーダーを作成します。 options 引数に `mode: "byob"` を指定します。
これは "Bring Your Own Buffer" リーダーなので、読み込むための `ArrayBuffer` も作成する必要があります。

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

リーダーを使用する関数を下記に示します。
これは `read()` メソッドを再帰的に呼び出して、データをバッファーに読み込みます。
このメソッドは [`Uint8Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)を取り、これが これは、元の配列バッファーでまだ書き込まれていない部分のビューです。
ビューの引数は、前回呼び出された際に受け取ったデータから計算され、元配列バッファーへのオフセットを定義します。

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that resolves when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Result objects contain two properties:
        // done - true if the stream has already given all its data.
        // value - some data. Always undefined when done is true.

        if (done) {
          // There is no more data in the stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Read some more, and call this function again
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processBytes);
      });
  }
}
```

ストリームにデータがなくなると、`read()`メソッドはプロパティ `done` を `true` に設定したオブジェクトで解決し、関数を返します。

{{domxref("ReadableStreamBYOBReader.closed")}} プロパティはプロミスを返し、ストリームが閉じられたり、エラーとされたり、リーダーロックが解放されたりすることを監視するために使用することができます。

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

ストリームを取り消すには {{domxref("ReadableStreamBYOBReader.cancel()")}} を呼び出します。オプションで理由を指定します。
これは、ストリームが取り消される可能性を解決するプロミスを返します。
ストリームがキャンセルされると、コントローラは次に `cancel()` を基盤となるソース上で呼び出します。

[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#例)の例では、次のようにボタンが押されたときに cancel メソッドを呼び出します。

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

コンシューマーは `releaseLock()` を呼び出して、ストリーム上のリーダーの保持を解放することもできますが、これは読み込みが待機していない場合に限られます。

```js
reader.releaseLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), for a basic visualization of readable, writable, and transform streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) or [sd-streams](https://github.com/stardazed/sd-streams) - polyfills
