---
title: max
slug: Web/SVG/Attribute/max
---

{{SVGRef}}

The **`max`** attribute specifies the maximum value of the active animation duration.

Five elements are using this attribute: {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, and {{SVGElement("set")}}

## 示例

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate attributeName="cx" dur="4s" max="6s" repeatCount="indefinite"
        values="60 ; 110 ; 60 ; 10 ; 60" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"/>
    <animate attributeName="cy" dur="4s" max="6s" repeatCount="indefinite"
        values="10 ; 60 ; 110 ; 60 ; 10" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"/>
  </circle>
</svg>
```

{{EmbedLiveSample("示例", "200", "200")}}

## Usage notes

| Value         | [`<clock-value>`](/zh-CN/docs/Web/SVG/Content_type#Clock-value) |
| ------------- | --------------------------------------------------------------- |
| Default value | _None_                                                          |
| Animatable    | No                                                              |

- `<clock-value>`
  - : Specifies the length of the maximum value of the active duration, measured in local time. The value must be greater than 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("min")}}
