---
title: History
slug: Web/API/History
---
{{ APIRef("HTML DOM") }}

**`History`** 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。

## 属性

_`History`_ _接口不继承于任何属性。_

- {{domxref("History.length")}} {{readOnlyInline}}
  - : 返回一个整数，该整数表示会话历史中元素的数目，包括当前加载的页。例如，在一个新的选项卡加载的一个页面中，这个属性返回 1。
- {{domxref("History.scrollRestoration")}} {{experimental_inline}}
  - : 允许 Web 应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）。
- {{domxref("History.state")}} {{readOnlyInline}}
  - : 返回一个表示历史堆栈顶部的状态的值。这是一种可以不必等待{{event("popstate")}} 事件而查看状态的方式。

## 方法

_History 接口不继承任何方法。_

- {{domxref("History.back()")}}

  - : 在浏览器历史记录里前往上一页，用户可点击浏览器左上角的返回 (译者注：←) 按钮模拟此方法。等价于 `history.go(-1)`.

    > **备注：** 当浏览器会话历史记录处于第一页时调用此方法没有效果，而且也不会报错。

- {{domxref("History.forward()")}}

  - : 在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进 (译者注：→) 按钮模拟此方法。等价于 `history.go(1)`.

    > **备注：** 当浏览器历史栈处于最顶端时 ( 当前页面处于最后一页时 ) 调用此方法没有效果也不报错。

- {{domxref("History.go()")}}
  - : 通过当前页面的相对位置从浏览器历史记录 ( 会话记录 ) 加载页面。比如：参数为-1 的时候为上一页，参数为 1 的时候为下一页。当整数参数超出界限时 ( 译者注：原文为 When `integerDelta` is out of bounds )，例如：如果当前页为第一页，前面已经没有页面了，我传参的值为-1，那么这个方法没有任何效果也不会报错。调用没有参数的 `go()` 方法或者参数值为 0 时，重新载入当前页面。( 这点与支持字符串作为 url 参数的 IE 有点不同)。
- {{domxref("History.pushState()")}}

  - : 按指定的名称和 URL（如果提供该参数）将数据 push 进会话历史栈，数据被 DOM 进行不透明处理；你可以指定任何可以被序列化的 javascript 对象。注意到 Firefox 现在忽略了这个 title 参数，更多的信息，请看[manipulating the browser history](/zh-CN/docs/Web/API/History_API)。

    > **备注：** 在 Gecko 2.0 {{ geckoRelease("2.0") }} 到 Gecko 5.0 {{ geckoRelease("5.0") }}中， 被传递的对象使用 JSON 进行序列化。从 Gecko 6.0 {{ geckoRelease("6.0") }}开始，使用[结构化克隆算法](/en/DOM/The_structured_clone_algorithm)进行序列化。这样，就可以让更多类型的对象被安全地传输。

- {{domxref("History.replaceState()")}}

  - : 按指定的数据，名称和 URL(如果提供该参数)，更新历史栈上最新的入口。这个数据被 DOM 进行了不透明处理。你可以指定任何可以被序列化的 javascript 对象。注意到 Firefox 现在忽略了这个 title 参数，更多的信息，请看[manipulating the browser history](/zh-CN/docs/Web/API/History_API)。

    > **备注：** 在 Gecko 2.0 {{ geckoRelease("2.0") }} 到 Gecko 5.0 {{ geckoRelease("5.0") }} 中，the passed object is serialized using JSON. Starting in Gecko 6.0 {{ geckoRelease("6.0") }}, the object is serialized using [the structured clone algorithm](/en/DOM/The_structured_clone_algorithm). This allows a wider variety of objects to be safely passed.

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat("api.History")}}

## 其他

- {{domxref("Window.history")}} 返回当前会话的 history 状态
