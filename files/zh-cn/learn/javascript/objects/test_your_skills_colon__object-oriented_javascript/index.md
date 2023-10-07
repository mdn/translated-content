---
title: 测试你的技能：面向对象的 Javascript
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
---

{{learnsidebar}}

这个测试的目的是为了评估你是否已经理解了我们的 [JavaScript 中的类](/zh-CN/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)这一文章。

> **备注：** 你可以尝试在下方的交互式编辑器，但是若你下载源码并使用在线工具（例如 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)）来尝试这些任务，可能会更有帮助。
>
> 如果你遇到了困难，请联系我们以寻求帮助——见本页面底部的[评估或进一步帮助](#评估或进一步帮助)。

> **备注：** 在下方的示例中，如果你的代码中存在错误内容，这些错误将在页面的结果面板中显示，以此来帮助你想出解决方案（若是下载的版本，请进入浏览器的 JavaScript 控制台）。

## 面向对象的 Javascript 1

在这个任务中，我们为你提供了 `Shape` 类的初始定义。它有三个属性：`name`、`sides` 和 `sideLength`。这个类只模拟了所有边长都相同的形状，例如：正方形或等边三角形。

我们希望你：

- 向这个类添加构造函数。构造函数接受 `name`、`sides` 和 `sideLength` 属性的参数，并对它们进行初始化。
- 向这个类添加一个新的 `calcPerimeter()` 方法，用于计算它的周长（形状外边缘的长度），并将结果记录到控制台中。
- 创建 `Shape` 类的一个新的实例，名为 `square`。将其 `name` 属性值设为 `square`，`sides` 属性值设为 `4`，`sideLength` 属性值设为 `5`。
- 调用 `calcPerimeter()` 方法，以查看它是否按预期将计算结果记录到浏览器的控制台中。
- 创建 `Shape` 类的一个新的实例，名为 `triangle`。将其 `name` 属性值设为 `triangle`，`sides` 属性值设为 `3`，`sideLength` 属性值设为 `3`。
- 调用 `triangle.calcPerimeter()`，以查看它是否正常工作。

尝试更新下面的实时代码，以重现完成的示例：

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> **标注：**
>
> [下载此任务的初始代码](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs1-download.html)，以便在你自己的编辑器或在线编辑器中尝试。

## 面向对象的 Javascript 2

接下来，我们希望你创建一个继承自 `Shape` 的 `Square` 类，并添加一个 `calcArea()` 方法，用于计算正方形的面积。同时，设置构造函数，以便 `Square` 对象实例的 `name` 属性自动设置为 `square`，`sides` 属性自动设置为 `4`。因此，在调用构造函数时，你只需要提供 `sideLength` 属性。

创建一个使用适当属性值的 `Square` 类的实例，名为 `square`，并调用它的 `calcPerimeter()` 和 `calcArea()` 方法，以表明其是否正常工作。

尝试更新下面的实时代码，以重现完成的示例：

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> **标注：**
>
> [下载此任务的初始代码](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/oojs/oojs2-download.html)，以便在你自己的编辑器或在线编辑器中尝试。

## 评估或进一步帮助

你可以在上面的交互式编辑器中练习这些示例。

如果你希望对自己的工作成果进行打分评估，或者遇到了困难并希望寻求帮助：

1. 将你完成的内容放到在线、可分享的编辑器，如：[CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/) 或 [Glitch](https://glitch.com/)。你可以自行编写代码，或使用上面小节中链接的初始文件。
2. 在 [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250) 中发贴寻求打分评估或帮助。你的贴子需要包含：

   - 一个描述的标题，如：“Assessment wanted for OOJS 1 skill test”。
   - 你已经尝试过的详细内容，以及你希望我们能够做什么，例如：你遇到了困难，想要寻求帮助；或希望得到打分评估。
   - 一个指向用于打分评估或寻求帮助的示例代码的链接（使用上文中提到的任意一种在线的、可分享的编辑器）。这是一种很好的形式——如果别人没法看到你的代码，他们很难对你提供代码上的帮助。
   - 一个指向实际任务或评估页面的链接，以便我们找到你需要得到帮助的问题。
