---
title: DataTransfer：setData() 方法
short-title: setData()
slug: Web/API/DataTransfer/setData
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.setData()`** 方法用来设置拖动操作的[拖动数据](/zh-CN/docs/Web/API/DataTransfer)为指定的数据和类型。如果给定类型的数据不存在，则将其添加到拖动数据存储的末尾，使得 {{domxref("DataTransfer.types","types")}} 列表中的最后一个项目将是新类型。如果给定类型的数据已经存在，则现有数据将在相同的位置被替换。即当替换相同类型的数据时，{{domxref("DataTransfer.types","types")}} 列表的顺序不会更改。

示例数据类型包括 `text/plain` 和 `text/uri-list`。

## 语法

```js-nolint
setData(format, data)
```

### 参数

- `format`
  - : 表示要添加到 {{domxref("DataTransfer"}} 的拖动数据的类型。
- `data`
  - : 表示要添加到 {{domxref("DataTransfer")}} 的数据。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在本示例中，我们可以将一个 {{HTMLElement("p")}} 元素拖动到目标 {{HTMLElement("div")}} 元素中。

- 在 `dragstart` 处理器中，我们使用 `setData()` 将 `<p>` 元素的 `id` 添加到 {{domxref("DataTransfer")}} 对象中。

- 在 `drop` 处理器中，我们检索 `id` 并使用它将相应的 `<p>` 元素移动到目标中。

#### HTML

```html
<div>
  <p id="source" draggable="true">
    选中该元素并将其拖动到可放置区域，然后释放选择以移动该元素。
  </p>
</div>
<div id="target">可放置区域</div>

<button id="reset">重置示例</button>
```

#### CSS

```css
div {
  margin: 0.5em 0;
  padding: 2em;
}

#target,
#source {
  border: 1px solid black;
  padding: 0.5rem;
}

.dragging {
  background-color: pink;
}
```

#### JavaScript

```js
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // 更改源元素的背景颜色来表示已开始拖动
  ev.currentTarget.classList.add("dragging");
  // 清除拖动数据缓存（对于所有格式/类型）
  ev.dataTransfer.clearData();
  // 设置拖动的数据格式和数据
  // 使用事件目标的 id 作为数据
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
source.addEventListener("dragend", (ev) =>
  ev.target.classList.remove("dragging"),
);

const target = document.querySelector("#target");
target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // 获取数据，即源元素的 id
  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### 结果

{{EmbedLiveSample("拖动一个元素", "", 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖动操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖动数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
