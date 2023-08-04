---
title: media
slug: Web/SVG/Attribute/media
---

{{SVGRef}}

**`media`** 属性指定只有符合{{Glossary("media query")}}的样式表才会被应用。

只有一个元素使用这个属性： {{SVGElement("style")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      fill: black;
    }
  </style>
  <style media="all and (min-width: 600px)">
    rect {
      fill: seagreen;
    }
  </style>

  <text y="15">Resize the window to see the effect</text>
  <rect y="20" width="200" height="200" />
</svg>
```

{{EmbedLiveSample("示例", "200", "200")}}

## Usage notes

| Value         | [`<media-query-list>`](/zh-CN/docs/Web/CSS/@media#media-query-list) |
| ------------- | ------------------------------------------------------------------- |
| Default value | `all`                                                               |
| Animatable    | Yes                                                                 |

- `<media-query-list>`
  - : This value holds a media query that needs to match in order for the style sheet to be applied.如果没有指定，样式表就会被应用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
