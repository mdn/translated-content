---
title: 交叉观察器 API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: ab3d575903f42cef83e062b8f3499240cd2a6bc8
---

{{DefaultAPISidebar("Intersection Observer API")}}

交叉观察器 API（Intersection Observer API）提供了一种异步检测目标元素与祖先元素或顶级文档的{{Glossary("viewport","视口")}}相交情况变化的方法。

过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：

- 在页面滚动时“懒加载”图像或其他内容。
- 实现“无限滚动”网站，在滚动过程中加载和显示越来越多的内容，这样用户就不必翻页了。
- 报告广告的可见度，以便计算广告收入。
- 根据用户是否能看到结果来决定是否执行任务或动画进程。

过去实施相交检测时，需要调用事件处理程序和循环方法，如 {{domxref("Element.getBoundingClientRect()")}} 来为每个受影响的元素建立所需的信息。由于所有这些代码都在主线程上运行，因此即使是其中的一行代码也会导致性能问题。当网站加载这些测试时，情况会变得非常糟糕。

考虑一个使用无限滚动的网页。它使用一个供应商提供的库来管理整个页面中周期性放置的广告，页面到处都是动画图形，并使用一个自定义库来绘制通知框和其他相似的东西。每个库都有自己的相交检测例程，全部在主线程上运行。网站的作者可能根本没有意识到这一点，因为他们可能对所使用的两个库的内部运作知之甚少。当用户滚动页面时，这些相交检测例程会在滚动处理代码中不断触发，导致用户对浏览器、网站和他们的电脑感到失望。

交叉观察器 API 可令代码注册一个回调函数，当特定元素进入或退出与另一元素（或{{glossary("viewport", "视口")}}）的交集时，或者当两个元素之间的交集发生指定变化时，该函数就会被执行。这样，网站就不再需要在主线程上做任何事情来监视这种元素交集，浏览器也可以根据自己的需要优化交集管理。

交叉观察器 API 无法提供重叠像素的确切数量或具体是哪些像素重叠；不过，它涵盖了“如果它们相交*N*%左右，我需要做什么”这种更常见的用例。

## 交叉观察器的概念和用法

交叉观察器 API 允许你配置一个回调函数，当以下情况发生时会被调用：

- **目标**元素与设备视口或指定元素相交。在交叉观察器 API 中，指定元素被称为**根元素**或**根**。
- 观察器（Observer）第一次监听观察目标元素。

通常情况下，需要观察目标元素最近的可滚动祖先的交集变化，如果目标元素不是可滚动元素的后代，则需要观察设备视口的交集变化。要观察相对于设备视口的交集，请为 `root` 选项指定 `null`。请继续阅读有关交叉观察器选项的更详细说明。

无论你是使用视口还是其他元素作为根元素，API 的工作方式都是一样的，只要目标元素的可见性发生变化，与根元素的交集达到所需的程度，就会执行你提供的回调函数。

目标元素与其根元素的交集程度就是**交叉比**。它表示目标元素可见的百分比，数值介于 0.0 和 1.0 之间。

### 创建一个交叉观察器

通过调用 IntersectionObserver 构造函数，创建交叉观测器，并将回调函数传给它，当一个方向或另一个方向越过阈值时，就运行该函数：

```js
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

阈值为 1.0 意味着目标元素完全出现在 `root` 选项指定的元素中 100% 可见时，回调函数将会被执行。

#### IntersectionObserver 选项

传递到 {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 构造函数的 `options` 对象，可以控制在什么情况下调用观察器的回调。它有以下字段：

- `root`
  - : 用作视口的元素，用于检查目标的可见性。必须是目标的祖先。如果未指定或为 `null`，则默认为浏览器视口。
- `rootMargin`
  - : 根周围的边距。其值可以类似于 CSS {{cssxref("margin")}} 属性，例如 `"10px 20px 30px 40px"`（上、右、下、左）。这些值可以是百分比。在计算交叉点之前，这组值用于增大或缩小根元素边框的每一侧。默认值为全零。
- `threshold`
  - : 一个数字或一个数字数组，表示目标可见度达到多少百分比时，观察器的回调就应该执行。如果只想在能见度超过 50% 时检测，可以使用 0.5 的值。如果希望每次能见度超过 25% 时都执行回调，则需要指定数组 \[0, 0.25, 0.5, 0.75, 1]。默认值为 0（这意味着只要有一个像素可见，回调就会运行）。值为 1.0 意味着在每个像素都可见之前，阈值不会被认为已通过。

#### 定位要观察的元素

创建一个观察器后，需要给定一个目标元素进行观察。

```js
let target = document.querySelector("#listItem");
observer.observe(target);

// 我们为观察器设置的回调将在第一次执行，
// 它将等待我们为观察器分配目标（即使目标当前不可见）
```

每当目标满足该 `IntersectionObserver` 指定的阈值（threshold），回调被调用。回调接收 {{domxref("IntersectionObserverEntry")}} 对象和观察器的列表：

```js
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // 每个条目描述一个目标元素观测点的交叉变化：
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

回调接收到的条目列表包括每个报告了相交状态变化的目标的一个条目。检查 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 属性的值，查看条目是否代表当前与根相交的元素。

请留意，你注册的回调函数将会在主线程中被执行。所以该函数执行速度要尽可能的快。如果需要执行任何耗时的操作，请使用 {{domxref("Window.requestIdleCallback()")}}。

此外，请注意，如果指定了 `root` 选项，目标必须是根元素的后代。

### 交集的计算

交叉观察器 API 所考虑的所有区域都是矩形；形状不规则的元素被视为占据了包围元素所有部分的最小矩形。同样，如果元素的可见部分不是矩形，那么该元素的交点矩形将被视为包含该元素所有可见部分的最小矩形。

了解一下 {{domxref("IntersectionObserverEntry")}} 提供的各种属性是如何描述交集的是很有帮助的。

#### 交集根与根边距

在跟踪元素与容器的交集之前，我们需要知道容器是什么。这个容器就是**交集根**，或**根元素**。它可以是文档中作为要观察元素的祖先的特定元素，也可以是 `null`，即使用文档的视口作为容器。

**_根交集矩形_**是用于检查目标或多个目标的矩形。这个矩形是这样确定的：

- 如果交集根是隐式根（即顶级 {{domxref("Document")}}），根交叉点矩形就是视口的矩形。
- 如果交集根存在溢出剪切，根交集矩形就是根元素的内容区域。
- 否则，根交集矩形就是交集根的客户端边界矩形（通过调用 {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} 返回）。

在创建 {{domxref("IntersectionObserver")}} 时，可以通过设置**根边距**（rootMargin）来进一步调整交叉点根矩形。`rootMargin` 中的值定义了添加到交叉点根边界框每一侧的偏移量，以创建最终的交叉点根边界（执行回调时将在 {{domxref("IntersectionObserverEntry.rootBounds")}} 中显示）。

#### 阈值

交叉观察器 API 使用**阈值**，而不是报告目标元素可见度的每一个微小变化。创建观察器时，可以提供一个或多个数值，代表目标元素可见度的百分比。然后，API 只报告超过这些阈值的可见性变化。

例如，如果希望每次目标元素的可见度向后或向前越过每个 25% 的标记时都能得到通知，可以在创建观察器时指定数组 \[0, 0.25, 0.5, 0.75, 1] 作为阈值列表。

调用回调时，系统会接收一个 `IntersectionObserverEntry` 对象列表，每个观察到的目标都会有一个对象，这些目标与根相交的程度发生了变化，使得暴露量在任一方向上都超过了某个阈值。

通过查看条目的 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 属性，可以了解目标*当前*是否与根相交；如果其值为 `true`，则表示目标至少与根元素或文档部分相交。这样就可以确定该条目是代表元素从相交到不再相交的过渡，还是代表从不相交到相交的过渡。

请注意，可能存在零相交矩形，如果交集正好沿着两者之间的边界，或者 {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}} 的面积为零。这种目标和根共享边界线的状态不足以被视为过渡到相交状态。

要感受阈值是如何工作的，请尝试滚动下面的盒子，每一个带颜色盒子的四个边角都会展示自身在根元素中的可见程度百分比，所以在你滚动根元素的时候你将会看到四个边角的数值一直在发生变化。每一个盒子都有不同的阈值：

- 第一个盒子为每个可见度百分点设置了一个阈值；也就是说，{{domxref("IntersectionObserver.thresholds")}} 数组为 `[0.00, 0.01, 0.02, /*...,*/ 0.99, 1.00]`。
- 第二个盒子只有一个阈值，位于 50% 刻度处。
- 第三个盒子每隔 10% 的可见度设置一个阈值（0%、10%、20% 等）。
- 最后一个盒子每 25% 设置一个阈值。

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // 观察器选项

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // 每个方框的阈值集数组。第一个方框的阈值是通过编程设置的，因为有很多个（每个百分点）。

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // 添加每个盒子，为每个盒子创建一个新的观察器

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // 为该盒子设置观察器

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // 滚动至开始位置

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let box = entry.target;
    let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("阈值", 500, 500)}}

#### 剪切和相交矩形

浏览器计算最终交叉点矩形的过程如下；这一切都已经事先完成了，但了解这些步骤有助于更好地准确把握交叉点出现的时间。

1. 在目标元素上调用 {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} 以获得目标元素的边界矩形（即完全包围组成该元素的每个组件的边界框的最小矩形）。这是最大的交集矩形。其余步骤将删除不相交的部分。
2. 从目标块的直接父块开始向外移动，将每个包含块的剪切（如果有）应用到交叉矩形。一个块的剪切是根据两个块的交点和 {{cssxref("overflow")}} 属性指定的剪切模式（如果有）确定的。将 `overflow` 设置为 `visible` 以外的任何值都会导致剪切发生。
3. 如果其中一个包含元素是嵌套浏览上下文（如 {{HTMLElement("iframe")}} 中包含的文档）的根元素，则交集矩形会剪切到包含上下文的视口，并通过容器的包含块继续向上递归。因此，如果到达 `<iframe>` 的顶层，交集矩形会剪切到框架的视口，然后框架的父元素会成为向交集根递归的下一个块。
4. 当递归向上到达交点根时，得到的矩形将映射到交点根的坐标空间。
5. 然后通过与[根交集矩形](#根交集矩形)相交来更新得到的矩形。
6. 最后，将该矩形映射到目标的 {{domxref("document")}} 坐标空间。

### 交集变化回调

当根元素中可见的目标元素数量超过某个可见度阈值时，{{domxref("IntersectionObserver")}} 对象的回调将被执行。回调的输入是由所有 {{domxref("IntersectionObserverEntry")}} 对象组成的数组（每次跨阈值产生一个），以及对 `IntersectionObserver` 对象本身的引用。

阈值列表中的每个条目都是一个 {{domxref("IntersectionObserverEntry")}} 对象，描述了一个被跨越的阈值；也就是说，每个条目都描述了给定元素与根元素相交的程度、元素是否被视为相交以及发生转变的方向。

下面的代码片段显示了一个回调，该回调会记录元素从与根不相交过渡到至少相交 75% 的次数。阈值为 0.0（默认值）时，当 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 的布尔值发生变化时，回调将被[近似](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting)调用。因此，该代码段首先检查过渡是否为正值，然后确定 {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} 是否高于 75%，如果高于 75%，就会递增计数器。

```js
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
};
```

## 接口

- {{domxref("IntersectionObserver")}}
  - : 交叉观察器 API 的主要接口。它提供了创建和管理观察器的方法，观察器可以针对相同的交叉点配置观察任意数量的目标元素。每个观察器都可以异步观察一个或多个目标元素与共享的祖先元素或其顶层 {{domxref("Document")}} 的{{Glossary('viewport', '视口')}}之间的交集变化。祖先或视口被称为**根**。
- {{domxref("IntersectionObserverEntry")}}
  - : 描述目标元素与其根容器在特定过渡时刻的交集。这种类型的对象只能通过两种方式获得：作为 `IntersectionObserver` 回调的输入，或通过调用 {{domxref("IntersectionObserver.takeRecords()")}} 获得。

## 一个简单的示例

这个简单的示例会使目标元素在可见度变高或变低时改变颜色和透明度。在[使用交叉观察器 API 为元素可见性计时](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)中，可以找到一个更广泛的示例，展示如何对一组元素（如广告）对用户的可见时间进行计时，并通过记录统计数据或更新元素对该信息做出反应。

### HTML

这个示例的 HTML 代码非常简短，主要元素是我们要针对的盒子（其 ID 为 `"box"`），以及盒子中的一些内容。

```html
<div id="box">
  <div class="vertical">来看看<strong>这个盒子</strong>吧！</div>
</div>
```

### CSS

在本示例中，CSS 并不是非常重要；它将元素排列出来，并确定 {{cssxref("background-color")}} 和 {{cssxref("border")}} 属性可以参与 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions)，我们将使用 CSS 过渡来影响元素的变化，使其变得或多或少模糊不清。

```css
#box {
  background-color: rgba(40, 40, 190, 1);
  border: 4px solid rgb(20, 20, 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

最后，让我们来看看使用交叉观察器 API 来实现目标的 JavaScript 代码。

#### 初始设置

首先，声明一些变量并设置观察器。

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// 设定好一切
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

我们准备的常量和变量有：

- `numSteps`
  - : 一个常数，表示我们希望在 0.0 和 1.0 可见度比率之间设置的阈值。
- `prevRatio`
  - : 这个变量将用来记录上次越过阈值时的可见度比率；这将让我们知道目标元素的可见度是变高了还是变低了。
- `increasingColor`
  - : 一个字符串，用于定义当可见度比率增加时，我们将应用于目标元素的颜色。字符串中的“ratio”一词将用目标元素当前的可见度比率代替，这样，元素不仅会改变颜色，而且会随着遮挡程度的降低而变得越来越不透明。
- `decreasingColor`
  - : 同样，这也是一个字符串，它定义了当可见度比率降低时我们将应用的颜色。

我们调用 {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} 开始监听 {{domxref("Window/load_event", "load")}} 事件；页面加载完成后，我们使用 {{domxref("Document.querySelector", "querySelector()")}} 获取 ID 为 `"box"` 的元素引用，然后调用我们稍后将创建的 `createObserver()` 方法来处理交叉观察器的构建和设置。

#### 创建交叉观察器

一旦页面加载完成，`createObserver()` 方法将被调用，以实际创建新的 {{domxref("IntersectionObserver")}} 并开始观察目标元素。

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

首先要设置一个包含观察器设置的 `options` 对象。我们希望观察目标元素相对于文档视口的可见性变化，因此 `root` 为 `null`。我们不需要边距，因此边距偏移量 `rootMargin` 被指定为“0px”。这将导致观察器在不增加（或减少）空间的情况下观察目标元素边界与视口边界之间交点的变化。

可见度比率阈值列表 `threshold` 由函数 `buildThresholdList()` 构建。在本例中，阈值列表是通过编程构建的，因为阈值有很多，而且数量是可以调整的。

一旦 `options` 准备就绪，我们就可以创建新的观察器，调用 {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 构造函数，指定当交叉点越过某个阈值时调用的函数 `handleIntersect()` 和我们的选项集。然后，我们在返回的观察器上调用 {{domxref("IntersectionObserver.observe", "observe()")}} ，并向其传递所需的目标元素。

我们可以选择监控多个元素相对于视口的可见性交叉变化，如果我们想这样做的话，可以为每个元素调用 `observer.observe()`。

#### 建立阈值比率数组

建立阈值列表的 `buildThresholdList()` 函数看起来像这样：

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

通过为 1 到 `numSteps` 之间的每个整数 `i` 向 `thresholds` 数组推送值 `i/numSteps` 来建立阈值数组，每个阈值都是 0.0 到 1.0 之间的比率。它还会推 0 以包含该值。根据 `numSteps` 的默认值（20），结果是下面的阈值列表：

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>比率</th>
        <th>#</th>
        <th>比率</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0.55</td>
      </tr>
    </tbody>
</table>

当然，我们也可以将阈值数组硬编码到我们的代码中，通常这也是你最终要做的。但这个示例为添加配置控制来调整粒度等留出了空间。

#### 处理交集变化

当浏览器检测到目标元素（在我们的例子中是 ID 为 `"box"` 的元素）被揭开或遮盖，以致其可见性比例超过了列表中的某个阈值时，浏览器就会调用我们的处理函数 `handleIntersect()`：

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

对于 `entries` 列表中的每个 {{domxref("IntersectionObserverEntry")}}，我们都会查看该条目中的 {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} 是否上升，如果是，我们就将目标的 {{cssxref("background-color")}} 设置为 `increasingColor` 中的字符串（记住，是 `"rgba(40, 40, 190, ratio)"`），并用条目的 `intersectionRatio` 替换“ratio”。结果是：不仅颜色发生了变化，目标元素的透明度也发生了变化；随着交集比率的降低，背景色的 alpha 值也会随之降低，从而使元素更加透明。

同样，如果 `intersectionRatio` 正在下降，我们就会使用字符串 `decreasingColor`，并在设置目标元素的 `background-color` 之前用 `intersectionRatio` 替换其中的“ratio”。

最后，为了跟踪交叉比是上升还是下降，我们会在变量 `prevRatio` 中记住当前的交叉比。

### 结果

下面是生成的内容。上下滚动本页，注意滚动时方框外观的变化。

{{EmbedLiveSample('一个简单的示例', 425, 425)}}

在[使用交叉观察器 API 为元素可见性计时](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)中有一个更广泛的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [交叉观察器 polyfill](https://github.com/w3c/IntersectionObserver)
- [使用交叉观察器 API 为元素可见性计时](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} 和 {{domxref("IntersectionObserverEntry")}}
