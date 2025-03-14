---
title: VRStageParameters.sizeX
slug: Web/API/VRStageParameters/sizeX
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`sizeX`** は {{domxref("VRStageParameters")}} インターフェイスの読み取り専用プロパティで、プレイエリア境界の幅をメートル単位で返します。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

境界は、安全性を目的として、床の平面上に軸に沿った矩形として定義されています。コンテンツは、この境界を超えてユーザが動いてしまうような動作をすべてきではありません。しかし、ユーザは境界を無視して動くこと自体は可能で、ユーザ位置がこの矩形境界の外側になることもあります。矩形の中心は、立位空間座標における (0,0,0) です。

## 値

float で表現された幅（メートル単位）。

## 例

コード例については [`VRStageParameters`](/ja/docs/Web/API/VRStageParameters#例) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
