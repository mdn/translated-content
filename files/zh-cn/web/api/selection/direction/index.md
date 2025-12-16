---
title: Selection：direction 属性
short-title: direction
slug: Web/API/Selection/direction
l10n:
  sourceCommit: 99bd3264839f6d0b2ee5331078b5e2862cd5f0c1
---

{{APIRef("DOM")}}

{{domxref("Selection")}} 接口的 **`direction`** 只读属性是一个用于表示当前选区方向的字符串。

该值由用户选择选区边界点的顺序决定。例如，用户可能通过点击起始边界点、拖动光标并在结束边界点释放来创建选区。如果结束位置在文档中位于起始位置之后，则方向为“forward”。如果结束位置在起始位置之前，则方向为“backward”。如果用户的操作未体现方向（例如双击选中字词或元素，或选区由脚本创建），则该值为“directionless”。

如果选区的范围被更改（例如使用 {{DOMxRef("Range.selectNode()")}} 等方法），方向不会发生变化。

## 值

一个字符串，用于描述当前选区的类型。可能的取值包括：

- `backward`
  - : 选区方向为反向。
- `forward`
  - : 选区方向为正向。
- `none`
  - : 尚未进行选区，或选区没有方向。

## 示例

此示例允许你通过在段落中选择文本并记录其当前方向来测试 `direction` 属性的工作方式。

### HTML

HTML 仅展示了一个包含可选择文本的段落元素。

```html
<p id="text-box">在此段落中选择文本以查看选区方向。</p>
```

请注意，这里还包含一个“隐藏的”日志框（以及相关代码），模式遵循了用于编写在线示例的指南——[显示单条日志记录](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples#显示单条日志记录)。

```css hidden
#log {
  height: 50px;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

### JavaScript

```js hidden
const logElement = document.querySelector("#log");

function log(text) {
  logElement.innerText = text;
}
```

代码会检查是否定义了 `direction` 属性；如果存在，则为 [`selectionchange` 事件](/zh-CN/docs/Web/API/Document/selectionchange_event)添加监听器，用于获取当前选区并记录其方向。如果该属性不受支持，代码会记录这一情况并隐藏可选择文本。

```js
const input = document.getElementById("text-box");

if ("direction" in Selection.prototype) {
  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    log(`选区方向：${selection.direction}`);
  });
} else {
  log("direction 属性未定义");
  input.hidden = true;
}
```

### 结果

如果属性受支持，请尝试使用双击、以及不同方向的拖拽选择来查看选区方向。

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection")}}
