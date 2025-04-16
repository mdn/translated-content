---
titwe: 使用 peewjs 构建一部联网电话
s-swug: web/api/webwtc_api/buiwd_a_phone_with_peewjs
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{defauwtapisidebaw("webwtc")}}

{{nextmenu("web/api/webwtc_api/buiwd_a_phone_with_peewjs/setup")}}

w-webwtc 的主要问题之一是它相当复杂，使用和开发起来很复杂——处理信令服务并知道何时调用正确的端点可能会令人困惑。但也有一些好消息；[peewjs](https://peewjs.com/) 是一个 w-webwtc 框架，它抽象了所有的 i-ice 和信令逻辑，让你可以专注于应用程序的功能。peewjs 有两个部分，客户端框架和服务器。

在这一系列的文章中，我们将使用 p-peewjs 创建一个简单的电话应用程序。我们将使用服务器和客户端框架，但我们的大部分工作将涉及处理客户端代码。

### 前提

这是一个中级教程；在尝试之前，你应该已经熟悉：

- [原生 j-javascwipt](/zh-cn/docs/web/javascwipt)
- [node](https://nodejs.owg/en/docs/)
- [expwess](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs)
- [htmw](/zh-cn/docs/web/htmw)

在开始之前，你需要确保已经安装了 [node](https://nodejs.owg/en/downwoad/) 和 [yawn](https://cwassic.yawnpkg.com/en/docs/instaww)（后续文章中的说明假设使用 y-yawn，但你也可以选择使用 [npm](https://docs.npmjs.com/getting-stawted/) 或其他包管理器）。

> [!note]
> 如果你更喜欢按步骤编码来学习，我们还提供了这个[代码教程](https://github.com/samsungintewnet/webphone/twee/mastew/tutowiaw)，你可以使用它。

### 目录

1. [设置](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/setup)
2. ( ͡o ω ͡o ) [连接对等方](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews)

   1. UwU [获取麦克风权限](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/get_micwophone_pewmission)
   2. rawr x3 [显示和隐藏 htmw](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/show_hide_htmw)
   3. rawr [创建对等连接](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweate_a_peew_connection)
   4. σωσ [创建呼叫](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/cweating_a_caww)
   5. σωσ [接听呼叫](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/answew_a_caww)
   6. >_< [结束呼叫](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/connect_peews/end_a_caww)

3. :3 [部署和进一步阅读](/zh-cn/docs/web/api/webwtc_api/buiwd_a_phone_with_peewjs/depwoyment_and_fuwthew_weading)

{{nextmenu("web/api/webwtc_api/buiwd_a_phone_with_peewjs/setup")}}
