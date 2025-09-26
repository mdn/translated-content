---
title: "TextUpdateEvent: TextUpdateEvent() コンストラクター"
slug: Web/API/TextUpdateEvent/TextUpdateEvent
l10n:
  sourceCommit: d03a0af8b255b1afb8a29ca38e3f136a0155eb00
---

{{APIRef("TextUpdateEvent API")}}{{SeeCompatTable}}

**`TextUpdateEvent()`** コンストラクターは、新しい {{DOMxRef("TextUpdateEvent")}} のオブジェクトを返します。

## 構文

```js-nolint
new TextUpdateEvent(type)
new TextUpdateEvent(type, options)
```

### 引数

- `type`
  - : イベントの種類を表す文字列です。とりうる値は `"textupdate"` です。
- `options` {{optional_inline}}
  - : 省略可能なオブジェクトで、以下のプロパティを持ちます。
    - `updateRangeStart`
      - : 編集可能な領域内のテキストのうち、更新が必要な範囲の始点の文字のオフセットを表す数値です。
    - `updateRangeEnd`
      - : 編集可能な領域内のテキストのうち、更新が必要な範囲の終点の文字のオフセットを表す数値です。
    - `text`
      - : 挿入が必要なテキストを表す文字列です。
    - `selectionStart`
      - : 編集可能な領域内の選択範囲の始点のオフセットを表す数値です。
    - `selectionEnd`
      - : 編集可能な領域内の選択範囲の終点のオフセットを表す数値です。
    - `compositionStart`
      - : 編集可能な領域内のテキストで変換が行われている範囲の始点のオフセットを表す数値です。
    - `compositionEnd`
      - : 編集可能な領域内のテキストで変換が行われている範囲の終点のオフセットを表す数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("TextUpdateEvent")}} インターフェイス
