---
title: VRFrameData.timestamp
slug: Web/API/VRFrameData/timestamp
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`timestamp`** は {{domxref("VRFrameData")}} インターフェイスの読み取り専用プロパティで、フレームの更新が発生した時刻を表す、常に増加するタイムスタンプ値を返します。

> [!NOTE]
> このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

タイムスタンプは、位置状態データがハードウェアから更新されたかどうかを判断するのに便利です。値は常に増加していくので、更新の順序を決定するために比較することができます。新しい値は常に古い値より大きいか等しくなります。

タイムスタンプは、 {{domxref("VRDisplay")}} が最初に呼び出されたときに 0 から始まります。

## 値

{{domxref("DOMHighResTimeStamp")}} オブジェクトです。

## 例

```js
var frameData = new VRFrameData();
var vrDisplay;

navigator.getVRDisplays().then(function(displays) {
  vrDisplay = displays[0];
  console.log('Display found');
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener('click', function() {
    vrDisplay.requestPresent([{ source: canvas }]).then(function() {
      drawVRScene();
    });
  });
});

// WebVR: Draw the scene for the WebVR display.
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // grab the current timestamp on each run of the rendering loop
  // and do something with it
  framedata.timestamp

    ...

  // WebVR: Indicates that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
