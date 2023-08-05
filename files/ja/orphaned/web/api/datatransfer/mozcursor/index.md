---
title: DataTransfer.mozCursor
slug: orphaned/Web/API/DataTransfer/mozCursor
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}

**`DataTransfer.mozCursor`** プロパティは、ドラッグカーソルの状態を返したり、設定したりします。これは主に、タブのドラッグ中にカーソルを制御するために使用されます。

取り得る値は以下の通りです。

- auto
  - : システムの既定の動作を使用します。
- default
  - : ドラッグ操作の間、カーソルを矢印に設定する Gecko の既定の動作を使用します。

> **メモ:** `default` 以外の値が設定されている場合は、 `auto` とみなされます。

> **メモ:** このプロパティは、現在 Windows にのみ実装されています。

> **メモ:** このプロパティは、Gecko 固有のものです。

## 値

上記の値のいずれかを表す文字列です。

## 例

この例では、`mozCursor` プロパティを使用しています。

```js
function drop_handler(event)
{
  const dragData = event.dataTransfer;
  console.log("mozCursor = " + dragData.mozCursor);
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
