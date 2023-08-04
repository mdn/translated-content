---
title: animateMotion
slug: Web/SVG/Element/animateMotion
---

{{SVGRef}}

`<animateMotion>` 元素定义了一个元素如何沿着运动路径进行移动。

> **备注：** 为了复用一个已经定义的路径，就有必要使用一个 {{SVGElement("mpath")}} 元素嵌入到 `<animateMotion>` 中，而不是使用 {{SVGAttr("path")}}。

## 示例

```css
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```xml
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 用法

{{svginfo}}

## 属性

### Global 属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#Core) »
- [动画事件属性](/zh-CN/docs/SVG/Attribute#AnimationEvent) »
- [Xlink 属性](/zh-CN/docs/SVG/Attribute#XLink) »
- [动画定时属性](/zh-CN/docs/SVG/Attribute#AnimationTiming) »
- [动画值属性](/zh-CN/docs/SVG/Attribute#AnimationValue) »
- [An 动画累加属性](/zh-CN/docs/SVG/Attribute#AnimationAddition) »
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("calcMode") }}
- {{ SVGAttr("path") }}
- {{ SVGAttr("keyPoints") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("origin") }}

## DOM 接口

该元素实现了 `SVGAnimateMotionElement` 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{ SVGElement("mpath") }}
