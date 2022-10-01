---
title: '::marker'
slug: Web/CSS/::marker
---

{{CSSRef}}

**`::marker`** [CSS](/zh-CN/docs/Web/CSS) [pseudo-element](/zh-CN/CSS/Pseudo-elements)（CSS 伪元素）选中一个 list item 的 marker box，后者通常含有一个项目符号或者数字。它作用在任何设置了[`display: list-item`](/zh-CN/docs/Web/CSS/display)的元素或伪元素上，例如{{HTMLElement("li")}}和{{HTMLElement("summary")}}。

```css
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## 允许的属性值

在将`::marker`作为选择器的规则中，只能使用某些 CSS 属性：

- All [font properties](/zh-CN/docs/Web/CSS/CSS_Fonts)（字体属性）
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} and {{CSSxRef("direction")}} properties
- The {{CSSxRef("content")}} property

> **备注：** 规范指出，将来可能会支持其他 CSS 属性。

## 语法

{{CSSSyntax}}

## 示例

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Result

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 默认拥有 marker boxes 的 HTML 元素：{{HTMLElement("ol")}}，{{HTMLElement("li")}}，{{HTMLElement("summary")}}
