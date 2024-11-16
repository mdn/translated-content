---
title: VREyeParameters.offset
slug: Web/API/VREyeParameters/offset
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`offset`** は {{domxref("VREyeParameters")}} インターフェイスの読み取り専用プロパティで、は、ユーザーの目と目の間の中心点から目の中心までのオフセットを表します。単位はメートルです。

> [!NOTE]
> このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

この値は、ユーザーの瞳孔間距離（IPD）の半分で あるべきですが、指定された目のヘッドセットの中心点からレンズの中心点までの距離を表してもかまいません。

### 値

ユーザーの目と目の間の中心点から目の中心までのオフセットをメートル単位で記述したベクトルを表す {{jsxref("Float32Array")}} です。

> [!NOTE]
> 左目の値は負の値、右目の値は正の値になります。

## 例

コード例については [`VRFieldOfView`](/ja/docs/Web/API/VRFieldOfView#例) を参照してください。

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
