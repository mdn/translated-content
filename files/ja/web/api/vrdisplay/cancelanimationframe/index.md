---
title: VRDisplay.cancelAnimationFrame()
slug: Web/API/VRDisplay/cancelAnimationFrame
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`cancelAnimationFrame()`** は {{domxref("VRDisplay")}} インターフェイスのメソッドで、 {{domxref("Window.cancelAnimationFrame")}} の特別な実装であり、 {{domxref("VRDisplay.requestAnimationFrame()")}} で登録したコールバックを登録解除します．

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 構文

```js
cancelAnimationFrame(handle)
```

### 引数

- `handle`
  - : 登録解除するための {{domxref("VRDisplay.requestAnimationFrame()")}} の呼び出しで返されたハンドルです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();

// WebVR: Check to see if WebVR is supported
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
        if(btn.textContent === 'Start VR display') {
          vrDisplay.requestPresent([{ source: canvas }]).then(function() {
            console.log('Presenting to WebVR display');

            // Set the canvas size to the size of the vrDisplay viewport

            var leftEye = vrDisplay.getEyeParameters('left');
            var rightEye = vrDisplay.getEyeParameters('right');

            canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

            // stop the normal presentation, and start the vr presentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = 'Exit VR display';
          });
        } else {
          vrDisplay.exitPresent();
          console.log('Stopped presenting to WebVR display');

          btn.textContent = 'Start VR display';

          // Stop the VR presentation, and start the normal presentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
} else {
  info.textContent = 'WebVR API not supported by this browser.'
}

function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  ...
}
```

> **メモ:** 完全なコードは [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-example/webgl-demo.js) で見ることができます。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
