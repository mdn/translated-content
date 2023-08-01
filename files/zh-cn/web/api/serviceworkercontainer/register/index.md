---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} 接口的 **`register()`** 方法创建或更新一个给定 scriptURL 的[`ServiceWorkerRegistration`](/zh-CN/docs/Web/API/ServiceWorkerRegistration)。

如果成功，一个服务工作者注册将提供的脚本 URL 与一个范围进行关联，后者用于导航匹配。如果该方法无法返回一个 `ServiceWorkerRegistration`，则返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

您可以从受控页无条件调用此方法，即，您不需要首先检查是否有一个有效的注册。

## 语法

```js
ServiceWorkerContainer.register(scriptURL, options).then(
  function (ServiceWorkerRegistration) {
    // do something
  },
);
```

### 参数

- `scriptURL`
  - : service worker 脚本的 URL.
- `options` `{{optional_inline}}`

  - : 注册时提供选项的配置对象。目前可用的选项包括：

    - `scope`: 一个 {{domxref("USVString")}}，表示定义 service worker 注册范围的 URL；service worker 可以控制的 URL 范围。通常是相对 URL。默认值是基于当前的 location，并以此来解析传入的路径。

### 返回

返回一个 {{domxref("Promise")}} 对象，值是 {{domxref("ServiceWorkerRegistration")}}。

## 示例

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "./" })
    .then(function (registration) {
      document.querySelector("#status").textContent = "succeeded";
    })
    .catch(function (error) {
      document.querySelector("#status").textContent = error;
    });
} else {
  // The current browser doesn't support service workers.
  let aElement = document.createElement("a");
  aElement.href = `
     http://www.chromium.org/blink/serviceworker/service-worker-faq
  `;
  aElement.textContent = "unavailable";
  document.querySelector("#status").appendChild(aElement);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
