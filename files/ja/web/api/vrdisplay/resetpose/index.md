---
title: VRDisplay.resetPose()
slug: Web/API/VRDisplay/resetPose
---

{{APIRef("WebVR API")}}{{deprecated_header}}

**`resetPose()`** は {{domxref("VRDisplay")}} インターフェイスのメソッドで、`VRDisplay` のポーズをリセットして、現在の {{domxref("VRPose.position")}} と {{domxref("VRPose.orientation")}} を "原点/ゼロ位置" の値として扱います。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。 [WebXR Device API](https://immersive-web.github.io/webxr/)に置き換えられました。

`resetPost()` を呼出した後は、 {{domxref("VRDisplay.getPose()")}}/{{domxref("VRDisplay.getImmediatePose()")}} から返された未来予測ポーズは、`resetPose()` が最後に呼び出された時点からの相対的な `VRDisplay` の位置になります。また、`resetPose()` が最後に呼び出された時点の VR ディスプレイのヨー (yaw) を前方として扱います。

VRDisplay の報告されるロール (roll) とピッチ (pitch) は重力に対して相対的なので `resetPose()` を呼んでも変化しません。 `resetPose()` を呼び出すと {{domxref("VRStageParameters.sittingToStandingTransform")}} 行列が変更される場合があります。

## 構文

```js
resetPose()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// Assuming vrDisplay already contains a VRDisplay object,
// and we have a <button> referenced inside btn
btn.addEventListener('click', function() {
  vrDisplay.resetPose();
  console.log('Current pose set as origin/center');
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
