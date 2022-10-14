---
title: HTMLElement.innerText
slug: Web/API/HTMLElement/innerText
---

{{APIRef("DOM")}}

**`innerText`** 属性表示一个节点及其后代的“渲染”文本内容。As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.

> **备注：** `innerText` 很容易与{{domxref("Node.textContent")}}混淆，但这两个属性间实际上有很重要的区别。大体来说，`innerText` 可操作已被渲染的内容，而 `textContent` 则不会。

## 语法

```plain
var renderedText = HTMLElement.innerText;
HTMLElement.innerText = string;
```

### 输出值

一段 {{domxref("DOMString")}} 表示一个元素中已被渲染的内容。如果元素自身没有 [被渲染](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (e.g 被从文档中删除或没有在视图中显示), 这时返回值与 {{domxref("Node.textContent")}} 属性相同。

## 示例

这个示例对比了 `innerText` 和 {{domxref("Node.textContent")}}. 这时 `innerText` 代表的含义就像 {{htmlElement("br")}} 标签，并且忽略了隐藏的元素。

### HTML

```html
<h3>Source element:</h3>
<p id="source">
  <style>#source { color: red; }</style>
Take a look at<br>how this text<br>is interpreted
       below.
  <span style="display:none">HIDDEN TEXT</span>
</p>
<h3>Result of textContent:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>...</textarea>
<h3>Result of innerText:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>...</textarea>
```

### JavaScript

```js
const source = document.getElementById('source');
const textContentOutput = document.getElementById('textContentOutput');
const innerTextOutput = document.getElementById('innerTextOutput');

textContentOutput.innerHTML = source.textContent;
innerTextOutput.innerHTML = source.innerText;
```

### 结果

{{EmbedLiveSample("示例", 700, 450)}}

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

此特性最初由 Internet Explorer 引入。被所有主要的浏览器供应商（vendor）采用后，它于 2016 年正式进入 HTML 标准。

## 参见

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
