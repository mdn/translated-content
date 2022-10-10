---
title: StyleSheet.disabled
slug: Web/API/StyleSheet/disabled
---

{{APIRef("CSSOM")}}{{domxref("StyleSheet")}}接口的 **`disabled` **属性用于决定样式表是否被禁用于文档。样式表被禁用可能由于这个属性被手动设置为 true，也可能是因为样式表是未激活的[alternative style sheet](/zh-CN/docs/Web/CSS/Alternative_style_sheets)。注意 `disabled == false` 并不保证样式表一定生效（例如它可能被移除出文档）。

## 语法

```plain
bool = stylesheet.disabled
```

## 例子

```plain
// 如果样式表被禁用
if (stylesheet.disabled) {
   // 添加行内样式
}
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}
