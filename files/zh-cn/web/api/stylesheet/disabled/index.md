---
title: StyleSheet：disabled 属性
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{APIRef("CSSOM")}}

{{domxref("StyleSheet")}} 接口的 **`disabled`** 属性用于决定是否阻止将样式表应用于文档。

样式表被禁用可能由于这个属性被手动设置为 `true`，也可能是因为样式表是未激活的[替代样式表](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)。注意 `disabled == false` 并不保证样式表一定生效（例如它可能被移除出文档）。

## 值

一个布尔值。

## 示例

```js
// 如果样式表被禁用
if (stylesheet.disabled) {
  // 应用内联样式
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
