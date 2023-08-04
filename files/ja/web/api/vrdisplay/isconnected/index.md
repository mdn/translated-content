---
title: VRDisplay.isConnected
slug: Web/API/VRDisplay/isConnected
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`isConnected`** は {{domxref("VRDisplay")}} インターフェイスの読み取り専用プロパティで、この `VRDisplay` がコンピューターに接続されているかどうかを示す論理値を返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

### 値

論理値です。 `true` の場合はディスプレイが接続されていることを意味します。 `false` はそうでないことを意味します。

## 例

```js
navigator.getVRDisplays().then(function(displays) {
  // ディスプレイがある場合は、それを使ってシーンを表示する
  if(displays.length > 0) {
    vrDisplay = displays[0];

    // ボタンがクリックされたときに表示を開始。ユーザーのジェスチャーに応答してのみ呼び出すことができます。
    btn.addEventListener('click', function() {
      // ディスプレイが接続されている場合のみ、表示を要求します。
      if(vrDisplay.isConnected) {
        vrDisplay.requestPresent([{ source: canvas }]).then(function() {
          // アプリの描画を開始するなど。
        });
      } else {
        console.log('Connection to display lost');
      }
    });
  }
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
