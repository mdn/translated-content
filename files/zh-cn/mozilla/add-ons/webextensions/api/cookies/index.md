---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

使扩展能够获取和设置 cookie，并在其更改时得到通知。

## 权限

要使用此 API，扩展必须在其 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中指定“cookies” [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)，以及针对希望访问 cookie 的任何站点的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。扩展可以读取或写入任何可以被与主机权限匹配的 URL 读取或写入的 cookie。例如：

- `http://*.example.com/`
  - : 拥有此主机权限的扩展可以：
    - 读取 `www.example.com` 的任何路径下的非安全 cookie。
    - 在 `www.example.com` 的任何路径下写入安全或非安全 cookie。

    它*不能*：
    - 读取 `www.example.com` 的安全 cookie。

- `http://www.example.com/`
  - : 拥有此主机权限的扩展可以：
    - 读取 `www.example.com` 的任何路径下的非安全 cookie。
    - 读取 `.example.com` 的任何路径下的非安全 cookie。
    - 在 `www.example.com` 的任何路径下写入安全或非安全 cookie。
    - 在 `.example.com` 的任何路径下写入安全或非安全 cookie。

    它*不能*：
    - 读取或写入 `foo.example.com` 的 cookie。
    - 读取或写入 `foo.www.example.com` 的 cookie。

- `*://*.example.com/`
  - : 拥有此主机权限的扩展可以：
    - 读取或写入任何路径下 `www.example.com` 的安全或非安全 cookie。

## 跟踪保护

跟踪器使用第三方 Cookie，即由与你当前所在网站不同的网站设置的 Cookie，来识别你访问的网站。例如：

1. 你访问 `a-shopping-site.com`，该网站使用 `ad-tracker.com` 在网络上投放广告。`ad-tracker.com` 设置了一个与 `ad-tracker.com` 域相关联的 Cookie。当你在 `a-shopping-site.com` 上时，`ad-tracker.com` 会接收到你浏览的产品信息。
2. 现在你访问了 `a-news-site.com`，该网站也使用 `ad-tracker.com` 投放广告。`ad-tracker.com` 读取其 Cookie，并利用从 `a-shopping-site.com` 收集的信息来决定向你显示哪些广告。

Firefox 包含拦截跟踪的特性。这些特性会分隔 cookie，以使跟踪器无法关联所访问的网站。因此，在上述示例中，当访问 `a-shopping-site.com` 时，`ad-tracker.com` 无法看到在 `a-news-site.com` 上创建的 cookie。这种保护的首次实现是第一方隔离，现在正在被[动态分区](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#动态分区)取代。

> [!NOTE]
> 第一方隔离和动态分区不会同时生效。如果用户或扩展程序启用了第一方隔离，它将优先于动态分区。然而，当私密浏览使用动态分区时，普通浏览可能不会分隔 cookie。有关详细信息，请参阅 [Firefox 中分区的状态](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#firefox_中分区的状态)。

### 存储分区

在使用[动态分区](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#动态分区)时，Firefox 通过顶级站点分隔 JavaScript API 可访问的存储，同时为了满足常见用例而提供适当的对未分区的存储的访问。此功能正在逐步推出。有关实施详细信息，请参阅 [Firefox 中分区的状态](/zh-CN/docs/Web/Privacy/Guides/State_Partitioning#firefox_中分区的状态)。

存储分区的键由顶级{{glossary("Site","网站")}}的 URL 构成，当动态分区处于激活状态时，键值通过 cookies API 中的 `partitionKey.topLevelSite` 属性获得，例如，`partitionKey: {topLevelSite: "http://site"}`。

通常，顶级文档位于未分区的存储中，而第三方 iframe 位于分区存储中。如果无法确定分区键，则使用默认值（未分区的存储）。例如，虽然所有 HTTP(S) 站点都可以用作分区键，但 `moz-extension:-` URL 不能。因此，Firefox 扩展文档中的 iframe 不使用分区存储。

默认情况下，{{WebExtAPIRef("cookies.get()")}}、{{WebExtAPIRef("cookies.getAll()")}}、{{WebExtAPIRef("cookies.set()")}} 和 {{WebExtAPIRef("cookies.remove()")}} 用于未分区的存储中的 cookie。要在这些 API 中使用分区存储中的 cookie，必须设置 `partitionKey` 中的 `topLevelSite`。唯一的例外是 `getAll`，其中设置 `partitionKey` 而不设置 `topLevelSite` 返回分区存储和未分区的存储中的 cookie。{{WebExtAPIRef("cookies.onChanged")}} 对扩展程序可以访问的任何 cookie 都会触发，包括分区存储中的 cookie。为确保修改正确的 cookie，扩展应从事件中读取 `cookie.partitionKey` 属性，并将其值传递给 {{WebExtAPIRef("cookies.set()")}} 和 {{WebExtAPIRef("cookies.remove()")}}。

### 第一方隔离

当第一方隔离开启时，cookie 由用户访问的原始页面的域来限定（基本上是用户在 URL 栏中看到的域，也称为”第一方域“）。

用户可以通过调整浏览器的配置来启用第一方隔离，扩展可以使用 {{WebExtAPIRef("privacy")}} API 中的{{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} 这个设置来启用第一方隔离。请注意，在 [Tor 浏览器](https://www.torproject.org/)中，默认情况下启用了第一方隔离。

在 `cookies` API 中，第一方域使用 `firstPartyDomain` 属性表示。在第一方隔离开启时设置的所有 cookie 都将该属性设置为原始页面的域。在上述示例中，一个 cookie 的域为 `a-shopping-site.com`，另一个为 `a-news-site.com`。当第一方隔离关闭时，由网站设置的所有 cookie 都将该属性设置为空字符串。

{{WebExtAPIRef("cookies.get()")}}、{{WebExtAPIRef("cookies.getAll()")}}、{{WebExtAPIRef("cookies.set()")}} 和 {{WebExtAPIRef("cookies.remove()")}} API 都接受 `firstPartyDomain` 选项。

当第一方隔离开启时，你必须提供此选项，否则 API 调用将失败并返回一个被拒绝的 promise。对于 `get()`、`set()` 和 `remove()`，你必须传递一个字符串值。对于 `getAll()`，你也可以在此处传递 `null`，这将获取所有 cookie，无论它们是否具有非空值的 `firstPartyDomain`。

当第一方隔离关闭时，`firstPartyDomain` 参数是可选的，并且默认为一个空字符串。可以使用非空字符串来检索或修改第一方隔离 cookie。同样，将 `null` 作为 `firstPartyDomain` 传递给 `getAll()` 将返回所有 cookie。

## 类型

- {{WebExtAPIRef("cookies.Cookie")}}
  - : 表示有关 HTTP cookie 的信息。
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : 表示浏览器中的一个 cookie 存储。
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : 表示 cookie 更改的原因。
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : 表示 cookie 的同站状态。

## 方法

- {{WebExtAPIRef("cookies.get()")}}
  - : 检索有关单个 cookie 的信息。
- {{WebExtAPIRef("cookies.getAll()")}}
  - : 检索与给定一组过滤器匹配的所有 cookie。
- {{WebExtAPIRef("cookies.set()")}}
  - : 使用给定的 cookie 数据设置 cookie；如果存在等效的 cookie，则可能会覆盖它们。
- {{WebExtAPIRef("cookies.remove()")}}
  - : 按名称删除 cookie。
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : 列出所有现有的 cookie 存储。

## 事件处理器

- {{WebExtAPIRef("cookies.onChanged")}}
  - : 当设置或移除 cookie 时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies)。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
