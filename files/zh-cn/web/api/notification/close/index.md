---
title: Notification：close() 方法
slug: Web/API/Notification/close
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`close()`** 方法用于关闭或移除一个先前显示的通知。

> [!NOTE]
> 不应仅仅为了在固定延迟后从屏幕上移除通知而使用此 API，因为此方法还将从任何通知托盘中删除该通知，防止用户在最初显示后与其交互。此 API 的有效用途是移除不再相关的通知（例如，用户已经阅读了消息应用程序在网页上的通知；或者音乐应用程序中已经在播放下一首歌曲）。

## 语法

```js-nolint
close()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在下面的代码片段中，我们有一个简单的函数，当调用时创建一个 `options` 对象，然后创建一个新的通知。在函数的最后，它在 {{domxref("EventTarget.addEventListener","addEventListener()")}} 函数中调用 `close()` 以在网页上阅读相关内容后移除该通知。

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
    body: theBody,
    icon: theIcon,
  };

  const n = new Notification(theTitle, options);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // 该选项卡已变得可见，因此清除了现在过时的通知。
      n.close();
    }
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
