---
title: "Gamepad: displayId プロパティ"
short-title: displayId
slug: Web/API/Gamepad/displayId
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`displayId`** は {{domxref("Gamepad")}} インターフェイスの読み取り専用プロパティで、 {{domxref("VRDisplay")}} に関連付けられた {{domxref("VRDisplay.displayId")}} を返します。 `VRDisplay` は表示されるシーンをそのゲームパッドで操作します。

ゲームパッドは、ディスプレイのポーズと同じ空間にあるポーズを報告すると、 {{domxref("VRDisplay")}} と関連していると見なされます。{{domxref("VRDisplay.getPose")}} を参照してください。

> **メモ:** このプロパティは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute) に含まれていました。 [WebXR Gamepads Module](https://immersive-web.github.io/webxr-gamepads-module/) に取って代わられました。
>
> このプロパティを直接置き換えるものはありません。 {{domxref("XRInputSource")}} に関連付けられた {{domxref("Gamepad")}} オブジェクトは、 {{domxref("XRInputSource.gamepad")}} プロパティを使用して取得することができます。

## 値

関連する {{domxref("VRDisplay.displayId")}} を表す数値です。 0 の場合、ゲームパッドは VR ディスプレイと関連付けられていません。

## 例

```js
window.addEventListener("gamepadconnected", (e) => {
  if (!e.gamepad.displayId) {
    console.log("Gamepad connected");
  } else {
    console.log(
      `Gamepad connected, associated with VR display ${e.gamepad.displayId}`,
    );
  }
});
```

## 仕様書

このインターフェイスは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/#gamepad-getvrdisplays-attribute) の一部でしたが、 [WebXR 機器 API](https://immersive-web.github.io/webxr-gamepads-module/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、すべてのブラウザーで動作する WebXR アプリケーションを開発するには、[A-Frame](https://aframe.io/) や [Babylon.js](https://www.babylonjs.com/) や [Three.js](https://threejs.org/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を利用したりすると良いでしょう [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
