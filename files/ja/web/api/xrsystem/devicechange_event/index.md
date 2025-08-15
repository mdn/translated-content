---
title: "XRSystem: devicechange イベント"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`devicechange`** は {{DOMxRef("XRSystem")}} オブジェクトで発生するイベントで、例えば VR ヘッドセットや AR ゴーグルが接続されたり切断されたりと、没入型 XR 機器の利用できる状況が変化した時に発生します。これは一般的な {{DOMxRef("Event")}} で、プロパティは追加されていません。

> [!NOTE]
> {{domxref("MediaDevices")}} の {{DOMxRef("MediaDevices.devicechange_event", "devicechange")}} イベントと混同しないでください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

WebXR の使用が `xr-spatial-tracking` [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によってブロックされている場合、 `devicechange` イベントは発行されません。

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 解説

### トリガー

没入型 XR 端末の利用できる状況が変化したときに発生します。例えば、 VR ヘッドセットや AR ゴーグルが接続されたり切断されたりした場合です。

### 用途

このイベントを使用して、例えば WebXR 互換端末が利用できるかどうかを監視し、ユーザーが没入モードを有効にするために使用する UI 要素を有効にすることができます。この例を下記の[例](#例)で示します。

## 例

この例では、「Enter XR」ボタンが利用できるかどうかを、現在利用できる没入型機器があるかどうかに基づいて切り替えることで、`devicechange`イベントを処理しています。

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

`devicechange` を受信すると、このコードで設定したハンドラーは `XR` の {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} メソッドを呼び出して、没入型 VR プレゼンテーションを処理できる端末があるかどうかを調べます。ある場合は XR モードに入るボタンが有効になり、ない場合は無効になります。

また、 `ondevicechange` イベントハンドラープロパティを使用して、 `devicechange` イベントに単一のハンドラーを設定することもできます。

```js
if (navigator.xr) {
  navigator.xr.ondevicechange = (event) => {
    // …
  };
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
