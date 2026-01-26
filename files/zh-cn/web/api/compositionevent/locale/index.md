---
title: CompositionEvent：locale 属性
short-title: locale
slug: Web/API/CompositionEvent/locale
l10n:
  sourceCommit: cede06423af0242a18670246e1b25562d21c0004
---

{{deprecated_header}}{{APIRef("UI Events")}}{{Non-standard_header}}

{{domxref("CompositionEvent")}} 接口的只读属性 **`locale`** 返回当前输入法的区域设置（例如，如果组合与{{glossary("Input method editor", "输入法编辑器")}}相关联，则为键盘布局区域设置）。

> [!WARNING]
> 即使支持该属性的浏览器，也不要信任此属性包含的值。即使在技术上你可以访问该属性，但在创建 {{domxref("CompositionEvent")}} 时设置此属性的方式也无法保证一致。

## 值

表示当前输入法的区域设置的字符串。

## 规范

此属性曾出现在不同规范的早期版本中，现在仅保留以供兼容性目的，且在创建 {{domxref("CompositionEvent")}} 时设置其值的方式是[未明确定义的](https://github.com/w3c/uievents/issues/48)。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CompositionEvent")}}
