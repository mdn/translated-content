---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

`height` CSS 属性指定了一个元素的高度。默认情况下，这个属性决定的是内容区（ [content area](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content-area)）的高度，但是，如果将 {{cssxref("box-sizing")}} 设置为 `border-box` , 这个属性决定的将是边框区域（[border area](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border-area)）的高度。{{EmbedInteractiveExample("pages/css/height.html")}}{{cssxref("min-height")}} 和 {{cssxref("max-height")}} 属性会覆盖 {{Cssxref("height")}}。

## 语法

```css
/* Keyword value */
height: auto;

/* <length> values */
height: 120px;
height: 10em;

/* <percentage> value */
height: 75%;

/* Global values */
height: inherit;
height: initial;
height: unset;
```

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 将高度定义为一个绝对值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 将高度定义为相对包含块高度的百分比。
- `border-box` {{experimental_inline}}
  - : 如果设置该值，则 {{cssxref("&lt;length&gt;")}} 或者 {{cssxref("&lt;percentage&gt;")}} 会设置为该元素的 border box。
- `content-box` {{experimental_inline}}
  - : 如果设置该值，则 {{cssxref("&lt;length&gt;")}} 或者 {{cssxref("&lt;percentage&gt;")}} 会设置为该元素的 content box。
- `auto`
  - : 由浏览器为元素计算并选择一个高度。
- `fill` {{experimental_inline}}
  - : 根据文字方向，使用 `fill-available` 作为行大小或者块大小。
- `max-content` {{experimental_inline}}
  - : 设置为允许的最大高度。
- `min-content` {{experimental_inline}}
  - : 设置为允许的最小高度。
- `available` {{experimental_inline}}
  - : 包含块高度减去当前元素的边距，边框和填充。
- `fit-content` {{experimental_inline}}
  - : 将 fill-content 公式中的可用位置替换为特定的参数以进行使用，如：min(max-content, max(min-content, ))

### Formal syntax

{{csssyntax}}

## 示例

### HTML

```html
<div id="taller">I'm 50 pixels tall.</div>
<div id="shorter">I'm 25 pixels tall.</div>
<div id="parent">
  <div id="child">I'm half the height of my parent.</div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

### 结果

{{EmbedLiveSample('示例', 'auto', 240)}}

## 无障碍问题

确保设定了 `height` 的元素在显示上不会被截断，或者当页面放大时增大的字体大小不会遮挡其他内容。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [box model](/zh-CN/docs/CSS/box_model), {{cssxref("width")}}, {{cssxref("box-sizing")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}
