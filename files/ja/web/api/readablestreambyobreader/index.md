---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
---

{{APIRef("Streams")}}{{SeeCompatTable}}

[Streams API](/ja/docs/Web/API/Streams_API) の `ReadableStreamBYOBReader` インターフェイスは、開発者が提供するストリームデータ（カスタムの {{domxref("ReadableStream.ReadableStream","ReadableStream()")}} コンストラクターなど）の読み取りに使用できる BYOB（"bring your own buffer"）リーダーを表します。

## コンストラクター

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : `ReadableStreamBYOBReader` オブジェクトのインスタンスを作成して返します。

## プロパティ

- {{domxref("ReadableStreamBYOBReader.closed")}} {{readonlyInline}}
  - : ストリーミングプロセスの終了に応答するコードを記述できます。 ストリームが閉じられた場合、またはリーダーのロックが解除された場合に満たす promise を返します。 ストリームがエラーの場合は拒否します。

## メソッド

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された `reason` 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : ストリームのリーダーのロックを解除します。

## 例

未定。

## 仕様

| 仕様                                                                                             | 状態                         | コメント |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('Streams','#byob-reader-class','ReadableStreamBYOBReader')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableStreamBYOBReader")}}
