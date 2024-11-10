---
title: "XRLightProbe: reflectionchange イベント"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

WebXR の **`reflectionchange`** イベントは、推定反射立方体のマップが変更されるたびに発生します。これは、異なる照明条件での使用や、照明自体の直接的な変更に応じて発生します。このイベントはキャンセル不可です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("reflectionchange", (event) => {});

onreflectionchange = (event) => {};
```

## イベント型

{{domxref("Event")}} です。

## 例

### `reflectionchange` イベントの使用

照明に関する `reflectionchange` イベントが発生するたびに、{{domxref("XRWebGLBinding.getReflectionCubeMap()")}} を呼び出すことで、更新された立方体マップを取得することができます。この方法は、 {{domxref("XRFrame")}} ごとに照明情報を取得するよりもコストがかかりません。

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### `onreflectionchange` イベントハンドラープロパティ

`reflectionchange` イベントは `onreflectionchange` イベントハンドラープロパティを使用しても利用できます。

```js
lightProbe.onreflectionchange = (event) => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
