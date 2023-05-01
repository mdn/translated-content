---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

**`TextEncoderStream`** は{{domxref('Encoding API','エンコーディング API','',' ')}} のインターフェイスで、文字列のストリームを UTF-8 エンコーディングのバイト列に変換します。これは {{domxref("TextEncoder")}} と同等のストリームです。

## コンストラクター

- {{domxref("TextEncoderStream.TextEncoderStream","TextEncoderStream()")}}
  - : 新しい `TextEncoderStream` オブジェクトを作成します。

## インスタンスプロパティ

- {{DOMxRef("TextEncoderStream.encoding")}} {{ReadOnlyInline}}
  - : 常に "`utf-8`" を返します。
- {{DOMxRef("TextEncoderStream.readable")}} {{ReadOnlyInline}}
  - : このオブジェクトが制御する {{domxref("ReadableStream")}} インスタンスを返します。
- {{DOMxRef("TextEncoderStream.writable")}} {{ReadOnlyInline}}
  - : このオブジェクトが制御する {{domxref("WritableStream")}} インスタンスを返します。

## 例

- [構造化データと HTML のストリーミングの例](https://streams.spec.whatwg.org/demos/)
- [`TextEncoderStream` を使用してデータをアップロードするフェッチリクエストストリームの例](https://glitch.com/~fetch-request-stream).

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextDecoderStream")}}
- [ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
