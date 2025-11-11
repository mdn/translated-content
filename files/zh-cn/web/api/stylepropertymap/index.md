---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
---

{{APIRef("CSS Typed Object Model API")}} {{SeeCompatTable}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model#CSS_Typed_Object_Model) 的 **`StylePropertyMap`** 接口提供了 CSS 声明块的表示，该声明块可以替代 {{DOMxRef("CSSStyleDeclaration")}}。

{{InheritanceDiagram}}

## 属性

_从其父级 {{DOMxRef("StylePropertyMapReadOnly")}} 继承属性。_

## 方法

_从其父级 {{DOMxRef("StylePropertyMapReadOnly")}} 继承方法。_

- {{DOMxRef( "StylePropertyMap.append()")}}
  - : 使用给定的属性和值向 `StylePropertyMap` 添加新的 CSS 声明。
- {{DOMxRef( "StylePropertyMap.clear()")}}
  - : 删除 `StylePropertyMap` 中的所有声明。
- {{DOMxRef( "StylePropertyMap.delete()")}}
  - : 使用给定属性删除 CSS 声明。
- {{DOMxRef( "StylePropertyMap.set()")}}
  - : 使用给定属性更改 CSS 声明。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
