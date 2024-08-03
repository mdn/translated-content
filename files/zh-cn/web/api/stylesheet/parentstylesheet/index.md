---
title: StyleSheet：parentStyleSheet 属性
slug: Web/API/StyleSheet/parentStyleSheet
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

{{domxref("StyleSheet")}} 接口的 **`parentStyleSheet`** 属性返回样式表（如果有），其中包含给定的样式表。

## 值

一个 {{domxref("StyleSheet")}} 对象。

## 示例

```js
// 查找顶级样式表
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## 备注

如果当前样式表是一个顶级的样式表或者如果不支持包含样式表，则这个属性返回 `null`。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
