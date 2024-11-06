---
title: 事件循环
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{JsSidebar("Advanced")}}

JavaScript 有一个基于**事件循环**的运行时模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。这个模型与其他语言中的模型截然不同，比如 C 和 Java。

## 运行时概念

接下来的内容解释了这个理论模型。现代 JavaScript 引擎实现并着重优化了以下描述的这些语义。

### 可视化描述

![显示栈由帧组成、堆由对象组成、队列由消息组成的图片](the_javascript_runtime_environment_example.svg)

### 栈

函数调用形成了一个由若干*帧*堆叠而成的栈。

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // 将 42 赋值给 baz
```

执行顺序：

1. 当调用 `bar` 时，第一个帧被创建并压入栈中，帧中包含了 `bar` 的参数引用和局部变量。
2. 当 `bar` 调用 `foo` 时，第二个帧被创建并被压入栈中，放在第一个帧之上，帧中包含 `foo` 的参数引用和局部变量。
3. 当 `foo` 执行完毕然后返回时，第二个帧就被弹出栈（剩下 `bar` 函数的调用帧）。
4. 当 `bar` 也执行完毕然后返回时，第一个帧也被弹出，栈就被清空了。

注意参数和局部变量可能继续存在，因为它们在栈的外部存储——所以在嵌套函数的外部函数返回后，它们仍能被任意的[嵌套函数](/zh-CN/docs/Web/JavaScript/Guide/Functions#嵌套函数和闭包)访问。

### 堆

对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。

### 队列

JavaScript 运行时包含一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。

在[事件循环](#事件循环)期间的某个时刻，运行时会开始处理最先进入队列的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。

函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。

## 事件循环

之所以称之为**事件循环**，是因为它经常按照类似如下的方式被实现：

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` 会同步地等待消息到达 (如果当前没有任何消息等待被处理)。

### “执行至完成”

每一个消息完整地执行后，其他消息才会被执行。

这为程序的分析提供了一些优秀的特性，包括：当一个函数执行时，它不会被抢占，只有在它运行完毕之后才会去运行任何其他的代码，才能修改这个函数操作的数据。这与 C 语言不同，例如，如果函数在线程中运行，它可能在任何位置被在另一个线程中运行其他代码的运行时系统终止。

这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web 应用程序就无法处理用户的交互，例如点击或滚动。为了缓解这个问题，浏览器一般会弹出一个“这个脚本运行时间过长”的对话框。最佳实践是缩短单个消息处理时间，并在可能的情况下将一个消息裁剪成多个消息。

### 添加消息

在浏览器里，每当一个事件发生并且有一个事件监听器绑定在该事件上时，一个消息就会被添加进消息队列。如果没有事件监听器，这个事件将会丢失。所以当一个带有点击事件处理器的元素被点击时，就会像其他事件一样产生一个类似的消息。然而，一些事件同步发生，没有产生消息——例如，通过 {{domxref("HTMLElement/click", "click")}} 方法模拟的点击。

函数 {{domxref("Window.setTimeout", "setTimeout()")}} 接受的前两个参数：一个是待加入队列的消息，一个是时间值（可选，默认为 0）。这个*时间值*代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其他消息并且栈为空，在这段延迟时间过去之后，消息会被马上处理。然而，如果有其他消息，`setTimeout()` 消息必须等待其他消息处理完。因此第二个参数仅仅表示*最少*延迟时间，而非*确切*的等待时间。

下面的例子演示了这个概念（`setTimeout()` 并不会在计时器到期之后直接执行）：

```js
const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // 输出“2”，表示回调函数并没有在 500 毫秒之后立即执行
  console.log(`在 ${new Date().getTime() / 1000 - seconds} 秒后运行`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("很好，在 2 秒后循环");
    break;
  }
}
```

### 零延迟

零延迟并不意味着回调会在 0 毫秒后执行。以 0 为第二参数调用 {{domxref("Window.setTimeout", "setTimeout()")}} 并不表示在 0 毫秒后就调用回调函数。

其等待的时间取决于队列里待处理的消息数量。在下面的例子中，`"这是一条消息"` 将会在回调获得处理之前输出到控制台，这是因为延迟参数是运行时处理请求所需的*最小*等待时间，但并不保证是*准确*的等待时间。

基本上，`setTimeout()` 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。

```js
(function () {
  console.log("这是开始");

  setTimeout(function cb() {
    console.log("回调 1：这是来自第一个回调的消息");
  });

  console.log("这是一条消息");

  setTimeout(function cb1() {
    console.log("回调 2：这是来自第二个回调的消息");
  }, 0);

  console.log("这是结束");
})();

// "这是开始"
// "这是一条消息"
// "这是结束"
// "回调 1：这是来自第一个回调的消息"
// "回调 2：这是来自第二个回调的消息"
```

### 多个运行时互相通信

Web worker 或者跨源的 `iframe` 都有自己的栈、堆和消息队列。两个不同的运行时只能通过 [`postMessage`](/zh-CN/docs/Web/API/Window/postMessage) 方法进行通信。如果另一个运行时侦听 `message` 事件，则此方法会向该运行时添加消息。

## 永不阻塞

JavaScript 的事件循环模型与许多其他语言不同的一个非常有趣的特性是，它永不阻塞。处理 I/O 通常通过事件和回调来执行，所以当应用程序正等待一个 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 查询返回或者一个 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 请求返回时，它仍然可以处理其他事情，比如用户输入。

由于历史原因有一些例外，如 `alert` 或者同步的 XHR，但应该尽量避免使用它们。注意，[例外的例外也是存在的](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311)（但通常是实现错误而非其他原因）。

## 参见

- HTML 规范中的[事件循环](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- Node.js 文档中的[什么是事件循环？](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop)
