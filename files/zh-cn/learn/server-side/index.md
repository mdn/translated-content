---
title: 服务器端网站编程
slug: Learn/Server-side
l10n:
  sourceCommit: 8184fa218341dbb193ce6adaa1240c89fae045ec
---

{{LearnSidebar}}

**动态网站——服务器端编程**主题是一系列模块，展示了如何创建动态网站；这些网站能够根据 HTTP 请求提供定制化的信息。这些模块提供了服务器端编程的总体介绍，以及如何使用 Django（Python）和 Express（Node.js/JavaScript）Web 框架创建基本应用程序的特定入门级指南。

大多数主要网站都使用某种服务器端技术来根据需要动态显示数据。例如，想象一下亚马逊上有多少产品，以及 Facebook 上发布了多少帖子。使用不同的静态页面显示所有这些内容将非常低效，因此，这些网站显示静态模板（使用 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 构建），然后在需要时动态更新这些模板内的数据，例如当你想在亚马逊上查看不同的产品时。

在现代网络开发世界中，学习服务器端开发是非常推荐的。

## 学习路径

开始服务器端编程通常比客户端开发更容易，因为动态网站往往执行许多非常相似的操作（从数据库检索数据并在页面中显示，验证用户输入的数据并将其保存到数据库，检查用户权限并记录用户登录等），并且使用使这些和其他常见 Web 服务器操作变得容易的 Web 框架构建。

编程概念（或特定编程语言）的基本知识是有用的，但不是必需的。同样，客户端编码的专业知识不是必需的，但基本知识将帮助你更好地与创建你的客户端 Web“前端”的开发人员合作。

你需要了解“Web 是如何工作的”。我们建议你首先阅读以下主题：

- [什么是 Web 服务器](/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [构建网站需要哪些软件？](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- [如何将文件上传到 Web 服务器？](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server)

有了这些基本理解，你就可以准备好逐步学习本节中的模块。

## 模块

本主题包含以下模块。你应该从第一个模块开始，然后继续学习后面两个模块之一，这两个模块展示了如何使用两个非常流行的服务器端语言及其相应的 Web 框架进行工作。

- [服务器端网站编程第一步](/zh-CN/docs/Learn/Server-side/First_steps)
  - : 这个模块提供了与技术无关的服务器端网站编程信息，例如“它是什么？”，“它与客户端编程有何不同？”，以及“为什么它有用？”。这个模块还概述了一些更流行的服务器端 Web 框架，并提供了如何为你的网站选择最佳框架的指导。最后，提供了 Web 服务器安全性的介绍。
- [Django Web 框架（Python）](/zh-CN/docs/Learn/Server-side/Django)
  - : Django 是一个非常流行且功能齐全的服务器端 Web 框架，用 Python 编写。这个模块解释了为什么 Django 是一个如此好的 Web 服务器框架，如何设置开发环境以及如何使用它执行常见任务。
- [Express Web 框架（Node.js/JavaScript）](/zh-CN/docs/Learn/Server-side/Express_Nodejs)
  - : Express 是一个流行的 Web 框架，用 JavaScript 编写并在 Node.js 运行时环境中托管。这个模块解释了该框架的一些关键优势，如何设置开发环境以及如何执行常见的 Web 开发和部署任务。

## See also

- [无框架的 Node 服务器](/zh-CN/docs/Learn/Server-side/Node_server_without_framework)
  - : 这篇文章提供了一个使用纯 Node.js 构建的简单静态文件服务器，适合那些不想使用框架的人。
- [正确配置服务器 MIME 类型](/zh-CN/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : 配置服务器以向浏览器发送正确的 {{Glossary("MIME type", "MIME 类型")}}（也称为媒体类型或内容类型）对于浏览器能够正确处理和显示内容非常重要。对于防止恶意内容伪装成良性内容也很重要。
- [Apache 配置：.htaccess](/zh-CN/docs/Learn/Server-side/Apache_Configuration_htaccess)
  - : Apache 的 .htaccess 文件允许用户在不修改主配置文件的情况下配置他们控制的Web服务器目录。
