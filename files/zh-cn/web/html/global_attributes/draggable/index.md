---
title: draggable
slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **draggable** 是一个枚举类型的属性，用于标识元素是否允许使用 [拖放操作 API](/zh-CN/docs/DragDrop/Drag_and_Drop) 拖动。它的取值如下：

- true，表示元素可以被拖动
- false，表示元素不可以被拖动

如果该属性没有设值，则默认值 为 auto，表示使用浏览器定义的默认行为。

这个属性是*枚举类型*，而不是*布尔类型*。这意味着必须显式指定值为 true 或者 false，像 `<label draggable>Example Label</label>` 这样的简写是不允许的。正确的用法是 `<label draggable="true">Example Label</label>`。

默认情况下，只有已选中的文本、图片、链接可以拖动。对其它的元素来说，必须按拖动机制的顺序设置 **ondragstart** 事件才能正常工作，见 [综合示例](/zh-CN/docs/DragDrop/Drag_Operations) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- All [global attributes](/zh-CN/docs/Web/HTML/Global_attributes).
