---
title: "PictureInPictureEvent: PictureInPictureEvent() コンストラクター"
short-title: PictureInPictureEvent()
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureEvent()`** コンストラクターは、新しい {{domxref("PictureInPictureEvent")}} オブジェクトをオプションの {{domxref("EventTarget")}} と共に作成して返します。
イベントに入力と出力の両方がある場合、`relatedTarget` 値には他にも対象とするものを設定する必要があります。

## 構文

```js-nolint
new PictureInPictureEvent(type, options)
```

### 引数

- `type`
  - : イベント名を表す文字列。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができるオブジェクトです。
    - `relatedTarget` {{optional_inline}}
      - : 関連する {{domxref("EventTarget")}}、または `null` （既定値）です。

### 返値

新しい {{domxref("PictureInPictureEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("PictureInPictureEvent")}} インターフェイス
