---
title: VRDisplay.getLayers()
slug: Web/API/VRDisplay/getLayers
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`getLayers()`** は {{domxref("VRDisplay")}} インターフェイスのメソッドで、 `VRDisplay` が現在表示しているレイヤーを返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 構文

```js
getLayers()
```

### 引数

なし．

### 返値

{{domxref("VRDisplay")}} が表示中の場合、このメソッドは現在表示中の {{domxref("VRLayerInit")}} オブジェクトの配列を返します（現在 {{domxref("VRDisplayCapabilities.maxLayers")}} は常に 1 なので、これは 1 つになります）。 {{domxref("VRDisplay")}}が表示されていない場合、このメソッドは空の配列を返します。

## 例

例については [`VRLayerInit`](/ja/docs/Web/API/VRLayerInit#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
