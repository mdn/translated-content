---
title: DataTransferItemList.length
slug: Web/API/DataTransferItemList/length
---

{{domxref("DataTransferItemList")}} インターフェイスの **`length`** プロパティは読み取り専用で、ドラッグアイテムリストの中に現在入っているアイテムの数を返します。

## 構文

```
length = DataTransferItemList.length;
```

### 返値

リスト中のドラッグデータアイテムの数で、もしリストが空か無効であれば 0 です。アイテムリストの {{domxref("DataTransfer")}} オブジェクトがドラッグデータストアに関連付けられていない場合は、ドラッグアイテムリストは無効とみなされます。

## 例

この例は `length` プロパティの使い方を示しています。

### JavaScript

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  var dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("<p>... paragraph ...</p>", "text/html");
  dataList.add("http://www.example.org","text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = ev.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (var i = 0; i < data.length; i++) {
    if ((data[i].kind == 'string') && (data[i].type.match('^text/plain'))) {
      // This item is the target node
      data[i].getAsString(function (s){
        ev.target.appendChild(document.getElementById(s));
      });
    } else if ((data[i].kind == 'string') && (data[i].type.match('^text/html'))) {
      // Drag data item is HTML
      data[i].getAsString(function (s){
        console.log("... Drop: HTML = " + s);
      });
    } else if ((data[i].kind == 'string') && (data[i].type.match('^text/uri-list'))) {
      // Drag data item is URI
      data[i].getAsString(function (s){
        console.log("... Drop: URI = " + s);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

function dragend_handler(ev) {
  console.log("dragEnd");
  var dataList = ev.dataTransfer.items;
  // Clear any remaining drag data
  dataList.clear();
}
```

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
</div>
<div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
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

{{EmbedLiveSample('Example_Drag_and_Drop')}}

{{LiveSampleLink('Example_Drag_and_Drop', 'Drag and Drop demo link')}}

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考                                                      |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'interaction.html#dom-datatransferitemlist-length','length')}} | {{Spec2('HTML WHATWG')}} |                                                           |
| {{SpecName('HTML5.1', 'editing.html#dom-datatransferitemlist-length','length')}}         | {{Spec2('HTML5.1')}}     | W3C HTML5 {{Spec2('HTML5 W3C')}} には含まれていない |
|                                                                                                                      |                                  |                                                           |

## ブラウザーの対応

{{Compat("api.DataTransferItemList.length")}}

{{APIRef("HTML Drag and Drop API")}}
