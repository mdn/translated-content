---
title: HTTP 基础
slug: Web/HTTP/Basics_of_HTTP
---

HTTP 是一个拓展性非常好的协议。它依赖于以下的一些基本概念：像资源或是 URI 的概念 , 一个简单的消息结构，一个客户端 - 服务器结构的通信流。在这些基础概念之上，近年来已经出现了许多拓展，以增加新的 HTTP 方法或首部的方式为 HTTP 协议增加了新的功能和语义。

## 文章

- [HTTP 概览](/zh-CN/docs/Web/HTTP/Overview)
  - : 描述了什么是 HTTP，它在 Web 架构中的角色，以及它在协议栈中的位置。
- [HTTP 演变](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP 是在 20 世纪 90 年代早期出现的，并且已经被扩充了多次。本文会回顾 HTTP 的发展史，描述 HTTP/0.9、HTTP/1.0、HTTP/1.1 和最新的 HTTP/2，以及这些年来出现的一些新特性。
- **[商定 HTTP 版本](</zh-CN/docs/Web/HTTP/Basics_of_HTTP/Negotiating)an_HTTP_version>)**
  - : 解释了客户端和服务器之间是如何商定并最终升级其使用的 HTTP 版本的。
- [资源和 URI](/zh-CN/docs/Web/HTTP/Resources_and_URIs)
  - : 简单介绍了资源，标示符和 Web 位置的概念。
- [发现 Web 资源](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : 描述了 Web 资源是怎样被引用和找到的。
- [数据 URI](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : 一种特殊的 URI，它直接包含了资源的内容。数据 URI 使用起来非常方便，但也有一些弊端。
- [资源 URLs](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Resource_URLs)
  - : 资源 URLs（URLs 是以为`resource:scheme`前缀的) 是被 Firefox 和 Firefox 浏览器拓展插件用来内在地加载资源，当然有些资源在浏览器连接的网站上存在的。
- 分离资源的标识和位置：the Alt-Svc HTTP header
  - : 大多数情况下 web 资源的标识和位置是共享的，可通过使用`{{HTTPHeader("Alt-Svc")}}` 头部来改变。
- [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : 从 HTTP/1.0 开始，HTTP 协议允许传输不同类型的内容。本文解释了如何通过使用 `{{HTTPHeader("Content-Type")}}` 首部和 MIME 标准实现这一过程的。
- [在 www 和非 www URI 间选择](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : 在是否使用 www 前缀的域名这一问题上，本文解释了不同选择的影响，并给出了具体的实施方法。
- **[HTTP 会话流程](/zh-CN/docs/Web/HTTP/Flow_of_an_HTTP_session)**
  - : 本文描述了一个经典的 HTTP 会话：当你在浏览器中点击一个链接时，在后台发生了什么...
- [HTTP 消息](/zh-CN/docs/Web/HTTP/Messages)
  - : 在请求和响应中传输的 HTTP 消息具有非常清晰的结构；本文介绍了消息的结构、设计目的以及其可能性。
- **[HTTP/2 中的帧及消息结构](/zh-CN/docs/Web/HTTP/Frame%20and%20message%20structure%20in%20HTTP_2)**
  - : HTTP/2 用二进制帧来压缩和表示 HTTP/1.x 中的消息。本文解释了 HTTP/2 中的帧结构，其设计目的以及编码方式。
- [HTTP/1.x 的连接管理](/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 是首个支持持久化连接和管道化的 HTTP 版本。本文介绍了这两个概念。
- **[HTTP/2 的连接管理](/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_2)**
  - : HTTP/2 完全改变了连接创建和维护的方式：本文介绍了 HTTP 帧是怎样支持多路复用并解决之前的 HTTP 版本中存在的队头阻塞问题的。
- [内容商定](/zh-CN/docs/Web/HTTP/Content_negotiation)
  - : HTTP 引入了一组以 `Accept-` 开头的首部，作为浏览器用来声明它们期望得到的格式，语言或编码的方法。本文讲述了这一过程是怎样实现的，以及服务器是怎样处理并选择恰当的响应的。
