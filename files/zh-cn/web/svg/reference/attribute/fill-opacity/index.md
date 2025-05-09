---
title: fill-opacity
slug: Web/SVG/Reference/Attribute/fill-opacity
---

该属性指定了填色的不透明度或当前对象的内容物的不透明度。

## 使用说明

| 类别   | 外观属性                                                                          |
| ------ | --------------------------------------------------------------------------------- |
| 值     | [\<opacity-value>](/zh-CN/docs/Web/SVG/Guides/Content_type#不透明度值) \| inherit |
| 初始值 | 1                                                                                 |
| 可变性 | Yes                                                                               |

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 默认填充不透明度：1 -->
  <circle cx="50" cy="50" r="40" />

  <!-- 以数字指定填充不透明度 -->
  <circle cx="150" cy="50" r="40" fill-opacity="0.7" />

  <!-- 以百分比值指定填充不透明度 -->
  <circle cx="250" cy="50" r="40" fill-opacity="50%" />

  <!-- 以 CSS 属性指定填充不透明度 -->
  <circle cx="350" cy="50" r="40" style="fill-opacity: .25;" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 150)}}

## 规范

{{Specifications}}

## 参见

- {{ SVGAttr("stroke-opacity") }}
- {{ SVGAttr("opacity") }}
