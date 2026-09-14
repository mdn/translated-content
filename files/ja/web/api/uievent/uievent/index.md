---
title: "UIEvent: UIEvent() コンストラクター"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

**`UIEvent()`** コンストラクターは新しい {{domxref("UIEvent")}} を生成します。

> [!NOTE]
> このコンストラクターを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーで生成された `UIEvent`` オブジェクトのみが信頼され、信頼されたイベントのみが既定のアクションを発生させます。

## 構文

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### 値

- `type`
  - : 文字列で、このイベントの名前を表します。
    大文字小文字の区別があり、ブラウザーは `load`, `unload`, `abort`, `error`, `select` の何れかに設定します。
- `options` {{optional_inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つすることができるオブジェクトです。
    - `detail` {{optional_inline}}
      - : 数値で、このイベントに関連付けられたイベント依存の値です。
        既定値は `0` であり {{domxref("UIEvent.detail")}} は、標準イベントのセマンティックを列挙します。
    - `view` {{optional_inline}}
      - : イベントに関連付けられた {{domxref("Window")}} です。既定値は `null` です。
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : {{domxref("InputDeviceCapabilities")}} オブジェクトで、タッチイベントを生成する原因となった物理的な機器についての情報を提供します。

### 返値

新しい {{domxref("UIEvent")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("UIEvent")}}: 構築するオブジェクトのインターフェイス
