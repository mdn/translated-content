---
title: "AudioParam: defaultValue プロパティ"
short-title: defaultValue
slug: Web/API/AudioParam/defaultValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

**`defaultValue`** は {{ domxref("AudioParam") }} インターフェイスの読み取り専用プロパティで、 `AudioParam` を作成する固有の {{domxref("AudioNode")}} で定義する属性の初期値を表します。

## 値

浮動小数点数 ({{jsxref("Number")}}) です。

## 例

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const defaultVal = gainNode.gain.defaultValue;
console.log(defaultVal); // 1
console.log(defaultVal === gainNode.gain.value); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
