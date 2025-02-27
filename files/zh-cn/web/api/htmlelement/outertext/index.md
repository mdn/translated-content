---
title: HTMLElement.outerText
slug: Web/API/HTMLElement/outerText
---

{{APIRef("DOM")}}

{{domxref("HTMLElement")}} 接口的 **`outerText`** 属性返回与 {{domxref("HTMLElement.innerText")}} 相同的值。当用作 setter 时，它会用给定的文本替换整个当前节点（这与 `innerText` 不同，后者替换当前节点的*内部*内容）。

请参阅 {{domxref("HTMLElement.innerText")}} 以了解更多信息和有关两个属性用作 getter 的示例。

## 值

一个表示元素及其后代元素的渲染的文本内容的字符串。

如果这个元素本身没有[被渲染](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)（例如，从文档中分离或是从视图中隐藏），返回值与 {{domxref("Node.textContent")}} 属性的返回值相同。

当用作 setter 时，它会用给定的文本替换当前节点，并将任何换行符转换为 {{HTMLElement("br")}} 元素。

## 示例

这个例子突出了 `outerText` 和 `innerText` 在用作 setter 时的根本区别（它们用做 getter 时行为完全一致）。

> [!NOTE]
> 这个示例是 [innerText 和 outerText 有什么区别？](https://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435)（Stack overflow）的修订后的版本，由 [codingintrigue](https://stackoverflow.com/users/571194/codingintrigue) 发起，基于 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 许可证发布。

考虑包含如下 HTML 代码的页面：

```html
<div>
  <p>原始内容</p>
</div>
```

`outerText` 替换了整个选中的元素，因此 JavaScript 语句 `p.outerText = "整个元素已替换"` 替换了整个选中的 `p` 元素：

```html
<div>整个元素已替换</div>
```

相比之下，`p.innerText = "元素内容已替换"` 替换了所选中的 `p` 元素的内部内容：

```html
<div>
  <p>元素内容已替换</p>
</div>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.outerHTML")}}
