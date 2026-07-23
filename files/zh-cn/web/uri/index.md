---
title: URI
slug: Web/URI
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

**统一资源标识符**（URI）用于标识 Web 上的“资源”。URI 通常用作 [HTTP](/zh-CN/docs/Web/HTTP) 请求的目标，在这种情况下，URI 代表物理资源的位置，如文档、照片、二进制数据。最常见的 URI 类型是统一资源定位符（{{glossary("URL")}}），它被称为 _Web 地址_。

URI 在其他地方使用时（如 HTML `<a>` 链接的 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/a#href)），可用于触发获取资源以外的行为，包括打开电子邮件客户端、发送文本信息或执行 JavaScript。

## 参考

[URI 参考](/zh-CN/docs/Web/URI/Reference)详细介绍了构成 URI 的各个组成部分。

- [方案](/zh-CN/docs/Web/URI/Reference/Schemes)
  - ：URI 的第一部分，位于 `:` 字符之前，用于指定浏览器必须使用的协议以获取该资源。
- [权威](/zh-CN/docs/Web/URI/Reference/Authority)
  - ：位于方案之后、路径之前的段落。它最多可包含三个部分：`user` 信息、`host` 和 `port`。
- [路径](/zh-CN/docs/Web/URI/Reference/Path)
  - ：位于权威部分之后的段落。包含数据（通常以分层形式组织），用于在 URI 的方案和命名权威范围内标识资源。
- [查询](/zh-CN/docs/Web/URI/Reference/Query)
  - ：位于路径之后的部分。包含非分层数据，用于结合路径组件中的数据，在 URI 的方案和命名权威范围内标识资源。
- [片段](/zh-CN/docs/Web/URI/Reference/Fragment)
  - ：URI 末尾以 `#` 字符开头的可选部分。用于标识资源的特定部分，例如文档中的某个章节或视频中的某个位置。

## 指南

[URI 指南](/zh-CN/docs/Web/URI/Guides) 可帮助你在 Web 上处理 URI。

- [www 与非 www URL 的选择](/zh-CN/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - ：关于网站在何种情况下应在 URL 中使用 `www.` 前缀的指导（`www.example.com` 与 `example.com` 的区别）。

## 规范

{{Specifications}}

## 参见

- [什么是 URL？](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
