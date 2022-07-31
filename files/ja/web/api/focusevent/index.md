---
title: FocusEvent
slug: Web/API/FocusEvent
tags:
  - API
  - DOM
  - DOM イベント
  - イベント
  - リファレンス
browser-compat: api.FocusEvent
translation_of: Web/API/FocusEvent
---
{{APIRef("DOM Events")}}

**`FocusEvent`** はフォーカスに関するイベント、例えば {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}} などを表します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : 指定した引数に基づいて、`FocusEvent` イベントを作成します。

## プロパティ

_このインターフェイスは親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から、プロパティを継承しています_。

- {{domxref("FocusEvent.relatedTarget")}}
  - : このイベントのセカンダリターゲットを表す {{domxref("EventTarget")}} です。一部の場合 (タブ移動でページに出入りするときなど) では、セキュリティ上の理由からこのプロパティが `null` に設定されます。

## メソッド

_このインターフェイスには固有のメソッドはありません。親である {{domxref("UIEvent")}} および間接的に {{domxref("Event")}} から、メソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event")}} 基本インターフェイス
