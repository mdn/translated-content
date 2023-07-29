---
title: AbortSignal
slug: Web/API/AbortSignal
---

{{APIRef("DOM")}}

**`AbortSignal`** 接口表示一个信号对象（signal object），它允许你通过 {{domxref("AbortController")}} 对象与 DOM 请求（如 Fetch）进行通信并在需要时将其中止。

## 属性

_AbortSignal 接口还继承了其父接口 {{domxref("EventTarget")}} 的属性。_

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : 一个 {{domxref("Boolean")}}，表示与之通信的请求是否被终止（`true`）或未终止（`false`）。
- {{domxref("AbortSignal.reason")}} {{readonlyInline}}
  - : 一旦信号被中止，提供一个使用 JavaScript 值表示的中止原因。

## 方法

_**`AbortSignal`** 接口继续它父接口 {{domxref("EventTarget")}} 的方法。_

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : 如果信号已经被中止，则抛出信号中止的 {{domxref("AbortSignal.reason", "reason")}}；否则没有任何用处。

## 静态方法

- {{domxref("AbortSignal.abort()")}}
  - : 返回一个已经被设置为中止的 **`AbortSignal`** 实例。
- {{domxref("AbortSignal.timeout()")}}
  - : 返回一个在指定事件后将自动终止的 **`AbortSignal`** 实例。

### 事件

使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或将事件监听器分配给该接口的 `oneventname` 属性。

- [`abort`](/zh-CN/docs/Web/API/AbortSignal/abort_event)
  - : 当与 signal 通信 DOM 请求被中止时调用。也可以通过 `onabort` 属性调用。

## 示例

### 使用显式的信号终止 fetch 操作

以下片段展示了我们如何使用 signal 去中止使用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 下载视频。

我们首先使用 {{domxref("AbortController.AbortController", "AbortController()")}} 创建一个中止控制器，然后使用 {{domxref("AbortController.signal")}} 属性获取与它关联的 {{domxref("AbortSignal")}} 对象的引用。

当 [fetch 请求](/zh-CN/docs/Web/API/fetch)开始时，我们将 `AbortSignal` 作为一个选项传递进请求的 option 对象中（见下面的 `{signal}`）。这个将信号和控制器与 fetch 请求相关联，并且允许我们通过调用 {{domxref("AbortController.abort()")}} 中止它。你可以看见当中止按钮（`abortBtn`）被点击时，第二个事件监听器触发，使 fetch 操作被中止。

```js
const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> **备注：** 当调用 `abort()` 时，`fetch()` promise 会以“`AbortError`”`DOMException` 拒绝。

你可以[在 GitHub 上找到一个完整、可运行的示例](https://github.com/mdn/dom-examples/tree/main/abort-api)；你也可以参见[在线演示](https://mdn.github.io/dom-examples/abort-api/)。

### 中止超时的读取操作

如果你需要中止一个超时的操作，你可以使用 {{domxref("AbortSignal.timeout()")}} 静态方法。该方法返回一个 `AbortSignal` 并在指定的毫秒时间后后自动超时。

以下代码片段展示了如何成功地下载一个文件或者在五秒钟后处理一个超时的错误。注意，当出现超时时，`fetch()` promise 会以“`TimeoutError`”`DOMException` 拒绝。这允许代码区分超时（可能需要通知用户）和用户中止。

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

### 超时或显式中止 fetch

`fetch()` 不是为了组合多个信号而设计的，所以你不能因为调用了 {{domxref("AbortController.abort()")}} 或者 `AbortSignal` 超时而"直接"中止下载（尽管在上面的例子中，超时信号中止由停止按钮等内置浏览器机制触发）。

为了触发多个 signal，它们必须是菊花链式连接。以下代码片段展示了在处理程序中如何为独立的计时器调用 {{domxref("AbortController.abort()")}}。

```js
try {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const res = await fetch(url, { signal: controller.signal });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Notify the user of abort.
    // Note this will never be a timeout error!
  } else {
    // A network error, or some other problem.
    console.log(`Type: ${e.name}, Message: ${e.message}`);
  }
} finally {
  clearTimeout(timeoutId);
}
```

> **备注：** 与使用 {{domxref("AbortSignal.timeout()")}} 不同，没有方法来判断最终中止是否由超时引起。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
