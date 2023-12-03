---
title: "KeyboardEvent: KeyboardEvent() コンストラクター"
short-title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent()`** コンストラクターは、新しい {{domxref("KeyboardEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を文字列で示します。
    大文字と小文字の区別があり、ブラウザーは `keydown`, `keyup`, `keypress` の何れかに設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されているものに加え_、以下のプロパティを持つことができます。
    - `key` {{optional_inline}}
      - : 文字列で、既定値は `""` であり、 {{domxref("KeyboardEvent.key")}} の値を設定します。
    - `code` {{optional_inline}}
      - : 文字列で、既定値は `""` であり、 {{domxref("KeyboardEvent.code")}} の値を設定します。
    - `location` {{optional_inline}}
      - : 文字列で、既定値は `0` であり、 {{domxref("KeyboardEvent.location")}} の値を設定します。
    - `repeat` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.repeat")}} の値を設定します。
    - `isComposing` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.isComposing")}} の値を設定します。
    - `charCode` {{optional_inline}} {{deprecated_inline}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxref("KeyboardEvent.charCode")}} の値を設定します。
    - `keyCode` {{optional_inline}} {{deprecated_inline}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxref("KeyboardEvent.keyCode")}} の値を設定します。
    - `which` {{optional_inline}} {{deprecated_inline}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxref("UIEvent.which")}} の値を設定します。
    - `ctrlKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.ctrlKey")}} の値を設定します。
    - `shiftKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.shiftKey")}} の値を設定します。
    - `altKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.altKey")}} の値を設定します。
    - `metaKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 {{domxref("KeyboardEvent.metaKey")}} の値を設定します。

### 返値

新しい {{domxref("KeyboardEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 構築するオブジェクトのインターフェイスである {{domxref("KeyboardEvent")}}
