---
title: DataTransfer.mozSetDataAt()
slug: orphaned/Web/API/DataTransfer/mozSetDataAt
---

{{APIRef("HTML Drag and Drop API")}}

{{deprecated_header}}{{Non-standard_header()}}

**`DataTransfer.mozSetDataAt()`** メソッドは、ドラッグイベントの {{domxref("DataTransfer", "data transfer")}} オブジェクトの特定の位置にデータを追加するために使用します。

データ転送オブジェクトには複数の項目を格納することができ、それぞれは与えられたゼロ基点の位置で表されます。
既存のアイテムが変更された場合、 `mozSetDataAt()` は {{domxref("DataTransfer.mozItemCount", "mozItemCount")}} より小さい位置で呼び出すことができ、新しい項目が追加された場合は、 {{domxref("DataTransfer.mozItemCount", "mozItemCount")}} と等しい位置で呼び出すことができ、 {{domxref("DataTransfer.mozItemCount", "mozItemCount")}} が 1 つ増えます。

データは優先順位の高い順に追加され、最も特殊な形式を最初に追加し、最も特殊でない形式を最後に追加する必要があります。指定された形式のデータがすでに存在する場合は、古いデータと同じ位置に置き換えられます。

データは文字列、論理値、数値型（文字列に変換される）、または `nsISupports` のいずれかでなければなりません。

> **メモ:** このメソッドは Firefox 固有のものです。

## 構文

```js
mozSetDataAt(data, index)
mozSetDataAt(type, data, index)
```

### 引数

- `type`
  - : 文字列で、{{domxref("DataTransfer","ドラッグデータオブジェクト", "", 1)}}に追加するドラッグデータの型を表します。
- `data`
  - : `nsIVariant` で、{{domxref("DataTransfer","ドラッグデータオブジェクト", "", 1)}}に追加するデータを表します。
- `index`
  - : `unsigned long` で、データを追加する位置を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では {{domxref("HTMLElement/dragstart_event", "dragstart")}} ハンドラーで `mozSetDataAt()` メソッドを使用する方法を示しています。

```js
function dragstart_handler(event)
{
  const dt = event.dataTransfer;
  const idx = dt.mozItemCount;
  // Add two new items to the drag transfer
  if (idx >= 0) {
    dt.mozSetDataAt("text/uri-list","http://www.example.com/", idx);
    dt.mozSetDataAt("text/html", "Hello World", idx+1);
  }
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
