---
title: "ReadableStreamBYOBReader: read() メソッド"
short-title: read()
slug: Web/API/ReadableStreamBYOBReader/read
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("Streams")}}

**`read()`** は {{domxref("ReadableStreamBYOBReader")}} インターフェイスのメソッドで、ユーザーが提供したバッファー上のビューに、関連付けられた[読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)からデータを読み込むために使用します。
データに対するリクエストは、データを説明しているものがあれば、ストリームの内部キューから満たされます。
ストリームキューが空の場合、リクエストは、基盤のバイトソースからのゼロコピー移譲として供給されるかもしれません。

このメソッドは、渡されたデータを読み込むバッファーに対するビューを引数として取り、プロミス ({{jsxref("Promise")}}) を返します。
このプロミスは、データが利用できるようになったとき、またはストリームが取り消される可能性があるときに `value` と `done` のプロパティを持つオブジェクトで履行されます。
ストリームがエラーになった場合、プロミスは関連するエラーオブジェクトと共に拒否されます。

データのチャンクが渡された場合、 `value` プロパティには新しいビューが格納されます。
これは `read()` メソッドに渡された元の `view` と同じバッファー/バッキングメモリー（および同じ型）上のビューになります。
プロミスが履行されると、メソッドに渡された元の `view` は切り離され、使えなくなることに注意してください。
ストリームが取り消された可能性がある場合、プロミスは `value: undefined` で履行されます。
この場合、 `view` のバッキングメモリー領域は破棄され、呼び出し側には返されません（ビューのバッファー内の前回読み込んだデータはすべて失われます）。

`done` プロパティは、さらなるデータが期待されるかどうかを示します。
この値は、ストリームが閉じられたり取り消されたり可能性がある場合は `true` に設定され、そうでない場合は `false` に設定されます。

## 構文

```js-nolint
read(view)
```

### 引数

- `view`
  - : 読み込み先のビュー。

### 返値

プロミス ({{jsxref("Promise")}}) で、ストリームの状態に応じた結果で履行または拒否されます。

取りうる値は次の通りです。

- チャンクが利用でき、ストリームがまだアクティブであれば、プロミスは次の形のオブジェクトで履行されます。

  ```js
  { value: theChunk, done: false }
  ```

  `theChunk` は新しいデータを格納するビューです。
  これは `read()` メソッドに渡された `view` と同じ型で、同じバッキングメモリー上のビューです。
  元の `view` は切り離されて使えなくなりました。

- ストリームが閉じられた場合、プロミスは（`theChunk` を上記と同じプロパティを持つ）形式のオブジェクトで履行されます。

  ```js
  { value: theChunk, done: true }
  ```

- If the stream is cancelled, the promise fulfills with an object of the form:

  ```js
  { value: undefined, done: true }
  ```

  In this case the backing memory is discarded.

- If the stream throws an error, the promise rejects with the relevant error.

### 例外

- {{jsxref("TypeError")}}
  - : 元のオブジェクトが `ReadableStreamBYOBReader` ではないか、ストリームにオーナーがいないか、ビューがオブジェクトでないか、切り離されているか、ビューの長さが 0 であるか、（待機中の読み取りリクエストがある場合に） {{domxref("ReadableStreamBYOBReader.releaseLock()")}} が呼び出された場合。

## 例

以下の例は、[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#例)から取ったものです。

まず、ストリーム上で {{domxref("ReadableStream.getReader()")}} を使用してリーダーを作成します。 options 引数に `mode: "byob"` を指定します。
`ArrayBuffer` も作成する必要があります。これはビューの「バッキングメモリー」で、ここに書き込むことになります。

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(4000);
```

リーダーを使用する関数を下記に示します。
これは `read()` メソッドを再帰的に呼び出して、データをバッファーに読み込みます。
このメソッドは [`Uint8Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)を取ります。これは、元の配列バッファーでまだ書き込まれていない部分のビューです。
ビューの引数は、前回呼び出された際に受け取ったデータから計算され、元の配列バッファーへのオフセットを定義します。

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  while (offset < buffer.byteLength) {
    // read() returns a promise that fulfills when a value has been received
    reader
      .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
      .then(function processBytes({ done, value }) {
        // Result objects contain two properties:
        // done - true if the stream has already given all its data.
        // value - some data. 'undefined' if the reader is canceled.

        if (done) {
          // There is no more data in the stream
          return;
        }

        buffer = value.buffer;
        offset += value.byteLength;
        bytesReceived += value.byteLength;

        // Read some more, and call this function again
        // Note that here we create a new view over the original buffer.
        return reader
          .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
          .then(processBytes);
      });
  }
}
```

ストリームにデータがなくなると、`read()` メソッドは `done` プロパティを `true` に設定したオブジェクトで履行され、関数を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
