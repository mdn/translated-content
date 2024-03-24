---
title: "ReadableStreamDefaultController: desiredSize プロパティ"
short-title: desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`desiredSize`** は {{domxref("ReadableStreamDefaultController")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューを満たすために必要な希望サイズを返します。

### 値

整数。 キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

## 例

仕様にある[基になるプッシュソースと背圧サポートのある読み取り可能なストリーム](https://streams.spec.whatwg.org/#example-rs-push-backpressure)の例は、`desiredSize` を使用してストリームがいっぱいになったことを手動で検出し、背圧を適用する良い例を示しています。 また、{{domxref("ReadablestreamDefaultController.error()")}} を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームのエラーをトリガーします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStreamDefaultController")}}
