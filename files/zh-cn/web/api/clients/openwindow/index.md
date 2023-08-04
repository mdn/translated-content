---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("Clients")}}接口的 **`openWindow()`** 方法创建一个顶级的浏览器上下文并加载给定的 URL. 如果调用脚本没有显示弹出窗口的权限， **`openWindow()`** 将抛出 InvalidAccessError.

在 Firefox 中，只有在作为通知点击事件的结果调用时，才允许该方法显示弹出窗口。

在 Chrome for Android 中，该方法可以改为在先前添加到用户主屏幕的 [standalone web app](/zh-CN/Apps/Progressive/Installable) 提供的现有浏览上下文中打开 URL.

## 语法

```js
ServiceWorkerClients.openWindow(url).then(function (WindowClient) {
  // do something with your WindowClient
});
```

### 参数

- `url`
  - : 一个 {{domxref("USVString")}}，表示要在窗口中打开的 client 的 URL。通常，此值必须是与调用脚本有相同域的 URL.

### 返回值

如果 URL 来自与服务工作者相同的域，则 resolve 为 {{domxref("WindowClient")}} 对象的 Promise，否则 resolve 为 {{Glossary("null", "null value")}}.

## 示例

```js
// When the user clicks a notification focus the window if it exists or open
// a new one otherwise.
onotificationclick = function (event) {
  var found = false;
  clients.matchAll().then(function (clientsArr) {
    for (i = 0; i < clientsArr.length; i++) {
      if (clientsArr[i].url === event.data.url) {
        // We already have a window to use, focus it.
        found = true;
        clientsArr[i].focus();
        break;
      }
    }
    if (!found) {
      // Create a new window.
      clients.openWindow(event.data.url).then(function (windowClient) {
        // do something with the windowClient.
      });
    }
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
