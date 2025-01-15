---
title: 异步
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**异步**（Asynchronous）指的是两个或多个对象或事件不同时存在或发生，也就是说，它们**不是**{{glossary("synchronous", "同步")}}的。当多个相关的，但是并不依赖于前面发生的事情完成的事情发生时，它们就是异步的。

在计算中，“异步”一词在两个主要的上下文中使用，如下所述。

## 网络与通信

异步通信是一种在双方或多方之间交换消息的方式。其中每个参与方各自在他们方便或可操作的情况下接收并处理消息，而不是在收到消息后立即进行处理。另外，消息的发送无需等待确认信息，前提是如果出现问题，接收方将请求更正或以其他方式处理该情况。

对人类来说，电子邮件就是一种异步通信方式；发送者发送了一封邮件，接着接收者会在方便时读取和回复该邮件，而不是马上这样做。双方可以继续随时发送和接收信息，而无需双方安排何时进行操作。

在异步软件中，发出请求（例如向服务器），并在等待响应时不会阻塞其他进程。该软件可以继续执行其他任务。例如，在[基于 Promise 的 API](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) 中，会为长时间的操作创建 {{JSxRef("Promise")}} 对象。在操作完成后，Promise 会被处理。有了 Promise，软件不必等待操作的完成。

## 软件设计

异步软件设计通过构建代码扩展了异步的概念，按照这种设计编写的代码使得程序能够要求一个任务与先前的一个（或多个）任务一起执行，而无需为了等待它们完成而停止执行。当后来的任务完成时，程序将使用约定好的机制通知先前的任务，以便让它知道任务已经完成，以及如果有结果存在的话，这个结果是可用的。

还有许多用来实现异步软件的编程技术。查看文章[异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS) 来了解它们吧。

## 参见

- [从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)（学习区）
- 相关术语：
  - {{glossary("Synchronous", "同步")}}
