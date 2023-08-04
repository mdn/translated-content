---
title: VRDisplayEvent.reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`reason`** は {{domxref("VRDisplayEvent")}} インターフェイスの読み取り専用プロパティで、イベントが発生した理由を人間可読な形で返します。

> **メモ:** このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

## 値

文字列で、このイベントが発生した理由を表します。利用可能な理由は [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason) 列挙型で次のように定義されています。

- `mounted` — {{domxref("VRDisplay")}} は、ユーザーがそれを装着した（または他の方法でアクティブになった）ことを検知しました。
- `navigation` — このページは、すでに VR 表示モードになっている他のサイトなど、このページをすぐに表示し始めることができるコンテキストから移動されたものです。
- `requested` — ユーザーエージェントは、 VR表示モードの開始をリクエストされました。これにより、ユーザーエージェントは様々な形で VR に入るための一貫した UI を持つことができます。
- `unmounted` — {{domxref("VRDisplay")}} は、ユーザーがそれを外した（または、それ以外のスリープ／スタンバイ状態になった）ことを検知しました。

## 例

```js
window.addEventListener('vrdisplaypresentchange', (e) => {
    console.log(`Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`);
  })
```

## 仕様書

このプロパティは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームが提供するデモ、ダウンロード、その他のリソース。
