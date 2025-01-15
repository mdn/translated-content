---
title: feComposite
slug: Web/SVG/Element/feComposite
---

{{SVGRef}}

该滤镜执行两个输入图像的智能像素组合，在图像空间中使用以下 Porter-Duff 合成操作之一：over、in、atop、xor。另外，还可以应用一个智能组件`arithmetic` 操作（结果被压到 `[0,1]` 范围内）。

`该 arithmetic 操作对组合来自`{{SVGElement("feDiffuseLighting")}}滤镜和来自{{SVGElement("feSpecularLighting")}} 滤镜的`输出以及组合纹理数据很有用`。如果选择了`arithmetic`操作，每个结果像素都要经过下面的方程式的计算：

```plain
result = k1*i1*i2 + k2*i1 + k3*i2 + k4
```

在这里：

- `i1` 和 `i2` 标`示了输入图像相应的像素通道值，分别映射到{{SVGAttr("in")}}和{{SVGAttr("in2")}}。
- `k1`、`k2`、`k3` 和 `k4` 标示了同名的属性值。

## 使用上下文

{{svginfo}}

## 示例

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/SVG/Attribute#core) »
- [外观属性](/zh-CN/docs/SVG/Attribute#presentation) »
- [滤镜属性](/zh-CN/docs/SVG/Attribute#filter) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("in") }}
- {{ SVGAttr("in2") }}
- {{ SVGAttr("operator") }}
- {{ SVGAttr("k1") }}
- {{ SVGAttr("k2") }}
- {{ SVGAttr("k3") }}
- {{ SVGAttr("k4") }}

## DOM 接口

该元素实现了 [`SVGFECompositeElement`](/zh-CN/docs/DOM/SVGFECompositeElement) 接口。

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/docs/SVG/Tutorial/Filter_effects)
