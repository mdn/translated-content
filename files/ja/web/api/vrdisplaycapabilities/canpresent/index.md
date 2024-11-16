---
title: VRDisplayCapabilities.canPresent
slug: Web/API/VRDisplayCapabilities/canPresent
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`canPresent`** は {{domxref("VRDisplayCapabilities")}} インターフェイスの読み取り専用プロパティで、VR ディスプレイが（HMD を通じて）コンテンツを表示可能かどうかの状態を論理値で返します。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

これは、 6 自由度追跡が可能であるものの、 {{domxref("VRDisplay.requestPresent()")}} が意味を持たない「マジックウィンドウ」機器を識別するのに有益な機能です。`canPresent` が `false` の場合、 {{domxref("VRDisplay.requestPresent()")}} の呼び出しは失敗し、 {{domxref("VRDisplay.getEyeParameters()")}} は `null` を返します。

## 値

論理値です。

## 例

コード例については [`VRDisplayCapabilities`](/ja/docs/Web/API/VRDisplayCapabilities#examples) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
