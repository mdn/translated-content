---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
page-type: css-property
browser-compat: css.properties.text-emphasis-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-style`** 设置强调标记的样式。这个值也可以使用[简写属性](/zh-cn/web/css/shorthand_properties) {{cssxref("text-emphasis")}} 来设置。

{{EmbedInteractiveExample("pages/css/text-emphasis-style.html")}}

## 语法

```css
/* 初始值 */
text-emphasis-style: none; /* 无强调标记 */

/* <string> 值 */
text-emphasis-style: "x";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* 关键字值 */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* 全局值 */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Values

- `none`
  - : No emphasis marks.
- `filled`
  - : The shape is filled with solid color. If neither `filled` nor `open` is present, this is the default.
- `open`
  - : The shape is hollow.
- `dot`
  - : Display small circles as marks. The filled dot is `'•'` (`U+2022`), and the open dot is `'◦'` (`U+25E6`).
- `circle`
  - : Display large circles as marks. The filled circle is `'●'` (`U+25CF`), and the open circle is `'○'` (`U+25CB`).
- `double-circle`
  - : Display double circles as marks. The filled double-circle is `'◉'` (`U+25C9`), and the open double-circle is `'◎'` (`U+25CE`).
- `triangle`
  - : Display triangles as marks. The filled triangle is `'▲'` (`U+25B2`), and the open triangle is `'△'` (`U+25B3`).
- `sesame`
  - : Display sesames as marks. The filled sesame is `'﹅'` (`U+FE45`), and the open sesame is `'﹆'` (`U+FE46`).
- `<string>`
  - : Display the given string as marks. Authors should not specify more than one _character_ in `<string>`. The UA may truncate or ignore strings consisting of more than one grapheme cluster.

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

### HTML

```html
<h2>这是一个二级标题</h2>

<h3>这是一个三级标题</h3>
```

#### 结果

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('text-emphasis-color')}}，{{cssxref('text-emphasis')}} 和 {{cssxref('text-emphasis-position')}}——其他强调标记相关属性
