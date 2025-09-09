---
title: feSpecularLighting
slug: Web/SVG/Reference/Element/feSpecularLighting
---

该滤镜照亮一个源图形，使用 alpha 通道作为隆起映射。该结果图像是一个基于光色的 RGBA 图象。该光照计算遵守标准[冯氏照明模式](http://en.wikipedia.org/wiki/Phong_reflection_model)的镜面组件。结果图像依赖于光色、光的位置以及输入隆起映射的表面几何形状。光照计算的结果是叠加的。该滤镜假定观察者在 X 方向无穷远处。

该滤镜制作了一个图像，图像包含光照计算的镜面反射部分。如此一个映射是为了与纹理相结合，使用算术{{SVGElement("feComposite")}}方法的叠加。利用在应用到纹理图像前添加多个光映射，可以模拟多个光源。

## 使用上下文

{{svginfo}}

## 示例

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Reference/Attribute#core) »
- [外观属性](/zh-CN/docs/Web/SVG/Reference/Attribute#presentation) »
- [滤镜属性](/zh-CN/docs/Web/SVG/Reference/Attribute#filter) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("in") }}
- {{ SVGAttr("surfaceScale") }}
- {{ SVGAttr("specularConstant") }}
- {{ SVGAttr("specularExponent") }}
- {{ SVGAttr("kernelUnitLength") }}

## DOM 接口

该元素实现了 `SVGFESpecularLightingElement` 接口。

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feDistantLight") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("fePointLight") }}
- {{ SVGElement("feSpotLight") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
