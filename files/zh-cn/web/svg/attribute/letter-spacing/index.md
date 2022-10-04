---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
---

{{SVGRef}}

The **`letter-spacing`** attribute controls spacing between text characters, in addition to any spacing from the {{SVGAttr("kerning")}} attribute.

If the attribute value is a unitless number (like `128`), the browser processes it as a {{cssxref("length")}} in the current user coordinate system.

If the attribute value has a unit identifier, such as `.25em` or `1%`, then the browser converts the \<length> into its corresponding value in the current user coordinate system.

**Note:** As a presentation attribute, `letter-spacing` can be used as a CSS property. See the {{cssxref("letter-spacing", "CSS letter-spacing")}} property for more information.

As a presentation attribute, it can be applied to any element but it has effect only on the following eight elements: {{SVGElement("altGlyph")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("tref")}}, and {{SVGElement("tspan")}}

## 示例

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
</svg>
```

{{EmbedLiveSample("示例", "200", "30")}}

## Usage notes

| Value         | `normal` \| {{cssxref("length")}} |
| ------------- | ---------------------------------------- |
| Default value | `normal`                                 |
| Animatable    | Yes                                      |

For a description of the values, please refer to the [CSS `letter-spacing`](/zh-CN/docs/Web/CSS/letter-spacing#Values) property.

As of May 2019, Firefox [ignores `letter-spacing`](https://bugzilla.mozilla.org/show_bug.cgi?id=371787) and renders text without.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("letter-spacing", "CSS letter-spacing")}}
