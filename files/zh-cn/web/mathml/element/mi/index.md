---
title: <mi>
slug: Web/MathML/Element/mi
l10n:
  sourceCommit: 5486568b63db66b729a756a7a66e2fb8dfe177e1
---

{{MathMLRef}}

**`<mi>`** [MathML](/zh-CN/docs/Web/MathML) 元素指示内容应渲染为**标识符**，如函数名、变量或符号常量。

默认情况下，包含多个字符的 `<mi>` 元素将渲染为普通文本，而单个字符将渲染为斜体：与 [CSS `text-transform`](/zh-CN/docs/Web/CSS/text-transform) 属性值为 `math-auto` 相同的格式化行为。值为 `normal` 的 `mathvariant` 属性可用于将单个字符重置为普通字体。

要使用特定形式的字符，如粗体/斜体、衬线体、无衬线体、手写体/书法体、等宽体、双线体等，你应该使用适当的[数学字母数字符号](https://zh.wikipedia.org/wiki/数学字母数字符号)。

> [!NOTE]
> 在之前的规范（MathML3）中，`mathvariant` 属性用于定义可以应用于数学字母数字符号的字符格式的逻辑类。相关的值现已被弃用，并预计在未来版本中从浏览器中删除。

## 属性

- `mathvariant`

  - : 当前规范中允许的唯一值是 `normal`（不区分大小写）：

    - `normal`
      - : 使用默认/普通渲染，移除单个字符自动设置为斜体的样式。

    弃用的旧值包括：

    - `bold` {{deprecated_inline}}
      - : 尝试使用粗体字符，例如“𝐀”。
    - `italic` {{deprecated_inline}}
      - : 尝试使用斜体字符，例如“𝐴”。
    - `bold-italic` {{deprecated_inline}}
      - : 尝试使用粗斜体字符，例如“𝑨”。
    - `double-struck` {{deprecated_inline}}
      - : 尝试使用双线字符，例如“𝔸”。
    - `bold-fraktur` {{deprecated_inline}}
      - : 尝试使用粗体德文尖角体（Fraktur）字符，例如“𝕬”。
    - `script` {{deprecated_inline}}
      - : 尝试使用手写体字符，例如“𝒜”。
    - `bold-script` {{deprecated_inline}}
      - : 尝试使用粗体手写体字符，例如“𝓐”。
    - `fraktur` {{deprecated_inline}}
      - : 尝试使用德文尖角体字符，例如“𝔄”。
    - `sans-serif` {{deprecated_inline}}
      - : 尝试使用无衬线字符，例如“𝖠”。
    - `bold-sans-serif` {{deprecated_inline}}
      - : 尝试使用粗体无衬线字符，例如“𝗔”。
    - `sans-serif-italic` {{deprecated_inline}}
      - : 尝试使用无衬线斜体字符，例如“𝘈”。
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : 尝试使用粗体无衬线斜体字符，例如“𝘼”。
    - `monospace` {{deprecated_inline}}
      - : 尝试使用等宽字符，例如“𝙰”。
    - `initial` {{deprecated_inline}}
      - : 尝试使用带有花体样式的字符，例如“𞸢”。
    - `tailed` {{deprecated_inline}}
      - : 尝试使用带有尾部样式的字符，例如“𞹂”。
    - `looped` {{deprecated_inline}}
      - : 尝试使用带有循环样式的字符，例如“𞺂”。
    - `stretched` {{deprecated_inline}}
      - : 尝试使用带有伸展样式的字符，例如“𞹢”。

该元素还接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)。

## 示例

```html
<math display="block">
  <!-- 多个字符渲染为“普通”文本 -->
  <mi>sin</mi>
</math>
<hr />
<math display="block">
  <!-- 单个字符默认渲染为斜体（例如，“A”渲染为“𝐴”） -->
  <mi>A</mi>
</math>
<hr />
<math display="block">
  <!-- 使用 mathvariant="normal" 将单个字符渲染为普通文本 -->
  <mi mathvariant="normal">F</mi>
</math>
<hr />
<math display="block">
  <!-- 使用特定变体，比如德文尖角体中的“B” -->
  <mi>𝔅</mi>
</math>
```

{{ EmbedLiveSample('mi 示例', 400, 100) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
