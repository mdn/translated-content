---
title: "TextFormatUpdateEvent: TextFormatUpdateEvent() コンストラクター"
slug: Web/API/TextFormatUpdateEvent/TextFormatUpdateEvent
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("TextFormatUpdateEvent API")}}{{SeeCompatTable}}

**`TextFormatUpdateEvent()`** コンストラクターは、新しい {{DOMxRef("TextFormatUpdateEvent")}} オブジェクトを返します。

## 構文

```js-nolint
new TextFormatUpdateEvent(type)
new TextFormatUpdateEvent(type, options)
```

### 引数

- `type`
  - : イベントの種類を表す文字列です。とりうる値は `"textformatupdate"` です。
- `options` {{optional_inline}}
  - : 省略可能なオブジェクトで、以下のプロパティを持ちます。
    - `textFormats`
      - : このイベントで適用する必要があるテキストの書式を表す {{domxref("TextFormat")}} オブジェクトの {{jsxref("Array")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("TextFormatUpdateEvent")}} インターフェイス
