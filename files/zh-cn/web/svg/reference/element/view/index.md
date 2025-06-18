---
title: <view>
slug: Web/SVG/Reference/Element/view
l10n:
  sourceCommit: eb2d8ffb82c8a6fa4e55aad2835215ffada25897
---

**`<view>`** [SVG](/zh-CN/docs/Web/SVG) 元素定义了 SVG 文档的特定视图。可以通过将 `<view>` 元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 作为 URL 的目标片段来显示特定的视图。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("preserveAspectRatio")}}
  - : 该属性定义了当 SVG 片段嵌入到具有不同{{glossary("aspect ratio", "纵横比")}}的容器中时应如何变形。_值类型_：(`none`|`xMinYMin`|`xMidYMin`|`xMaxYMin`|`xMinYMid`|`xMidYMid`|`xMaxYMid`|`xMinYMax`|`xMidYMax`|`xMaxYMax`) (`meet`|`slice`)?；_默认值_：`xMidYMid meet`；_动画性_：**是**
- {{SVGAttr("viewBox")}}
  - : 该属性定义了模式片段的 SVG 视口边界。_值类型_：[**\<list-of-numbers>**](/zh-CN/docs/Web/SVG/Guides/Content_type#t_值数列)；_默认值_：无；_动画性_：**是**
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 此属性指定 SVG 文档是否可以被放大和平移。_值类型_：**disable | magnify**；_默认值_：magnify；_动画性_：**否**

## 示例

### SVG

```svg
<svg viewBox="0 0 300 100" width="300" height="100"
      xmlns="http://www.w3.org/2000/svg">

  <view id="one" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="two" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="three" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

### HTML

```html
<img src="example.svg" alt="三个圆形" width="300" height="100" />
<br />
<img src="example.svg#three" alt="蓝色圆形" width="100" height="100" />
```

### 结果

{{EmbedLiveSample("示例", "85ch", "240px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
