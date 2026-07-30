---
title: "`dir` HTML 全局属性"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

**`dir`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，用于指示元素文本的方向性。

{{InteractiveExample("HTML 演示：dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">这段文字错误地从右到左排列。</p>
<p dir="ltr">这段文字正确地从左到右排列。</p>

<hr />

<p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

它可以取以下值：

- `ltr`，表示*从左到右*，用于从左向右书写的语言（如英语）；
- `rtl`，表示*从右到左*，用于从右向左书写的语言（如阿拉伯语）；
- `auto`，由用户代理决定。它在解析元素内的字符时使用基本算法，直到找到具有强方向性的字符，然后将该方向性应用于整个元素。

> [!NOTE]
> `auto` 值应用于方向性未知的数据，例如来自用户输入或外部的数据。

若未指定，则该值从父元素[继承](#继承)。

若 CSS 页面处于活动状态且元素支持相关属性，则此属性可被 CSS 属性 {{cssxref("direction")}} 和 {{cssxref("unicode-bidi")}} 覆盖。

由于文本的方向性在语义上与其内容相关，而非与其表现相关，建议网页开发者尽可能使用此属性，而不是相关的 CSS 属性。这样，即使在不支持 CSS 或已禁用 CSS 的浏览器中，文本也能正确显示。

## 继承

若元素没有 `dir` 属性，它将继承其[父节点](/zh-CN/docs/Glossary/Node/DOM)上设置的 `dir` 值，而父节点又可能从其父级继承，依此类推。

## 用法说明

图像可以将其 `dir` 属性设为 `"rtl"`，此时 HTML 属性 `title` 和 `alt` 将按 `"rtl"` 进行格式化与定义。

当表格的 `dir` 设为 `"rtl"` 时，列顺序从右到左排列。

此属性对 {{HTMLElement("bdo")}} 元素是强制的，且在该元素上具有不同的语义含义。

此属性*不会*被 {{HTMLElement("bdi")}} 元素继承。若未设置，其值为 `auto`。

浏览器可能允许用户更改 {{HTMLElement("input")}} 和 {{HTMLElement("textarea")}} 元素的方向性，以协助编写内容。
Chrome 和 Safari 在输入字段的上下文菜单中提供方向性选项。
Firefox 在 `<textarea>` 内使用 <kbd>Ctrl</kbd>（Windows）/<kbd>Cmd</kbd>（macOS）+ <kbd>Shift</kbd> + <kbd>X</kbd> 切换文本方向。
这些功能会在 `ltr` 与 `rtl` 之间切换 `dir` 属性的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 全部[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。
- 反映此属性的 {{domxref("HTMLElement.dir")}}。
- [处理不同方向的文本](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
