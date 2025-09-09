---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

请求的资源类型。与 {{WebExtAPIRef('webRequest.ResourceType')}} 类似。

## 类型

此类型的值为字符串。可能的取值有：

- `beacon`
  - : 通过 [Beacon API](/zh-CN/docs/Web/API/Beacon_API) 发送的请求。
- `csp_report`
  - : 当检测到违反策略的尝试时，发送到 {{HTTPHeader("Content-Security-Policy")}} 标头中给定的 {{CSP("report-uri")}} 的请求。
- `font`
  - : 为 {{cssxref("@font-face")}} CSS 规则加载的网络字体。
- `image`
  - : 被渲染成图像的资源，除了在支持该类型的浏览器上的 `imageset`（请参阅下面的浏览器兼容性）。
- `imageset`
  - : 由 {{HTMLElement("picture")}} 元素加载的图像或在 `<img>` 元素的 [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 属性中给定的图像。
- `main_frame`
  - : 加载到标签页中的顶级文档。
- `media`
  - : 由 {{HTMLElement("video")}} 或 {{HTMLElement("audio")}} 元素加载的资源。
- `object`
  - : 由 {{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 元素加载的资源。

    没有专用 `object_subrequest` 类型的浏览器（请参阅下面的浏览器兼容性）还将插件发送的后续请求标记为 `object`。

- `object_subrequest`
  - : 由插件发送的请求。

- `ping`
  - : 当点击链接时，发送到链接的 [`ping`](/zh-CN/docs/Web/HTML/Reference/Elements/a#ping) 属性中给定的 URL。

    没有专用 `beacon` 类型的浏览器（请参阅下面的浏览器兼容性）还将通过 Beacon API 发送的请求标记为 `ping`。

- `script`
  - : 由 {{HTMLElement("script")}} 元素加载或在 [worker](/zh-CN/docs/Web/API/Web_Workers_API) 中运行的代码。
- `speculative`
  - : 在预测连接中，浏览器已确定可能会很快发送到 URI 的请求，因此立即开始了 TCP 或 TLS 握手，因此当实际请求资源时，它会更快地准备就绪。请注意，此类连接不提供有效的标签页信息，因此请求详情（如 `tabId`、`frameId`、`parentFrameId` 等）是不准确的。
- `stylesheet`
  - : 用于描述文档外观的 [CSS](/zh-CN/docs/Web/CSS) 样式表。
- `sub_frame`
  - : 加载到 {{HTMLElement("iframe")}} 或 {{HTMLElement("frame")}} 元素中的文档。
- `web_manifest`
  - : 为可以安装到主屏幕的网站加载的 [Web 应用清单](/zh-CN/docs/Web/Progressive_web_apps/Manifest)。
- `webbundle`
  - : 发起与服务器的连接的请求，通过 Web Bundle 或[打包的网站](https://github.com/WICG/webpackage)。
- `websocket`
  - : 通过 [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API) 发起与服务器的连接的请求。
- `webtransport`
  - : 通过 [WebTransport API](/zh-CN/docs/Web/API/WebTransport_API) 发起与服务器的连接的请求。
- `xml_dtd`
  - : 用于 XML 文档的 [DTD](/zh-CN/docs/Glossary/Doctype)。
- `xmlhttprequest`
  - : 由 {{domxref("XMLHttpRequest")}} 对象发送的请求，或通过 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 发送的请求。
- `xslt`
  - : 用于转换 XML 文档的 [XSLT](/zh-CN/docs/Web/XML/XSLT) 样式表。
- `other`
  - : 没被任何其他可用类型涵盖的资源。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

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
