---
title: "ClipboardEvent: ClipboardEvent() コンストラクター"
short-title: ClipboardEvent()
slug: Web/API/ClipboardEvent/ClipboardEvent
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Clipboard API")}}

**`ClipboardEvent()`** コンストラクターは、新たに生成された {{domxref("ClipboardEvent")}} を返します。これは、{{domxref("Element/cut_event", "cut")}} や {{domxref("Element/copy_event", "copy")}}、{{domxref("Element/paste_event", "paste")}} イベントで変更されたクリップボード関連の情報を提供するイベントを表します。

## 構文

```js-nolint
new ClipboardEvent(type)
new ClipboardEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、`ClipboardEvent` の型を表します。これは `copy`, `cut`, `paste` の何れかで、大文字小文字を区別します。
- `options` {{optional_inline}}
  - : {{domxref("Event/Event", "Event()")}} で定義されるプロパティに加えて、以下のプロパティを持つオブジェクトです。
    - `clipboardData` {{optional_inline}}
      - : {{domxref("DataTransfer")}} で、このクリックボードイベントに関連付けられたものです。既定値は `null` です。
    - `dataType` {{non-standard_inline}} {{optional_inline}}
      - : 文字列で、`data` 引数に含まれるデータの MIME タイプを指定します。既定値は `""` です。
    - `data` {{non-standard_inline}} {{optional_inline}}
      - : 文字列で、このクリップボードイベントに関連付けられたデータです。既定値は `""` です。

### 返値

新しい {{domxref("ClipboardEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Copy 関連イベント： {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- 所属先の {{domxref("ClipboardEvent")}} インターフェイス
- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
