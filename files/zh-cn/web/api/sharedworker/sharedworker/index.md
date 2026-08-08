---
title: SharedWorker：SharedWorker() 构造函数
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 03e3379cbad4f98a74021ad0753a41cd38d547fd
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> 传入 `url` 参数的脚本会被执行。此类 API 称为[注入汇点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)，可能成为[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的载体。
>
> 可通过设置[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)限制可加载脚本的位置，并始终传入 {{domxref("TrustedScriptURL")}} 对象而非字符串，同时[强制使用可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制可信类型)，以降低此风险。更多信息请参见 `Worker()` 构造函数中的[安全性考虑](/zh-CN/docs/Web/API/Worker/Worker#安全性考虑)。

**`SharedWorker()`** 构造函数创建一个 {{domxref("SharedWorker")}} 对象，用于执行指定 URL 处的脚本。

## 语法

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### 参数

- `url`
  - : 一个 {{domxref("TrustedScriptURL")}} 对象，或表示 worker 将执行的脚本或模块 URL 的字符串。该 URL 必须与调用方文档同源，或者是 `blob:` 或 `data:` URL。URL 相对于当前 HTML 页面的位置进行解析。
- `name` {{optional_inline}}
  - : 一个字符串，为表示该 worker 作用域的 {{domxref("SharedWorkerGlobalScope")}} 指定标识名称，便于创建同一 `SharedWorker` 的新实例以及调试。
- `options` {{optional_inline}}
  - : 创建对象实例时可设置的选项属性对象。可用属性如下：
    - `type`
      - : 指定要创建的 worker 类型的字符串。取值可为 `classic` 或 `module`。默认值为 `classic`。
    - `credentials`
      - : 指定向模块 worker 导入模块时浏览器是否发送凭据的字符串。允许的值与可传给 [`fetch()` 请求](/zh-CN/docs/Web/API/RequestInit#credentials)的值相同：`omit`、`same-origin` 或 `include`。默认值为 `same-origin`（仅对同源请求包含凭据）。

        对经典 worker 会忽略此选项。

    - `name`
      - : 一个字符串，为表示该 worker 作用域的 {{domxref("SharedWorkerGlobalScope")}} 指定标识名称，主要用于调试。
    - `extendedLifetime`
      - : 布尔值，表示在所有使用该共享 worker 的页面都已导航离开或关闭后，是否允许其再存活一小段时间。

        此选项用于在用户离开页面后仍能完成工作，例如将状态信息写入存储，或将分析数据发回服务器。worker 确切的存活时间取决于浏览器，可能在 10 秒到 5 分钟之间（Chrome 使用 30 秒）。

        更多信息请参见《使用 Web Worker》中的[共享 worker 的生命周期](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#共享_worker_的生命周期)。

    - `sameSiteCookies`
      - : 一个字符串，指示哪些 [`SameSite` cookie](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 应对该 worker 可用。可取以下两个值之一：
        - `'all'`
          - : `SameSite=Strict`、`SameSite=Lax` 和 `SameSite=None` cookie 对该 worker 均可用。
            此选项仅在第一方上下文中受支持，且为第一方上下文中的默认值。
        - `'none'`
          - : 仅 `SameSite=None` cookie 对该 worker 可用。
            此选项在第一方和第三方上下文中均受支持，且为第三方上下文中的默认值。

> [!WARNING]
> 一旦具有特定 URL 和 `name` 的共享 worker 正在运行，`type`、`credentials` 和 `extendedLifetime` 选项即被固定。若对同一脚本和 `name` 再构造新的共享 worker，并指定这些选项的不同值，将会出错。若同一脚本需要不同选项，请使用不同的 `name` 值启动两个 worker。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 在文档不允许启动 worker 时抛出，例如 URL 语法无效、违反同源策略，或当前上下文不支持给定的 `sameSiteCookies` 值。
- `NetworkError` {{domxref("DOMException")}}
  - : 在 worker 脚本的 MIME 类型不正确时抛出。其 MIME 类型*始终*应为 `text/javascript`（出于历史原因，[其他 JavaScript MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types#textjavascript)也可能被接受）。
- `SyntaxError` {{domxref("DOMException")}}
  - : 在无法解析 `url` 时抛出。
- `TypeError`
  - : 在[可信类型](/zh-CN/docs/Web/API/Trusted_Types_API)已由 [CSP 强制启用](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制可信类型)且未定义默认策略时，若 `url` 参数为字符串则抛出。

## 描述

**`SharedWorker()`** 构造函数创建一个 {{domxref("SharedWorker")}} 对象，用于执行指定 URL 处的经典脚本或模块。

该脚本必须与关联文档[同源](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)，但其自身可以导入跨源的脚本或模块（若 CORS 及其他限制允许）。
若需要跨源 worker，用户必须通过中间的同源 worker 或 blob 加载它。

更多信息请参见 `Worker()` 构造函数中的[描述](/zh-CN/docs/Web/API/Worker/Worker#描述)。

## 示例

为简洁起见，以下示例未使用[可信类型](/zh-CN/docs/Web/API/Trusted_Types_API)。在生产环境中，将源自用户的数据传入注入汇点时，代码应始终使用可信类型。

示例请参见 `Worker()` 构造函数示例中的[使用可信类型](/zh-CN/docs/Web/API/Worker/Worker#使用可信类型)。

### 基本用法

以下代码片段展示了如何使用 `SharedWorker()` 构造函数创建 {{domxref("SharedWorker")}} 对象，以及该对象的后续用法：

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("已向 worker 发送消息");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("已从 worker 收到消息");
};
```

完整示例请参见我们的[基本共享 worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[运行共享 worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）。

### 构造已在运行的 worker 将复用现有 worker

若使用与已在运行的共享 worker 相同的选项构造新的共享 worker，将复用现有的共享 worker。

```js
const worker1 = new SharedWorker("./worker.js");

// 这将为 worker2 复用 worker1
const worker2 = new SharedWorker("./worker.js");
```

### 使用选项构造共享 worker

以下代码片段展示了如何使用带有 `extendedLifetime` 选项的 `SharedWorker()` 构造函数创建 {{domxref("SharedWorker")}} 对象。

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

worker.addEventListener("error", (event) => {});
```

若受支持，在用户离开页面后，此共享 worker 仍会再存活一小段时间。

### 使用不同选项的共享 worker

此示例展示如何通过为每个共享 worker 指定唯一名称，以不同的构造函数选项启动它们。

首先演示对同一脚本和 `name` 使用不同选项时会发生什么。此代码会向控制台输出 `worker2 实例化时出错：`，因为一个实例设置了 `extendedLifetime` 选项，而另一个没有。若设置不同的 `type` 或 `credentials` 值，也会发生同样的情况。

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

// 使用不同选项构造同一共享 worker。
const worker2 = new SharedWorker("worker.js");

// 处理构造函数错误
worker2.addEventListener("error", (event) => {
  console.log(`worker2 实例化时出错：${event}`);
});
```

以下代码从同一脚本创建第二个 worker，但使用了不同的名称和选项。由于这两个共享 worker 不同，控制台不会记录错误。

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

// 启动 worker.js 的第二个实例
const worker2 = new SharedWorker("./worker.js", {
  name: "worker2",
  credentials: "omit",
});

worker2.port.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("SharedWorker")}} 接口。
