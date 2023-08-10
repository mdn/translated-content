---
title: DataTransfer.mozGetDataAt()
slug: orphaned/Web/API/DataTransfer/mozGetDataAt
---

{{APIRef("HTML Drag and Drop API")}}

{{ Non-standard_header() }}{{deprecated_header}}

**`DataTransfer.mozGetDataAt()`** メソッドは、与えられた `format` と `index` に基づいてドラッグイベントの{{domxref("DataTransfer", "データ転送", "", 1)}}オブジェクトの項目を取得するために使用されます。このメソッドは、指定した項目が存在しない場合や、インデックスが 0 から項目の数 - 1 の値までの範囲にない場合には、 `null` を返します。

> **メモ:** この方法は、Gecko に固有のものです。

## 構文

```js
mozGetDataAt(index)
mozGetDataAt(type, index)
```

### 引数

- `type`
  - : {{domxref("DataTransfer", "ドラッグデータオブジェクト", "", 1)}}から取得するドラッグデータの種類を表す文字列です。
- `index`
  - : 取得するデータのインデックスを表す `unsigned long` です。

### 返値

- `nsIVariant`
  - : 要求されたデータ項目です。指定された項目が存在しない場合、`null` を返します。

## 例

この例では、 {{domxref("HTMLElement/drop_event", "drop")}} イベントハンドラーの中で `mozGetDataAt()` メソッドを使用しています。

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
