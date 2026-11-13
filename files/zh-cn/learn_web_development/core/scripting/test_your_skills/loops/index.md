---
title: 技能测试：循环
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

这个技能测试的目标是评估你是否理解了[循环吧，代码](/zh-CN/docs/Learn_web_development/Core/Scripting/Loops)一文。

> [!NOTE]
> 你可以下载代码并放入在线编辑器（如 [CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)）中来尝试解决问题。
>
> 如果你遇到了困难，可以通过[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)联系我们。

## 实用的 DOM 操作

为了完成下面的某些问题，你需要编写一些 [DOM](/zh-CN/docs/Glossary/DOM) 操作代码——例如创建新的 HTML 元素，将它们的文本内容设为特定的字符串值，以及将它们嵌套到页面中已有的元素中——这些都要通过 JavaScript 来完成。

我们还没有在课程中明确讲述这些知识，但是你将会看到一些使用这些知识的示例；并且我们希望你能研究一下，为了成功解答问题，你需要哪些 DOM API。一个好的出发点是我们的[操作文档](/zh-CN/docs/Learn_web_development/Core/Scripting/DOM_scripting)教程。

## 循环 1

在第一个循环任务中，我们希望你创建一个简单的循环，遍历给定的 `myArray` 中的所有元素，将它们放在列表项（即 [`<li>`](/zh-CN/docs/Web/HTML/Reference/Elements/li) 元素）中，将列表项添加到给定的 `list` 中，最后打印到屏幕上。

> [!CALLOUT]
>
> [下载此任务的初始代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops1-download.html)以在自己的编辑器或在线编辑器中完成任务。

## 循环 2

在这个任务中，我们希望你编写一个简单的程序，在给定名字的情况下，搜索一个包含名字和电话号码的[对象](/zh-CN/docs/Glossary/Object)数组（`phonebook`）；如果找到了名字，将名字和电话号码输出到段落（`para`）中，然后退出循环，让它不要继续进行。

如果你还没有知悉和对象有关的知识，不要担心！现在你只需要知道如何访问成员–值对就可以了。你可以在 [JavaScript 对象基础](/zh-CN/docs/Learn_web_development/Core/Scripting/Object_basics)教程中阅读有关对象的内容。

开始时，你有三个变量：

- `name`——包含要搜索的名字。
- `para`——包含对段落的引用，用于输出结果。
- `phonebook`——包含要搜索的电话簿条目。

你需要使用一种在上一个任务中没有使用过的循环类型。

> [!CALLOUT]
>
> [下载此任务的初始代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops2-download.html)以在自己的编辑器或在线编辑器中完成任务。

## 循环 3

在最后一项任务中，你有以下变量和函数：

- `i`——初始值为 500；应该用作迭代器。
- `para`——包含对段落的引用，用于输出结果。
- `isPrime()`——一个函数，当传入的数是质数时返回 `true`，不是时返回 `false`。

你需要使用循环来倒序遍历从 2 到 500 的数（1 不算质数），并使用这些数调用给定的 `isPrime()` 函数。对于不是质数的数，继续下一次循环迭代。对于是质数的数，将它添加到段落的 `textContent` 中，并使用某种分隔符分隔。

你需要使用一种在前两个任务中没有使用过的循环类型。

> [!CALLOUT]
>
> [下载此任务的初始代码](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/loops/loops3-download.html)以在自己的编辑器或在线编辑器中完成任务。
