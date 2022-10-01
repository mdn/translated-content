---
title: <big>
slug: Web/HTML/Element/big
---

{{deprecated_header}}

## 概要

The HTML Big Element (`<big>`) 会使字体加大一号（例如从小号 (small) 到中号 (medium)，从大号 (large) 到加大 (x-large)），最大不超过浏览器的最大字体。

> **备注：** 由于它是纯显示性的，该元素在[HTML5](/zh-CN/docs/Web/Guide/HTML/HTML5)中已经被移除，不应当再使用。取而代之，网页开发者应当使用 CSS 属性。

## 属性

只包含 [全局属性](/zh-CN/docs/HTML/global_attributes)

## 示例 1

```xml
<p>
  This is the first sentence. <big>This whole
  sentence is in bigger letters.</big>
</p>
```

## 示例 2 (CSS 版)

```xml
<p>
  This is the first sentence. <span style="font-size:1.2em">This whole
  sentence is in bigger letters.</span>
</p>
```

### 结果

This is the first sentence. This whole sentence is in bigger letters.

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}}接口。

> **备注：** 直到 Gecko 1.9.2, Firefox 为该元素实现了{{domxref('HTMLSpanElement')}}接口。

## 浏览器兼容

{{Compat}}

## 参见

- {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 Specification: [Font Styles](http://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{HTMLRef}}
