---
title: "Element: DOMMouseScroll イベント"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

DOM の `DOMMouseScroll` イベントは、マウスホイールなどが操作され、前回のイベントから 1 行または 1 ページ以上スクロールした場合に非同期に発生します。このイベントは {{ domxref("MouseScrollEvent") }} インターフェイスで表されます。このイベントは Firefox でのみ実装されています。代わりに、標準の {{domxref("Element.wheel_event", "wheel")}} イベントを使用してください。

もしマウスホイールイベントの既定の動作を防ぎたいのであれば、Gecko 上でこのイベントだけを処理すればよいというわけではありません。なぜなら、ネイティブのマウスホイールイベントによるスクロール量が 1 行未満（システム設定がページスクロールの場合は 1 ページ未満）である場合、このイベントが発生しなくても他のマウスホイールイベントが発生する可能性があるからです。

Gecko 17 (Firefox 17) 以降では、ネイティブイベントごとに発生する `wheel` イベントの `preventDefault()` を呼び出す必要があります。

可能であれば、標準化された {{domxref("Element/wheel_event","wheel")}} イベントを使用してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("DOMMouseScroll", (event) => {});

onDOMMouseScroll = (event) => {};
```

## イベント型

{{domxref("MouseWheelEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MouseWheelEvent")}}

## イベントプロパティ

このイベントには、標準的なイベントに加えて、1 つだけ追加のプロパティがあります。

### detail

`detail` プロパティはスクロールをより正確に記述し、正の値は下方向へのスクロールを、負の値は上方向へのスクロールを示します。

イベントがページ単位での上スクロールを表している場合、`detail` の値は -32768 になります。イベントがページ単位での下スクロールを表す場合、値は +32768 になります。その他の値はスクロールする行数を表し、その方向は値の符号で示されます。

> **メモ:** 信頼できるイベントは、`detail` に 0 を指定して送信されることはありません。

信頼できるイベントは 0 では発生しません。

> **メモ:** プラットフォームのネイティブマウスホイールイベントがピクセル単位のスクロール距離しか提供していない場合、またはユーザーが速度をカスタマイズできる場合、値はイベントのターゲットの最も近いスクロール可能な祖先要素の行の高さを使用して計算されます。その要素のフォントサイズが `mousewheel.min_line_scroll_amount` よりも小さい場合、その環境設定の値が行の高さとして使用されます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("MouseScrollEvent") }}
- Gecko の古いピクセルスクロールイベント: `MozMousePixelScroll`
- Gecko 以外のブラウザーの古いマウスホイールイベント: `mousewheel`
- 標準化されたホイールイベント: `wheel`
