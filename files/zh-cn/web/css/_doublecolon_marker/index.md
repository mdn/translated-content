---
title: ::marker
slug: Web/CSS/::marker
---

{{CSSRef}}

**`::marker`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 [`display: list-item`](/zh-CN/docs/Web/CSS/display) 的元素或伪元素上，例如 {{HTMLElement("li")}} 和 {{HTMLElement("summary")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## 允许的属性值

在将 `::marker` 作为选择器的规则中，只能使用某些 CSS 属性：

- 所有的[字体属性](/zh-CN/docs/Web/CSS/CSS_fonts)
- {{CSSxRef("white-space")}} 属性
- {{CSSxRef("color")}} 属性
- {{CSSxRef("text-combine-upright")}}、{{CSSxRef("unicode-bidi")}} 和 {{CSSxRef("direction")}} 属性
- {{CSSxRef("content")}} 属性
- 所有的 [animation](/zh-CN/docs/Web/CSS/CSS_animations#css_属性) 和 [transition](/zh-CN/docs/Web/CSS/CSS_transitions#css_属性) 属性

> [!NOTE]
> 规范指出，将来可能会支持其他 CSS 属性。

## 语法

```css
::marker {
  /* ... */
}
```

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

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 默认拥有标记框的 HTML 元素：{{HTMLElement("ol")}}、{{HTMLElement("li")}}、{{HTMLElement("summary")}}
