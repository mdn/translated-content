---
title: 通过通知推送让 PWA 可重用
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
---

{{PWASidebar}} {{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

以本地缓存实现离线应用是一个强大的特性。允许用户在主屏幕上安装 Web 应用程序则显得更了不起。但除了单纯依赖用户手动打开应用之外，我们还可以走得更远，利用通知和消息推送提高用户参与度，并且随时提供新的内容。

## 两个 API，一个目标

[推送 API](/zh-CN/docs/Web/API/Push_API)和[通知 API](/zh-CN/docs/Web/API/Notifications_API)是两个相互独立的 API，但在提高用户参与度这件事上，它们可以配合得很好。推送 API 可以用来从服务端推送新的内容而无需客户端介入，它是由应用的 Service Worker 来实现的；通知功能则可以通过 Service Worker 来向用户展示一些新信息，或者至少提醒用户应用已经更新了某些功能。

跟 Service Worker 一样，这些工作是在浏览器外部实现的，所以即使应用被隐藏到后台甚至被关闭了，我们仍然能够推送更新或者通知给用户。

## 通知

让我们先从通知 API 开始，它能够脱离推送 API 单独工作，但两者结合起来会非常的有用，我们先看看它单独能做什么。

### 请求授权

为了能够显示通知，我们需要先请求用户的授权。最佳的实践经验告诉我们，不应该直接请求授权，而应该引导用户点击一个按钮，然后才弹出授权窗口：

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

下面的图片展示了如何通过系统的通知服务显示一个授权窗口：

![js13kPWA 的授权窗口。](js13kpwa-notification.png)

当用户确定接收通知，应用就可以获得推送通知的功能。用户的授权的结果有三种，default（默认）、granted（允许）或者 denied（拒绝），当用户没有做出选择的时候，授权结果会返回 default，另外两种结果分别在用户选择了允许或者拒绝的时候返回。

一旦用户选择授权，这个授权结果对通知 API 和推送 API 两者都有效。

### 创建一个通知

我们的示例应用通过可用的数据来创建通知。随机选择一个游戏数据来填充通知的主体：用游戏的名称来作为通知的标题，通知的主体会提及游戏的作者，用游戏的图片来作为通知的图标：

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Created by " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

上述代码每隔三十秒会创建一个通知，直到用户觉得通知有点烦人并手动关闭掉它为止。一个真正的 App，对通知的频率必须进行严格的控制，通知内容也要更加有用才行。通知 API 的优势在于它使用了操作系统的通知功能，这意味着即使用户当前并没有在使用我们的应用，我们的通知也能够展示，它看起来跟一个原生应用发出的通知差不多。

## 推送

推送比通知要复杂一些，我们需要从服务端订阅一个服务，之后服务端会推送数据到客户端应用。应用的 Service Worker 将会接收到从服务端推送的数据，这些数据可以用来做通知推送，或者实现其他的需求。

这个技术还处在非常初级的阶段，一些可用示例使用了谷歌云的消息推送平台，但它们正在被重写以支持 [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) (Voluntary Application Identification)，它能为你的应用提供一层额外的安全防护。你可以看一下 [Service Workers Cookbook 里的一些例子](https://github.com/mdn/serviceworker-cookbook/push-payload.html)，尝试用 [Firebase](https://firebase.google.com/) 配置一个消息推送服务，或者构建自己的推送服务（例如使用 Node.js）。

之前提到，为了接收到推送的消息，你需要有一个 Service Worker，这部分的基础知识我们已经在文章[通过 Service workers 让 PWA 离线工作](/zh-CN/docs/Web/Apps/Progressive/Offline_Service_workers)里面解释过。在 Service Worker 内部，存在一个消息推送服务订阅机制。

```js
registration.pushManager.getSubscription().then(/* ... */);
```

一旦用户订阅了通知服务，他们就能接收到服务器推送的通知。

从服务端的角度来看，出于安全的目的，这整个过程必须使用非对称加密技术进行保护：允许任何人用你的应用发送未加密的消息就大有问题了。你可以通过阅读[Web 推送数据加密测试页](https://jrconlin.github.io/WebPushDataTestPage/)里面的详细信息来保护你的服务器。当用户订阅服务时，服务器会储存所有接收到的信息，以便在后续需要的时候能将信息推送出去。

为了能够接收到推送的消息，我们需要在 Service Worker 文件里面监听 {{domxref("ServiceWorkerGlobalScope.push_event", "push")}} 事件：

```js
self.addEventListener("push", function (e) {
  /* ... */
});
```

这些数据被接收后，将会以通知的方式立刻展现给用户，例如提醒用户一些待办事项，或者让用户知道 App 有了新内容。

### 推送例子

推送需要服务端，但因为应用托管在 GitHub 上，而 GitHub 只提供静态页面托管，我们没办法将服务端的例子包含进 js13kPWA 这个应用里面。[Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/) 这个页面上有详细的说明，demo 请看 [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/push-payload.html)。

这个 demo 包含三个文件：

- [index.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/index.js), 包含我们应用的源代码
- [server.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/server.js),包含服务端的源代码 (用 Node.js 编写)
- [service-worker.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/service-worker.js), 包含 Service Worker 的具体代码。

让我们一起看看这些代码：

#### index.js

index.js 的开头注册了 Service Worker：

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then(function (registration) {
    return registration.pushManager
      .getSubscription()
      .then(async function (subscription) {
        // 注册部分
      });
  })
  .then(function (subscription) {
    // 订阅部分
  });
```

这个 Service Worker 比我们在 [js13kPWA demo](https://mdn.github.io/pwa-examples/js13kpwa/) 看到的要稍微复杂一些。在这部分代码里，Service Worker 注册完成之后，我们使用 registration 对象来发起订阅，然后使用 subscription 对象来完成整个流程。

注册部分的代码看起来大致是这个样子：

```js
if (subscription) {
  return subscription;
}
```

如果用户已经完成订阅，我们直接返回 subscription 对象并且跳转到订阅部分。如果没有，我们会初始化一个新的 subscription 对象：

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

App 会从服务器请求一个公钥并且把响应结果转化成文本，最后它还需要转化成一个 Uint8Array（为了兼容 Chrome）。如果你想学习更多关于 VAPID 的内容可以阅读 [Sending VAPID identified WebPush Notifications via Mozilla’s Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) 这篇文章。

App 现在可以使用 {{domxref("PushManager")}} 来订阅新用户。这个方法支持传递两个参数：第一个是 `userVisibleOnly: true`，意思是发送给用户的所有通知对他们都是可见的，第二个是 `applicationServerKey`，这个参数包含我们之前从服务端取得并转化的 VAPID key。

```js
return registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

现在我们把注意力转移到订阅部分：App 首先使用 fetch 将 subscription 以 JSON 的方式发送给服务器。

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    subscription: subscription,
  }),
});
```

接着给“注册”按钮绑定了一个函数：

```js
document.getElementById("doIt").onclick = function () {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription: subscription,
      payload: payload,
      delay: delay,
      ttl: ttl,
    }),
  });
};
```

当按钮被点击的时候，`fetch` 会请求服务器根据给定的参数发送通知，`payload` 参数包含通知里面要显示的文本，`delay` 参数定义了通知将会延迟展示的秒数，`ttl` 是 time-to-live 的缩写，用来设置通知在服务器上的存活时间，依然是以秒为单位。

接着，我们进入下一个 JavaScript 文件。

#### server.js

服务端的代码是用 Node.js 编写的，它需要被托管在合适的地方。这部分内容已经够单独再写一篇文章了。所以这里我们只提供一个简单的概览。

[web-push](https://www.npmjs.com/package/web-push) 模块被用来配置 VAPID 密钥，如果没有的话，还可以生成一个。

```plain
const webPush = require('web-push');

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY "+
    "environment variables. You can use the following ones:");
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  'https://github.com/mdn/serviceworker-cookbook/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);
```

接着，一个模块定义并导出了所有应用需要处理的路由：获取 VAPID 公钥、注册、发送通知等等。你可以看到来自 `index.js` 的 `payload`, `delay` 和`ttl` 变量在这里被用到了。

```plain
module.exports = function(app, route) {
  app.get(route + 'vapidPublicKey', function(req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + 'register', function(req, res) {

    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function(req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl
    };

    setTimeout(function() {
      webPush.sendNotification(subscription, payload, options)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
      });
    }, req.body.delay * 1000);
  });
};
```

#### service-worker.js

最后我们要看的文件是 Service Worker。

```plain
self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.text() : 'no payload';
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: payload,
        })
    );
});
```

它做的就只是监听 {{domxref("ServiceWorkerGlobalScope.push_event", "push")}} 事件，创建 payload 变量，这个变量包含了来自 event.data 的文本（如果 data 是空的，就设置成 "no payload" 字符串），然后一直等到通知推送给用户为止。

如果你想知道它们具体是怎么处理的，请随意探索 [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/) 里面剩下的例子。[GitHub 上面提供了完整的源代码](https://github.com/mozilla/serviceworker-cookbook/)，也有大量的示例展示了各种用法，包括 Web 推送、缓存策略、性能、离线运行等等。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames/Loading", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
