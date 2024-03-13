---
title: display
slug: Web/SVG/Attribute/display
---

{{SVGRef}}

**`display`** 属性让你可以控制图形元素或容器元素的渲染。

`display="none"` 表示该元素和它的子元素不会被渲染。而非 `none` 或 `inherit` 的值表示元素会被浏览器渲染。

当应用到容器元素时，将 `display` 设为 `none` 会导致容器与它所有的子元素不可见，如此看来，它在一组元素中表现地像一个元素组。这表示具有 `display="none"` 属性元素的所有子元素都不会被渲染，即使子元素的 `display` 并不是 `none`。

`display` 属性被设为 `none` 的元素不会成为渲染树的一部分。它涉及到 {{SVGElement("tspan")}} 和 {{SVGElement("tref")}} 元素，用于盒边界与路径剪裁计算的事件处理。

- 如果在 {{SVGElement("tspan")}} 或 {{SVGElement("tref")}} 元素中 `display` 的属性值被设为 `none`，则为了文字布局，文字字符串会被忽视掉。
- 至于事件，如果 `display` 被设为 `none` 则该元素不接受任何事件。
- [图形元素](/zh-CN/docs/Web/SVG/Element#图形元素)的 `display` 属性被设为 `none` 则不会被盒边界和路径剪裁计算中包含进去。

`display`属性只影响能被直接渲染的元素，尽管它不能防止该元素被其他元素参考。例如：将 {{SVGElement("path")}} 元素设为 `none`，会使得该元素不会被直接渲染到 canvas 上，但是 {{SVGElement("textPath")}} 元素依旧会参考 {{SVGElement("path")}}。此外，即便 {{SVGElement("path")}} 的 `display` 为 `none`，它的形状在处理路径上的文本时仍然会被用到。

这个属性也能影响直接渲染到屏幕外的画布，比如遮罩或路径剪裁。因此，把 {{SVGElement("mask")}} 元素的一个子元素设为 `display="none"` 将会阻止 {{SVGElement("clipPath")}} 的子元素参与到路径剪裁中。

> **备注：** As a presentation attribute, `display` can be used as a CSS property. See {{cssxref("display", "CSS display")}} for further information.

As a presentation attribute, it can be applied to any element.

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Here the yellow rectangle is displayed -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- Here the yellow rectangle is not displayed -->
  <rect x="120" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect
    x="140"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    display="none"></rect>
</svg>
```

{{EmbedLiveSample("示例", "240", "120")}}

## 使用说明

| Default value | `inline`                 |
| ------------- | ------------------------ |
| Value         | {{csssyntax("display")}} |
| Animatable    | Yes                      |

For a description of the values, please refer to the {{cssxref("display", "CSS display")}} property.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGAttr("visibility")}} attribute
- {{cssxref("display", "CSS display")}}
