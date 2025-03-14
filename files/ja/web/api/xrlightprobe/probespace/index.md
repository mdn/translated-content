---
title: "XRLightProbe: probeSpace プロパティ"
short-title: probeSpace
slug: Web/API/XRLightProbe/probeSpace
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

**`probeSpace`** は {{DOMxRef("XRLightProbe")}} インターフェイスの読み取り専用プロパティで、照明の推定が関連する位置と方向を追跡する {{domxref("XRSpace")}} を返します。

## 値

{{domxref("XRSpace")}} オブジェクトです。

## 例

`probeSpace` プロパティは、照明の推定が関連する空間の位置と方向を返します。ユーザーが移動すると、時間経過に伴って更新されます。各フレームで現在の照明状態を取得するには、 {{domxref("XRFrame.getPose()")}} メソッドを使用します。

```js
const lightProbe = await xrSession.requestLightProbe();
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XRSpace()")}}
- {{domxref("XRFrame.getPose()")}}
