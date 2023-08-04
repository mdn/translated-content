---
title: DataTransfer.mozTypesAt()
slug: orphaned/Web/API/DataTransfer/mozTypesAt
---

{{APIRef("HTML Drag and Drop API")}}

{{deprecated_header}}{{Non-standard_header()}}

**`DataTransfer.mozTypesAt()`** メソッドは、指定された位置の項目に格納されている形式のリストを返します。位置が 0 から項目の数 - 1 を引いた範囲にない場合、空の文字列リストが返されます。

> **メモ:** このメソッドは Firefox 固有のものです。

## 構文

```js
mozTypesAt(index)
```

### 引数

- `index`
  - : `unsigned long` で、受け取った型のデータの位置です。

### 返値

データ形式（文字列）のリスト。位置が 0 から個数マイナス 1 までの範囲にない場合、空の文字列リストが返される。

## 例

この例では、{{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラーの中で `mozTypesAt()` メソッドを使用しているところを示しています。

```js
function drop_handler(event)
{
  const dt = event.dataTransfer;
  const count = dt.mozItemCount;
  output("Items: " + count + "\n");

  for (let i = 0; i < count; i++) {
    output(" Item " + i + ":\n");
    const types = dt.mozTypesAt(i);
    for (let t = 0; t < types.length; t++) {
      output("  " + types[t] + ": ");
      try {
        const data = dt.mozGetDataAt(types[t], i);
        output("(" + (typeof data) + ") : <" + data + " >\n");
      } catch (ex) {
        output("<>\n");
        dump(ex);
      }
    }
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
