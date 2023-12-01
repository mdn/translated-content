---
title: Worker()
slug: Web/API/Worker/Worker
---

{{APIRef("Web Workers API")}}

**`Worker()`** 构造函数创建一个 {{domxref("Worker")}} 对象，该对象执行指定的 URL 脚本。这个脚本必须遵守 [同源策略](/zh-CN/Same_origin_policy_for_JavaScript) 。

如果 此 URL 有一个无效的语句，或者违反同源策略，一个 `SECURITY_ERR` 类型的{{domxref("DOMException")}}被抛出。

> **备注：** 浏览器厂商对于 data URI 是否同源存在分歧。尽管 Gecko 10.0 和之后的版本接受 data URIs，但在所有其他浏览器中并非如此。

## 语法

```js
const myWorker = new Worker(aURL, options);
```

### 参数

- 如果文档不允许启动 worker，则会引发 SecurityError
- 如果脚本之一的 MIME 类型为 `text/csv`, `image/*`, `video/*`,或 `audio/*`, 则会引发 NetworkError。它应该始终是 text/javascript。
- 如果 aURL 无法解析，则引发 SyntaxError。

- _aURL_
  - : 是一个{{domxref("DOMString")}} 表示 **worker** 将执行的脚本的 URL。它必须遵守同源策略。
- _options_ {{optional_inline}}

  - : 包含可在创建对象实例时设置的选项属性的对象。可用属性如下：

    - `type`：用以指定 worker 类型的 {{domxref("DOMString")}} 值。该值可以是 `classic` 或 `module`. 如果未指定，将使用默认值 `classic.`
    - `credentials`：用以指定 worker 凭证的 {{domxref("DOMString")}} 值。该值可以是* `omit`*, `same-origin`，或 _`include`.。如果未指定，或者 type 是 `classic`，将使用默认值 `omit` (不要求凭证)。_
    - *`name`：*在 {{domxref("DedicatedWorkerGlobalScope")}} 的情况下，用来表示 worker 的 scope 的一个 {{domxref("DOMString")}} 值，主要用于调试目的。

### 返回值

创建的 worker。

### 异常

- 当 document 不被允许启动 worker 的时候，将抛出一个 SecurityError 异常。例如：如果提供的 aURL 有语法错误，或者与同源策略相冲突（跨域访问）。
- 如果 worker 的 MIME 类型不正确，将抛出一个 NetworkError 异常。worker 的 MIME 类型必须是 text/javascript。
- 如果 aURL 无法被解析（格式错误），将抛出一个 SyntaxError 异常。

## 例子

下面的代码片段展示了通过 Worker() 创建 {{domxref("Worker")}} 对象的过程，以及随后的使用方法：

```js
let myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

完整的例子请看 [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> **备注：** 浏览器可以被标记为对`Worker()`的完全支持尽管他并不支持一个以 modules 类型编写的脚本。截至 2019 年 8 月 1 日，暂无浏览器支持以模块类型编写的脚本。如果没有这种支持，moduleds 类型的脚本必须使用编译器翻译成无 module 代码才能在浏览器上运行。

## 参见

- {{domxref("Worker")}} 它所属的接口。
- [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API)
