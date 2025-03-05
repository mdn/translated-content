---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
---

{{SVGRef}}

指定 SVG 元素 {{SVGElement("path")}} 的渲染模式。

## 使用参考

| 类型   | 外观属性                                                                 |
| ------ | ------------------------------------------------------------------------ |
| 值     | **auto** \| optimizeSpeed \| crispEdges \| geometricPrecision \| inherit |
| 可运动 | Yes                                                                      |

- auto
  - : 让浏览器自动权衡渲染速度、平滑度、精确度。默认是倾向于精确度而非平滑度和速度。
- optimizeSpeed
  - : 偏向渲染速度，浏览器会关闭反锯齿模式。（速度）
- crispEdges
  - : 偏向更加清晰锐利的边缘的渲染。浏览器在渲染的时候会关闭反锯齿模式，且会让线条的位置和宽度和显示器边缘对齐。（锐度）
- geometricPrecision
  - : 偏向渲染平滑的曲线。（平滑）

## 示例

```xml
<svg xmlns="http://www.w3.org/2000/svg"
  version="1.1" width="100" height="100"
  shape-rendering="optimizeSpeed"><!-- 这个示例在 Firefox 下看区别更明显 -->
```

| shape-rendering: geometricPrecision:![shape-rendering:geometricPrecision](http://download.g63.ru/svg/shape-rendering-geometricPrecision.svg) | shape-rendering: optimizeSpeed![shape-rendering:optimizeSpeed](http://download.g63.ru/svg/shape-rendering-optimizeSpeed.svg) |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |

同样，你也可以在 CSS 样式中使用 shape-rendering:

```xml
<svg xmlns="http://www.w3.org/2000/svg"
  version="1.1" width="100" height="100"
  style="shape-rendering:optimizeSpeed;">
```

## 关联元素

下面的元素可以使用这个属性

- [Shape elements](/zh-CN/docs/Web/SVG/Element#shape) »

## 规范

{{Specifications}}
