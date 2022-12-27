---
title: GlobalEventHandlers.onpointerup
slug: Web/API/Element/pointerup_event
original_slug: Web/API/GlobalEventHandlers/onpointerup
---

{{ApiRef("HTML DOM")}}

**`onpointerup`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("pointerup")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。

## 構文

```
targetElement.onpointerup = upHandler;

var upHandler = targetElement.onpointerup;
```

### 値

- `upHandler`
  - : 要素 `targetElement` の `pointerup` イベントハンドラー。

## 例

この例では、`onpointerup` を使用して要素の `pointerup` イベントハンドラーを設定する 2 つの方法を示します。

```js
<html>
<script>
function upHandler(ev) {
  // pointerenter イベントの処理
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerup = upHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerup="upHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 仕様書

| 仕様書                                                                                                               | 状態                                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerup', 'onpointerup')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerup', 'onpointerup')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Document: pointerup`](/ja/docs/Web/API/Document/pointerup_event) イベント
- [`HTMLElement: pointerup`](/ja/docs/Web/API/HTMLElement/pointerup_event) イベント
