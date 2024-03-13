---
title: "Element: beforexrselect イベント"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{SeeCompatTable}}

**`beforexrselect`** イベントは、WebXR の選択イベント ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) が配信される前に発行されます。ユーザーが DOM オーバーレイ UI を走査する間、XR ワールド入力イベントを抑制するために使用することができます。

このイベントは[バブリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#イベントのバブリングとキャプチャリング)し、[キャンセル可能](/ja/docs/Web/API/Event/cancelable)で、[合成されます](/ja/docs/Web/API/Event/composed)。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("beforexrselect", (event) => {});

onbeforexrselect = (event) => {};
```

## イベント型

{{domxref("XRSessionEvent")}} です。{{domxref("Event")}} から継承されています。

{{InheritanceDiagram("XRSessionEvent")}}

## イベントプロパティ

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : イベントが参照する {{domxref("XRSession")}} です。

## イベントの可用性

**`beforexrselect`** イベントはグローバルイベントであり、以下のインターフェイスで利用できます。

- {{domxref("Window")}}
- {{domxref("Document")}}
- {{domxref("HTMLElement")}}
- {{domxref("SVGElement")}}
- {{domxref("MathMLElement")}}

## 例

WebXR の選択イベント ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) を抑制するために、アプリケーションは `beforexrselect` イベントを待ち受けすることができます。このイベントはバブリングするので、{{domxref("Event/preventDefault", "preventDefault()")}} を DOM オーバーレイ要素で呼び出すと、このコンテナー内の WebXR select イベントが DOM 要素と対話するのを防ぎ、XR の世界への重複したイベント入力を避けることができます。

```js
document
  .getElementById("xr-overlay")
  .addEventListener("beforexrselect", (ev) => ev.preventDefault());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XRSession/select_event", "select")}} イベント
- {{domxref("XRSession/selectstart_event", "selectstart")}} イベント
- {{domxref("XRSession/selectend_event", "selectend")}} イベント
