---
title: DataTransfer.mozSourceNode
slug: orphaned/Web/API/DataTransfer/mozSourceNode
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}

**`DataTransfer.mozSourceNode`** プロパティは、ドラッグ操作が開始されたとき（例えば、 {{HTMLElement("button")}} がクリックされたとき）マウスカーソルが位置していた {{domxref("Node")}} を判別するために使用されます。外部からのドラッグの場合、または呼び出し側の関数がノードに到達できない場合は、 `null` が返されます。

> **メモ:** このプロパティは Firefox に固有のものです。

このプロパティは {{readonlyInline}} です。

## 値

ドラッグが行われた `node` を表す {{domxref("Node")}} を指定します。外部からのドラッグや、そのノードにアクセスできない場合は `null` を返します。

## 例

この例では、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーで `mozSourceNode` プロパティを使用する例を示しています。

```js
function dragend_handler(event)
{
  const dragData = event.dataTransfer;
  const node = dragData.mozSourceNode;
  if (node != null)
    console.log("mozSourceNode = " + dragData.mozSourceNode);
  else
    console.log("mozSourceNode is null");
}
```

## 仕様書

このプロパティは、ウェブ標準では定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
