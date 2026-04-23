---
title: DataTransfer：items 属性
short-title: items
slug: Web/API/DataTransfer/items
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

{{domxref("DataTransfer")}} 接口的 `items` 只读属性返回表示拖拽操作中的{{domxref("DataTransferItem","数据传输项", "", "nocode")}}的{{domxref("DataTransferItemList", "列表", "", "nocode)}}，每个被拖拽的对象对应一个列表项。当操作没有项目时列表为空。

## 取值

包含表示拖拽操作中被拖拽的项的 {{domxref("DataTransferItem")}} 对象的 {{domxref("DataTransferItemList")}} 对象，每个被拖拽的对象对应一个列表项。如果拖拽操作中没有数据，则列表为空。

## 示例

### 记录被拖拽的项目

本示例使用 `items` 来记录被拖拽项目的信息。

#### HTML

```html
<ul>
  <li id="source1" draggable="true">将项目一拖拽到可放置区域</li>
  <li id="source2" draggable="true">将项目二拖拽到可放置区域</li>
</ul>
<div id="target">可放置区域</div>

<button id="reset">重置</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#target {
  border: 1px solid black;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  console.log(`dragstart: target.id = ${ev.target.id}`);
  // 将此元素的 id 添加到拖拽负载中，以便放置处理器知道将哪个元素添加到树中
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // 获取目标的 id 并将移动的元素添加到目标的 DOM 中
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  // 打印每个项目的“kind”和“type”
  if (ev.dataTransfer.items) {
    for (const item of ev.dataTransfer.items) {
      console.log(`kind = ${item.kind}, type = ${item.type}`);
    }
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
  // 设置 dropEffect 为 move
  ev.dataTransfer.dropEffect = "move";
}

const source1 = document.querySelector("#source1");
const source2 = document.querySelector("#source2");
const target = document.querySelector("#target");

source1.addEventListener("dragstart", dragstartHandler);
source2.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 结果

{{EmbedLiveSample("记录被拖拽的项目", 0, 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
