---
title: 使用 Web Notifications
slug: Web/API/Notifications_API/Using_the_Notifications_API
---

{{APIRef("Web Notifications")}}

[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 允许网页或应用程序在系统级别发送在页面外部显示的通知;这样即使应用程序空闲或在后台，Web 应用程序也会向用户发送信息。本文将介绍在您自己的应用程序中使用此 API 的基础知识。

{{AvailableInWorkers}}

通常，系统通知是指操作系统的标准通知机制，例如思考典型的桌面系统或移动设备如何发布通知。

![](android-notification.png)

![](mac-notification.png)

系统通知系统当然会因平台和浏览器而异，但无需担心，通知 API 被编写为通用的，足以与大多数系统通知系统兼容。

Web Notifications API 使页面可以发出通知，通知将被显示在页面之外的系统层面上（通常使用操作系统的标准通知机制，但是在不同的平台和浏览器上的表现会有差异）。这个功能使 web 应用可以向用户发送信息，即使应用处于空闲状态。最明显的用例之一是一个网页版电子邮件应用程序，每当用户收到了一封新的电子邮件都需要通知用户，即使用户正在使用另一个应用程序。

要显示一条通知，你需要先请求适当的权限，然后你可以实例化一个 {{domxref("Notification")}} 实例：

```js
Notification.requestPermission(function (status) {
  console.log(status); // 仅当值为 "granted" 时显示通知
  var n = new Notification("title", { body: "notification body" }); // 显示通知
});
```

## 请求权限

在应用可以发送通知之前，用户必须授予应用有权这么做。这是一个常见的要求，当一个 API 至少一次试图与 web 页外部进行交互时，用户不得不专门授予该应用程序有权限提出通知，从而让用户控制允许哪些应用程序或网站显示通知。

### 检查当前权限状态

你可以通过检查只读属性 {{domxref("Notification.permission")}} 的值来查看你是否已经有权限。该属性的值将会是下列三个之一：

- `default`
  - : 用户还未被询问是否授权，所以通知不会被显示。参看 [获得权限](#获得权限) 以了解如何请求显示通知的权限。
- `granted`
  - : 表示之前已经询问过用户，并且用户已经授予了显示通知的权限。
- `denied`
  - : 用户已经明确的拒绝了显示通知的权限。

> **备注：** Safari 和 Chrome (在 32 版本之前) 还没有实现 `permission` 属性。

### 获得权限

如果权限尚未被授予，那么应用不得不通过 {{domxref("Notification.requestPermission()")}} 方法让用户进行选择。这个方法接受一个回调函数，一旦用户回应了显示通知的请求，将会调用这个函数。

通常你应在你的应用首次初始化的时候请求显示通知的权限：

```js
window.addEventListener("load", function () {
  Notification.requestPermission(function (status) {
    // 这将使我们能在 Chrome/Safari 中使用 Notification.permission
    if (Notification.permission !== status) {
      Notification.permission = status;
    }
  });
});
```

> **备注：** Chrome 不允许你在 `load` 事件处理中调用 {{domxref("Notification.requestPermission()")}}（参见 [issue 274284](https://code.google.com/p/chromium/issues/detail?id=274284)）。

### Notification API 的清单权限

请注意 Notification API 不是 {{Glossary("privileged")}} 或 {{Glossary("certified")}}，因此当你在一个开放 web 应用中使用它时，你仍需要在你的 `manifest.webapp` 文件中包含以下项目：

```
"permissions": {
  "desktop-notification": {
    "description": "Needed for creating system notifications."
  }
}
```

> **备注：** 当安装应用程序时，你不需要通过上面的代码显式的请求权限，但您仍然需要在触发通知之前取得权限项。

## 创建通知

创建通知很简单，只需要用 {{domxref("Notification")}} 构造方法。这个构造函数需要一个用来显示在通知内的标题以及一些用来增强通知的选项，例如 {{domxref("Notification.icon","icon")}} 或文本 {{domxref("Notification.body","body")}}。

一旦通知被创建出来，它会立即被显示出来。为了跟踪通知当前的状态，在 {{domxref("Notification")}} 实例层面上会有 4 个事件被触发：

- {{domxref("Notification.show_event","show")}}
  - : 当通知被显示给用户时触发。
- {{domxref("Notification.click_event","click")}}
  - : 当用户点击通知时触发。
- {{domxref("Notification.close_event","close")}}
  - : 当通知被关闭时触发。
- {{domxref("Notification.error_event","error")}}
  - : 当通知发生错误的时候触发。这通常是因为通知由于某些原因而无法显示。

这些事件可以通过事件处理跟踪 {{domxref("Notification.onshow","onshow")}}、{{domxref("Notification.onclick","onclick")}}、{{domxref("Notification.onclose","onclose")}} 和 {{domxref("Notification.onerror","onerror")}}。因为 {{domxref("Notification")}} 同样继承自 {{domxref("EventTarget")}}，因此可以对它调用 {{domxref("EventTarget.addEventListener","addEventListener()")}} 方法。

> **备注：** Firefox 和 Safari 会在一定时间后自动关闭通知（大约 4 秒）。这也会发生在操作系统层面。
>
> 当然你也可以通过代码做到，调用 {{domxref("Notification.close()")}} 方法，就像下面的代码一样：
>
> ```js
> var n = new Notification("Hi!");
> n.onshow = function () {
>   setTimeout(n.close.bind(n), 5000);
> };
> ```
>
> 当你接收到一个“close”事件时，并不能保证这个通知是被用户关闭的。这是符合规范的，其中指出：“当一个通知被关闭时，通知的关闭动作都必须执行，不论是底层通知平台导致，还是用户导致。”

### 简单的示例

假定有如下的 HTML:

```html
<button>Notify me!</button>
```

它可能通过这样的方式处理通知：

```js
window.addEventListener("load", function () {
  // 首先，让我们检查我们是否有权限发出通知
  // 如果没有，我们就请求获得权限
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", function () {
    // 如果用户同意就创建一个通知
    if (window.Notification && Notification.permission === "granted") {
      var n = new Notification("Hi!");
    }

    // 如果用户没有选择是否显示通知
    // 注：因为在 Chrome 中我们无法确定 permission 属性是否有值，因此
    // 检查该属性的值是否是 "default" 是不安全的。
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }

        // 如果用户同意了
        if (status === "granted") {
          var n = new Notification("Hi!");
        }

        // 否则，我们可以让步的使用常规模态的 alert
        else {
          alert("Hi!");
        }
      });
    }

    // 如果用户拒绝接受通知
    else {
      // 我们可以让步的使用常规模态的 alert
      alert("Hi!");
    }
  });
});
```

这是实际的结果：

{{ EmbedLiveSample('简单的示例', '100%', 30) }}

## 处理重复的通知

某些情况下对于用户来说，显示大量通知是件令人痛苦的事情。比如，如果一个即时通信应用向用户提示每一条传入的消息。为了避免数以百计的不必要通知铺满用户的桌面，可能需要接管一个挂起消息的队列。

因此，需要为新建的通知添加一个标记。如果有一条通知也具有一个相同的标记，并且还没有被显示，那么这条新通知将会替换上一条通知。如果有一条通知具有一个相同的标记，并且已经显示出来了，那么上一条通知将会被关闭，新通知将会被显示出来。

### 使用标记的例子

假定有如下 HTML:

```html
<button>Notify me!</button>
```

它有可能通过这种方式处理的多个通知：

```js
window.addEventListener("load", function () {
  // 首先，我们检查是否具有权限显示通知
  // 如果没有，我们就申请权限
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", function () {
    // 如果用户同意接收通知，我们就尝试发送 10 条通知
    if (window.Notification && Notification.permission === "granted") {
      for (var i = 0; i < 10; i++) {
        // 感谢标记，我们应该只看到内容为 "Hi! 9" 的通知
        var n = new Notification("Hi! " + i, { tag: "soManyNotification" });
      }
    }

    // 如果用户没有选择是否同意显示通知
    // 注：由于在 Chrome 中不能确定 permission 属性是否有值，因此检查
    // 该属性值是否为 "default" 是不安全的。
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }

        // 如果用户同意
        if (status === "granted") {
          for (var i = 0; i < 10; i++) {
            // Thanks to the tag, we should only see the "Hi! 9" notification
            var n = new Notification("Hi! " + i, { tag: "soManyNotification" });
          }
        }

        // 否则改用 alert
        else {
          alert("Hi!");
        }
      });
    }

    // 如果用户拒绝
    else {
      // 改用 alert
      alert("Hi!");
    }
  });
});
```

实际效果如下：

{{ EmbedLiveSample('使用标记的例子', '100%', 30) }}

## 接收点击应用通知的通知

当用户点击一个由应用产生的通知时，视情况而定，你将会有两种方式被告知点击事件发生了：

1. 如果你的程序没有被关闭或转入后台，那么在你会收到一个点击事件。
2. 其他情况下会收到一条系统消息。

参考 [这个代码片段](https://github.com/mozilla/buddyup/commit/829cba7afa576052cf601c3e286b8d1981f93f45#diff-3) 作为例子，展示了如何处理。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{ domxref("Notification") }}
