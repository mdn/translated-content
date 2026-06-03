---
title: 如何记录 web 错误
slug: MDN/Writing_guidelines/Howto/Document_web_errors
---

MDN Web 文档中的 [JavaScript 错误参考](/zh-CN/docs/Web/JavaScript/Reference/Errors)是一个帮助 web 开发人员处理[开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中出现的错误的项目。对于该项目，我们需要在 MDN Web 文档中编写更多的错误文档，以便我们可以在抛出消息的工具中添加更多的链接。本文介绍了如何记录 web 错误。

JavaScript 错误会包含一个“了解更多”的链接，该链接会将你带到 JavaScript 错误参考，其中包含了修复问题的额外建议。为了能够记录 web 错误，你需要知道或能够深入了解 [JavaScript](/zh-CN/docs/Web/JavaScript)。

## 步骤 1——确定要记录的错误

- Firefox/Gecko 的错误消息：<https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Edge/Chakra 的错误消息：<https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Chrome/v8 的错误消息：<https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## 步骤 2——查看现有的错误文档

- 查看现有的 [JavaScript 错误参考](/zh-CN/docs/Web/JavaScript/Reference/Errors)，了解如何记录错误。
- 根据你想要记录的错误类型，你可以仔细查看这些页面。
- 你可能会复制现有页面的内容来开始你新页面的记录。

## 步骤 3——创建新的错误页面

- 所有的错误页面都位于此目录下：[/docs/Web/JavaScript/Reference/Errors](/zh-CN/docs/Web/JavaScript/Reference/Errors)
- 要创建新页面，请参阅我们的[如何创建页面](/zh-CN/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)指南中的说明。

## 步骤 4——记录错误

- 使用从现有错误文档中复制的结构，或者从头开始。由你决定！
- 你应该至少包含：
  - 包含在不同浏览器中抛出的消息的语法框。
  - 错误类型。
  - 一段解释为什么会发生这种错误以及其后果的文本。应超越抛出的消息本身。
  - 展示错误的示例（可能不止一个！）以及展示如何修复代码的示例。
  - 指向 MDN Web 文档中其他参考资料的链接。

## 步骤 5——内容审查

在创建错误页面后，请将其以拉取请求的形式提交。会自动分配我们审查团队的成员来审查你的页面。
