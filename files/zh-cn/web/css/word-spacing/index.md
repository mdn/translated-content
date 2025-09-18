---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`word-spacing`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置单词之间以及标签之间的空格长度。

{{InteractiveExample("CSS 演示：word-spacing")}}

```css interactive-example-choice
word-spacing: normal;
```

```css interactive-example-choice
word-spacing: 1rem;
```

```css interactive-example-choice
word-spacing: 4px;
```

```css interactive-example-choice
word-spacing: -0.4ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    街道上的泥泞仿佛刚刚从大地上退去的洪水所留下的一般，如果在霍尔本山坡上遇见一只大约四十英尺长的巨蜥，像一只巨大的蜥蜴般摇摇摆摆地走着，那也不足为奇。
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar, serif;
}
```

## 语法

```css
/* 关键字值 */
word-spacing: normal;

/* <length> 值 */
word-spacing: 3px;
word-spacing: 0.3em;

/* 全局值 */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### 值

- `normal`
  - : 由当前字体或浏览器定义的正常单词间距。
- {{cssxref("length")}}
  - : 指定在字体所定义的固有单词间距之外，额外增加的间距。

## 无障碍

较大的正值或负值的 `word-spacing` 会使应用该样式的句子变得不可读。如果文本使用了非常大的正值，单词之间的间距会被拉得过远，以至于不再看起来像是一句话。如果文本使用了很大的负值，单词之间会相互重叠，以至于每个单词的开头和结尾都无法辨认。

易读的 `word-spacing` 必须根据具体情况逐一确定，因为不同的字体族具有不同的字符宽度。没有一个通用的数值能够保证所有字体族都能自动保持良好的可读性。

- [MDN 了解 WCAG，第 1.4 条指南解读](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#指南_1.4_让用户更容易看见和听到内容_包括将前景与背景分离)
- [理解成功准则 1.4.8 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 示例

### HTML

```html
<div id="mozdiv1">这是第一段句子。</div>
<div id="mozdiv2">这是第二段句子。</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('示例') }}

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("letter-spacing")}}
- SVG {{SVGAttr("word-spacing")}} 属性
