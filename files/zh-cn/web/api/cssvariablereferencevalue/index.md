---
title: CSSVariableReferenceValue
slug: Web/API/CSSVariableReferenceValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSSOM")}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model) 的 **`CSSVariableReferenceValue`** 接口允许你为内置 CSS 值创建自定义名称。此对象功能有时称为“CSS 变量”，其用途与 {{cssxref("var", "var()")}} 函数相同。自定义名称必须以两个连字符开头。

## 构造函数

- {{domxref("CSSVariableReferenceValue.CSSVariableReferenceValue", "CSSVariableReferenceValue()")}}
  - : 创建一个新的 `CSSVariableReferenceValue` 对象。

## 实例属性

- {{domxref('CSSVariableReferenceValue.variable')}}
  - : 返回传递给构造函数的自定义名称。
- {{domxref('CSSVariableReferenceValue.fallback')}} {{ReadOnlyInline}}
  - : 返回自定义名称对应的内置 CSS 值。

## 实例方法

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
