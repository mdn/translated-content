---
title: VRLayerInit.rightBounds
slug: Web/API/VRLayerInit/rightBounds
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`rightBounds`** は {{domxref("VRLayerInit")}} インターフェイス（辞書）のプロパティで、 {{domxref("VRDisplay")}} によってコンテンツが表示されるキャンバスの右側のテクスチャ境界を定義します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 値

4 つの浮動小数点値の配列で、 0.0–1.0 の値を取ることができます。

1. 境界の左側のオフセット。
2. 境界の上側のオフセット。
3. 境界の幅。
4. 境界の高さ。

この辞書で `leftBounds` が指定されていない場合、使用される既定値は `[0.5, 0.0, 0.5, 1.0]` です。

## 例

例については [`VRLayerInit`](/ja/docs/Web/API/VRLayerInit#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
