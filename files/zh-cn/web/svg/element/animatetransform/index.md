---
title: animateTransform
slug: Web/SVG/Element/animateTransform
---

{{SVGRef}}

`animateTransform`元素变动了目标元素上的一个变形属性，从而允许动画控制转换、缩放、旋转或斜切。

## 用法

{{svginfo}}

## 示例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
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

**示例输出**

{{ EmbedLiveSample('示例','120','120') }}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute#条件处理属性)
- [核心属性](/zh-CN/docs/Web/SVG/Attribute#核心属性)
- [动画事件属性](/zh-CN/docs/Web/SVG/Attribute#动画事件属性)
- [Xlink 属性](/zh-CN/docs/Web/SVG/Attribute#xlink_属性)
- [动画属性目标属性](/zh-CN/docs/Web/SVG/Attribute#动画属性目标属性)
- [动画定时属性](/zh-CN/docs/Web/SVG/Attribute#动画时间属性)
- [动画值属性](/zh-CN/docs/Web/SVG/Attribute#动画取值属性)
- [动画累加属性](/zh-CN/docs/Web/SVG/Attribute#动画累加属性)
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM Interface

该元素实现了[`SVGAnimateTransformElement`](/zh-CN/docs/DOM/SVGAnimateTransformElement)接口。
