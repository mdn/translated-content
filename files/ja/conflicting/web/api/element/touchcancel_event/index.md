---
title: GlobalEventHandlers.ontouchcancel
slug: conflicting/Web/API/Element/touchcancel_event
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/ontouchcancel
original_slug: Web/API/GlobalEventHandlers/ontouchcancel
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

**`ontouchcancel`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("touchcancel")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

> **Note:** **注:** このプロパティは公式には標準化されて*いません*。これは {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} 仕様書で定義されているものであり、 {{SpecName('Touch Events')}} {{Spec2('Touch Events')}} では定義されていません。このプロパティは広く実装されているわけではありません。

## 構文

    var cancelHandler = someElement.ontouchcancel;

### 返値

- `cancelHandler`
  - : 要素 `someElement` の `touchcancel` イベントハンドラー。

## 例

この例では、`touchcancel` を使用して要素の `touchcancel` イベントを処理する 2 つの方法を示します。

```js
<html>
<script>
function cancelTouch(ev) {
  // イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchcancel = cancelTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchcancel="cancelTouch(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Touch Events 2','#dom-globaleventhandlers-ontouchcancel')}} | {{Spec2('Touch Events 2')}} | 非安定版 |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ontouchcancel")}}

## 関連情報

- {{ event("touchcancel") }}
