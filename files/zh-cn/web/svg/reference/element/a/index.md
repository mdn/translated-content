---
title: a
slug: Web/SVG/Reference/Element/a
---

使用 SVG 的锚元素 (\<a>) 定义一个超链接。

由于这个元素和 [HTML 的 \<a> 标签](/zh-CN/docs/Web/HTML/Reference/Elements/a) 使用了相同的标签名，当使用 CSS 或 `querySelector` 选择"a"时，可能应用到错误的元素上。可以尝试使用 [`@namespace`规则](/zh-CN/docs/Web/CSS/Reference/At-rules/@namespace) 来区分两者

## 使用上下文

{{svginfo}}

## 示例

```html
<svg
  width="140"
  height="30"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <a xlink:href="https://developer.mozilla.org/zh-CN/docs/SVG" target="_blank">
    <rect height="30" width="120" y="0" x="0" rx="15" />
    <text fill="white" text-anchor="middle" y="21" x="60">SVG on MDN</text>
  </a>
</svg>
```

示例结果：

{{EmbedLiveSample("示例",170,60)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Reference/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/Web/SVG/Reference/Attribute#core) »
- [图形事件属性](/zh-CN/docs/Web/SVG/Reference/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/Web/SVG/Reference/Attribute#presentation) »
- [Xlink 属性](/zh-CN/docs/Web/SVG/Reference/Attribute#xlink) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 专有属性

- {{SVGAttr("xlink:show")}}
- {{SVGAttr("xlink:actuate")}}
- {{SVGAttr("xlink:href")}}
- {{SVGAttr("target")}}

## DOM 接口

该元素实现了 [`SVGAElement`](/zh-CN/docs/Web/API/SVGAElement) 接口。

## 浏览器兼容性

{{Compat}}
