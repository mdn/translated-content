---
title: VRDisplay.isPresenting
slug: Web/API/VRDisplay/isPresenting
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`isPresenting`** は {{domxref("VRDisplay")}} インターフェイスの読み取り専用プロパティで、 `VRDisplay` が現在コンテンツを表示中かどうかを示す論理値を返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

### 値

論理値です。 `true` の場合はそのディスプレイが表示中であることを意味します。 `false` はそうではないことを示します。

## 例

```js
function onVRExitPresent () {
  // No sense in exiting presentation if we're not actually presenting.
  // (This may happen if we get an event like vrdisplaydeactivate when
  // we weren't presenting.)
  if (!vrDisplay.isPresenting)
    return;
  vrDisplay.exitPresent().then(function () {
    // Nothing to do because we're handling things in onVRPresentChange.
  }, function (err) {
    var errMsg = "exitPresent failed.";
    if (err && err.message) {
      errMsg += "<br/>" + err.message
    }
    VRSamplesUtil.addError(errMsg, 2000);
  });
}
```

> **メモ:** このコードスニペットは [Google's VR Presentation demo](https://github.com/toji/webvr.info/blob/master/samples/03-vr-presentation.html) から取ったものです。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
