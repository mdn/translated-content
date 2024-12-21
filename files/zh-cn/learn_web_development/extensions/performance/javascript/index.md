---
title: JavaScript 性能优化
slug: Learn_web_development/Extensions/Performance/JavaScript
original_slug: Learn/Performance/JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}

考虑如何在你的网站上使用 JavaScript 以及如何减少它可能造成的性能问题是非常重要的。虽然图片和视频占了平均网站下载字节的 70% 以上，但是逐字节来看，JavaScript 对性能的负面影响更大——它会显著影响下载时间、渲染性能、CPU 和电池使用。本文介绍了一些优化 JavaScript 的技巧和方法，以提高你的网站的性能。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，以及对<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端 Web 技术</a
        >的基本了解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解 JavaScript 对 Web 性能的影响，以及如何减轻或解决相关问题。
      </td>
    </tr>
  </tbody>
</table>

## 优化与否

在开始优化代码之前，你应该先回答一个问题：“我需要优化什么？”下面讨论的一些技巧和方法是适用于任何 Web 项目的良好实践，而其他一些只在特定情况下才需要。试图在所有地方应用这些技术可能是不必要的，也可能是浪费时间。你应该确定每个项目实际上需要哪些性能优化。

为此，你需要[测量性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance)。正如前面的链接所示，有多种不同的方法来测量性能，其中一些方法涉及复杂的[性能 API](/zh-CN/docs/Web/API/Performance_API)。然而，最好的入门方式是学习如何使用内置的浏览器[网络](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#网络工具)和[性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#通用性能报告工具)工具，查看页面加载的哪些部分花费了很长时间，并需要进行优化。

## 优化 JavaScript 的下载

最高效、最不阻塞的 JavaScript 是根本不使用 JavaScript。你应该尽量少使用 JavaScript。以下是一些需要记住的点：

- **并非总是需要框架**：你可能熟悉使用某个 [JavaScript 框架](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries)。如果你对使用该框架有经验和信心，并且喜欢它提供的所有工具，那么它可能是你构建大多数项目的首选。然而，框架会增加 JavaScript 的负担。如果你创建的是一个相对静态的体验，对 JavaScript 的要求很少，那么你可能不需要那个框架。也许你可以使用几行标准 JavaScript 来实现你需要的功能。
- **考虑更简单的解决方案**：你可能有一个华丽、有趣的解决方案要实现，但请考虑用户是否会喜欢它。他们是否更喜欢简单的东西？
- **删除未使用的代码**：这听起来很明显，但令人惊讶的是很多开发者忘记清除在开发过程中添加的不会被用到的功能。你需要谨慎并有意识地添加和删除代码。所有脚本都会被解析，无论它是否被使用；因此，加快下载速度的一个快速方法是摆脱任何不会被使用的功能。此外，要考虑通常只会使用框架中的一小部分功能。是否有可能创建一个仅包含你所需部分的框架的自定义构建版本？
- **考虑使用浏览器内置特性**：也许你可以使用浏览器已经具备的特性，而不是通过 JavaScript 自己创建。例如：
  - 使用[内置的客户端表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation#使用内置表单数据校验)。
  - 使用浏览器自带的 {{htmlelement("video")}} 播放器。
  - 使用 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)而不是 JavaScript 动画库（参见[处理动画](#处理_javascript_动画)）。

你还应该将 JavaScript 分成表示关键部分和非关键部分的多个文件。通过使用 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)可以比仅使用单独的外部 JavaScript 文件更高效地实现这一点。

然后，你可以优化这些较小的文件。[代码压缩](/zh-CN/docs/Glossary/Minification)减少文件中的字符数，从而减小 JavaScript 的字节数或大小。[Gzip 压缩](/zh-CN/docs/Glossary/gzip_compression)进一步压缩文件，即使你不对代码进行压缩也应该使用。[Brotli 压缩](/zh-CN/docs/Glossary/Brotli_compression)类似于 Gzip，但通常优于 Gzip 压缩。

你可以手动拆分和优化代码，但通常使用类似 [Webpack](https://webpack.js.org/) 的模块打包工具会做得更好。

## 处理解析和执行

在查看本节中包含的要点之前，重要的是要了解浏览器页面渲染过程中 JavaScript 是在*哪里*处理的。当一个网页被加载时：

1. 通常首先解析 HTML，按照页面上出现的顺序进行解析。
2. 遇到 CSS 时，解析 CSS 以了解需要应用于页面的样式。在此期间，开始获取链接的资源，如图像和网络字体。
3. 遇到 JavaScript 时，浏览器解析、评估并执行它。
4. 稍后，浏览器根据应用于每个 HTML 元素的 CSS 来确定每个元素的样式。
5. 然后将经过样式处理的结果绘制到屏幕上。

> [!NOTE]
> 这只是一个非常简单的叙述，但可以让你了解发生的事情。

这里关键的步骤是第 3 步。默认情况下，JavaScript 的解析和执行会阻塞渲染。这意味着浏览器在遇到 JavaScript 之后，会阻塞解析任何出现在其后的 HTML 代码，直到脚本处理完成。因此，样式和绘制也会被阻塞。因此，你不仅需要仔细考虑你要下载的内容，还要考虑代码何时以及以何种方式执行。

接下来的几个部分提供了优化 JavaScript 解析和执行的有用技巧。

## 尽早加载关键资源

如果某个脚本非常重要，并且你担心由于加载速度不够快而影响性能，你可以在文档的 {{htmlelement("head")}} 中加载它：

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

这个方法可以正常工作，但会阻塞渲染。更好的策略是使用 [`rel="preload"`](/zh-CN/docs/Web/HTML/Attributes/rel/preload) 来为关键 JavaScript 创建一个预加载器：

```html
<head>
  ...
  <!-- 预加载 JavaScript 文件 -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- 预加载 JavaScript 模块 -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

预加载的 {{htmlelement("link")}} 尽快获取 JavaScript，而不会阻塞渲染。然后，你可以在页面中任何位置使用它：

```html
<!-- 在合适的位置包含该脚本 -->
<script src="important-js.js"></script>
```

或者在脚本中使用它（在使用 JavaScript 模块的情况下）：

```js
import { function } from "important-module.js";
```

> [!NOTE]
> 预加载并不能保证脚本在你包含它时已经加载完成，但它确实意味着它将尽早开始下载。即使未完全移除阻塞渲染的时间，渲染阻塞时间仍将缩短。

## 推迟非关键 JavaScript 的执行

另一方面，你应该尽量推迟解析和执行非关键 JavaScript 的时间，直到它真正需要时再加载。提前加载它会不必要地阻塞渲染。

首先，你可以给 `<script>` 元素添加 `async` 属性：

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

这会导致脚本获取与 DOM 解析并行进行，因此它将在同一时间准备好，不会阻塞渲染。

> [!NOTE]
> 还有另一个属性 `defer`，它会导致脚本在文档解析完成之后，但在触发 [`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件之前执行。这与 `async` 有类似的效果。

你也可以直到需要时才加载 JavaScript。这可以通过 DOM 脚本编写来实现，例如：

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // 一旦 index.js 已完全加载，运行其中的函数
  init();
});
document.head.append(scriptElem);
```

可以使用 {{jsxref("operators/import", "import()")}} 函数动态加载 JavaScript 模块：

```js
import("./modules/myModule.js").then((module) => {
  // 对模块进行操作
});
```

## 分解长任务

当浏览器运行 JavaScript 时，它会将脚本组织成按顺序运行的任务，例如进行 fetch 请求、通过事件处理程序驱动用户交互和输入、运行 JavaScript 驱动的动画等等。

大部分任务都在主线程上运行，其中包括运行在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 中的 JavaScript。主线程一次只能运行一个任务。

当单个任务的执行时间超过 50 毫秒时，它被归类为长任务。如果用户在长任务正在运行时尝试与页面交互或请求重要的 UI 更新，他们的体验将受到影响。预期的响应或视觉更新将被延迟，导致 UI 看起来迟钝或无响应。

为了解决这个问题，你需要将长任务分解为较小的任务。这样可以给浏览器更多机会执行重要的用户交互处理或 UI 渲染更新，浏览器可以在每个较小任务之间执行它们，而不是仅仅在长任务之前或之后执行。在你的 JavaScript 中，你可以通过将代码拆分为单独的函数来实现这一点。这样做也有其他几个原因，比如更容易维护、调试和编写测试。

例如：

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

然而，这种结构对于主线程阻塞并没有帮助。由于所有五个函数都在一个主函数中运行，浏览器将它们整体作为一个长任务运行。

为了处理这个问题，我们倾向于定期运行一个“yield”函数，以使代码“让步给主线程”。这意味着我们的代码被分成多个任务，在执行每个任务之间，浏览器有机会处理高优先级任务，比如更新 UI。一个常见的模式是使用 {{domxref("setTimeout()")}} 将执行推迟到一个单独的任务中：

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

可以在这样的任务运行模式中使用它，以在每个任务运行后让步给主线程：

```js
async function main() {
  // 创建要运行的函数数组
  const tasks = [a, b, c, d, e];

  // 循环遍历任务
  while (tasks.length > 0) {
    // 从任务数组中取出第一个任务
    const task = tasks.shift();

    // 运行任务
    task();

    // 让步给主线程
    await yield();
  }
}
```

为了进一步改进，我们可以使用 {{domxref("Scheduling.isInputPending", "navigator.scheduling.isInputPending()")}}，仅在用户尝试与页面交互时运行 `yield()` 函数：

```js
async function main() {
  // 创建要运行的函数数组
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // 让步给挂起的用户输入
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // 从任务数组中取出第一个任务
      const task = tasks.shift();

      // 运行任务
      task();
    }
  }
}
```

这样可以避免在用户积极与页面交互时阻塞主线程，从而提供更流畅的用户体验。然而，通过仅在必要时让步，我们可以在没有用户输入需要处理时继续运行当前任务。这也避免了任务被放置在队列末尾，排在其他非必要的浏览器初始化任务之后。

## 处理 JavaScript 动画

动画可以改善感知性能，使界面更加流畅，让用户在等待页面加载时感觉到进展（例如加载旋转图标）。然而，更大更多的动画自然需要更多的处理能力来处理，这可能会降低性能。

最显然的动画建议是使用更少的动画——去除任何非必要的动画，或考虑为用户提供一个偏好设置，让他们可以关闭动画，例如当他们使用低功率设备或电池电量有限的移动设备时。

对于关键的 DOM 动画，建议尽可能使用 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)，而不是 JavaScript 动画（[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 提供了一种通过 JavaScript 直接连接到 CSS 动画的方式）。直接使用浏览器执行 DOM 动画而不是使用 JavaScript 操纵内联样式表的效率更高。另请参阅 [CSS 性能优化 > 处理动画](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS#处理动画)。

对于无法在 JavaScript 中处理的动画，例如在 HTML {{htmlelement("canvas")}} 上创建动画，建议使用 {{domxref("Window.requestAnimationFrame()")}} 而不是旧的选项，例如 {{domxref("Window.setInterval()")}}。`requestAnimationFrame()` 方法专门设计用于高效、一致地处理动画帧，以获得流畅的用户体验。基本模式如下所示：

```js
function loop() {
  // 在绘制下一帧动画之前清除 canvas
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  // 在 canvas 上绘制对象并更新其位置数据，
  // 准备下一帧动画
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // 调用 requestAnimationFrame，在正确的时间再次运行 loop() 函数，
  // 以保持动画的流畅性
  requestAnimationFrame(loop);
}

// 调用 loop() 函数一次，启动动画
loop();
```

你可以在[绘制图形 > 动画](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#动画)中找到有关 canvas 动画的简介，以及在[对象构建实践](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) 中找到更详细的示例。你还可以在 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中找到一整套 canvas 教程。

## 优化事件性能

跟踪及处理事件对于浏览器来说是很耗资源的，特别是当你持续运行一个事件时。例如，你可以使用 [`mousemove`](/zh-CN/docs/Web/API/Element/mousemove_event) 事件来跟踪鼠标的位置，以检查它是否仍在页面的某个区域内：

```js
function handleMouseMove() {
  // 当鼠标指针在 elem 内时执行一些操作
}

elem.addEventListener("mousemove", handleMouseMove);
```

你可能在页面中运行一个 `<canvas>` 游戏。当鼠标在 canvas 内部时，你需要不断检查鼠标移动和光标位置，并更新游戏状态——包括分数、时间、所有精灵的位置以及碰撞检测信息等。一旦游戏结束，你将不再需要进行所有这些操作，实际上，继续保持监听该事件将浪费处理能力。

因此，最好是删除不再需要的事件监听器。可以使用 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} 来实现：

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

另一个要点是尽可能使用事件委托。当你有一些代码需要在用户与大量子元素中的任何一个进行交互时，可以在它们的父元素上设置事件监听器。在任何子元素上触发的事件都会冒泡到它们的父元素，这样你无需单独为每个子元素设置事件监听器。减少要跟踪的事件监听器数量可以提高性能。

请参阅[事件委托](/zh-CN/docs/Learn_web_development/Core/Scripting/Events#事件委托)以了解更多详细信息和一个有用的示例。

## 编写更高效代码的技巧

有几个通用的最佳实践可以使你的代码运行更高效。

- **减少 DOM 操作**：访问和更新 DOM 的计算成本很高，因此你应该尽量减少 JavaScript 这种操作方面的操作量，特别是在执行持续的 DOM 动画时（参见上面的[处理 JavaScript 动画](#处理_javascript_动画)）。
- **批量进行 DOM 更改**：对于重要的 DOM 更改，你应该将它们按批次处理，而不是在每个更改发生时单独执行。这可以减少浏览器实际执行的工作量，并改善感知性能。将多个更新一次性完成，而不是不断进行小的更新，可以使界面看起来更流畅。一个有用的技巧是，当你有大量 HTML 代码要添加到页面时，先构建整个片段（通常在 {{domxref("DocumentFragment")}} 内部），然后一次性将其附加到 DOM 中，而不是逐个附加每个项目。
- **简化 HTML 代码**：DOM 树越简单，使用 JavaScript 进行访问和操作的速度就越快。仔细思考你的用户界面的需求，并删除不必要的冗余代码。
- **减少循环代码的数量**：循环是很消耗资源的，因此尽可能减少代码中的循环使用量。在不可避免使用循环的情况下：

  - 在不必要时避免运行完整的循环，适时使用 {{jsxref("Statements/break", "break")}} 或 {{jsxref("Statements/continue", "continue")}} 语句。例如，如果你正在搜索数组中的特定名称，找到名称后就可以跳出循环；没有必要继续运行循环迭代：

    ```js
    function processGroup(array) {
      const toFind = "Bob";
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === toFind) {
          processMatchingArray(array);
          break;
        }
      }
    }
    ```

  - 在循环外执行只需要做一次的工作。这可能听起来有点显而易见，但很容易被忽视。看下面的代码片段，它获取一个包含要进行某种处理的数据的 JSON 对象。在这种情况下，{{domxref("fetch()")}} 操作在每次循环迭代中都被执行，这是一种浪费计算能力的做法。可以将第 3 和第 4 行移到循环外部，这样网络获取操作只会执行一次。

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **将计算任务移到主线程之外**：在前面我们谈到了 JavaScript 通常在主线程上运行任务，长时间的操作可能会阻塞主线程，从而导致 UI 性能很差。我们还展示了如何将长任务分解为较小的任务，以缓解这个问题。处理这类问题的另一种方法是将任务完全移到主线程之外。有几种方法可以实现这一点：

  - 使用异步代码：[异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Introducing)基本上是指不会阻塞主线程的 JavaScript。异步 API 通常用于处理诸如从网络获取资源、访问本地文件系统上的文件或打开用户网络摄像头流等操作。因为这些操作可能需要很长时间，所以在等待它们完成的过程中阻塞主线程是不好的。相反，浏览器会执行这些函数，继续运行后续代码，这些函数将*在将来某个时间点*返回结果。现代异步 API 基于 Promise，这是一种用于处理异步操作的 JavaScript 语言特性。如果你有功能可以从异步运行中受益，则可以[编写自己的基于 Promise 的函数](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API)。
  - 在 Web Worker 中进行计算：[Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers) 是一种机制，允许你打开一个单独的线程来运行一段 JavaScript 代码，以便不会阻塞主线程。Worker 有一些限制，最大的限制是你不能在 Worker 内部运行 DOM 脚本。你可以执行大多数其他操作，并且 Worker 可以与主线程之间发送和接收消息。Worker 的主要用例是如果你有大量计算需要进行，而不希望它阻塞主线程，那么就需要使用 Worker。在 Worker 中进行计算，等待结果，并在准备好时将结果发送回主线程。
  - **使用 WebGPU**：[WebGPU](/zh-CN/docs/Web/API/WebGPU_API) 是一种浏览器 API，允许 Web 开发人员使用底层系统的 GPU（Graphics Processing Unit，图形处理单元）来进行高性能计算和绘制复杂的图像，这些图像可以在浏览器中呈现。它相对复杂，但可以提供比 Web Worker 更好的性能优势。

## 参见

- [优化长任务](https://web.developers.google.cn/articles/optimize-long-tasks)（web.developers.google.cn，2022 年）
- [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance")}}
