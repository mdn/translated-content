---
title: title
slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **`title`** 包含代表与它所属的元素有关的咨询信息的文本。

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

`title` 属性的主要用途是为辅助技术标注 {{HTMLElement("iframe")}} 元素。

`title` 属性也可以用来标注[数据表格](/zh-CN/docs/Web/HTML/Element/table)中的控件。

当 `title` 属性被添加到 [`<link rel="styleheet">`](/zh-CN/docs/Web/HTML/Element/link) 时，将创建一个替代的样式表。当用 `<link rel="alternate">` 定义一个备用样式表时，该属性是必需的，并且必须设置为一个非空字符串。

如果包含在 {{htmlelement('abbr')}} 起始标签上，`title` 必须是缩写或首字母的完整扩展。尽可能不要使用 `title`，而是在第一次使用时以纯文本提供缩写或缩略语的扩展，使用 `<abbr>` 来标记缩写。这使所有的用户知道这个缩写或简称是什么名字或术语，同时为用户代理提供一个提示，告诉它们如何宣告这个内容。

虽然 `title` 可以用来为 {{HTMLElement("input")}} 元素提供一个编程关联的标签，但这并不是好的做法。请使用 {{HTMLElement("label")}} 代替。

## 多行标题

`title` 属性可以包含多行。每个 `U+000A LINE FEED`（`LF`）符号代表一个换行。有一些需要注意的东西，因为这意味着下面的渲染要跨越两行：

### HTML

```html
<p>
  需要考虑 <code>title</code> 中的换行，像
  <span
    title="这是
多行标题"
    >这个示例</span
  >。
</p>
```

### 结果

{{EmbedLiveSample('多行标题')}}

## Title 属性继承

如果一个元素没有 `title` 属性，那么它就从它的父节点继承，而父节点又可以从它的父节点继承，以此类推。

如果这个属性被设置为空字符串，这意味着它的祖先的 `title` 是不相关的，不应该被用于这个元素的工具提示（tooltip）中。

### HTML

```html
<div title="CoolTip">
  <p>鼠标在这里停留会显示“CoolTip”。</p>
  <p title="">鼠标在这里停留不会显示任何东西。</p>
</div>
```

### 结果

{{EmbedLiveSample('Title 属性继承')}}

## 无障碍考虑

在以下情况下使用 `title` 属性会引发问题：

- 使用触摸屏设备的人员
- 使用键盘导航的人员
- 使用屏幕阅读器或放大镜等辅助技术导航的人员
- 出现精细运动控制障碍的人员
- 有认知问题的人员

这是由于浏览器的支持不一致，再加上对浏览器渲染的页面进行了额外的辅助技术解析。如果需要工具提示效果，最好是[使用可以用上述浏览方法访问的更方便的技术](https://inclusive-components.design/tooltips-toggletips/)。

- [3.2.5.1. title 属性 | W3C HTML 5.2: 3. HTML 文档的语义、结构和 API](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [使用 HTML title 属性——更新版 | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [title 属性的考验与磨难 - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。
- 反映这个属性的 {{domxref("HTMLElement.title")}}。
