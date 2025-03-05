---
title: VRStageParameters.sittingToStandingTransform
slug: Web/API/VRStageParameters/sittingToStandingTransform
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`sittingToStandingTransform`** は {{domxref("VRStageParameters")}} インターフェイスの読み取り専用プロパティで、 {{domxref("VRFrameData")}} の座位空間ビュー行列を立位空間に変換する行列です。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

基本的には、レンダリングされたビューを座っている状態から立っている状態に変換するために、WebGL コードにこの値を渡すことができます。

## 値

4x4 の変換行列を成分として持つ 16 要素の {{jsxref("Float32Array")}} です．

## 例

コード例については [`VRStageParameters`](/ja/docs/Web/API/VRStageParameters#例) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
