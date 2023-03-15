---
title: radialGradient
slug: Web/SVG/Element/radialGradient
---

{{SVGRef}}

`radialGradient` 用来定义径向渐变，以对图形元素进行填充或描边。

## 用法

{{svginfo}}

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Attribute#Core) »
- [外观属性](/zh-CN/docs/Web/SVG/Attribute#Presentation) »
- [Xlink 属性](/zh-CN/docs/Web/SVG/Attribute#XLink) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### 专有属性

- {{SVGAttr("gradientUnits")}}
- {{SVGAttr("gradientTransform")}}
- {{SVGAttr("cx")}}
- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("fx")}}
- {{SVGAttr("fy")}}
- {{SVGAttr("fr")}}
- {{SVGAttr("spreadMethod")}}
- {{SVGAttr("xlink:href")}}

## DOM 接口

该元素实现了 {{domxref("SVGRadialGradientElement")}} 接口。

## 示例

### SVG

```xml
<svg width="120" height="120" viewBox="0 0 240 120"
   xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="exampleGradient">
      <stop offset="10%" stop-color="gold"/>
      <stop offset="95%" stop-color="green"/>
    </radialGradient>
    <radialGradient spreadMethod="reflect"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="25%"
                    fy="75%"
                    fr="10%"
                   id="flameGradient">
      <stop offset="0%" stop-color="white"/>
      <stop offset="10%" stop-color="yellow"/>
      <stop offset="95%" stop-color="red"/>
    </radialGradient>
  </defs>
  <circle fill="url(#exampleGradient)" cx="60" cy="60" r="50"/>
  <circle fill="url(#flameGradient)" cx="180" cy="60" r="50"/>
</svg>
```

### 结果

{{EmbedLiveSample("示例", 120, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{SVGElement("linearGradient")}}
