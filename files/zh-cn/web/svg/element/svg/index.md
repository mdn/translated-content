---
title: svg
slug: Web/SVG/Element/svg
---

{{SVGRef}}

- 如果 svg 不是根元素，`svg` 元素可以用于在当前文档（比如说，一个 HTML 文档）内嵌套一个独立的 svg 片段。这个独立片段拥有独立的视口和坐标系统。

## 用法

{{svginfo}}

## 示例

思考下下面的 svg 图片（代表意大利国旗）：

```xml
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">

  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
```

它可以包含在 html5 文档里，如下所示：

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML/SVG Example</title>
  </head>

  <body>
    <svg width="150" height="100" viewBox="0 0 3 2">
      <rect width="1" height="2" x="0" fill="#008d46" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#d2232c" />
    </svg>
  </body>
</html>
```

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#Core) »
- [文档事件属性](/zh-CN/docs/SVG/Attribute#DocumentEvent) »
- [图形事件属性](/zh-CN/docs/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/docs/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### 专有属性

- {{ SVGAttr("version") }}
- {{ SVGAttr("baseProfile") }}
- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("preserveAspectRatio") }}
- {{ SVGAttr("contentScriptType") }}
- {{ SVGAttr("contentStyleType") }}
- {{ SVGAttr("viewBox") }}

## DOM 接口

该元素实现了[`SVGSVGElement`](/zh-CN/docs/DOM/SVGSVGElement) 接口。

## 浏览器兼容性

{{Compat}}
