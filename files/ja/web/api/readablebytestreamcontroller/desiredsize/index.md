---
title: "ReadableByteStreamController: desiredSize プロパティ"
short-title: desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

**`desiredSize`** は {{domxref("ReadableByteStreamController")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューを満たすために必要な「希望サイズ」を返します。

この値は、ストリームが、基盤となるソースへの推奨する流量を示すために使用します。
データ流入のスロットリングや一時停止に対応しているソース（すべてではありません）は、ストリームバッファーの `desiredSize` が正の値で、使用可能な限りゼロに近づくように流入を制御する必要があります。

`desiredSize` は下流コンシューマーの[背圧](/ja/docs/Web/API/Streams_API/Concepts#背圧)を適用するために使用します。

## 値

整数です。キューがいっぱいになった場合、これは負になる可能性があることに注意してください。

ストリームがエラーになったときは `null`、閉じられていたときは `0` になる可能性があります。

## 例

仕様書の [A readable stream with an underlying push source and backpressure support](https://streams.spec.whatwg.org/#example-rs-push-backpressure) の例には、ストリームが一杯になったことを手動で検出して背圧をかけるために `desiredSize` を使用する良い例が示されています。

この例では既定のソースを使用していますが、概念は読み取り可能なバイトソースとまったく同じです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
