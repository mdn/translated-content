---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
original_slug: Web/API/GlobalEventHandlers/onlostpointercapture
---

{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers")}} ミックスインの **`onlostpointercapture`** プロパティは、{{event("lostpointercapture")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

## 構文

```
target.onlostpointercapture = functionRef;
```

### 値

`functionRef` は、関数名または[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)です。 関数は {{domxref("PointerEvent")}} オブジェクトを唯一の引数として受け取ります。

## 例

```js
function overHandler(event) {
  // ターゲットイベントの lostpointercapture ハンドラを決定します
  let lostCaptureHandler = event.target.onlostpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.onlostpointercapture = overHandler;
}
```

## 仕様

| 仕様                                                                                                                     | 状態                                     | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2', '#the-lostpointercapture-event', 'onlostpointercapture')}} | {{Spec2('Pointer Events 2')}} |          |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: lostpointercapture`](/ja/docs/Web/API/Document/lostpointercapture_event) イベント
- [`HTMLElement: lostpointercapture`](/ja/docs/Web/API/HTMLElement/lostpointercapture_event) イベント
- {{domxref("Element.releasePointerCapture()")}}
