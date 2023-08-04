---
title: "Window: vrdisplaypresentchange イベント"
slug: Web/API/Window/vrdisplaypresentchange_event
l10n:
  sourceCommit: bb8221e061bba27dbdbe5a3698b6c69febf0bc70
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`vrdisplaypresentchange`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のイベtので、 VR 機器の表示状態が変化したときに発行されます。つまり、表示状態から非表示になったとき、あるいはその逆のケースです。

> **メモ:** このイベントは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('vrdisplaypresentchange', (event) => { });

onvrdisplaypresentchange = (event) => { };
```

## イベント型

{{domxref("VRDisplayEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("VRDisplayEvent")}}

## イベントプロパティ

_`VRDisplayEvent` は親オブジェクトである {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("VRDisplayEvent.display")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : このイベントに関連付けられた {{domxref("VRDisplay")}} です。
- {{domxref("VRDisplayEvent.reason")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : このイベントが発生した理由を人間可読な形で示します。

## 例

`vrdisplaypresentchange` イベントは [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
window.addEventListener('vrdisplaypresentchange', () => {
  info.textContent = vrDisplay.isPresenting ? 'Display has started presenting.' : 'Display has stopped presenting.';
  reportDisplays();
});
```

または、 `onvrdisplaypresentchange` イベントハンドラープロパティを使用してください。

```js
window.onvrdisplaypresentchange = () => {
  info.textContent = vrDisplay.isPresenting ? 'Display has started presenting.' : 'Display has stopped presenting.';
  reportDisplays();
};
```

## 仕様書

このイベントは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR Device API](https://immersive-web.github.io/webxr/) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームが提供するデモ、ダウンロード、その他のリソース。
