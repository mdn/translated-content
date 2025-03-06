---
title: Git 和 GitHub
slug: Learn_web_development/Core/Version_control
original_slug: Learn/Tools_and_testing/GitHub
---

{{LearnSidebar}}

所有开发者都将使用到**版本控制系统**（**V**ersion **C**ontrol **S**ystem，简称 **VCS**），这种工具让他们在分工合作时避免了不必要的重复与冲突，如果遇到什么问题，也可以及时回退到之前的版本。当今最流行的**版本控制系统**（至少在网络开发者中是这样的）是 **Git**，和与之关联的编程社区网站 **GitHub**。这篇短文将带你简单地了解他们。

## 主要介绍

版本控制系统在软件开发过程中是必不可少的：

- 我们很少独自完成一个项目，而在分工合作的同时我们都会有与他人的工作相冲突的风险：尤其是当两个人同时尝试修改同一段代码的时候。所以我们需要有相应的机制用以避免这种情况。
- 在开发一个项目的时候，我们希望能将代码及时保存，这样就可以避免像电脑突然崩溃辛苦全部白费这样的尴尬局面。
- 如果后期发现了问题，我们可能还会需要退回更早的版本。有的小朋友也许想到可以通过创建一堆 `myCode.js`、`myCode_v2.js`、`myCode_v3.js`、`myCode_final.js`、`myCode_really_really_final.js` 之类的文件用于保存历史版本，但这个方法不妥，容易出错。
- 不同的团队成员也会需要创建他们自己的独特的版本（在 Git 中叫做**分支**（branch）），他们在这里添加一些新的功能特性，然后通过一些可控的方法（在 GitHub 中我们使用**拉取请求**（pull request））将它们贡献到原来的主干项目中。

版本控制系统提供了能够满足以上需求的工具。[Git](https://git-scm.com/) 是版本控制系统的典范，而 [GitHub](https://github.com/) 是一个为个人或团队操作 Git 仓库（repository）提供了 Git 服务器和一系列非常实用的工具的网站 + 基础设施。它提供了报告代码错误、检查工具以及分配任务和任务状态等项目管理工具等等。

> [!NOTE]
> Git 实际上是一个分散式的版本控制系统，这意味你和其他所有人的电脑上都可以有一个这个复制了这个项目所有源代码的储存库的副本。你在自己的副本上进行了修改，然后提交给服务器，在那里将由这个项目的管理者来决定是否将你的修改添加到主本中。

## 事先准备

为了使用 Git 和 GitHub，你首先需要：

- 安装了 Git 的台式电脑（详见 [Git 下载网址](https://git-scm.com/downloads)）。
- 用于使用 Git 的工具。你可以使用一个 [Git 图形操作界面客户端](https://git-scm.com/downloads/guis/)（我们推荐 GitHub Desktop、SourceTree 或者 Git Kraken）或者也可以直接使用命令行，这取决于你的喜好。事实上，尽管你打算使用图形界面进行操作，了解一些基本的 Git 命令行指令也或许会比较有用。
- [GitHub 账户](https://github.com/join)。如果还没有的话，现在就通过这个链接去注册一个吧！

在此之前你并不一定要有关于网络开发、Git 和 GitHub 或者版本控制系统的任何知识。但是最好还是能有一点基础的计算机使用技能并且懂一点编程，以及有一些可以存放进储存库的代码。

建议你最好还能够有一些基础的命令行终端的知识，例如：切换目录、新建文件以及修改系统路径（`PATH`）。

> [!NOTE]
> Github 并不是使用 Git 的唯一途径。还有很多像 [GitLab](https://about.gitlab.com/) 这样的选择值得你去尝试。你也可以尝试着去构建你自己的 Git 服务器来代替 Github 的功能。在这里我们只是将 Github 作为一种可行的途径进行介绍。

## 指南

先提醒一下这些链接将会带你去访问一些外部资源。我们最终将致力于开发我们专属的 Git 和 GitHub 教程，但现在，这些资料将会带你轻松入门。

- [Hello World（来自 GitHub）](https://docs.github.com/zh/get-started/quickstart/hello-world)
  - : 这里是开始使用 GitHub 的正大门，在这里你可以学到 Git 的基础操作，例如：创建**仓库**和**分支** 、**创建提交**以及打开和合并**拉取请求**。
- [Git 使用手册（来自 GitHub）](https://docs.github.com/zh/get-started/using-git/about-git)
  - : 这个 Git 使用手册就稍微更深入一点了，它解释了什么是**版本控制系统**、什么是**仓库**、**GitHub 模型**如何运行、**Git 指令**和示例等。
- [复刻项目（来自 GitHub）](https://docs.github.com/zh/get-started/quickstart/contributing-to-projects)
  - : 当你想要对别人的代码做出贡献时，**复刻**（fork）项目是必不可少的步骤。这个指南将告诉你如何操作。
- [关于拉取请求（来自 GitHub）](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
  - : 这是一个管理拉取请求的有用的指南：你所修改的代码需要通过拉取请求来让项目的管理者决定是否采纳。
- [掌握议题（来自 GitHub）](https://docs.github.com/zh/issues/tracking-your-work-with-issues/about-issues)
  - : **议题**（issue）就像是一个关于你这个 GitHub 项目的论坛，在这里人们可以提问题和报告错误，你可以管理更新（例如给人们分配需要解决的问题、澄清问题以及告知问题已经解决）。这篇文章会让你知道所需要的一些关于问题区的知识。

> [!NOTE]
> 在 Git 和 GitHub 上面你还可以做一大堆事情，但我们认为，如果你想要有效地使用 Git，上面的这些知识是至少应该具备的。当你更深入地了解 Git 时，你将会意识到，当你开始使用更加复杂的指令时会更容易出错。但不要担心，即使是专业的网络工程师有时都会感到困惑，并通过网络检索或 [Git 飞行规则](https://github.com/k88hudson/git-flight-rules)和 [Dangit, git!](https://dangitgit.com/) 这样的网站来寻找答案。

## 参见

- [理解 GitHub 流程](https://docs.github.com/zh/get-started/quickstart/github-flow)
- [Git 指令列表](https://git-scm.com/docs)
- [掌握 Markdown 格式](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)（在网页上、评论区常用的格式以及 `.md` 文件所使用的格式）。
- [Github Pages 快速入门](https://docs.github.com/zh/pages/quickstart) （如何在 GitHub 上发布示例和网站）。
- [学习 Git 的分支结构](https://learngitbranching.js.org/)
- [Git 飞行规则](https://github.com/k88hudson/git-flight-rules) （在 Git 中实现特定功能的非常有用的方法介绍纲要，包括如何在出错时纠错等）。
- [Dangit, git!](https://dangitgit.com/)（另一个十分有用的方法介绍纲要，特别是在出错的时候进行纠正的方法）。
