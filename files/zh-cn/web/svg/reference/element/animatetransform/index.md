---
title: <animateTransform>
slug: Web/SVG/Reference/Element/animateTransform
l10n:
  sourceCommit: 12222b32eec33a7411c6de8afc8408d9aa617dd2
---

**`<animateTransform>`** [SVG](/zh-CN/docs/Web/SVG) 元素对其目标元素的变换属性做动画，从而让动画可以控制平移、缩放、旋转或倾斜。

## 使用上下文

{{svginfo}}

## 示例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <polygon points="60,30 90,90 30,90">
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      from="0 60 70"
      to="360 60 70"
      dur="10s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

{{ EmbedLiveSample('示例','120','120') }}

## 属性

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM 接口

该元素实现了 [`SVGAnimateTransformElement`](/zh-CN/docs/Web/API/SVGAnimateTransformElement) 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
