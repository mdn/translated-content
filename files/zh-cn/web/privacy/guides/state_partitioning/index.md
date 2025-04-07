---
title: 状态分区
slug: Web/Privacy/Guides/State_Partitioning
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**状态分区**是 Mozilla 发起的一项广泛努力，旨在重新设计 Firefox 如何管理客户端状态（即存储在浏览器中的数据），以减少网站通过滥用状态进行跨站点跟踪的能力，例如通过[第三方 cookie](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies)。

该努力旨在通过为用户访问的每个网站提供一个隔离的存储位置来实现这一目标。本文档概述了该机制，列出了受影响的 API，并解释了如何调试受影响的网站。

从 Firefox 103 开始，默认启用状态分区。

## 缘由

## 使用共享状态跨站点跟踪

浏览器传统上根据资源的源（或有时是注册域）来作键标识客户端状态。例如，从 `https://example.com/hello.html` 加载的 iframe 可用的 cookie、localStorage 对象和缓存将由 example.com 作键标识。无论浏览器当前是从该域加载*第一方*资源还是嵌入的*第三方*资源，都是如此。跟踪器利用这种跨站点状态来存储用户标识符，并跨多个网站访问。下面的示例说明了 `example.com` 如何使用其跨站点状态（这里是 cookie）在其自身以及 `A.example` 和 `B.example` 之间跟踪用户。

![跨站点状态示例](example-cross-site-state.png)

### 过去阻止跨站点跟踪的方法

Firefox 过去的 cookie 策略试图通过阻止某些存储 API（例如，cookie 和 localStorage）的访问来缓解跟踪问题，这些策略在特定条件下对特定域进行限制。例如，我们的“阻止所有第三方 cookie”策略将阻止所有域在第三方上下文中访问某些存储 API。我们当前[默认的 cookie 策略](/zh-CN/docs/Web/Privacy/Guides/Storage_Access_Policy)仅在第三方上下文中阻止被分类为跟踪器的域访问。

## 状态分区

状态分区是防止跨站点跟踪的不同方法。Firefox 不是通过在第三方上下文中阻止访问特定状态 API 来实现这一点，而是为每个顶级网站提供嵌入资源的单独存储桶。更具体地说，Firefox 使用资源加载的[源](https://html.spec.whatwg.org/multipage/browsers.html#origin)和顶级[站点](https://html.spec.whatwg.org/multipage/browsers.html#site)共同标记所有客户端状态。在大多数情况下，顶级站点是用户访问的顶级页面的方案（scheme）和 {{Glossary("eTLD", "eTLD+1")}}。

在下面的例子中，`example.com` 嵌入在 `A.example` 和 `B.example` 中。然而，由于存储被分区，存在三个不同的存储桶（而不是一个）。跟踪器仍然可以访问存储，但由于每个存储桶以不同的顶级站点标识，它在 A 上可以访问的数据将与 B 上的不同。这将阻止跟踪器在直接访问时在其 cookie 中存储标识符，然后在嵌入其他网站时检索该标识符。

![状态分区示例](example-state-partitioning.png)

## 标准化

[隐私社区组](https://privacycg.github.io/)有一个关于[客户端存储分区](https://privacycg.github.io/storage-partitioning/)的工作项。这作为对受影响的各个标准中存储分区标准化工作的概述。我们打算使我们的状态分区实现与该工作项被标准化的保持一致。

### Firefox 中的分区状态

- [**网络分区**](#network_partitioning)：自 Firefox 85 起默认为所有用户启用。
- [**动态分区**](#dynamic_partitioning)：自 Firefox 103 起默认为所有用户启用。在此之前：
  - 自 Firefox 86 起：为启用了[“严格”隐私保护](https:///kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection)的用户启用。
  - 自 Firefox 90 起：在隐私浏览中启用。

## 静态分区

### 存储分区

为了防止 JavaScript 可访问的存储 API 被用于跨站点跟踪，可访问存储按顶级站点进行了分区。这意味着，通常情况下，嵌入在一个顶级站点中的第三方无法访问存储在另一个顶级站点下的数据。

### 存储 API

- [localStorage](/zh-CN/docs/Web/API/Window/localStorage)
- [sessionStorage](/zh-CN/docs/Web/API/Window/sessionStorage)
- [DOM 缓存](/zh-CN/docs/Web/API/Cache)
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
- [Broadcast Channel](/zh-CN/docs/Web/API/BroadcastChannel)
- [Shared Worker](/zh-CN/docs/Web/API/SharedWorker)
- [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)

### 网络分区

与网络相关的 API 不应该用于存储网站数据，但它们可以被[滥用](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/)进行跨站点跟踪。因此，以下网络 API 和缓存将按顶级站点永久分区。

> [!NOTE]
> 网络分区是永久性的。网站无法控制或放宽这些限制。

### 网络 API

- [HTTP 缓存](/zh-CN/docs/Web/HTTP/Guides/Caching)
- 图像缓存
- favicon 缓存
- 连接池
- 样式表缓存
- [DNS](/zh-CN/docs/Glossary/DNS)
- HTTP 身份验证
- [Alt-Svc](/zh-CN/docs/Web/HTTP/Reference/Headers/Alt-Svc)
- 预连接
- 字体与字体缓存
- [HSTS](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- OCSP
- 中间 CA 缓存
- TLS 客户端证书
- TLS 会话标识符
- 预获取
- 预连接
- [CORS 预检](/zh-CN/docs/Glossary/Preflight_request)缓存
- WebRTC 设备 ID

## 动态分区

一般来说，如果可访问存储按顶级站点分区，只要支持存储访问 API，仍然可以授予第三方未分区 cookie 的访问权限：

- 使用[存储访问 API](#存储访问_api)。
- 自动进行，例如为第三方提供联合登录。

关于自动授权的详细信息请参阅[存储访问启发式方法](#存储访问启发式方法)部分。

### 动态分区的 API

- [cookie](/zh-CN/docs/Web/API/Document/cookie)

### 存储访问启发式方法

为了提高 Web 兼容性，Firefox 当前包括一些启发式方法，自动授予用户交互的第三方无分区访问 cookie 的权限。这些启发式方法旨在允许 Web 上一些常见的第三方集成继续运行。

> [!WARNING]
> 存储访问启发式方法是一种过渡特性，旨在防止网站损坏。它们不应被当前和未来的 Web 开发依赖。

#### 开启者启发式方法

- 当一个分区的第三方打开一个可以访问原始文档的 [opener](/zh-CN/docs/Web/API/Window/opener) 的弹出窗口时，该第三方会在 30 天内被授予对其嵌入方的存储访问权限。
- 当一个第一方 `a.example` 打开第三方弹出窗口 `b.example` 时，`b.example` 被授予对 `a.example` 的第三方存储访问权限，为期 30 天。

> [!NOTE]
> 对于滥用这些启发式方法进行跟踪的第三方，我们可能需要用户与弹出窗口进行交互，然后才授予存储访问权限。

#### 重定向启发式方法

- 如果一个站点 `b.example` 重定向到 `a.example`，则 `b.example` 将在其嵌入器 `a.example` 获得存储访问权限，前提是 `a.example` 和 `b.example` 在最近 10 分钟内均已被访问并进行了交互。此存储访问权限将被授予 15 分钟。
- 如果一个跟踪器 `tracker.example`（根据增强跟踪保护分类）重定向到一个非跟踪器 `a.example` 且 `tracker.example` 在过去 45 天内作为第一方接收了用户交互，`tracker.example` 将被授予对 `a.example` 的存储访问权限 15 分钟。

## 存储访问 API

第三方框架可以使用 [document.requestStorageAccess](/zh-CN/docs/Web/API/Document/requestStorageAccess) 通过[存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API) 请求对 cookie 的非分区访问。一旦获得授权，请求方将能够访问其所有的第一方 cookie（即，如果作为第一方访问时可以访问的 cookie）。

> [!WARNING]
> 当存储访问被授予时，可能仍然存在对分区存储的引用。然而，网站不应依赖于同时使用分区和非分区 cookie 的能力。

## 调试

我们鼓励网站所有者测试他们的网站，特别是那些依赖第三方内容集成的网站。Firefox 中有几个功能可以简化测试过程。

### 日志

以下是与第三方上下文中的存储交互时记录到 Web 控制台的消息概述。在以下示例中，`a.example` 是顶级站点，嵌入第三方框架 `b.example`。

| 原因                                                                                                        | 控制台消息                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 第三方框架的存储是分区的                                                                                    | Partitioned cookie or storage access was provided to "b.example" because it is loaded in the third-party context and storage partitioning is enabled.（为“b.example”提供了分区的 cookie 或存储访问，因为其在第三方上下文中加载并且启用了存储分区。） |
| 通过[存储访问启发式方法](#存储访问启发式规则)授予对未分区 cookie 的访问权限                                 | Storage access automatically granted for First-Party isolation "b.example" on "a.example".（为“a.example”上的第一方隔离“b.example”自动授予存储访问权限。）                                                                                           |
| 通过 [StorageAccessAPI](/zh-CN/docs/Web/API/Document/requestStorageAccess) 授予对未分区 cookie 的访问权限。 | Storage access granted for origin "b.example" on "a.example".（已为来源“b.example”授予在“a.example”上的存储访问权限。）                                                                                                                              |

### 清除第三方存储访问权限

如果第三方 iframe 被授予访问父上下文的存储权限，Firefox 会设置该权限。要撤销访问权限，你可以通过[站点信息面板](https://support.mozilla.org/zh-CN/kb/site-information-panel)中的权限部分下的“跨站点 cookie”来清除该权限。

### 测试首选项

> [!WARNING]
> 请在单独的 Firefox 配置文件中设置这些首选项，或者在测试后重置它们。

#### 禁用 Web 兼容性特性

将 `privacy.antitracking.enableWebcompat` 设置为 `false` 将**禁用**所有 ETP 和状态分区 Web 兼容性特性。禁用这些特性在测试时很有用，以确保你的网站与 Firefox 中的状态分区机制完全兼容，并且不依赖临时启发式方法。

该首选项禁用的特性包括：

- [存储访问启发式方法](#存储访问启发式方法)：未分区的 cookie 访问只能通过存储访问 API 获得。
- 自动存储访问授权：[document.requestStorageAccess](/zh-CN/docs/Web/API/Document/requestStorageAccess) 将始终提示用户。
- [SmartBlock 的“用户选择加入后解除屏蔽”特性](https://blog.mozilla.org/security/2021/07/13/smartblock-v2/)，允许用户在与某些追踪器互动时启用这些追踪器。
- 通过跳过列表机制授予网站的任何临时[反跟踪例外](https://wiki.mozilla.org/Security/Anti_tracking_policy#Temporary_Web_Compatibility_Interventions)。

#### 禁用启发式方法

以下选项可以通过[配置编辑器](https://support.mozilla.org/zh-CN/kb/about-config-editor-firefox)单独禁用特定存储访问启发式算法：

- 启用/禁用[重定向启发式方法](#重定向启发式方法)：`privacy.restrict3rdpartystorage.heuristic.recently_visited`、`privacy.restrict3rdpartystorage.heuristic.redirect`
- 启用/禁用 [window open 启发式方法](#开启者启发式方法)：`privacy.restrict3rdpartystorage.heuristic.window_open`、`privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction`

#### 禁用网络分区

网络分区可以通过 `privacy.partition.network_state` 选项禁用。

#### 禁用动态状态分区

要为所有站点禁用动态存储分区，可以使用 `network.cookie.cookieBehavior` 选项：

| 值  | 描述                                 |
| --- | ------------------------------------ |
| 5   | 拒绝（已知）跟踪器并分区第三方存储。 |
| 4   | 仅拒绝跟踪器（存储分区已禁用）。     |
| 0   | 允许所有。                           |

#### 豁免特定来源的分区

动态状态分区也可以通过 `privacy.restrict3rdpartystorage.skip_list` 选项为特定来源禁用。此选项包含一个逗号分隔的要豁免的来源列表。选项值应遵循以下格式：`first-party_origin_1,third-party_origin_1;first-party_origin_2,third-party_origin_2;...`。

例如，要禁用 `tracker.example` 上的分区或 `example.com` 上的 `social.example`，你需要将首选项设置为以下内容：

```plain
https://example.com,https://tracker.example;https://news.example,https://social.example
```

你可以将 `*` 用作通配符，表示第一方或第三方。例如，要禁用 `videos.example` 在所有站点上的分区，或者禁用 `unpartitioned.example` 上的所有分区，你可以将首选项设置为以下内容：

```plain
*,https://videos.example;unpartitioned.example,*
```
