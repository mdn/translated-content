---
title: Notification.permission
slug: Web/API/Notification/permission
---

{{APIRef("Web Notifications")}}

`Notification` 的只读属性 permission 用来表明用户是否允许当前域显示 Web Notification。

{{AvailableInWorkers}}

## Syntax

```plain
var permission = Notification.permission;
```

### Value

permission 的类型为 {{domxref("DOMString")}} . 该属性的可能值为：

- `granted`: 用户已经明确的授予了显示通知的权限。.
- `denied`: 用户已经明确的拒绝了显示通知的权限。
- `default`: 用户还未被询问是否授权; 这种情况下权限将视为 `denied`.

## Examples

下面的代码片段详细的说明了，当你首次检查浏览器是否支持 Notification，然后检查当前域是否被授予了发送 Notification 的权限，并且在发送一个通知前进行请求的用法．

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Permissions_API","Permissions API")}}
