---
title: 安装基础软件
slug: Learn/Getting_started_with_the_web/Installing_basic_software
tags:
  - 初学者
  - 浏览器
  - 学习
  - 安装
  - 工具
  - WebMechanics
  - 文本编辑器
translation_of: Learn/Getting_started_with_the_web/Installing_basic_software
---
{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

在*安装基础软件*中，我们向你展示了进行简单的 Web 开发需要哪些工具，以及如何正确安装它们。

## 专业人士使用什么工具？

- **计算机**。也许这对一些人来说听起来习以为常，但你们中的一些人正在使用手机或图书馆的电脑阅读这篇文章。对于重度的 Web 开发，最好购买一台运行 Windows、macOS 或 Linux 的台式机或笔记本电脑。
- **文本编辑器**，用来写代码。可以是一个文本编辑器（如 [Visual Studio Code](https://code.visualstudio.com/)、[Sublime Text](https://www.sublimetext.com/)、[Atom](https://atom.io/) 、[GNU Emacs](https://www.gnu.org/software/emacs/) 或者 [VIM](https://www.vim.org/) ），或一个混合编辑器（ [Dreamweaver](https://www.adobe.com/products/dreamweaver.html) 或 [WebStorm](https://www.jetbrains.com/webstorm/)）。Office 文档不适合这种用途，因为它们依赖隐藏的元素，会干扰网络浏览器使用的渲染引擎。
- **网络浏览器**，用以测试代码。目前，最常用的浏览器是 [Firefox](https://www.mozilla.org/zh-CN/firefox/) 、[Chrome](https://www.google.cn/intl/zh-CN/chrome/)、[Opera](https://www.opera.com/zh-cn)、[Safari](https://www.apple.com.cn/safari/)、[Internet Explorer](https://windows.microsoft.com/en-us/internet-explorer/download-ie) 和 [Microsoft Edge](https://www.microsoft.com/zh-cn/edge)。你还应该测试你的网站在移动设备和你的目标受众可能仍在使用的任何旧浏览器（如 IE 8-10）上的表现。[Lynx](https://lynx.browser.org/)，一个基于文本的终端网络浏览器，对于查看视力障碍用户对你的网站的体验是非常好的。
- **图形编辑器**，如 [GIMP](https://www.gimp.org/) 、[Figma](https://www.figma.com/) 、[Paint.NET](https://www.getpaint.net/) 、[Photoshop](https://www.adobe.com/products/photoshop.html) 、[Sketch](https://www.sketch.com) 或 [XD](https://www.adobe.com/products/xd.html) ，为你的网页制作图像或图形。
- **版本控制系统**，用来管理服务器上的文件，与团队合作开展项目，共享代码和资产，避免编辑冲突。现在，[Git](https://git-scm.com/) 是最流行的版本控制系统，还有 [GitHub](https://github.com/) 或 [GitLab](https://gitlab.com) 托管服务。
- **FTP 工具**，老式 Web 托管账户，以管理服务器上的文件（[Git](https://git-scm.com/) 正越来越多地取代 FTP 用于此目的）。有大量的 (S)FTP 程序可用，包括 [Cyberduck](https://cyberduck.io/)、[Fetch](https://fetchsoftworks.com/) 和 [FileZilla](https://filezilla-project.org/)。
- **自动化构建工具**，如 [Webpack](https://webpack.js.org/) 、[Grunt](https://gruntjs.com/) 或 [Gulp](https://gulpjs.com/) ，以自动执行重复性任务，如简化代码和运行测试。
- 库、框架等，以加快编写常用功能。一个库往往是一个现有的 JavaScript 或 CSS 文件，它提供了现成的功能，供你在代码中使用。框架则更进一步，为你提供一个完整的系统和一些自定义的语法，让你在上面写一个 Web 应用。
- 此外还有更多的工具！

## 现在，我究竟需要什么工具？

这看起来是一个冗长的清单，但幸运的是，你可以在不了解这些东西的情况下开始进行 Web 开发。在这篇文章中，我们只为你准备了最基本的东西——一个文本编辑器和一些现代网络浏览器。

### 安装文本编辑器

你的电脑上可能已经有一个基本的文本编辑器。默认情况下，Windows 是 [Notepad](https://zh.wikipedia.org/wiki/记事本) ，macOS 则有 [TextEdit](https://zh.wikipedia.org/wiki/文字編輯_(應用程式) )。Linux 发行版有所不同；Ubuntu 下是 [gedit](https://zh.wikipedia.org/wiki/Gedit) 。

对于 Web 开发，你可能可以做得比记事本或 TextEdit 更好。我们建议从 [Visual Studio Code](https://code.visualstudio.com/) 开始，它是一个免费的编辑器，提供实时预览和代码提示。

### 安装现代网络浏览器

现在，我们将安装几个桌面网络浏览器来测试我们的代码。在下面选择你的操作系统，然后点击相关链接，下载你喜欢的浏览器：

- Linux：[Firefox](https://www.mozilla.org/zh-CN/firefox/) 、[Chrome](https://www.google.cn/intl/zh-CN/chrome/) 、[Opera](https://www.opera.com/zh-cn) 、[Brave](https://brave.com/zh/).
- Windows：[Firefox](https://www.mozilla.org/zh-CN/firefox/) 、[Chrome](https://www.google.cn/intl/zh-CN/chrome/) 、[Opera](https://www.opera.com/zh-cn) 、[Internet Explorer](https://windows.microsoft.com/zh-cn/internet-explorer/download-ie) 、[Microsoft Edge](https://www.microsoft.com/zh-cn/edge) 、[Brave](https://brave.com/zh/) （Windows 10 默认带有 Edge；如果你有 Windows 7 或以上版本，你可以安装 Internet Explorer 11；否则，你应该安装一个替代浏览器）。
- macOS：[Firefox](https://www.mozilla.org/zh-CN/firefox/) 、[Chrome](https://www.google.cn/intl/zh-CN/chrome/) 、[Opera](https://www.opera.com/zh-cn) 、[Safari](https://www.apple.com.cn/safari/) 、[Brave](https://brave.com/zh/) （macOS 和 iOS 默认带有 Safari 浏览器）。

在继续之前，你应该至少安装两款这样的浏览器，并准备好进行测试。

> **备注：** Internet Explorer 与一些现代网络功能不兼容，它可能无法运行你的项目。你通常不需要为你的 Web 项目与它兼容而操心，因为很少还有人在使用它——至少在你学习的时候不要太担心它。你可能会在以后遇到一个需要支持它的项目。

### 安装本地 Web 服务器

有些例子需要通过 Web 服务器才能成功运行。你可以在这找到该怎么做[如何设置本地测试服务器？](/zh-CN/docs/Learn/Common_questions/set_up_a_local_testing_server)

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

## 本章目录

- [安装基础软件](/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [你的网站会是什么样子？](/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [文件处理](/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML 基础知识](/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS 基础知识](/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript 基础知识](/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [发布你的网站](/zh-CN/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [万维网是如何工作的](/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
