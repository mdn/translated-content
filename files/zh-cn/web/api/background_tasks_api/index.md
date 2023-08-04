---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
---

{{DefaultAPISidebar("Background Tasks")}}

**后台任务协作调度 API**（Cooperative Scheduling of Background Tasks API，也叫后台任务 API，或者简单称为 `requestIdleCallback()` API）提供了由用户代理决定的，在空闲时间自动执行队列任务的能力。

> **备注：** 此 API *无法*在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中使用。

## 概念和用法

浏览器的主线程以其事件循环队列为中心。此代码渲染 {{domxref("Document")}} 上待更新展示的内容，执行页面待运行的 JavaScript 脚本，接收来自输入设备的事件，以及分发事件给需要接收事件的元素。此外，事件循环队列处理与操作系统的交互、浏览器自身用户界面的更新等等。这是一个非常繁忙的代码块，您的主要 JavaScript 代码可能会和这些代码一起也在这个线程中执行。当然，大多数（不是所有）能够更改 DOM 的代码都在主线程中运行，因为用户界面更改通常只对主线程可用。

因为事件处理和屏幕更新是用户关注性能最明显的两种方式。对于您的代码来说，防止在事件队列中出现卡顿是很重要的。在过去，除了编写尽可能高效的代码和将尽可能多的工作移交给 [worker](/zh-CN/docs/Web/API/Web_Workers_API) 之外，没有其他可靠的方法可以做到这一点。{{domxref("Window.requestIdleCallback()")}} 允许浏览器告诉您的代码可以安全使用多少时间而不会导致系统延迟，从而有助于确保浏览器的事件循环平稳运行。如果您保持在给定的范围内，您可以使用户体验更好。

### 充分利用空闲回调

因为 idle callback 旨在为代码提供一种与事件循环协作的方式，以确保系统充分利用其潜能，不会过度分配任务，从而导致延迟或其他性能问题，因此您应该考虑如何使用它。

- **对非高优先级的任务使用空闲回调**。已经创建了多少回调，用户系统的繁忙程度，你的回调多久会执行一次（除非你指定了 `timeout`），这些都是未知的。不能保证每次事件循环（甚至每次屏幕更新）后都能执行空闲回调；如果事件循环用尽了所有可用时间，那你可就倒霉了（再说一遍，除非你用了 `timeout`）。
- **空闲回调应尽可能不超支分配到的时间**。尽管即使你超出了规定的时间上限，通常来说浏览器、代码、网页也能继续正常运行，这里的时间限制是用来保证系统能留有足够的时间去完成当前的事件循环然后进入下一个循环，而不会导致其他代码卡顿或动画效果延迟。目前，{{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 有一个 50 ms 的上限时间，但实际上你能用的时间比这个少，因为在复杂的页面中事件循环可能已经花费了其中的一部分，浏览器的扩展插件也需要处理时间，等等。
- **避免在空闲回调中改变 DOM**。空闲回调执行的时候，当前帧已经结束绘制了，所有布局的更新和计算也已经完成。如果你做的改变影响了布局，你可能会强制停止浏览器并重新计算，而从另一方面来看，这是不必要的。如果你的回调需要改变 DOM，它应该使用 {{domxref("Window.requestAnimationFrame()")}} 来调度它。
- **避免运行时间无法预测的任务**。你的空闲回调必须避免做任何占用时间不可预测的事情。比如说，应该避免做任何会影响页面布局的事情。你也必须避免 执行{{domxref("Promise")}} 的 `resolve` 和 `reject`，因为这会在你的回调函数返回后立即引用 Promise 对象对 `resolve` 和 `reject` 的处理程序。
- **在你需要的时候要用 timeout，但记得只在需要的时候才用**。使用 timeout 可以保证你的代码按时执行，但是在剩余时间不足以强制执行你的代码的同时保证浏览器的性能表现的情况下，timeout 就会造成延迟或者动画不流畅。

### 回退到 setTimeout

因为后台任务 API 还是相当新的，而你的代码可能需要在那些不仍不支持此 API 的浏览器上运行。你可以把 {{domxref("WindowTimers.setTimeout()", "setTimeout()")}} 用作回调选项来做这样的事。这个并不是 {{Glossary("polyfill")}} ，因为它在功能上并不相同；`setTimeout()` 并不会让你利用空闲时段，而是使你的代码在情况允许时执行你的代码，以使我们可以尽可能地避免造成用户体验性能表现延迟的后果。

```js
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (handler) {
    let startTime = Date.now();

    return setTimeout(function () {
      handler({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  };
```

如果 {{domxref("Window.requestIdleCallback", "window.requestIdleCallback")}} 是 undefined, 我们在这里把它创建出来。这个函数首先会记录我们调用具体实现的时间。我们将用它计算填充程序 {{domxref("IdleDeadline.timeRemaining()", "timeRemaining()")}} 返回的值。

接着，我们调用 {{domxref("WindowTimers.setTimeout", "setTimeout()")}}，并给它传一个函数，在这个函数里，我们传给 `requestIdleCallback()` 的具体实现的回调会得以执行。这个回调会接收一个和 {{domxref("IdleDeadline")}} 相符合的 object，此 object 的 {{domxref("IdleDeadline.didTimeout", "didTimeout")}} 被设定为 false，并拥有一个 {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} 方法，用来给回调函数 50 毫秒的开始时间。每次调用 `timeRemaining()`，它都会从开始的 50 毫秒中减去已逝去的时间，来确定还剩余的时间。

结果是，虽然我们的填充程序不会像真正的 `requestIdleCallback()` 将自己限制在当前事件循环传递中的空闲时间内，但它至少将每次传递的运行时间限制为不超过 50 毫秒。

我们 {{domxref("Window.cancelIdleCallback", "cancelIdleCallback()")}} 的具体实现要简单的多。

```js
window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    clearTimeout(id);
  };
```

如果 `cancelIdleCallback()` 没有定义，它将创建一个来简单地把指定回调 ID 传递给 {{domxref("WindowTimers.clearTimeout", "clearTimeout()")}}。

现在，尽管效率不高，你的代码也可以在不支持后台任务 API 的浏览器上运行了。

## 接口

后台任务 API 只添加了一个新的接口：

- {{domxref("IdleDeadline")}}
  - : 这个类型的对象接口空闲回调以提供空闲时段的预估持续时长，以及回调是否因为定时时段过期使其正在运行当中。

这个 API 给 {{domxref("Window")}} 接口增加了新的 {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} 和 {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}} 方法。

## 示例

在这个示例中，我们将了解我们怎么用 {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} 来在浏览器空闲时运行高耗时、低优先级的任务。此外，这个示例会演示如何使用 {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} 安排文档内容的更新。

在下面，你只会看到示例的 HTML 和 JavaScript。CSS 没有展示出来，因为它对理解此功能并不关键。

### HTML

为了了解我们的目标，看一下 HTML。这里创建了一个盒子（`id="container"`）来显示操作进度（因为毕竟我们没法知道解码“量子丝极谱发射”会用多长时间），还创建了一个次要的盒子（`id="logBox"`）来展示文本输出。

```html
<p>使用 <code>requestIdleCallback()</code> 方法的后台任务协作调度演示。</p>

<div id="container">
  <div class="label">解码量子丝极谱发射中...</div>

  <progress id="progress" value="0"></progress>

  <div class="button" id="startButton">开始</div>

  <div class="label counter">
    任务 <span id="currentTaskNumber">0</span> /
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div id="logBox">
  <div class="logHeader">记录</div>
  <div id="log"></div>
</div>
```

这个进度框用一个 {{HTMLElement("progress")}} 元素展示进度，随着它标签部分的变化，会呈现进度的数字信息。此外，这还有一个开始按钮（id 为“startButton”），用户可以使用它开始数据处理。

```css hidden
body {
  font-family: "Open Sans", "Lucida Grande", "Arial", sans-serif;
  font-size: 16px;
}

#logBox {
  margin-top: 16px;
  width: 400px;
  height: 500px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
}

.logHeader {
  margin: 0;
  padding: 0 6px 4px;
  height: 22px;
  background-color: lightblue;
  border-bottom: 1px solid black;
  border-radius: 6px 6px 0 0;
}

#log {
  font:
    12px "Courier",
    monospace;
  padding: 6px;
  overflow: auto;
  overflow-y: scroll;
  width: 388px;
  height: 460px;
}

#container {
  width: 400px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  display: block;
  overflow: auto;
}

.label {
  display: inline-block;
}

.counter {
  text-align: right;
  padding-top: 4px;
  float: right;
}

.button {
  padding-top: 2px;
  padding-bottom: 4px;
  width: 100px;
  display: inline-block;
  float: left;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  margin-top: 0;
  color: white;
  background-color: darkgreen;
}

#progress {
  width: 100%;
  padding-top: 6px;
}
```

### JavaScript

现在，已经定义了文档结构，再构造出 JavaScript 代码就可以运行了。目标：可以向队列添加调用函数的请求，并具有一个空闲回调，空闲回调会在系统空闲且空闲时间足够长以取得进展时运行。

#### 变量声明

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

这些变量用于管理等待执行的任务列表和任务队列和其执行的状态信息：

- `taskList` 是一个对象的 {{jsxref("Array")}}，每个对象代表一个待运行的任务。
- `totalTaskCount` 是一个已被添加到队列的任务数量计数器，只会增大，不会减小。我们用它计算总工作量进度的百分比值。
- `currentTaskNumber` 用于追踪到现在为止已处理了多少任务。
- `taskHandle` 是对当前处理中任务的一个引用。

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

接下来我们有了引用要交互 DOM 元素的变量。这些元素是：

- `totalTaskCountElem` {{HTMLElement("span")}} 用于插入我们在进度框显示状态中创建的任务总数。
- `currentTaskNumberElem` 是我们用来呈现到当前为止处理过的任务数的元素。
- `progressBarElem` {{HTMLElement("progress")}}，我们用它来呈现到当前为止处理过任务的百分比。
- `startButtonElem` 是开始按钮。
- `logElem` 我们在 {{HTMLElement("div")}} 中显示记录过的文本信息。

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

最后，我们为其他项目设置一对变量：

- `logFragment` 当渲染下一帧，我们的记录方法都会生成一个 {{domxref("DocumentFragment")}} 来创建添加到记录的内容，并保存到 `logFragment` 中 {{domxref("DocumentFragment")}} 。
- `statusRefreshScheduled` 我们用它来追踪我们是否已经为即将到来的帧安排了状态显示框的更新，所以我们每一帧只执行一次。

```js hidden
requestIdleCallback =
  requestIdleCallback ||
  ((handler) => {
    const startTime = Date.now();

    return setTimeout(() => {
      handler({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  });

cancelIdleCallback =
  cancelIdleCallback ||
  ((id) => {
    clearTimeout(id);
  });
```

#### 管理任务队列

接下来，让我们来了解我们管理需要执行的任务的方式。为此，我们将创建一个先进先出（FIFO）的任务队列，在空闲回调期间，如果时间允许，我们将执行这个队列。

##### 排队任务

首先，我们需要一个函数把任务排成队列，以便将来执行。这个函数 `enqueueTask()`，就像这个：

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  if (!taskHandle) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  }

  scheduleStatusRefresh();
}
```

`enqueueTask()` 接受两个参数作为参数

- `taskHandler` 一个函数，被调用来处理任务。
- `taskData` 一个对象（object），被当作输入参数传递给 `taskHandler`，以允许任务接收自定义数据。

为了把任务排成队列，我们把一个对象[添加](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)到 `taskList` 数组；此对象包含 `taskHandler` 和 `taskData` 的值（命名分别是 `handler` 和 `data`），然后体现我们队列里任务总数的 `totalTaskCount` 增加（我们不会在从队列中移除任务时减少 `totalTaskCount`）。

接下来，我们来检查我们是否已经创建了一个空闲回调；如果 `taskHandle` 是 0，那我们得知还没有空闲回调，所以我们调用 {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} 去创建一个。它被配置为调用一个叫 `runTaskQueue()` 的函数（我们随后会对其研究），它的 `timeout` 为 1 秒，因此，即使没有任何实际可用的空闲时间，它也至少会每秒运行一次。

##### 执行任务

我们的空闲回调处理方法，`runTaskQueue()`，将在浏览器确定有足够的可用空闲时间让我们做一些我们的工作时，或者 1 秒的 `timeout` 到期时被调用。这个方法的作用是执行队列中的任务。

```js
function runTaskQueue(deadline) {
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskList.length
  ) {
    const task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  } else {
    taskHandle = 0;
  }
}
```

`runTaskQueue()` 的核心是一个循环，只要有剩余时间（通过检查 {{domxref("IdleDeadline.timeRemaining", "deadline.timeRemaining")}} 来确认它大于 0），或者已经达到了超时（timeout）期限（{{domxref("IdleDeadline.didTimeout", "deadline.didTimeout")}} 值为真），且任务列表中有任务就会一直持续。

对队列中每个我们有时间执行的任务，我们做以下操作：

1. 我们[把任务对象（object）从队列中移除](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)。
2. 我们让 `currentTaskNumber` 增加来追踪我们已执行的任务数量。
3. 我们调用任务处理方法，`task.handler`，并任务的数据对象（`task.data`）传入其中。
4. 我们调用一个方法，`scheduleStatusRefresh()`，去处理调度一个屏幕更新来体现我们进度的变化。

当时间耗尽，如果列表里还有任务，我们再次调用 {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} 使我们可以在下次有可用空闲时间时继续运行这些任务。如果队列是空的，我们将把 `taskHandle` 设置为 0 来表示我们没有回调日程了。这样，下一次 `enqueueTask()` 被调用时，我们就知道要请求一个回调了。

#### 更新状态显示

我们想要能够做的一件事是根据记录输出和进度信息来更新文档。然后在空闲回调中改变 DOM 是不安全的。作为替代，我们使用 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 来让浏览器在可以安全地更新显示时通知我们。

##### 安排显示的更新

调用 `scheduleStatusRefresh()` 函数来安排 DOM 的改变。

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

这是一个简单的函数。它检查 `statusRefreshScheduled` 的值来得知我们是否已经安排了一个显示更新。如果值为 `false`，我们调用 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 来安排一个更新，也就是提供一个 `updateDisplay()` 函数以被调用去处理那个工作。

##### 更新显示

`updateDisplay()` 函数负责绘制进度框的内容和记录。当 DOM 的状况安全，我们可以在下次渲染过程中申请改变时，浏览器会调用它。

```js
function updateDisplay() {
  const scrolledToEnd =
    logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max !== totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value !== currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
    logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}
```

首先，在记录被滚动到底的时候 `scrolledToEnd` 会被设置为 `true`，否则被设置为 `false`。我们用它来决定，我们是否必须要更新滚动位置来确保我们在给记录添加内容的动作结束后，记录停留在末尾。

接下来，如果有任务进入队列中，我们更新进度和状态信息。

1. 如果进度条当前的最大值不同于队列中当前的任务总数（`totalTaskCount`），我们就要更新任务总数（`totalTaskCountElem`）的显示内容和进度条的最大值，以使它的比例正确。
2. 我们对已运行的任务数做同样的操作；如果 `progressBarElem.value` 不同于当前正被处理的任务数（`currentTaskNumber`），我们就要更新当前运行的程序数量值和进度条当前值的显示。

然后，如果有文本等待被添加到记录中（也就是说，`logFragment` 不为 `null`），我们使用 {{domxref("Node.appendChild", "Element.appendChild()")}} 将它添加到记录元素中，并将 `logFragment` 设置为以避免重复操作。

如果我们操作开始的时候记录被滚动到末尾，我们要确保它一直处理末尾的位置。然后我们将 `statusRefreshScheduled` 设置为 `false`，以表明我们已经处理过更新，可以安全地请求新的更新了。

#### 向记录添加文本

`log()` 函数可以向记录中添加指定的文本。因为我们不知道调用 `log()` 的时候是否可以立即安全地联系 DOM，我们将缓存记录文本一直到可以安全更新。在上面，在 `updateDisplay()` 的代码中，你可以找到更新动画帧时，实际添加记录的代码。

```js
function log(text) {
  if (!logFragment) {
    logFragment = document.createDocumentFragment();
  }

  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

首先，如果当前不存在一个名为 `logFragment` 的 {{domxref("DocumentFragment")}} 对象。该元素是伪 DOM，我们可以在其中插入元素，而无需立即更改主 DOM 本身。

然后我们创建一个新的元素，并将其内容设置为与输入文本匹配。接下来我们向 `logFragment` 中的伪 DOM 末尾添加一个新的元素。`logFragment` 将会累积记录条目直到下次因 DOM 改变而调用 `updateDisplay()` 的时候。

### 运行任务

现在，我们的任务管理和显示维护代码已经完成了，我们实际上可以开始设定完成工作的代码了

#### 任务处理器

`logTaskHandler()`，将是我们用来作为任务处理器的函数，也是用作任务对象 `handler` 属性的值。它是一个简单的为每个任务向记录输出大量内容的函数。在您自己的应用程序中，您可以将此代码替换为您希望在空闲时间执行的任何任务。只要记住任何 DOM 变化都需要通过 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 处理。

```js
function logTaskHandler(data) {
  log(`运行任务 #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### 主程序

当用户点击“开始”按钮，会触发所有操作，也会导致调用 `decodeTechnoStuff()` 函数。

```js hidden
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js
function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  const n = getRandomIntInclusive(100, 200);

  for (let i = 0; i < n; i++) {
    const taskData = {
      count: getRandomIntInclusive(75, 150),
      text: `该文本来自任务 ${i + 1}/${n}`,
    };

    enqueueTask(logTaskHandler, taskData);
  }
}

document
  .getElementById("startButton")
  .addEventListener("click", decodeTechnoStuff, false);
```

`decodeTechnoStuff()` 开始执行时会将任务总数（到现在为止添加到队列中的任务数）清零，并随后调用 `updateDisplay()` 以重置显示为“没有任何事发生”的状态。

这个示例去创建一个随机数量（100 到 200 之间）的任务。为此，我们使用 {{jsxref("Math.random()")}} 文档中作为示例提供的 [`getRandomIntInclusive()` 函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random#得到一个两数之间的随机整数，包括两个数在内)来获得要创建的任务数。

随后我们开始一个循环以创建实际的任务。对于每个任务，我们创建一个对象，`taskData`，其中包含两个属性：

- `count` 是要从任务输出到记录中的字符串数量。
- `text` 是要输出到日志的文本（由 `count` 指定的次数）。

我们调用 `enqueueTask()` 来将每个任务排入队列，将 `logTaskHandler()` 传入作为处理函数，将 `taskData` 传入，待处理函数调用时传入其中。

### 结果

下面就是以上代码实际功能结果。试一下，在你的浏览器开发者工具中使用它，并把它融入自己的代码中体验一下。

{{ EmbedLiveSample('示例', 600, 700) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
