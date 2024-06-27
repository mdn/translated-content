---
title: 屏幕阅读器
slug: Glossary/Screen_reader
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

屏幕阅读器是尝试以非视觉的形式表达屏幕显示内容的软件应用程序，通常使用文本转语音的方式，但也可以转换为盲文或声音图标。屏幕阅读器对于视力受损、文盲或有学习障碍的人而言至关重要。有一些是浏览器扩展屏幕阅读器，但大多数屏幕阅读器适用于所有的用户应用程序，而非仅局限于浏览器。

在 Web 无障碍方面，大多数用户代理提供了一个无障碍对象模型，屏幕阅读器与专用的无障碍 API 交互，使用各种操作系统特性并采用钩子编程技术。

## VoiceOver

macOS 自带 VoiceOver，这是一个内置的屏幕阅读器。要访问 VoiceOver，请转到“系统设置” > “辅助功能” > “朗读内容”。你也可以使用 fn+command + F5 来切换 VoiceOver 的开关。VoiceOver 既可以朗读内容，也可以显示内容。朗读的内容会在一个深灰色的框中显示出来。

桌面/笔记本电脑屏幕阅读器用户使用键盘或其他非指向设备导航网站。模拟使用的最佳方法是使用相同的方式。

就像没有 VoiceOver 的键盘导航一样，你可以使用 Tab 键和箭头键浏览交互元素：

- 下一个交互元素：Tab
- 上一个交互元素：Shift + Tab
- 同一名称组中的下一个单选按钮：右箭头或下箭头
- 同一名称组中的上一个单选按钮：左箭头或上箭头

使用 Tab 键和一系列其他键以及 Control + Option 键浏览页面内容

- 下一个标题：Control + Option + H
- 下一个列表：Control + Option + X
- 下一个图形：Control + Option + G
- 下一个表格：Control + Option + T
- 向下 HTML 层次顺序：Control + Option + 右箭头
- 上一个标题：Shift + Control + Option + H
- 上一个列表：Shift + Control + Option + X
- 上一个图形：Shift + Control + Option + G
- 上一个表格：Shift + Control + Option + T
- 向上 HTML 层次顺序：Control + Option + 左箭头

## 参见

- [ARIA](/zh-CN/docs/Web/Accessibility/ARIA)
