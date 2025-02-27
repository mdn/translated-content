---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{AddonSidebar}}

使用身份 API（identity API）以获取 [OAuth2](https://oauth.net/2/) 授权码或访问令牌，这样扩展就可以使用这一授权码或访问令牌从支持 OAuth2 访问的服务（例如 Google 或 Facebook）处访问用户数据。

不同服务提供商的 OAuth2 流程不同，因此如果想要将此 API 与特定服务提供商一并使用，请参阅相应的文档。例如：

- [Google](https://developers.google.cn/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

身份 API 提供了 {{WebExtAPIRef("identity.launchWebAuthFlow()")}} 函数。此函数将对用户进行身份验证（如果需要），并要求用户授权扩展访问数据（如果需要）。函数完成后将会返回一个访问令牌或授权码（具体取决于服务提供商）。

之后扩展需要完成剩余的 OAuth2 流程以获取经过验证的访问令牌，然后就使用该令牌根据用户的授权通过 HTTPS 请求访问用户的数据。

要使用此 API，你必须预先取得“identity”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 设置

在发布扩展之前，你需要进行一些设置。

### 获取重定向 URL

[重定向 URL](https://www.oauth.com/oauth2-servers/redirect-uris/) 代表着 {{WebExtAPIRef("identity.launchWebAuthFlow()")}} 的端点，即会将包含访问令牌或授权码传递给扩展的 URL。浏览器会从重定向 URL 中直接提取获得结果，而不会加载其响应。

你可以调用 {{WebExtAPIRef("identity.getRedirectURL()")}} 来获取重定向 URL。此函数从附加组件的 ID 派生出一个重定向 URL。为了简化测试，你应该使用 [`browser_specific_settings`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键显式地设置附加组件的 ID（否则你每次[临时安装扩展](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)都会得到一个不同的重定向 URL）。

{{WebExtAPIRef("identity.getRedirectURL()")}} 会返回一个 URL（其域名固定，而其子域名将从附加组件的 ID 派生而来）。一些 OAuth 服务器（例如 Google）只接受具有验证所有权的域名作为重定向 URL。由于虚拟域名无法由编写扩展的开发者控制，因此默认域名并不总是可用。

不过，环回地址也是一个可以接受的替代方案，它也不需要进行域名验证（基于 [RFC 8252，第 7.3 节](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)）。从 Firefox 86 开始，允许格式为 `http://127.0.0.1/mozoauth2/[identity.getRedirectURL() 返回的 URL 的子域名]` 的环回地址作为重定向 URL 的值。

> [!NOTE]
> 从 Firefox 75 开始，你必须使用 {{WebExtAPIRef("identity.getRedirectURL()")}} 返回的重定向 URL。早期版本允许你提供任何重定向 URL。
>
> 从 Firefox 86 开始，你也可以使用上述的特殊环回地址。

你将在以下两个地方中用上这一重定向 URL：

- 在将扩展注册为 OAuth2 客户端时提供它。
- 将其作为 `url` 实参对应的 URL 形参传递给 `identity.launchWebAuthFlow()` 时。

### 注册你的扩展

在将 OAuth2 与服务提供商一起使用之前，你必须将扩展注册为服务提供商的 OAuth2 客户端。

这通常是特定于服务提供商的，但通常意味着在提供商的网站上为你的扩展创建一个条目。在此过程中，你需要提供你的重定向 URL 并获得一个客户端 ID（有时也可能是一个密钥）。你需要将这两者都传递给 {{WebExtAPIRef("identity.launchWebAuthFlow()")}}。

## 函数

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : 获取重定向 URL。
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : 启动 Web 认证流程（WAF）。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.identity`](https://developer.chrome.google.cn/docs/extensions/reference/api/identity) API。

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
