---
title: <strike>
slug: Web/HTML/Element/strike
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{HTMLSidebar}}{{deprecated_header}}

**`<strike>`** [HTML](/zh-CN/docs/Web/HTML) 元素在文本上添加删除线（水平线）。

> **警告：** 该元素在 HTML 4 和 XHTML 1 中已被弃用，并且在[现存的 HTML 标准](https://html.spec.whatwg.org/multipage/obsolete.html#strike)被弃用。如果语义合适，即表示已*删除*的内容，请使用 {{HTMLElement("del")}} 来代替。在所有其他情况下，请使用 {{HTMLElement("s")}}。

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

## 示例

```html
&lt;strike&gt;: <strike>今日特供：鲑鱼</strike> 已售罄<br />
&lt;s&gt;: <s>今日特供：鲑鱼</s> 已售罄
```

### 结果

{{EmbedLiveSample("示例")}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("s")}} 元素。
- {{HTMLElement("del")}} 元素应该在数据已经*删除*的情况下使用。
- CSS {{CSSxRef("text-decoration")}} 属性可以用于使用删除线来装饰文本。
