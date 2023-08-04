---
title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
---

{{APIRef("Web Workers API")}}

**`SharedWorker()`** 构造函数实例化的 {{domxref("SharedWorker")}} 对象可以执行指定的 URL 的脚本。所执行的脚本必须遵守 [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

如果 URL 的语法无效或者违反了同源策略会抛出 `SECURITY_ERR` 类型的 {{domxref("DOMException")}} 异常。

> **备注：** 浏览器开发者对于 data URI 是否同源产生分歧。尽管 Gecko 10.0 及之后版本支持 data URIs，其他浏览器并不能支持。

## 语法

```js
var myWorker = new SharedWorker(aURL, name);
var myWorker = new SharedWorker(aURL, options);
```

### 参数

- _URL 参数_
  - : 一个代表了 worker 将执行的脚本 URL 的 {{domxref("DOMString")}}，它必须遵守同源策略。
- name {{optional_inline}}
  - : 一个指定表示 worker 范围的{{domxref("SharedWorkerGlobalScope")}}的标识名称的 {{domxref("DOMString")}}，主要用于调试。
- _options_ {{optional_inline}}

  - : 创建实例时设定的包含了可选属性的对象。可用的属性包括：

    - `type`: 一个制定所创建 worker 类型的 {{domxref("DOMString")}}。可设定的值为 `classic` 或者 `module`. 若不指定，默认值为 `classic`.
    - `credentials`: 一个指定要用于工作程序的凭据类型的 {{domxref("DOMString")}}。可设定的值为* `omit、`*`same-origin` 或 *`include`. *若不指定，*或者 type 设定为 `classic`, *默认值为* `omit` （无需凭据）。*
    - *`name`: *一个指定表示 worker 范围的{{domxref("SharedWorkerGlobalScope")}}的标识名称的 {{domxref("DOMString")}}，主要用于调试。

### Return value

创建的 worker

### Exceptions

- `SecurityError` 当文档不能正常启动 workers 时抛出
- `NetworkError` 如果其中一个脚本的 MIME 类型是 text / csv，image / \*，video / \*或 audio / \* 时抛出。类型只应该为 `text/javascript`。
- `SyntaxError` 当 _URL_ 不能被解析时抛出

## 示例

以下代码段显示了使用 `SharedWorker()` 构造函数创建 {{domxref("SharedWorker")}} 对象以及对象的后续用法：

```js
var myWorker = new SharedWorker("worker.js");

myWorker.port.start();

first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

有关更完整的示例，详见[基本的共享型 worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[运行基本的共享型 worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
