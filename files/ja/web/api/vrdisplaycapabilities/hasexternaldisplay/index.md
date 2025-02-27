---
title: VRDisplayCapabilities.hasExternalDisplay
slug: Web/API/VRDisplayCapabilities/hasExternalDisplay
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

**`hasExternalDisplay`** は {{domxref("VRDisplayCapabilities")}} インターフェイスの読み取り専用プロパティで、VR ディスプレイがこの端末の主ディスプレイから分離しているどうかを示す論理値を返します。

> [!NOTE]
> 表示中の VR コンテンツがその端末の他のコンテンツを隠してしまう場合 `false` を返します。この場合、アプリは VR コンテンツのミラーリングしようとしたり、 VR ではない UI を更新しようとすべきではありません。こうしたコンテンツは表示されないからです。

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
