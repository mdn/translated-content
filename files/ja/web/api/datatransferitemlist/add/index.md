---
title: DataTransferItemList.add()
slug: Web/API/DataTransferItemList/add
l10n:
  sourceCommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList.add()`** メソッドは、指定されたデータを使用して新しい {{domxref("DataTransferItem")}} を作成し、ドラッグデータリストに追加します。アイテムは {{domxref("File")}} または指定された種類の文字列です。リストへの追加が成功すると、新しく作成された {{domxref("DataTransferItem")}} オブジェクトが返されます。

## 構文

```js-nolint
add(data, type)
add(file)
```

### 引数

- `data`
  - : 文字列で、ドラッグアイテムのデータを表します。
- `type`
  - : ドラッグアイテムの種類を表す文字列。例えば、`text/html` や `text/plain` といった種類があります。
- `file`
  - : {{domxref("File")}} オブジェクト。この場合、種類を指定する必要はありません。

### 返値

指定したデータを格納した {{domxref("DataTransferItem")}} を返します。ドラッグアイテムを作成できなかった場合（例えば、関連する {{domxref("DataTransfer")}} オブジェクトがデータストアを持たない場合）、`null` が返されます。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 文字列で `data` 引数が提供され、 {{domxref("DataTransferItem.kind", "kind")}} が `"Plain Unicode string"` で、指定された `type` 引数と等しい型の項目がリストに既に格納されている場合に発生します。

## 例

この例では、 `add()` メソッドを使用しています。

### HTML

```html
<div>
  <p
    id="source"
    ondragstart="dragstart_handler(event);"
    ondragend="dragend_handler(event);"
    draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
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

### JavaScript

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
  for (let i = 0; i < data.length; i++) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      data[i].getAsString((s) => {
        console.log(`… Drop: HTML = ${s}`);
      });
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      data[i].getAsString((s) => {
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
  for (let i = 0; i < dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
}
```

### 結果

{{EmbedLiveSample('Examples', 400, 300)}}

{{LiveSampleLink('Examples', 'Result link')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
