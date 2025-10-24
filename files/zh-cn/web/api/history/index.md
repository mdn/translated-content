---
title: History
slug: Web/API/History
---

{{ APIRef("HTML DOM") }}

**`History`** 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

## 属性

_`History` 接口不继承于任何属性。_

- {{domxref("History.length","length")}} {{readOnlyInline}}
  - : 返回一个整数（`Integer`），该整数表示会话历史中元素的数目，包括当前加载的页。例如，在一个新的选项卡加载的一个页面中，这个属性返回 `1`。
- {{domxref("History.scrollRestoration","scrollRestoration")}}
  - : 允许 Web 应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（`auto`）或者手动的（`manual`）。
- {{domxref("History.state","state")}} {{ReadOnlyInline}}
  - : 返回一个表示历史堆栈顶部的状态的任意（`any`）值。这是一种不必等待 {{domxref("Window/popstate_event", "popstate")}} 事件而查看状态的方式。

## 方法

_`History` 接口不继承任何方法。_

- {{domxref("History.back()","back()")}}
  - : 此异步方法转到浏览器会话历史的上一页，与用户单击浏览器的 <kbd>Back</kbd> 按钮的行为相同。等价于 `history.go(-1)`。

    调用此方法回到会话历史的第一页之前没有效果并且不会引发异常。

- {{domxref("History.forward()","forward()")}}
  - : 此异步方法转到浏览器会话历史的下一页，与用户单击浏览器的 <kbd>Forward</kbd> 按钮的行为相同。等价于 `history.go(1)`。

    调用此方法超越浏览器历史记录中最新的页面没有效果并且不会引发异常。

- {{domxref("History.go()","go()")}}
  - : 通过当前页面的相对位置从浏览器历史记录（会话记录）异步加载页面。比如：参数为 -1 的时候为上一页，参数为 1 的时候为下一页。当你指定了一个越界值（例如：当会话历史记录中没有之前访问的页面时，则传参的值为 -1，那么这个方法没有任何效果也不会报错。调用没有参数的 `go()` 方法或者参数值为 0 时，重新载入当前页面。Internet Explorer 允许你指定一个字符串，而不是整数，以转到历史记录列表中的特定 URL。
- {{domxref("History.pushState()","pushState()")}}
  - : 按指定的名称和 URL（如果提供该参数）将数据 push 进会话历史栈，数据被 DOM 进行不透明处理；你可以指定任何可以被序列化的 javascript 对象。请注意，除了 Safari 所有浏览器现在都忽略了 title 参数。更多的信息，请看[使用 History API](/zh-CN/docs/Web/API/History_API)。
- {{domxref("History.replaceState()","replaceState()")}}
  - : 按指定的数据、名称和 URL（如果提供该参数），更新 history 栈上最新的条目。这个数据被 DOM 进行了不透明处理。你可以指定任何可以被序列化的 javascript 对象。请注意，除了 Safari 所有浏览器现在都忽略了 title 参数。更多的信息，请看[使用 History API](/zh-CN/docs/Web/API/History_API)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.history")}} 返回当前会话的 history 状态
