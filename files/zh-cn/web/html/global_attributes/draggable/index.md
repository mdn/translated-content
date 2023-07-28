---
title: draggable
slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **draggable** 是一种[枚举](/zh-CN/docs/Glossary/Enumerated)属性，用于标识元素是否允许使用浏览器原生行为或 [HTML 拖放操作 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 拖动。

`draggable` 属性可以应用于严格属于 [HTML 命名空间](/zh-CN/docs/Glossary/Namespace)的元素，这意味着它不能应用于 [SVG](/zh-CN/docs/Web/SVG)。关于命名空间声明的简介和作用的更多信息，请参阅[命名空间速成课](/zh-CN/docs/Web/SVG/Namespaces_Crash_Course)。

`draggable` 可以有如下取值：

- `true`：表示元素可以被拖动
- `false`：表示元素不可以被拖动

如果该属性没有设值，则默认值 为 auto，表示使用浏览器定义的默认行为。

> **警告：** 这个属性是[_枚举类型_](/zh-CN/docs/Glossary/Enumerated)，而不是*布尔类型*。这意味着必须显式指定值为 `true` 或者 `false`，像 `<img draggable>` 这样的简写是不允许的。正确的用法是 `<img draggable="false">`。

如果没有设置该属性，其默认值为 `auto`，这意味着拖动行为是浏览器的默认行为：只有选择的文本、图像和链接可以被拖动。对于其他元素，必须设置事件 {{domxref('HTMLElement.dragstart_event', 'ondragstart')}} 以使拖放行为生效，如本[综合实例](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)所示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。
