---
title: "Window: vrdisplayactivate イベント"
slug: Web/API/Window/vrdisplayactivate_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("Window")}}{{Deprecated_Header}}{{Non-standard_Header}}

**`vrdisplayactivate`** は [WebVR API](/ja/docs/Web/API/WebVR_API) のイベントで、 VR ディスプレイが表示可能になったときに発生します。例えば、 HMD がスタンバイ状態から移行した場合、あるいは装着されて起動した場合など、表示することが可能な状態になったときです。

> **メモ:** このイベントは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でした。これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) に置き換えられました。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('vrdisplayactivate', (event) => { });

onvrdisplayactivate = (event) => { };
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

`vrdisplayactivate` イベントは [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
window.addEventListener('vrdisplayactivate', () => {
  info.textContent = 'Display activated.';
  reportDisplays();
});
```

または、 `onvrdisplayactivate` イベントハンドラープロパティを使用してください。

```js
window.onvrdisplayactivate = () => {
  info.textContent = 'Display activated.';
  reportDisplays();
};
```

## 仕様書

このイベントは古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebVR API ホームページ](/ja/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — Mozilla VR チームが提供するデモ、ダウンロード、その他のリソース。
