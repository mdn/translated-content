---
title: VRDisplayEvent()
slug: Web/API/VRDisplayEvent/VRDisplayEvent
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`VRDisplayEvent()`** コンストラクターは、 {{domxref("VRDisplayEvent")}} オブジェクトを作成します。

> [!NOTE]
> このコンストラクターは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

## 構文

```js-nolint
new VRDisplayEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字の区別があり、ブラウザーは `vrdisplayconnect`、`vrdisplaydisconnect`、`vrdisplayactivate`、`vrdisplaydeactivate`、`vrdisplayblur`、`vrdisplaypointerrestricted`、`vrdisplaypointerunrestricted`、`vrdisplaypresentchange` のいずれかに設定します。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} .で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `display`
      - : このイベントが関連付けられている {{domxref("VRDisplay")}} です。
    - `reason`
      - : 文字列で、イベントが発行された人間可読な理由を表します（{{domxref("VRDisplayEvent.reason")}} を参照）。

### 返値

新しい {{domxref("VRDisplayEvent")}} オブジェクトです。

## 例

```js
const myEventObject = new VRDisplayEvent("custom", {
  display: vrDisplay,
  reason: "Custom reason",
});
```

## 仕様書

このコンストラクターは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
