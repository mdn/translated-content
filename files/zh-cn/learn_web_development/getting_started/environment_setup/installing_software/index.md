---
title: 安装基础软件
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

在这篇文章中，我们将讨论进行简单 Web 开发所需的软件以及哪些软件是现在就需要安装的，包括代码编辑器和现代 Web 浏览器。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本熟悉你的电脑操作系统。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>理解入门需要使用哪些软件。</li>
          <li>安装一个代码编辑器，一些现代浏览器以及一个测试服务器。</li>
          <li>探索其他常见类型应用的可选项。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 代码编辑器

对于任何开发人员来说，一个像样的代码编辑器都是他们机器上最重要的东西之一。除了编写代码之外，代码编辑器还提供了一系列其他功能。在本系列的后续文章中，我们将专门用一整篇文章介绍代码编辑器。

对于当前阶段，我们建议安装 [Visual Studio Code](https://code.visualstudio.com/)，它支持多种平台，功能强大，支持丰富，而且是我们主要使用的编辑器。现在先安装它，本文的其余部分会以它为例展开。

## 现代 Web 浏览器

现代 Web 浏览器对于 Web 开发至关重要，你可以在访客使用的浏览器上测试你的网站或应用。此外，最好保持你的 Web 浏览器处于最新版本，以确保它们支持最新的 Web 技术并应用最新的安全修复。

> [!NOTE]
> 大多数浏览器都会自动安装更新，在重启时切换到新版本。你通常也可以在浏览器的“关于”页面检查更新，例如（对于 macOS 的 Firefox/Chrome）在 Firefox > 关于 Firefox 或 Chrome > 关于 Google Chrome 中，或者（对于 Windows 的 Firefox/Chrome）在菜单图标 > 帮助 > 关于 Firefox 或菜单图标 > 帮助 > 关于 Google Chrome 中。

对于当前阶段，你应该安装几个桌面和移动/替代设备浏览器来测试你的代码。尽管 Web 浏览器通常在桌面端、笔记本电脑和移动设备上出现，但其他设备上的 Web 浏览器也并不罕见，例如平板电脑、手表和电视。如果可能的话，确保下面列表中每一行你都安装了至少一个浏览器（这样以避免仅在基于相同的渲染引擎的多个浏览器中测试）：

- 桌面端浏览器：
  - Chromium：[Google Chrome](https://www.google.cn/chrome/)、[Opera](https://www.opera.com/browsers/opera)、[Brave](https://brave.com/download/)、[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/)、[Vivaldi](https://vivaldi.com/)。
  - Gecko：[Mozilla Firefox](https://www.mozilla.org/zh-CN/firefox/new/)。
  - WebKit：[Apple Safari](https://www.apple.com/safari/)。
- 移动端/替代设备浏览器：
  - Chromium（Android）：[Google Chrome](https://www.google.cn/chrome/go-mobile/)、[Opera](https://www.opera.com/browsers/opera)、[Brave](https://brave.com/download/)、[Microsoft Edge](https://www.microsoft.com/zh-cn/edge/mobile)、[三星浏览器](https://www.samsung.com.cn/support/model/samsung-internet/)、[Vivaldi](https://vivaldi.com/android/)。
  - Gecko（Android）：[Mozilla Firefox](https://www.mozilla.org/zh-CN/firefox/browsers/mobile/android/)。
  - WebKit（iOS）：[Apple Safari](https://www.apple.com/safari/)。
    > [!NOTE]
    > 上面列出的大多数浏览器都有 iOS 版本，但由于苹果的 App Store 规则限制，这些浏览器在历史上都是由苹果的 WebKit 引擎驱动的。在本文撰写的时候，由于监管变化，这些浏览器都开始开发基于自有渲染引擎的 iOS 版本。参见[苹果终于允许 Chrome 和 Firefox 在 iPhone 上运行完整版本了](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu)。

## 本地 Web 服务器

通常情况下，当你在浏览器中输入网址加载网站时，浏览器会从世界某个地方的远程服务器上获取文件来组合渲染该网站。你将在本系列的下一篇文章中深入了解它是如何工作的。

当在本地（在你自己的机器上）创建网站时，你通常可以直接在浏览器中打开主 HTML 索引文件来进行测试。然而，一些例子需要在本地安装的 Web 服务器中运行。

我们找到的让本地服务器在你的电脑上可用的最简单方法之一，就是使用代码编辑器扩展——这样，你就可以直接在代码编辑器中使用了。在 Visual Studio Code 中，请按照以下步骤操作：

1. 使用*查看* > *扩展*菜单选项打开*扩展*面板。
2. 在面板顶部的“在应用商店中搜索扩展”框中，输入“live preview”。搜索结果的第一个应该就是微软创建的“[_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)”扩展。
3. 点击该选项，即可打开一个包含使用说明的扩展详情页。
4. 点击*安装*按钮安装扩展。
5. 现在，当你使用编辑器编辑 HTML 文件时，你就可以点击“Show Preview”按钮，在单独的标签页中打开实时示例。

上面的方案很简单，但不够灵活。在未来的开发中，你可能会需要一个更灵活的本地服务器方案，以便在其他浏览器中加载示例。有关其他可选方案（以及关于为什么我们需要本地服务器的更多背景信息），参见[如何设置一个本地测试服务器？](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)。

## 图像编辑器

Web 开发者通常需要处理图像文件，以便在他们创建的网站上使用。这通常意味着设计/创建图像资产，同时，图像通常由图形设计师（可能是团队成员或第三方）提供，在这种情况下，Web 开发者可能需要裁剪或调整他们收到的文件。

MDN 学习区的文章不需要你创建自己的图像，但其中一些可能需要你调整我们提供的文件。

有很多图形编辑工具可供选择。*如果*你觉得你需要它，我们建议你在学习后期再考虑购买昂贵的商业产品。现在有很多免费软件工具和在线服务可能已经足够好了。

比如：

- macOS 自带一个名为[预览](https://support.apple.com/zh-cn/guide/preview/welcome/mac)的工具。它主要用于查看图片和 PDF 文件，同时也具备一些非常实用的图像编辑功能，包括调整大小、旋转、裁剪、添加标记以及在不同文件类型之间转换。
- Windows 内置的[照片](https://support.microsoft.com/zh-cn/windows/使用-microsoft照片-应用管理照片和视频-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b)也有许多类似的功能。
- [tinypng](https://tinypng.com/) 网站提供免费服务，可以压缩 PNG、JPEG 等格式的图片，这也是在为网站准备资源时经常会做的工作。

如果你有更实质性的图形编辑/创作需求，你可能需要一个完整的图形软件包。在商业产品中，[Adobe Photoshop](https://www.adobe.com/products/photoshop.html) 长期以来一直是行业标杆，同时也有一些受欢迎的新兴产品，如 [Figma](https://www.figma.com/)、[Sketch](https://www.sketch.com/) 和 [Canva 可画](https://www.canva.com)。

如果你预算有限，上述大多数应用都提供试用版或免费模式，值得一试。还有一些备受推崇的免费应用，如 [GIMP](https://www.gimp.org/)、[Adobe Express](https://www.adobe.com/express/) 和 [Paint.NET](https://www.getpaint.net/)。

## 版本控制工具

**版本控制**工具被开发者用来管理服务器上的文件、与团队协作项目、共享代码和资源以及避免编辑冲突。目前，[Git](https://git-scm.com/) 是最受欢迎的版本控制系统，与 [GitHub](https://github.com/) 或 [GitLab](https://about.gitlab.com/) 等托管服务一起使用。

尽管版本控制工具对于 Web 开发团队至关重要，但你暂时无需担心这些。我们在核心模块系列的末尾专门有一个模块专门讲解[版本控制](/zh-CN/docs/Learn_web_development/Core/Version_control)。

## 网站部署应用

完成网站或应用（在本地计算机或开发服务器上）的开发后，你可能想将其上传到远程 Web 服务器，这样用户就可以输入与之关联的网址，在 Web 上查看它了！

有各种方法可以做到这一点，比如购买托管服务并使用 [SFTP 应用](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp)、使用 [GitHub Pages](https://pages.github.com/) 或 [Netlify](https://www.netlify.com/) 等服务，甚至使用 [Glitch](https://glitch.com/) 或 [CodePen](https://codepen.io/) 等工具构建一个快速演示与他人分享。

这样的选项列表可能看起来令人眼花缭乱，但别担心——你暂时不需要了解任何关于发布网站的知识。我们会在课程中多次探讨这个主题，你很快就会在我们的[你的第一个网站](/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)模块中获得实际经验。

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
