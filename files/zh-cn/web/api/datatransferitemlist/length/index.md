---
title: DataTransferItemList：length 属性
slug: Web/API/DataTransferItemList/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransferItemList")}} 接口的只读属性 **`length`** 返回当前拖动项列表中项目的数量。

## 值

列表中拖动项的数量，如果列表为空或禁用则为 0。如果列表的 {{domxref("DataTransfer")}} 对象未与拖动数据存储关联，则认为拖动项列表被禁用。

## 示例

这个示例演示了 `length` 属性的用法。

### JavaScript

```js
function dragstart_handler(ev) {
  console.log("拖动开始");
  // 将此元素的 id 添加到拖动负载中，以便拖动处理器知道要将哪个元素添加到其树中
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // 将其他的一些元素添加到拖动负载中
  dataList.add("<p>段落……</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function drop_handler(ev) {
  console.log("放置");
  ev.preventDefault();
  const data = ev.dataTransfer.items;
  // 循环遍历放置的元素，并记录它们的数据
  for (let i = 0; i < data.length; i++) {
    if (data[i].kind === "string" && data[i].type.match("^text/plain")) {
      // 该项目为目标节点
      data[i].getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (data[i].kind === "string" && data[i].type.match("^text/html")) {
      // 放置的数据项为 HTML
      data[i].getAsString((s) => {
        console.log(`……放置：HTML = ${s}`);
      });
    } else if (
      data[i].kind === "string" &&
      data[i].type.match("^text/uri-list")
    ) {
      // 放置的数据项为 URI
      data[i].getAsString((s) => {
        console.log(`……放置：URI = ${s}`);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("拖至上方");
  ev.preventDefault();
  // 将放置效果（dropEffect）设置为移动（move）
  ev.dataTransfer.dropEffect = "move";
}

function dragend_handler(ev) {
  console.log("拖动结束");
  const dataList = ev.dataTransfer.items;
  // 清除剩余的拖动数据
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
    选中此元素，拖动它到放置区域，然后取消选中以移动元素。
  </p>
</div>
<div
  id="target"
  ondrop="drop_handler(event);"
  ondragover="dragover_handler(event);">
  放置区域
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

{{EmbedLiveSample('示例', 100, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
