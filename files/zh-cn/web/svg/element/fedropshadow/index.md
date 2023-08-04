---
title: <feDropShadow>
slug: Web/SVG/Element/feDropShadow
---

{{SVGRef}}

SVG **`<feDropShadow>`** 原语创建输入图像的阴影。它只能在 {{SVGElement('filter')}} 元素内使用

> **备注：** 可以使用 {{SVGAttr('flood-color')}} 和 {{SVGAttr('flood-opacity')}} 表现属性来改变阴影的颜色和不透明度。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
    </filter>
    <filter id="shadow3">
      <feDropShadow
        dx="-0.8"
        dy="-0.8"
        stdDeviation="0"
        flood-color="pink"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" style="fill:pink; filter:url(#shadow);" />

  <circle cx="15" cy="50%" r="4" style="fill:pink; filter:url(#shadow2);" />

  <circle cx="25" cy="50%" r="4" style="fill:pink; filter:url(#shadow3);" />
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 属性

- {{SVGAttr("dx")}}
  - : 此属性定义了投影的 x 轴偏移量。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Content_type#数字)；_默认值_：`2`；_可用于动画_：**是**
- {{SVGAttr("dy")}}
  - : 此属性定义了投影的 y 轴偏移量。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Content_type#数字)；_默认值_：`2`；_可用于动画_：**是**
- {{SVGAttr("stdDeviation")}}
  - : 此属性定义了投影的模糊操作的标准差。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Content_type#数字)；_默认值_：`2`；_可用于动画_：**是**

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Attribute/Core)
  - : 最应注意：{{SVGAttr('id')}}
- [样式属性](/zh-CN/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}、{{SVGAttr('style')}}
- [滤镜原始属性](/zh-CN/docs/Web/SVG/Attribute#滤镜属性)
  - : {{SVGAttr('height')}}、{{SVGAttr('in')}}、{{SVGAttr('result')}}、{{SVGAttr('x')}}、{{SVGAttr('y')}}、{{SVGAttr('width')}}
- [表现属性](/zh-CN/docs/Web/SVG/Attribute/Presentation)
  - : 最应注意：{{SVGAttr('flood-color')}}、{{SVGAttr('flood-opacity')}}

## 用法

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
