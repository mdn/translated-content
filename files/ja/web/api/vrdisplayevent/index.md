---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VRDisplayEvent`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のインターフェイスで、 WebVR 関連イベントのイベントオブジェクトを表します（[WebVR ウインドウ拡張機能のリスト](/ja/docs/Web/API/WebVR_API#window)を参照）。

> [!NOTE]
> このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

## コンストラクター

- {{domxref("VRDisplayEvent.VRDisplayEvent", "VRDisplayEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : `VRDisplayEvent` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_`VRDisplayEvent` は、親オブジェクトである {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("VRDisplayEvent.display")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : このイベントに関連付けられた {{domxref("VRDisplay")}} 。
- {{domxref("VRDisplayEvent.reason")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : イベントが発生した人間が読める理由。

## 例

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## 仕様書

このインターフェイスは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
