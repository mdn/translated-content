---
title: "Django Tutorial: The Local Library website"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
original_slug: Learn/Server-side/Django/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

我们实战教程系列的第一篇教程会解释你将学到什么。并提供一个“本地图书馆”的例子作为概述。在接下来的教程里，我们会不断完善和改进这个网站。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        阅读
        <a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Introduction"
          >Django 介绍</a
        >。在接下来的文章里你需要
        <a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/development_environment"
          >创建 Django 开发环境</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>介绍教程里使用的网站应用，让读者明白要讨论的主题。</td>
    </tr>
  </tbody>
</table>

## 概述

欢迎来到 MDN 的”本地图书馆“Django 教程。在教程里，我们会开发一个网站，用来管理本地图书馆的目录。

在这一系列的教程里你将：

- 运用 Django 的工具创建网站和应用的框架。
- 启动和停止开发用的服务器。
- 创建模型（models）用来代表应用里的数据。
- 运用 Django 的 admin 站点填充网站数据。
- 面对不同的网络请求，创建视图函数（views）取回相应的数据。并把数据用模板（templates）渲染成 HTML 展示在浏览器里。
- 创建网络分发器，将不同的 URL 模式分发给特定的视图函数（views）。
- 添加用户认证和会话（sessions）管理网站行为和进入权限。
- 使用表单。
- 为应用编写测试。
- 有效运用 Django 的安全系统。
- 把应用布置到生产环境中。

关于这些主题，你已经学会了一些，并对其他的也有了简单的了解。在这系列教程的最后，你会学到足够多而可以自己开发简单的 Django 应用了。

## 本地图书馆网站

*本地图书馆*是我们在本系列教程里创建和不断改善的网站。跟你期望的一样，这个网站的目标是为一个小型的图书馆提供一个在线的目录。在这个小型图书管里，用户能浏览书籍和管理他们的账户。

这个例子是精心挑选出来的，因为它可以根据我们的需要增加或多或少的细节。也能用来展示几乎所有的 Django 特性。更重要的是，它提供了一条指南式的路线，在这条路线中，我们会用到 Django 网络框架最重要的功能：

- 在第一篇教程里，我们会定义一个简单到只能浏览的图书馆。图书馆的会员可以查找哪些书可以借阅。我们得以探索那些几乎所有网站都会运用的操作：阅读和展示数据库里的内容。
- 接下来，图书馆会慢慢扩展来展示更高级的 Django 特性。例如，我们会扩展功能，让会员能够保留图书。这个特性会展示如何使用表单，并支持用户认证。

尽管这是一个非常容易扩展的例子，它被称为本地图书馆是有原因的——我们希望用最少的信息帮助你快速创建和运用 Django。最后，我们会存储图书信息，图书数量，作者和其他重要信息。我们不会存储图书馆可能会存储的其他信息，或是提供一个支持多个图书馆或是”大型图书馆“功能的构建。

## 我卡住了，从哪里获得源代码呢？

在学习本系列教程时，我们会提供合适的代码片段，你可以粘贴复制，但是有些代码我们希望你能自己扩展（在提示下）。

如果你卡在某个地方，你可以在[Github](https://github.com/mdn/django-locallibrary-tutorial)里找到网站的完整代码。I

## 总结

现在你对本地图书馆网站有了一些了解并知道你会学到什么。是时候创建我们例子会用到的[网站框架](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)了。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
