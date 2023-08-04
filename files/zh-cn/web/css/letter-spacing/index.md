---
title: letter-spacing
slug: Web/CSS/letter-spacing
---

{{CSSRef}}

`CSS` 的 `letter-spacing` 属性用于设置文本字符的间距表现。在渲染文本时添加到字符之间的自然间距中。`letter-spacing` 的正值会导致字符分布得更远，而 `letter-spacing` 的负值会使字符更接近。

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## 语法

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### 值

- `normal`
  - : 此间距是按照当前字体的正常间距确定的。和 `0` 不同的是，`normal` 会让{{glossary("user agent", "用户代理")}}调整文字之间空间来对齐文字。
- {{cssxref("&lt;length&gt;")}}
  - : 指定文字间的间距以替代默认间距。可以是负值，但有可能会出现 implementation 限制。用户代理不会在此基础上进一步增加或缩减间距来对齐文字。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

### CSS

```css
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

### 结果

{{ EmbedLiveSample('示例', 440, 185) }}

## 可解决的问题

一个很大的正或负的 `letter-spacing`值会将应用这个样式的单词变为不可读的。给文本 `letter-spacing` 属性应用了一个很大的正值，字母之间的距离会很远，以至于文本中的单词将显示为一系列单独的，无有任何关联的字母。给文本 `letter-spacing` 属性应用了一个很大的负值，字母将会互相重叠到一个点，在这个点上单词可能无法识别了。

最佳的易辨认的字母间距（letter-spacing）必须根据具体情况来确定，因为不同的字体系列具有不同的字符宽度。没有任何一个值可以确保所有字体系列自动保持它们的可读性。

## 无障碍考量

A large positive or negative `letter-spacing` value will make the word(s) the styling is applied to unreadable. For text styled with a very large positive value, the letters will be so far apart that the word(s) will appear like a series of individual, unconnected letters. For text styled with a very large negative value, the letters will overlap each other to the point where the word(s) may be unrecognizable.

Legible letter-spacing must be determined on a case-by-case basis, as different font families have different character widths. There is no one value that can ensure all font families automatically maintain their legibility.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-kerning")}}
