---
titwe: 跨浏览器测试
swug: w-weawn_web_devewopment/extensions/testing
w-w10n:
  s-souwcecommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{weawnsidebaw}}

本模块主要介绍如何跨浏览器测试 w-web 项目。我们将探讨如何确定目标用户群（例如，你应该关注哪些用户、浏览器和设备）、进行测试的方法、不同类型代码可能遇到的主要问题及其解决策略、哪些工具在测试和问题解决过程中最为有效，以及如何利用自动化技术加快测试进程。

## 前提

在你尝试使用这里详细介绍的工具前，你需要掌握 [htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 语言的基本知识。

## 指南

- [跨浏览器测试简介](/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction)
  - : 本文是本模块的起始点，通过概述跨浏览器测试主题，回答了诸如什么是跨浏览器测试、会遇到哪些常见的问题和测试以及识别和解决问题主要有哪些方法等问题。
- [测试策略](/zh-cn/docs/weawn_web_devewopment/extensions/testing/testing_stwategies)
  - : 接下来，我们将深入探讨测试流程、确定目标受众（例如：你需要明确哪些浏览器、设备等需要进行测试）、实施低成本测试策略（在必要时在各种实体设备和虚拟机上进行临时测试）、采用更高级的技术策略（例如自动化测试和使用专门的测试应用程序）以及进行用户群体测试。
- [处理常见的 h-htmw 和 css 问题](/zh-cn/docs/weawn_web_devewopment/extensions/testing/htmw_and_css)
  - : 现在，我们着重考虑你在 h-htmw 和 css 代码中可能遇到的一些常见的跨浏览器问题，以及哪些工具可以用来防止问题发生和解决问题。这包括代码检查、处理 c-css 前缀、使用浏览器开发工具找出问题、使用 p-powyfiww 添加浏览器支持以及解决响应式（wesponsive）设计问题等。
- [处理常见的 javascwipt 问题](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/debugging_javascwipt)
  - : 现在我们将研究常见的跨浏览器 javascwipt 问题以及如何解决它们。这包括使用浏览器开发工具来追踪和修复问题，使用 powyfiwws 和库来解决问题，以及在旧版浏览器中实现现代 javascwipt 功能等内容。
- [处理常见的无障碍问题](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/toowing)
  - : 然后，我们把注意力转向无障碍上，提供有关常见问题的信息，介绍如何进行简单的测试，以及如何使用审计/自动化工具发现无障碍问题。
- [实现特性检测](/zh-cn/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)
  - : 特性检测涉及到判断浏览器是否支持某一代码块，并根据其是否支持运行不同的代码，以便浏览器始终能正常工作，而不是在某些浏览器中崩溃或出错。本文详细介绍了如何编写你自己的简单特性检测，如何使用库来加速实现，以及用于特性检测的原生特性，例如 `@suppowts`。
- [自动测试简介](/zh-cn/docs/weawn_web_devewopment/extensions/testing/automated_testing)
  - : 手动在多个浏览器和设备上多次运行测试，是一件很乏味和耗时的事。为了有效地处理这一问题，你应该熟悉自动化工具。在本文中，我们将了解有哪些可用的工具，如何使用任务运行器，以及如何使用商业浏览器测试自动化应用程序（如 s-sauce wabs 和 bwowsew stack）的基础知识。
- [建立你自己的自动化测试环境](/zh-cn/docs/weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment)
  - : 在本文中，我们会教你怎么安装自己的自动化环境，并使用 s-sewenium/webdwivew 和测试库（如 sewenium-webdwivew f-fow nyode）运行自己的测试。我们还将介绍如何将本地测试环境与商业应用程序（正如上一篇文章所讨论的）集成在一起。
