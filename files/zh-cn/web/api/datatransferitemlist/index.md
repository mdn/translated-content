---
title: DataTransferItemList
slug: Web/API/DataTransferItemList
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
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

### JavaScript

```js
function dragstartHandler(ev) {
  console.log("拖动开始");

  // 将此元素的 id 添加到拖拽数据中，以便放置处理器知道要将哪个元素添加到其树中。
  const dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");

  // 向拖拽数据中添加其他项
  dataList.add("<p>段落…</p>", "text/html");
  dataList.add("http://www.example.org", "text/uri-list");
}

function dropHandler(ev) {
  console.log("放置");
  ev.preventDefault();

  // 遍历已放置的项并记录它们的数据
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string" && item.type.match(/^text\/plain/)) {
      // 此项是目标节点
      item.getAsString((s) => {
        ev.target.appendChild(document.getElementById(s));
      });
    } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
      // 拖拽数据项是 HTML
      item.getAsString((s) => {
        console.log(`…放置：HTML = ${s}`);
      });
    } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
      // 拖拽数据项是 URI
      item.getAsString((s) => {
        console.log(`…放置：URI = ${s}`);
      });
    }
  }
}

function dragoverHandler(ev) {
  console.log("拖拽经过");
  ev.preventDefault();

  // 将 dropEffect 设置为 move
  ev.dataTransfer.dropEffect = "move";
}

function dragendHandler(ev) {
  console.log("拖拽结束");
  const dataList = ev.dataTransfer.items;

  // 清除所有剩余的拖拽数据
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
    选中此元素，将其拖拽到放置区域，然后释放选择以移动该元素。
  </p>
</div>
<div
  id="target"
  ondrop="dropHandler(event);"
  ondragover="dragoverHandler(event);">
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

{{EmbedLiveSample('示例', '35%', '250px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
