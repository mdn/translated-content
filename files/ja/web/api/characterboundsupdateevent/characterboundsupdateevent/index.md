---
title: "CharacterBoundsUpdateEvent: CharacterBoundsUpdateEvent() コンストラクター"
slug: Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("CharacterBoundsUpdateEvent API")}}{{SeeCompatTable}}

**`CharacterBoundsUpdateEvent()`** コンストラクターは、新しい {{DOMxRef("CharacterBoundsUpdateEvent")}} オブジェクトを返します。

## 構文

```js-nolint
new CharacterBoundsUpdateEvent(type)
new CharacterBoundsUpdateEvent(type, options)
```

### 引数

- `type`
  - : イベントの種類を表す文字列です。とりうる値は `"characterboundsupdate"` です。
- `options` {{optional_inline}}
  - : 省略可能なオブジェクトで、以下のプロパティを持ちます。
    - `rangeStart`
      - : 編集可能なテキスト領域内のこのイベントが関係する始点の文字のオフセットを設定する数値です。
    - `rangeEnd`
      - : 編集可能なテキスト領域内のこのイベントが関係する終点の文字のオフセットを設定する数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("CharacterBoundsUpdateEvent")}} インターフェイス
