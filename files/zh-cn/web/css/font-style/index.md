---
title: font-style
slug: Web/CSS/font-style
---

{{CSSRef}}

**`font-style`** CSS 属性允许你选择 {{cssxref("font-family")}} 字体下的 `italic` 或 `oblique` 样式。

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Italic** 字体一般是现实生活中的草书，相比无样式的字体，通常会占用较少的水平空间，而 **oblique** 字体一般只是常规字形的倾斜版本。如果当前字体没有对应的斜体，那么斜体（italic）和倾斜体（oblique）都会通过人工倾斜常规字体的字形来模拟（使用 {{cssxref("font-synthesis")}} 对此进行控制）。

## 语法

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: unset;
```

`font-style` 属性被指定为从下面的取值列表中的单独一个关键字，如果关键字是 `oblique`，则可附加一个可选的角度。

### 值

- `normal`
  - : 选择 {{Cssxref("font-family")}} 的常规字体。
- `italic`
  - : 选择斜体，如果当前字体没有可用的斜体版本，会选用倾斜体（`oblique` ）替代。
- `oblique`

  - : 选择倾斜体，如果当前字体没有可用的倾斜体版本，会选用斜体（`italic` ）替代。If one or more oblique faces are available in the chosen font family, the one that most closely matches the specified angle is chosen. If no oblique faces are available, the browser will synthesize an oblique version of the font by slanting a normal face by the specified amount. Valid values are degree values of `-90deg` to `90deg` inclusive. If an angle is not specified, an angle of 14 degrees is used. Positive values are slanted to the end of the line, while negative values are slanted towards the beginning.

    In general, for a requested angle of 14 degrees or greater, larger angles are prefered; otherwise, smaller angles are preferred (see the spec's [font matching section](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) for the precise algorithm).

### 可变字体

可变字体（Variable font）可以精确控制 oblique 字体的倾斜程度。You can select this using the `<angle>` modifier for the `oblique` keyword.

For TrueType or OpenType variable fonts, the `"slnt"` variation is used to implement varying slant angles for oblique, and the `"ital"` variation with a value of 1 is used to implement italic values. See {{cssxref("font-variation-settings")}}.

For the example below to work, you'll need a browser that supports the CSS Fonts Level 4 syntax in which `font-style: oblique` can accept an `<angle>`.

{{EmbedGHLiveSample("css-examples/variable-fonts/oblique.html", '100%', 860)}}

## 无障碍问题

Large sections of text set with a `font-style` value of `italic` may be difficult for people with cognitive concerns such as Dyslexia to read.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 字体样式

示例展示了不同的 `font-style` 值。CSS 看起来像这样：

```html hidden
<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('字体样式') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-family")}}
- {{cssxref("font-weight")}}
- [基本文本和字体样式](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
