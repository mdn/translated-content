---
title: "XRInputSource: hand プロパティ"
short-title: hand
slug: Web/API/XRInputSource/hand
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

**`hand`** は {{domxref("XRInputSource")}} インターフェイスの読み取り専用プロパティで、ハンドトラッキング機器へのあくせすを提供する {{domxref("XRHand")}} オブジェクトです。

## 値

{{domxref("XRHand")}} オブジェクト、または {{domxref("XRSession")}} が `hand-tracking` 機能記述子で[リクエスト](/ja/docs/Web/API/XRSystem/requestSession)されていない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

```js
navigator.xr
  .requestSession({ optionalFeatures: ["hand-tracking"] })
  .then(/* … */);

function renderFrame(session, frame) {
  // …

  for (const inputSource of session.inputSources) {
    if (inputSource.hand) {
      // render a hand model, perform gesture detection, etc.
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XRHand")}}
