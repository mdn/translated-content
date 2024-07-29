---
title: "AudioParam: maxValue プロパティ"
short-title: maxValue
slug: Web/API/AudioParam/maxValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`maxValue`** は {{domxref("AudioParam")}} インターフェイスの読み取り専用プロパティで、このパラメーターの公称（有効）範囲の使用可能な最大値を表します。

## 値

浮動小数点の数値 ({{jsxref("Number")}}) で、このパラメーターの公称範囲内で許容される最大値です。

`maxValue` の既定値では、単精度浮動小数点数の正の最大値 (+340,282,346,638,528,859,811,704,183,484,516,925,440) です。

## 例

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.maxValue); // 3.4028234663852886e38
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioParam.minValue")}}
