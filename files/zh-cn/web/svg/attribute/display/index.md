---
title: display
slug: Web/SVG/Attribute/display
---

{{SVGRef}}

The **`display`** attribute lets you control the rendering of graphical or container elements.

**`display`** 属性让你可以控制图形元素或容器元素的渲染。

A value of `display="none"` indicates that the given element and its children will not be rendered. Any value other than `none` or `inherit` indicates that the given element will be rendered by the browser.

`display="none"`表示该元素和它的子元素不会被渲染。而非`none`或`inherit`的值表示元素会被浏览器渲染。

When applied to a container element, setting `display` to `none` causes the container and all of its children to be invisible; thus, it acts on groups of elements as a group. This means that any child of an element with `display="none"` will never be rendered even if the child has a value for `display` other than `none`.

当应用到容器元素时，将`display`设为`none`会导致容器与它所有的子元素不可见，如此看来，它在一组元素中表现地像一个元素组。这表示具有`display="none"`属性元素的所有子元素都不会被渲染，即使子元素的`display`并不是`none`。

When the `display` attribute is set to `none`, then the given element does not become part of the rendering tree. It has implications for the {{SVGElement("tspan")}}, {{SVGElement("tref")}}, and {{SVGElement("altGlyph")}} elements, event processing, for bounding box calculations and for calculation of clipping paths:

`display`属性被设为`none`的元素不会成为渲染树的一部分。它涉及到{{SVGElement("tspan")}}, {{SVGElement("tref")}}, 和 {{SVGElement("altGlyph")}}元素、用于盒边界与路径剪裁计算的事件处理。

- If `display` is set to `none` on a {{SVGElement("tspan")}}, {{SVGElement("tref")}}, or {{SVGElement("altGlyph")}} element, then the text string is ignored for the purposes of text layout.

如果在{{SVGElement("tspan")}}, {{SVGElement("tref")}}, 或{{SVGElement("altGlyph")}}元素中`display`的属性值被设为`none`,则为了文字布局，文字字符串会被忽视掉。

- Regarding events, if `display` is set to `none`, the element receives no events.

至于事件，如果`display`被设为`none`则该元素不接受任何事件。

- The geometry of a [graphics element](/zh-CN/docs/Web/SVG/Element#Graphics_elements) with `display` set to `none` is not included in bounding box and clipping paths calculations.

图形元素的`display`属性被设为`none`则不会被盒边界和路径剪裁计算中包含进去。

The `display` attribute only affects the direct rendering of a given element, whereas it does not prevent elements from being referenced by other elements. For example, setting it to `none` on a {{SVGElement("path")}} element will prevent that element from getting rendered directly onto the canvas, but the {{SVGElement("path")}} element can still be referenced by a {{SVGElement("textPath")}} element; furthermore, its geometry will be used in text-on-a-path processing even if the {{SVGElement("path")}} has a `display` value of `none`.

`display`属性只影响能被直接渲染的元素，尽管它不能防止该元素被其他元素参考。例如：将{SVGElement("path")}}元素设为 none，会使得该元素不会被直接渲染到 canvas 上，但是{{SVGElement("textPath")}}元素依旧会参考{{SVGElement("path")}}。此外，即便{SVGElement("path")}}的`display`为`none`，它的形状在处理路径上的文本时仍然会被用到。

This attribute also affects direct rendering into offscreen canvases, such as occurs with masks or clip paths. Thus, setting `display="none"` on a child of a {{SVGElement("mask")}} will prevent the given child element from being rendered as part of the mask. Similarly, setting `display="none"` on a child of a {{SVGElement("clipPath")}} element will prevent the given child element from contributing to the clipping path.

这个属性也能影响直接渲染到屏幕外的画布，比如遮罩或路径剪裁。因此，把{{SVGElement("mask")}}元素的一个子元素设为`display="none"`将会阻止子元素参与到路径剪裁中。

**Note:** As a presentation attribute, `display` can be used as a CSS property. See {{cssxref("display", "CSS display")}} for further information.

As a presentation attribute, it can be applied to any element.

## 示例

```css hidden
html, body, svg {
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
  <rect x="140" y="20" width="60" height="60" fill="yellow" display="none"></rect>
</svg>
```

{{EmbedLiveSample("示例", "240", "120")}}

## Usage notes

| Default value | `inline`                         |
| ------------- | -------------------------------- |
| Value         | {{csssyntax("display")}} |
| Animatable    | Yes                              |

For a description of the values, please refer to the {{cssxref("display", "CSS display")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("visibility")}} attribute
- {{cssxref("display", "CSS display")}}
