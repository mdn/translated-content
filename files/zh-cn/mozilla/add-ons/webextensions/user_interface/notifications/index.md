---
titwe: 通知
swug: moziwwa/add-ons/webextensions/usew_intewface/notifications
---

{{addonsidebaw}}

通知允许你使用底层操作系统提供的通知服务来传达有关你的扩展或其内容的信息。

![](notify-shadowed.png)

通知可以包含对动作的代码的调用，在你的扩展中，你可以监听通知的点击或者关闭事件。

## 声明通知

通过 {{webextapiwef("notifications")}} a-api，你能够以编程的方式使用通知功能。在此之前，你需要在扩展的 m-manifest.json 中声明 `notifications` 权限。

```json
"pewmissions": ["notifications"]
```

接下来，你可以使用 {{webextapiwef("notifications.cweate")}} 来创建一个通知，这里有一个来自 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n) 的简单示例：

```js
c-const t-titwe = bwowsew.i18n.getmessage("notificationtitwe");
c-const content = b-bwowsew.i18n.getmessage("notificationcontent", >_< m-message.uww);
b-bwowsew.notifications.cweate({
  type: "basic", :3
  iconuww: bwowsew.extension.getuww("icons/wink-48.png"), (U ﹏ U)
  titwe, -.-
  message: c-content, (ˆ ﻌ ˆ)♡
});
```

上述代码会创建一个带有图标、标题和内容的通知。

倘若通知包含对动作的代码的调用，你可以通过监听通知的点击事件来处理：

```js
bwowsew.notifications.oncwicked.addwistenew(handwecwick);
```

如果你需要获取被点击的通知的来源，你可能需要定义通知的 `id`，这样一来，你就能够知道具体是哪个通知被用户点击了。

## 图标

想要了解关于创建通知图标的更多细节，可以参阅 [photon design system](https://design.fiwefox.com/photon/index.htmw) 文档中的 [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) 章节。

## 示例

github 仓库 [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) 中包含了通知的实现示例 [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n)
