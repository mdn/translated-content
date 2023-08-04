---
title: image
slug: Web/SVG/Element/image
---

{{SVGRef}}

SVG 文档中的 SVG 元素包含图像信息。它表现为图像文件或者其他 SVG 文件。

SVG 图像格式转换软件支持 JPEG、PNG 格式，是否支持动图 GIF 不明确。

SVG 文件是这样的一种图像：不被当做外部资源加载，不可以用 [:visited](/zh-CN/docs/Web/CSS/:visited) 样式，不能有交互。使用动态 SVG 元素，可以用[\<use>](/zh-CN/docs/Web/SVG/Element/use)引入外部的 URL。使用 SVG 文件并添加 scripts 在里面，可以用[\<object>](/zh-CN/docs/Web/HTML/Element/object) 放在 [\<foreignObject>](/zh-CN/docs/Web/SVG/Element/foreignObject)中。

注意：HTML 规范中定义\<image>和\<img>在解析时是等效的。这种规范只适用于 SVG 文件或 SVG 区块内。

## 用法

{{svginfo}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/SVG/Attribute#GraphicalEvent) »
- [Xlink 属性](/zh-CN/SVG/Attribute#XLink) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("x") }}：图像水平方向上到原点的距离
- {{ SVGAttr("y") }}：图像竖直方向上到原点的距离
- {{ SVGAttr("width") }}：图像宽度。和 HTML 的 \<img> 不同，该属性是必须的
- {{ SVGAttr("height") }}：图像高度。和 HTML 的 \<img> 不同，该属性是必须的
- {{ SVGAttr("href") }} 或 {{ SVGAttr("xlink:href") }}：图像的 URL 指向
- {{ SVGAttr("preserveAspectRatio") }}：控制图像比例

## DOM 接口

该元素实现[`SVGImageElement`](/zh-CN/DOM/SVGImageElement) 接口。

## 示例

在 SVG 对象中基本呈现 PNG 图像：

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <image
    xlink:href="/files/2917/fxlogo.png"
    x="0"
    y="0"
    height="100"
    width="100" />
</svg>
```

{{EmbedLiveSample("示例", 250, 260)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
