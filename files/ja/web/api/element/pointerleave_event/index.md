---
title: GlobalEventHandlers.onpointerleave
slug: Web/API/Element/pointerleave_event
original_slug: Web/API/GlobalEventHandlers/onpointerleave
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement/pointerleave_event", "pointerleave")}} イベントの{{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}で、ポインター (マウスカーソル、指先など) がヒットテスト領域を出ると (例えば、カーソルが {{domxref("Element")}} や {{domxref("Window")}} のコンテンツ領域を出ると)、{{domxref("Node")}} に配信されます。このイベントは [Pointer Events API](/ja/docs/Web/API/Pointer_events) の一部です。

## 構文

```
EventTarget.onpointerleave = leaveHandler;

var leaveHandler = EventTarget.onpointerleave;
```

### 値

- `leaveHandler`
  - : {{domxref("EventListener")}} で、ターゲットに送信された {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} イベントを処理するために呼び出されます。

## 例

この例では、`onpointerleave` を使用して要素の `pointerleave` イベントハンドラーを設定する 2 つの方法を示します。

```js
<html>
<script>
function leaveHandler(ev) {
 // pointerleave イベントの処理
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerleave = leaveHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerleave="leaveHandler(event)"> Touch me ... </div>
</body>
</html>
```

詳細については、[Pointer Events の使用](/ja/docs/Web/API/Pointer_events/Using_Pointer_Events)を参照してください。

## 仕様書

| 仕様書                                                                                                                       | 状態                                     | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-globaleventhandlers-onpointerleave', 'onpointerleave')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-GlobalEventHandlers-onpointerleave', 'onpointerleave')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポインターイベント](/ja/docs/Web/API/Pointer_events)
- [ポインターイベントの使用](/ja/docs/Web/API/Pointer_events/Using_Pointer_Events)
- [`Document: pointerleave`](/ja/docs/Web/API/Document/pointerleave_event) イベント
- [`HTMLElement: pointerleave`](/ja/docs/Web/API/HTMLElement/pointerleave_event) イベント
