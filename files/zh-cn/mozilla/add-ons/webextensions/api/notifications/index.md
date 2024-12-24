---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

通过使用底层操作系统的通知机制向用户展现通知消息。由于此 API 使用操作系统的通知机制，通知的外观和行为细节可能会因操作系统和用户设置的不同而有所不同。

在 macOS 上，通知看起来像这样：

![在 macOS 上的示例通知：通知位于系统时钟下方，有一个粗体标题“Click notification”，接着是一段正常字体的文本“You clicked https://developer.mozilla.org/en-US/docs/MDN”。通知的左侧有 Firefox Nightly 的标志，右侧有一个链接图标。](notification-macos.png)

在 Windows 上，通知会一直保留在操作中心中，直到浏览器关闭，看起来是这样的：

![在 Windows 10 上的示例通知：位于系统时钟上方，有一个粗体标题“Click notification”，接着是一段正常字体的文本“You clicked https://developer.mozilla.org/en-US/docs/MDN”。通知的左上角有一个较小的 Firefox 的图标并跟着文本“Mozilla Firefox”，在通知正文内容左侧还有一个链接图标。](notification-windows.png)

要使用该 API，你需要预先取得“notifications”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : 定义通知的内容。
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : 通知的类型。例如可以定义通知是否可以包含图像。

### 函数

- {{WebExtAPIRef("notifications.clear()")}}
  - : 清除特定 ID 的通知。
- {{WebExtAPIRef("notifications.create()")}}
  - : 创建并显示一个新通知。
- {{WebExtAPIRef("notifications.getAll()")}}
  - : 获取所有通知。
- {{WebExtAPIRef("notifications.update()")}}
  - : 更新通知。

## 事件

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : 当用户点击通知中的按钮时触发。
- {{WebExtAPIRef("notifications.onClicked")}}
  - : 当用户点击通知但未点击按钮时触发。
- {{WebExtAPIRef("notifications.onClosed")}}
  - : 当通知关闭时触发（无论是系统关闭还是用户关闭）。
- {{WebExtAPIRef("notifications.onShown")}}
  - : 通知显示后立即触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
