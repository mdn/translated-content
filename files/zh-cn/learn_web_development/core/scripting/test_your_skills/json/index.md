---
title: 测试你的技能：JSON
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

本技能测试用于评估你是否理解我们的[使用 JSON](/zh-CN/docs/Learn_web_development/Core/Scripting/JSON) 一文。

> [!NOTE]
> 你可以通过下载代码并于在线编辑器（如 [CodePen](https://codepen.io/) 或 [JSFiddle](https://jsfiddle.net/)）中加载代码来尝试找到解决方案。如果有错误，错误将记录在页面的结果面板中或浏览器的 JavaScript 控制台之中，以期帮助你完成调试。
>
> 如果你遇到困难，可以通过我们的[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## JSON 1

本文中唯一的任务涉及访问 JSON 数据并在页面中使用它。关于一些母猫及其小猫的 JSON 数据可在 [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json) 中获得。JSON 作为文本字符串加载到页面中，并在 `displayCatInfo()` 函数的 `catString` 参数中提供。你的任务是填写 `displayCatInfo()` 函数中缺失的部分来存储：

- 三只母猫的名字，用逗号分隔，存储在 `motherInfo` 变量中。
- 小猫的总数，以及雄性和雌性的数量，存储在 `kittenInfo` 变量中。

然后，这些变量的值将在段落中打印到屏幕上。

一些提示/问题：

- JSON 数据在 `displayCatInfo()` 函数内作为文本提供。在你能从中获取任何数据之前，你需要将其解析为 JSON。
- 你可能想要使用外部循环来遍历猫并将它们的名字添加到 `motherInfo` 变量字符串中，以及使用内部循环来遍历所有小猫，计算所有/雄性/雌性小猫的总数，并将这些详细信息添加到 `kittenInfo` 变量字符串中。
- 最后一只母猫的名字前面应该有一个“和”字，并且在句末还应该有一个句号。你应如何来确保无论 JSON 中有多少只猫都能正常工作？
- 为什么 `para1.textContent = motherInfo;` 和 `para2.textContent = kittenInfo;` 行在 `displayCatInfo()` 函数内部，而不是在脚本的末尾？这与异步代码有关。

尝试更新下面的实时代码来重现完成的示例：

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> [!CALLOUT]
>
> [下载此任务的起始文件](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/json1-download.html) 以在你自己的编辑器或在线编辑器中工作。
