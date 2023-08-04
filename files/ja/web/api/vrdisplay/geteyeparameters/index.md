---
title: VRDisplay.getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`getEyeParameters()`** は {{domxref("VRDisplay")}} インターフェイスのメソッドで、指定された目の視線パラメーターを持つ {{domxref("VREyeParameters")}} オブジェクトを返します。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

## 構文

```js
getEyeParameters(whichEye)
```

### 引数

- `whichEye`
  - : 文字列で、視線パラメーターを取得したい目を表します。指定できる値は `left` と `right` です（[VREye 列挙型](https://w3c.github.io/webvr/spec/1.1/#interface-vreye) で定義されています）。

### 返値

 {{domxref("VREyeParameters")}} オブジェクト、または VR コンテンツを表示できない場合（例えば {{domxref("VRDisplayCapabilities.canPresent")}} が `false` を返す場合）は null です。

## 例

例については [`VREyeParameters`](/ja/docs/Web/API/VREyeParameters#例) 参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
