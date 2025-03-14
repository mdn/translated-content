---
title: 贡献方案
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0ea79e9c21f720ad71d1a0e8a524e13bd7af6895
---

{{CSSRef}}

如果你愿意为布局手册贡献示例，那么本页将通过阐释步骤指导你发布示例。

## 好的方案是怎样的？

**任何有用的 web 设计模式的最简版本**。你 CSS 文件中的每一行代码都应该有助于演示该模式，省去无用的部分就是为了能让示例显得完美。这种想法就是，某个人既能将这种模式应用在网站中，又可以保持自己的风格。

一份方案包括以下内容：

- 一个实时示例，存储在 [CSS 示例 GitHub 存储库](https://github.com/mdn/css-examples)之中。
- 这份示例的可供下载版本，同样也存储在 CSS 示例仓库之中。
- 在本站 [CSS 布局手册](/zh-CN/docs/Web/CSS/Layout_cookbook)中的页面应包含以下组成部分：

  1. 介绍
  2. 要求
  3. 方案
  4. 做出的选择
  5. 任何有用的反馈或供选择的方法（如果相关）
  6. 无障碍考虑
  7. 浏览器兼容性（仅对未被全面支持的 CSS 属性）
  8. 其他资源

## 发布方案的步骤

要创建一个方案并将其添加到 CSS 布局手册中，请按照以下步骤操作：

1. [构建模式](#1._构建模式)
2. [创建一个实时示例](#2._创建实时示例)
3. [创建可下载版本](#3._创建可下载版本)
4. [提交拉取请求](#4._提交拉取请求)
5. [将内容添加到 MDN](#5._创建你的页面)

### 1. 构建模式

在将示例变成方案之前，首先要创建一个基础的 HTML 页面来展示你的模式。思考你想要演示的内容，并尽量保持简单。为类名使用描述性词语，如“container”或“item”。

确保在多个浏览器、视口大小和设备上测试了 HTML 和 CSS。此外，还要确保任何 CSS 样式都遵循无障碍指南。虽然可以使用支持有限的 CSS 属性，但在创建页面时务必包含浏览器支持信息，特别是在浏览器兼容性部分。在某些情况下，创建一个带有回退支持的示例版本会有所帮助。

### 2. 创建实时示例

手册页面上的实时示例，例如[居中元素](/zh-CN/docs/Web/CSS/Layout_cookbook/Center_an_element)的示例，以及 MDN 上的其他示例，允许读者尝试代码并更改相关部分，而不会被所有代码淹没。你的方案将通过一个或多个示例进行演示。

分叉 [CSS 示例仓库](https://github.com/mdn/css-examples)，然后查看 `css-cookbook` 文件夹。有一个 [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) 文件。复制此文件并以此为起点。将其保存在 `css-cookbook` 目录中，并为你的模式选择一个有意义的名称。模板包含注释，指导你在适当的地方添加各个部分。

此模板的重要部分如下：

- 有一个样式表用于编辑器面板，包含一些基本的主体样式和一个用于编辑器功能的 JavaScript 文件。请原样保留这些文件。
- `<head>` 包含两个样式块。第一个样式块用于读者无需更改即可尝试示例的元素。第二个样式块包含读者可能想要更改的项目。我们通常将所有 CSS 添加到第一个块，然后选择要移动到第二个块的规则。第二个块中的规则应该是模式的基本规则，可能是那些读者可以更改 CSS 值并查看模式更新的规则。
- 你需要在两个地方添加组件的 HTML：首先是在带有类 `preview` 的部分，然后是在带有类 `playable-html` 的 `<textarea>` 内。
- 可编辑的 CSS 也必须从第二个 `<head>` 块复制到 `playable-css` 部分。

一个简单的可用示例是 [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html)，它嵌入在[居中元素](/zh-CN/docs/Web/CSS/Layout_cookbook/Center_an_element)页面上。你可以使用它来查看如何正确添加各个部分。

如果你已经分叉了仓库并将我们的 CSS 和 JavaScript 文件与示例一起合并，在浏览器中打开你的实时示例应该会显示所有内容，就像在 MDN 页面上显示的那样。

#### 实用提示

- 不要缩进 textarea 内的 CSS 和 HTML；而是将代码对齐到行的开始。这在渲染时看起来会更好。
- 如果需要任何图像，请将它们放在示例目录中。你可以使用任何已经存在的图像。
- 你可以通过更改内联样式中的高度来调整 textarea 的高度。

### 3. 创建可下载版本

由于示例包含了我们所有的实时示例代码，我们希望为读者提供他们的示例所需的代码，省去任何不必要的项目。创建你的实时示例的副本，并在其名称中添加 `--download`。例如，`center.html` 的下载版本是 `center--download.html`。该文件将类似于你的初始示例。它应该是一个由单个 HTML 页面构成的基础版本的模式。

包含我们的包含样式表中的主体 CSS 规则是很有用的。参考 [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) 作为指南；这些规则提供了一个起点。

### 4. 提交拉取请求

在 [CSS 示例仓库](https://github.com/mdn/css-examples/pulls)上提交一个拉取请求（PR）。这样我们可以帮助你进行任何可能需要的示例更改，然后再创建你的页面。此外，示例需要上线才能被包含在内。这就是为什么首先创建代码示例然后创建解释性指南是有意义的。在你的 PR 中，解释模式及其演示内容。请参阅我们的[创建拉取请求指南](/zh-CN/docs/MDN/Community/Pull_requests#创建拉取请求)。

### 5. 创建你的页面

在你的示例 PR 合并后，在[布局手册目录](https://github.com/mdn/content/tree/main/files/zh-CN/web/css/layout_cookbook)中创建一个新页面的拉取请求。使用我们的[手册页面模板](https://github.com/mdn/content/blob/main/files/zh-CN/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1)。模板解释了每个部分的要求，你可以参考其他手册示例获取更多帮助。

请记得在主页面[布局手册](/zh-CN/docs/Web/CSS/Layout_cookbook)上添加指向你新方案的链接。

如果你有任何问题或希望有人查看你的页面，请通过我们的任何[沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels)与我们联系。

## 参见

- [手册页面模板](/zh-CN/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS 示例仓库](https://github.com/mdn/css-examples)
