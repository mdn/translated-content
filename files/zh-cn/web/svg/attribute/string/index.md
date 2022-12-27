---
title: string
slug: Web/SVG/Attribute/string
---

{{SVGRef}}{{deprecated_header("SVG 2")}}

The **`string`** attribute is a hint to the user agent, and specifies a list of formats that the font referenced by the parent {{SVGElement("font-face-uri")}} element supports.

Only one element is using this attribute: {{SVGElement("font-face-format")}}

## Usage notes

| Value         | [`<anything>`](/zh-CN/docs/Web/SVG/Content_type#Anything) |
| ------------- | --------------------------------------------------------- |
| Default value | _None_                                                    |
| Animatable    | No                                                        |

- `<anything>`
  - : This value specifies a list of formats that are supported by the font referenced by the parent {{SVGElement("font-face-uri")}} element.The available types are: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"`, and `"svg"`. See the {{cssxref("@font-face/src", "src")}} descriptor of the {{cssxref("@font-face")}} at-rule for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
