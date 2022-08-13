---
title: GlobalEventHandlers.ontouchend
slug: conflicting/Web/API/Element/touchend_event
tags:
  - API
  - Experimental
  - HTML DOM
  - Reference
  - TouchEvent
translation_of: Web/API/GlobalEventHandlers/ontouchend
original_slug: Web/API/GlobalEventHandlers/ontouchend
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

**`ontouchstart`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("touchstart")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

> **Note:** **注:** このプロパティは公式には標準化されて*いません*。これは {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} 仕様書で定義されているものであり、 {{SpecName('Touch Events')}} {{Spec2('Touch Events')}} では定義されていません。このプロパティは広く実装されているわけではありません。

## 構文

    var endHandler = targetElement.ontouchend;

### 返値

- `endHandler`
  - : 要素 `targetElement` の `touchend` イベントハンドラー。

## 例

この例では、`ontouchend` を使用して要素の `touchend` イベントを処理する 2 つの方法を示します。

```js
<html>
<script>
function endTouch(ev) {
  // イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchend = endTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchend="endTouch(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                       | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Touch Events 2','#dom-globaleventhandlers-ontouchend')}} | {{Spec2('Touch Events 2')}} | 非安定版 |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.ontouchend")}}

## 関連情報

- {{ event("touchend") }}
