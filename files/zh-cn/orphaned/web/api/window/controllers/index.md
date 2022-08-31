---
title: Window.controllers
slug: orphaned/Web/API/Window/controllers
original_slug: Web/API/Window/controllers
---
{{APIRef}}{{non-standard_header}}

{{domxref("Window")}} 接口的 **`controllers`** 属性返回 chorme 窗口的 XUL 控制器。

## 语法

```
controllers = window.controllers
```

- `controllers` 是一个类型为 [`XULControllers`](/zh-CN/docs/XULControllers)（[`nsIControllers`](/zh-CN/docs/XPCOM_Interface_Reference/nsIControllers)）的对象。

## 规范

XUL-专有属性，不属于任何规范。

> **备注：** 默认情况下，窗口的控制器包含支持全局窗口命令的代码。
>
> chrome 代码可以添加控制器（与 globalOverlay.js 中的 `goDoCommand` 和 `goUpdateCommand` 函数配合使用）。
>
> 然而，浏览器窗口被关闭时，我们必须手动删除这些添加的控制器，因为浏览器并不会自动完成这些操作。
>
> 如果有忘记删除的控制器，则会导致错误：[bug 415775](https://bugzilla.mozilla.org/show_bug.cgi?id=415775)
>
> ```
> ASSERTION: XPConnect is being called on a scope without a 'Components' property!
> ```
