---
title: GlobalEventHandlers.ontouchstart
slug: conflicting/Web/API/Element/touchstart_event
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/ontouchstart
original_slug: Web/API/GlobalEventHandlers/ontouchstart
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

**`ontouchstart`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("touchstart")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。

> **Note:** **注:** このプロパティは公式には標準化されて*いません*。これは {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} 仕様書で定義されているものであり、 {{SpecName('Touch Events')}} {{Spec2('Touch Events')}} では定義されていません。このプロパティは広く実装されているわけではありません。

## 構文

    var startHandler = someElement.ontouchstart;

### 返値

- `startHandler`
  - : 要素 `someElement` の `touchstart` イベントハンドラー。

## 例

この例では、`ontouchstart` を使用して要素の `touchstart` イベントを処理する 2 つの方法を示します。

```js
<html>
<script>
function startTouch(ev) {
  // イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchstart = startTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchstart="startTouch(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                       | 状態                                 | 備考     |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Touch Events 2','#dom-globaleventhandlers-ontouchstart')}} | {{Spec2('Touch Events 2')}} | 非安定版 |

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onpointercancel")}}

## 関連情報

- {{ event("touchstart") }}
