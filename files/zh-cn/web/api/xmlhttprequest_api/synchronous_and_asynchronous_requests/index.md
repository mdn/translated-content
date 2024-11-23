---
title: 同步和异步请求
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

`XMLHttpRequest` 支持同步和异步通信。但是，一般来说，出于性能原因，异步请求应优先于同步请求。

同步请求阻止代码的执行，这会导致屏幕上出现“冻结”和无响应的用户体验。

## 异步请求

如果你使用`XMLHttpRequest`发送异步请求，那么当请求的响应数据完全收到之时，会执行一个指定的回调函数，而在执行异步请求的同时，浏览器会正常地执行其他事务的处理。

### 示例：在控制台输出页面源文件

这个例子演示了如何进行一个简单的异步请求。

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

第 2 行中指定第三个参数为 `true`，表示该请求应该以异步模式执行。

第 3 行创建一个事件处理函数对象，并将其分配给请求的 `onload` 属性。此处理程序查看请求的 `readyState`，以查看事务是否在第 4 行完成，如果是，并且 HTTP 状态为 200，则转储接收到的内容。如果发生错误，则显示错误消息。

第 15 行实际上启动了请求。只要请求的状态发生变化，就会调用回调程序。

### 示例：创建一个标准的方法来读取外部文件

在一些需求情况下，必须读取多个外部文件。这是一个标准的函数。该函数使用 `XMLHttpRequest` 对象进行异步请求。而且可以为每个文件读取完成后指定不同的回调函数。

```js
function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
  var xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.arguments = Array.prototype.slice.call(arguments, 2);
  xhr.onload = xhrSuccess;
  xhr.onerror = xhrError;
  xhr.open("GET", url, true);
  xhr.send(null);
}
```

用法：

```js
function showMessage(message) {
  console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

实用函数 loadFile 的签名声明（i）要读取的目标 URL（通过 HTTP GET），（ii）成功完成 XHR 操作时执行的函数，以及（iii）任意列表的附加参数“通过“XHR 对象到成功回调函数。

第 1 行声明 XHR 操作成功完成时调用的函数。它又调用已经分配给 XHR 对象（第 7 行）属性的 loadFile 函数（本例中为函数 showMessage）的调用中指定的回调函数。提供给调用函数 loadFile 的附加参数（如果有的话）被“应用”到回调函数的运行中。

第 5 行声明 XHR 操作无法成功完成时调用的函数。

第 7 行存储 XHR 对象，成功回调函数作为 loadFile 的第二个参数给出。

第 12 行将参数赋给 loadFile 的调用。从第三个参数开始，收集所有剩余的参数，分配给变量 XHR 的 arguments 属性，传递给成功回调函数 xhrSuccess，最终提供给函数调用的回调函数（在本例中为 showMessage）xhrSuccess。

第 15 行为其第三个参数指定了 true，表示该请求应该被异步处理。

第 16 行实际启动请求。

### 示例：使用超时

你可以使用一个超时设置，来避免你的代码为了等候读取请求的返回数据长时间执行。超时毫秒数可以通过为 `XMLHttpRequest` 对象的 `timeout` 属性赋值来指定：

```js
function loadFile(url, timeout, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
    console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
```

你还可以为 `timeout` 事件的 `ontimeout` 事件句柄指定事件处理函数。

用法：

```js
function showMessage(message) {
  console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

如上，我们指定的超时时间为 2000 ms。

> **备注：** `timeout` 属性添加于 Gecko 12.0。

## 同步请求

> [!NOTE]
> 从 Gecko 30.0，Blink 39.0 和 Edge 13 开始，主线程上的同步请求由于对用户体验的负面影响而被弃用。

同步 XHR 通常会导致网络挂起。但开发人员通常不会注意到这个问题，因为在网络状况不佳或服务器响应速度慢的情况下，挂起只会显示同步 XHR 现在处于弃用状态。建议开发人员远离这个 API。

同步 XHR 不允许所有新的 XHR 功能（如 `timeout` 或 `abort`）。这样做会调用 `InvalidAccessError`。

### 示例：HTTP 同步请求

这个例子演示了如何进行一个简单的同步请求。

```js
var request = new XMLHttpRequest();
request.open("GET", "http://www.mozilla.org/", false);
request.send(null);
if (request.status === 200) {
  console.log(request.responseText);
}
```

第一行实例化一个 `XMLHttpRequest` 对象。第二行使用该对象打开一个 HTTP 请求，并指定使用 `HTTP GET` 方法来获取 Mozilla.org 主页内容，操作模式为同步。

第三行发送这个请求。参数为 `null` 表示 `GET` 请求不需要请求实体。

第四行为请求结束之后，检查请求状态码。如果状态码为 200，表示该请求成功，请求到的页面源文件会输出到控制台上。

### 示例：在 `Worker` 中使用 HTTP 同步请求

在 [`Worker`](/zh-CN/DOM/Worker) 中使用 `XMLHttpRequest` 时，同步请求比异步请求更适合。

**`example.html`** (主页):

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MDN Example</title>
    <script type="text/javascript">
      var oMyWorker = new Worker("myTask.js");
      oMyWorker.onmessage = function (oEvent) {
        alert("Worker said: " + oEvent.data);
      };

      oMyWorker.postMessage("Hello");
    </script>
  </head>
  <body></body>
</html>
```

**`myFile.txt`** ( [`XMLHttpRequest`](/zh-CN/DOM/XMLHttpRequest)对象同步请求的文件):

```plain
Hello World!!
```

**`myTask.js`** (包含了[`Worker`](/zh-CN/DOM/Worker)代码):

```js
self.onmessage = function (oEvent) {
  if (oEvent.data === "Hello") {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "myFile.txt", false); // 同步请求
    oReq.send(null);
    self.postMessage(oReq.responseText);
  }
};
```

> [!NOTE]
> 由于使用了`Worker`，所以该请求实际上也是异步的。

可以使用类似的方法，让脚本在后台与服务器交互，预加载某些内容。查看[使用 Web workers](/zh-CN/DOM/Using_web_workers)了解更多详情。

### 将同步 XHR 用例调整到 Beacon API

在某些情况下，XMLHttpRequest 的同步使用是不可替代的，就像在 [window.onunload](/zh-CN/docs/Web/API/Window/onunload)和[window.onbeforeunload](/zh-CN/docs/Web/API/Window/onbeforeunload) 事件期间一样。你应该考虑使用带有 `Keepalive` 标志的 `fetch` API。当 `keepalive` 的 `fetch` 不可用时，可以考虑使用 [navigator.sendBeacon](/zh-CN/docs/Web/API/Navigator/sendBeacon) API 可以支持这些用例，通常在提供良好 UX 的同时。

以下示例（来自 [sendBeacon](/zh-CN/docs/Web/API/Navigator/sendBeacon) 文档）显示了一个理论分析代码，该代码尝试通过在卸载处理程序中使用同步 XMLHttpRequest 将数据提交给服务器。这导致页面的卸载被延迟。

```js
window.addEventListener("unload", logData, false);

function logData() {
  var client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

使用 **`sendBeacon()`** 方法，当用户代理有机会的时候，数据将被异步传输到 Web 服务器，**而不会延迟卸载或影响下一个导航的性能。**

以下示例显示了使用 **`sendBeacon()`** 方法将数据提交给服务器的理论分析代码模式。

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## 参见

- [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest)
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/zh-CN/docs/Web/API/Navigator/sendBeacon)
