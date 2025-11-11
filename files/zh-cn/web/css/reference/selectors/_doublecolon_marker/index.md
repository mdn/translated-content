---
title: ::marker
slug: Web/CSS/Reference/Selectors/::marker
---

**`::marker`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)匹配列表的标记框（通常为一个符号或数字）。它作用在任何设置了 [`display: list-item`](/zh-CN/docs/Web/CSS/Reference/Properties/display) 的元素或伪元素上，例如 {{HTMLElement("li")}} 和 {{HTMLElement("summary")}} 元素。

{{InteractiveExample("CSS Demo: ::marker", "tabbed-shorter")}}

```css interactive-example
li::marker {
  content: "✝ ";
  font-size: 1.2em;
}
```

```html interactive-example
<p>Group known as Mercury Seven:</p>
<ul>
  <li>Malcolm Scott Carpenter</li>
  <li>Leroy Gordon (Gordo) Cooper Jr.</li>
  <li>John Herschel Glenn Jr.</li>
  <li>Virgil Ivan (Gus) Grissom</li>
  <li>Walter Marty (Wally) Schirra Jr.</li>
  <li>Alan Bartlett Shepard Jr.</li>
  <li>Donald Kent (Deke) Slayton</li>
</ul>
```

## 允许的属性值

在将 `::marker` 作为选择器的规则中，只能使用某些 CSS 属性：

- 所有的[字体属性](/zh-CN/docs/Web/CSS/Guides/Fonts)
- {{CSSxRef("white-space")}} 属性
- {{CSSxRef("color")}} 属性
- {{CSSxRef("text-combine-upright")}}、{{CSSxRef("unicode-bidi")}} 和 {{CSSxRef("direction")}} 属性
- {{CSSxRef("content")}} 属性
- 所有的 [animation](/zh-CN/docs/Web/CSS/Guides/Animations#css_属性) 和 [transition](/zh-CN/docs/Web/CSS/Guides/Transitions#css_属性) 属性

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
