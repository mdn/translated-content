---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{DefaultAPISidebar("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**Background Fetch API** 提供了一种管理可能需要较长时间的下载（例如电影、音频文件和软件）的方法。

## 概念和用法

当 web 应用程序需要用户下载大文件时，通常会面临一个问题，即用户需要保持与页面的连接才能完成下载。如果他们失去连接、关闭标签页或离开页面，下载就会停止。

{{domxref("Background Synchronization API", "", "", "nocode")}} 提供了一种让 service worker 推迟处理直到用户连接的方法；但它不能用于长时间运行的任务，例如下载大文件。后台同步要求 service worker 保持活动状态直到 fetch 完成，并且为了节省电池寿命并防止在后台发生不必要的任务，浏览器在某个时候会终止任务。

Background Fetch API 解决了这个问题。它为 Web 开发人员创建了一种告诉浏览器在后台执行某些 fetch 的方法，例如当用户点击按钮下载视频文件时。浏览器以用户可见的方式执行 fetch，向用户显示进度并提供取消下载的方法。一旦下载完成，浏览器就会打开 service worker，此时你的应用程序可以根据需要对响应执行某些操作。

如果用户在离线状态下开始下载的过程，Background Fetch API 将启用 fetch 操作。一旦用户重新连接，它就会开始。如果用户离线，进程将暂停，直到用户再次联网。

## 接口

- {{domxref("BackgroundFetchManager")}} {{Experimental_Inline}}
  - : 一个映射，其中键是后台 fetch 的 ID，值是 {{domxref("BackgroundFetchRegistration")}} 对象。
- {{domxref("BackgroundFetchRegistration")}} {{Experimental_Inline}}
  - : 表示一个后台 fetch。
- {{domxref("BackgroundFetchRecord")}} {{Experimental_Inline}}
  - : 表示一个单独的 fetch 请求和响应。
- {{domxref("BackgroundFetchEvent")}} {{Experimental_Inline}}
  - : {{domxref("ServiceWorkerGlobalScope.backgroundfetchabort_event", "backgroundfetchabort")}} 和 {{domxref("ServiceWorkerGlobalScope.backgroundfetchclick_event", "backgroundfetchclick")}} 事件的事件类型。
- {{domxref("BackgroundFetchUpdateUIEvent")}} {{Experimental_Inline}}
  - : {{domxref("ServiceWorkerGlobalScope.backgroundfetchsuccess_event", "backgroundfetchsuccess")}} 和 {{domxref("ServiceWorkerGlobalScope.backgroundfetchfail_event", "backgroundfetchfail")}} 事件的事件类型。

### 对其他接口的拓展

- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("BackgroundFetchManager")}} 对象的引用，该对象管理后台 fetch 操作。
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} 事件 {{Experimental_Inline}}
  - : 当用户或应用程序取消了后台 fetch 操作时触发。
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} 事件 {{Experimental_Inline}}
  - : 当用户点击后台 fetch 操作的 UI 时触发。
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchfail_event", "backgroundfetchfail")}} 事件 {{Experimental_Inline}}
  - : 当后台 fetch 操作中至少有一个请求失败时触发。
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchsuccess_event", "backgroundfetchsuccess")}} 事件 {{Experimental_Inline}}
  - : 当后台 fetch 操作中的所有请求成功时触发。

## 示例

在使用 Background Fetch 之前，请检查浏览器是否支持。

```js
if (!("BackgroundFetchManager" in self)) {
  // 提供回退下载。
}
```

使用 Background Fetch 需要注册 service worker。然后调用 `backgroundFetch.fetch()` 执行 fetch。这将返回一个会兑现 {{domxref("BackgroundFetchRegistration")}} 的 Promise。

后台 fetch 可能会获取多个文件。在我们的示例中，fetch 请求了一个 MP3 文件和一个 JPEG 文件。这样可以一次下载用户视为一个项目的文件包（例如播客和艺术品）。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

你可以在[此处](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45)找到一个实现了 Background Fetch 的演示应用程序。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [介绍 Background Fetch](https://developer.chrome.google.cn/blog/background-fetch)
- [Background Fetch——HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
