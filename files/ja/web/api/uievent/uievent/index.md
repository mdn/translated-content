---
title: UIEvent()
slug: Web/API/UIEvent/UIEvent
tags:
  - API
  - コンストラクター
  - リファレンス
  - UIEvent
browser-compat: api.UIEvent.UIEvent
translation_of: Web/API/UIEvent/UIEvent
---
{{APIRef("DOM Events")}}

**`UIEvent()`** コンストラクターは新しい {{domxref("UIEvent")}} を生成します。

## 構文

```js
event = new UIEvent(typeArg [, UIEventInit])
```

### 値

- `typeArg`
  - : {{domxref("DOMString")}} で、このイベントの名前を表します。
- `UIEventInit` {{optional_inline}}

  - : `UIEventInit` 辞書で、以下のフィールドを持ちます。

    - **`detail`**: 省略可能で、既定値は `0` です。
      `long` 型で、このイベントに結びつけられたイベント依存の値です。 {{domxref("UIEvent.detail")}} は、標準イベントのセマンティックを列挙します。
    - **`view`**: 省略可能で、既定値は `null` です。
      {{domxref("WindowProxy")}} 型で、イベントに関連付けられた {{domxref("Window")}} です。
    - **`sourceCapabilities`**: {{non-standard_inline}}
      {{domxref("InputDeviceCapabilities")}} インターフェイスのインスタンスで、タッチイベントを生成する原因となった物理的な危機についての情報を提供します。

    > **Note:** `UIEventInit` は {{domxref("Event.Event", "EventInit")}} 辞書のフィールドも受け入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("UIEvent")}}: 構築するオブジェクトのインターフェイス
