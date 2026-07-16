---
title: "DataTransfer: addElement() メソッド"
short-title: addElement()
slug: Web/API/DataTransfer/addElement
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML Drag and Drop API")}}{{SeeCompatTable}}{{Non-standard_header}}

**`DataTransfer.addElement()`** メソッドは、与えられた要素にドラッグソースを設定します。この要素は {{domxref("HTMLElement/drag_event", "drag")}} と {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが発生する要素となり、既定のターゲット（ドラッグされたノード）とはなりません。

> [!NOTE]
> このメソッドは Firefox 固有です。

## 構文

```js-nolint
addElement(element)
```

### 引数

- `element`
  - : ドラッグソースとして設定する {{domxref("Element")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、`addElement()` メソッドの使用例を示します。

```js
function changeDragNode(event, node) {
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
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
