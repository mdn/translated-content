---
title: BeforeUnloadEvent：returnValue 属性
short-title: returnValue
slug: Web/API/BeforeUnloadEvent/returnValue
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

{{domxref("BeforeUnloadEvent")}} 接口的 **`returnValue`** 属性，当设置为真值时，会触发浏览器生成的确认对话框，提示用户在尝试关闭或重新加载页面或者导航到其他地方时，是否确实要离开该页面。此功能旨在避免未保存数据的丢失。

> [!NOTE]
> `returnValue` 是一项遗留功能，最佳实践是通过调用 {{domxref("Event.preventDefault()")}} 方法来触发对话框，同时设置 `returnValue` 以支持旧版情况。有关详细更新指南，请参阅 {{domxref("Window/beforeunload_event", "beforeunload")}} 事件参考。

## 值

`returnValue` 初始化为空字符串（`""`）。

将其设置为任何接近[真值](/zh-CN/docs/Glossary/Truthy)的值都会导致在页面关闭或重新加载时触发对话框，但请注意，这还需要[粘性激活](/zh-CN/docs/Glossary/Sticky_activation)。换句话说，只有当框架或任何嵌入式框架接收到用户手势或用户交互时，浏览器才会显示该对话框。如果用户从未与页面交互过，则不存在需要保存的用户数据，因此没有合理的使用场景需要显示该对话框。

> [!NOTE]
> 对话框中显示的是浏览器指定的通用字符串。网页代码无法对其进行控制。

## 示例

参见 {{domxref("Window/beforeunload_event", "beforeunload")}} 事件参考页面以获取最佳实践示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
