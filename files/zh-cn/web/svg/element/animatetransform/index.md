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
<svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink" >

    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
```

**示例输出**

{{ EmbedLiveSample('Example','120','120') }}

## 属性

### 全局属性

- [条件处理属性](</en-US/docs/Web/SVG/Attribute#Conditional processing attributes>) »
- [核心属性](</en-US/docs/Web/SVG/Attribute#Core attributes>) »
- [动画事件属性](</en-US/docs/Web/SVG/Attribute#Animation event attributes>) »
- [Xlink 属性](</en-US/docs/Web/SVG/Attribute#Xlink attributes>) »
- [动画属性目标属性](</en-US/docs/Web/SVG/Attribute#Animation attribute target attributes>) »
- [动画定时属性](</en-US/docs/Web/SVG/Attribute#Animation timing attributes>) »
- [动画值属性](</en-US/docs/Web/SVG/Attribute#Animation value attributes>) »
- [A 动画累加属性](</en-US/docs/Web/SVG/Attribute#Animation addition attributes>) »
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("by") }}
- {{ SVGAttr("from") }}
- {{ SVGAttr("to") }}
- {{ SVGAttr("type") }}

## DOM Interface

该元素实现了[`SVGAnimateTransformElement`](/en-US/docs/DOM/SVGAnimateTransformElement)接口。
