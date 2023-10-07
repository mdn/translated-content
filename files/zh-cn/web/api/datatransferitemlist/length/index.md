---
title: DataTransferItemList.length
slug: Web/API/DataTransferItemList/length
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransferItemList")}} 接口的只读属性**`length`** 返回当前拖动项列表中项目的数量。

## 语法

```plain
length = DataTransferItemList.length;
```

### 值

列表中拖动项的数量，如果列表为空或禁用则为 0。如果列表的{{domxref("DataTransfer")}}对象未与拖动数据存储关联，则认为拖动列表被禁用。

## 示例

这个例子演示了 `length` 属性的用法。

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
  dataList.add("http://www.example.org", "text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = ev.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (var i = 0; i < data.length; i++) {
    if (data[i].kind == "string" && data[i].type.match("^text/plain")) {
      // This item is the target node
      data[i].getAsString(function (s) {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind == "string" && data[i].type.match("^text/html")) {
      // Drag data item is HTML
      data[i].getAsString(function (s) {
        console.log("... Drop: HTML = " + s);
      });
    } else if (
      data[i].kind == "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // Drag data item is URI
      data[i].getAsString(function (s) {
        console.log("... Drop: URI = " + s);
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
  var dataList = ev.dataTransfer.items;
  // Clear any remaining drag data
  dataList.clear();
}
```

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

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
