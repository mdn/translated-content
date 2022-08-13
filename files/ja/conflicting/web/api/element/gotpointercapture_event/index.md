---
title: GlobalEventHandlers.ongotpointercapture
slug: conflicting/Web/API/Element/gotpointercapture_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - events
  - ongotpointercapture
translation_of: Web/API/GlobalEventHandlers/ongotpointercapture
original_slug: Web/API/GlobalEventHandlers/ongotpointercapture
---
{{ApiRef("HTML DOM")}}

**`ongotpointercapture`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("gotpointercapture")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

## 構文

    target.ongotpointercapture = functionRef;

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。 関数は {{domxref("PointerEvent")}} オブジェクトを唯一の引数として受け取ります。

## 例

```js
function overHandler(event) {
  // ターゲットイベントの gotpointercapture ハンドラを決定します
  let gotCaptureHandler = event.target.ongotpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.ongotpointercapture = overHandler;
}
```

## 仕様書

| 仕様書                                                                                                               | 状態                                     | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---- |
| {{SpecName('Pointer Events 2', '#the-gotpointercapture-event', 'ongotpointercapture')}} | {{Spec2('Pointer Events 2')}} |      |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ongotpointercapture")}}

## 関連情報

- [`Document: gotpointercapture`](/ja/docs/Web/API/Document/gotpointercapture_event) イベント
- [`HTMLElement: gotpointercapture`](/ja/docs/Web/API/HTMLElement/gotpointercapture_event) イベント
- {{domxref("Element.setPointerCapture()")}}
