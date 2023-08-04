---
title: text-orientation
slug: Web/CSS/text-orientation
---

{{CSSRef}}

**`text-orientation`** [CSS](/zh-CN/docs/Web/CSS) 属性设定行中字符的方向。但它仅影响纵向模式（当 {{cssxref("writing-mode")}} 的值不是`horizontal-tb`）下的文本。此属性在控制使用竖排文字的语言的显示上很有作用，也可以用来构建垂直的表格头。

{{EmbedInteractiveExample("pages/css/text-orientation.html")}}

## 语法

```css
/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Global values */
text-orientation: inherit;
text-orientation: initial;
text-orientation: unset;
```

`text-orientation` 应当被设置为上述关键字之一。

### 值

- `mixed`
  - : 默认值。顺时针旋转水平书写的字符 90°，将垂直书写的文字自然布局。
- `upright`
  - : 将水平书写的字符自然布局（直排），包括垂直书写的文字（as well as the glyphs for vertical scripts）。注意这个关键字会导致所有字符被视为从左到右，也就是 {{cssxref("direction")}} 被强制设为 `ltr`。
- `sideways`
  - : 所有字符被布局为与水平方式一样，但是整行文本被顺时针旋转 90°。
- `sideways-right`
  - : 处于兼容目的，`sideways` 的别名。
- `use-glyph-orientation`
  - : 对于 SVG 元素，这个关键字导致使用已弃用的 SVG 属性。 `glyph-orientation-vertical` 和 `glyph-orientation-horizontal`。

## 形式化定义

{{CSSInfo}}

## 形式化语法

{{csssyntax}}

## 例子

### HTML

```html
<p>Lorem ipsum dolet semper quisquam.</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### 结果

{{EmbedLiveSample('例子')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The other vertical-script related CSS properties: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, and {{cssxref("unicode-bidi")}}.
- [CSS Logical properties](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/)
- Extensive browsers support test results: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
