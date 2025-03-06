---
title: 深入：微任务与 Javascript 运行时环境
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
---

{{APIRef("HTML DOM")}}

当你在调试，或者在决定如何以最佳的方式为任务队列和微任务队列安排调度顺序的时候，如果你了解关于 JavaScript 运行时是如何在背后执行这一切的，那将对你的理解会非常有帮助。

JavaScript 本质上是一门单线程语言。对于在它被设计出来的那个年代来说，这样的设计是一个很好的选择。那个时候的人们很少有多处理器计算机，而且当时预期由 JavaScript 处理的代码量也相对较少。

当然，随着时间的流逝，计算机已经发展成为强大的多核系统，而 JavaScript 已经成为计算世界中使用最广泛的语言之一。大量最流行的应用程序至少有一部分是基于 JavaScript 代码的。为了支持这一点，有必要找到方法让项目摆脱单线程语言的限制。

自从定时器（{{domxref("Window.setTimeout", "setTimeout()")}} 和 {{domxref("Window.setInterval", "setInterval()")}}）加入到 Web API 后，浏览器提供的 JavaScript 环境就已经逐渐发展到包含任务调度、多线程应用开发等强大的特性。了解 JavaScript 运行时是如何安排和运行代码的对了解 `queueMicrotask()` 会非常有作用。

## JavaScript 执行上下文

> [!NOTE]
> 对于大多数 JavaScript 开发人员来说，这些细节并不重要。这里提供的信息只用于了解为什么微任务非常有用以及它们是如何工作的。如果你并不关心这些内容，你可以跳过这部分或者在你觉得需要的时候再倒回来查看。

当一段 JavaScript 代码在运行的时候，它实际上是运行在**执行上下文**中。下面 3 种类型的代码会创建一个新的执行上下文：

- 全局上下文是为运行代码主体而创建的执行上下文，也就是说，它是为那些存在于 JavaScript 函数之外的任何代码而创建的。
- 每个函数会在执行的时候创建自己的执行上下文。这个上下文就是通常说的“本地上下文”。
- 使用 {{jsxref("Global_Objects/eval", "eval()")}} 函数也会创建一个新的执行上下文。

每一个上下文在本质上都是一种作用域层级。每个代码段开始执行的时候都会创建一个新的上下文来运行它，并且在代码退出的时候销毁掉。看看下面这段 JavaScript 程序：

```js
let outputElem = document.getElementById("output");

let userLanguages = {
  Mike: "en",
  Teresa: "es",
};

function greetUser(user) {
  function localGreeting(user) {
    let greeting;
    let language = userLanguages[user];

    switch (language) {
      case "es":
        greeting = `¡Hola, ${user}!`;
        break;
      case "en":
      default:
        greeting = `Hello, ${user}!`;
        break;
    }
    return greeting;
  }
  outputElem.innerHTML += `${localGreeting(user)}<br>\r`;
}

greetUser("Mike");
greetUser("Teresa");
greetUser("Veronica");
```

这段程序代码包含了三个执行上下文，其中有些会在程序运行的过程中多次创建和销毁。每个上下文创建的时候会被推入**执行上下文栈**。当退出的时候，它会从上下文栈中移除。

- 程序开始运行时，全局上下文就会被创建好。

  - 当执行到 `greetUser("Mike")` 的时候，会为 `greetUser()` 函数创建一个它的上下文。这个执行上下文会被推入执行上下文栈中。

    - 当 `greetUser()` 调用 `localGreeting()` 的时候，会为该方法创建一个新的上下文。当 `localGreeting()` 返回的时候，它的上下文也会从执行栈中弹出并销毁。程序会从栈中获取下一个上下文并恢复执行，也就是从 `greetUser()` 剩下的部分开始执行。
    - `greetUser()` 执行完毕并退出，其上下文也从栈中弹出并销毁。

  - 当执行到 `greetUser("Teresa")` 的时候，程序又会为它创建一个上下文并推入栈顶。

    - 当 `greetUser()` 调用 `localGreeting()` 的时候，会为该方法创建一个新的上下文。当 `localGreeting()` 返回的时候，它的上下文也会从执行栈中弹出并销毁。然后，继续执行 `greetUser()` 剩下的部分。
    - `greetUser()` 执行完毕并退出，其上下文也从栈中弹出并销毁。

  - 当执行到 `greetUser("Veronica")` 的时候，程序又会为它创建一个上下文并推入栈顶。

    - 当 `greetUser()` 调用 `localGreeting()` 的时候，会为该方法创建一个新的上下文。当 `localGreeting()` 返回的时候，它的上下文也会从执行栈中弹出并销毁。
    - `greetUser()` 执行完毕并退出，其上下文也从栈中弹出并销毁。

- 主程序退出，全局执行上下文从执行栈中弹出。此时栈中所有的上下文都已经弹出，程序执行完毕。

通过这种方式来使用执行上下文，每个程序和函数都能够拥有自己的变量和其他对象。每个上下文还能够额外的跟踪程序中下一行需要执行的代码以及一些对上下文非常重要的信息。通过这种方式来使用上下文和上下文栈，我们可以对程序运行的一些基础部分进行管理，包括局部和全局变量、函数的调用与返回等。

关于递归函数（即多次调用自身的函数），需要特别注意：每次递归调用自身都会创建一个新的上下文。这使得 JavaScript 运行时能够追踪递归的层级以及从递归中得到的返回值，但这也意味着每次递归都会消耗内存来创建新的上下文。

## JavaScript 运行时

在执行 JavaScript 代码的时候，JavaScript 运行时实际上维护了一组用于执行 JavaScript 代码的**代理**。每个代理由一组执行上下文的集合、执行上下文栈、主线程、一组可能创建用于执行 worker 的额外的线程集合、一个任务队列以及一个微任务队列构成。除了主线程（某些浏览器在多个代理之间共享的主线程）之外，其他组成部分对该代理都是唯一的。

现在我们来更加详细的了解一下运行时是如何工作的。

### 事件循环

每个代理都是由**事件循环**（Event loop）驱动的，事件循环负责收集事件（包括用户事件以及其他非用户事件等）、对任务进行排队以便在合适的时候执行回调。然后它执行所有处于等待中的 JavaScript 任务，然后是微任务，然后在开始下一次循环之前执行一些必要的渲染和绘制操作。

网页或者 app 的代码和浏览器本身的用户界面程序运行在相同的[**线程**](/zh-CN/docs/Glossary/Thread)中，共享相同的**事件循环**。该线程就是[**主线程**](/zh-CN/docs/Glossary/Main_thread)，它除了运行网页本身的代码之外，还负责收集和派发用户和其他事件，以及渲染和绘制网页内容等。

事件循环驱动着浏览器中发生的一切，因为它与用户的交互有关，但对于我们这里的目的来说，更重要的是它负责调度和执行在其线程中运行的每一段代码。

有如下三种事件循环：

- Window 事件循环
  - : window 事件循环驱动所有共享同源的窗口（尽管这有进一步的限制，如下所述）。
- Worker 事件循环
  - : worker 事件循环驱动 worker 的事件循环。这包括所有形式的 worker，包括基本的 [web worker](/zh-CN/docs/Web/API/Web_Workers_API)、[shared worker](/zh-CN/docs/Web/API/SharedWorker) 和 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)。Worker 被保存在一个或多个与“主”代码分开的代理中；浏览器可以对所有特定类型的工作者使用一个事件循环，也可以使用多个事件循环来处理它们。
- Worklet 事件循环
  - : [worklet](/zh-CN/docs/Web/API/Worklet) 事件循环驱动运行 worklet 的代理。这包含了 {{domxref("Worklet")}}、{{domxref("AudioWorklet")}} 以及 {{domxref("PaintWorklet")}}。

多个同{{Glossary("origin", "源")}}窗口可能运行在相同的事件循环中，每个队列任务进入到事件循环中以便处理器能够轮流对它们进行处理。记住这里的网络术语“window”实际上指的是“用于运行网页内容的浏览器级容器”，包括实际的 window、标签页或者一个 frame。

在特定情况下，同源窗口之间共享事件循环，例如：

- 如果一个窗口打开了另一个窗口，它们可能会共享一个事件循环。
- 如果窗口是包含在 {{HTMLElement("iframe")}} 中的容器，则它可能会和包含它的窗口共享一个事件循环。
- 在多进程浏览器中多个窗口碰巧共享了同一个进程。

这种特定情况依赖于浏览器的具体实现，各个浏览器可能并不一样。

#### 任务 vs 微任务

一个**任务**就是指计划由标准机制来执行的任何 JavaScript，如程序的初始化、事件触发的回调等。除了使用事件，你还可以使用 {{domxref("Window.setTimeout", "setTimeout()")}} 或者 {{domxref("Window.setInterval", "setInterval()")}} 来添加任务。

任务队列和微任务队列的区别很简单，但却很重要：

- 当执行来自任务队列中的任务时，在每一次新的事件循环开始迭代的时候运行时都会执行队列中的每个任务。在每次迭代开始之后加入到队列中的任务需要*在下一次迭代开始之后才会被执行*。
- 每次当一个任务退出且执行上下文栈为空的时候，微任务队列中的每一个微任务会依次被执行。不同的是它会等到微任务队列为空才会停止执行——即使中途有微任务加入。换句话说，微任务可以添加新的微任务到队列中，这些新的微任务将在下一个任务开始运行之前，在当前事件循环迭代结束之前执行。

### 问题

由于你的代码和浏览器的用户界面运行在同一个线程中，共享同一个事件循环，假如你的代码阻塞了或者进入了无限循环，则浏览器将会卡死。无论是由于 bug 引起还是代码中进行复杂的运算导致的性能降低，都会降低用户的体验。

当来自多个程序的多个代码对象尝试同时运行的时候，一切都可能变得很慢甚至被阻塞，更不要说浏览器还需要时间来渲染和绘制网站和 UI、处理用户事件等。

### 解决方案

使用 [web worker](/zh-CN/docs/Web/API/Web_Workers_API) 可以让主线程另起新的线程来运行脚本，这能够缓解上面的情况。一个设计良好的网站或应用会把一些复杂的或者耗时的操作交给 worker 去做，这样可以让主线程除了更新、布局和渲染网页之外，尽可能少的去做其他事情。

通过使用像 [promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 这样的[异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS) 技术可以使得主线程在等待请求返回结果的同时继续往下执行，这能够更进一步减轻上面提到的情况。然而，一些更接近于基础功能的代码——比如一些框架代码，可能更需要将代码安排在主线程上一个安全的时间来运行，它与任何请求的结果或者任务无关。

微任务是另一种解决该问题的方案，通过将代码安排在下一次事件循环开始之前运行而不是必须要等到下一次开始之后才执行，这样可以提供一个更好的访问级别。

微任务队列已经存在有一段时间了，但之前它仅仅被内部使用来驱动诸如 promise 这些任务。`queueMicrotask()` 的加入可以让开发者创建一个统一的微任务队列，在任何需要有能力安排代码在 JavaScript 执行上下文栈上没有执行上下文时安全运行的地方使用。在多个实例、浏览器和 JavaScript 运行时中，标准化的微队列机制意味着这些微任务将以相同的顺序可靠地运行，从而避免潜在的难以发现的错误。

## 参见

- [微任务指南](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide)
- {{domxref("Window.queueMicrotask()")}}
- [异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
  - [异步 JavaScript 简介](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [合作的异步 JavaScript：超时和间隔](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
  - [用 Promise 进行优雅的异步编程](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Promises)
