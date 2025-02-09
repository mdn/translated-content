---
title: 网页、网站、网络服务器和搜索引擎的区别是什么？
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
original_slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
l10n:
  sourceCommit: c62b98afeca1df0ffdd92bb96b8a006662073a8e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

在本文中我们描述了各种与网络相关的概念：网页、网站、网络服务器以及搜索引擎。这些概念常被网络新手混淆，或被误用。让我们看看它们到底代指的是什么吧！

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        了解
        <a href="/zh-CN/docs/learn/How_the_Internet_works"
          >互联网是怎么工作的</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解网页、网站、网络服务器和搜索引擎间的区别</td>
    </tr>
  </tbody>
</table>

## 概述

正如任何领域的知识一样，网络也有很多的术语。别担心，我们不会把你淹没在这些术语里的（但如果你感兴趣的话，我们也弄了一个[术语表](/zh-CN/docs/Glossary)）然而，一开始你还是需要了解一些基本概念，因为当你读下去的时候，这些词汇会一再出现。有时候这些概念容易被混淆，因为他们指的是相关但不同的功能。事实上，有时你会见到这些概念在新闻中或者其他地方被误用，所以把他们弄混了也是情有可原的！

随着进一步地探讨，我们将会涵盖这些概念和技术的方方面面，但以下的这些简单定义可以帮助你快速开始：

- 网页（webpage）
  - : 一份能够显示在网络浏览器（如 Firefox、Google Chrome、Opera、Microsoft Edge 或 Apple 的 Safari）上的文档。网页也常被称作“web page”（网页）或者就叫“page”（页面）。
- 网站（website）
  - : 一个由许多网页组合在一起，并常常以各种方式相互连接的网页组成的集合。网站常被称作“web site”（网站）或简称“site”（站点）。
- Web 服务器（web server）
  - : 一个在互联网上托管网站的计算机。
- 搜索引擎（search engine）
  - : 搜索引擎是帮助你查找其他网页的网络服务，例如 Google、Bing、Yahoo 或 DuckDuckGo。通常通过网络浏览器（例如，你可以直接在 Firefox、Chrome 等浏览器的地址栏中进行搜索引擎搜索）或通过网页（例如 [bing.com](https://www.bing.com/) 或 [duckduckgo.com](https://duckduckgo.com/)）访问搜索引擎。

一个简单的类比——公共图书馆。通常当你访问图书馆时会做以下事情：

1. 找到搜索索引，查找你想要的书名。
2. 记下书的目录号。
3. 前往包含该书的特定部分，找到正确的目录号，并获取书籍。

现在我们将图书馆与 Web 服务器进行比较：

- 图书馆就像一个 Web 服务器。它有几个部分，类似于一个 Web 服务器托管多个网站。
- 图书馆中的不同部分（科学、数学、历史等）就像网站。每个部分就像一个独特的网站（两个部分不包含相同的书）。
- 每个部分中的书籍就像网页。一个网站可能有几个网页，例如，科学部分（网站）将有关于热、声音、热力学、静力学等的书籍（网页）。每个网页都可以在唯一的位置（URL）找到。
- 搜索索引就像搜索引擎。每本书在图书馆中有自己唯一的位置（两本书不能放在同一个地方），这由目录号指定。

## 自主学习

_还没有可用的资料，[请考虑贡献一个](/zh-CN/docs/MDN/Community/Contributing/Getting_started)。_

## 深入探索

所以，让我们深入了解这四个术语是如何相关联的以及为什么有时会相互混淆。

### 网页

一份网页文档是交给{{Glossary("browser", "浏览器")}}显示的简单文档。这种文档是由{{Glossary("HTML", "超文本标记语言")}}来编写的（在[其他文章](/zh-CN/docs/Web/HTML)可查看更多详细内容）。网页文档可以插入各种各样不同类型的资源，例如：

- _样式信息_——控制页面的观感
- _脚本_——为页面添加交互性
- _多媒体_——图像，音频，和视频

> [!NOTE]
> 浏览器也能显示其他文档，例如 {{Glossary("PDF")}} 文件或图像，但网页（webpage）这一概念专指 HTML 文档。其他情况我们则只会使用文档（document）这一概念

网络上所有可用的网页都可以通过一个独一无二的地址访问到。要访问一个页面，只需在你的浏览器地址栏中键入页面的地址。

![浏览器地址栏中的网页地址的示例](web-page.jpg)

### 网站

*网站*是共享唯一域名的相互链接的网页的集合。给定网站的每个网页都提供了明确的链接——一般都是可点击文本的形式——允许用户从一个网页跳转到另一个网页。

要访问网站，请在浏览器地址栏中输入域名，浏览器将显示网站的主要网页或*主页*。

![浏览器地址栏中的网站域名的示例](web-site.jpg)

注意，也有可能有一个*单页面网站*：一个由单个网页组成的网站，在需要时通过动态更新添加新内容。

### 网络服务器

一个*网络服务器*是一台托管一个或多个网站的计算机。“托管”意思是所有的网页和它们的支持文件在那台计算机上都可用。网络服务器会根据每位用户的请求，将任意网页从托管的网站中发送到任意用户的浏览器中。

别把*网站*和*网络服务器*弄混了。例如，当你听到某人说：“我的网站没有响应”，这实际上指的是*网络服务器*没响应，并因此导致*网站*不可用。更重要的是，自从一个网络服务器能够托管多个网站，“网络服务器”这个术语从来都没被用来指定一个网站，因为这可能导致很大的混乱。在上面的例子中，如果我们说，“我的网络服务器没有响应”，这就指的是在那台网络服务器上的所有网页都不可用。

### 搜索引擎

搜索引擎是网络上常见的混乱之源。搜索引擎是一个特定类型的网站，用以帮助用户在*其他*网站中寻找网页。

搜索引擎数不胜数，有 [Google](https://www.google.com/)、[Bing](https://www.bing.com/)、[Yandex](https://www.yandex.com/)、[DuckDuckGo](https://duckduckgo.com/) 等等。其中有的功能宽泛，有的专注于特定的主题。你可按需使用。

许多网上的初学者将搜索引擎和浏览器混淆了。让我们明确一下：浏览器是一个接收并显示网页的软件，搜索引擎则是一个帮助用户从其他网站中寻找网页的网站。这种混淆之所以出现是因为当一个人打开一个浏览器的时候，浏览器展现的是一个搜索引擎的主页。这有什么意义呢？很明显，因为你打开浏览器要做的第一件事就是去寻找一个网站。不要把基础设施（浏览器）和服务（搜索引擎）混淆。这种区分会对你很有帮助，但是甚至有些专业人员也还把它们说得很宽泛，所以不用对这种区分太过谨慎。

下图是一个火狐浏览器把谷歌搜索框当作它默认开始页面的实际例子：

![Firefox Nightly 显示自定义 Google 页面作为默认页面的示例](search-engine.jpg)

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
