---
title: GlobalEventHandlers.onpointerenter
slug: Web/API/Element/pointerenter_event
original_slug: Web/API/GlobalEventHandlers/onpointerenter
---

{{ApiRef("HTML DOM")}}

**`onpointerenter`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

## 構文

```
targetElement.onpointerenter = enterHandler;

var enterHandler = targetElement.onpointerenter;
```

### 値

- `enterHandler`
  - : 要素 `targetElement` の `pointerenter` イベントハンドラー。

## 例

この例では、`onpointerenter` を使用して要素の `pointerenter` イベントハンドラーを設定する 2 つの方法を示します。

```html
<html>
<script>
function enterHandler(ev) {
  // pointerenter イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerenter = enterHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerenter="enterHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                                       | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerenter', 'onpointerenter')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerenter', 'onpointerenter')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointerenter`](/ja/docs/Web/API/Document/pointerenter_event) イベント
- [`HTMLElement: pointerenter`](/ja/docs/Web/API/HTMLElement/pointerenter_event) イベント
