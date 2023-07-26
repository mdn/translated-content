---
title: workers 简介
slug: Learn/JavaScript/Asynchronous/Introducing_workers
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

在"异步 JavaScript" 模块的最后一篇文章中，我们将介绍 workers，它使您能够在单独执行 {{Glossary("Thread", "线程")}} 中运行一些任务。

<table>
  <tbody>
    <tr>
      <th scope="row">前置条件：</th>
      <td>
        基于计算机知识，对 JavaScript 基础有一个合理的了解，包括事件处理。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解如何使用 web workers。</td>
    </tr>
  </tbody>
</table>

在本模块的第一篇文章中，我们看到了当在你的程序中具有一个长期运行的的同步任务时发生了什么 ── 整个窗口变得完全没有响应。从根本上讲，出现这种情况的原因是程序是单线程的。一个线程是程序遵循的一系列指令。因为程序由一个线程组成，它在同一时间只能做一件事情：所以如果它正在等待我们的长期运行的同步调用返回，它就不能做其他任何事情。

Workers 给了你在不同线程中运行某些任务的能力，因此你可以启动任务，然后继续其他的处理（例如处理用户操作）。

但是这是要付出代价的。对于多线程代码，你永远不知道你的线程什么时候将会被挂起，其他线程将会得到运行的机会。因此，如果两个线程都可以访问相同的变量，那么变量就有可能在任何时候发生意外的变化，这将导致很难发现的 Bug。

为了避免 Web 中的这些问题，你的主代码和你的 worker 代码永远不能直接访问彼此的变量。Workers 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互。特别是，这意味着 workers 不能访问 DOM（窗口、文档、页面元素等等）。

有三种不同类型的 workers：

- dedicated workers
- shared workers
- service workers

在本文中，我们将介绍第一类 workers 的一个例子，然后简要的讨论另外两类。

## 使用 web workers

还记得在第一篇文章中，我们有一个计算质数的页面吗？我们将使用一个 worker 来运行质数运算，因此我们的页面对用户操作保持响应。

### 同步的质数生成器

让我们先看一下我们上一个例子中的 JavaScript：

```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

在这个程序中，在我们调用 `generatePrimes()` 之后，程序变得完全没有响应。

### 用 worker 进行质数生成

在这个例子中，首先在 [https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start](https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start) 将文件拷贝到本地。在这个目录下有四个文件：

- index.html
- style.css
- main.js
- generate.js

"index.html" 文件和 "style.css" 文件已完成：

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script type="text/javascript" src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"</textarea
    >

    <div id="output"></div>
  </body>
</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

"main.js" 和 "generate.js" 文件是空的。我们将向 "main.js" 中添加主代码，向 "generate.js" 中添加 worker 代码。

首先，我们可以看到 worker 代码被保存在一个与主代码隔离的脚本中。我们还可以看到，在上面的 "index.html" 中，只有主代码被包含在 `<script>` 标签中。

现在将下面的代码拷贝到 "main.js"中：

```js
// 在 "generate.js" 中创建一个新的 worker
const worker = new Worker("./generate.js");

// 当用户点击 "Generate primes" 时，给 worker 发送一条消息。
// 消息中的 command 属性是 "generate", 还包含另外一个属性 "quota"，即要生成的质数。
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota: quota,
  });
});

// 当 worker 给主线程回发一条消息时，为用户更新 output 框，包含生成的质数（从 message 中获取）。
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output",
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

- 首先，我们使用 {{DOMxRef("worker.Worker()", "Worker()")}} 构造函数创建 worker。我们传递一个指向 worker 脚本的 URL。只要 worker 被创建了，woker 脚本就会执行。
- 其次，与同步版本一样，我们向 "Generate primes" 按钮添加一个 `click` 事件处理器。但是现在，我们不再调用 `generatePrimes()` 函数，而是使用 {{DOMxRef("worker.postMessage()", "worker.postMessage()")}} 向 worker 发送一条消息。这条消息可以携带一个参数，在本示例中我们传递一个包含两个属性的 JSON 对象：
  - `command`：一个用于标识我们希望 worker 所做事情的字符串（以防我们的 worker 可以做多个事情）。
  - `quota`：要生成的质数的数量。
- 然后，我们向 worker 添加一个 `message` 消息处理器。这样 worker 就能告诉我们它是什么时候完成的，并且传递给我们任何结果数据。我们的处理器从消息的 `data` 属性获取数据，然后将其写入 output 元素（数据与 `quota` 是完全相同的，这虽然没有意义，但是这展示了其中原理）。
- 最后，我们为 "Reload" 按钮实现了 `click` 事件处理器。这与同步版本完全相同。

现在到 worker 代码了。拷贝下面的代码到 "generate.js" 中：

```js
// 监听主线程中的消息。
// 如果消息中的 command 是 "generate"，则调用 `generatePrimse()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// 生成质数 (非常低效)
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // 完成后给主线程发送一条包含我们生成的质数数量的消息消息。
  postMessage(primes.length);
}
```

请记住，只要主脚本创建 worker，这些代码就会运行。

worker 要做的第一件事情就是开始监听来自主脚本的消息。这通过使用 `addEventListener()` 实现，它在 worker 中是一个全局函数。在 `message` 事件处理器内部，事件的 `data` 属性包含一个来自主脚本的参数的副本。如果主脚本传递 `generate` 命令，我们就调用 `generatePrimes()`，传入来自消息事件的 `quota` 值。

`generatePrimes()` 函数与同步版本类似，只不过我们在完成后向主脚本发送一条消息，而不是返回一个值。我们对此使用 {{DOMxRef("dedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} 函数，就像在 worker 中 `addEventListener`是全局函数一样。如我们所见，主脚本正在监听这条消息并且将会在收到消息后更新 DOM。

> **备注：** 要运行此站点，你必须运行一个本地 web 服务器，因为 file:// URLs 不允许加载 workers。参考我们的[设置一个本地测试服务器](/zh-CN/docs/Learn/Common_questions/set_up_a_local_testing_server)的指导。完成后，你应该可以点击 "Generate primes" 并且使你的主页面保持响应。
> 如果你在创建和运行这个样例的过程中有疑问，你可以在 [https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished](https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished) 查看完成后的版本，并且在 [https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished) 进行在线尝试。

## 其他类型的 worker

我们刚刚创建的 worker 被称为 _dedicated worker_。这意味着它由一个脚本实例使用。

不过，还有其他类型的 worker：

- {{DOMxRef("SharedWorker")}} 可以由运行在不同窗口中的多个不同脚本共享。
- [_Service worker_](/zh-CN/docs/Web/API/Service_Worker_API) 的行为就像代理服务器，缓存资源以便于 web 应用程序可以在用户离线时工作。他们是[渐进式 Web 应用](/zh-CN/docs/Web/Progressive_web_apps)的关键组件。

## 总结

在本文中，我们介绍了 web workers，它使得 web 应用能够离线加载任务到单独的线程中。主线程和 worker 不直接共享任何变量，但是可以通过发送消息来进行通信，这些消息作为 `message` 事件被对方接受。

Workers 尽管不能访问主应用程序能访问的所有 API，尤其是不能访问 DOM，但是可以作为使主应用程序保持响应的一个有效的方式。

## 参见

- [使用 web workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- [使用 service workers](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web workers API](/zh-CN/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}
