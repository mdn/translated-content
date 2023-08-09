---
title: 扩展示例
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}

为帮助了解如何开发扩展，我们维护了一个包含简单扩展示例的代码仓库在 <https://github.com/mdn/webextensions-examples>。本文描述了仓库代码中所使用的 WebExtension API。

这些示例工作在 Firefox Nightly 下：大部分示例在 Firefox 的早期版本中也能够运行，请检查扩展 manifest.json 文件中的 [strict_min_version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键。

> **警告：** 有些示例只能在特定的域或页面下运行。每个示例的限制都已在其自述文件中详述。默认情况下，这些示例都不能在浏览器的隐私浏览窗口中运行，参阅[隐私浏览下的扩展](https://support.mozilla.org/zh-CN/kb/隐私浏览窗口中的扩展#w_zai-yin-si-chuang-kou-zhong-kai-qi-huo-guan-bi-kuo-zhan)了解详情。

如果你想尝试这些示例，有下面三个选择：

1. 克隆代码库，通过[“临时载入附加组件”](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)功能直接从源文件夹中载入扩展组件。在重启浏览器前，该扩展将一直存在。
2. 克隆代码库，使用 [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 命令行工具运行安装了扩展的 Firefox。
3. 克隆代码库，在 Firefox 中使用**文件**>**打开文件**，在 [`build`](https://github.com/mdn/webextensions-examples/tree/main/build) 文件夹中找到这些例子。`build` 文件夹包含所有例子的构建和签名版本。这样就可以永久地安装这些例子了。

> **警告：** 不要提交这些关于 WebExtension 例子的示例到 AMO（addons.mozilla.org）上去，你无需为附加组件签名就能运行 WebExtension 的示例。只要按照上面的步骤来就可以了。

如果你想对代码仓库贡献，[给我们发送 pull request！](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)

{{WebExtAllExamples}}
