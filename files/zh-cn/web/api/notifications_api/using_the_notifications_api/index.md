---
title: 使用 Notifications API
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}}

[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 允许网页或应用程序以系统级别发送在页面外部显示的通知；这样即使应用程序空闲或在后台，Web 应用程序也会向用户发送信息。本文将介绍在你自己的应用程序中使用此 API 的基础知识。

通常，系统通知是指操作系统的标准通知机制，例如，思考典型的桌面系统或移动设备如何发布通知。

![桌面通知：通过 mdn.github.io 列出待办事项 嘿！你的任务“去购物”现已过期](desktop-notification.png)

系统通知系统当然会因平台和浏览器而异，但无需担心，通知 API 编写得足够通用，足以与大多数系统通知系统兼容。

{{AvailableInWorkers}}

## 示例

Web 通知最明显的用例之一是基于 Web 的邮件或 IRC 应用程序，即使用户正在使用另一个应用程序执行其他操作，它也需要在收到新消息时通知用户。现在存在许多这样的例子，例如 [Slack](https://slack.com/)。

我们编写了一个现实世界的示例——一个待办事项列表应用程序——来让你更多地了解如何使用 Web 通知。它使用 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 在本地存储数据，并在任务到期时使用系统通知通知用户。[下载待办事项列表代码](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)，或[查看实时运行的应用程序](https://mdn.github.io/dom-examples/to-do-notifications/)。

## 请求权限

在应用程序可以发送通知之前，用户必须授予应用程序这样做的权利。当 API 尝试与网页之外的内容进行交互时，这是一个常见的要求——用户至少需要专门授予该应用程序显示通知的权限一次，从而让用户控制哪些应用程序或站点允许显示通知。

由于过去滥用推送通知，网络浏览器和开发人员已开始实施策略来帮助缓解此问题。你应该仅请求同意显示通知以响应用户手势（例如：单击按钮）。这不仅是最佳实践（你不应该向用户发送他们不同意的通知），而且未来的浏览器将明确禁止未响应用户手势而触发的通知权限请求。例如，Firefox 从版本 72 开始就已经这样做了，Safari 也已经这样做了一段时间了。

此外，在 Chrome 和 Firefox 中，除非网站是安全上下文（即 HTTPS），否则你根本无法请求通知，并且你不能再从跨源 {{htmlelement("iframe")}} 请求通知权限。

### 检查当前权限状态

你可以通过检查只读属性 {{domxref("Notification.permission_static", "Notification.permission")}} 的值来查看你是否已经有权限。该属性的值将会是下列三个之一：

- `default`
  - : 用户还未被询问是否授权，所以通知不会被显示。
- `granted`
  - : 表示之前已经询问过用户，并且用户已经授予了显示通知的权限。
- `denied`
  - : 用户已经明确地拒绝了显示通知的权限。

### 获得权限

如果尚未授予显示通知的权限，则应用程序需要使用 {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} 方法向用户请求此权限。在最简单的形式中，我们只包含以下内容：

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

这使用了该方法的基于 Promise 的版本。如果你想支持旧版本，你可能必须使用旧的回调版本，如下所示：

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

回调版本可以选择接受一个回调函数，一旦用户响应了显示权限的请求，就会调用该回调函数。

> [!NOTE]
> 目前无法可靠地对 `Notification.requestPermission` 是否支持基于 Promise 的版本进行特性测试。如果你需要支持较旧的浏览器，只需使用基于回调的版本——尽管它已被弃用，但它仍然可以在新浏览器中使用。有关更多信息，请参阅[浏览器兼容性表](/zh-CN/docs/Web/API/Notification/requestPermission_static#浏览器兼容性)。

### 示例

在我们的待办事项列表演示中，我们包含一个“启用通知”按钮，按下该按钮时，会请求应用程序的通知权限。

```html
<button id="enable">启用通知</button>
```

单击此按钮将调用 `askNotificationPermission()` 函数：

```js
function askNotificationPermission() {
  // 检查浏览器是否支持通知
  if (!("Notification" in window)) {
    console.log("此浏览器不支持通知。");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // 根据用户的回答显示或隐藏按钮
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

首先查看第二个主要块，你会发现我们首先检查是否支持通知。如果支持的话，我们接着运行基于 Promise 的 `Notification.requestPermission()` 版本，否则在控制台输出一条消息。

为了避免重复代码，我们在 `handlePermission()` 函数中存储了一些内部代码，这是该代码段中的第一个主要块。在这里，我们明确设置了 `Notification.permission` 值（某些旧版本的 Chrome 无法自动执行此操作），并根据用户在权限对话框中选择的内容显示或隐藏按钮。如果已经授予许可，我们不想显示它，但如果用户选择拒绝许可，我们希望给他们稍后改变主意的机会。

在传递给 `then` 的 promise 解析处理器中，我们根据用户在权限对话框中选择的内容显示或隐藏按钮。如果已经授予许可，我们不想显示它，但如果用户选择拒绝许可，我们希望给他们稍后改变主意的机会。

## 创建通知

创建通知很简单，只需要用 {{domxref("Notification")}} 构造方法。这个构造方法需要一个用来显示在通知内的标题以及一些用来增强通知的选项，例如 {{domxref("Notification.icon","icon")}} 或文本 {{domxref("Notification.body","body")}}。

例如，在待办事项列表示例中，我们使用以下代码片段在需要时创建通知（可以在 `createNotification()` 函数中找到）：

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `嘿！您的任务“${title}”现已过期。`;
const notification = new Notification("待办列表", { body: text, icon: img });
```

## 关闭通知

使用 {{domxref("Notification.close","close()")}} 删除不再与用户相关的通知（例如，对于消息应用程序，用户已经阅读了网页上的通知） ，或者以下歌曲已在音乐应用程序中播放以通知歌曲更改）。大多数现代浏览器会在一段时间（大约四秒）后自动关闭通知，但这不是你通常应该关心的事情，因为它取决于用户和用户代理。删除通知也可能发生在操作系统级别，用户应该对此保持控制。旧版本的 Chrome 不会自动删除通知，因此你可以在 {{domxref("Window.setTimeout", "setTimeout()")}} 之后执行此操作，以免从其他浏览器的通知托盘中删除通知。

```js
const n = new Notification("我的歌");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // 该标签页已对用户可见，因此可以清除现已过时的通知。
    n.close();
  }
});
```

> [!NOTE]
> 此 API 不应仅用于在固定延迟后（在现代浏览器上）从屏幕上删除通知，因为此方法还会从任何通知托盘中删除通知，从而阻止用户在最初显示通知后与其进行交互。

> [!NOTE]
> 当你收到“关闭”事件时，无法保证是用户关闭了通知。这符合规范，其中规定：当底层通知平台或用户关闭通知时，必须运行其关闭步骤。

## 通知事件

{{domxref("Notification")}} 实例上会触发四个事件：

- `click`
  - : 当用户点击通知时触发。
- `close`
  - : 在通知关闭后触发。
- `error`
  - : 如果通知出现问题则触发；这通常是因为由于某种原因无法显示通知。
- `show`
  - : 当向用户显示通知时触发。

可以使用 {{domxref("Notification.click_event","onclick")}}、{{domxref("Notification.close_event","onclose")}}、{{domxref("Notification.error_event","onerror")}} 和 {{domxref("Notification.show_event","onshow")}} 处理器跟踪这些事件。因为 {{domxref("Notification")}} 也继承自 {{domxref("EventTarget")}}，所以可以使用 {{domxref("EventTarget.addEventListener","addEventListener()")}} 方法。

## 替换现有通知

用户通常不希望在短时间内收到大量通知——例如，如果消息应用程序通知用户每条传入消息，而这些消息发送量很大，该怎么办？为了避免向用户发送太多通知，可以修改待处理通知队列，用新通知替换单个或多个待处理通知。

为此，可以向任何新通知添加标签。如果通知已具有相同标签且尚未显示，则新通知将替换先前的通知。如果已显示具有相同标签的通知，则关闭上一个通知并显示新的通知。

### 标签示例

假设有以下基本 HTML：

```html
<button id="notify">提醒我！</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #ddd;
  overflow-x: auto;
  padding: 10px;
  margin-top: 10px;
}
```

可以通过这种方式处理多个通知：

```js
const demoLogs = document.querySelector("#demo-logs");

window.addEventListener("load", () => {
  const button = document.querySelector("#notify");

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      demoLogs.innerText += `该网站有显示通知的权限。正在显示通知。\n`;
      // 如果用户同意接收通知，让我们尝试发送十个通知
      let i = 0;
      // 使用时间间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
      const interval = setInterval(() => {
        // 由于 tag 参数，我们应该只能看到“来自 MDN 的第 9 个你好”通知
        const n = new Notification(`来自 MDN 的第 9 个你好。`, {
          tag: "soManyNotification",
        });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification?.permission !== "denied") {
      demoLogs.innerText += "请求通知许可。\n";
      // 如果用户没有告诉他们是否想要收到通知（注意：由于 Chrome，我们不确定是否设置了权限属性），因此检查“默认”值是不安全的。
      Notification.requestPermission().then((status) => {
        // 如果用户同意
        if (status === "granted") {
          demoLogs.innerText += "用户授予权限。正在发送通知。\n";
          let i = 0;
          // 使用间隔以避免某些浏览器（包括 Firefox）在特定时间内出现过多通知时会阻止通知
          const interval = setInterval(() => {
            // 由于 tag 参数，我们应该只能看到“来自 MDN 的消息 9。”通知
            const n = new Notification(`来自 MDN 的消息 ${i}。`, {
              tag: "soManyNotification",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // 否则，我们可以回退到常规模式的提醒
          demoLogs.innerText += `用户拒绝了权限请求。\n`;
        }
      });
    } else {
      // 如果用户拒绝收到通知，我们可以回退到常规模式的提醒
      demoLogs.innerText += `该站点没有显示通知的权限。\n`;
    }
  });
});
```

### 结果

{{ EmbedLiveSample('标签示例', '100%', 200) }}

为了测试上述示例，请更改 `https://live.mdnplay.dev` 网站的[发送通知设置](https://support.mozilla.org/zh-CN/kb/页面信息窗口#w_quan-xian)。

## 参见

- {{ domxref("Notification") }}
