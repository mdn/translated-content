---
title: FocusEvent
slug: Web/API/FocusEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("UI Events")}}

**`FocusEvent`** はフォーカスに関するイベント、例えば {{domxref("Element/focus_event", "focus")}}、{{domxref("Element/blur_event", "blur")}}、{{domxref("Element/focusin_event", "focusin")}}、{{domxref("Element/focusout_event", "focusout")}} などを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : 指定した引数に基づいて、`FocusEvent` イベントを作成します。

## インスタンスプロパティ

_このインターフェイスは親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から、プロパティを継承しています_。

- {{domxref("FocusEvent.relatedTarget")}}
  - : このイベントのセカンダリーターゲットを表す {{domxref("EventTarget")}} です。一部の場合（タブ移動でページに出入りするときなど）では、セキュリティ上の理由からこのプロパティが `null` に設定されます。

## インスタンスメソッド

_このインターフェイスには固有のメソッドはありません。親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から、メソッドを継承しています。_

## イベントの順序

_UI イベント_ 仕様書では、フォーカスイベントは互いに相対的に [設定された順序で発生する](https://w3c.github.io/uievents/#events-focusevent-event-order) と記載されており、さらに、要素 A から要素 B にフォーカスが移動したときに発行される典型的なイベントのシーケンスが記述されています。

1. `focusout`: 要素 A がフォーカスを失う前に送られます。
2. `focusin`: 要素 B がフォーカスを受け取る前に送られます。
3. `blur`: 要素 A がフォーカスを失った後に送られます。
4. `focus`: 要素 B がフォーカスを受け取った後に送られます。

しかし、現在のブラウザー実装では、この 4 つのイベントを異なる形で発行しています。

1. `blur`: 要素 A がフォーカスを失った後に送られます。
2. `focusout`: `blur` イベントが送られた後で送られます。
3. `focus`: 要素 B がフォーカスを失った後に送られます。
4. `focusin`: `focus` イベントが送られた後で送られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event")}} 基本インターフェイス
