---
title: 用户界面项目视图
slug: Web/API/UIEvent/view
---

{{APIRef("DOM Events")}}

The **`UIEvent.view`** 只读属性返回的生成事件的 {{domxref("document.defaultView")}} (`window` of the document) 对象。在浏览器中，这是事件所在的 {{ domxref("Window") }} 对象。

## 语法

```plain
var view = event.view;
```

- `view` 是对 `AbstractView` 对象的引用。

## 技术参数

{{Specifications}}

## 浏览器的兼容性

{{Compat}}
