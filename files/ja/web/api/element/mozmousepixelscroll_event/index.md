---
title: "Element: MozMousePixelScroll イベント"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Firefox 専用の、標準外、かつ廃止予定の **MozMousePixelScroll`** イベントは、マウスホイールなどが操作されたときに {{domxref("Element")}} で非同期に発生します。これは {{ domxref("MouseScrollEvent") }} インターフェイスで表されます。

> **メモ:** この標準外の旧式のイベントは使用しないでください。代わりに、常に標準の {{domxref("Element.wheel_event", "wheel")}} イベントを使用してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("MozMousePixelScroll", (event) => {});

onMozMousePixelScroll = (event) => {};
```

## イベント型

{{domxref("MouseWheelEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MouseWheelEvent")}}

## スクロールした距離の取得

このイベントの {{domxref("UIEvent/detail", "detail")}} プロパティは、スクロール距離を行単位で示します。負の値はスクロール移動が下方向か右方向であることを示し、正の値は上方向か左方向であることを示します。

プラットフォームのネイティブマウスホイールイベントが行またはページ単位でスクロール距離を示している場合、`detail` の値はその値と、ターゲット要素を含む最も近い祖先のスクロール可能要素の行の高さまたはページの幅/高さを使用して計算されます。

> **メモ:** macOSでは、スクロール距離（したがって `detail` の値）は加速スクロール距離に基づいて計算されます。

イベントが正当なものであれば、`detail` の値が 0 になることはありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseScrollEvent") }}
- Gecko の古い行またはページのスクロールイベント: `DOMMouseScroll`
- Gecko 以外のブラウザーの古いマウスホイールイベント: `mousewheel`
- 標準化されたホイールイベント: `wheel`
