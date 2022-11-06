---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
---

{{APIRef("Streams")}}{{SeeCompatTable}}

[Streams API](/ja/docs/Web/API/Streams_API) の **`ReadableByteStreamController`** インターフェイスは、{{domxref("ReadableStream")}} の状態と内部キューを制御できるコントローラーを表します。 バイトストリームコントローラーは、バイトストリーム用です。

## コンストラクター

なし。 `ReadableByteStreamController` インスタンスは、`ReadableStream` の構築中に自動的に作成されます。

## プロパティ

- {{domxref("ReadableByteStreamController.byobRequest")}} {{readonlyInline}}
  - : 現在の BYOB プルリクエストを返します。
- {{domxref("ReadableByteStreamController.desiredSize")}} {{readonlyInline}}
  - : ストリームの内部キューを満たすために必要な希望サイズを返します。

## メソッド

- {{domxref("ReadableByteStreamController.close()")}}
  - : 関連するストリームを閉じます。
- {{domxref("ReadableByteStreamController.enqueue()")}}
  - : 所与のチャンクを関連するストリームのキューに入れます。
- {{domxref("ReadableByteStreamController.error()")}}
  - : 関連するストリームとの今後のやり取りでエラーが発生します。

## 例

未定。

## 仕様

| 仕様                                                                                                     | 状態                         | コメント |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Streams','#rbs-controller-class','ReadableByteStreamController')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ReadableByteStreamController")}}
