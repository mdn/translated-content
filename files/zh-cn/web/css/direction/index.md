---
title: direction
slug: Web/CSS/direction
---

{{CSSRef}}

**`direction`** CSS 属性用于设置文本、表格列和水平溢出的方向。对于从右到左书写的语言（如希伯来语或阿拉伯语），应将该属性设置为 `rtl`；对于从左到右书写的语言（如英语和大多数其他语言），则应将该属性设置为 `ltr`。

{{EmbedInteractiveExample("pages/css/direction.html")}}

请注意，文本方向通常在文档中定义（例如，使用 [HTML 的 `dir` 属性](/zh-CN/docs/Web/HTML/Global_attributes/dir) 属性），而不是通过直接使用 `direction` 属性来定义。

该属性设置可以设置块级元素文本的基本方向，也可以设置由通过 {{Cssxref("unicode-bidi")}} 属性创建的嵌入元素的方向。与此同时，它还可以设置文本、块级元素的默认对齐方式，以及表行中的单元格的流动方向。

与 HTML 中的 `dir` 属性不同，`direction` 属性不会从表列继承到表单元格，因为 CSS 继承遵从文档流，而表单元格位于行内部，但不在列内部。

`direction` 和 {{cssxref("unicode-bidi")}} 属性是唯二不受 {{cssxref("all")}} 简写属性影响的属性。

## 语法

```css
/* 关键字值 */
direction: ltr;
direction: rtl;

/* 全局值 */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
```

### 取值

- `ltr`
  - : 默认属性。可设置文本和其他元素的默认方向是从左到右。
- `rtl`
  - : 可设置文本和其他元素的默认方向是从右到左。

要使 `direction` 属性在行级元素上生效，{{Cssxref("unicode-bidi")}} 属性的值必须是 `embed` 或 `override`。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 设置从右往左的方向

在下面的例子中有两个文本字符串，都使用 `direction: rtl` 来显示。尽管这种设置可以正确显示阿拉伯文本，但中文内容却有一个标点符号在一个不寻常的位置。

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>这个段落用中文书写的，但是方向是从右到左，是错误的。</p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
</blockquote>
```

{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
- HTML 的 [`dir`](/zh-CN/docs/Web/HTML/Global_attributes#dir) 全局属性
