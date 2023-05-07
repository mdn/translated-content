---
title: Document：caretPositionFromPoint() 方法
slug: Web/API/Document/caretPositionFromPoint
---

{{APIRef("CSSOM View")}}

{{domxref("Document")}} 接口的 **`caretPositionFromPoint()`** 属性返回一个 {{domxref('CaretPosition')}} 对象，其中包含 DOM 节点以及该节点内光标和光标的字符偏移量。

## 语法

```js-nolint
caretPositionFromPoint(x, y)
```

### 参数

- `x`
  - : 一个点的水平坐标。
- `y`
  - : 一个点的垂直坐标。

### 返回值

一个 {{domxref('CaretPosition')}} 对象。

## 示例

在下面的**演示**段落中单击任意位置即可在单击点处插入换行符。其代码位于演示下方。

### 演示

{{EmbedLiveSample('示例')}}

以下代码首先检查 `document.caretPositionFromPoint` 支持情况，但如果浏览器不支持，则代码会检查 {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} 并使用它。

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // 使用 WebKit 专有回退方法
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // 两个方法都不支持，什么都不做
    return;
  }
  // 只分割 TEXT_NODE
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

### HTML

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
  document.caretPositionFromPoint
</div>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('CaretPosition')}}
