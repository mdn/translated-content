---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

**Summarizer API** 通过浏览器的内部 AI 模型（不同浏览器可能有所不同）给出文本内容的摘要。

## 概念与用法

对较大文本内容进行摘要是一项常见的写作任务，而 AI 在这方面非常擅长。典型的用例包括：

- 提供整篇文章的摘要，方便读者判断是否需要阅读全文。
- 总结会议记录，帮助迟到的与会者快速了解已讨论的内容。
- 总结一组产品评论，快速传达整体情感倾向。

Summarizer API 提供了一个异步（基于 {{jsxref("Promise")}}）机制，允许网站将一段文本输入到浏览器自身的内部 AI 模型中，并根据指定的选项请求返回该文本的摘要。

这一过程依赖于 {{domxref("Summarizer")}} 接口提供的功能，分为两个步骤完成：

1. 使用 {{domxref("Summarizer.create_static", "Summarizer.create()")}} 静态方法创建一个 `Summarizer` 对象，并指定要编写的摘要类型的选项。选项包括长度、类型（例如“tldr”或要点）、格式（纯文本或 markdown）以及输入和输出语言。
   > [!NOTE]
   > 如果你想检查浏览器的 AI 模型是否支持你的偏好，可以使用 {{domxref("Summarizer.availability_static", "Summarizer.availability()")}} 静态方法进行检测。
2. 运行 {{domxref("Summarizer.summarize()")}} 实例方法以请求生成摘要。

创建 `Summarizer` 实例后，可以使用 {{domxref("Summarizer.destroy()")}} 实例方法将其移除。你还可以使用 {{domxref("AbortController")}} 取消正在进行的 `create()` 或 `summarize()` 操作。

请参见[使用 Summarizer API](/zh-CN/docs/Web/API/Summarizer_API/Using) 以了解此 API 的工作原理。

## 接口

- {{domxref("Summarizer")}} {{Experimental_Inline}}
  - : 包含 Summarizer API 的所有功能，包括检查 AI 模型可用性、创建新的 `Summarizer` 实例、使用它来生成摘要等。

## HTTP 标头

- {{httpheader("Permissions-Policy")}}；{{httpheader('Permissions-Policy/summarizer','summarizer')}} 指令
  - : 控制对 Summarizer API 的访问。如果策略明确禁止使用该 API，任何调用其方法的尝试都会因 `NotAllowedError` {{domxref("DOMException")}} 而失败。

## 安全考虑

当创建 `Summarizer` 示例时，规范要求用户最近与页面有过交互（需要[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)）。

此外，规范还通过 {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} 指令控制对 API 的访问。

## 示例

完整示例请参见[使用 Summarizer API](/zh-CN/docs/Web/API/Summarizer_API/Using)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developer.chrome.google.cn 上的[使用内置 AI 生成摘要](https://developer.chrome.google.cn/docs/ai/summarizer-api)（2025）
- chrome.dev 上的 [Web AI 演示](https://chrome.dev/web-ai-demos/)
