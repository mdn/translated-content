---
title: Event()
slug: Web/API/Event/Event
page-type: web-api-constructor
tags:
  - コンストラクター
  - リファレンス
browser-compat: api.Event.Event
translation_of: Web/API/Event/Event
---
{{APIRef("DOM")}}

**`Event()`** コンストラクターは、新しい {{domxref("Event")}} を生成します。この方法で作成されたイベントは*合成イベント*と呼ばれ、ブラウザーによって発行されたイベントとは対照的となっており、スクリプトから[配信](/ja/docs/Web/Events/Creating_and_triggering_events)することができます。

## 構文

```js
new Event(type)
new Event(type, options)
```

### 値

- `type`
  - : 文字列で、イベントの名前を表します。
- `options` {{optional_inline}}
  - : 以下のプロパティを持ったオブジェクトです。
    - `bubbles`
      - : 論理値で、イベントがバブリングするかどうかを示します。既定値は `false` です。
    - `cancelable`
      - : 論理値で、イベントがキャンセル可能かどうかを示します。既定値は `false` です。
    - `composed`
      - : 論理値で、イベントがシャドウルートの外のリスナーに伝わるかどうかを示します（詳しくは {{domxref("Event.composed")}} を参照してください）。既定値は `false` です。

### 返値

新しい {{domxref("Event")}} オブジェクトです。

## 例

```js
// create a look event that bubbles up and cannot be canceled

const evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [イベントの作成とトリガー](/ja/docs/Web/Events/Creating_and_triggering_events)
