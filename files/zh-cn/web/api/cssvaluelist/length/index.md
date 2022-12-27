---
title: CSSValueList.length
slug: Web/API/CSSValueList/length
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

{{domxref("CSSValueList")}} 接口的只读属性 **`length`** 表示列表中的 {{domxref("CSSValue")}} 数量。有效的索引区间为 `0` 到 `length-1`。

## 语法

```plain
var length = cssValueList.length;
```

### 值

一个 `unsigned long` 数值，表示此列表中 {{domxref("CSSValue")}} 的个数。

## 规范

该特性最初在 [DOM Style Level 2](https://www.w3.org/TR/DOM-Level-2-Style/) 中定义，但从那时起已从标准化工作中移除。

它已被现代、不兼容的 [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API) 取代，该 API 已被标准化。

## 浏览器兼容性

{{Compat}}
