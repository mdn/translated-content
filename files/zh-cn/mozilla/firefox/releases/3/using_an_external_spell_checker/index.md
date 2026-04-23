---
title: 使用外部拼写检查器
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

从 Firefox 3（以及 Thunderbird 3 和 SeaMonkey 2）开始，你现在可以使用扩展安装外部拼写检查器。

这与想要向内置的 Hunspell 拼写检查器添加词典的扩展不同。

拼写检查器扩展的示例可以在 [Voikko](https://voikko.puimula.org/) 项目中找到。

## 实现拼写检查支持

实现拼写检查需要执行以下步骤：

1. 实现一个派生自 `mozISpellCheckingEngine` 的类，该类需要实现所需的功能或访问外部拼写检查器。
2. 实现返回拼写检查器支持的词典列表 `mozISpellCheckingEngine` 的 `mozISpellCheckingEngine.getDictionaryList()` 方法。
3. 扩展程序需要提供注册回调函数。注册回调函数必须使用 `nsICategoryManager` 将名称等于实现拼写检查功能的类的合同 ID 的条目安装到“spell-check-engine”类别中。
4. 扩展程序还需要提供注销回调函数，并且该回调必须移除类别条目。

类别条目的值可以根据需要选择。例如，你可以选择使用它来记录扩展程序用于处理拼写检查的共享库路径，以便于扩展程序的其他组件查找。

## 拼写检查词典优先级

由拼写检查扩展程序提供的词典会覆盖内置词典。如果多个扩展程序为同一种语言提供词典，则使用最先找到的词典。
