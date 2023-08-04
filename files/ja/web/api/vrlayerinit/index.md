---
title: VRLayerInit
slug: Web/API/VRLayerInit
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`VRLayerInit`** 辞書は [WebVR API](/ja/docs/Web/API/WebVR_API) の辞書で、 VR ディスプレイに表示したいコンテンツレイヤー （{{domxref("HTMLCanvasElement")}} または {{domxref("OffscreenCanvas")}}） を表します。

> **メモ:** このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

`VRLayerInit` オブジェクトは {{domxref("VRDisplay.getLayers()")}} メソッドを使用して受ける取り、 {{domxref("VRDisplay.requestPresent()")}} メソッドを使用して表示することができます。

## プロパティ

- {{domxref("VRLayerInit.leftBounds")}} {{deprecated_inline}}
  - : {{domxref("VRDisplay")}} によって内容が表示されるキャンバスの左側のテクスチャ境界を定義します。
- {{domxref("VRLayerInit.rightBounds")}} {{deprecated_inline}}
  - : {{domxref("VRDisplay")}} によって内容が表示されるキャンバスの右側のテクスチャ境界を定義します。
- {{domxref("VRLayerInit.source")}} {{deprecated_inline}}
  - : {{domxref("VRDisplay.submitFrame()")}} が呼び出されたときに、 {{domxref("VRDisplay")}} が表示するコンテンツを持つキャンバスを定義します。

## 例

```js
// currently returns an empty array
var layers = vrDisplay.getLayers();

if(navigator.getVRDisplays) {
  console.log('WebVR 1.1 supported');
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then(function(displays) {
    // If a display is available, use it to present the scene
    if(displays.length > 0) {
      vrDisplay = displays[0];
      console.log('Display found');
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener('click', function() {
        vrDisplay.requestPresent([{ source: canvas }]).then(function() {
          console.log('Presenting to WebVR display');

          // Here it returns an array of VRLayerInit objects
          var layers = vrDisplay.getLayers();

          ...
        });
      });
    }
  });
}
```

{{domxref("VRLayerInit")}} オブジェクトは下記のように見えます。

```js
{
  leftBounds : [ ... ],
  rightBounds: [ ... ],
  source: canvasReference
}
```

> **メモ:** `canvasReference` は {{htmlelement("canvas")}} 要素そのものを指すものであり、キャンバスに関連付けられた WebGL コンテキストを指すわけではありません。他の 2 つのメンバーは配列です。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
