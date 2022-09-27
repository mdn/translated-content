---
title: GlobalEventHandlers.onpointercancel
slug: Web/API/Element/pointercancel_event
original_slug: Web/API/GlobalEventHandlers/onpointercancel
---

{{ApiRef("HTML DOM")}}

**`onpointercancel`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("pointercancel")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

## 構文

```
targetElement.onpointercancel = cancelHandler;

var cancelHandler = targetElement.onpointercancel;
```

### 値

- `cancelHandler`
  - : 要素 `targetElement` の `pointercancel` イベントハンドラ。

## 例

この例では、`onpointercancel` を使用して要素の `pointercancel` イベントを処理する 2 つの方法を示します。

```js
<html>
<script>
function cancelHandler(ev) {
  // pointercancel イベントの処理
}
function init() {
  var el = document.getElementById('target1');
  el.onpointercancel = cancelHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointercancel="cancelHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                                       | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointercancel', 'onpointercancel')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointercancel', 'onpointercancel')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointercancel`](/ja/docs/Web/API/Document/pointercancel_event) イベント
- [`HTMLElement: pointercancel`](/ja/docs/Web/API/HTMLElement/pointercancel_event) イベント
- {{domxref("Element.setPointerCapture()")}}
