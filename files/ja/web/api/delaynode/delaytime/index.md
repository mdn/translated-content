---
title: DelayNode.delayTime
slug: Web/API/DelayNode/delayTime
---

{{ APIRef("Web Audio API") }}

`delayTime` は {{ domxref("DelayNode") }} インターフェイスのプロパティで、適用する遅延量を表す [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。

`delayTime` は秒単位で表し、その最小値は `0` です。最大値は作成時に、 {{domxref("BaseAudioContext.createDelay")}} メソッドの `maxDelayTime` 引数で定義されます。

> **メモ:** 返される {{domxref("AudioParam")}} は読み取り専用ですが、表している値はそうではありません。

## 値

{{domxref("AudioParam")}} です。

## 例

コード例については [`BaseAudioContext.createDelay()`](/ja/docs/Web/API/BaseAudioContext/createDelay#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
