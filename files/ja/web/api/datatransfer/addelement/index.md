---
title: DataTransfer.addElement()
slug: Web/API/DataTransfer/addElement
---

{{APIRef("HTML Drag and Drop API")}}

{{Non-standard_header()}}

**`DataTransfer.addElement()`** メソッドは、与えられた要素にドラッグソースを設定します。この要素は {{domxref("HTMLElement/drag_event", "drag")}} と {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが発生する要素となり、既定のターゲット（ドラッグされたノード）とはなりません。

> **メモ:** このメソッドは Firefox 固有です。

## 構文

```js
addElement(element);
```

### 引数

- `element`
  - : ドラッグソースとして設定する {{domxref("Element")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、`addElement()` メソッドの使用例を示します。

```js
function change_drag_node(event, node) {
  const dt = event.dataTransfer;
  dt.addElement(node);
}
```

## 仕様書

このメソッドは、ウェブ標準では定義されていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
