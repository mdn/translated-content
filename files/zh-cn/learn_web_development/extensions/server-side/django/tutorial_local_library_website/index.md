---
title: Django 教程：本地图书馆网站
short-title: 1：本地图书馆教程
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

本文概述了 MDN Django 教程，并介绍了我们将在接下来的几页内容中使用的“本地图书馆”示例网站。你将了解到本教程涵盖的内容、入门方法、如何寻求帮助，以及构建和部署你的第一个服务端 Python 应用所需的一切。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        阅读
        <a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Introduction"
          >Django 介绍</a
        >。在接下来的文章里你需要<a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/development_environment"
          >创建 Django 开发环境</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>介绍教程里使用的网站应用，让读者明白要讨论的主题。</td>
    </tr>
  </tbody>
</table>

## 概述

欢迎来到 MDN 的“本地图书馆”Django 教程。在教程里，我们会开发一个网站，用来管理本地图书馆的目录。

在这一系列的教程里你将：

- 运用 Django 的工具创建网站和应用的框架。
- 启动和停止开发服务器。
- 创建代表应用里的数据的模型（model）。
- 运用 Django 的 admin 站点填充网站数据。
- 面对不同的网络请求，创建视图（view）取回相应的数据。并把数据用模板（template）渲染成 HTML 展示在浏览器里。
- 创建网络分发器，将不同的 URL 模式分发给特定的视图（view）。
- 添加用户认证和会话（session）管理网站行为和访问权限。
- 使用表单。
- 为应用编写测试。
- 有效运用 Django 的安全系统。
- 把应用部署到生产环境中。

你已经了解了其中一些主题，并对其他主题进行了简要介绍。在本系列教程结束时，你应该已经掌握了足够的知识，可以自己开发简单的 Django 应用程序。

## 本地图书馆网站

*本地图书馆*是我们在本系列教程里创建和不断改善的网站。跟你期望的一样，这个网站的目标是为一个小型的图书馆提供一个在线的目录。在这个小型图书管里，用户能浏览书籍和管理他们的账户。

这个例子是精心挑选出来的，因为它可以根据我们的需要增加或多或少的细节。也能用来展示几乎所有的 Django 特性。更重要的是，它使我们能够在 Django 网络框架中提供一条最重要功能的*引导*路径：

- 在前几篇教程里，我们会定义一个简单到*只能浏览*的图书馆。图书馆的会员可以查找哪些书可以借阅。我们得以探索那些几乎所有网站都会运用的操作：阅读和展示数据库里的内容。
- 接下来，图书馆会慢慢扩展来展示更高级的 Django 特性。例如，我们会扩展功能，让会员能够保留图书。这个特性会展示如何使用表单，并支持用户认证。

尽管这是一个非常容易扩展的例子，它被称为***本地图书馆***是有原因的——我们希望用最少的信息帮助你快速创建和运用 Django。最后，我们会存储图书信息、图书数量、作者和其他重要信息。我们不会存储图书馆可能会存储的其他信息，或是提供一个支持多个图书馆或是“大型图书馆”功能的构建。

## 我卡住了，从哪里获得源代码呢？

在学习本系列教程时，我们会提供合适的代码片段，你可以粘贴复制，但是有些代码我们希望你能自己扩展（在提示下）。

如果你卡在某个地方，你可以在 [Github](https://github.com/mdn/django-locallibrary-tutorial) 里找到网站的完整代码。

## 总结

现在你对*本地图书馆*网站有了一些了解并知道你会学到什么。是时候创建我们例子会用到的[网站框架](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)了。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
