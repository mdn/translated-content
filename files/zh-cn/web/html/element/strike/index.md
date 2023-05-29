---
title: <strike>
slug: Web/HTML/Element/strike
---

{{HTMLSidebar}}{{deprecated_header}}

[HTML](/zh-CN/docs/Web/HTML) **`<strike>`** 元素在文本上放置水平的删除线。

> **警告：** 这个元素在 HTML 4 和 XHTML 1 中废除了，并且在[现存的 HTML 标准](https://html.spec.whatwg.org/#strike)被弃用。如果语义上合适的话（也就是如果表示*删除*的内容），使用 {{HTMLElement("del")}} 来代替。在所有其他的情况中，使用 {{HTMLElement("s")}}。

  <table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

```html
&lt;strike&gt;: <strike>Today's Special: Salmon</strike> SOLD OUT<br />
&lt;s&gt;: <s>Today's Special: Salmon</s> SOLD OUT
```

代码结果为：

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("s")}} 元素。
- {{HTMLElement("del")}} 元素应该在数据已经*删除*的情况下使用。
- CSS {{CSSxRef("text-decoration")}} 属性可以用于使用删除线来装饰文本。
