---
title: DataTransfer：types 属性
short-title: types
slug: Web/API/DataTransfer/types
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.types`** 只读属性返回在 {{domxref("DataTransfer.items","items")}} 中存在的可用类型。

## 值

数据格式的数组。每种格式都是通常为 MIME 类型的字符串，如 `text/plain` 或 `text/html`。如果拖拽操作不包含数据，则此列表将为空。如果拖拽操作中包含任何文件，则其中一个类型将是 `Files`。

## 示例

下述示例展示了 `types` 和 {{domxref("DataTransfer.items","items")}} 属性的具体使用方式：

```html
<ul>
  <li id="i1" draggable="true">将项目一拖拽到可放置区域</li>
  <li id="i2" draggable="true">将项目二拖拽到可放置区域</li>
</ul>
<div id="target">可放置区域</div>
<pre id="output"></pre>
```

```css
div {
  margin: 0em;
  padding: 2em;
}
#target {
  border: 1px solid black;
}
```

```js
const output = document.getElementById("output");
function log(msg) {
  output.textContent += `${msg}\n`;
}

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("dragstart", dragstart_handler);
});

function dragstart_handler(ev) {
  log(`拖拽开始：target.id = ${ev.target.id}`);

  // 将该元素的 id 添加到拖拽负载中，以便放置事件的处理器能分清要将哪个元素添加到树中
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

const target = document.getElementById("target");

target.addEventListener("drop", (ev) => {
  log(`drop：target.id = ${ev.target.id}`);
  ev.preventDefault();

  // 获取目标的 id 并将移动的元素添加到目标的 DOM 中
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  // 打印各格式类型
  for (let i = 0; i < ev.dataTransfer.types.length; i++) {
    log(`… types[${i}] = ${ev.dataTransfer.types[i]}`);
  }

  // 打印各项的“kind”和“type”
  for (let i = 0; i < ev.dataTransfer.items.length; i++) {
    log(
      `… items[${i}].kind = ${ev.dataTransfer.items[i].kind}；type = ${ev.dataTransfer.items[i].type}`,
    );
  }
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
});
```

{{EmbedLiveSample("示例", "", 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
