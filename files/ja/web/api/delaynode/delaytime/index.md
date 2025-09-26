---
title: "DelayNode: delayTime プロパティ"
short-title: delayTime
slug: Web/API/DelayNode/delayTime
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("Web Audio API") }}

`delayTime` は {{ domxref("DelayNode") }} インターフェイスのプロパティで、適用する遅延量を表す [a-rate](/ja/docs/Web/API/AudioParam#a-rate) の {{domxref("AudioParam")}} です。

`delayTime` は秒単位で表し、その最小値は `0` です。最大値は作成時に、 {{domxref("BaseAudioContext.createDelay")}} メソッドの `maxDelayTime` 引数で定義されます。

> [!NOTE]
> 返される {{domxref("AudioParam")}} は読み取り専用ですが、表している値はそうではありません。

## 値

{{domxref("AudioParam")}} です。

## 例

コード例については [`BaseAudioContext.createDelay()`](/ja/docs/Web/API/BaseAudioContext/createDelay#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
