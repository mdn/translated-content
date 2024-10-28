---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`HTMLFrameSetElement`** 接口提供用于操作 {{HTMLElement("frameset")}} 元素的特定属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : 一个以逗号分割的列表结构字符串，指定框架集中每列的宽度。
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : 一个以逗号分割的列表结构字符串，指定框架集中每列的高度。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 事件处理器

继承 {{domxref("HTMLElement")}} 事件。

以下 {{domxref("Window")}} `onXYZ` 事件处理器属性也可用作针对 `window` 对象的别名。然而，建议直接在 `window` 对象上而不是直接在 `HTMLFrameSetElement` 上监听它们。

> [!NOTE]
> 在 `HTMLFrameSetElement` 上使用 `addEventListener()` 对下面列出的 `onXYZ` 事件处理器不起作用。请监听 {{domxref("window")}} 对象上的事件。

- {{domxref("window.afterprint_event", "HTMLFrameSetElement.onafterprint")}}
  - : 在关联文档开始打印或打印预览关闭后触发。
- {{domxref("window.beforeprint_event", "HTMLFrameSetElement.onbeforeprint")}}
  - : 在关联文档即将打印或打印预览时触发。
- {{domxref("window.beforeunload_event", "HTMLFrameSetElement.onbeforeunload")}}
  - : 当窗口、文档及其资源即将卸载时触发。
- {{domxref("window.gamepadconnected_event", "HTMLFrameSetElement.ongamepadconnected")}}
  - : 当浏览器检测到游戏手柄已连接或首次使用游戏手柄的按钮/轴时触发。
- {{domxref("window.gamepaddisconnected_event", "HTMLFrameSetElement.ongamepaddisconnected")}}
  - : 当浏览器检测到游戏手柄已断开连接时触发。
- {{domxref("window.hashchange_event", "HTMLFrameSetElement.onhashchange")}}
  - : 当 URL 的片段标识符（URL 中以 `#` 符号开始及之后的部分）改变时触发。
- {{domxref("window.languagechange_event", "HTMLFrameSetElement.onlanguagechange")}}
  - : 当用户的首选语言改变时触发。
- {{domxref("window.message_event", "HTMLFrameSetElement.onmessage")}}
  - : 当窗口接收到消息（例如来自另一个浏览上下文的 [`Window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) 调用）时触发。
- {{domxref("window.messageerror_event", "HTMLFrameSetElement.onmessageerror")}}
  - : 当窗口接收到无法反序列的消息时触发。
- {{domxref("window.offline_event", "HTMLFrameSetElement.onoffline")}}
  - : 当浏览器失去网络访问权限且 {{domxref("Navigator.onLine")}} 的值变为 `false` 时触发。
- {{domxref("window.online_event", "HTMLFrameSetElement.ononline")}}
  - : 当浏览器获得网络访问权限且 {{domxref("Navigator.onLine")}} 的值变为 ` true` 时触发。
- {{domxref("window.pagehide_event", "HTMLFrameSetElement.onpagehide")}}
  - : 当浏览器在呈现会话历史中不同页面的过程中隐藏当前页面时触发。
- {{domxref("window.pageshow_event", "HTMLFrameSetElement.onpageshow")}}
  - : 当浏览器由于导航而显示 window 的文档时触发。
- {{domxref("window.popstate_event", "HTMLFrameSetElement.onpopstate")}}
  - : 当用户在导航会话历史时激活历史条目改变时触发。
- {{domxref("window.rejectionhandled_event", "HTMLFrameSetElement.onrejectionhandled")}}
  - : 每当一个 JavaScript {{jsxref("Promise")}} 被拒绝且拒绝已被处理时触发。
- {{domxref("window.storage_event", "HTMLFrameSetElement.onstorage")}}
  - : 当另一个文档的上下文中修改存储区域（`localStorage`）时触发。
- {{domxref("window.unhandledrejection_event", "HTMLFrameSetElement.onunhandledrejection")}}
  - : 每当一个 {{jsxref("Promise")}} 被拒绝但拒绝未被处理时触发。
- {{domxref("window.unload_event", "HTMLFrameSetElement.onunload")}}
  - : 当文档正在卸载时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("frameset")}}。
- 框架外此元素的等价元素：`HTMLFrameSetElement`。
