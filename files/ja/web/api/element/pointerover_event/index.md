---
title: GlobalEventHandlers.onpointerover
slug: Web/API/Element/pointerover_event
original_slug: Web/API/GlobalEventHandlers/onpointerover
---

{{ApiRef("HTML DOM")}}

**`onpointerover`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("pointerover")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

## 構文

```
targetElement.onpointerover = overHandler;

var overHandler = targetElement.onpointerover;
```

### 値

- `overHandler`
  - : `targetElement` 要素の `pointerover` イベントハンドラー。

## 例

この例では、`onpointerover` を使用して要素の `onpointerover` イベントハンドラーを設定する 2 つの方法を示します。

```js
<html>
<script>
function overHandler(ev) {
  // pointerenter イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerover = overHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerover="overHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                                   | 状態                                     | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerover', 'onpointerover')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerover', 'onpointerover')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointerover`](/ja/docs/Web/API/Document/pointerover_event) イベント
- [`HTMLElement: pointerover`](/ja/docs/Web/API/HTMLElement/pointerover_event) イベント
