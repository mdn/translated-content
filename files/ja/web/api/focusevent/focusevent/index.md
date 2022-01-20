---
title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
tags:
  - API
  - コンストラクター
  - イベント
  - FocusEvent
  - リファレンス
browser-compat: api.FocusEvent.FocusEvent
translation_of: Web/API/FocusEvent/FocusEvent
---
{{APIRef("DOM Events")}}

**`FocusEvent()`** コンストラクターは、新しく作成された
{{domxref("FocusEvent")}} オブジェクトを返します。任意で {{domxref("EventTarget")}} オブジェクトを指定することができます。イベントに送信元と送信先の両方がある場合、 `relatedTarget`の値は、もう一方のターゲットに設定する必要があります。

## 構文

```js
var focusEvent = new FocusEvent(typeArg[, focusEventInit]);
```

### プロパティ

_`FocusEvent()` コンストラクターも {{domxref("UIEvent.UIEvent", "UIEvent()")}} および {{domxref("Event.Event", "Event()")}} から引数を継承しています。_

- `typeArg`
  - : {{domxref("DOMString")}} で、このイベントの名前を表します。
- `focusEventInit` {{optional_inline}}

  - : `FocusEventInit` 辞書であり、以下のフィールドがあります。

    - `"relatedTarget"` は、省略可能で既定値は `null` ですが、 {{domxref("EventTarget")}} であり、 {{domxref("FocusEvent")}} の副ターゲットを表します。

    > **Note:** `FocusEventInit` 辞書は、 {{domxref("UIEvent.UIEvent", "UIEventInit")}} および {{domxref("Event.Event", "EventInit")}} 辞書のフィールドも受け入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("FocusEvent")}} インターフェイス
