---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList`** オブジェクトは {{domxref("DataTransferItem")}} オブジェクトのリストで、ドラッグされているアイテムを表します。 _ドラッグ操作_ の間、それぞれの {{domxref("DragEvent")}} は {{domxref("DragEvent.dataTransfer", "dataTransfer")}} プロパティを持ち、そのプロパティが `DataTransferItemList` となります。

それぞれのアイテムは、[配列演算子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) `[]` を使用してアクセスできます。

このインターフェイスにはコンストラクターがありません。

## インスタンスプロパティ

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : `unsigned long` で、リスト内のドラッグアイテムの数を表します。

## インスタンスメソッド

- {{domxref("DataTransferItemList.add()")}}
  - : ドラッグアイテムのリストにアイテム（{{domxref("File")}} オブジェクトまたは文字列）を追加し、新しいアイテムの {{domxref("DataTransferItem")}} オブジェクトを返します。
- {{domxref("DataTransferItemList.remove()")}}
  - : 指定された位置のリストからドラッグアイテムを削除します。
- {{domxref("DataTransferItemList.clear()")}}
  - : リストからすべてのドラッグ項目を削除します。
- **`DataTransferItemList.DataTransferItem()`**
  - : 指定された位置の {{domxref("DataTransferItem")}} を返すゲッターです。

## 例

この例は、ドラッグ & ドロップの使い方を表します。

### JavaScript

```js
function dragstartHandler(ev) {
  console.log("dragStart");

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");

  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function dropHandler(ev) {
  console.log("Drop");
  ev.preventDefault();

  // Loop through the dropped items and log their data
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragoverHandler(ev) {
  console.log("dragOver");
  ev.preventDefault();

  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;

  // Clear any remaining drag data
  dataList.clear();
}
```

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstartHandler(event);"
    ondragend="dragendHandler(event);"
    draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="dropHandler(event);"
  ondragover="dragoverHandler(event);">
  Drop Zone
</div>
```

### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}
```

### 結果

{{EmbedLiveSample('Example', '35%', '250px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
