---
title: GlobalEventHandlers.onpointermove
slug: Web/API/Element/pointermove_event
original_slug: Web/API/GlobalEventHandlers/onpointermove
---

{{ApiRef("HTML DOM")}}

**`onpointermove`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("pointermove")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

## 構文

```
targetElement.onpointermove = moveHandler;

var moveHandler = targetElement.onpointermove;
```

### 値

- `moveHandler`
  - : 要素 `targetElement` の `pointermove` イベントハンドラー。

## 例

この例では、`onpointermove` を使用して要素の `pointermove` イベントハンドラを設定する 2 つの方法を示します。

```js
<html>
<script>
function moveHandler(ev) {
  // pointermove イベントの処理
}
function init() {
  let el=document.getElementById('target1');
  el.onpointermove = moveHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointermove="moveHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                                   | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointermove', 'onpointermove')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointermove', 'onpointermove')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointermove`](/ja/docs/Web/API/Document/pointermove_event) イベント
- [`HTMLElement: pointermove`](/ja/docs/Web/API/HTMLElement/pointermove_event) イベント
