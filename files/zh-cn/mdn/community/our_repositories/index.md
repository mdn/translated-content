---
title: MDN Web 文档仓库
slug: MDN/Community/Our_repositories
---

[MDN Web 文档](/)是一个复杂的项目，有很多不同的部分。熟悉项目的不同仓库（repository）是个好主意。本文档旨在帮助你找到在为 MDN Web 文档项目中不同部分做出贡献时可能需要的不同仓库。

## 仓库层级

### 一级

这些仓库中的代码是 MDN Web 文档项目的核心，并运行在 Mozilla 拥有的域名上。

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

一级项目至少应该有 3 名成员，其中至少有两名具有管理员权限。

### 二级

这些仓库主要集中于支持内容，例如代码示例、MDN Web 文档学习区、本地化和示例项目。例如：

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

二级项目至少应该有 2 名成员，其中至少有一名具有管理员权限。

### 三级

这些仓库用于项目规划、记录项目本身和社区参与。例如：

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

三级项目需要有 1 名管理员。

## 核心仓库

- **核心内容**：<https://github.com/mdn/content>。MDN Web 文档内容最重要的仓库——这是存储网站所有核心英文内容的地方，也是你对页面内容进行所有标准更改的地方。
- **MDN Web 文档平台**：<https://github.com/mdn/yari>。这是存储 MDN Web 文档平台的地方，如果你想对我们的高级页面结构或渲染机制进行更改，就需要去这里。
- **浏览器兼容性数据**：<https://github.com/mdn/browser-compat-data>。这是存储用于生成我们参考页上的浏览器兼容性表格的数据的地方（[示例](/zh-CN/docs/Web/HTML/Element/progress#浏览器兼容性)）。如果你对 Web 特性的浏览器兼容性有所了解，或者愿意并且能够进行一些研究和/或实验，你可以帮助更新 MDN 的[浏览器兼容性数据](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)。
- **交互示例**：<https://github.com/mdn/interactive-examples>。这个仓库存储了许多参考页顶部的示例代码块（[示例](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)）。可以在这里编辑这些示例。
- **Bob** 又名 Builder of Bits：<https://github.com/mdn/bob>。这个仓库存储了用于生成许多参考页顶部的漂亮的可编辑、可复制的示例（[示例](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)）的渲染代码。
- **本地化内容**：<https://github.com/mdn/translated-content>。这是存储本地化内容的地方。如果你想帮助将页面翻译成我们[活跃维护的语言环境](https://github.com/mdn/translated-content#locales)之一，请前往这里。
- **工作流**：<https://github.com/mdn/workflows>。不断增长的，可在 MDN Web 文档仓库上使用的可重用 GitHub Actions 的集合。

## 代码示例

### 代码示例和演示

MDN Web 文档的 GitHub 组织包含大量的示例仓库。这些示例通常包含独立的代码示例，通常从我们的页面链接到这些示例，但有时你会发现这些示例中的某一个会通过使用宏调用（如 `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`）嵌入到页面中。

请始终牢记，如果你正在更新任何给定页面上的代码，你也需要更新相应的示例仓库。

- [**dom-examples**](https://github.com/mdn/dom-examples)
- [**css-examples**](https://github.com/mdn/css-examples)
- [**webaudio-examples**](https://github.com/mdn/webaudio-examples)
- [**webassembly-examples**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-examples**](https://github.com/mdn/indexeddb-examples)
- [**js-examples**](https://github.com/mdn/js-examples)
- [**html-examples**](https://github.com/mdn/html-examples)
- [**web-components-examples**](https://github.com/mdn/web-components-examples)
- [**webextension-examples**](https://github.com/mdn/webextensions-examples)
- [**pwa-examples**](https://github.com/mdn/pwa-examples)
- [**houdini-examples**](https://github.com/mdn/houdini-examples)
- [**headless-examples**](https://github.com/mdn/headless-examples)
- [**perf-examples**](https://github.com/mdn/perf-examples)
- [**devtools-examples**](https://github.com/mdn/devtools-examples)
