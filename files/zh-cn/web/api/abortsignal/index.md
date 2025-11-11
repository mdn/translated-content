---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortSignal`** 接口表示一个信号对象，它允许你通过 {{domxref("AbortController")}} 对象与异步操作（如 Fetch 请求）进行通信并在需要时将其中止。

{{InheritanceDiagram}}

## 实例属性

_也继承了其父接口 {{domxref("EventTarget")}} 的属性。_

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : 一个 {{domxref("Boolean")}}，表示与之通信的请求是否被中止（`true`）或未中止（`false`）。
- {{domxref("AbortSignal.reason")}} {{readonlyInline}}
  - : 一旦信号被中止，提供一个使用 JavaScript 值表示的中止原因。

## 静态方法

_也继承其父接口 {{domxref("EventTarget")}} 的方法。_

- {{domxref("AbortSignal/abort_static", "AbortSignal.abort()")}}
  - : 返回一个已经被设置为中止的 `AbortSignal` 实例。
- {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}
  - : 返回一个在任意给定的中止信号时中止时中止的 `AbortSignal` 实例。
- {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : 返回一个在指定时间后自动中止的 `AbortSignal` 实例。

## 实例方法

_也继承其父接口 {{domxref("EventTarget")}} 的方法。_

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : 如果信号已经被中止，则抛出信号中止的 {{domxref("AbortSignal.reason", "reason")}}；否则什么也不做。

## 事件

_也继承其父接口 {{domxref("EventTarget")}} 的事件。_

使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 或将事件监听器分配给该接口的 `oneventname` 属性。

- {{domxref("AbortSignal/abort_event", "abort")}}
  - : 当与信号通信的异步操作中止时调用。也可以通过 `onabort` 属性调用。

## 示例

### 使用显式的信号中止 fetch 操作

以下片段展示了我们如何使用信号去中止使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 下载视频。

我们首先使用 {{domxref("AbortController.AbortController", "AbortController()")}} 创建一个中止控制器，然后使用 {{domxref("AbortController.signal")}} 属性获取与它关联的 `AbortSignal` 对象的引用。

当 [fetch 请求](/zh-CN/docs/Web/API/Window/fetch)开始时，我们将 `AbortSignal` 作为一个选项传递进请求的 option 对象中（见下面的 `{signal}`）。这个将信号和控制器与 fetch 请求相关联，并且允许我们通过调用 {{domxref("AbortController.abort()")}} 中止它。你可以看见当中止按钮（`abortBtn`）被点击时，第二个事件监听器触发，使 fetch 操作被中止。

当 `abort()` 被调用时，`fetch()` promise 将以名为 `AbortError` 的 `DOMException` 拒绝。

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("下载已中止");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("下载完毕", response);
    // 进一步处理请求
  } catch (err) {
    console.error(`下载出现错误：${err.message}`);
  }
}
```

如果在 `fetch()` 调用兑现后但在读取响应体之前中止了请求，那么尝试读取响应体时将出现 `AbortError` 异常。

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // 下一行代码将抛出 `AbortError`
  const text = await response.text();
  console.log(text);
}
```

你可以[在 GitHub 上找到一个完整、可运行的示例](https://github.com/mdn/dom-examples/tree/main/abort-api)；你也可以参见[在线演示](https://mdn.github.io/dom-examples/abort-api/)。

### 中止超时的读取操作

如果你需要中止一个超时的操作，你可以使用 {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} 静态方法。该方法返回一个在指定的毫秒时间后后自动超时的 `AbortSignal`。

以下代码片段展示了如何成功地下载一个文件或者在五秒钟后处理一个超时的错误。注意，当出现超时时，`fetch()` promise 会以 `TimeoutError` `DOMException` 拒绝。这允许代码区分超时（可能需要通知用户）和用户手动中止操作。

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("超时：获取结果的事件超过了 5 秒！");
  } else if (err.name === "AbortError") {
    console.error("Fetch 操作被用户中止（如浏览器停止按钮、关闭标签等）");
  } else {
    // 网络错误，或其他问题
    console.error(`错误：类型：${err.name}，消息：${err.message}`);
  }
}
```

### 超时或显式中止 fetch

如果要从多个信号中中止，可以使用 {{domxref("AbortSignal/any_static", "AbortSignal.any()")}} 将它们合并为一个信号。下面的示例使用 {{domxref("Window/fetch", "fetch")}} 进行了演示：

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // 任意一个信号中止时，整个操作会被中止
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // 通知用户操作中止
  } else if (e.name === "TimeoutError") {
    // 通知用户超时
  } else {
    // 网络错误，或其他问题
    console.log(`类型：${e.name}，消息：${e.message}`);
  }
}
```

> [!NOTE]
> 与使用 {{domxref("AbortSignal.timeout()")}} 不同，没有方法来判断最终中止是否由超时引起。

### 实现可中止的 API

需要支持中止的 API 可以接受一个 `AbortSignal` 对象，并在需要时使用其状态来触发中止信号处理。

基于 {{jsxref("Promise")}} 的 API 应对中止信号做出响应，拒绝任何未确定的承诺，并使用 `AbortSignal` 中止 {{domxref("AbortSignal.reason", "reason")}}。例如，请看下面的 `myCoolPromiseAPI`，它接收一个信号并返回一个 promise。如果信号已被中止，或检测到中止事件，则会立即拒绝该 promise。否则，它将正常完成，然后兑现 promise。

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // 如果信号已经被中止，立即抛出错误，以拒绝 promise
    if (signal.aborted) {
      reject(signal.reason);
    }

    // 执行 API 主要的目标
    // 当完成时调用 resolve(result)

    // 监听 'abort' 信号
    signal.addEventListener("abort", () => {
      // 停止主要任务
      // 以中止理由拒绝 promise
      reject(signal.reason);
    });
  });
}
```

API 可能的用法如下。请注意在中止操作时调用了 {{domxref("AbortController.abort()")}}。

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* …, */ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

不返回 promise 的 API 接口可能会以类似的方式做出反应。在某些情况下，接收信号可能是有意义的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [可中止的 Fetch](https://developer.chrome.google.cn/blog/abortable-fetch/)，来自 Jake Archibald
