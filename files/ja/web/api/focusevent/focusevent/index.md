---
title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("UI Events")}}

**`FocusEvent()`** コンストラクターは、新しく作成された {{domxref("FocusEvent")}} オブジェクトを返します。任意で {{domxref("EventTarget")}} オブジェクトを指定することができます。イベントに送信元と送信先の両方がある場合、 `relatedTarget`の値は、もう一方のターゲットに設定する必要があります。

## 構文

```js-nolint
new FocusEvent(type)
new FocusEvent(type, options)
```

### 引数

_`FocusEvent()` コンストラクターは {{domxref("UIEvent.UIEvent", "UIEvent()")}} および {{domxref("Event.Event", "Event()")}} から引数を継承しています。_

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `blur`、`focus`、`focusin`、`focusout` の何れかを設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。
    - `relatedTarget` {{optional_inline}}
      - : {{domxref("EventTarget")}} で、 {{domxref("FocusEvent")}} の第二ターゲットを表します。既定値は `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("FocusEvent")}} インターフェイス
