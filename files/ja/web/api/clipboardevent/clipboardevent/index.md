---
title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
tags:
  - API
  - Clipboard
  - クリップボード API
  - ClipboardEvent
  - コンストラクター
  - Cut
  - 実験的
  - リファレンス
  - copy
  - paste
browser-compat: api.ClipboardEvent.ClipboardEvent
translation_of: Web/API/ClipboardEvent/ClipboardEvent
---
{{APIRef("Clipboard API")}}{{SeeCompatTable}}

**`ClipboardEvent()`** コンストラクターは、新たに生成された {{domxref("ClipboardEvent")}} を返します。これは、{{domxref("Element/cut_event", "cut")}} や {{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} イベントで変更されたクリップボード関連の情報を提供するイベントを表します。

## 構文

```js
var clipboardEvent = new ClipboardEvent(type[, options]);
```

### 引数

_`ClipboardEvent()` コンストラクターは、 {{domxref("Event.Event", "Event()")}} の引数も継承しています。_

- _type_
  - : {{domxref("DOMString")}} で、 `ClipboardEvent` の型を表します。これは `'copy'`, `'cut'`, `'paste'` の何れかで、大文字小文字を区別します。
- *options* {{optional_inline}}

  - : 以下のようなオプションです。

    - `clipboardData`: {{domxref("DataTransfer")}} で、このクリックボードイベントに関連付けられたものです。
    - `dataType`{{non-standard_inline}}: {{domxref("DOMString")}} で、 `data` 引数に含まれるデータの MIME タイプを指定します。
    - `data`{{non-standard_inline}}: {{domxref("DOMString")}} で、このクリップボードイベントに関連付けられたデータです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Copy 関連イベント： {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- 所属先の {{domxref("ClipboardEvent")}} インターフェイス
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
