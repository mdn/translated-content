---
title: HTMLElement：innerText 属性
slug: Web/API/HTMLElement/innerText
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 接口的 **`innerText`** 属性表示一个节点及其后代所渲染文本的内容。

作为一个 getter，它近似于用户用光标突出该元素的内容，然后将其复制到剪贴板上所得到的文本。作为一个 setter，这将用给定的值替换该元素的子元素，并将任何换行符转换为 {{HTMLElement("br")}} 元素。

> **备注：** `innerText` 很容易与 {{domxref("Node.textContent")}} 混淆，但这两个属性间实际上有很重要的区别。大体来说，`innerText` 知道文本的渲染外观，而 `textContent` 不知道。

### 输出

一个字符串，代表元素的渲染文本内容。

如果元素本身没有[被渲染](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)（例如，从文档中分离出来或从视图中隐藏起来），返回值与 {{domxref("Node.textContent")}} 属性相同。

> [!WARNING]
> 在一个节点上设置 `innerText` 会移除该节点的*所有*子节点，并用给定的字符串值的单一文本节点代替它们。

## 示例

这个示例对比了 `innerText` 和 {{domxref("Node.textContent")}}。请注意 `innerText` 是如何意识到像 {{htmlElement("br")}} 这样的元素，并忽略了隐藏的元素的。

### HTML

```html
<h3>源元素：</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
    #text {
      text-transform: uppercase;
    }
  </style>
  <span id="text">
    来看看<br />
    这段文字<br />
    在下方怎么表示。
  </span>
  <span style="display:none">隐藏文字</span>
</p>
<h3>textContent 结果：</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>…</textarea>
<h3>innerText 结果：</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>…</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### 结果

{{EmbedLiveSample("示例", 700, 450)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
