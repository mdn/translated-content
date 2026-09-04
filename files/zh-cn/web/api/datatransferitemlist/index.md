---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransferItemList`** 对象是一个 {{domxref("DataTransferItem")}} 对象的列表，表示正在被拖拽的项。在*拖拽操作*期间，每个 {{domxref("DragEvent")}} 都有一个 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 属性，该属性是一个 `DataTransferItemList`。

可以使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法) `[]` 访问各个项。

`DataTransferItemList` 最初是为 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 设计的，并且仍然在 HTML 拖放部分中定义，但现在也被其他 API 使用，例如 {{domxref("ClipboardEvent.clipboardData")}} 和 {{domxref("InputEvent.dataTransfer")}}。`DataTransferItemList` 的文档将主要讨论其在拖放操作中的使用，而在其他场景中使用 `DataTransferItemList` 时，你应参考相应 API 的文档。

该接口没有构造函数。

## 实例属性

- {{domxref("DataTransferItemList.length")}} {{ReadOnlyInline}}
  - : `unsigned long` 类型的值，表示列表中拖拽项的数量。

## 实例方法

- {{domxref("DataTransferItemList.add()")}}
  - : 向拖拽项列表中添加一个项（可以是 {{domxref("File")}} 对象或字符串），并返回新项的 {{domxref("DataTransferItem")}} 对象。
- {{domxref("DataTransferItemList.remove()")}}
  - : 从列表中移除指定索引处的拖拽项。
- {{domxref("DataTransferItemList.clear()")}}
  - : 从列表中移除所有拖拽项。

## 示例

此示例展示了如何使用拖放。

### HTML

```html
<div>
  <p id="source" draggable="true">
    选择该元素，拖动它到可放置区域并释放选择以移动元素。
  </p>
</div>
<div id="target">可放置区域</div>
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

```javascript
const source = document.getElementById("source");
const target = document.getElementById("target");

source.addEventListener("dragstart", (ev) => {
  console.log("拖拽开始");

  // 添加元素的 ID 到拖拽负荷中，以便于放置处理器清楚要将什么元素添加到其树中
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");

  // 添加其他项目作为拖拽负荷
  dataList.add("<p>段落……</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
});

source.addEventListener("dragend", (ev) => {
  console.log("拖拽结束");
  const dataList = ev.dataTransfer.items;

  // 清除剩余的拖拽数据
  dataList.clear();
});

target.addEventListener("drop", (ev) => {
  console.log("放置");
  ev.preventDefault();

  // 遍历放下的项目并记录它们的数据
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // 该项为目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // 拖动数据项为 HTML
      item.getAsString((s) => {
        console.log(`……放置：HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
      // 拖动数据项为 URI
      item.getAsString((s) => {
        console.log(`……放置：URI = ${s}`);
      });
    }
  }
});

target.addEventListener("dragover", (ev) => {
  console.log("拖拽经过");
  ev.preventDefault();

  // 设置 dropEffect 为 move
  ev.dataTransfer.dropEffect = "move";
});
```

### 结果

{{EmbedLiveSample('示例', '35%', '250px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
