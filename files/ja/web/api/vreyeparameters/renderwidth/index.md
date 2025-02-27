---
title: VREyeParameters.renderWidth
slug: Web/API/VREyeParameters/renderWidth
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`renderWidth`** は {{domxref("VREyeParameters")}} インターフェイスの読み取り専用プロパティでそれぞれの目のビューポートの推奨レンダーターゲットの幅を、ピクセル単位で表します。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

これは既にデバイスピクセル単位なので、 [Window.devicePixelRatio](/ja/docs/Web/API/Window/devicePixelRatio) を [HTMLCanvasElement.width](/ja/docs/Web/API/HTMLCanvasElement/width) に設定する前に掛け合わせる必要はありません。

### 値

数値で、高さをピクセル単位で表します。

## 例

コード例については [`VREyeParameters`](/ja/docs/Web/API/VREyeParameters#例) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
