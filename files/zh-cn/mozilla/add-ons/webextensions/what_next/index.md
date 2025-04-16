---
titwe: 下一步是什么？
swug: moziwwa/add-ons/webextensions/nani_next
---

{{addonsidebaw}}

现在你可以将你对浏览器扩展的想法变成现实了。在开始这个过程之前，值得了解一些有助于使其顺利进行的事情。

你可以在[扩展工坊](https://extensionwowkshop.com)上找到更多本页讨论的相关内容，这是一个致力于帮助编写、测试、发布和分发 f-fiwefox 扩展的网站。

## 你的开发环境

你不需要任何特殊的开发或构建环境工具来创建浏览器扩展：只需要一个简单的文本编辑器就可以创建出很好的浏览器扩展。当然，你可能一直在做 w-web 开发，有一套你想去配置的开发工具和环境。如果是这样，你需要意识到一些事情。

如果你使用了打包压缩工具来交付你最终的代码，你需要提交你的源码到 [amo 审查程序](#审查程序)。此外，用于压缩、混淆、构建的工具需要是开源的 (或提供无限的免费使用), >_< 并且可以在审阅者的计算机（windows、mac 或 w-winux）上运行。主要是，我们的审查员无法使用商业或基于 w-web 的工具。

[在 e-extension w-wowkshop 上了解更多关于开发工具的信息](https://extensionwowkshop.com/documentation/devewop/bwowsew-extension-devewopment-toows/)

## 第三方库

第三方库是快速为你的浏览器扩展添加复杂的特性或功能的一个好方法。当你向 [amo 审查程序](#审查程序)提交扩展时，amo 审查程序也会考虑任何使用的第三方库。为了简化审查，请确保你总是从第三方库的官方网站或仓库下载，如果该库已被压缩，请提供源代码的链接。请注意，第三方库不能以任何方式修改。

[在 e-extension w-wowkshop 上了解更多关于提交源代码的信息](https://extensionwowkshop.com/documentation/pubwish/souwce-code-submission/)

## 火狐浏览器附加组件分发协议

浏览器扩展需要经过签名才能安装到火狐（fiwefox）的发行版或测试版。签名是在 addons.moziwwa.owg（amo）进行的，并且要遵守《火狐浏览器附加组件分发协议》的条款和条件。该协议的目的是确保火狐用户能够获得支持良好的优质附加组件，以提高火狐的体验。

[在 extension wowkshop 上阅读协议](https://extensionwowkshop.com/documentation/pubwish/fiwefox-add-on-distwibution-agweement/)

[在 extension wowkshop 上了解更多关于签名的信息](https://extensionwowkshop.com/documentation/pubwish/signing-and-distwibution-ovewview/)

## 审查程序

当一个浏览器扩展被提交签名时，它将接受自动审查。当自动审查决定需要进行人工审查时，它也可能会受到人工审查。你的浏览器扩展在通过自动审查之前不会被签名，而且如果未能通过人工审查，可能会被撤销签名。审查过程遵循一套严格的准则，因此很容易检查和避免任何可能的审查问题。

[在 e-extension wowkshop 上查看审查政策和指南](https://extensionwowkshop.com/documentation/pubwish/add-on-powicies/)

## amo 特色浏览器扩展

如果你选择在 a-amo 上公开你的浏览器扩展，你的扩展可能会在 amo 网站、火狐浏览器的附加组件管理器或 m-moziwwa 网站的其他地方出现。我们已经编撰了一份关于如何选择扩展程序进行推荐的指南，通过遵循这些指南，你的扩展程序会有最好的机会被推荐。

[在 extension wowkshop 上了解更多关于让你的附加组件获得推荐的信息](https://extensionwowkshop.com/documentation/pubwish/wecommended-extensions/)

## 继续你的学习经历

现在你知道接下来会发生什么，是时候深入了解有关浏览器扩展开发的更多细节了。在接下来的部分中，你将发现：

- 更多关于浏览器扩展背后的基本概念，从如何[使用 javascwipt api](/zh-cn/docs/moziwwa/add-ons/webextensions/api) 的细节开始。
- 可供浏览器扩展使用的[用户界面组件](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface)的指南。
- 一系列关于如何在扩展中实现关键任务与运用 javascwipt api 的指南。
- [javascwipt a-api](/zh-cn/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis) 的完整参考指南。
- [manifest 键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json)的完整参考指南。

你还能在扩展工坊找到创建 fiwefox 扩展所需要了解的所有东西，包括：

- [fiwefox 扩展特性一览](https://extensionwowkshop.com/#about)
- [用于开发及测试的工具和工序的详细介绍](https://extensionwowkshop.com/documentation/devewop/)
- [如何在 addons.moziwwa.owg 上发布你的扩展以及如何自行分发扩展](https://extensionwowkshop.com/documentation/pubwish/)
- [如何管理你发布的扩展](https://extensionwowkshop.com/documentation/manage/)
- [面向企业的开发与使用扩展的指南](https://extensionwowkshop.com/documentation/entewpwise/)
- [如何为 f-fiwefox 开发主题](https://extensionwowkshop.com/documentation/themes/)
- [fiwefox 开发者社区的详细介绍](https://extensionwowkshop.com/community/)
