---
title: ::placeholder
slug: Web/CSS/::placeholder
l10n:
  sourceCommit: 59ef5b046557b45a515b654458667e6da6d0f4aa
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) **`::placeholder`** 表示 {{HTMLElement("input")}} 或 {{HTMLElement("textarea")}} 元素中的[占位文本](/zh-CN/docs/Web/HTML/Element/input#placeholder)。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-placeholder.html", "tabbed-shorter")}}

只有可以应用于 {{cssxref("::first-line")}} 伪元素的 CSS 属性子集可以在使用了 `::placeholder` 选择器的规则中使用。

> [!NOTE]
> 对于大多数浏览器，占位文本的外观默认为半透明或浅灰色。

## 语法

```css
::placeholder {
  /* ... */
}
```

## 无障碍考虑

### 色彩对比

#### 对比度

占位文本通常采用较浅的颜色处理，以表明它是对输入的建议，而不是任何实际的输入。

重要的是要确保占位文本的颜色与输入的背景之间的对比度足够高，以便视力较差的人能够阅读它，同时还要确保占位文本与输入文本的颜色有足够的差异，以免用户将占位符误认为是输入的数据。

色彩对比度是通过比较占位文本和输入背景的颜色的亮度来确定的。为了满足当前的 [Web 内容无障碍指南（WCAG）](https://www.w3.org/WAI/standards-guidelines/wcag/)，文本内容需要达到 4.5:1 的对比度，而较大的文本（如标题）需要达到 3:1 的对比度。大文本定义为 18.66px 及以上的粗体文本，或 24px 及以上的文本。

- [WebAIM：色彩对比度检查器](https://webaim.org/resources/contrastchecker/)
- [MDN：了解 WCAG，指南 1.4 的解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#指南_1.4：使用户更容易看到和听到内容，包括将前景与背景区分开)
- [了解成功标准 1.4.3 | W3C：了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### 可用性

具有足够色彩对比度的占位文本可能会被理解为输入的内容。占位文本在用户向 {{htmlelement("input")}} 元素输入内容后也会消失。这两种情况都可能影响表单的成功填写，尤其是对于存在认知障碍的人。

另一种方法是在输入框外部的视觉接近位置包含占位信息，然后使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 以编程的方式将 {{HTMLElement("input")}} 与其提示关联起来。

通过这种方式，即使在输入框中输入了信息，提示内容也是可用的，而且在加载页面时，输入框看起来是没有预先存在的输入内容的。大多数屏幕阅读技术会在输入的标签文本被宣告后使用 `aria-describedby` 读取提示内容，并且使用屏幕阅读器的人可以在确定额外信息并不必要时将其静音。

```html
<label for="user-email">你的电子邮件地址</label>
<span id="user-email-hint" class="input-hint">示例：jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [表单字段中的占位符是有害的——尼尔森诺曼集团](https://www.nngroup.com/articles/form-design-placeholders/)

### Windows 高对比度模式

在 [Windows 的高对比度模式](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)下渲染时，占位文本将以与用户输入的文本内容相同的样式显示。这将使一些人难以确定哪些内容是输入的，哪些内容是占位文本。

### 标签

占位符不能替代 {{htmlelement("label")}} 元素。如果没有使用 [`for`](/zh-CN/docs/Web/HTML/Element/label#for) 和 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 属性的组合将输入与标签以编程的方式进行关联，辅助技术（如屏幕阅读器）将无法解析 {{htmlelement("input")}} 元素。

- [表单字段中的占位符是有害的——尼尔森诺曼集团](https://www.nngroup.com/articles/form-design-placeholders/)

## 示例

### 改变占位符的外观

该示例展示了可以对占位文本的样式进行的一些调整。

#### HTML

```html
<input placeholder="在此输入" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### 结果

{{EmbedLiveSample("改变占位符的外观", 200, 60)}}

### 不透明文本

一些浏览器（例如 Firefox）将占位文本的 {{cssxref("opacity")}} 默认设置为小于 100%。如果你想要完全不透明的占位文本，可以将 `opacity` 设置为 `1`。

#### HTML

```html
<input placeholder="默认不透明度" />
<input placeholder="完全不透明" class="force-opaque" />
```

#### CSS

```css
::placeholder {
  color: green;
}

.force-opaque::placeholder {
  opacity: 1;
}
```

#### 结果

{{EmbedLiveSample("不透明文本", 200, 60)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":placeholder-shown")}} 伪类用于设置*具有*激活的占位符的元素的样式。
- 相关的 HTML 元素：{{HTMLElement("input")}}、{{HTMLElement("textarea")}}
- [HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms)
