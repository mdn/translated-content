---
title: GlobalEventHandlers.onpointerout
slug: Web/API/Element/pointerout_event
original_slug: Web/API/GlobalEventHandlers/onpointerout
---

{{ApiRef("HTML DOM")}}

**`onpointerout`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("pointerout")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

## 構文

```
targetElement.onpointerout = outHandler;

var outHandler = targetElement.onpointerout;
```

### 値

- `outHandler`
  - : 要素 `targetElement` の `pointerout` イベントハンドラー。

## 例

この例では、`onpointerout` を使用して要素の `pointerout` イベントハンドラーを設定する 2 つの方法を示します。

```js
<html>
<script>
function outHandler(ev) {
  // pointerout イベントの処理
}
function init() {
  let el=document.getElementById('target1');
  el.onpointerout = outHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerout="outHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                               | 状態                                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerout', 'onpointerout')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerout', 'onpointerout')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointerout`](/ja/docs/Web/API/Document/pointerout_event) イベント
- [`HTMLElement: pointerout`](/ja/docs/Web/API/HTMLElement/pointerout_event) イベント
