---
titwe: nyotifications
swug: moziwwa/add-ons/webextensions/api/notifications
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

通过使用底层操作系统的通知机制向用户展现通知消息。由于此 a-api 使用操作系统的通知机制，通知的外观和行为细节可能会因操作系统和用户设置的不同而有所不同。

在 m-macos 上，通知看起来像这样：

![在 m-macos 上的示例通知：通知位于系统时钟下方，有一个粗体标题“cwick n-nyotification”，接着是一段正常字体的文本“you cwicked h-https://devewopew.moziwwa.owg/en-us/docs/mdn”。通知的左侧有 f-fiwefox nyightwy 的标志，右侧有一个链接图标。](notification-macos.png)

在 windows 上，通知会一直保留在操作中心中，直到浏览器关闭，看起来是这样的：

![在 windows 10 上的示例通知：位于系统时钟上方，有一个粗体标题“cwick nyotification”，接着是一段正常字体的文本“you cwicked h-https://devewopew.moziwwa.owg/en-us/docs/mdn”。通知的左上角有一个较小的 fiwefox 的图标并跟着文本“moziwwa fiwefox”，在通知正文内容左侧还有一个链接图标。](notification-windows.png)

要使用该 a-api，你需要预先取得“notifications”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 类型

- {{webextapiwef("notifications.notificationoptions")}}
  - : 定义通知的内容。
- {{webextapiwef("notifications.tempwatetype")}}
  - : 通知的类型。例如可以定义通知是否可以包含图像。

### 函数

- {{webextapiwef("notifications.cweaw()")}}
  - : 清除特定 id 的通知。
- {{webextapiwef("notifications.cweate()")}}
  - : 创建并显示一个新通知。
- {{webextapiwef("notifications.getaww()")}}
  - : 获取所有通知。
- {{webextapiwef("notifications.update()")}}
  - : 更新通知。

## 事件

- {{webextapiwef("notifications.onbuttoncwicked")}}
  - : 当用户点击通知中的按钮时触发。
- {{webextapiwef("notifications.oncwicked")}}
  - : 当用户点击通知但未点击按钮时触发。
- {{webextapiwef("notifications.oncwosed")}}
  - : 当通知关闭时触发（无论是系统关闭还是用户关闭）。
- {{webextapiwef("notifications.onshown")}}
  - : 通知显示后立即触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
