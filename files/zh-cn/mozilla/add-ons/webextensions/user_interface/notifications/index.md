---
title: 通知
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
---

{{AddonSidebar}}

通知允许你使用底层操作系统提供的通知服务来传达有关你的扩展或其内容的信息。

![](notify-shadowed.png)

通知可以包含对动作的代码的调用，在你的扩展中，你可以监听通知的点击或者关闭事件。

## 声明通知

通过 {{WebExtAPIRef("notifications")}} API，你能够以编程的方式使用通知功能。在此之前，你需要在扩展的 manifest.json 中声明 `notifications` 权限。

```json
"permissions": ["notifications"]
```

接下来，你可以使用 {{WebExtAPIRef("notifications.create")}} 来创建一个通知，这里有一个来自 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) 的简单示例：

```js
const title = browser.i18n.getMessage("notificationTitle");
const content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  type: "basic",
  iconUrl: browser.extension.getURL("icons/link-48.png"),
  title,
  message: content,
});
```

上述代码会创建一个带有图标、标题和内容的通知。

倘若通知包含对动作的代码的调用，你可以通过监听通知的点击事件来处理：

```js
browser.notifications.onClicked.addListener(handleClick);
```

如果你需要获取被点击的通知的来源，你可能需要定义通知的 `id`，这样一来，你就能够知道具体是哪个通知被用户点击了。

## 图标

想要了解关于创建通知图标的更多细节，可以参阅 [Photon Design System](https://design.firefox.com/photon/index.html) 文档中的 [Iconography](https://design.firefox.com/photon/visuals/iconography.html) 章节。

## 示例

GitHub 仓库 [webextensions-examples](https://github.com/mdn/webextensions-examples) 中包含了通知的实现示例 [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)
