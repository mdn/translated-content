---
title: Navigator.activeVRDisplays
slug: Web/API/Navigator/activeVRDisplays
---

{{securecontext_header}}{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

**`activeVRDisplays`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、すべての {{domxref("VRDisplay")}} オブジェクトのうち、現在表示中 ({{domxref("VRDisplay.ispresenting")}} が `true`) のものを含んだ配列を返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 値

{{domxref("VRDisplay")}} オブジェクトの配列です。

## 例

```js
function showActive() {
  const displays = navigator.activeVRDisplays;
  for (let i = 0; i < displays.length; i++) {
    console.log("Display " + displays[i].displayId + " is active.");
  }
}
```

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
