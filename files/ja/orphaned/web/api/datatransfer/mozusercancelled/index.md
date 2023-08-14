---
title: DataTransfer.mozUserCancelled
slug: orphaned/Web/API/DataTransfer/mozUserCancelled
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}

**`DataTransfer.mozUserCancelled`** プロパティは {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーで用いられ、ユーザーがドラッグをキャンセルしたかどうかを判断するために使用されます。ユーザーがイベントをキャンセルした場合、このプロパティは `true` を返し、そうでない場合は `false` を返します。このプロパティは {{domxref("HTMLElement/dragend_event", "dragend")}} イベントに対してのみ適用されます。

> **メモ:** この特性は Firefox に固有のものです。

このプロパティは {{readonlyInline}} です。

## 値

論理値で、ユーザーがドラッグイベントをキャンセルした場合は `true` を表し、そうでない場合は `false` を返します。

## 例

この例では、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーで `mozUserCancelled` プロパティを使用する例を示しています。

```js
function dragend_handler(event)
{
  const dragData = event.dataTransfer;
  console.log("mozUserCancelled = " + dragData.mozUserCancelled);
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
