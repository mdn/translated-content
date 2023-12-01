---
title: DataTransfer.mozItemCount
slug: orphaned/Web/API/DataTransfer/mozItemCount
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}{{deprecated_header}}

**`DataTransfer.mozItemCount`** プロパティは、ドラッグされている項目の数を返します。これは、例えば、ドラッグされているファイルの数を取得するために使用することができます。

> **メモ:** このプロパティは、Gecko 固有のものです。

このプロパティは {{readonlyInline}} です。

## 値

ドラッグされている項目の数を表す `number` です。

## 例

この例では、`mozItemCount` プロパティを使用しています。

```js
function drop_handler(event)
{
  const files = [];
  const dt = event.dataTransfer;
  for (let i = 0; i < dt.mozItemCount; i++)
    files.push(dt.mozGetDataAt("application/x-moz-file", i));
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
