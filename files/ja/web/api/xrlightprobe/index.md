---
title: XRLightProbe
slug: Web/API/XRLightProbe
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

**`XRLightProbe`** は [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) のインターフェイスで、ユーザー環境のこの点の照明情報が入ります。 `XRLighting` オブジェクトは {{domxref("XRSession.requestLightProbe()")}} メソッドを使用して取得することができます。

このオブジェクト自体は照明値を保持しませんが、それぞれの {{domxref("XRFrame")}} の照明状態を収集するために使用します。 `XRLightProbe` の推定照明値については {{domxref("XRLightEstimate")}} を参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

- `XRLightProbe.onreflectionchange`
  - : {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} イベントのイベントハンドラープロパティです。
- {{domxref("XRLightProbe.probeSpace")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 照明推定が相対的な位置と方向を追跡する {{domxref("XRSpace")}} です。

## インスタンスメソッド

なし。

## イベント

- {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} {{Experimental_Inline}}
  - : 推定反射立方体マップが変更されるたびに発行されます。（これはユーザーが移動して環境の照明が変化したときに発生します。）

## 例

### セッションの `XRLightProbe` オブジェクトの取得

ライトプローブを取得するには、 {{domxref("XRSession.requestLightProbe()")}} メソッドを使用します。

```js
const lightProbe = await xrSession.requestLightProbe();
```

### `XRFrame` 内のプローブ位置姿勢の取得

ライトプローブの `probeSpace` を {{domxref("XRFrame.getPose()")}} に渡すと、ある位置姿勢のライトプローブを取得します。

```js
const probePose = xrFrame.getPose(lightProbe.probeSpace, xrReferenceSpace);
```

### `reflectionchange` イベントの使用

`XRLightProbe` を渡して、 {{domxref("XRLightProbe.reflectionchange_event", "reflectionchange")}} イベントが発生するたびに推定反射立方体マップを取得します。{{domxref("XRWebGLBinding.getReflectionCubeMap()")}} も参照してください。

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XRSession.requestLightProbe()")}}
