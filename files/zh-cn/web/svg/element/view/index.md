---
title: <view>
slug: Web/SVG/Element/view
l10n:
  sourceCommit: b439985acb7c71d271115723522aa55cc7a43cbe
---

{{SVGRef}}

`<view>` SVG 元素定义了 SVG 文档的特定视图。可以通过将 `<view>` 元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 作为 URL 的目标片段来显示特定的视图。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("zoomAndPan")}} {{Deprecated_Inline}} {{Non-standard_Inline}}

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

## DOM 接口

此元素实现了 {{domxref("SVGViewElement")}} 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
