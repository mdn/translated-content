---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

**`TextDecoderStream`** は{{domxref('Encoding API','エンコーディング API','',' ')}} のインターフェイスで、UTF-8 などのバイナリーエンコーディングのテキストストリームを文字列ストリームに変換します。
これは {{domxref("TextDecoder")}} と同等のストリームです。

## コンストラクター

- {{domxref("TextDecoderStream.TextDecoderStream","TextDecoderStream()")}}
  - : 新しい `TextDecoderStream` オブジェクトを作成します。

## インスタンスプロパティ

- {{DOMxRef("TextDecoderStream.encoding")}} {{ReadOnlyInline}}
  - : エンコーディングです。
- {{DOMxRef("TextDecoderStream.fatal")}} {{ReadOnlyInline}}
  - : 論理値で、エラーモードが fatal であるかどうかを示します。
- {{DOMxRef("TextDecoderStream.ignoreBOM")}} {{ReadOnlyInline}}
  - : 論理値で、バイトオーダーマークを無視するかどうかを示します。
- {{DOMxRef("TextDecoderStream.readable")}} {{ReadOnlyInline}}
  - : このオブジェクトによって制御される {{domxref("ReadableStream")}} のインスタンスを返します。
- {{DOMxRef("TextDecoderStream.writable")}} {{ReadOnlyInline}}
  - : このオブジェクトによって制御される {{domxref("WritableStream")}} のインスタンスを返します。

## 例

- [構造化データと HTML のストリーミングの例](https://streams.spec.whatwg.org/demos/)
- [`TextDecoderStream` を使用したフェッチリクエストストリームの例](https://glitch.com/~fetch-request-stream).

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TextEncoderStream")}}
- [ストリーム API の概念](/ja/docs/Web/API/Streams_API/Concepts)
- [Experimenting with the Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
