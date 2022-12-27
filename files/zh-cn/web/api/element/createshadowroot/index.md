---
title: Element.createShadowRoot()
slug: Web/API/Element/createShadowRoot
---

使用`Element.createShadowRoot` 创建的实例 [阴影 DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM)。创建 shadow DOM 时，它始终附加到现有元素。创建 shadow DOM 之后，它所附加的元素称为{{glossary("shadow root")}}。

> **备注：** 不推荐使用此方法，而使用{{DOMxRef("Element.attachShadow()","attachShadow()")}}。

## 句法

```
var shadowroot = element.createShadowRoot();
```

### 参数

没有参数。

### 结果值

返回{{DOMxRef("ShadowRoot")}}。

## 产品规格

任何规格都不再定义此功能。

## 浏览器兼容性
