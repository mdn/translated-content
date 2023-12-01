---
title: VRDisplay.stageParameters
slug: Web/API/VRDisplay/stageParameters
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

**`stageParameters`** は {{domxref("VRDisplay")}} インターフェイスの読み取り専用プロパティで、 `VRDisplay` がルームスケール体験をサポートしている場合に、ルームスケールパラメーターを持つ {{domxref("VRStageParameters")}} オブジェクトを返します．

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

### 値

`VRDisplay` のルームスケールパラメーターを持つ {{domxref("VRStageParameters")}} オブジェクトです。 `VRDisplay` がルームスケール体験をサポートしていない場合は `null` です。

## 例

例については [`VRStageParameters`](/ja/docs/Web/API/VRStageParameters#例) を参照してください。

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#interface-vrdisplay) の一部でしたが、 [WebXR Device API](https://immersive-web.github.io/webxr/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームによるデモ、ダウンロード、その他のリソース。
