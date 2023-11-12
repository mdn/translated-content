---
title: 序列动画
slug: Learn/JavaScript/Asynchronous/Sequencing_animations
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

在本测验中，你将使用我们在[如何使用 Promise](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises) 中学习的一些技术来更新页面，使它能够按顺序播放一系列动画。

<table>
  <tbody>
    <tr>
      <th scope="row">前置条件：</th>
      <td>
        基本的计算机知识，对 JavaScript 基础知识的一定了解，能够使用基于 Promise 的 API。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>测试使用基于 Promise 的 API 的能力。</td>
    </tr>
  </tbody>
</table>

## 起点

创建一份 <https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start> 的本地副本。它包含下列文件：

- alice.svg
- index.html
- main.js
- style.css

你需要编辑的唯一一个文件是“main.js”。

如果你在浏览器中打开“index.html”，你会看到三张图片呈对角排列：

![序列动画测验页面的屏幕截图](./sequencing-animations.png)

这些图像取自我们的 [Using the Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) 指南。

## 项目简介

我们希望更新此页面，来将动画依次应用于所有三个图像。也就是说，当第一个动画完成时，我们开始第二个动画，当第二个完成时，我们开始第三个动画。

要应用的动画已经在“main.js”中被定义：效果是旋转图像并缩小它至消失。

请[查看完成的示例](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/)来更好地了解页面的预期工作方式。注意：动画只会执行一次，你需要重新加载页面来重新运行它们。

## 完成步骤

### 设置第一个图像的动画

我们使用 [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 对图像进行动画处理，特别是 {{domxref("Element/animate", "element.animate()")}} 方法。

更新“main.js”以添加对 `alice1.animate()` 的调用，就像这样：

```js
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
```

重载页面，你应该就会看到第一个图像旋转收缩的动画。

### 设置所有图像的动画

接下来，我们希望在 `alice1` 完成时启动 `alice2` 的动画，在 `alice2` 完成时启动 `alice3` 的动画。

`animate()` 方法返回 {{domxref("Animation")}} 对象。这个对象有一个 `finished` 属性，这是会在一个在动画播放结束时兑现（fulfilled）的 `Promise`。所以我们可以利用这个 Promise 获得开始下一个动画的时机。

我们希望你尝试一些不同的方式来实现这个功能，以便于加强对使用 Promise 的不同方式的理解。

1. 首先，实现一个能够工作的代码，但它存在“回调地狱”问题（我们在[关于回调的讨论](/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing#回调)中提到过）的 Promise 版本。

2. 接下来，使用 [Promise 链](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises#链式使用_promise)来实现它。注意：可以用[箭头函数](/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions#箭头函数)的不同形式来编写这个函数。尝试这些不同的形式。哪个最简洁？哪个可读性最好？

3. 使用 [`async` 和 `await`](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises#async_和_await) 来实现它。

别忘了，`element.animate()` 并不返回一个 `Promise`：它返回一个 `Animation` 对象，该对象具有一个 `finished` 属性，这个属性才是 `Promise`。

## 评估或进一步的帮助

如果你希望自己的作品被评估，或者遇到困难想寻求帮助：

1. 将作品放入在线共享编辑器中，如 [CodePen](https://codepen.io/)，[jsFiddle](https://jsfiddle.net/)，或者 [Glitch](https://glitch.com/)。
2. 在 [MDN 论坛学习分类](https://discourse.mozilla.org/c/mdn/learn/250)中写一篇文章寻求评估和/或帮助。你的文章应该包括：

   - 一个描述性的标题，如“请帮助评估测序动画”。
   - 详细说明你已经尝试过的方法，以及你希望我们做的事情，例如：你遇到困难需要帮助，或者你完成了作品，需要评估。
   - 一个指向你的作品的链接（托管在在线共享编辑器中，如步骤 1 所述），这是一个很好的实践ーー如果你看不到他们的代码，就很难帮助有编码问题的人。
   - 指向实际任务或评估页面的链接，这样我们就可以找到你需要帮助的问题。

{{PreviousMenu("Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
