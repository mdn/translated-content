---
title: VRDisplay.depthFar
slug: Web/API/VRDisplay/depthFar
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`depthFar`** は {{domxref("VRDisplay")}} インターフェイスのプロパティで、 [eye view frustum](https://en.wikipedia.org/wiki/Viewing_frustum) (ビューフラスタム；つまりシーンの可視領域の境界) の far 平面を定義している z-depth の取得と設定を行います．

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

一般的にはこの値をそのままにしておきますが、低速のコンピューターでパフォーマンスを向上させる場合は、この値を小さくするとよいでしょう。

## 値

double 値で、 z-depth をメートル単位で表します。初期値は `10000.0` です。

## 例

```js
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  vrDisplay.depthNear = 1.0;
  vrDisplay.depthFar = 7500.0;
});
```

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
