---
title: Django Web 框架 (python)
slug: Learn_web_development/Extensions/Server-side/Django
original_slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django 是使用 Python 语言编写的一个广受欢迎且功能完整的服务器端网站框架。本模块将为你展示为什么 Django 能够成为一个广受欢迎的服务器端框架，如何设置开发环境，以及如何开始创建你自己的网络应用。

## 前提

开始学习本模块并不需要任何 Django 知识。但你要理解什么是服务器端网络编程、什么是网络框架，最好能够阅读我们的[服务端网站编程的第一步](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps)模块。

最好能有基本的编程概念并了解 [Python](/zh-CN/docs/Glossary/Python) 语言，但其并不是理解本教程的核心概念的必然条件。

> [!NOTE]
> 对于初学者来说，Python 是最容易阅读和理解的编程语言之一。也就是说，如果你想更好的理解本教程，网上有很多免费书籍及免费教程可供参考学习（建议初学者查看 Python 官网的 [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) 教程）。

## 指南

- [Django 简介](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : 在第一篇关于 Django 的文章里，我们会回答"什么是 Django?",并概述这个网络框架的特殊之处。我们会列出主要的功能，包括一些高级的功能特性，这些高级特性我们在这部分教程里没有时间详细说明。在你设置好 Django 应用并开始把玩它之前，我们会展示 Django 应用的一些主要模块，让你明白 Django 应用能做什么。
- [创建 Django 开发环境](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : 现在你知道 Django 是做什么的，我们会展示怎样在 Windows, Linux(Ubuntu) 和 Mac OS X 上创建和测试 Django 的开发环境—不管你是用什么操作系统，这篇文章会教给你能够开发 Django 应用所需要的开发环境。
- [Django 教程 1:本地图书馆网站](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : 我们实用教程系列的第一篇文章会解释你将学习到什么，并提供"本地图书馆"网站这个例子的概述。我们会在接下来的文章里完成并不断的进化这个网站。
- [Django 教程 2:创建网站的框架](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : 这篇文章会教你怎样创建一个网站的"框架".以这个网站为基础，你可以填充网站特定的 settings,urls, models,views 和 templates
- [Django 教程 3:使用模型](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : 这篇文章会为 _本地图书馆_ 网站定义数据模板—数据模板是我们为应用存储的数据结构。并且允许 Django 在数据库中存储数据 (以后可以修改).文章解释了什么是数据模板，怎样声明它和一些主要的数据种类。文章还简要的介绍了一些你可以获得数据模板的方法。
- [Django Tutorial Part 4: Django 管理站点](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : 现在我们已经为本地图书馆网站创建了模型，我们将使用 Django 管理站点 添加一些‘真实的’的图书数据。首先，我们将向你介绍如何使用管理站点注册模型，然后我们介绍如何登录和创建一些数据。最后我们展示一些进一步改进管理站点的演示方法。
- [Django Tutorial Part 5: 创建我们的主页](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : 我们现在可以添加代码来展示我们的第一次完整页面—本地图书馆主页，来显示我们对每个模型类型有多少条记录，并提供我们其他页面的侧边栏导航链接。一路上，我们将获得编写基本 URL 地图和视图，从数据库获取记录以及使用模版的实践经验。
- [Django Tutorial Part 6: 通用列表和详细视图](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : 本教程扩展了我们的本地图书馆网站，添加书籍和作者和详细页面。在这里，我们将了解基于类的通用视图，并展示如何减少常用代码用例的代码量。我们还将更详细地深入理解 URL 处理，显示如何执行基本模式匹配。
- [Django Tutorial Part 7: 会话框架](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : 本教程扩展本地图书馆网站，向主页添加了一个基于会话的访问计数器。这是个比较简单的例子，但它显示如何使用会话框架为你自己的站点中的匿名用户提供一致的行为。
- [Django Tutorial Part 8: 用户身份验证和权限](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : 本教程，我们将向你展示如何允许用户使用自己的账户登录到你的网站，以及如何根据他们是否登录及其权限来控制他们可以做什么和看到什么。作为此次演示的一部分，我们将扩展本地图书馆网站，添加登录和注销页面以及用户和工作人员特定页面，以查看已借用的书籍。
- [Django Tutorial Part 9: 使用表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : 本教程，我们将向你展示如何使用 Django 中的[HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms)，特别是编写创建表单，更新和删除模型实例的最简单方法。作为此次演示的一部分，我们将扩展本地图书馆网站，以便图书馆员可以使用我们自己的表单 (而不是使用管理应用程序) 来更新书籍，创建，更新和删除作者。
- [Django Tutorial Part 10:测试 Django Web 应用程序](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : 随着网站的发展，手工测试越来越难测试—不仅要测试更多，而且随着组件之间的相互作用变得越来越复杂，一个领域的一个小的变化可能需要许多额外的测试来验证其对其他领域的影响。减轻这些问题的一种方法是编写自动化测试，每次更改时都可以轻松可靠地运行。本教程将介绍如何使用 Django 的测试框架对你的网站进行**单元测试**自动化。
- [Django Tutorial Part 11: 将 Django 部署到生产](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : 现在，你已创建（并测试）一个酷的 本地图书馆网站，你将要把它安装在公共 Web 服务器上，以便图书馆员工和成员可以通过 Internet 访问。本文概述了如何找到主机来部署你的网站，以及你需要做什么才能使你的网站准备好进行生产。
- [Django web 应用程序安全](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : 保护用户数据是任何网站设计的重要组成部分，我们以前解释了 Web 安全文章中一些更常见的安全威胁—本文提供了 Django 内置如何保护处理这种危险的实际演示。

## 评估

以下评估将测试你对如何使用 Django 创建网站的理解，如上述指南中所述。

- [DIY Django mini blog](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : 在这个评估中，你将使用你从本单元中学到的一些知识来创建自己的博客。
