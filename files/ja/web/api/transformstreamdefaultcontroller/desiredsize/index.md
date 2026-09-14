---
title: "TransformStreamDefaultController: desiredSize プロパティ"
short-title: desiredSize
slug: Web/API/TransformStreamDefaultController/desiredSize
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

**`desiredSize`** は {{domxref("TransformStreamDefaultController")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{domxref("ReadableStream")}} のキューを埋めるのに必要なサイズを返します。

`ReadableStream` の内部キューには、キューに入れられたがまだ読み込まれていないチャンクが格納されます。ブラウザーはストリームを埋めるために **必要なサイズ** を決定し、この値が `desiredSize` プロパティによって返されます。

もし `desiredSize` が `0` ならば、キューは満杯です。従って、この情報を使用して [手動で背圧をかける](/ja/docs/Web/API/Streams_API/Concepts#背圧) ことでキューを管理することができます。

## 値

必要なサイズ。

## 例

次の例では、 `desiredSize` をコンソールに出力します。

```js
console.log(controller.desiredSize);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
