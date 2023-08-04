---
title: DataTransfer.mozClearDataAt()
slug: orphaned/Web/API/DataTransfer/mozClearDataAt
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}{{deprecated_header}}

DataTransfer.mozClearDataAt()`** メソッドは、指定された位置にある項目の、指定された形式に関連するデータを削除します。位置は 0 から項目の数 - 1 の範囲でなければなりません。

引数 `format` を省略した場合は、すべての形式に関連づけられたデータが削除されます。その形式が見つからなかった場合、このメソッドは何もしません。項目の最後の形式が削除されると、項目全体が削除されて {{domxref("DataTransfer.mozItemCount", "mozItemCount")}} が 1 つ減ります。

特定の位置に対する最後の形式を削除すると、その項目が完全に削除され、残りの項目が下に移動し、位置が変更されます。

> **メモ:** このメソッドは Gecko 固有です。

## 構文

```js
mozClearDataAt(index)
mozClearDataAt(type, index)
```

### 引数

- `type`
  - : {{domxref("DataTransfer", "ドラッグデータオブジェクト", "", 1)}}から削除するドラッグデータの種類を表す文字列です。
- `index`
  - : 削除するデータのインデックスを `unsigned long` で指定します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーの中で `mozClearDataAt()` メソッドを使用しています。

```js
function dragend_handler(event)
{
  const dt = event.dataTransfer;
  //text/html の項目を削除
  dt.mozClearDataAt("text/html", 1);
}
```

## 仕様書

このメソッドはウェブ標準では定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
