---
title: 扩展示例
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}

为帮助了解如何开发扩展，我们维护了一个包含简单扩展示例的代码仓库在<https://github.com/mdn/webextensions-examples>. 本文描述了仓库代码中所使用的 WebExtension APIs。

这些示例工作在 Firefox Nightly 下：大部分示例在 Firefox 的早期版本中也能够运行，请检查扩展 manifest.json 文件中的 [strict_min_version](/zh-CN/Add-ons/WebExtensions/manifest.json/applications) 键。

如果你想尝试这些示例，有下面三个选择：

1. 克隆代码库，通过 ["临时载入附加组件"](/zh-CN/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) 功能直接从源文件夹中载入扩展组件。再重启浏览器前该扩展将一直存在。
2. 克隆代码库，使用 [web-ext](/zh-CN/Add-ons/WebExtensions/Getting_started_with_web-ext) 命令行工具运行安装了扩展的 Firefox。
3. 克隆代码库，进入 [build](https://github.com/mdn/webextensions-examples/tree/master/build) 文件夹。该文件夹包含所有示例的已构建、带签名版本。你可以在 Firefox 中打开（菜单栏->文件->打开文件）并且永久安装这些扩展。这些扩展和直接从 [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) 安装的扩展别无二致。

> **警告：** 不要提交这些关于 WebExtension 例子的示例到 AMO (addons.mozilla.org) 上去，你无需为附加组件签名就能运行 WebExtension 的示例。只要按照上面的步骤来就可以了。

如果你想对代码仓库贡献，[给我们发送 pull request！](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
