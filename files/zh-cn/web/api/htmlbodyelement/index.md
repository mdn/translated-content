---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLBodyElement`** 接口提供了用于操作 {{HtmlElement("body")}} 元素的特定属性（除继承自 {{domxref("HTMLElement")}} 接口的属性以外）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : 一个表示活动链接颜色的字符串。
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : 一个表示背景图片资源位置的字符串。注意，这不是 URI，尽管一些旧版浏览器可能会期望它是。
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : 一个表示文档背景颜色的字符串。
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : 一个表示未访问链接颜色的字符串。
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : 一个表示文本前景色的字符串。
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : 一个表示已访问链接颜色的字符串。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 事件处理器

从 {{domxref("HTMLElement")}} 继承事件。

以下以 {{domxref("Window")}} 为目标的 `onXYZ` 事件处理器属性同样在 `window` 对象这一别名目标上可用。但建议直接在 `window` 对象上监听这些事件，而不是在 `HTMLBodyElement` 上。

> [!NOTE]
> 对于以下的 `onXYZ` 事件处理器，在 `HTMLBodyElement` 上使用 `addEventListener()` 将不会生效。请在 {{domxref("window")}} 对象上监听这些事件。

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : 在关联的文档开始打印或打印预览关闭后触发。
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : 在关联的文档即将打印或预览打印时触发。
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : 在窗口、文档及其资源即将被卸载时触发。
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : 在浏览器检测到游戏手柄已连接或首次使用游戏手柄的按钮/轴时触发。
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : 在浏览器检测到游戏手柄已断开连接时触发。
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : 在 URL 的片段标识符（URL 中以 `#` 符号开头和紧跟的部分）发生变化时触发。
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : 在用户首选语言发生变更时触发。
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : 在窗口接收到消息时触发，例如来自另一个浏览上下文的 [`Window.postMessage()`](/zh-CN/docs/Web/API/Window/postMessage) 调用。
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : 在窗口接收到无法反序列化的消息时触发。
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : 在浏览器失去网络连接且 {{domxref("Navigator.onLine")}} 的值变为 `false` 时触发。
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : 在浏览器获得网络连接且 {{domxref("Navigator.onLine")}} 的值变为 `true` 时触发。
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : 在浏览器在呈现会话历史中的不同页面而隐藏当前页面时触发。
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : 在浏览器由于导航而显示窗口的文档时触发。
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : 在用户导航会话历史而使活动历史条目发生变化时触发。
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : 在 JavaScript {{jsxref("Promise")}} 被拒绝且拒绝已被处理时触发。
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : 在另一个文档的上下文中修改存储区（`localStorage`）时触发。
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : 在 JavaScript {{jsxref("Promise")}} 被拒绝且拒绝未被处理时触发。
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : 在文档被卸载时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了此接口的 HTML 元素：{{ HTMLElement("body") }}
