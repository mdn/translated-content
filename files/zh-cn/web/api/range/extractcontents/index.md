---
title: Range：extractContents() 方法
slug: Web/API/Range/extractContents
l10n:
  sourceCommit: 987c56d6f54bba1bf0430abf06b9a5573c8c289a
---

{{ApiRef("DOM")}}

**`Range.extractContents()`** 方法将 {{ domxref("Range") }} 的内容从文档树中移到 {{ domxref("DocumentFragment") }} 中。

通过 DOM 事件添加的事件监听器在提取过程中不会被保留。HTML 属性事件会像 {{domxref("Node.cloneNode()")}} 方法一样被保留或复制。HTML `id` 属性也会被克隆，因此如果提取部分选择的节点并将其附加到文档中，可能会导致文档无效。

部分选中的节点会被克隆，以包含使文档片段有效所需的父标签。

## 语法

```js-nolint
extractContents()
```

### 参数

无。

### 返回值

{{ domxref("DocumentFragment") }} 对象。

## 示例

### 基本示例

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

### 在容器之间移动项目

此示例可让你在两个容器之间移动项目。选择一个或多个项目，然后点击“交换”将它们移到对面的容器中。

#### HTML

```html
<p id="list1">123456</p>
<button id="swap">交换所选项目</button>
<p id="list2">abcdef</p>
```

#### CSS

```css
body {
  pointer-events: none;
}

p {
  border: 1px solid;
  font-size: 2em;
  padding: 0.3em;
}

button {
  font-size: 1.2em;
  padding: 0.5em;
  pointer-events: auto;
}
```

#### JavaScript

```js
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const button = document.getElementById("swap");

button.addEventListener("click", (e) => {
  const selection = window.getSelection();

  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (
      range.commonAncestorContainer === list1 ||
      range.commonAncestorContainer.parentNode === list1
    ) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (
      range.commonAncestorContainer === list2 ||
      range.commonAncestorContainer.parentNode === list2
    ) {
      const documentFragment = range.extractContents();
      list1.appendChild(documentFragment);
    }
  }
});
```

#### 结果

{{EmbedLiveSample("在容器之间移动项目", 700, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
