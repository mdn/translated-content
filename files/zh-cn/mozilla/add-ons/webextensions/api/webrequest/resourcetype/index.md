---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

此类型是代表 Web 请求中获取到的资源的上下文环境的字符串。

在 webRequest API 中它可用于[过滤](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)你希望监听的请求。例如：你可以选择只监听图像请求或脚本请求。

## 类型

此类型的值是字符串。可能的取值包括：

- `beacon`
  - : 通过 [Beacon API](/zh-CN/docs/Web/API/Beacon_API) 发送的请求。
- `csp_report`
  - : 当检测到违反策略的尝试时，发送到 {{HTTPHeader("Content-Security-Policy")}} 标头中给定的 {{CSP("report-uri")}} 的请求。
- `font`
  - : 通过 {{cssxref("@font-face")}} CSS 规则加载的 Web 字体。
- `image`
  - : 被渲染为图片的资源（除了在那些支持 `imageset` 属性的浏览器中通过该属性加载的图片资源。参见下方的浏览器兼容性）。
- `imageset`
  - : 由 {{HTMLElement("picture")}} 元素加载的图像或在 `<img>` 元素的 [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 属性中指定的图像。
- `main_frame`
  - : 加载到标签页中的顶级文档。
- `media`
  - : 由 {{HTMLElement("video")}} 或 {{HTMLElement("audio")}} 元素加载的资源。
- `object`
  - : 由 {{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 元素加载的资源。

    没有专用的 `object_subrequest` 类型的浏览器（参见下方的浏览器兼容性）也将插件发送的后续请求标记为 `object`。

- `object_subrequest`
  - : 插件发送的请求。
- `ping`
  - : 当点击超链接时，发送到超链接的 [`ping`](/zh-CN/docs/Web/HTML/Reference/Elements/a#ping) 属性中指定的 URL 的请求。

    没有专用的 `beacon` 类型的浏览器（参见下方的浏览器兼容性）也将通过 Beacon API 发送的请求标记为 `ping`。

- `script`
  - : 由 {{HTMLElement("script")}} 元素加载或在 [Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中运行的代码。
- `speculative`
  - : 在推测连接中，浏览器已确定可能很快会发出对 URI 的请求，因此它会立即启动 TCP 和/或 TLS 握手，以便在实际请求资源时更快地准备好。请注意，这种类型的连接不提供有效的标签页信息，因此请求详细信息（如 `tabId`、`frameId`、`parentFrameId` 等）不准确。
- `stylesheet`
  - : 加载的用于描述文档如何展现的 [CSS](/zh-CN/docs/Web/CSS) 样式表。
- `sub_frame`
  - : 加载到 {{HTMLElement("iframe")}} 或 {{HTMLElement("frame")}} 元素中的文档。
- `web_manifest`
  - : 为可以安装到主屏幕的网站加载的 [Web 应用清单](/zh-CN/docs/Web/Progressive_web_apps/Manifest)。
- `websocket`
  - : 通过 [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API) 发起的与服务器的连接的请求。
- `xml_dtd`
  - : 为 XML 文档加载的 [DTD](/zh-CN/docs/Glossary/Doctype)。
- `xmlhttprequest`
  - : 通过 {{domxref("XMLHttpRequest")}} 对象或通过 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 发送的请求。
- `xslt`
  - : 为转换 XML 文档加载的 [XSLT](/zh-CN/docs/Web/XML/XSLT) 样式表。
- `other`
  - : 不属于上述任何类型的资源。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#type-ResourceType) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
