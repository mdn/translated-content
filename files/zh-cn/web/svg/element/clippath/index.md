---
title: clipPath
slug: Web/SVG/Element/clipPath
---

{{SVGRef}}

[SVG](/zh-CN/docs/Web/SVG) 元素 **`<clipPath>`** 定义一条剪切路径，可作为其他元素的 {{SVGAttr("clip-path")}} 属性的值。

剪切路径限制了图形的可见范围。从概念上来说，如果图形超出了当前剪切路径所包围的区域，那么超出部分将不会绘制。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      圆圈外的所有东西都会被裁剪掉，因此不可见。
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- 作为引用元素（英文原文：for reference）的黑色心形 -->
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    和上述黑色心形形状相同的红色心形，剪切路径是上面定义的圆；
    红色心形只有在圆内的部分可见。
  -->
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
</svg>
```

```css
/* 如果浏览器支持几何属性 r，可以加一点 css */

@keyframes openYourHeart {
  from {
    r: 0;
  }
  to {
    r: 60px;
  }
}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('示例', 100, 100)}}

从概念上讲，剪切路径等于给引用元素设置了一个自定义的可视区域。因此，它虽然会影响一个元素的绘制，但不会影响这个元素本身的几何形状，比如被剪切元素（通过 {{SVGAttr("clip-path")}} 属性引用了 `<clipPath>` 的元素及其子元素）的包围盒和没有被剪切时相同。

默认情况下，{{cssxref("pointer-events")}} 不会在被剪切掉的区域（不可见的区域）内触发。举个例子，如果一个半径为 10 的圆形被剪切成半径为 5 的圆形，那么这个圆在半径为 5 以外的区域不会收到“click”事件。

## 属性

- {{SVGAttr("clipPathUnits")}}
  - : 为 `<clipPath>` 元素的内容定义坐标系。
    _Value type_: `userSpaceOnUse`|`objectBoundingBox` ; _Default value_: `userSpaceOnUse`; _Animatable_: **yes**

### 全局属性

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}

## 用法

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- Other clipping and masking SVG elements: {{SVGElement("mask")}}
- Some CSS properties: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
