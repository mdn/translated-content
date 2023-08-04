---
title: VRDisplay.getPose()
slug: Web/API/VRDisplay/getPose
---

{{APIRef("WebVR API")}}{{deprecated_header}}

**`getPose()`** は {{domxref("VRDisplay")}} インターフェイスのメソッドで、現在のフレームが実際に描画される時点の未来の `VRDisplay` の予測ポーズを決める {{domxref("VRPose")}} オブジェクトを返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。
>
> こちらでも非推奨でした。 — 代わりに {{domxref("VRDisplay.getFrameData()")}} で {{domxref("VRPose")}} オブジェクトを受け取ってください。

## 構文

```js
getPose()
```

### 引数

なし．

### 返値

{{domxref("VRPose")}} オブジェクトです。

## 例

{{domxref("VRDisplay")}} オブジェクトへの参照を得ると、ディスプレイの現在のポーズを表す {{domxref("VRPose")}} を取得することができるようになります。

```js
if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length > 0) {
      vrDisplay = displays[0];
      console.log('Display found');

          // Return the current VRPose object for the display
          var pose = vrDisplay.getPose();

          ...

    }
  });
}
```

しかし、非推奨ではない {{domxref("VRFrameData")}} オブジェクト（{{domxref("VRDisplay.getFrameData()")}}で取得）の {{domxref("VRFrameData.pose", "pose")}} プロパティを使用して、表示するためにディスプレイに送信する前に各フレームの現在の姿勢を取得することをお勧めします。これはアプリのレンダリングループの各反復処理で行われるため、ポーズデータが最新であることを確認することができます。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
