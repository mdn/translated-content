---
title: 如何记录 HTTP 标头
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
---

MDN Web 文档上的 [HTTP 标头参考](/zh-CN/docs/Web/HTTP/Reference/Headers)记录了 HTTP 标头字段。这是超文本传输协议（[HTTP](/zh-CN/docs/Web/HTTP)）请求和响应消息的标头的组成部分。它们定义了 HTTP 事务的操作参数。本文介绍如何为 HTTP 标头创建新的参考页面。

你需要知道或能够深入了解 [HTTP](/zh-CN/docs/Web/HTTP)。

## 步骤 1——确定要记录的 HTTP 标头

- 各种 IETF 标准中定义了许多 HTTP 标头。
- IANA 维护着一个[标头注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml)，而维基百科则列出了[已知的标头字段](https://zh.wikipedia.org/wiki/HTTP头字段)，但并非所有标头都与 Web 开发人员相关，或者属于官方标准。
- 如果当前的 [HTTP 标头参考概述页面](/zh-CN/docs/Web/HTTP/Reference/Headers)上有任何**红色链接**，那么这些标头是很好的可以记录的选择。
- 如果有任何疑问，请[向 MDN Web 文档团队询问](/zh-CN/docs/MDN/Community/Communication_channels)是否有必要记录你选择的标头。

## 步骤 2——检查现有的 HTTP 标头页面

- 现有的 HTTP 标头在[这里](/zh-CN/docs/Web/HTTP/Reference/Headers)记录。
- 有不同的标头类别：{{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}和{{Glossary("Representation header", "表示标头")}}。
- 找到你要记录的标头的类别（请注意，某些标头既可以是请求标头，也可以是响应标头，这取决于上下文）。
- 转到现有的具有相同类别的标头参考页。

## 步骤 3——创建 HTTP 标头页面

- 所有标头页面都位于此目录下：[/docs/Web/HTTP/Headers/](/zh-CN/docs/Web/HTTP/Reference/Headers)
- 要创建新页面，请参阅我们的[如何创建页面](/zh-CN/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)指南中的说明。

## 步骤 4——撰写内容

- 从我们的 [HTTP 标头模板页面](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_标头参考页)开始，或者使用你从步骤 2 中找到的现有 HTTP 标头文档中的一个复制的结构。由你自己决定。
- 撰写关于新 HTTP 标头的内容。
- 确保你有以下这些部分：
  - 介绍性文本，其中第一句提到标头名称（加粗）并总结其目的。
  - 信息框，其中至少包含标头类型以及标头是否为{{Glossary("Forbidden header name", "禁止修改的标头")}}。
  - 语法框，其中包含 HTTP 标头的所有可能的指令/参数/值。
  - 一个解释这些指令/值的部分。
  - 一个示例部分，其中包含此标头的实际用例，或者显示它通常出现的位置和方式。
  - 一个规范部分，列出相关的 RFC 标准文档。
  - 一个“参见”部分，列出相关资源。

## 步骤 5——添加浏览器兼容性信息

- 如果你查看过其他 HTTP 标头页面，你会发现有一个 `\{{Compat}}` 宏，它会为你填充一个浏览器兼容性表。
- 兼容性表格页面是通过结构化数据生成的。如果你想为数据做出贡献，请查看 <https://github.com/mdn/browser-compat-data/blob/main/README.md> 中的说明，并向我们发送拉取请求。

## 步骤 6——更新 HTTP 标头列表

请确保你的标头在 [HTTP 标头参考概述页面](/zh-CN/docs/Web/HTTP/Reference/Headers)上的适当类别中列出。

## 步骤 7——内容审查

在创建标头页面后，请将其以拉取请求的形式提交。会自动分配我们审查团队的成员来审查你的页面。
