---
title: DataTransferItemList.remove()
slug: Web/API/DataTransferItemList/remove
l10n:
  sourceCommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList.remove()`** メソッドは指定された位置の {{domxref("DataTransferItem")}} をリストから削除します。位置が 0 より小さいか、リストの長さより 1 だけ小さい値より大きい場合、リストは変更されません。

## 構文

```js-nolint
remove(index)
```

### 引数

- `index`
  - : 削除するドラッグデータリストの項目の、0 から始まる位置です。 `index` がリスト内の既存の項目と一致しない場合は、リストが変更されずに残ります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : ドラッグデータストアが読み取り/書き込みモードでないため、アイテムを削除できない場合に発生します。

## 例

### 要素のドラッグ & ドロップ

この例では、`remove()` メソッドを使用しています。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
```

#### CSS

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

#### JavaScript

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>Paragraph…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  const data = event.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (const item of data) {
    if (item.kind === "string" && item.type.match("^text/plain")) {
      // This item is the target node
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match("^text/html")) {
      // Drag data item is HTML
      item.getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match("^text/uri-list")) {
      // Drag data item is URI
      item.getAsString((s) => {
        console.log(`… Drop: URI = ${s}`);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}

function dragend_handler(ev) {
  console.log("dragEnd");
  const dataList = ev.dataTransfer.items;
  // Clear all the files. Iterate in reverse order to safely remove.
  for (let i = dataList.length - 1; i >= 0; i--) {
    if (dataList[i].kind === "file") {
      dataList.remove(i);
    }
  }
  // Clear any remaining drag data
  dataList.clear();
}

const source = document.querySelector("#source");
source.addEventListener("dragstart", dragstart_handler);
source.addEventListener("dragend", dragend_handler);

const target = document.querySelector("#target");
target.addEventListener("drop", drop_handler);
target.addEventListener("dragover", dragover_handler);
```

#### 結果

{{ EmbedLiveSample('Dragging and dropping an element', 100, '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
